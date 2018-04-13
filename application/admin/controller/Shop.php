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
        $jw= db('com_price');
        $where=array ();
        $pageParam    = ['query' =>[]];
        if(!empty($_POST['keyword']))
        {
            $where['name']=array('like','%'.$_POST['keyword'].'%');
             //$this->assign('phone', $phone);
            $pageParam['query']['phone'] = $_POST['keyword'];
        }
    	$res=$user->join('com_fuwuqy w','shop.com_szqy = w.qycode')->where($where)->order("shop.id")->paginate(10, false, $pageParam); 

    	$qy=$fu->select();
    	$xing=$lei->select();
        $zcfg=$fg->select();
    	$page=$res->render();
        $jws=$jw->select();
        
        $this->assign("jw",$jws);
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
        $file = request()->file('logo');
        $shuju = input('post.');//获取数据
        $shuju['time'] = date("Y-m-d h:i:s",time());
        $shuju['dis']=2; 
       

        $info = $file->move(ROOT_PATH . 'public' . DS . 'uploads');    
        if($info){
             $shuju['logo']=$info->getSaveName();
        }        $user_info = $user->insert($shuju);
        if (!$user_info) {
            echo "失败";
           
        }
        else
        {
            echo "成功";
        }
        
    }
    //执行修改
    public function edit(){
        $user = db('shop');
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
     public function upload_photo(){
        $file = $this->request->file('file');
        $uid = session('ydyl_weixin_user.id');
        // if(empty($uid)){
        //     return ['code'=>404,'msg'=>'用户未登录'];
        // }
                if(!empty($file)){
                    // 移动到框架应用根目录/public/uploads/ 目录下
                    $info = $file->validate(['size'=>1048576,'ext'=>'jpg,png,gif'])->rule('uniqid')->move(ROOT_PATH . 'public' . DS . 'uploads');
                    $error = $file->getError();
                    //验证文件后缀后大小
                    if(!empty($error)){
                        dump($error);exit;
                    }
                    if($info){
                        // 成功上传后 获取上传信息
                        // 输出 jpg
                        $info->getExtension();
                        // 输出 20160820/42a79759f284b767dfcb2a0197904287.jpg
                        $info->getSaveName();
                        // 输出 42a79759f284b767dfcb2a0197904287.jpg
                        $photo = $info->getFilename();

                    }else{
                        // 上传失败获取错误信息
                        $file->getError();
                    }
                }else{
                    $photo = '';
                }
        if($photo !== ''){
            return ['code'=>1,'msg'=>'成功','photo'=>$photo];
        }else{
            return ['code'=>404,'msg'=>'失败'];
        }
    }
}