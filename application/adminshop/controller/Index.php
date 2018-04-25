<?php
/**
 * 前天主页控制器 Index.php
 * ============================================================================
 * 许可声明：这是一个开源程序，未经许可不得将本软件的整体或任何部分用于商业用途及再发布。
 * ============================================================================
 * Author: yangxuya
 * Date: 2018年4月13日
*/
namespace app\adminshop\controller;

use \think\Request;

use think\Session;


class Index extends \app\adminshop\controller\Base
{
	function _initialize(){
		$code = Session::get('adminshopcode');
		if (!$code) {
		   $this->redirect("adminshop");
		}
	}
	//查询
	//
	public function index()
	{
		$code = Session::get('adminshopcode');
	   
		$where['code'] = $code;
		$res = uri('shop',$where);
		$this->assign("res",$res);
		return $this->fetch();
	}
	//基本信息
	public function jibenxinxi(){
		$code = Session::get('adminshopcode');
		$where['code'] = $code;
		$res = uri('shop',$where);
		$this->assign("fuwuqy",db('com_fuwuqy')->select());//服务区域
		$this->assign("jiawei",db('com_price')->select());//服务价位
		$this->assign("fengge",db('com_zhuancfg')->select());//服务风格
		$this->assign("leixing",db('com_qiyecsleixing')->select());//服务类型
		// 城市级联省
         $pro = db("province")->order('id')->select();
         // dump($pro);die;
         $this->assign("pro",$pro);
		$this->assign("res",$res);
		return $this->fetch();
	}
	//修改
	public function editjbxx(){
		$user = db('shop');
		$where['code'] = Session::get('adminshopcode');
		$shuju = input('post.');//获取数据
		// dump($shuju);die;
		$file = request()->file('logo');
		$shuju['time'] = date("Y-m-d h:i:s",time());
		 if($file)
	   { 
		 $info = $file->move(ROOT_PATH . 'public/static/' . DS . 'uploads');    
		if($info){
			 $shuju['logo']=$info->getSaveName();
		} 
	   }
		$res = $user->where($where)->update($shuju);
		if (!$res) {
		   $this->error("修改失败");
		}
		else
		{
		   $this->redirect('adminshop/index/jibenxinxi');
		}
	}
	//详细信息
	public function xiangxixinxi(){
		$code = Session::get('adminshopid');
		$where['shopid'] = $code;
		$res = uri('shop_do',$where);
		// dump($res);die;
		$this->assign("res",$res);
		return $this->fetch();
	}
	//修改详细信息
	public function editxiangxixx(){
		$user = db('shop_do');
		$where['shopid'] = Session::get('adminshopid');
		$shuju = input('post.');//获取数据
		// dump($shuju);die;
		$res = $user->where($where)->update($shuju);
		$this->redirect('adminshop/index/xiangxixinxi');
	}
}
