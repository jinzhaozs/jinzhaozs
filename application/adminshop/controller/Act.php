<?php
/**
 * 后台公司类型控制器 LoginController.class.php
 * ============================================================================
 * 许可声明：这是一个开源程序，未经许可不得将本软件的整体或任何部分用于商业用途及再发布。
 * ============================================================================
 * Author: yangxuya
 * Date: 2018年4月8日
*/
namespace app\adminshop\controller;

use think\Controller;
use think\Request;
use think\File;
use think\Session;

class Act extends  Controller
{
    /**
     * *类型
     * @return [type] [description]
     */
    public function index()
    {
    	$user=db('com_act');
    	$where=array ();
       $comid= Session::get('adminshopid');
  		$where['comid']=$comid;
      $aname='';
  		 $request = Request::instance();
        $urlcanshu = $request->param();
        if (!empty($urlcanshu['keyword'])) {
           $where['jianjie']=array('like','%'.$urlcanshu['keyword'].'%');
           $aname=$urlcanshu['keyword'];
        }
    	$res=$user->field("com_act.id,jianjie,shuoming,kai_time,zhong_time,lianxir,lxrtel,comid,actlogo,name")->join('shop s','com_act.comid = s.id')->where($where)->order("com_act.id")->paginate(10,false,['query'=>$urlcanshu,]);
    	$page=$res->render();
    	$this->assign("comid",$comid);
      $this->assign("aname",$aname);
    	$this->assign("page",$page);
    	$this->assign("res",$res);
		return $this->view->fetch();
    }
     public function add()
    {
         $user = db('com_act'); 
         $file = request()->file('actlogo');
        $shuju = input('post.');//获取数据
         if($file)
       { 
        $info = $file->move(ROOT_PATH . 'public/static/' . DS . 'uploads');    
        if($info){

             $shuju['actlogo']=$info->getSaveName();
        }  
        }  
        $user_info = $user->insert($shuju);
        
        if (!$user_info) {
           $this->error("adminshop/act/index");
        }
        else
        {
          $this->redirect("adminshop/act/index");
        }
      
    }
     //执行修改
    public function edit(){
        $user = db('com_act');
        $whid = input('post.id');//获取id
        $where['id'] = $whid; 
        $file = request()->file('actlogo');
        $shuju = input('post.');//获取数据 
        if($file)
       { 
         $info = $file->move(ROOT_PATH . 'public/static/' . DS . 'uploads');    
        if($info){
             $shuju['actlogo']=$info->getSaveName();
        }
        } 
        $res = $user->where($where)->update($shuju);
        if (!$res) {
           $this->error("修改失败","adminshop/Act/index");
        }
        else
        {
          $this->redirect("adminshop/Act/index");
        }
        
    }
    //
    public function del($id){
        $user = db('com_act');
        $whid = input('post.id');//获取id
          $file = input('post.actlogo'); 
          if($file){
             $result = @unlink ($file);
          }
        
  
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
    

}