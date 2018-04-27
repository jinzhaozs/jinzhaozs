<?php
/**
 * 前台公共控制器 Index.php
 * ============================================================================
 * 许可声明：这是一个开源程序，未经许可不得将本软件的整体或任何部分用于商业用途及再发布。
 * ============================================================================
 * Author: yangxuya
 * Date: 2018年4月13日
*/
namespace app\admin\controller;

use think\Controller;

use think\Session;
class Base extends \think\Controller
{
    protected $siteName = '公共变量';
    /**
     * 统一资源定位
     * @param string $model 数据表名
     * @param array/int 过滤条件,类型为int时必须是主键
     * @param string $field 查询字段，为空时返回数组
     * @return array/string
    */
    // 初始化
    public function _initialize()
    {
        //   // Session::set('456',123);
        $sesionadusertype = Session::get('adminusertype');
        // 判断是否登陆
        if (!$sesionadusertype) {
            $this->redirect('admin/login/index');
            die;
        }
        // Session::clear();
     //    // echo 123;
        // dump($sesionadusertype);die;
        $this->assign("sesionadusertype",$sesionadusertype);
    }
}
?>