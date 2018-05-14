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

class Ajaxssq extends \think\Controller
{
    //省——》市
	  public function ajaxcity()
    {
      
        $where['provincecode']=input('post.provinceid');
        $user=db("city")->where($where)->select();

        return $user;
    }
    //市区
     public function ajaxarea()
    {
      
        $where['citycode']=input('post.city');
        $user=db("area")->where($where)->select();

        return $user;
    }

}
