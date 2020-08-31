<?php

namespace App\View\Login\Action;

use Hyperf\View\RenderInterface;

/**
 * 登录页相关视图渲染
 *
 * @author duiying <wangyaxiandev@gmail.com>
 * @package App\View\Login\Action
 */
class LoginAction
{
    public function login(RenderInterface $render)
    {
        return $render->render('login/login');
    }
}