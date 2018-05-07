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

class Anli extends \app\shopcom\controller\Base
{
	//查询
    //
    public function index()
    {
        //获取商家id
        $comid = input('comid');
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
        $tjffengge = null;//条件参数风格
        $tjfhuxing = null;//条件参数户型

        //风格数组
        $ffengge = input('ffengge'); // 获取类型 code
        if ($ffengge) {
            $tjffengge = $ffengge;//type 的code
            // dump($thpename);
            $where['ffengge'] = $ffengge;
        }
        //户型条件
        $fhuxing = input('fhuxing'); // 获取类型 code
        if ($fhuxing) {
            $tjfhuxing = $fhuxing;//type 的code
            // dump($thpename);
            $where['fhuxing'] = $fhuxing;
        }
        $plan = db("plan");//方案
        $where['plan.comid'] = $comid;
         $where['schedule'] =5;
        $res = $plan->field("plan.id,plan.fname,plan.time,plan.flogo,plan.frenyuan,plan.fmianji,plan.fyusuan,plan.ffangshi,lx.lxname as ftype,shop.id as comid,com_layout.lname as fhuxing,com_zhuancfg.zcfgname as ffengge,designer.dname as frenyuan")
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
        $this->assign("tjfhuxing",$tjfhuxing);//条件户型
        $this->assign("tjffengge",$tjffengge);//条件风格
        $this->assign("shopcomhuxing",db("com_layout")->limit(5)->select());//户型信息
        $this->assign("shopcomfengge",db("com_zhuancfg")->limit(5)->select());//风格信息
        $this->assign("shopcom",$shopcom);//商家信息
        $this->assign("comid",$comid);//商家信息id
        return $this->fetch();
    }
    //详情
    public function detail(){
        /**
         * 获取商家信息
         */
       //获取商家id
        $comid = input('comid');
        $whereshangjia['id'] = $comid;
        $shopcom = $this->uri("shop",$whereshangjia);
        // dump($shopcom);
        $this->assign("shopcom",$shopcom);//商家信息
        /**
         * 案例信息
         */
        $planid = input('planid');
        $plan = db("plan");//方案
        $where['plan.comid'] = $comid;
        $where['plan.id'] = $planid;
        $res = $plan->field("plan.id,plan.fname,plan.time,plan.schedule,plan.flogo,plan.procode,plan.citycode,plan.frenyuan,plan.fmianji,plan.fyusuan,plan.ffangshi,lx.lxname as ftype,shop.id as comid,shop.name as comname,com_layout.lname as fhuxing,com_zhuancfg.zcfgname as ffengge,designer.dname as frenyuan,designer.davatar as sjslogo,designer.idea as idea")
        ->join('com_qiyecsleixing lx','plan.ftype = lx.lxcode','left')//类型
        ->join('shop','plan.comid = shop.id','left')//公司
        ->join('com_layout','plan.fhuxing = com_layout.lcode','left')//户型
        ->join('com_zhuancfg','plan.ffengge = com_zhuancfg.zcfgcode','left')//风格
        ->join('designer','plan.frenyuan = designer.id','left')//设计师
        ->order("plan.id")
        ->where($where)
        ->find();  
        /**
         * 图片信息
         * {if condition="$ct neq '1'"}
                            {foreach name="$ct" item="voct"}
                        <div class="style-show">
                            <h1>餐厅</h1>
                            <div class="kuang">
                                <img src="__STATIC__/uploads/{$voct.logo}">
                                <p><span>【餐厅】&nbsp</span><span>{$voct.text}</span></p>
                            </div>
                            <br>
                        </div>
                            {/foreach}
                    {else /}
                    {/if}
         */
        $wheretp['comid'] = $comid;
        $wheretp['planid'] = $planid;
        $ct = db('plan_canting')->where($wheretp)->select();//餐厅
        $cf = db('plan_chufang')->where($wheretp)->select();//厨房
        $etj = db('plan_ertongjian')->where($wheretp)->select();//儿童间
        $kt = db('plan_keting')->where($wheretp)->select();//客厅
        $sf = db('plan_shufang')->where($wheretp)->select();//书房
        $wsj = db('plan_weishengjian')->where($wheretp)->select();//卫生间
        $ws = db('plan_wushi')->where($wheretp)->select();//卧室
        if (empty($ct)) {
            $ct = 1;
        }
        if (empty($cf)) {
            $cf = 1;
        }
        if (empty($etj)) {
            $etj = 1;
        }
        if (empty($etj)) {
            $etj = 1;
        }
        if (empty($kt)) {
            $kt = 1;
        }
        if (empty($sf)) {
            $sf = 1;
        }
        if (empty($wsj)) {
            $wsj = 1;
        }
        if (empty($ws)) {
            $ws = 1;
        }
        // dump($ct);

        $this->assign("res",$res);
        $this->assign("ct",$ct);
        $this->assign("cf",$cf);
        $this->assign("etj",$etj);
        $this->assign("kt",$kt);
        $this->assign("sf",$sf);
        $this->assign("wsj",$wsj);
        $this->assign("ws",$ws);
        return $this->fetch();
    }
    //测试
    public function aa(){
        return $this->fetch();
    }
}
