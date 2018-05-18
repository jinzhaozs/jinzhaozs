<?php
/**
 * 前天联系我们控制器 Index.php
 * ============================================================================
 * 许可声明：这是一个开源程序，未经许可不得将本软件的整体或任何部分用于商业用途及再发布。
 * ============================================================================
 * Author: yangxuya
 * Date: 2018年5月14日
*/
namespace app\shopcom\controller;

use \think\Request;

class Lianxiwm extends \app\shopcom\controller\Base
{
    //查询
    public function index()
    {
       //获取商家id
        $comid = input('comid');
        $whereshangjia['id'] = $comid;
        //获取商家信息
        $shopcom = $this->uri("shop",$whereshangjia);
        // dump($shopcom);
        $this->assign("comid",$comid);
        $this->assign("shopcom",$shopcom);
        $this->assign("pr",db('province')->select());//省信息
        return $this->fetch();
    }
    
}
