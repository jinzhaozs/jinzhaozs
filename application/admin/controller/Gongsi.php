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

class Gongsi extends Controller
{
    /**
     * *类型
     * @return [type] [description]
     */
    public function fwleixing()
    {
        // 链接数据库赋值
        $user = db('com_qiyecsleixing');
        //获取最大lxcode;
        // $lxcode = $user->code
      
        $res = $user->order("lxpaixu")->order("id")->paginate(10);
        $page=$res->render();
        $this->assign("page",$page);
        $this->assign("res",$res);
        // dump($res);die;
        return $this->view->fetch();
    }
    //执行添加
    public function doadd(){
        $user = db('com_qiyecsleixing');
        $shuju = input('put.');//获取数据
        $shuju['time'] = date("Y-m-d h:i:s",time());
        $lx=$user->max('lxcode');
         $lxcode=$lx+1;
        $shuju['lxcode']=$lxcode;//获取lxcode
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
    public function doedit(){
        $user = db('com_qiyecsleixing');
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
        $user = db('com_qiyecsleixing');
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
    /**
     * *服务区域
     * @return [type] [description]
     */
    public function fuwuqu()
    {
        // 链接数据库赋值
        $user = db('com_fuwuqy');
        $res = $user->order("qypaixu")->order("id")->paginate(10);
        $page=$res->render();
        $this->assign("page",$page);
        $this->assign("res",$res);
        // dump($res);die;
        return $this->view->fetch();
    }
    //执行添加
    public function fuwuquadd(){
        $user = db('com_fuwuqy');
        $shuju = input('put.');//获取数据
        $shuju['time'] = date("Y-m-d h:i:s",time());
         $lx=$user->max('qycode');
         $qycode=$lx+1;
        $shuju['qycode']=$qycode;//获取lxcode
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
    public function fuwuquedit(){
        $user = db('com_fuwuqy');
        $whid = input('post.id');//获取id
        $where['id'] = $whid;
        $shuju = input('put.');//获取数据
        $shuju['time'] = date("Y-m-d h:i:s",time());
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
    public function fuwuqudel($id){
        $user = db('com_fuwuqy');
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
    /**
     * 专长风格
     * @return [type] [description]
     */
    public function zhuancfg()
    {
        // 链接数据库赋值
        $user = db('com_zhuancfg');
        $res = $user->order("zcfgpaixu asc")->paginate(10);
        $page=$res->render();
        $this->assign("page",$page);
        // echo $user->getlastsql();die;
        $this->assign("res",$res);
        // dump($res);die;
        return $this->view->fetch();
    }
    //执行添加
    public function zhuancfgadd(){
        $user = db('com_zhuancfg');
        $shuju = input('put.');//获取数据
        $shuju['time'] = date("Y-m-d h:i:s",time());
        $lx=$user->max('zcfgcode');
        $zcfgcode=$lx+1;
        $shuju['zcfgcode']=$zcfgcode;
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
    public function zhuancfgedit(){
        $user = db('com_zhuancfg');
        $whid = input('post.id');//获取id
        $where['id'] = $whid;
        $shuju = input('put.');//获取数据
        $shuju['time'] = date("Y-m-d h:i:s",time());
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
    public function zhuancfgdel($id){
        $user = db('com_zhuancfg');
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
    /**
     * 所在区域
     * @return [type] [description]
     */
    public function suozaiqu()
    {
        // 链接数据库赋值
        $user = db('com_suozaiqu');
        $res = $user->order("qypaixu asc")->select();
        // echo $user->getlastsql();die;
        $this->assign("res",$res);
        // dump($res);die;
        return $this->view->fetch();
    }
    //执行添加
    public function suozaiquadd(){
        $user = db('com_suozaiqu');
        $shuju = input('put.');//获取数据
        $shuju['time'] = date("Y-m-d h:i:s",time());
         $lx=$user->max('qycode');
        $qycode=$lx+1;
        $shuju['qycode']=$qycode;
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
    public function suozaiquedit(){
        $user = db('com_suozaiqu');
        $whid = input('post.id');//获取id
        $where['id'] = $whid;
        $shuju = input('put.');//获取数据
        $shuju['time'] = date("Y-m-d h:i:s",time());
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
    public function suozaiqudel($id){
        $user = db('com_suozaiqu');
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
    //服务价位
    public function price()
    {
        // 链接数据库赋值
        $user = db('com_price');
        $res = $user->order("id")->paginate(10);
        $page=$res->render();
        $this->assign("page",$page);
        $this->assign("res",$res);
        // dump($res);die;
        return $this->view->fetch();
    }
    //执行添加
    public function priceadd(){
        $user = db('com_price');
        $shuju = input('put.');//获取数据
        $shuju['time'] = date("Y-m-d h:i:s",time());
         $lx=$user->max('pcode');
         $qycode=$lx+1;
        $shuju['pcode']=$qycode;//获取lxcode
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
    public function priceedit(){
        $user = db('com_price');
        $whid = input('post.id');//获取id
        $where['id'] = $whid;
        $shuju = input('put.');//获取数据
        $shuju['time'] = date("Y-m-d h:i:s",time());
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
    public function pricedel($id){
        $user = db('com_price');
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
    //户型
    public function layout()
    {
        // 链接数据库赋值
        $user = db('com_layout');
        $res = $user->order("id")->paginate(10);
        $page=$res->render();
        $this->assign("page",$page);
        $this->assign("res",$res);
        // dump($res);die;
        return $this->view->fetch();
    }
    //执行添加
    public function layoutadd(){
        $user = db('com_layout');
        $shuju = input('put.');//获取数据
        $shuju['time'] = date("Y-m-d h:i:s",time());
         $lx=$user->max('lcode');
         $qycode=$lx+1;
        $shuju['pcode']=$qycode;//获取lxcode
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
    public function layoutedit(){
        $user = db('com_layout');
        $whid = input('post.id');//获取id
        $where['id'] = $whid;
        $shuju = input('put.');//获取数据
        $shuju['time'] = date("Y-m-d h:i:s",time());
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
    public function layoutdel($id){
        $user = db('com_layout');
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
