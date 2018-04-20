<?php
/**
 * 后台图册类型控制器 LoginController.class.php
 * ============================================================================
 * 许可声明：这是一个开源程序，未经许可不得将本软件的整体或任何部分用于商业用途及再发布。
 * ============================================================================
 * Author: yangxuya
 * Date: 2018年4月8日
*/
namespace app\admin\controller;

use think\Controller;

class Tuce extends Controller
{
    /**
     * *类型
     * @return [type] [description]
     */
    //面积
    public function mianji()
    {
        // 链接数据库赋值
        $user = db('ect_mianji');
        //获取最大lxcode;
        // $lxcode = $user->code
      
        $res = $user->order("paixu")->order("id")->paginate(10);
        $page=$res->render();
        $this->assign("page",$page);
        $this->assign("res",$res);
        // dump($res);die;
        return $this->view->fetch();
    }
    //执行添加
    public function mianjiadd(){
        $user = db('ect_mianji');
        $shuju = input('put.');//获取数据
        $shuju['time'] = date("Y-m-d h:i:s",time());
       
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
    public function mianjiedit(){
        $user = db('ect_mianji');
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
    public function mianjidel($id){
        $user = db('ect_mianji');
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
     //局部
    public function jubu()
    {
        // 链接数据库赋值
        $user = db('ect_jubu');
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
    public function jubuadd(){
        $user = db('ect_jubu');
        $shuju = input('put.');//获取数据
        $shuju['time'] = date("Y-m-d h:i:s",time());
         $lx=$user->max('ejcode');
         $lxcode=$lx+1;
        $shuju['ejcode']=$lxcode;//获取lxcode
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
    public function jubuedit(){
        $user = db('ect_jubu');
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
    public function jubudel($id){
        $user = db('ect_jubu');
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
    //热门标签
    public function remen()
    {
        // 链接数据库赋值
        $user = db('ect_remen');
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
    public function remenadd(){
        $user = db('ect_remen');
        $shuju = input('put.');//获取数据
        $shuju['time'] = date("Y-m-d h:i:s",time());
         $lx=$user->max('ercode');
         $lxcode=$lx+1;
        $shuju['ercode']=$lxcode;//获取lxcode
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
    public function remenedit(){
        $user = db('ect_remen');
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
    public function remendel($id){
        $user = db('ect_remen');
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