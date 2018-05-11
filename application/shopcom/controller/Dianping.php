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

class Dianping extends \app\shopcom\controller\Base
{
	//查询
    //
    public function index()
    {
        //获取商家id
        $comid = input('comid');
        $whereshangjia['id'] = $comid;
        //获取商家信息
        $shopcom = $this->uri("shop",$whereshangjia);
        // 商家详细信息
        $spxiangxi = db('shop_do')->field('shejixj,fuwutd,shigongsp,com_koubei')->where($whereshangjia)->find();
        $this->assign('spxiangxi',$spxiangxi);
        // dump($shopcomxiangx);die;
        /**
         * 案例信息
         * @var [type]
         */
        $where['com_evaluate.comid'] = $comid;
        $request = Request::instance();
        $urlcanshu = $request->param();
        // dump($urlcanshu);die;
        // 统一变量说明
        $jieduan = null;//按阶段查看：
        $jibie = null;//好评 差评 中评
        //条件 阶段
        $jiduanchakan = input('jiduanchakan'); // 获取类型 code
        if ($jiduanchakan) {
            $jieduan = $jiduanchakan;//type 的code
            // dump($thpename);
            $where['com_evaluate.schedule'] = $jiduanchakan;
        }
        //条件 级别
        $pingjiajieduan = input('pingjiajieduan');
        if ($pingjiajieduan) {
             $jibie = $pingjiajieduan;//type 的code
            // dump($thpename);
            $where['com_evaluate.dianpingjibie'] = $pingjiajieduan;
        }
        $res = db('com_evaluate')->field('com_evaluate.id,com_evaluate.yezhuname,com_evaluate.shejipf,com_evaluate.fuwupf,com_evaluate.text,com_evaluate.time,com_evaluate.yezhuname,com_evaluate.schedule,plan.fname,plan.fyusuan,plan.ffengge,plan.fmianji')
        ->join('plan','com_evaluate.planid = plan.id','left')
        ->where($where)
        ->paginate(5,false,['query'=>$urlcanshu]);
        // dump($shopcom);die;
        $page=$res->render();
        // 
        $this->assign("res",$res);//案例信息
        $this->assign("shopcom",$shopcom);//商家信息
        $this->assign("comid",$comid);//商家信息id
        $this->assign("jieduan",$jieduan);//阶段条件
        $this->assign("jibie",$jibie);//好评中评差评
        $this->assign("page",$page);
        return $this->fetch();
    }
}
