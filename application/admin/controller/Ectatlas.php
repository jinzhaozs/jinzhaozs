<?php
/**
 * 后台公司类型控制器 LoginController.class.php
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

class Ectatlas extends Controller
{
    /**
     * *类型
     * @return [type] [description]
     */
    public function index()
    {
       // 链接数据库赋值
        $user = db('ect_atlas');
        //获取最大lxcode;
        // $lxcode = $user->code
      
        $res = $user->select();
        $this->assign("res",$res);
        // dump($res);die;
        return $this->fetch();
    }
     public function add()
    {
         $user = db('ect_kongjian'); 
     
        $shuju = input('post.');//获取数据
        $shuju['time'] = date("Y-m-d h:i:s",time());
            
        $user_info = $user->insert($shuju);
        if (!$user_info) {
           $this->error("admin/ectkj/index");
        }
        else
        {
          $this->redirect("admin/ectkj/index");
        }
      
    }
     //执行修改
    public function edit(){
        $user = db('ect_kongjian');
        $whid = input('post.id');//获取id
        $where['id'] = $whid; 
        $shuju = input('post.');//获取数据
        $shuju['time'] = date("Y-m-d h:i:s",time());
        $res = $user->where($where)->update($shuju);
        if (!$res) {
          $this->error("admin/ectkj/index");
        }
        else
        {
          $this->redirect("admin/ectkj/index");
        }
        
    }
    //
    public function del($id){
        $user = db('ect_kongjian');
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
    

}