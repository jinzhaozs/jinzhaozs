<?php
/**
 * 后台公司设计师控制器 LoginController.class.php
 * ============================================================================
 * 许可声明：这是一个开源程序，未经许可不得将本软件的整体或任何部分用于商业用途及再发布。
 * ============================================================================
 * Author: yangxuya
 * Date: 2018年4月8日
*/
namespace app\admin\controller;

use think\Controller;
use think\Request;
use think\File;


class Zdesigner extends  \app\admin\controller\Base
{
	public function index()
	{
		$where=array();
		$user=db('designer');
		$fg= db('com_zhuancfg');
		$userlx = db("com_qiyecsleixing");//类型
         $province=db('province');//市
        //获取参数
        $dname='';
        $proc='';
        $city='';
        $area='';
        $request = Request::instance();
        $urlcanshu = $request->param();
        if (!empty($urlcanshu['keyword'])) {
            $where['dname']=array('like','%'.$urlcanshu['keyword'].'%');
            $dname=$urlcanshu['keyword'];
           //$where['designer.procode']=$urlcanshu['procode1'];
        }
        if(!empty($urlcanshu['procode1']))
        {
           $where['designer.procode']=$urlcanshu['procode1'];
          
           $proc=$urlcanshu['procode1'];
          
        }
        if(!empty($urlcanshu['citycode']))
        {

            $where['designer.citycode']=$urlcanshu['citycode'];
            $city=$urlcanshu['citycode'];
        }
        if(!empty($urlcanshu['areacode']))
        {
            $where['designer.areacode']=$urlcanshu['areacode'];
            $area=$urlcanshu['areacode'];

        }


    	$res=$user->field("designer.id,dname,davatar,sex,jobage,designer.com_dzcfg,shop,price_range,idea,field,school,experience,intro,prize,achievement,grade,name,lxname,designer.procode,designer.citycode,designer.areacode")->join('shop s','designer.shop = s.id','left')->join('com_qiyecsleixing lx','designer.field = lx.lxcode','left')->where($where)->order("designer.id")->paginate(10,false,['query'=>$urlcanshu,]);
    	 $zcfg=$fg->select(); 
    	$page=$res->render();

    	$reslx = $userlx->select();//类型
        $pro=$province->select();
        $this->assign("pr",$pro);
        $this->assign("proc",$proc);
        $this->assign("city",$city);
        $this->assign("area",$area);
    	$this->assign("reslx",$reslx);//类型
        $this->assign('dname',$dname);
    	$this->assign("zcfg",$zcfg);
    	$this->assign("page",$page);
    	$this->assign("res",$res);
		return $this->view->fetch();
	}
	

}