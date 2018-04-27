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


class User extends \app\admin\controller\Base
{
	public function index()
	{
		$where=array ();
		$user=db('useradmin');
		$br= db('branch');
        //获取参数
    $uname='';
    $bran='';
    $request = Request::instance();
    $urlcanshu = $request->param();
    if (!empty($urlcanshu['keyword'])) {
           $where['uname']=array('like','%'.$urlcanshu['keyword'].'%');
           $uname=$urlcanshu['keyword'];
        }
    if (!empty($urlcanshu['brancode'])) {
           $where['brancode']=$urlcanshu['brancode'];
           $bran=$urlcanshu['brancode'];
       }
    	$res=$user->field("useradmin.id,usercode,usersub,type,brancode,uname,time,name,code")->join('branch br','useradmin.brancode = br.code','left')->where($where)->order("useradmin.id")->paginate(10,false,['query'=>$urlcanshu,]);
    	$page=$res->render();
    	$branch = $br->select();//类型
    	$this->assign("branch",$branch);//类型
      $this->assign("uname",$uname);
      $this->assign("bran",$bran);
    	$this->assign("page",$page);
    	$this->assign("res",$res);
		return $this->view->fetch();
	}
	 public function add()
    {
         $user = db('useradmin'); 
        $shuju = input('post.');//获取数据
        $shuju['usersub']=md5(input('post.usersub'));
        $shuju['time'] = date("Y-m-d h:i:s",time());  
        $user_info = $user->insert($shuju);
        if (!$user_info) {
           $this->error("添加失败","admin/User/index");
        }
        else
        {
          $this->redirect("admin/User/index");
         
        }
      
    }
     //执行修改
    public function edit(){
        $user = db('useradmin'); 
        $whid = input('post.id');//获取id
        $where['id'] = $whid; 
        $shuju = input('post.');//获取数据
        $res = $user->where($where)->update($shuju);
        if (!$res) {
           $this->error("修改失败","admin/User/index");
        }
        else
        {
          $this->redirect("admin/User/index");
        }
        
    }
    //
    public function delete($id){
        $user = db('useradmin');
        $whid = input('post.id');//获取id
  
        $res = $user->where('id',$whid)->delete();
        if (!$res) {
            $data = array(
                    'data' => false,
                    'code' => 500,
                    'msg'  => '删除失败',
            );

            return $data;
        }
        $data = array(
                'data' => true,
                'code' => 200,
                'msg'  => '删除成功 !',
        );
        return $data;
    }
     public function ajaxcode()
    {
      $where['usercode']=input('put.code');
      $user=db("useradmin")->where($where)->count();
      return $user;
    }
    
    public function xg()
    {
      $user = db('useradmin');
       $whid = input('post.id');//获取id
        $where['id'] = $whid; 
        $shuju = input('post.');//获取数据
        $shuju['usersub']=md5(input('post.usersub'));
        $res = $user->where($where)->update($shuju);
        if (!$res) {
           $this->error("修改失败","admin/User/index");
        }
        else
        {
          $this->redirect("admin/User/index");
        }
        
    }
    public function ajaxyuan()
  {
    $whid = input('post.id');//获取id
    $where['id'] = $whid; 
    $pass=input('put.pass');
      $user=db("useradmin")->where($where)->find();
     
      if(md5($pass) == $user['usersub']){ 
        return 1;
      }
      else
      {
        return 2;
      }
        
  }
}