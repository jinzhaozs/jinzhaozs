<?php
/**
 * 前天主页控制器 Index.php
 * ============================================================================
 * 许可声明：这是一个开源程序，未经许可不得将本软件的整体或任何部分用于商业用途及再发布。
 * ============================================================================
 * Author: yangxuya
 * Date: 2018年4月13日
*/
namespace app\shopcom\controller;

use \think\Request;

class Index extends \app\shopcom\controller\Base
{
	//查询
    public function index()
    {
        //获取商家id
        $comid = input('comid');  
        $where['id'] = $comid;
        //获取商家信息
        $shopcom = $this->uri("shop",$where);
        //获取装修案例
        $plan = $this->uri("plan",$where);
        //获取装修工地
        $struction = $this->uri("plan",$struction);
        // dump($shopcom);
        $this->assign("shopcom",$shopcom);
        return $this->fetch();
    }
    //测试
    public function aa(){
        return $this->fetch();
    }
}
