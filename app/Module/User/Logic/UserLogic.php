<?php

namespace App\Module\User\Logic;

use App\RPC\HttpRPC\PassportServiceRpc;
use HyperfPlus\Log\StdoutLog;
use HyperfPlus\Util\Util;
use Hyperf\Di\Annotation\Inject;

class UserLogic
{
    /**
     * @Inject()
     * @var PassportServiceRpc
     */
    private $passportServiceRpc;

    /**
     * 查找
     *
     * @param $requestData
     * @return mixed
     */
    public function search($requestData)
    {
         return $this->passportServiceRpc->searchUser($requestData);
    }

    /**
     * 创建
     *
     * @param $requestData
     * @return mixed
     */
    public function create($requestData)
    {
        return $this->passportServiceRpc->createUser($requestData);
    }

    /**
     * 更新
     *
     * @param $requestData
     * @return mixed
     */
    public function update($requestData)
    {
        return $this->passportServiceRpc->updateUser($requestData);
    }

    /**
     * 详情
     *
     * @param $requestData
     * @return mixed
     */
    public function find($requestData)
    {
        return $this->passportServiceRpc->findUser($requestData);
    }
}