<?php

declare(strict_types=1);

use HyperfPlus\Route\Route;

/**
 * This file is part of Hyperf.
 *
 * @link     https://www.hyperf.io
 * @document https://doc.hyperf.io
 * @contact  group@hyperf.io
 * @license  https://github.com/hyperf/hyperf/blob/master/LICENSE
 */
use Hyperf\HttpServer\Router\Router;

// 视图渲染
Router::addRoute(['GET', 'POST', 'HEAD'], '/', 'App\View\Index\Action\IndexAction@index');
