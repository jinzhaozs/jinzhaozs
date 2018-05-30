<?php
/**
 * 前天攻略主页控制器 Index.php
 * ============================================================================
 * 许可声明：这是一个开源程序，未经许可不得将本软件的整体或任何部分用于商业用途及再发布。
 * ============================================================================
 * Author: yangxuya
 * Date: 2018年4月9日
*/
namespace app\index\controller;

use \think\Request;
use think\Session;
class Gonglue extends \app\index\controller\Base
{
    // 初始化
    public function _initialize()
    {
          // 渲染类别信息头部
        $this->assign("com_fuwuqytou",db("com_fuwuqy")->limit(6)->select());//服务区域
        $this->assign("com_pricetou",db("com_price")->limit(6)->select());//价位
        $this->assign("com_leixingtou",db("com_qiyecsleixing")->limit(6)->select());//类型
        $this->assign("com_fenggetou",db("com_zhuancfg")->limit(6)->select());//风格
    }
    //攻略首页
    public function index()
    {
       
        /**
         * 轮播图
         */
        $wherelbt['comid'] = 123456789;
        $lbt = $this->uri("shop_lbt",$wherelbt);
        // dump($lbt);die;
        $this->assign("lbt",$lbt);//轮播图信息
        /**
         * 类别内容
         * @var [type]
         */
        $user = db('str_zhulei');
        $reslb = $user->field("id,name")
        ->select();
        //子类别内容
        foreach ($reslb as $k => $v) {
            $wherezl['zlid'] = $v['id'];
            //类别副标信息
            $reszlb = db('str_fuleibie')->where($wherezl)->select();
            $reslb[$k]['zlbsel'] = $reszlb;
            // 主类 下的内容 头条 攻略
            $neirongtoutiao = db('str_strate')->where(['ztyid'=>$v['id'],'type'=>6])->limit(5)->find();
            // 主类 下的内容 推荐 攻略
            $neirongtuijian = db('str_strate')->where(['ztyid'=>$v['id'],'type'=>8])->limit(4)->select();
            // dump($resneirong);die;
            $reslb[$k]['neirongtoutiao'] = $neirongtoutiao;//头条
            $reslb[$k]['neirongtuijian'] = $neirongtuijian;//推荐
            // dump($reszlb);
        }
        // dump($reslb);die;
        $this->assign("reslb",$reslb);
        return $this->fetch();
    }
    // 攻略类别页
    public function stratetype(){
        /**
         * 类别内容
         * @var [type]
         */
        $user = db('str_zhulei');
        $reslb = $user->field("id,name")
        ->select();
        //子类别内容
        foreach ($reslb as $k => $v) {
            $wherezl['zlid'] = $v['id'];
            //类别副标信息
            $reszlb = db('str_fuleibie')->where($wherezl)->select();
            $reslb[$k]['zlbsel'] = $reszlb;
            // dump($reszlb);
        }
        // 获取条件
        $zlid = input('zlid');//主类别id
        $flid = input('flid');//副类别id
        // 主类id 是否存在
        if ($zlid) {
            // 主类副类id都存在
            if ($flid) {
                $wheregl['ztyid'] = $zlid;
                $wheregl['ftyid'] = $flid;
                $wherezlbname['id'] =$flid;
                $zlbname = db("str_fuleibie")->where($wherezlbname)->find();
                $zlbname = $zlbname['name'];
            }else{
                // 主类存在副类不存在
               $wheregl['ztyid'] = $zlid;
                $wherezlbname['zlid'] =$zlid;
                $zlbname = db("str_fuleibie")->where($wherezlbname)->find();
                $zlbname = $zlbname['name'];
            }
        }else{
            echo "请求参数有误! 请联系管理员";
        }
        /**
         * 攻略内容信息
         */
        // dump($wheregl);die;
        $usergl = db("str_strate");
        $resgl = $usergl->where($wheregl)->paginate(2); 
        // 分页
        $page=$resgl->render();
        $this->assign("page",$page);
        // dump($resgl);die;
        $this->assign("reslb",$reslb);//类别
        $this->assign("resgl",$resgl);//攻略
        $this->assign("reslbname",$zlbname);//攻略
        return $this->fetch();
    }
    //攻略内容
    public function strateneirong(){
        // 攻略id
        $strid = input('strid');
        // 攻略主内容
        $usergl = db('str_strate');
        $where['id'] = $strid;
        $resgl = $usergl->where($where)->find();
        $ztyid = $resgl['ztyid'];//主类别id
        $ftyid = $resgl['ftyid'];//副类别id
        $zhuname = db('str_zhulei')->where(['id'=>$ztyid])->find();
        $funame = db('str_fuleibie')->where(['id'=>$ftyid])->find();
        // dump($funame);die;
        $funame = $funame['name'];
        $zhuname = $zhuname['name'];
        $this->assign('zhuname',$zhuname);
        $this->assign('funame',$funame);
        // 攻略详情内容
        $usergldetail = db('str_detail');
        $wheredetail['strid'] = $strid;
        $resdetail = $usergldetail->where($wheredetail)->select();
        // dump($resdetail);die;
        $this->assign("resdetail",$resdetail);
        $this->assign("resgl",$resgl);
        // dump($resgl);die;
        return $this->fetch();
    }
}
