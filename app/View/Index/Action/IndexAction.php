<?php

namespace App\View\Index\Action;

use Hyperf\View\RenderInterface;

class IndexAction
{
    public function index(RenderInterface $render)
    {
        return $render->render('index/index', ['name' => 'Hyperf']);
    }
}