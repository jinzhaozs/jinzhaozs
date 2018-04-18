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
        $whplan['comid']= input('comid');
        //获取装修案例
        $plan = $this->uri("plan",$whplan);
        $plancount = db("plan")->where($whplan)->count();
        // dump($plan);die;
        //获取装修工地
        $wheres['ischeck']=1;
        $wheres['ashop']=$comid;
        $article = $this->wen("article",$wheres);
        //获取文章
        $whid['shop']=$comid;
        $designer=$this->des("designer",$whid);
      
        //设计师
        // $struction = $this->uri("plan",$struction);
        // dump($shopcom);
        // 轮播图
        $wherelbt['comid'] = input('comid');
        $lbt = $this->uri("shop_lbt",$wherelbt);
        // dump($lbt);die;
        $this->assign("lbt",$lbt);//轮播图信息
        $this->assign("plan",$plan);//装修案例
        $this->assign("plancount",$plancount);//装修案例
        $this->assign("designer",$designer);
        $this->assign("shopcom",$shopcom);
        $this->assign("article",$article);
        return $this->fetch();
    }
    //测试
    public function aa(){
        return $this->fetch();
    }
}
