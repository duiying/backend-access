<?php

namespace App\Middleware;

use App\RPC\HttpRPC\PassportServiceRpc;
use Hyperf\Di\Annotation\Inject;
use Hyperf\HttpServer\Contract\RequestInterface;
use HyperfPlus\Http\Response;
use Psr\Container\ContainerInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class PassportMiddleware
{
    /**
     * @Inject()
     * @var PassportServiceRpc
     */
    private $passportServiceRpc;

    /**
     * @var ContainerInterface
     */
    protected $container;

    /**
     * @var RequestInterface
     */
    protected $request;

    /**
     * @var Response
     */
    protected $response;

    /**
     * 不需要检验 access_token 的路由
     *
     * @var string[]
     */
    private $noCheckAccessTokenMethod = [
        '/v1/user/login',
        '/view/user/login',
    ];

    public function __construct(ContainerInterface $container, Response $response, RequestInterface $request)
    {
        $this->container    = $container;
        $this->response     = $response;
        $this->request      = $request;
    }

    public function process(ServerRequestInterface $request, RequestHandlerInterface $handler): ResponseInterface
    {
        // 路由
        $requestPath    = $this->request->getUri()->getPath();

        // 不需要检验 access_token 的路由
        if (in_array($requestPath, $this->noCheckAccessTokenMethod)) $handler->handle($request);

        // 根据 access_token 检查用户权限
        $accessToken = $this->request->input('access_token');
        // 请求参数中没有 access_token，尝试从 cookie 中获取 access_token
        if (empty($accessToken)) $accessToken = $this->request->cookie('access_token');
        if (empty($accessToken)) return $this->response->error(-1, '请先登录！');

        // 检查用户 access_token 以及权限
        $this->passportServiceRpc->checkUserPermission(['access_token' => $accessToken, 'url' => $requestPath]);

        // 权限校验通过，进入下一步
        return $handler->handle($request);
    }
}