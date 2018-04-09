<?php
namespace app\admin\controller;

use think\Controller;

class Index extends Controller
{
	//查询
    public function index()
    {
    	//链接数据库赋值
        $user = db('ceshi');
        $res = $user->select();
        $this->assign("res",$res);
        // dump($res);die;
        return $this->fetch();
    }
    //添加
    public function add()
    {
    	return $this->fetch();
    }
    //执行添加
    public function doadd(){
    	$user = db('ceshi');
    	$data = input('put.');//获取数据
    	$data['time'] = date("Y-m-d h:i:s",time());
    	$res = $user->insert($data);
    	if ($res) {
    		$this->redirect('index/index/index');
    	}
    }
    //修改
    public function edit(){
    	$user = db('ceshi');
    	$whid = input('id');
    	$where['id'] = $whid;
    	$res = $user->where($where)->find();
    	$this->assign("res",$res);
        // dump($res);die;
        return $this->fetch();
    }
    //执行修改
    public function doedit(){
    	$user = db('ceshi');
    	$whid = input('post.id');//获取id
    	$where['id'] = $whid;
    	$data = input('put.');//获取数据
    	$data['time'] = date("Y-m-d h:i:s",time());
    	$res = $user->where($where)->update($data);
    	if ($res) {
    		$this->redirect('index/index/index');
    	}
    }
    //删除
    public function del($id){
    	$user = db('ceshi');
    	$res = $user->where('id',$id)->delete();
    	if ($res) {
    		$this->redirect('index/index/index');
    	}
    }
}
