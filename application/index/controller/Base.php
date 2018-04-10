<?php
/**
 * 前台公共控制器 Index.php
 * ============================================================================
 * 许可声明：这是一个开源程序，未经许可不得将本软件的整体或任何部分用于商业用途及再发布。
 * ============================================================================
 * Author: yangxuya
 * Date: 2018年4月9日
*/
namespace app\index\controller;

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
	protected function uri($model, $filter)
	{

	    if($filter && is_numeric($filter)){
	        $filter  = array("id" => $filter);
	    }else if($filter && is_array($filter)){
	        $filter = $filter;
	    }else{
	       $info = db($model)->select();
	    }
	    $info = db($model)->where($filter)->select();
	    return $info;
	}
}
?>