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


class Designer extends Controller
{
	public function index()
	{
		$where=array ();
		$where['shop']= input('param.id');
		$user=db('designer');
		$fg= db('com_zhuancfg');
        //获取参数
        $request = Request::instance();
        $urlcanshu = $request->param();
        if (!empty($urlcanshu['keyword'])) {
           $where['name']=array('like','%'.$urlcanshu['keyword'].'%');
        }
    	$res=$user->field("designer.id,dname,davatar,sex,jobage,designer.com_dzcfg,shop,price_range,idea,field,school,experience,intro,prize,achievement,grade,name")->join('shop s','designer.shop = s.id')->where($where)->order("designer.id")->paginate(10,false,['query'=>$urlcanshu,]);
    	 $zcfg=$fg->select(); 
    	$page=$res->render();
    	$this->assign("zcfg",$zcfg);
    	$this->assign("page",$page);
    	$this->assign("res",$res);
		return $this->view->fetch();
	}
	 public function add()
    {
         $user = db('designer'); 
        $file = request()->file('davatar');
        $shuju = input('post.');//获取数据
        $shuju['dtime'] = date("Y-m-d h:i:s",time());
        $shuju['grade']='A级信用设计师';  
         if($file)
       { 
        $info = $file->move(ROOT_PATH . 'public/static/' . DS . 'uploads');    
        if($info){
             $shuju['davatar']=$info->getSaveName();
        }  
        }      
        $user_info = $user->insert($shuju);
        if (!$user_info) {
           $this->error("添加失败","admin/Designer/index");
        }
        else
        {
          $this->success("添加成功",url("admin/Designer/index",array('id'=>$shuju['shop'])));
        }
      
    }
     //执行修改
    public function edit(){
        $user = db('designer');
        $whid = input('post.id');//获取id
        $where['id'] = $whid; 
        $shuju = input('post.');//获取数据
        $file = request()->file('davatar');
      if($file)
       { 
         $info = $file->move(ROOT_PATH . 'public/static/' . DS . 'uploads');    
        if($info){
             $shuju['davatar']=$info->getSaveName();
        }
        } 
        $res = $user->where($where)->update($shuju);
        if (!$res) {
           $this->error("修改失败","admin/Designer/index");
        }
        else
        {
          $this->success("修改成功",url("admin/Designer/index",array('id'=>'1')));
        }
        
    }
    //
    public function delete($id){
        $user = db('designer');
        $whid = input('post.id');//获取id
          $file = input('post.image'); 
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