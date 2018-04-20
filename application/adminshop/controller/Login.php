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

class Login extends \app\adminshop\controller\Base
{
	//查询
    //
    public function index()
    {
        // echo 123;die;
        return $this->fetch();
    }
    
}
