<?php

namespace App\RPC\HttpRPC;

use Hyperf\Di\Annotation\Inject;
use HyperfPlus\Http\Client;
use HyperfPlus\RPC\HttpRPC;
use HyperfPlus\Constant\Constant;

class ContentServiceRpc extends HttpRPC
{
    public $service;

    /**
     * @Inject()
     * @var Client
     */
    public $client;

    public function __construct()
    {
        $this->service = env('CONTENT_SERVICE_URI');
    }
}