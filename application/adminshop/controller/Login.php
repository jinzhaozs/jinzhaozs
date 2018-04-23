<?php
/**
 * 前天主页控制器 Index.php
 * ============================================================================
 * 许可声明：这是一个开源程序，未经许可不得将本软件的整体或任何部分用于商业用途及再发布。
 * ============================================================================
 * Author: yangxuya
 * Date: 2018年4月13日
*/
namespace app\adminshop\controller;

use \think\Request;

use think\Session;

class Login extends \app\adminshop\controller\Base
{
	//查询
    //
    public function index()
    {
        // echo 123;die;
        return $this->fetch();
    }
    //执行登陆
    public function dologin()
   {
        $mobile   = input('post.username');
        $password = input('post.password');
        if (!$password) {
            $data = array(
                    'data' => false,
                    'code' => 208,
                    'msg'  => '请填写登录密码',
            );

            return $data;
        }

        $filter = array(
                'code' => $mobile
        );

        $user_info = uri('shop', $filter);
        if (!$user_info) {
            $data = array(
                    'data' => false,
                    'code' => 305,
                    'msg'  => '该用户未注册 !',
            );

            return $data;
        } else {
            if ($user_info[0]['pass'] != md5($password)) {
                 $data = array(
                   'data' => false,
                    'code' => 306,
                    'msg' => '密码错误 !'
                );
                return $data;
            }
        }
        //赋值
        Session::set('adminshopcode',$mobile);
        Session::set('adminshopid',$user_info[0]['id']);
        $data = array(
                'data' => true,
                'code' => 200,
                'msg'  => '登陆成功 !',
        );

        return $data;
    }
}
