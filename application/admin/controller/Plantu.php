<?php
/**
 * 后台公司类型控制器 LoginController.class.php
 * ============================================================================
 * 许可声明：这是一个开源程序，未经许可不得将本软件的整体或任何部分用于商业用途及再发布。
 * ============================================================================
 * Author: yangxuya
 * Date: 2018年4月13日
*/
namespace app\admin\controller;

use think\Controller;

use think\Request;

use think\File;
class Plantu extends \app\admin\controller\Base
{
	/**
     * *类型
     * @return [type] [description]
     */
    public function shufangindex()
    {
        //获取参数
        $com['id'] = input('comid');
        $plan['id'] = input('planid');
        // 转换名称
        $com['name'] = uri('shop',array('id'=>$com['id']))[0]['name_jc'];
        $plan['name'] = uri('plan',array('id'=>$plan['id']))[0]['fname'];
        $user = db('plan_shufang');
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
    //书房add
    public function shufangadd(){
        $user = db('plan_shufang'); 
        $file = request()->file('logo');
        $shuju = input('post.');//获取数据
        $shuju['time'] = date("Y-m-d h:i:s",time());    
        if($file){
        $info = $file->move(ROOT_PATH . 'public/static/' . DS . 'uploads');    
             $shuju['logo']=$info->getSaveName();
        }           
        $user_info = $user->insert($shuju);//主表添加 
        if (!$user_info) {
           $this->error("添加失败","admin/plantu/shufangindex",['comid'=>$shuju['comid'],'planid'=>$shuju['planid']]);
        }else{
           $this->redirect("admin/plantu/shufangindex",['comid'=>$shuju['comid'],'planid'=>$shuju['planid']]);
        }
    }
    //书房edit
    public function shufangedit(){
        $user = db('plan_shufang');
        $where['id'] = input('post.id');//获取id
        $where['comid'] = input('post.comid');//获取id
        $where['planid'] = input('post.planid');//获取id
          
        $shuju = input('post.');//获取数据
        $shuju['time'] = date("Y-m-d h:i:s",time());
        // dump($shuju);
        $file = request()->file('logo');
        if($file){
         $info = $file->move(ROOT_PATH . 'public/static/' . DS . 'uploads');    
             $shuju['logo']=$info->getSaveName();
        } 
        $res = $user->where($where)->update($shuju);
        // echo $user->getLastsql();die;
      if (!$res) {
           $this->error("添加失败","admin/plantu/shufangindex",['comid'=>$shuju['comid'],'planid'=>$shuju['planid']]);
        }else{
           $this->redirect("admin/plantu/shufangindex",['comid'=>$shuju['comid'],'planid'=>$shuju['planid']]);
        }
    }
    // 书房del
    public function shufangdel(){
         $user = db('plan_shufang');
        $where['id'] = input('post.sfid');//获取id
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
    //施工图
     public function shigongindex()
    {
        //获取参数
        $com['id'] = input('comid');
        $plan['id'] = input('planid');
        // 转换名称
        $com['name'] = uri('shop',array('id'=>$com['id']))[0]['name_jc'];
        $plan['name'] = uri('plan',array('id'=>$plan['id']))[0]['fname'];
        $user = db('plan_shigongtu');
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
    //施工图add
    public function shigongadd(){
        $user = db('plan_shigongtu'); 
        $file = request()->file('logo');
        $shuju = input('post.');//获取数据
        $shuju['time'] = date("Y-m-d h:i:s",time());    
        if($file){
        $info = $file->move(ROOT_PATH . 'public/static/' . DS . 'uploads');    
             $shuju['logo']=$info->getSaveName();
        }           
        $user_info = $user->insert($shuju);//主表添加 
        if (!$user_info) {
           $this->error("添加失败","admin/plantu/shigongindex",['comid'=>$shuju['comid'],'planid'=>$shuju['planid']]);
        }else{
           $this->redirect("admin/plantu/shigongindex",['comid'=>$shuju['comid'],'planid'=>$shuju['planid']]);
        }
    }
    //施工图edit
    public function shigongedit(){
        $user = db('plan_shufang');
        $where['id'] = input('post.id');//获取id
        $where['comid'] = input('post.comid');//获取id
        $where['planid'] = input('post.planid');//获取id
          
        $shuju = input('post.');//获取数据
        $shuju['time'] = date("Y-m-d h:i:s",time());
        // dump($shuju);
        $file = request()->file('logo');
        if($file){
         $info = $file->move(ROOT_PATH . 'public/static/' . DS . 'uploads');    
             $shuju['logo']=$info->getSaveName();
        } 
        $res = $user->where($where)->update($shuju);
        // echo $user->getLastsql();die;
      if (!$res) {
           $this->error("添加失败","admin/plantu/shigongindex",['comid'=>$shuju['comid'],'planid'=>$shuju['planid']]);
        }else{
           $this->redirect("admin/plantu/shigongindex",['comid'=>$shuju['comid'],'planid'=>$shuju['planid']]);
        }
    }
    // 施工图del
    public function shigongdel(){
         $user = db('plan_shufang');
        $where['id'] = input('post.sfid');//获取id
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
    //餐厅
     public function cantingindex()
    {
        //获取参数
        $com['id'] = input('comid');
        $plan['id'] = input('planid');
        // 转换名称
        $com['name'] = uri('shop',array('id'=>$com['id']))[0]['name_jc'];
        $plan['name'] = uri('plan',array('id'=>$plan['id']))[0]['fname'];
        $user = db('plan_canting');
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
    //餐厅add
    public function cantingadd(){
        $user = db('plan_canting'); 
        $file = request()->file('logo');
        $shuju = input('post.');//获取数据
        $shuju['time'] = date("Y-m-d h:i:s",time());    
        if($file){
        $info = $file->move(ROOT_PATH . 'public/static/' . DS . 'uploads');    
             $shuju['logo']=$info->getSaveName();
        }           
        $user_info = $user->insert($shuju);//主表添加 
        if (!$user_info) {
           $this->error("添加失败","admin/plantu/cantingindex",['comid'=>$shuju['comid'],'planid'=>$shuju['planid']]);
        }else{
           $this->redirect("admin/plantu/cantingindex",['comid'=>$shuju['comid'],'planid'=>$shuju['planid']]);
        }
    }
    //餐厅edit
    public function cantingedit(){
        $user = db('plan_canting');
        $where['id'] = input('post.id');//获取id
        $where['comid'] = input('post.comid');//获取id
        $where['planid'] = input('post.planid');//获取id
          
        $shuju = input('post.');//获取数据
        $shuju['time'] = date("Y-m-d h:i:s",time());
        // dump($shuju);
        $file = request()->file('logo');
        if($file){
         $info = $file->move(ROOT_PATH . 'public/static/' . DS . 'uploads');    
             $shuju['logo']=$info->getSaveName();
        } 
        $res = $user->where($where)->update($shuju);
        // echo $user->getLastsql();die;
      if (!$res) {
           $this->error("添加失败","admin/plantu/cantingindex",['comid'=>$shuju['comid'],'planid'=>$shuju['planid']]);
        }else{
           $this->redirect("admin/plantu/cantingindex",['comid'=>$shuju['comid'],'planid'=>$shuju['planid']]);
        }
    }
    // 餐厅del
    public function cantingdel(){
         $user = db('plan_canting');
        $where['id'] = input('post.sfid');//获取id
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
     //厨房
     public function chufangindex()
    {
        //获取参数
        $com['id'] = input('comid');
        $plan['id'] = input('planid');
        // 转换名称
        $com['name'] = uri('shop',array('id'=>$com['id']))[0]['name_jc'];
        $plan['name'] = uri('plan',array('id'=>$plan['id']))[0]['fname'];
        $user = db('plan_chufang');
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
    //厨房add
    public function chufangadd(){
        $user = db('plan_chufang'); 
        $file = request()->file('logo');
        $shuju = input('post.');//获取数据
        $shuju['time'] = date("Y-m-d h:i:s",time());    
        if($file){
        $info = $file->move(ROOT_PATH . 'public/static/' . DS . 'uploads');    
             $shuju['logo']=$info->getSaveName();
        }           
        $user_info = $user->insert($shuju);//主表添加 
        if (!$user_info) {
           $this->error("添加失败","admin/plantu/chufangindex",['comid'=>$shuju['comid'],'planid'=>$shuju['planid']]);
        }else{
           $this->redirect("admin/plantu/chufangindex",['comid'=>$shuju['comid'],'planid'=>$shuju['planid']]);
        }
    }
    //厨房edit
    public function chufangedit(){
        $user = db('plan_chufang');
        $where['id'] = input('post.id');//获取id
        $where['comid'] = input('post.comid');//获取id
        $where['planid'] = input('post.planid');//获取id
          
        $shuju = input('post.');//获取数据
        $shuju['time'] = date("Y-m-d h:i:s",time());
        // dump($shuju);
        $file = request()->file('logo');
        if($file){
         $info = $file->move(ROOT_PATH . 'public/static/' . DS . 'uploads');    
             $shuju['logo']=$info->getSaveName();
        } 
        $res = $user->where($where)->update($shuju);
        // echo $user->getLastsql();die;
      if (!$res) {
           $this->error("添加失败","admin/plantu/chufangindex",['comid'=>$shuju['comid'],'planid'=>$shuju['planid']]);
        }else{
           $this->redirect("admin/plantu/chufangindex",['comid'=>$shuju['comid'],'planid'=>$shuju['planid']]);
        }
    }
    // 厨房del
    public function chufangdel(){
         $user = db('plan_chufang');
        $where['id'] = input('post.sfid');//获取id
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
