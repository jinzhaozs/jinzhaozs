<?php
/**
 * 前天主页控制器 Index.php
 * ============================================================================
 * 许可声明：这是一个开源程序，未经许可不得将本软件的整体或任何部分用于商业用途及再发布。
 * ============================================================================
 * Author: yangxuya
 * Date: 2018年5月2日
*/
namespace app\shopcom\controller;

use \think\Request;

class Huodong extends \app\shopcom\controller\Base
{
    //查询
    //
    public function index()
    {
        //获取商家id
        $comid = input('comid');
        $time=date("Y-m-d");
        $where['id'] = $comid;
        $whid['comid']=$comid;
        $whid['zhong_time']= array('gt',$time);
        $whid['kai_time']= array('lt',$time);
        //获取服务区域列表
        //获取商家信息
        $request = Request::instance();
        $urlcanshu = $request->param();
        $grade = input('grade');
        $shopcom = $this->uri("shop",$where);
        $act=db("com_act")->field("id,jianjie,actlogo,shuoming,kai_time,zhong_time,lianxir,lxrtel,comid")->where($whid)->paginate(10,false,['query'=>$urlcanshu,]);
         $page=$act->render();
         $this->assign("page",$page);
        $this->assign("act",$act);
        $this->assign("shopcom",$shopcom);
        $this->assign("comid",$comid);
       
        return $this->fetch();
    }
    
    //测试
    public function aa(){
        return $this->fetch();
    }
}
