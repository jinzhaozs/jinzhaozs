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

class Plan extends Controller
{
	/**
     * *类型
     * @return [type] [description]
     */
    public function index()
    {
        // echo "案例";die;
        return $this->view->fetch();
    }
}
