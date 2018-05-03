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

class Jianjie extends \app\shopcom\controller\Base
{
	//查询
    //
    public function index()
    {
        //获取商家id
        $comid = input('comid');  
        $where['id'] = $comid;
        $shop['shopid'] = $comid;
        //获取服务区域列表
        //获取商家信息
        $shopcom = $this->uri("shop",$where);
        //服务区域
        $fu=$shopcom['0']['com_fuqy'];
        $fuq=substr($fu, 0, -1);
        $fuqy=explode(',',$fuq);
         foreach ($fuqy as $k1=>$v1){
            $wh['qycode']=$v1;
            $ff=db('com_fuwuqy')->where($wh)->find();
            $fff[$k1]=$ff['qyname'];
         }
        $qy=implode(",", $fff);
        $shopcom['0']['com_fuqy']=$qy;
        //承接价位
        $pr=$shopcom['0']['com_price'];
        $pri=substr($pr, 0, -1);
        $pric=explode(',',$pri);
         foreach ($pric as $k1=>$v1){
            $whe['pcode']=$v1;
            $p=db('com_price')->where($whe)->find();
            $price[$k1]=$p['pname'];
         }
        $prices=implode(",", $price);
        $shopcom['0']['com_price']=$prices;
        //服务类型
        $lei=$shopcom['0']['com_leixing'];
        $lx=substr($lei, 0, -1);
        $leix=explode(',',$lx);
         foreach ($leix as $k1=>$v1){
            $wher['lxcode']=$v1;
            $xing=db('com_qiyecsleixing')->where($wher)->find();
            $leixing[$k1]=$xing['lxname'];
         }
        $leixing=implode(",", $leixing);
        $shopcom['0']['com_leixing']=$leixing;
        //服务风格
         $zc=$shopcom['0']['com_zcfg'];
        $zcf=substr($zc, 0, -1);
        $zcfg=explode(',',$zcf);
         foreach ($zcfg as $k1=>$v1){
            $wheres['zcfgcode']=$v1;
            $z=db('com_zhuancfg')->where($wheres)->find();
            $zcfgs[$k1]=$z['zcfgname'];
         }
        $zcfgs=implode(",", $zcfgs);
        $shopcom['0']['com_zcfg']=$zcfgs;
        $shopdo=$this->uri("shop_do",$shop); 
        $this->assign("shopdo",$shopdo);
        $this->assign("shopcom",$shopcom);
        return $this->fetch();
    }
    //证书
    public function zheng()
    {
        $comid = input('comid');  
        $where['id'] = $comid;
        $shop['shopid'] = $comid;
        //获取服务区域列表
        //获取商家信息
        $shopcom = $this->uri("shop",$where);
         $this->assign("shopcom",$shopcom);
        return $this->fetch();
    }
     public function xin()
    {
        $comid = input('comid');  
        $where['id'] = $comid;
        $shop['shopid'] = $comid;
        //获取服务区域列表
        //获取商家信息
        $shopcom = $this->uri("shop",$where);

         $this->assign("shopcom",$shopcom);
        return $this->fetch();
    }
     public function lian()
    {
        $comid = input('comid');  
        $where['id'] = $comid;
        $shop['shopid'] = $comid;
        //获取服务区域列表
        //获取商家信息
        $shopcom = $this->uri("shop",$where);
        $pr['code']=$shopcom['0']['procode'];
        $pro=db("province")->where($pr)->find();
        $shopcom['0']['procode']=$pro['name'];
        //市
        $ci['code']=$shopcom['0']['citycode'];
        $city=db("city")->where($ci)->find();
        $shopcom['0']['citycode']=$city['name'];
        //区
        $ar['code']=$shopcom['0']['areacode'];
        $area=db("area")->where($ar)->find();
        $shopcom['0']['areacode']=$area['name'];
         $this->assign("shopcom",$shopcom);
        return $this->fetch();
    }
     public function xing()
    {
        $comid = input('comid');  
        $where['id'] = $comid;
        $shop['shopid'] = $comid;
        //获取服务区域列表
        //获取商家信息
        $shopcom = $this->uri("shop",$where);
        
         $this->assign("shopcom",$shopcom);
        return $this->fetch();
    }
     public function article()
    {
        $comid = input('comid');  
        $where['id'] = $comid;
        $shop['ashop'] = $comid;

        //获取服务区域列表
        //获取商家信息
        $shopcom = $this->uri("shop",$where);
        $article=db("article")->where($shop)->select();
        $this->assign("article",$article);
         $this->assign("shopcom",$shopcom);
        return $this->fetch();
    }
    //测试
    public function aa(){
        return $this->fetch();
    }
}
