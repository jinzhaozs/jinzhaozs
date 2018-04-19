<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006~2018 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------

use think\Route;
/**
 * 前台主页
 */
// 注册路由到index模块的News控制器的read操作
Route::rule('/','index/Index/index');//查询
Route::rule('/zxgs','index/Index/index');//查询
Route::rule('/aa','index/Index/aa');//查询
/**
 * 前台公司
 */
Route::rule('/shopcom','shopcom/Index/index');
/**
 * 后台
 */
Route::rule('/admin/index/index','admin/index/index');//主页

// 服务类型
Route::rule('/admin/gongsi/fwleixing','admin/gongsi/fwleixing');//类型
Route::rule('/admin/gongsi/doadd','admin/gongsi/doadd');//类型 添加
Route::rule('/admin/gongsi/doedit','admin/gongsi/doedit');//类型 修改
Route::rule('/admin/gongsi/del','admin/gongsi/del');//类型 删除

// 服务区域
Route::rule('/admin/gongsi/fuwuqu','admin/gongsi/fuwuqu');//服务区域
Route::rule('/admin/gongsi/qyadd','admin/gongsi/fuwuquadd');// 添加
Route::rule('/admin/gongsi/qyedit','admin/gongsi/fuwuquedit');// 修改
Route::rule('/admin/gongsi/qydel','admin/gongsi/fuwuqudel');// 删除

// 所在区域
Route::rule('/admin/gongsi/suozaiqu','admin/gongsi/suozaiqu');//所在区域
Route::rule('/admin/gongsi/suozaiquadd','admin/gongsi/suozaiquadd');// 添加
Route::rule('/admin/gongsi/suozaiquedit','admin/gongsi/suozaiquedit');// 修改
Route::rule('/admin/gongsi/suozaiqudel','admin/gongsi/suozaiqudel');// 删除

// 服务风格
Route::rule('/admin/gongsi/zhuancfg','admin/gongsi/zhuancfg');//服务风格
Route::rule('/admin/gongsi/zhuancfgadd','admin/gongsi/zhuancfgadd');// 添加
Route::rule('/admin/gongsi/zhuancfgedit','admin/gongsi/zhuancfgedit');// 修改
Route::rule('/admin/gongsi/zhuancfgdel','admin/gongsi/zhuancfgdel');// 删除

// 服务价位
Route::rule('/admin/gongsi/price','admin/gongsi/price');//服务价位
Route::rule('/admin/gongsi/priceadd','admin/gongsi/priceadd');// 添加
Route::rule('/admin/gongsi/priceedit','admin/gongsi/priceedit');// 修改
Route::rule('/admin/gongsi/pricedel','admin/gongsi/pricedel');// 删除

//户型
Route::rule('/admin/gongsi/layout','admin/gongsi/layout');//户型风格
Route::rule('/admin/gongsi/layoutadd','admin/gongsi/layoutadd');// 添加
Route::rule('/admin/gongsi/layoutedit','admin/gongsi/layoutedit');// 修改
Route::rule('/admin/gongsi/layoutdel','admin/gongsi/layoutdel');// 删除
//公司
Route::rule('/admin/shop/index','admin/shop/index');//公司详情
Route::rule('/admin/shop/add','admin/shop/add');//添加
Route::rule('/admin/shop/edit','admin/shop/edit');//修改
Route::rule('/admin/shop/delete','admin/shop/delete');//删除
Route::rule('/admin/shop/ajaxedit','admin/shop/ajaxedit');//置顶
Route::rule('/admin/shop/ajaxqzhi','admin/shop/ajaxqzhi');//取消置顶

//公司案例
Route::rule('/admin/plan/index','admin/plan/index');//公司 案例列表
Route::rule('/admin/plan/add','admin/plan/add');//添加
Route::rule('/admin/plan/ajaxedit','admin/plan/ajaxedit');//修改参数
Route::rule('/admin/plan/ajaxtpguanli','admin/plan/ajaxtpguanli');//图片管理
Route::rule('/admin/plan/edit','admin/plan/edit');//修改
Route::rule('/admin/Plan/tupianguanli','admin/Plan/tupianguanli');//图片管理修改
Route::rule('/admin/plan/delete','admin/plan/delete');//删除

// 公司轮播图管理
Route::rule('/admin/Shoplbt/index','admin/Shoplbt/index');//服务价位
Route::rule('/admin/Shoplbt/add','admin/Shoplbt/add');// 添加
Route::rule('/admin/Shoplbt/edit','admin/Shoplbt/edit');// 修改
Route::rule('/admin/Shoplbt/del','admin/Shoplbt/del');// 删除

//公司设计师
Route::rule('/admin/designer/index','admin/designer/index');//公司详情
Route::rule('/admin/designer/add','admin/designer/add');//添加
Route::rule('/admin/designer/edit','admin/designer/edit');//修改
Route::rule('/admin/designer/delete','admin/designer/delete');//删除

//
Route::rule('/admin/article/index','admin/article/index');//公司 文章列表
Route::rule('/admin/article/add','admin/article/add');//添加
Route::rule('/admin/article/edit','admin/article/edit');//修改
Route::rule('/admin/article/delete','admin/article/delete');//删除
//效果图
//效果图--图册列表
Route::rule('/admin/ectatlas/index','admin/ectatlas/index');//户型风格
Route::rule('/admin/ectatlas/add','admin/ectatlas/add');// 添加
Route::rule('/admin/ectatlas/edit','admin/ectatlas/edit');// 修改
Route::rule('/admin/ectatlas/del','admin/ectatlas/del');// 删除
//效果图--空间
Route::rule('/admin/ectkj/index','admin/ectkj/index');//户型风格
Route::rule('/admin/ectkj/add','admin/ectkj/add');// 添加
Route::rule('/admin/ectkj/edit','admin/ectkj/edit');// 修改
Route::rule('/admin/ectkj/del','admin/ectkj/del');// 删除

//图册-面积
Route::rule('/admin/tuce/mianji','admin/tuce/mianji');//公司 文章列表
Route::rule('/admin/tuce/mianjiadd','admin/tuce/mianjiadd');//添加
Route::rule('/admin/tuce/mianjiedit','admin/tuce/mianjiedit');//修改
Route::rule('/admin/tuce/mianjidel','admin/tuce/mianjidel');//删除

//图册-局部
Route::rule('/admin/tuce/jubu','admin/tuce/jubu');//公司 文章列表
Route::rule('/admin/tuce/jubuadd','admin/tuce/jubuadd');//添加
Route::rule('/admin/tuce/jubuedit','admin/tuce/jubuedit');//修改
Route::rule('/admin/tuce/jubudel','admin/tuce/jubudel');//删除





