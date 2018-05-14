<?php
/**
 * 前天主页控制器 Index.php
 * ============================================================================
 * 许可声明：这是一个开源程序，未经许可不得将本软件的整体或任何部分用于商业用途及再发布。
 * ============================================================================
 * Author: yangxuya
 * Date: 2018年5月2日
*/
namespace app\shopcom\controller;

use \think\Request;

class Zixun extends \app\shopcom\controller\Base
{
    //查询
    //
    public function index()
    {
        //获取商家id
        $comid = input('comid');
        $time=date("Y-m-d");
        $where['id'] = $comid;
        $whid['ashop']=$comid;
        
        //获取服务区域列表
        //获取商家信息
        $request = Request::instance();
        $urlcanshu = $request->param();
        $grade = input('grade');
        $shopcom = $this->uri("shop",$where);
        $article=db("article")->field("id,aname,ashop,abstract,pic,content,atime")->where($whid)->paginate(10,false,['query'=>$urlcanshu,]);
        $count=count($article);
         $page=$article->render();
        $this->assign("page",$page);
        $this->assign("article",$article);
        $this->assign("shopcom",$shopcom);
        $this->assign("comid",$comid);
        $this->assign("count",$count);
       
        return $this->fetch();
    }
    
}
