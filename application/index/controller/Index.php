<?php
/**
 * 前天主页控制器 Index.php
 * ============================================================================
 * 许可声明：这是一个开源程序，未经许可不得将本软件的整体或任何部分用于商业用途及再发布。
 * ============================================================================
 * Author: yangxuya
 * Date: 2018年4月9日
*/
namespace app\index\controller;


class Index extends \app\index\controller\Base
{
	//查询
    public function index()
    {
        //获取数据
        $type = input('type'); // 获取类型 code
        if ($type) {
            $whereleixing['com_leixing'] = array('like',"%$type,%");
        }else{
            $whereleixing = array();
        }
        // dump($whereleixing);
    	//链接数据库赋值
        $com_leixing = $this->uri("com_qiyecsleixing",array());//类型
        $com_fuwuquyu = $this->uri("com_fuwuqy",array());//服务区域
        $com_fengge = $this->uri("com_zhuancfg",array());//风格
        $com_suozaiqu = $this->uri("com_suozaiqu",array());//所在区域

        $shop = $this->uri("shop",$whereleixing);//公司信息
        
        $this->assign("com_leixing",$com_leixing);
        $this->assign("com_fuwuquyu",$com_fuwuquyu);
        $this->assign("com_fengge",$com_fengge);
        $this->assign("com_suozaiqu",$com_suozaiqu);
        $this->assign("shop",$shop);
        return $this->fetch();
    }
}
