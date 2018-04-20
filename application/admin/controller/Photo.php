<?php
/**
 * 后台图片控制器 LoginController.class.php
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


class Photo extends Controller
{
	public function index()
	{
		$where=array ();
		$comid= input('param.id');
        $where['extatlas']=$comid;
		$user=db('ect_photo');
		$fg= db('com_zhuancfg');//风格
		$kj= db('ect_kongjian');
		$jb= db('ect_jubu');
		$em= db('ect_remen');
        //获取参数
        $request = Request::instance();
        $urlcanshu = $request->param();
        if (!empty($urlcanshu['keyword'])) {
           $where['phname']=array('like','%'.$urlcanshu['keyword'].'%');
        }
    	$res=$user->field("ect_photo.id,phname,shangcz,extatlas,pimage,ect_kongjian,ect_jubu,ect_zcfg,ect_remen,zcfgcode,zcfgname,ername,ercode,ekname,ekcode")->join('com_zhuancfg zc','ect_photo.ect_zcfg= zc.zcfgcode')->join('ect_kongjian kj','ect_photo.ect_kongjian= kj.ekcode')->join('ect_remen rm','ect_photo.ect_remen= rm.ercode')->where($where)->order("ect_photo.id")->paginate(10,false,['query'=>$urlcanshu,]);
    	 $zcfg=$fg->select(); 
    	$page=$res->render();
    	$kong=$kj->select();
    	$jubu=$jb->select();
    	$remen=$em->select();
       $this->assign("comid",$comid);
       $this->assign("kong",$kong);
       $this->assign("jubu",$jubu);
       $this->assign("remen",$remen);
    	$this->assign("zcfg",$zcfg);
    	$this->assign("page",$page);
    	$this->assign("res",$res);
		return $this->view->fetch();
	}
	public function add()
	{
		
	}
	public function edit()
	{
		
	}
	 public function del($id){
        $user = db('ect_photo');
        $whid = input('post.id');//获取id
          $file = input('post.image'); 
          if($file){
             $result = @unlink ($file);
          }
        
  
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