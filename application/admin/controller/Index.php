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

use think\Session;
class Index extends Controller
{
	/**
     * *类型
     * @return [type] [description]
     */
    public function index()
    {
       // Session::set('456',123);
    	$aa = Session::get();
        // Session::clear();
        // echo 123;
        dump($aa);die;
        return $this->view->fetch();
    }
}
