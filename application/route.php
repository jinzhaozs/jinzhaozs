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
Route::rule('/regis','index/Index/regis');//注册页面
Route::rule('/index/Index/doregis','index/Index/doregis');//执行注册
/**
 * 前台公司
 */
Route::rule('/shopcom','shopcom/Index/index');

/**
 * 后台
 */
Route::rule('/admin/index/index','admin/index/index');//主页
//预约列表
Route::rule('/admin/reserva/index','admin/reserva/index');
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
Route::rule('/admin/Shop/ajaxcode','admin/Shop/ajaxcode');//验证账号是否唯一
//公司案例
Route::rule('/admin/plan/index','admin/plan/index');//公司 案例列表
Route::rule('/admin/plan/add','admin/plan/add');//添加
Route::rule('/admin/plan/ajaxedit','admin/plan/ajaxedit');//修改参数
Route::rule('/admin/plan/ajaxtpguanli','admin/plan/ajaxtpguanli');//图片管理
Route::rule('/admin/plan/edit','admin/plan/edit');//修改
Route::rule('/admin/Plan/tupianguanli','admin/Plan/tupianguanli');//图片管理修改
Route::rule('/admin/plan/delete','admin/plan/delete');//删除
//公司工地
Route::rule('/admin/plangong/index','admin/plangong/index');//公司 案例列表
Route::rule('/admin/plangong/add','admin/plangong/add');//添加
Route::rule('/admin/plangong/ajaxedit','admin/plangong/ajaxedit');//修改参数
Route::rule('/admin/plangong/ajaxtpguanli','admin/plangong/ajaxtpguanli');//图片管理
Route::rule('/admin/plangong/edit','admin/plangong/edit');//修改
Route::rule('/admin/plangong/tupianguanli','admin/plangong/tupianguanli');//图片管理修改
Route::rule('/admin/plangong/delete','admin/plangong/delete');//删除
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

//文章
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

//图册-热门标签
Route::rule('/admin/tuce/remen','admin/tuce/remen');//公司 文章列表
Route::rule('/admin/tuce/remenadd','admin/tuce/remenadd');//添加
Route::rule('/admin/tuce/remenedit','admin/tuce/remenedit');//修改
Route::rule('/admin/tuce/remendel','admin/tuce/remendel');//删除

//效果图--图片列表
Route::rule('/admin/photo/index','admin/photo/index');//户型风格
Route::rule('/admin/photo/add','admin/photo/add');// 添加
Route::rule('/admin/photo/edit','admin/photo/edit');// 修改
Route::rule('/admin/photo/del','admin/photo/del');// 删除
//员工
Route::rule('/admin/user/index','admin/user/index');//员工详情
Route::rule('/admin/user/add','admin/user/add');//添加
Route::rule('/admin/user/edit','admin/user/edit');//修改
Route::rule('/admin/user/delete','admin/user/delete');//删除
Route::rule('/admin/user/ajaxcode','admin/user/ajaxcode');//账号验证
Route::rule('/admin/user/xg','admin/user/xg');//修改密码
Route::rule('/admin/user/ajaxyuan','admin/user/ajaxyuan');//判断原密码
//部门
Route::rule('/admin/bm/index','admin/bm/index');//部门
Route::rule('/admin/bm/add','admin/bm/add');// 添加
Route::rule('/admin/bm/edit','admin/bm/edit');// 修改
Route::rule('/admin/bm/del','admin/bm/del');// 删除
/**
 * 公司后台
 */
// 登陆页面
Route::rule('/adminshop','adminshop/login/index');
//执行登陆
Route::rule('/adminshop/login/dologin','adminshop/login/dologin');
// 主页
Route::rule('/adminshop/index/index','adminshop/index/index');
//基本信息
Route::rule('/adminshop/index/jibenxinxi','adminshop/index/jibenxinxi');
// 修改基本信息
Route::rule('/adminshop/index/editjbxx','adminshop/index/editjbxx');
//详细信息
Route::rule('/adminshop/index/xiangxixinxi','adminshop/index/xiangxixinxi');
// 修改详细信息
Route::rule('/adminshop/index/editxiangxixx','adminshop/index/editxiangxixx');
//公司案例
Route::rule('/adminshop/plan/index','adminshop/plan/index');//公司 案例列表
Route::rule('/adminshop/plan/add','adminshop/plan/add');//添加
Route::rule('/adminshop/plan/ajaxedit','adminshop/plan/ajaxedit');//修改参数
Route::rule('/adminshop/plan/ajaxtpguanli','adminshop/plan/ajaxtpguanli');//图片管理
Route::rule('/adminshop/plan/edit','adminshop/plan/edit');//修改
Route::rule('/adminshop/Plan/tupianguanli','adminshop/Plan/tupianguanli');//图片管理修改
Route::rule('/adminshop/plan/delete','adminshop/plan/delete');//删除

//公司工地
Route::rule('/adminshop/plangong/index','adminshop/plangong/index');//公司 案例列表
Route::rule('/adminshop/plangong/add','adminshop/plangong/add');//添加
Route::rule('/adminshop/plangong/ajaxedit','adminshop/plangong/ajaxedit');//修改参数
Route::rule('/adminshop/plangong/ajaxtpguanli','adminshop/plangong/ajaxtpguanli');//图片管理
Route::rule('/adminshop/plangong/edit','adminshop/plangong/edit');//修改
Route::rule('/adminshop/plangong/tupianguanli','adminshop/plangong/tupianguanli');//图片管理修改
Route::rule('/adminshop/plangong/delete','adminshop/plangong/delete');//删除
//公司设计师
Route::rule('/adminshop/designer/index','adminshop/designer/index');//公司 设计师列表
Route::rule('/adminshop/designer/add','adminshop/designer/add');//添加
Route::rule('/adminshop/designer/edit','adminshop/designer/edit');//修改
Route::rule('/adminshop/designer/delete','adminshop/designer/delete');//删除

// 公司轮播图管理
Route::rule('/adminshop/Shoplbt/index','adminshop/Shoplbt/index');//服务价位
Route::rule('/adminshop/Shoplbt/add','adminshop/Shoplbt/add');// 添加
Route::rule('/adminshop/Shoplbt/edit','adminshop/Shoplbt/edit');// 修改
Route::rule('/adminshop/Shoplbt/del','adminshop/Shoplbt/del');// 删除
//文章
Route::rule('/adminshop/article/index','adminshop/article/index');//公司 文章列表
Route::rule('/adminshop/article/add','adminshop/article/add');//添加
Route::rule('/adminshop/article/edit','adminshop/article/edit');//修改
Route::rule('/adminshop/article/delete','adminshop/article/delete');//删除
//公司修改密码
Route::rule('/adminshop/xgm/index','adminshop/xgm/index');//公司 文章列表
Route::rule('/adminshop/xgm/ajaxyuan','adminshop/xgm/ajaxyuan');//添加
Route::rule('/adminshop/xgm/edit','adminshop/xgm/edit');//修改
//ajax三级
Route::rule('/admin/Ajaxssq/ajaxcity','admin/Ajaxssq/ajaxcity');// 省市
Route::rule('/admin/Ajaxssq/ajaxarea','admin/Ajaxssq/ajaxarea');// 市区





