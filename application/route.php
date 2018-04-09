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
// 前台路由
// 注册路由到index模块的News控制器的read操作
Route::rule('/','index/Index/index');//查询
Route::rule('/index/Index/add','index/Index/add');//添加
Route::post('/index/Index/doadd','index/Index/doadd');//执行添加
Route::get('/index/Index/edit/:id','index/Index/edit');//修改
Route::post('/index/Index/doedit','index/Index/doedit');//执行修改
Route::get('/index/Index/del/:id','index/Index/del');//删除

//后台路由
Route::get('/admin','admin/Login/index');//登陆页面
Route::post('/admin/login/login','admin/Login/login');//执行登陆
