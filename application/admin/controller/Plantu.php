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
class Plantu extends \app\admin\controller\Base
{
	/**
     * *类型
     * @return [type] [description]
     */
    public function shufangindex()
    {
        //获取参数
        $com['id'] = input('comid');
        $plan['id'] = input('planid');
        // 转换名称
        $com['name'] = uri('shop',array('id'=>$com['id']))[0]['name_jc'];
        $plan['name'] = uri('plan',array('id'=>$plan['id']))[0]['fname'];
        $user = db('plan_shufang');
        $where['comid'] = $com['id'];
        $where['planid'] = $plan['id'];
       // 链接数据库赋值
      
        $res = $user->where($where)->paginate(10);
        $page=$res->render();
        $this->assign("page",$page);
        $this->assign("com",$com);//公司
        $this->assign("plan",$plan);//案例
        $this->assign("res",$res);
        // dump($res);die;
        return $this->view->fetch();
    }
}
