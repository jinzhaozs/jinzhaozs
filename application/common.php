<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006-2016 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: 流年 <liu21st@gmail.com>
// +----------------------------------------------------------------------

// 应用公共文件
/**
 * *
 * @param  [type] 统一资源定位    [description]
 * @param  [type] $filter    [description]
 * @param  [type] $pag       [description]
 * @param  [type] $urlcanshu [description]
 * @return [type]            [description]
 */
     function uri($model, $filter,$pag=null,$urlcanshu=null)
    {
        if($pag){
            $info = db($model)->field("id,name,logo,dizhi,bl,rz,sum,dis,com_price,com_fuqy,com_leixing,com_szqy,com_zcfg,zixurenshu,com_jianjie,com_paixu,top,com_koubei,com_haoping,com_tel,(SELECT count(*) FROM plan WHERE plan.comid = shop.id) as fangancount,(SELECT count(*) FROM struction WHERE struction.comid = shop.id) as gongdicount,(SELECT count(*) FROM evaluate WHERE evaluate.comid = shop.id) as gspjcount")
            ->where($filter)->order("com_paixu desc")->paginate($pag,false,[
'query'=>$urlcanshu,
]);
        }else{
            if($filter && is_numeric($filter)){
                $filter  = array("id" => $filter);
            }else if($filter && is_array($filter)){
                $filter = $filter;
            }else{
               $info = db($model)->select();
            }
            $info = db($model)->where($filter)->select();
        }
        return $info;
    }
    /**
     * 将最小图片的路径添加到图册中
     * @return [type] [description]
     */
    function tucemixadd()
    {
        $mixid = db("ect_photo")->order('id')->select();
        if ($mixid) {
            $where['id'] = $mixid[0]['extatlas'];
            $shuju['logo'] = $mixid[0]['pimage'];
            db("ect_atlas")->where($where)->update($shuju);
        }else{
            return "数据有误";
        }
        return $mixid;
    }