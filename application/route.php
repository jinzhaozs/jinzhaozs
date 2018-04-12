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
// 注册路由到index模块的News控制器的read操作
Route::rule('/','index/Index/index');//查询
Route::rule('/zxgs','index/Index/index');//查询
Route::rule('/aa','index/Index/aa');//查询
//后台
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

//公司
Route::rule('/admin/shop/index','admin/shop/index');//公司详情
Route::rule('/admin/shop/add','admin/shop/add');//添加
Route::rule('/admin/shop/edit','admin/shop/edit');//修改
Route::rule('/admin/shop/delete','admin/shop/delete');//删除admin/Shop/upload_photo
