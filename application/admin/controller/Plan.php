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
class Plan extends Controller
{
	/**
     * *类型
     * @return [type] [description]
     */
    public function index()
    {
    	$comid = input("comid");//公司id
    	// dump($comid);die;
        $plan = db("plan");//方案
        $userlx = db("com_qiyecsleixing");//类型
        $userhx = db("com_layout");//户型
        $userfg = db("com_zhuancfg");//风格
       
        $reslx = $userlx->select();//类型
        $userhx = $userhx->select();//户型
        $userfg = $userfg->select();//风格
        // dump($reslx);	
        $this->assign("reslx",$reslx);//类型
        $this->assign("userhx",$userhx);//户型.
        $this->assign("userfg",$userfg);//风格.
        $this->assign("comid",$comid);//公司id
        $where['plan.comid'] = $comid;
         //分页
        $res = $plan->field("plan.id,plan.fname,plan.flogo,plan.frenyuan,plan.fmianji,plan.fyusuan,plan.ffangshi,lx.lxname as ftype,shop.name as comid,com_layout.lname as fhuxing,com_zhuancfg.zcfgname as ffengge")
        ->join('com_qiyecsleixing lx','plan.ftype = lx.lxcode','left')//类型
        ->join('shop','plan.comid = shop.id','left')//公司
        ->join('com_layout','plan.fhuxing = com_layout.lcode','left')//户型
        ->join('com_zhuancfg','plan.ffengge = com_zhuancfg.zcfgcode','left')//风格
        ->order("plan.id")
        ->where($where)
        ->paginate(10);
        // dump($res);die;
        $page=$res->render();
        // 分页
        $this->assign("res",$res);
        $this->assign("page",$page);
        return $this->view->fetch();
    }
    public function add()
    {
    	// 主表添加
    	$user = db('plan'); 
    	$file = request()->file('flogo');
        $shuju = input('post.');//获取数据
        $shuju['time'] = date("Y-m-d h:i:s",time());    
        $info = $file->move(ROOT_PATH . 'public/static/' . DS . 'uploads');    
        if($info){
             $shuju['flogo']=$info->getSaveName();
        }           
        $user_info = $user->insert($shuju);//主表添加 
        //副表添加
        $shuju_do['planid'] = db('plan')->getLastInsID();  
        $shuju_do['comid'] = input('post.comid');     
        $shuju_do['logo_time'] = date("Y-m-d h:i:s",time());  
        $user_info_do = db('plan_do')->insert($shuju_do);
        if (!$user_info) {
           $this->error("添加失败","admin/plan/index",['comid'=>$shuju['comid']]);
        }else{
           $this->redirect("admin/plan/index",['comid'=>$shuju['comid']]);
        }
        
    }
    //获取参数
    public function ajaxedit(){
    	//获取 id
    	$where['id'] = input('put.planid');
    	$res = db("plan")->where($where)->select();
    	return $res;
    }
    //执行修改
    public function edit(){
        $user = db('plan');
        $where['id'] = input('post.planid');//获取id
        $where['comid'] = input('post.comid');//获取id
          // $file = request()->file('logo');
        // $shuju = input('post.');//获取数据
        $shuju['fname'] = input('post.fname');
        $shuju['ftype'] = input('post.ftype');
        $shuju['frenyuan'] = input('post.frenyuan');
        $shuju['fmianji'] = input('post.fmianji');
        $shuju['fyusuan'] = input('post.fyusuan');
        $shuju['fhuxing'] = input('post.fhuxing');
        $shuju['ffengge'] = input('post.ffengge');
        $shuju['ffangshi'] = input('post.ffangshi');
        $shuju['fjianjie'] = input('post.fjianjie');
        $shuju['time'] = date("Y-m-d h:i:s",time());
        // dump($shuju);
         // $info = $file->move(ROOT_PATH . 'public/static/' . DS . 'uploads');    
        // if($info){
        //      $shuju['logo']=$info->getSaveName();
        // } 
        $res = $user->where($where)->update($shuju);
        // echo $user->getLastsql();die;
        if (!$res) {
            $this->error("添加失败","admin/plan/index",['comid'=>input('post.comid')]);
        }
        else
        {
         $this->redirect("admin/plan/index",['comid'=>input('post.comid')]);
        }
        
    }
    //
    public function delete(){
        $user = db('plan');
        $where['id'] = input('post.planid');//获取id
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
