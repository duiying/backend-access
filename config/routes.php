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

    Router::get('menu/search','App\View\Menu\Action\SearchAction@handle');                  // 菜单列表
    Router::get('menu/create', 'App\View\Menu\Action\CreateAction@handle');                 // 菜单创建
    Router::get('menu/update','App\View\Menu\Action\UpdateAction@handle');                  // 菜单更新
}, ['middleware' => [PjaxMiddleware::class]]);

/**
 * 接口相关路由
 */
Router::addGroup('/v1/',function () {
    Router::get('test', 'HyperfPlus\Controller\IndexController@handle');

    Router::get('user/search', Route::decoration('User\Action\SearchAction'));              // 管理员列表
    Router::get('user/find', Route::decoration('User\Action\FindAction'));                  // 管理员详情
    Router::post('user/create', Route::decoration('User\Action\CreateAction'));             // 管理员创建
    Router::post('user/update', Route::decoration('User\Action\UpdateAction'));             // 管理员更新
    Router::post('user/update_field', Route::decoration('User\Action\UpdateFieldAction'));  // 管理员更新字段

    Router::get('menu/search', Route::decoration('Menu\Action\SearchAction'));              // 菜单列表
    Router::post('menu/create', Route::decoration('Menu\Action\CreateAction'));             // 菜单创建
    Router::post('menu/update', Route::decoration('Menu\Action\UpdateAction'));             // 菜单更新
    Router::get('menu/find', Route::decoration('Menu\Action\FindAction'));                  // 菜单详情
    Router::post('menu/update_field', Route::decoration('Menu\Action\UpdateFieldAction'));  // 菜单更新字段
}, ['middleware' => [CorsMiddleware::class, ValidationMiddleware::class]]);
