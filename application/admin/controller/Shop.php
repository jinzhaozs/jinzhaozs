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

class Shop extends Controller
{
    /**
     * *类型
     * @return [type] [description]
     */
    public function index()
    {
    	$user=db('shop');
    	$fu=db('com_fuwuqy');
    	$lei = db('com_qiyecsleixing');
        $fg= db('com_zhuancfg');
    	$res=$user->order("id")->paginate(10);
    	$qy=$fu->select();
    	$xing=$lei->select();
        $zcfg=$fg->select();
    	$page=$res->render();
        $this->assign("zcfg",$zcfg);
    	$this->assign("xing",$xing);
    	$this->assign("qy",$qy);
    	$this->assign("page",$page);
    	$this->assign("res",$res);
        return $this->view->fetch();
    }
    public function add()
    {
    	$user = db('shop');
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
    //
    public function delete($id){
        $user = db('shop');
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