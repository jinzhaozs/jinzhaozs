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
        $this->assign("comid",$comid);
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
        $res = $plan->field("plan.id,plan.fname,plan.time,plan.schedule,plan.flogo,plan.procode,plan.citycode,plan.frenyuan,plan.fmianji,plan.fyusuan,plan.ffangshi,lx.lxname as ftype,shop.id as comid,shop.name as comname,com_layout.lname as fhuxing,com_zhuancfg.zcfgname as ffengge,designer.dname as frenyuan,designer.davatar as sjslogo,designer.idea as idea,designer.id as sjsid")
        ->join('com_qiyecsleixing lx','plan.ftype = lx.lxcode','left')//类型
        ->join('shop','plan.comid = shop.id','left')//公司
        ->join('com_layout','plan.fhuxing = com_layout.lcode','left')//户型
        ->join('com_zhuancfg','plan.ffengge = com_zhuancfg.zcfgcode','left')//风格
        ->join('designer','plan.frenyuan = designer.id','left')//设计师
        ->order("plan.id")
        ->where($where)
        ->find();  

        //案例图片详情
        $wheretp['comid'] = $comid;
        $wheretp['planid'] = $planid;
        $ct = db('plan_canting')->where($wheretp)->select();//餐厅
        $cf = db('plan_chufang')->where($wheretp)->select();//厨房
        $etj = db('plan_ertongjian')->where($wheretp)->select();//儿童间
        $kt = db('plan_keting')->where($wheretp)->select();//客厅
        $sf = db('plan_shufang')->where($wheretp)->select();//书房
        $wsj = db('plan_weishengjian')->where($wheretp)->select();//卫生间
        $ws = db('plan_wushi')->where($wheretp)->select();//卧室
        // 判断是否为空
        if (empty($ct)) { $ct = 1; } if (empty($cf)) { $cf = 1; } if (empty($etj)) { $etj = 1; } if (empty($etj)) { $etj = 1; } if (empty($kt)) { $kt = 1; } if (empty($sf)) { $sf = 1; } if (empty($wsj)) { $wsj = 1; } if (empty($ws)) { $ws = 1; }
        /**
         * 相关工地(同一设计师工地)
         */
        // 设计师id
        $wheresjs['designer.id'] = $res['sjsid'];        
        $resxggd = $plan->field("plan.id,plan.fname,plan.time,plan.schedule,plan.flogo,plan.procode,plan.citycode,plan.frenyuan,plan.fmianji,plan.fyusuan,plan.ffangshi,lx.lxname as ftype,shop.id as comid,com_layout.lname as fhuxing,com_zhuancfg.zcfgname as ffengge,designer.dname as frenyuan,(select count(*) from plan_shigongtu where plan_shigongtu.planid=plan.id and plan_shigongtu.comid =".$comid.") as shigongcount")
        ->join('com_qiyecsleixing lx','plan.ftype = lx.lxcode','left')//类型
        ->join('shop','plan.comid = shop.id','left')//公司
        ->join('com_layout','plan.fhuxing = com_layout.lcode','left')//户型
        ->join('com_zhuancfg','plan.ffengge = com_zhuancfg.zcfgcode','left')//风格
        ->join('designer','plan.frenyuan = designer.id','left')//设计师
        ->order("plan.id")->where($wheresjs)->limit(1,2)->select(); 
        /**
         * 点评
         */
        // $resdianping = uri('com_evaluate',$wheretp);
        $resdianping = db('com_evaluate')->where($wheretp)->limit(2)->select();
        // dump($resdianping);die;
        $this->assign("resdianping",$resdianping);//点评信息
        $this->assign("pr",db('province')->select());//省信息
        // dump($res);die;
        $this->assign("res",$res);//案例信息
        $this->assign("resxggd",$resxggd);//相关案例信息
        $this->assign("ct",$ct);
        $this->assign("cf",$cf);
        $this->assign("etj",$etj);
        $this->assign("kt",$kt);
        $this->assign("sf",$sf);
        $this->assign("wsj",$wsj);
        $this->assign("ws",$ws);
        return $this->fetch();
    }
    // 预约信息提交
    public function addyuyuexx(){
        // 获取数据
        $res = input();
        $res['new_tel'] = substr($res['tel'], 0, 3).'****'.substr($res['tel'], 7);
        $user = db('reserva'); 
        $res['time'] = date("Y-m-d h:i:s",time());
        // return $res;
        $user_info = $user->insert($res);
        if (!$user_info) {
            $data = array(
                    'data' => false,
                    'code' => 500,
                    'msg'  => '添加失败',
            );

            return $data;
        }
        $data = array(
                'data' => true,
                'code' => 200,
                'msg'  => '添加成功 !',
        );
        return $data;
    }
    //测试
    public function aa(){
        return $this->fetch();
    }
}
