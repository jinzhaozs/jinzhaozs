<?php
/**
 * 后台公司类型控制器 LoginController.class.php
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
class Shoplbt extends Controller
{
	/**
     * *类型
     * @return [type] [description]
     */
    public function index()
    {
    	$comid = Session::get('adminshopid');;//公司id
    	// dump($comid);die;
        $where['shop_lbt.comid'] = $comid;
       
        $reslbt = db("shop_lbt")->field("shop_lbt.id,shop_lbt.shop_logo,shop_lbt.comid,shop_lbt.lbtname,shop_lbt.time,shop.name as comname")
        ->join('shop','shop_lbt.comid = shop.id','left')//公司
        ->where($where)
        ->select();//轮播图
        // dump($reslbt);die;	
        $this->assign("res",$reslbt);//轮播图
        $this->assign("comid",$comid);//公司id
        return $this->view->fetch();
    }
    public function add()
    {
    	// 主表添加
    	$user = db('shop_lbt'); 
    	$file = request()->file('shop_logo');
        $shuju = input('post.');//获取数据
        $shuju['time'] = date("Y-m-d h:i:s",time());    
        if($file){
        $info = $file->move(ROOT_PATH . 'public/static/' . DS . 'uploads');    
             $shuju['shop_logo']=$info->getSaveName();
        }           
        $user_info = $user->insert($shuju);
        if (!$user_info) {
           $this->error("添加失败","adminshop/Shoplbt/index");
        }else{
           $this->redirect("adminshop/Shoplbt/index");
        }
        
    }
    //执行修改
    public function edit(){
        $user = db('shop_lbt');
        $where['id'] = input('post.lbtid');//获取id
        $where['comid'] = input('post.comid');//获取id
          
        $shuju['lbtname'] = input('post.lbtname');//获取数据
        $shuju['time'] = date("Y-m-d h:i:s",time());
        // dump($shuju);
        $file = request()->file('shop_logo');
        if($file){
         $info = $file->move(ROOT_PATH . 'public/static/' . DS . 'uploads');    
             $shuju['shop_logo']=$info->getSaveName();
        } 
        $res = $user->where($where)->update($shuju);
        // echo $user->getLastsql();die;
        if (!$res) {
            $this->error("添加失败","adminshop/Shoplbt/index");
        }
        else
        {
         $this->redirect("adminshop/Shoplbt/index");
        }
        
    }
    //
    public function del(){
        $user = db('shop_lbt');
        $where['id'] = input('post.lbtid');//获取id
        $res = $user->where($where)->delete();
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
