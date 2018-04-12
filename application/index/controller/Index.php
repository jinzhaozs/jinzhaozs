<?php
/**
 * 前天主页控制器 Index.php
 * ============================================================================
 * 许可声明：这是一个开源程序，未经许可不得将本软件的整体或任何部分用于商业用途及再发布。
 * ============================================================================
 * Author: yangxuya
 * Date: 2018年4月9日
*/
namespace app\index\controller;

use \think\Request;

class Index extends \app\index\controller\Base
{
	//查询
    public function index()
    {
        //获取参数
        $request = Request::instance();
        $urlcanshu = $request->param();
        // dump($urlcanshu);die;
        // 统一变量说明
        $comtype = null;//类型数组
        $comservice = null;//服务区域数组
        $comprice = null;//承接价位数组
        $comstyle = null;//装修风格数组
        $comarea = null;//装修风格数组
        $whereleixing = array();//公司条件数组

        //获取类型数据
        $type = input('type'); // 获取类型 code
        if ($type) {
            $comtype['lxcode'] = $type;//type 的code
            $typename = $this->uri("com_qiyecsleixing",$comtype);//转换数据
            $comtype['lxname'] = $typename['0']['lxname'];// type 的name
            // dump($thpename);
            $whereleixing['com_leixing'] = array('like',"%$type,%");
        }
        
        //获取服务区域数据
        $service = input('service'); // 获取类型 code
        if ($service) {
            $comservice['qycode'] = $service;//type 的code
            $servicename = $this->uri("com_fuwuqy",$comservice);//转换数据
            $comservice['qyname'] = $servicename['0']['qyname'];// type 的name
            // dump($thpename);
            $whereleixing['com_fuqy'] = array('like',"%$service,%");
        }
        
        //承接价位数据
        $price = input('price'); // 获取类型 code
        if ($price) {
            $comprice['pcode'] = $price;//type 的code
            $pricename = $this->uri("com_price",$comprice);//转换数据
            $comprice['pname'] = $pricename['0']['pname'];// type 的name
            // dump($thpename);
            $whereleixing['com_fuqy'] = array('like',"%$price,%");
        }
        
        //获取装修风格数据
        $style = input('style'); // 获取类型 code
        if ($style) {
            $comstyle['zcfgcode'] = $style;//type 的code
            $stylename = $this->uri("com_zhuancfg",$comstyle);//转换数据
            $comstyle['zcfgname'] = $stylename['0']['zcfgname'];// type 的name
            // dump($thpename);
            $whereleixing['com_zcfg'] = array('like',"%$style,%");
        }

        //获取所在区域数据
        $area = input('area'); // 获取类型 code
        if ($area) {
            $comarea['qycode'] = $area;//type 的code
            $areaname = $this->uri("com_fuwuqy",$comarea);//转换数据
            $comarea['qyname'] = $areaname['0']['qyname'];// type 的name
            // dump($thpename);
            $whereleixing['com_szqy'] = $area;
        }
        /**
         * 公司信息
         * @var [type]
         */
        $shop = $this->uri("shop",$whereleixing,"10",$urlcanshu);//查询公司信息
        // dump($shop);die;
        $count = db("shop")->where($whereleixing)->count();//查询公司信息总条数

        //链接数据库赋值
        $com_leixing = $this->uri("com_qiyecsleixing",array());//类型
        $com_fuwuquyu = $this->uri("com_fuwuqy",array());//服务区域
        $com_price = $this->uri("com_price",array());//价位
        $com_fengge = $this->uri("com_zhuancfg",array());//风格
        // $com_suozaiqu = $this->uri("com_suozaiqu",array());//所在区域
        
        //渲染类别信息
        $this->assign("com_leixing",$com_leixing);
        $this->assign("com_fuwuquyu",$com_fuwuquyu);
        $this->assign("com_price",$com_price);
        $this->assign("com_fengge",$com_fengge);
        // $this->assign("com_suozaiqu",$com_suozaiqu);
        // dump($comtype);
        //渲染条件信息
        $this->assign("comtype",$comtype);//类型
        $this->assign("comservice",$comservice);//服务区域
        $this->assign("comprice",$comprice);//承接价位
        $this->assign("comstyle",$comstyle);//装修风格
        $this->assign("comarea",$comarea);//服务区域

       //渲染公司信息
        $this->assign("shop",$shop);
        $this->assign("count",$count);
        
        return $this->fetch();
    }
    //测试
    public function aa(){
        return $this->fetch();
    }
}
