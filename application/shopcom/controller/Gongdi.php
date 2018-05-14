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

class Gongdi extends \app\shopcom\controller\Base
{
	//查询
    //
    public function index()
    {
        //获取商家id
        $comid = input('comid');
        $this->assign('comid',$comid);
        // dump($comid);
        $whereshangjia['id'] = $comid;
        //获取商家信息
        $shopcom = $this->uri("shop",$whereshangjia);
        //该商家案例信息
        //获取参数
        $request = Request::instance();
        $urlcanshu = $request->param();
        // dump($urlcanshu);die;
        // 统一变量说明
        $tjdozaijia = input('tjdozaijia');//条件参数在建
        // dump($tjdozaijia);
        // 判断条件
        switch ($tjdozaijia) {
            case '1':
                  $where['schedule'] =array("in","1,2,3,4");
                break;
            case '2':
                  $where['schedule'] =array("in","5");
                break;
            case '3':
                  // $where['schedule'] =array("in","5");
                break;   
            default:
                $where['schedule'] =array("in","1,2,3,4");
                break;
        }
        $plan = db("plan");//工地
        $where['plan.comid'] = $comid;
        
        $res = $plan->field("plan.id,plan.fname,plan.time,plan.schedule,plan.flogo,plan.procode,plan.citycode,plan.frenyuan,plan.fmianji,plan.fyusuan,plan.ffangshi,lx.lxname as ftype,shop.id as comid,com_layout.lname as fhuxing,com_zhuancfg.zcfgname as ffengge,designer.dname as frenyuan,(select count(*) from plan_shigongtu where plan_shigongtu.planid=plan.id and plan_shigongtu.comid =".$comid.") as shigongcount")
        ->join('com_qiyecsleixing lx','plan.ftype = lx.lxcode','left')//类型
        ->join('shop','plan.comid = shop.id','left')//公司
        ->join('com_layout','plan.fhuxing = com_layout.lcode','left')//户型
        ->join('com_zhuancfg','plan.ffengge = com_zhuancfg.zcfgcode','left')//风格
        ->join('designer','plan.frenyuan = designer.id','left')//设计师
        ->order("plan.id")
        ->where($where)
        ->select(); 
        // dump($res);die;
        // 分页
        $this->assign("res",$res);//案例信息
        // dump($res);die;
        $this->assign("tjdozaijia",$tjdozaijia);//条件在建
        $this->assign("shopcomhuxing",db("com_layout")->limit(5)->select());//户型信息
        $this->assign("shopcomfengge",db("com_zhuancfg")->limit(5)->select());//风格信息
        $this->assign("shopcom",$shopcom);//商家信息
        $this->assign("comid",$comid);//商家信息id
        $this->assign("pr",db('province')->select());//省信息

        return $this->fetch();
    }
    //测试
    public function aa(){
        return $this->fetch();
    }
}
