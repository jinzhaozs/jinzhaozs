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

class Shejishi extends \app\shopcom\controller\Base
{
	//查询
    //
    public function index()
    {
        //获取商家id
        $comid = input('comid');  
        $where['id'] = $comid;
        $whid['shop']=$comid;
        //获取服务区域列表
        //获取商家信息
        $request = Request::instance();
        $urlcanshu = $request->param();
        $grade = input('grade');
        if($grade)
        {
            $whid['grade']=$grade;
        }

        $shopcom = $this->uri("shop",$where);
        $designer=db("designer")->field("id,dname,jobage,davatar,grade")->where($whid)->paginate(30,false,['query'=>$urlcanshu,]);
         $page=$designer->render();
         $designer = $designer->all();
          foreach($designer as $k=>$v){
            $map['frenyuan'] = $v['id'];
               $an=db('plan')->where($map)->select();
               $designer[$k]['an']=count($an);
           }
         $this->assign("page",$page);
        $this->assign("designer",$designer);
        $this->assign("shopcom",$shopcom);
        $this->assign("comid",$comid);
        $this->assign("grade",$grade);
        return $this->fetch();
    }
    public function xiangqing()
    {
        //获取商家id
        $comid = input('comid');
        $id= input('sjid');
        $where['id'] = $comid;
        $whid['shop']=$comid;
        $whid['id']=$id;
        $frenyuan['frenyuan']=$id;

        //获取服务区域列表
        //获取商家信息
         $grade = input('grade');
        if($grade)
        {
            $whid['grade']=$grade;
        }

        $shopcom = $this->uri("shop",$where);
        $designer=db("designer")->field("id,dname,jobage,davatar,grade,idea,intro")->where($whid)->find();
         
            $map['frenyuan'] = $designer['id'];
               $an=db('plan')->where($map)->select();
               $designer['an']=count($an);
           
        $plan=db("plan")->where($frenyuan)->select();
        
        $count=count($plan);
        foreach($plan as $k=>$v){
            $pl['planid'] = $v['id'];
            $an1=db('plan_canting')->where($pl)->count();
            $an2=db('plan_chufang')->where($pl)->count();
            $an3=db('plan_ertongjian')->where($pl)->count();
            $an4=db('plan_keting')->where($pl)->count();
            $an5=db('plan_shigongtu')->where($pl)->count();
            $an6=db('plan_shufang')->where($pl)->count();
            $an7=db('plan_weishengjian')->where($pl)->count();
            $an8=db('plan_wushi')->where($pl)->count();
            $an=$an1+$an2+$an3+$an4+$an5+$an6+$an7+$an8;
            $plan[$k]['an']=$an;
           }
        $this->assign("plan",$plan);
        $this->assign("count",$count);
        $this->assign("designer",$designer);
        $this->assign("shopcom",$shopcom);
        $this->assign("comid",$comid);
        $this->assign("grade",$grade);
        return $this->fetch();
    }
    //测试
    public function aa(){
        return $this->fetch();
    }
}
