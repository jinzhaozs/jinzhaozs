//document.domain = 'to8to.com';
var gpm = {};
if(!window.GlobalProvincesModule) {
    jq.getScript('',function(){
        //表单省市组件初始化
        gpm = new GlobalProvincesModule();
        gpm.def_province = ["省/市", ""];
        gpm.def_city1    = ["市/地区", ""];  
        gpm.initProvince($('zxbjcalcUser_Shen'));
    });
}else{
        //表单省市组件初始化
        gpm = new GlobalProvincesModule();
        gpm.def_province = ["省/市", ""];
        gpm.def_city1    = ["市/地区", ""];  
        gpm.initProvince($('zxbjcalcUser_Shen'));
}
var _scriptMd5 = document.createElement('script');
_scriptMd5.type = 'text/javascript';
//_scriptMd5.src = "http://static.to8to.com/gb_js/jQuery.md5.js";
document.getElementsByTagName('head')[0].appendChild(_scriptMd5);

(function(jq){
    var QrcodeData = {},
        qrcodeData = {},
        loopInt = 0,
        scrollMark = false,
        runEnd = 0;
    var bindFlag = false,
        phonehistory=[],
        ptagArr = [],
        widget_res;
    var _window = jq(window),
        wf = jq('.widget-frame'),
        side = jq('.side'),
        offset_top = wf.offset().top,//距离文档顶部的高度
        _height = wf.height(),
        _header = jq('.header-nav-content');//右侧小工具高度
    jq(function(){
        initEvent();        
    });    
    function initEvent() {
        //placeholder兼容
        jq('[name="square"], [name="chkPhone"]').placeholder({oLabel: 'b'});            
        jq('.zxbj-yqbj').find('.submit-btn').on('click', function() {
            if(bindFlag){
                return false;
            }
            //获取当前ptagkkk
            var ptag = jq('.zxbj-yqbj').find('input[name="ptag"]').val();
            //百度统计函数
            try{
                _hmt && _hmt.push(['_trackEvent', 'zb', 'submit', ptag]);
            }catch(e){

            }
            getQuote();
        });
        jq('[searchtage]').bind('click', function() {
            var tag = jq(this).attr('searchtage');

            clickStream.getCvParams(tag);
        });
        //停留标识，用于是否显示弹框报价提示
        jq('.zxbj-calc-wrap').on('click', function(){
            window.parent.isXGTClick = false;
        });
        // 改变省时自动选择市 改变市时同步
        jq('.new-container .zxbj-calc-con').find('[name="User_Shen"]').on('change',function(){
            changeProvince('zxbjcalcUser_Shen','zxbjcalcUser_City','zxbjcalcUser_Town');
            jq('.new-container .zxbj-calc-con').find('[name="User_City"]').find('option').eq(1).attr('selected','selected');
        });
        // 判断装修日记页面及装修论坛页面
        if(location.href.indexOf('riji/')>-1||location.href.indexOf('/forum')>-1){
            // 仅首次移入时记录点击流
            if(location.href.indexOf('riji/')>-1){
                jq('.submit-btn').attr('searchtage','1_3_8_10');
                jq('input[name="ptag"]').val('1_3_8_10');
                // 装修日记页面
//              var hrefPattern = new RegExp('http://www.to8to.com/riji/[0-9]{0,7}/');
                if(hrefPattern.test(location.href)){
                    if(ptagArr.join(';').indexOf('1_3_8_10') == -1){
                        ptagArr.push('1_3_8_10');
                        (typeof clickStream !== 'undefined') && clickStream.getCvParams('1_3_8_10');
                    }
                }else{
                    if(ptagArr.join(';').indexOf('1_3_8_727') == -1){
                        ptagArr.push('1_3_8_727');
                        (typeof clickStream !== 'undefined') && clickStream.getCvParams('1_3_8_727');
                    }                        
                }
            }else if(location.href.indexOf('/forum')>-1){
                // 论坛页面
                if(ptagArr.join(';').indexOf('1_3_8_1058') == -1){
                    ptagArr.push('1_3_8_1058');
                    (typeof clickStream !== 'undefined') && clickStream.getCvParams('1_3_8_1058');
                }
            }
        }
        // 使用ptag
        if(location.href.indexOf('/zs/')>-1){
            jq('.submit-btn').attr('searchtage','1_5_2_10');
            jq('input[name="ptag"]').val('1_5_2_10');
        }
        if(location.href.indexOf('/company/')>-1){
            jq('.submit-btn').attr('searchtage','1_5_1_4');
            jq('input[name="ptag"]').val('1_5_1_4');
        }
        if(location.href.indexOf('xiaoguotu.to8to')>-1){
            jq('.submit-btn').attr('searchtage','1_2_2_21');
            jq('input[name="ptag"]').val('1_2_2_21');
        }
        if(location.href.indexOf('news.to8to')>-1){
            jq('.submit-btn').attr('searchtage','1_35_10_1834');
            jq('input[name="ptag"]').val('1_35_10_1834');
        }
        if(location.href.indexOf('/zwj/')>-1){
            // 找我家 埋点  2017-07-26
            jq('.submit-btn').attr('searchtage','1_26_23_2531');
            jq('input[name="ptag"]').val('1_26_23_2531');
        }
        // 根据面积显示户型
        jq('#bj_square').on('keyup',function(){
            if(jq('#bj_square').val()){
                jq('#bj_square').next('b').hide();
            }else{
                jq('#bj_square').next('b').show();
            }
            selectDoorModle(jq(this).val(),this,szxbj_shi,szxbj_ting,szxbj_chu,szxbj_wei,szxbj_yangtai);
            // 获取热点数据
            if(typeof widget_res != 'object'){
                widget_res = null;
                jq.ajax({
//                  url : "http://www.to8to.com/api/httpgethot.php?hotid=791&jsonp=ok",
                    type : "GET",
                    dataType : "jsonp",
                    jsonpCallback: "jsonpCallback",
                    success : function(res){
                        // 返回的热点
                        widget_res = res;
                    }
                });
            }
        });
        jq('.new-container .zxbj-calc-con').find('[name="chkPhone"]').on('keyup keydown',function(){
            if(jq('.zxbj-calc-wrap').find('[name="chkPhone"]').val()){
                jq('.zxbj-calc-wrap').find('[name="chkPhone"]').next('b').hide();
            }else{
                jq('.zxbj-calc-wrap').find('[name="chkPhone"]').next('b').show();
            }
        });
        //价格动效
        randomNumber();//随机生成1000 - 200000
        //判断是日记详情页 并且有右侧小工具 暂时回滚
        if (jq('.zxgl_dairyGuest').length > 0 && jq('.widget-frame').length > 0 && side.length > 0) {
            rightFollow();
        }
    }
    //根据面积显示户型 将五个户型id传进以便复用
    function selectDoorModle(square,squareEle,shi,ting,chu,wei,yangtai){
        var square = Number(square);
        if (square + '' == 'NaN' || jq(squareEle).val() == '') {
            return
        };
        if (square < 60) {
            jq('#'+shi.id).val(1);
            jq('#'+ting.id).val(1);
            jq('#'+chu.id).val(1);
            jq('#'+wei.id).val(1);
            jq('#'+yangtai.id).val(1);
        } else if (square >= 60 && square < 90) {
            jq('#'+shi.id).val(2);
            jq('#'+ting.id).val(1);
            jq('#'+chu.id).val(1);
            jq('#'+wei.id).val(1);
            jq('#'+yangtai.id).val(1);
        } else if ( square >= 90 && square < 150) {
            jq('#'+shi.id).val(3);
            jq('#'+ting.id).val(2);
            jq('#'+chu.id).val(1);
            jq('#'+wei.id).val(2);
            jq('#'+yangtai.id).val(1);
        }
        else if (square >= 150) {
            jq('#'+shi.id).val(4);
            jq('#'+ting.id).val(2);
            jq('#'+chu.id).val(1);
            jq('#'+wei.id).val(2);
            jq('#'+yangtai.id).val(2);
        }
    }
    //装修报价数据验证
    function validataCalc() {
        var chkArr = [{
            id: jq('.zxbj-calc-wrap  select[name="User_Shen"]')[0],
            parentTip: '.zxbj-yqbj',
            className: 'erro',
            labl: 'em',
            lablClass: '',
            info: [{
                reg: [0],
                tip: '请选择所在城市'
            }]
        },{
            id: jq('.zxbj-calc-wrap select[name="User_City"]')[0],
            parentTip: '.zxbj-yqbj',
            className: 'erro',
            labl: 'em',
            lablClass: '',
            info: [{
                reg: [0],
                tip: '请选择所在城市'
            }]
        },{
            id: jq('.zxbj-calc-wrap :text[name="square"]')[0],
            parentTip: '.zxbj-yqbj',
            className: 'erro',
            labl: 'em',
            lablClass: '',
            info: [{
                reg:[0],
                tip:'请输入建筑面积'
            },{
                reg:[/^\d+(\.[0-9]?[1-9]{1})?$/], 
                tip:'建筑面积不能超过两位小数'
            },{
                reg:[/^[0-4]{1}(\.[0-9]?[1-9]{1})?$/], 
                tip:'建筑面积必须大于5', negate:true
            },{
                reg:[/^[1-9]{1}[0-9]{0,2}(\.[0-9]?[1-9]{1})?$|^1000$/], 
                tip: '建筑面积必须是1000以内'
            }]
        }];
        var phoneArr = {
            id: jq('.zxbj-calc-wrap :text[name="chkPhone"]')[0], 
            parentTip: '.zxbj-yqbj',
            className: 'erro',
            labl: 'em',
            lablClass: '',
            info: [{
                reg: [0],
                tip: '请输入手机号码'
            },{
                reg: [/^1{1}[3456789]{1}\d{9}$/],
                tip: '请输入正确的手机号码'
            }]
        };
        if(jq('.zxbj-yqbj :text[name="chkPhone"]').length>0){
            chkArr.push(phoneArr);
        }

        return simplifyCheck2(chkArr);
    }
    // 获取报价数据
    function getZXBJdata() {
        var wrap = jq('.zxbj-yqbj .zxbj-calc-con'),
            sendData = {};

            sendData.square = wrap.find(':text[name="square"]').val();
            sendData.shen = wrap.find('select[name="User_Shen"]').val();
            sendData.city = wrap.find('select[name="User_City"]').val();
            sendData.dangci = wrap.find(':hidden[name="dangci"]').val();
            sendData.ptag = jq('.zxbj-calc-wrap:visible').find(':hidden[name="ptag"]').val();
            sendData.phone = wrap.find(':text[name="chkPhone"]').val();
            sendData.shi = jq('#szxbj_shi').val();
            sendData.ting = jq('#szxbj_ting').val();
            sendData.chu = jq('#szxbj_chu').val();
            sendData.wei = jq('#szxbj_wei').val();
            sendData.yangtai = jq('#szxbj_yangtai').val();
            if(phonehistory.join(';').indexOf(jq('.zxbj-yqbj').find(':text[name="chkPhone"]').val()) != -1){
                sendData.phone = '';
            }
            if(location.href.indexOf('riji/')>-1){
                // 装修日记页面
                sendData.ptag = '1_3_8_727';
//              var hrefPattern = new RegExp('http://www.to8to.com/riji/[0-9]{0,7}/');
                if(hrefPattern.test(location.href)){
                    sendData.ptag = '1_3_8_10';
                }
            }
            if(location.href.indexOf('/forum')>-1){
                // 论坛页面
                sendData.ptag = '1_3_8_1058';
            }

        return sendData;
    }
    //装修报价 数据提交
    function getQuote() {
        if (validataCalc()) {
            bindFlag = true;
            var zbData = getZXBJdata();
            zbData.modeltype = 9;
            zbData.nowstep = 1;
            //回调函数，返回值自定义处理。
            zbData.onFirstStepEnd = function(res){
                var city = jq('#zxbjcalcUser_City').val();
                bindFlag = false;
                // 判断手机号是否存在
                jq('.zxbj-calc-result').show();
                if(phonehistory.join(';').indexOf(zbData.phone) == -1){
                    phonehistory.push(zbData.phone);
                }
                jq('.zxbj-yqbj').find(':text[name="chkPhone"]').val('');
                jq('.zxbj-yqbj').find(':text[name="chkPhone"]').parent().remove();
                //停止定时器   防止出现用户报价后 价格又发生改变
                if(typeof runEnd !== "undefined"){
                    clearTimeout(runEnd);
                }
                jq('#yqbj_total').html((res.to8to_totle_price/10000).toFixed(1));
                jq('#materials_cost').html(res.to8to_cl_price);
                jq('#labor_cost').html(res.to8to_rg_price);
                jq('#design_fees').html(0);
                jq('#quality_fees').html(0);
                jq('#old_design_fees').find('span').html(res.normal_sj_price).end().show();
                jq('#old_quality_fees').find('span').html(res.normal_zj_price).end().show();
                jq('.new-container').off('mouseenter mouseleave');
                jq('.zxbj-clac-yqbj').find('.glide-text').html('您家的装修预算为');

                jq('.zxbj-calc-header').hide();
                jq('.zxbj-calc-con').hide();
                jq('.zxbj-clac-yqbj').show(); 
                addAds(widget_res,city);
            };
            if(!window.tender) {
                jq.getScript('',function(){
                    var zbStart = new tender();
                    zbStart.init(zbData);
                });
                return;
            }
            var zbStart = new tender();
            zbStart.init(zbData);
        };
    }
    //电话号码加密
    function encryptPhone(sendData){
        var reg = /^1{1}[3456789]{1}\d{9}$/,
            isPhone = sendData.phone ? reg.test(sendData.phone) : false;

        //旧版加密 rsastr=1存在
        if(sendData.rsastr==1){
            sendData.phone = encodeURIComponent(sendData.phone);
            sendData.phoneurlencode = 1;
        } else if (isPhone) {
            //新版加密添加当前标识
            sendData.rsadata = RSAUtilszb.encryptfun(sendData.phone+','+(Math.ceil(Math.random()*10))+','+Math.random())
            sendData.rsadata = encodeURIComponent(sendData.rsadata);
            sendData.rsastatus = 1;
            sendData.phoneurlencode = 1;
            sendData.phone = '';
        }
        return sendData;
    }
    function createGuid () {
        for (var a = "", c = 1; 32 >= c; c++) {
            var b = Math.floor(16 * Math.random()).toString(16),
                a = a + b;
            if (8 == c || 12 == c || 16 == c || 20 == c) a += ""
        }
        return this.guid = a += Math.ceil(1E6 * Math.random())
    }
    /*
     * 增加热点广告位
     */
    function addAds(res,city){
        if (res && jq('.zxbj-calc-hotad').length > 0) {
            var area = parseFloat(jq('#bj_square').val());
            res = res.data ? res.data[2] : '';
            if (res && res.minArea <= area && area <= res.maxArea && res.img_src && res.img_src.search(/\.(?:(?:jpg)|(?:jpeg)|(?:gif)|(?:swf)|(?:png)|(?:bmp))(?:\?[=\w\d]*)?$/) >= 0 && (res.usedcityname ? res.usedcityname.indexOf(city) > -1 : !0)) {
                jq('.zxbj-calc-wrap').addClass('ad-position');
                jq('.zxbj-calc-hotad img').attr('src', res.img_src);
                jq('.zxbj-calc-hotad a').attr('href', res.url).data('ptag', res.ptag);
            }
            jq('.zxbj-calc-hotad a').on('click', function() {
                var ptag = jq('.zxbj-calc-hotad a').data('ptag');
                if(getCookie(ptag) != ptag){
                    setCookie(ptag,ptag,1);
                    (typeof clickStream !== 'undefined') && clickStream.getCvParams(ptag);
                }
            });
        }
    }
    //生成0-200000 随机数
    function randomNumber(){
        var num = 0,
            len = 0,
            ge = '',
            shi = '',
            bai = '',
            qian = '',
            wan = '',
            shiwan = '';
        setTimeout(function(){
            num = Math.ceil(Math.random()*190000)+10000;
            len = num.toString().length;
            ge = num.toString().slice(len-1);
            shi = num.toString().slice(len-2,len-1);
            bai = num.toString().slice(len-3,len-2);
            qian = num.toString().slice(len-4,len-3);
            if (len >= 5) {
                wan = num.toString().slice(len-5,len-4);
            }
            if (len == 6) {
                shiwan = num.toString().slice(len-6,len-5);
            }            
            jq('.zxbj-calc-budget div').removeClass();
            jq('.zxbj-calc-budget div').eq(0).addClass('num-ge num'+ge);
            jq('.zxbj-calc-budget div').eq(1).addClass('num-shi num'+shi);
            jq('.zxbj-calc-budget div').eq(2).addClass('num-bai num'+bai);
            jq('.zxbj-calc-budget div').eq(3).addClass('num-qian num'+qian);
            jq('.zxbj-calc-budget div').eq(4).addClass('num-wan num'+wan);
            jq('.zxbj-calc-budget div').eq(5).addClass('num-shiwan num'+shiwan);
            randomNumber();//递归一下
        },200);
        
    }
    //右侧报价计算器 跟随页面
    function rightFollow(){
        rightcCalculate();//初始化
        _window.scroll(function(){        
            rightcCalculate();
        });
    }
    function rightcCalculate(){
        if (_window.scrollTop() > (side.height()+side.offset().top-_header.height())) {
            side.addClass('widget-follow');
            ((jq(document).height()-_window.height()-_window.scrollTop()) > 0) && wf.css('top',_window.scrollTop()+34-(348-_header.height()));//top = 滚动的距离 + 离header的距离 - 本身离父级div的top
        }else{                
            side.removeClass('widget-follow');
            wf.css('top','');
        }
    }
})(jQuery)