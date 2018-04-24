<?php
/**
 * 后台公司修改密码控制器 LoginController.class.php
 * ============================================================================
 * 许可声明：这是一个开源程序，未经许可不得将本软件的整体或任何部分用于商业用途及再发布。
 * ============================================================================
 * Author: yangxuya
 * Date: 2018年4月13日
*/
namespace app\adminshop\controller;

use think\Controller;

use think\Request;

use think\File;
use think\Session;

class Xgm extends Controller
{
	public function index()
	{
		 return $this->view->fetch();
	}
	public function ajaxyuan()
	{
		$comid = Session::get('adminshopid');
		$where['id']=$comid;
		$pass=input('put.pass');
      $user=db("shop")->where($where)->find();
     
      if(md5($pass) == $user['pass']){ 
      	return 1;
      }
      else
      {
      	return 2;
      }
      	
	}
	
	public function edit()
	{
		$comid = Session::get('adminshopid');
		$where['id']=$comid;
		$shuju['pass']=md5(input('put.pass'));
		 $res = db("shop")->where($where)->update($shuju);
		   if (!$res) {
           $this->error("修改失败","adminshop/xgm/index");
        }
        else
        {
           $this->redirect("adminShop/xgm/index");
        }
	}
}