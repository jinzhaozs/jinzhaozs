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

class Bm extends Controller
{
    /**
     * *类型
     * @return [type] [description]
     */
    public function index()
    {
        // 链接数据库赋值
        $user = db('branch');
        //获取最大lxcode;
        // $lxcode = $user->code
      
        $res = $user->order("id")->paginate(10);
        $page=$res->render();
        $this->assign("page",$page);
        $this->assign("res",$res);
        // dump($res);die;
        return $this->view->fetch();
    }
   
    //执行添加
    public function add(){
        $user = db('branch');
        $shuju = input('put.');//获取数据
        $lx=$user->max('code');
         $lxcode=$lx+1;
        $shuju['code']=$lxcode;//获取lxcode
        $user_info = $user->insert($shuju);
        if (!$user_info) {
            $data = array(
                    'data' => false,
                    'code' => 500,
                    'msg'  => '添加失败',
            );

            return $data;
        }
        $data = array(
                'data' => true,
                'code' => 200,
                'msg'  => '添加成功 !',
        );
        return $data;
    }
    //执行修改
    public function edit(){
        $user = db('branch');
        $whid = input('post.id');//获取id
        $where['id'] = $whid;
        $shuju = input('put.');//获取数据
      
        $res = $user->where($where)->update($shuju);
        if (!$res) {
            $data = array(
                    'data' => false,
                    'code' => 500,
                    'msg'  => '修改失败',
            );

            return $data;
        }
        $data = array(
                'data' => true,
                'code' => 200,
                'msg'  => '修改成功 !',
        );
        return $data;
    }
    //删除
    public function del($id){
        $user = db('branch');
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