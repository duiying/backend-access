<?php

declare(strict_types=1);

use HyperfPlus\Route\Route;
use Hyperf\HttpServer\Router\Router;
use HyperfPlus\Middleware\CorsMiddleware;
use Hyperf\Validation\Middleware\ValidationMiddleware;
use HyperfPlus\Middleware\PjaxMiddleware;

/**
 * 首页
 */
Router::addRoute(['GET'], '/', 'App\View\Index\Action\IndexAction@index', ['middleware' => [PjaxMiddleware::class]]);

/**
 * 视图渲染相关路由
 */
Router::addGroup('/view/',function () {
    Router::get('login','App\View\Login\Action\LoginAction@login');                         // 登录页

    Router::get('user/search','App\View\User\Action\SearchAction@handle');                  // 管理员列表
    Router::get('user/create','App\View\User\Action\CreateAction@handle');                  // 管理员创建
    Router::get('user/update','App\View\User\Action\UpdateAction@handle');                  // 管理员更新
}, ['middleware' => [PjaxMiddleware::class]]);

/**
 * 接口相关路由
 */
Router::addGroup('/v1/',function () {
    Router::get('test', 'HyperfPlus\Controller\IndexController@handle');

    Router::get('user/search', Route::decoration('User\Action\SearchAction'));              // 管理员搜索
    Router::get('user/find', Route::decoration('User\Action\FindAction'));                  // 管理员详情）
    Router::post('user/create', Route::decoration('User\Action\CreateAction'));             // 管理员创建
    Router::post('user/update', Route::decoration('User\Action\UpdateAction'));             // 管理员更新
}, ['middleware' => [CorsMiddleware::class, ValidationMiddleware::class]]);
