<?php
/**
 * 后台公司类型控制器 LoginController.class.php
 * ============================================================================
 * 许可声明：这是一个开源程序，未经许可不得将本软件的整体或任何部分用于商业用途及再发布。
 * ============================================================================
 * Author: yangxuya
 * Date: 2018年4月23日
*/
namespace app\adminshop\controller;

use think\Controller;

use think\Request;

use think\File;
use think\Session;

class Plan extends Controller
{
    /**
     * 判断是否登录
     * @return [type] [description]
     */
    function _initialize(){
        $code = Session::get('adminshopcode');
        if (!$code) {
           $this->redirect("adminshop");
        }
    }
	/**
     * *类型
     * @return [type] [description]
     */
    public function index()
    {

    	$comid = Session::get('adminshopid');//公司id
    	dump($comid);die;
        $plan = db("plan");//方案
        $userlx = db("com_qiyecsleixing");//类型
        $userhx = db("com_layout");//户型
        $userfg = db("com_zhuancfg");//风格
        $usersjs = db("designer");//设计师
       
        $reslx = $userlx->select();//类型
        $userhx = $userhx->select();//户型
        $userfg = $userfg->select();//风格
        $usersjs = $usersjs->select();//设计师
        // dump($reslx);	
        $this->assign("reslx",$reslx);//类型
        $this->assign("userhx",$userhx);//户型.
        $this->assign("userfg",$userfg);//风格.
        $this->assign("usersjs",$usersjs);//设计师
        $this->assign("comid",$comid);//公司id
        $where['plan.comid'] = $comid;
         //分页
        $res = $plan->field("plan.id,plan.fname,plan.flogo,plan.frenyuan,plan.fmianji,plan.fyusuan,plan.ffangshi,lx.lxname as ftype,shop.name as comid,com_layout.lname as fhuxing,com_zhuancfg.zcfgname as ffengge,designer.dname as frenyuan")
        ->join('com_qiyecsleixing lx','plan.ftype = lx.lxcode','left')//类型
        ->join('shop','plan.comid = shop.id','left')//公司
        ->join('com_layout','plan.fhuxing = com_layout.lcode','left')//户型
        ->join('com_zhuancfg','plan.ffengge = com_zhuancfg.zcfgcode','left')//风格
        ->join('designer','plan.frenyuan = designer.id','left')//设计师
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
        if($file){
        $info = $file->move(ROOT_PATH . 'public/static/' . DS . 'uploads');    
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
    //获取参数tupianguanli
    public function ajaxedit(){
    	//获取 id
    	$where['id'] = input('put.planid');
    	$res = db("plan")->where($where)->select();
    	return $res;
    }
    //图片管理
    public function ajaxtpguanli(){
    	//获取 案例id
    	$where['planid'] = input('put.planid');
    	$res = db("plan_do")->where($where)->select();
    	return $res;
    }
    public function tupianguanli(){
    	$user = db('plan_do');
        $where['planid'] = input('post.planid');//获取id
        $where['comid'] = input('post.comid');//获取id
        $shuju['logo_time'] = date("Y-m-d h:i:s",time());
        //添加图片书房
        $filesf = request()->file('img_shufang');
        if($filesf){
         $info = $filesf->move(ROOT_PATH . 'public/static/' . DS . 'uploads');    
            $shuju['logo_shufang']=$info->getSaveName();
        } 
        //添加图片卧室
        $filews = request()->file('logo_woshi');
        if($filews){
         $info = $filews->move(ROOT_PATH . 'public/static/' . DS . 'uploads');
            $shuju['logo_woshi']=$info->getSaveName();
        } 
        //添加图片儿童间
        $fileetj = request()->file('logo_ertong');
        if($fileetj){
         $info = $fileetj->move(ROOT_PATH . 'public/static/' . DS . 'uploads');
            $shuju['logo_ertong']=$info->getSaveName();
        } 

        //添加图片卫生间
        $filewsj = request()->file('logo_weishengj');
        if($filewsj){
         $info = $filewsj->move(ROOT_PATH . 'public/static/' . DS . 'uploads');
            $shuju['logo_weishengj']=$info->getSaveName();
        } 
        //添加图片客厅
        $filekt = request()->file('logo_keting');
        if($filekt){
         $info = $filekt->move(ROOT_PATH . 'public/static/' . DS . 'uploads');
            $shuju['logo_keting']=$info->getSaveName();
        } 
        //添加图片厨房
        $filecf = request()->file('logo_chufang');
        if($filecf){
         $info = $filecf->move(ROOT_PATH . 'public/static/' . DS . 'uploads');
            $shuju['logo_chufang']=$info->getSaveName();
        } 
        //添加图片餐厅
        $filect = request()->file('logo_canting');
        if($filect){
         $info = $filect->move(ROOT_PATH . 'public/static/' . DS . 'uploads');
            $shuju['logo_canting']=$info->getSaveName();
        } 
        //修改数据库
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
    //执行修改
    public function edit(){
        $user = db('plan');
        $where['id'] = input('post.planid');//获取id
        $where['comid'] = input('post.comid');//获取id
          
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
        $file = request()->file('flogo');
        if($file){
         $info = $file->move(ROOT_PATH . 'public/static/' . DS . 'uploads');    
             $shuju['flogo']=$info->getSaveName();
        } 
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
