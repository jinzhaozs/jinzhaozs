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
        $province=db('province');
        $where=array ();
        //获取参数
        $request = Request::instance();
        $urlcanshu = $request->param();
        if (!empty($urlcanshu['keyword'])) {

           $where['name']=array('like','%'.$urlcanshu['keyword'].'%');
        }

    	$res=$user->field("shop.id,name,logo,dizhi,bl,rz,sum,dis,com_price,com_fuqy,com_leixing,com_szqy,com_zcfg,zixurenshu,com_jianjie,com_koubei,com_haoping,com_tel,logo_yingyezz,name_jc,faren,zhucezijin,lianxiren,youxiang,qyname,qqkf,guimu,lianxirenshouji,top,com_paixu,zhi,com_slogan,code,pass,zhuanghoufw,shejilf,yusuanqt,shenhuasj,shenhuays,cailiaozl,hetonggf,tesefu")->join('com_fuwuqy w','shop.com_szqy = w.qycode','left')->join('shop_do d','shop.id = d.shopid','left')->where($where)->order("com_paixu desc")->paginate(10,false,[
'query'=>$urlcanshu,
]); 
        
    	$qy=$fu->select();
    	$xing=$lei->select();
        $zcfg=$fg->select();
    	$page=$res->render();
        $jws=$jw->select();
        $pro=$province->select();
        $this->assign("pr",$pro);
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
        $yz= request()->file('logo_yingyezz');
        $shuju['name'] = input('post.name');//获取数据
        $shuju['dizhi'] = input('post.dizhi');
        $shuju['bl'] = input('post.bl');
        $shuju['rz'] = input('post.rz');
        $shuju['sum'] = input('post.sum');
        $shuju['com_price'] = input('post.com_price');
        $shuju['com_fuqy'] = input('post.com_fuqy');
        $shuju['com_leixing'] = input('post.com_leixing');
        $shuju['com_szqy'] = input('post.com_szqy');
        $shuju['com_zcfg'] = input('post.com_zcfg');
        $shuju['com_slogan'] = input('post.com_slogan');
        $shuju['com_jianjie'] = input('post.com_jianjie');
        $shuju['com_tel'] = input('post.com_tel');
        $shuju['code'] = input('post.code');
        $shuju['name_jc'] = input('post.name_jc');
        $shuju['faren'] = input('post.faren');
        $shuju['zhucezijin'] = input('post.zhucezijin');
        $shuju['lianxiren'] = input('post.lianxiren');
        $shuju['youxiang'] = input('post.youxiang');
        $shuju['qqkf'] = input('post.qqkf');
        $shuju['lianxirenshouji'] = input('post.lianxirenshouji');
        $shuju['procode'] = input('post.procode');
        $shuju['citycode'] = input('post.citycode');
        $shuju['areacode'] = input('post.areacode');
        $shuju['pass'] = input('post.pass');
        $shuju['time'] = date("Y-m-d h:i:s",time());
        $shuju['pass']=md5($shuju['pass']);
        $shuju['dis']=2; 
        $shuju['top']=2;
       if($file)
       { 
            $info = $file->move(ROOT_PATH . 'public/static/' . DS . 'uploads'); 
       
        if($info){
             $shuju['logo']=$info->getSaveName();
        } 
      }
        if($yz)
       { 
            $infos = $yz->move(ROOT_PATH . 'public/static/' . DS . 'uploads'); 
       
        if($infos){
             $shuju['logo_yingyezz']=$infos->getSaveName();
        } 
      }       
        $user_info = $user->insert($shuju);
        // 添加副表信息
        $shuju_do['shopid'] = db('shop')->getLastInsID(); 
        $shuju_do['guimu'] = input('post.guimu');
        $shuju_do['zhuanghoufw'] = input('post.zhuanghoufw');
        $shuju_do['shejilf'] = input('post.shejilf');
        $shuju_do['yusuanqt'] = input('post.yusuanqt');
        $shuju_do['shenhuasj'] = input('post.shenhuasj');
        $shuju_do['shenhuays'] = input('post.shenhuays');
        $shuju_do['cailiaozl'] = input('post.cailiaozl');
        $shuju_do['hetonggf'] = input('post.hetonggf');
        $shuju_do['tesefu'] = input('post.tesefu');
        $user_info_do = db('shop_do')->insert($shuju_do);
        if (!$user_info) {
           $this->error("添加失败","admin/Shop/index");
        }
        else
        {
          $this->redirect("admin/Shop/index");
        }
        
    }
    //执行修改
    public function edit(){
        $user = db('shop');
        $whid = input('post.id');//获取id
        $where['id'] = $whid; 
       $shuju['name'] = input('post.name');//获取数据
        $shuju['dizhi'] = input('post.dizhi');
        $shuju['bl'] = input('post.bl');
        $shuju['rz'] = input('post.rz');
        $shuju['sum'] = input('post.sum');
        $shuju['com_price'] = input('post.com_price');
        $shuju['com_fuqy'] = input('post.com_fuqy');
        $shuju['com_leixing'] = input('post.com_leixing');
        $shuju['com_szqy'] = input('post.com_szqy');
        $shuju['com_zcfg'] = input('post.com_zcfg');
        $shuju['com_slogan'] = input('post.com_slogan');
        $shuju['com_jianjie'] = input('post.com_jianjie');
        $shuju['com_tel'] = input('post.com_tel');
        $shuju['name_jc'] = input('post.name_jc');
        $shuju['faren'] = input('post.faren');
        $shuju['zhucezijin'] = input('post.zhucezijin');
        $shuju['lianxiren'] = input('post.lianxiren');
        $shuju['youxiang'] = input('post.youxiang');
        $shuju['qqkf'] = input('post.qqkf');
        $shuju['top'] = input('post.top');
        $shuju['lianxirenshouji'] = input('post.lianxirenshouji');
        $shuju['procode'] = input('post.procode');
        $shuju['citycode'] = input('post.citycode');
        $shuju['areacode'] = input('post.areacode');
        $file = request()->file('logo');
        $yz= request()->file('logo_yingyezz');
        $shuju['time'] = date("Y-m-d h:i:s",time());
         if($file)
       { 
         $info = $file->move(ROOT_PATH . 'public/static/' . DS . 'uploads');    
        if($info){
             $shuju['logo']=$info->getSaveName();
        } 
       }
        if($yz)
       { 
            $infos = $yz->move(ROOT_PATH . 'public/static/' . DS . 'uploads'); 
       
        if($infos){
             $shuju['logo_yingyezz']=$infos->getSaveName();
        } 
      }   
        $res = $user->where($where)->update($shuju);
        
        $shuju_do['guimu'] = input('post.guimu');
        $shuju_do['zhuanghoufw'] = input('post.zhuanghoufw');
        $shuju_do['shejilf'] = input('post.shejilf');
        $shuju_do['yusuanqt'] = input('post.yusuanqt');
        $shuju_do['shenhuasj'] = input('post.shenhuasj');
        $shuju_do['shenhuays'] = input('post.shenhuays');
        $shuju_do['cailiaozl'] = input('post.cailiaozl');
        $shuju_do['hetonggf'] = input('post.hetonggf');
        $shuju_do['tesefu'] = input('post.tesefu');
        $wheres['shopid']=$whid;
        $user_info_do = db('shop_do')->where($wheres)->update($shuju_do);
        if (!$res) {
           $this->error("修改失败","admin/Shop/index");
        }
        else
        {
           $this->redirect("admin/Shop/index");
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
          $images= input('post.images');
          if($images){
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
        $zhi=db("shop")->field("zhi,id")->order("com_paixu desc")->find();
        if($zhi['zhi']==1)
        {
            $whid['id']=$zhi['id'];

             $shuju['zhi']=2;
              $lx= db("shop")->max('com_paixu');
             $shuju['com_paixu']=$lx-2;
           $qzhi=db("shop")->where($whid)->update($shuju); 
        }
        $lx= db("shop")->max('com_paixu');
         $shuju['com_paixu']=$lx+1;
         $shuju['zhi']=1;

        $res = db("shop")->where($where)->update($shuju);
      return $res;
    
    }
    public function ajaxqzhi()
    {
         $where['id'] = input('put.shopid');
         $lx= db("shop")->max('com_paixu');
         $shuju['com_paixu']=$lx-2;
         $shuju['zhi']=2;
          
        $res = db("shop")->where($where)->update($shuju);
        return $res;
    }
    public function ajaxcode()
    {
      $where['code']=input('put.code');
      $user=db("shop")->where($where)->count();
      return $user;
    }
  
    
}