<?php
namespace app\admin\controller;

use think\Controller;

class Login extends Controller
{
	//登陆
    public function index()
    {
        return $this->fetch();
    }
    //执行登陆
    public function login(){
    	echo 123;
    }
}
