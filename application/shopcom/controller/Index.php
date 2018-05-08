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
    //
    public function index()
    {
        //获取商家id
        $comid = input('comid');  
        $where['id'] = $comid;
        //获取服务区域列表
        $com_fuwuqy = db('com_fuwuqy')->select();
        //获取商家信息
        $shopcom = $this->uri("shop",$where);
        //获取公司的服务区域
        $arrayfu = array();
        //去除 最后，号 以，分割为数组
        $fuquyu = explode(",", substr($shopcom['0']['com_fuqy'],0,strlen($shopcom['0']['com_fuqy'])-1));
        foreach ($fuquyu as $key => $value) {
            foreach($com_fuwuqy as $k => $v){
                if($v['qycode'] == $value){
                    $arrayfu[]['name'] = $v['qyname'];
                }
            }
        } 
        //获取装修案例
        $whplan['comid']= input('comid');
        $whplan['schedule']=5;
        $plan = $this->uri("plan",$whplan);
        $plancount = db("plan")->where($whplan)->count();

      

        //获取评论总数
        $whpla['comid']= input('comid');
        $pingluncount = db("com_evaluate")->where($whpla)->count();
       
        //获取文章
        $wheres['ischeck']=1;
        $wheres['ashop']=$comid;
        $istop['istop']=1;
        $istop['ischeck']=1;
        $istop['ashop']=$comid;
        $article = $this->wen("article",$wheres);
        $articlecount=db("article")->where($wheres)->count();
        $articletop=db("article")->where($istop)->find();
        //设计师
        $whid['shop']=$comid;
        $designer=$this->des("designer",$whid);
       $shejishicount = db("designer")->where($whid)->count();
      //工地
        $gong['comid']=$comid;
        $gong['schedule']=array('neq',5);
         $shig = $this->uri("plan",$gong);
         $shigcount = db("plan")->where($gong)->count();
        // 轮播图
        $wherelbt['comid'] = input('comid');
        $lbt = $this->uri("shop_lbt",$wherelbt);
        
        $this->assign("lbt",$lbt);//轮播图信息
        $this->assign("plan",$plan);//装修案例

        $this->assign("plancount",$plancount);//装修案例总数
        $this->assign("shejishicount",$shejishicount);//设计师总数pingluncount
        $this->assign("pingluncount",$pingluncount);//评论总数
        $this->assign("arrayfu",$arrayfu);//服务区域
        $this->assign("designer",$designer);
        $this->assign("shopcom",$shopcom);
        $this->assign("article",$article);//文章
        $this->assign("articlecount",$articlecount);//文章总数
        $this->assign("articletop",$articletop);
         $this->assign("shig",$shig);//施工工地
         $this->assign("shigcount",$shigcount);//工地总数
        return $this->fetch();
    }
    //测试
    public function aa(){
        return $this->fetch();
    }
}
