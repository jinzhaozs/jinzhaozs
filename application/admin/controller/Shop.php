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
        //获取参数
        $request = Request::instance();
        $urlcanshu = $request->param();
        if (!empty($urlcanshu['keyword'])) {

           $where['name']=array('like','%'.$urlcanshu['keyword'].'%');
        }

    	$res=$user->field("shop.id,name,logo,dizhi,bl,rz,sum,dis,com_price,com_fuqy,com_leixing,com_szqy,com_zcfg,zixurenshu,com_jianjie,com_koubei,com_haoping,com_tel,qyname,top,com_paixu")->join('com_fuwuqy w','shop.com_szqy = w.qycode')->where($where)->order("com_paixu desc")->paginate(10,false,[
'query'=>$urlcanshu,
]); 
        
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
        $shuju['top']=2;
       if($file)
       { 
            $info = $file->move(ROOT_PATH . 'public/static/' . DS . 'uploads'); 
       
        if($info){
             $shuju['logo']=$info->getSaveName();
        } 
      }       
        $user_info = $user->insert($shuju);
        if (!$user_info) {
           $this->error("添加失败","admin/Shop/index");
        }
        else
        {
          $this->success("添加成功","admin/Shop/index");
        }
        
    }
    //执行修改
    public function edit(){
        $user = db('shop');
        $whid = input('post.id');//获取id
        $where['id'] = $whid; 
        $shuju = input('post.');//获取数据
        $file = request()->file('logo');
        $shuju['time'] = date("Y-m-d h:i:s",time());
         if($file)
       { 
         $info = $file->move(ROOT_PATH . 'public/static/' . DS . 'uploads');    
        if($info){
             $shuju['logo']=$info->getSaveName();
        } 
       }
        $res = $user->where($where)->update($shuju);
        if (!$res) {
           $this->error("修改失败","admin/Shop/index");
        }
        else
        {
          $this->success("修改成功","admin/Shop/index");
        }
        
    }
    //
    public function delete($id){
        $user = db('shop');
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
    //置顶
       public function ajaxedit(){
        //获取 id
        $where['id'] = input('put.shopid');
        $zhi=db("shop")->field('com_paixu')->select();
        if(deep_in_array('2', $zhi))
        {
            $re=db("shop")->where('com_paixu',2)->update(['com_paixu' => 1]);
        }
        $lx= db("shop")->max('com_paixu');
         $shuju['com_paixu']=$lx+1;
       
        
        $res = db("shop")->where($where)->update($shuju);
        return $res;
    
    }
    public function ajaxqzhi()
    {
         $where['id'] = input('put.shopid');
         $shuju['com_paixu']=1;
        
        $res = db("shop")->where($where)->update($shuju);
        return $res;
    }
    
}