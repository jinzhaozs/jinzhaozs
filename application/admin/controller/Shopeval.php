<?php
/**
 * 后台公司点评控制器 LoginController.class.php
 * ============================================================================
 * 许可声明：这是一个开源程序，未经许可不得将本软件的整体或任何部分用于商业用途及再发布。
 * ============================================================================
 * Author: yangxuya
 * Date: 2018年5月7日
*/
namespace app\admin\controller;

use think\Controller;
use think\Request;
use think\File;

class Shopeval extends  \app\admin\controller\Base
{
    /**
     * *类型
     * @return [type] [description]
     */
    public function index()
    {
         //获取参数
        $com['id'] = input('comid');
        $plan['id'] = input('planid');
        // 转换名称
        $com['name'] = uri('shop',array('id'=>$com['id']))[0]['name_jc'];
        $plan['name'] = uri('plan',array('id'=>$plan['id']))[0]['fname'];
        $user = db('com_evaluate');
        $where['comid'] = $com['id'];
        $where['planid'] = $plan['id'];
       // 链接数据库赋值
      
        $res = $user->where($where)->paginate(10);
        $page=$res->render();
        $this->assign("page",$page);
        $this->assign("com",$com);//公司
        $this->assign("plan",$plan);//案例
        $this->assign("res",$res);
        // dump($res);die;
        return $this->view->fetch();
    }
     public function add()
    {
        $user = db('com_evaluate'); 
        $file = request()->file('logo');
        $shuju = input('post.');//获取数据   
        if($file){
        $info = $file->move(ROOT_PATH . 'public/static/' . DS . 'uploads');    
             $shuju['logo']=$info->getSaveName();
        }           
        $user_info = $user->insert($shuju);//主表添加 
        if (!$user_info) {
           $this->error("添加失败","admin/Shopeval/index",['comid'=>$shuju['comid'],'planid'=>$shuju['planid']]);
        }else{
           $this->redirect("admin/Shopeval/index",['comid'=>$shuju['comid'],'planid'=>$shuju['planid']]);
        }
    }
     //执行修改
    public function edit(){
        $user = db('com_evaluate');
        $where['id'] = input('post.id');//获取id
        $where['comid'] = input('post.comid');//获取id
        $where['planid'] = input('post.planid');//获取id
          
        $shuju = input('post.');//获取数据
        // dump($shuju);
        $file = request()->file('logo');
        if($file){
         $info = $file->move(ROOT_PATH . 'public/static/' . DS . 'uploads');    
             $shuju['logo']=$info->getSaveName();
        } 
        $res = $user->where($where)->update($shuju);
        // echo $user->getLastsql();die;
      if (!$res) {
           $this->error("添加失败","admin/Shopeval/index",['comid'=>$shuju['comid'],'planid'=>$shuju['planid']]);
        }else{
           $this->redirect("admin/Shopeval/index",['comid'=>$shuju['comid'],'planid'=>$shuju['planid']]);
        }
        
    }
    //
    public function del(){
          $user = db('com_evaluate');
        $where['id'] = input('post.sfid');//获取id
        // return $where['id'];
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