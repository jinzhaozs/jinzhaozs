<?php
/**
 * 后台公司类型控制器 LoginController.class.php
 * ============================================================================
 * 许可声明：这是一个开源程序，未经许可不得将本软件的整体或任何部分用于商业用途及再发布。
 * ============================================================================
 * Author: yangxuya
 * Date: 2018年4月25日
*/
namespace app\admin\controller;

use think\Controller;
use think\Request;
use think\File;
use think\Session;
class Reserva extends  \app\admin\controller\Base
{
    /**
     * *类型
     * @return [type] [description]
     */
    public function index()
    {
        $type = session::get('adminusertype');
        // dump($type);die;
        $restype = uri("res_type",array());//预约状态
        $this->assign("restype",$restype);//预约状态
        // 判断级别
        switch ($type) {
            case '1':
                
                $branch = uri('branch',array());//部门信息
                $res = uri('reserva',array());//预约信息

                $this->assign("branch",$branch);//部门信息
                // dump($res);die;
                $this->assign("res",$res);//预约信息
                return $this->view->fetch();
                break;
            case '2':
                // 部门code
                $bumencode = session::get('adminuserbran');
                // 只能看到该部门的信息
                $where['zhidingbumen'] = $bumencode;//对应部门code
                $res = uri('reserva',$where);//预约信息
                // 获取该部门人员
                $wherery['brancode'] = $bumencode;
                $resrenyuan = uri("useradmin",$wherery);
                // dump($resrenyuan);die;
                $this->assign("res",$res);//预约信息
                $this->assign("resrenyuan",$resrenyuan);//人员信息
                return $this->fetch('zhuguanindex');die;

            break;
            case '3':
                // 部门code
                $bumencode = session::get('adminuserbran');
                // 人员id
                $renyuanid = session::get('adminuserid');
                // dump($renyuanid);die;
                // 只能看到该部门的信息
                $where['zhidingbumen'] = $bumencode;//对应部门code
                $where['zhidingrenyuan'] = $renyuanid;//对应人员id
                $res = uri('reserva',$where);//预约信息
                // dump($resrenyuan);die;
                $this->assign("res",$res);//预约信息
                return $this->fetch('renyuanindex');die;
            break;
            default:
                echo "请重新登陆";
                break;
        }
       
    }
    //部门——》人员
    public function ajaxbumendory(){

        $bumencode = input("post.fenpeibm");
        $where['brancode'] = $bumencode;
        $res = uri("useradmin",$where);
        return $res;
   
    }
     //执行修改
    public function edit(){
        $user = db('reserva');
        $whid = input('post.id');//获取id
        $where['id'] = $whid; 
        $shuju = input('post.');//获取数据
        $res = $user->where($where)->update($shuju);
        if (!$res) {
           $this->error("修改失败","admin/reserva/index");
        }
        else
        {
          $this->redirect("admin/reserva/index");
        }
        
    }
    //执行分配
    public function editfenpei(){
         $user = db('reserva');
        $whid = input('post.id');//获取id
        $where['id'] = $whid; 
        $shuju = input('post.');//获取数据
        $res = $user->where($where)->update($shuju);
        $this->redirect("admin/reserva/index");
    }
    //
    public function delete($id){
        $user = db('article');
        $whid = input('post.id');//获取id
          $file = input('post.pic'); 
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