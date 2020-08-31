<?php

namespace App\RPC\HttpRPC;

use Hyperf\Di\Annotation\Inject;
use HyperfPlus\Http\Client;
use HyperfPlus\RPC\HttpRPC;
use HyperfPlus\Constant\Constant;

class PassportServiceRpc extends HttpRPC
{
    public $service;

    /**
     * @Inject()
     * @var Client
     */
    public $client;

    public function __construct()
    {
        $this->service = env('PASSPORT_SERVICE_URI');
    }

    public function searchUser($requestData)
    {
        return $this->call($requestData, [
            'timeout'   => 1000,
            'uri'       => 'v1/user/search',
        ]);
    }

    public function createUser($requestData)
    {
        return $this->call($requestData, [
            'timeout'   => 1000,
            'uri'       => 'v1/user/create',
            'method'    => Constant::METHOD_POST
        ]);
    }

    public function updateUser($requestData)
    {
        return $this->call($requestData, [
            'timeout'   => 1000,
            'uri'       => 'v1/user/update',
            'method'    => Constant::METHOD_POST
        ]);
    }

    public function findUser($requestData)
    {
        return $this->call($requestData, [
            'timeout'   => 1000,
            'uri'       => 'v1/user/find',
        ]);
    }
}