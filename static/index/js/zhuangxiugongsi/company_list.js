(function (jq) {

    jq.fn.fixBottom = function () {
        var that = jq(this),
            fBottom = jq('.footer-bottom'),
            h = jq(this).height(),
            bH = jq(document).height(),
            obj = checkBrowser(),
            outWrapDiff = bH - jq('#gloWrap').height(),
            bottomHeight = fBottom.get(0).offsetHeight,
            ie6 = false;
        if (obj.name == "msie" && obj.version == 6) {
            ie6 = true;
        }
        ;

        function resizeBottomNav() {
            var cH = jq(window).height(),
                diff = bH - cH,
                sH = jq(window).scrollTop(),
                ie6Diff = sH + cH - that.height();
            jq('body').css('position','relative');
            if (ie6) {
                that.css("top", ie6Diff - outWrapDiff + "px");
            }

            if (diff - sH <= bottomHeight) {
                that.css({
                    "bottom": bottomHeight + 'px',
                    "position": "absolute"
                });
                if (ie6) {
                    that.css("top", sH + cH - h - (bottomHeight - (diff - sH)) - outWrapDiff + 5 + "px");
                }
            } else {
                that.css({
                    "bottom": 0,
                    "position": "fixed"
                });
            }
        }

        if (jq(this).is(":visible")) {
            resizeBottomNav();
        }

        jq(window).on('scroll resize', resizeBottomNav);
    };
})(jQuery);
// create by dean, zgsCompanyList javascript   
var cityCode = getCookie('to8to_tcode') || 0;
!function () {
    var zgsList = {
        init: function () {

            //初始化客服弹窗
            popCustSrvWin && popCustSrvWin.init();

            zgsListDocReady();//doc ready
        }
    }

    function zgsListDocReady() {
        jq('.zgs_clr_zsm > ul > li ').find('input').val("");
        var str = '<span class="xgt_nav_showMore" onClick="javascript:showMore(this)" title="点击展开"></span>',
            strTwo = '<span class="xgt_nav_showMore_two" onClick="javascript:showMore(this)" title="点击展开"></span>',
            hasHdd, hasHdd1;
        jq('.zgs_st_dl >dd').each(function (index, element) {
            if (jq(this).height() > 40 && jq(this).parent().find('div').length == 0) {
                jq(this).addClass('height_40');
                jq(this).append(str);
            } else if (jq(this).height() > 40 && jq(this).parent().find('div').length > 0) {
                jq(this).parent().find('div').addClass('height_40');
                jq(this).append(strTwo);
            }
        });
        jq('.zgs_st_dl_two >dd >.all_gz:eq(1)').each(function (index, element) {
            if (jq(this).height() > 40 && jq(this).parent().find('div').length == 0) {
                jq(this).addClass('height_40');
                jq(this).append(str);
            } else if (jq(this).height() > 40 && jq(this).parent().find('div').length > 0) {
                jq(this).parent().find('div').addClass('height_40');
                jq(this).append(strTwo);
            }
        });
        jq('.zgs_st_dl_two  > dd > div > a').on("click", function () {
            jq(this).parent().find('a').removeClass('on');
            jq(this).addClass('on');
        });
        jq('.zgs_st_dl > dd > a').on("click", function () {
            jq(this).parent().find('a').removeClass('on');
            jq(this).addClass('on');
        });
        jq('.zgs_st_sorts > a').on("click", function () {
            jq('.xgt_st_sorts > a').removeClass('on');
            jq(this).addClass('on');
        });
        jq('.zgsclc_score').mouseenter(function () {
            jq(this).find('div.zgsclc_score_window').show();
        });
        jq('.zgsclc_score').mouseleave(function () {
            jq(this).find('div.zgsclc_score_window').hide();
        });

        jq(".zgs_select_type > dl.zgs_st_dl:gt(2)").hide();
        jq(".zgs_select_type > p.more_type > a").click(function () {
            if (jq(this).text() == "更多") {
                jq(".zgs_select_type > dl.zgs_st_dl:gt(2)").show();
                jq(this).html("收起<em></em>");
                jq(this).find("em").addClass("lowrow");
            } else {
                jq(".zgs_select_type > dl.zgs_st_dl:gt(2)").hide();
                jq(this).html("更多<em></em>");
                jq(this).find("em").removeClass("lowrow");
            }
            ;
        });
        jq('.zgs_cl_right > .zgs_clr_zsm > ul > li > label').click(function () {
            jq(this).parent().find('input').focus();
        });
        jq('.zgs_cl_right > .zgs_clr_zsm > ul > li > input').on("keydown", function () {
            jq(this).parent().find('label').hide();
        });
        jq('.zgs_cl_right > .zgs_clr_zsm > ul > li > input').on("blur", function () {
            if (jq(this).val() == "") {
                jq(this).parent().find('label').show();
            }
            ;

        });
        hasHdd1 = jq(".zgs_select_type > dl.zgs_st_dl_two > dd> .all_gz.height_40"),
            hasHdd2 = jq(".zgs_select_type > dl.zgs_st_dl > dd.height_40");
        if (jq(".zgs_select_type > dl.zgs_st_dl:gt(2)").find("dd").find("a.on").length != 0) {
            jq(".zgs_select_type > p.more_type > a").click();
        }
        hasHdd1.each(function () {
            if (jq(this).length != 0 && jq(this).find("a.on").length != 0 && jq(this).find("a.on").position().top >= 40) {
                jq(this).find("span").click();
            }
            ;
        });
        hasHdd2.each(function () {
            if (jq(this).length != 0 && jq(this).find("a.on").length != 0 && jq(this).find("a.on").position().top >= 40) {
                jq(this).find("span").click();
            }
            ;
        });
        jq('.zgs_company_list > ul > li').mouseenter(function () {
            jq(this).addClass('on');
        }).bind('mouseleave', function () {
            jq(this).removeClass('on');
        });
        // jq('.zgs_clr_fc .zcz_btn').click(function(){
        //   try{clickStream.getCvParams('1_5_1_9');}catch(e){}
        //   window.open('http://dzt.twos.net.cn/LR/Chatpre.aspx?id=DZT39460052&lng=cn', '_blank',"height=500,width=750");
        // });
        if (jq(".zgs_select_type > dl.zgs_st_dl.height_40")) {
            jq(".zgs_select_type > dl.zgs_st_dl.height_40").each(function () {
                hasHdd = jq(this).find("dd");
                if (hasHdd.length != 0 && hasHdd.find("a.on").length != 0 && hasHdd.find("a.on").position().top >= 40) {
                    hasHdd.next().click();
                }
            });
        }


        //广告
        jq('a.zgs_ad_link, a.zgs_ad_close').click(function () {
            jq('.zgs_ad').toggle();
        });
    }

    function fixBottomEvent() {
        setBarVisibale();
        jq(window).bind("scroll resize", setBarVisibale);
        jq('.zgs_bg_fixed').fixBottom();

        jq('.zgs_bg_fixed .text').placeholder();
        gpm.def_province = ["省/市", ""];
        gpm.def_city1 = ["市/地区", ""];
        gpm.initProvince($("zxgsBottomUser_Shen"));
        jq('#zxgsBarForm').on('submit', function () {
            //获取当前ptag
            var bdptag = jq('.zgs_bg_fixed input[name="ptag"]').val();
            //百度统计函数
            try{
                _hmt && _hmt.push(['_trackEvent', 'zb', 'submit', bdptag]);
            }catch(e){

            }
            if (checkBottomBarValue()) {
                //招标新入口
                var _this = jq('.btn_f26f1f_w90h40');
                upLoadData(_this);
            }
            return false;
        });
    }

//传输方法
    function upLoadData(obj) {

        /*********************************取值******************************************/
        var options = {};
        options.chenghu = jq(obj).parent().find('input[name="chenghu"]').val();
        options.phone = jq(obj).parent().find('input[name="phone"]').val();

        //var phonepre= phone;
        //options.nextmodel = 2;
        //options.nowmodel = 1;
        options.modeltype = 1;
        options.nowstep = 1;
        //新版电话号码加密
        var encryptData = rsaEncryptNameAndPhone({
            phoneObj: jq(obj).parent().find('input[name="chenghu"]'),
            chenhuObj: jq(obj).parent().find('input[name="phone"]')
        }, null, null, null, true);
        for (var i in encryptData) {
            options[i] = encryptData[i];
        }

        options.shen = jq(obj).parent().find('select[name="User_Shen"]').val();
        options.city = jq(obj).parent().find('select[name="User_City"]').val();
        jq('#zxgsBarForm')[0].reset();
        /********************************将表单的值清空************************************/

        options.ptag = jq('input[name="ptag"]').val();

        options.phoneAgain = 0;
        // 回调函数名
        //options.callback  = test;
        var start = new tender();
        start.init(options);
    }

    function setBarVisibale() {
        var barObj = jq('.zgs_bg_fixed');

        if (jq(window).scrollTop() > 550) {
            barObj.css('visibility', 'visible');
        } else {
            barObj.css('visibility', 'hidden');
        }
    }

    function checkBottomBarValue() {
        var chkArr = [{
            id: '#zxgsBarChenghu',
            info: [{
                reg: [0],
                tip: '请输入您的称呼'
            }]
        }, {
            id: '#zxgsBarPhone',
            info: [{
                reg: [0],
                tip: '请输入您的手机号'
            }, {
                reg: [/^1[3456789]{1}\d{9}$/],
                tip: '请输入正确的手机号'
            }]
        }, {
            id: '#zxgsBottomUser_Shen',
            info: [{
                reg: [0],
                tip: '请选择您的所在地'
            }]
        }, {
            id: '#zxgsBottomUser_City',
            info: [{
                reg: [0],
                tip: '请选择您的所在地'
            }]
        }];

        return simplifyCheck2(chkArr);
    }

    function initBottomBarTpl() {
        var str = '<div class="zgs_bg_fixed">\
                    <div class="zgs_bg_filter"></div>\
                    <div class="content">\
                        <em class="icon"></em>\
                        <form id="zxgsBarForm">\
                            <input type="hidden" value="1_5_16_131" name="ptag">\
                            <div class="content_r">\
                            <div class="txt">土巴兔帮您推荐<b class="font2">靠谱</b>装修公司，帮您装修节省<span class="font1">20%</span></div>\
                                <div class="elment mt20b5">\
                                    <input type="text" class="text" name="chenghu" id="zxgsBarChenghu" maxlength="12">\
                                    <em class="placeholder">请输入您的称呼</em>\
                                 </div>\
                                 <div class="elment mt20b5">\
                                        <input type="text" class="text" name="phone" id="zxgsBarPhone">\
                                        <em class="placeholder">请输入您的手机号码</em>\
                                 </div>\
                                 <div class="elment mt20b5 clear">\
                                    <select class="sel2" name="User_Shen" id="zxgsBottomUser_Shen" onchange="changeProvince(\'zxgsBottomUser_Shen\',\'zxgsBottomUser_City\',\'zxgsBottomUser_Town\');">\
                                    <option value="">省/市</option></select>\
                                    <select class="sel2" name="User_City" id="zxgsBottomUser_City" onchange="changeTown(\'zxbjBottomUser_Shen\',\'zxgsBottomUser_City\',\'zxgsBottomUser_Town\');">\
                                    <option value="">市/地区</option>\
                                    </select>\
                                    <div style="display:none;">\
                                        <select class="langSelect" id="zxgsBottomUser_Town" name="User_Town">\
                                            <option>县/区</option>\
                                        </select>\
                                    </div>\
                                </div>\
                                <input type="submit" value="提交" class="btn_f26f1f_w90h40">\
                            </div>\
                        </form>\
                        <div class="bottom_company_right">\
                            <div class="bottom_txt">扫一扫，关注有礼</div>\
                            <em class="two_code_s"></em>\
                        </div>\
                    </div>\
                </div>';

        jq('body').append(str);
    }


    //微信招标Ajax请求
    function weixinZBRequest(res) {
        jq.ajax({
            type: "GET",
            dataType: 'jsonp',
            url: "http://www.to8to.com/api/weixin/run.php",
            data: {action: 'createQrcode', cookie_id: 'test', data: 'createWxCode', type: 1},
            success: function (data) {
                if (data.code == 0) {//获取二维码返回成功
                    var weixin_code = data.url, //微信扫码图片url
                        start_qrcode_id = data.qrcode_id;

                    indexSubZbStepOneNew(res, weixin_code);
                } else {//获取二维码返回失败
                    alert(data.msg);
                }
            }
        });
    }

    jq(function () {
        //initBottomBarTpl();
        fixBottomEvent();
    });

    window.zlDocReady = zgsList;
}(jQuery)

//滚动
!function () {
    jq.fn.scrollList = function (settings) {
        var defaults = {
                child: "li",//要滚动的元素
                num: 3,//小于这个数不滚动
                time: 1000,//滚动一行的时间
                interval: 3000,//滚动间隔
                direct: "down" //滚动方向
            },
            settings = jq.extend(defaults, settings),
            obj = jq(this), myScroll;

        if (obj.find(settings.child).length > settings.num) {
            obj.hover(function () {
                clearInterval(myScroll);
            }, function () {
                if (settings.direct == "up") {
                    myScroll = setInterval(function () {
                        var h1 = obj.find(settings.child + ":first").height();
                        obj.animate({"margin-top": -h1 + "px"}, settings.time, function () {
                            jq(this).css("margin-top", 0).find(settings.child + ":first").appendTo(this);
                        });
                    }, settings.interval);
                } else {
                    myScroll = setInterval(function () {
                        var h1 = obj.find(settings.child + ":last").height();
                        obj.animate({"margin-bottom": -h1 + "px"}, settings.time, function () {
                            jq(this).css("margin-bottom", 0).find(settings.child + ":last").insertBefore(jq(this).find(settings.child + ":first"));
                        });
                    }, settings.interval);
                }
            }).trigger("mouseleave");
        }
    };
}(jQuery);

function showMore(a) {
    var obj = jq(a);
    if (!obj.hasClass('showMore_down' || !obj.hasClass('showMore_down_two'))) {
        obj.attr('title', '点击收缩').addClass('showMore_down');
        if (obj.parent().find('div').length > 0) {
            obj.parent().find('div').addClass('height_auto');
        } else {
            obj.parent().addClass('height_auto');
        }

    } else {
        obj.attr('title', '点击展开').removeClass('showMore_down');
        if (obj.parent().find('div').length > 0) {
            obj.parent().find('div').removeClass('height_auto');
        } else {
            obj.parent().removeClass('height_auto');
        }
    }
}

function backWinInfo(obj, res) {
    window_box_close(jq(".window_box_close"));
    if (res['status'] == 5 && res['cityname'] != 'undefined') {
        freeFail(obj, res['cityname']);
    }
    else {
        freeSuceess(obj);
    }
}
//找公司列表页右侧验证
function checkCompanyForm(obj, ptag, whoid) {
    var ptag = arguments[1] ? arguments[1] : '';
    var a = jq(obj).parent().find('.yourname[name="yourname"]').checkForm({
        className: "index_check",
        content: ["称呼不可为空"],
        type: [1],
        checkFormType: obj,
        displayNum: true
    });
    var b = jq(obj).parent().find('.youriphone[name="youriphone"]').checkForm({
        className: "index_check",
        content: ["手机号码不可以为空", "请填写正确的手机号码"],
        type: [1, 2],
        reg: 0,
        checkFormType: obj,
        displayNum: true
    });
    var c = jq(obj).parent().find('.province[name="User_Shen"]').checkForm({
        className: "index_check",
        content: ["请选择您的所在地"],
        type: [1],
        checkFormType: obj,
        displayNum: true,
        checkType: "select"
    });
    if (c == 0) {
        var d = jq(obj).parent().find('.city[name="User_City"]').checkForm({
            className: "index_check",
            content: ["请选择您的所在地"],
            type: [1],
            checkFormType: obj,
            displayNum: true,
            checkType: "select"
        });
    }
    if (a == 0 && b == 0 && c == 0 && d == 0) {
        submit_ajax(obj, ptag, whoid)
    }
};


function submit_ajax(obj, ptag, whoid) {
    var myData = 'city=' + cityCode + ':id=' + (whoid || window.whoid || 0);
    if (!ptag) {
        ptag = '1_5_1_3';//默认招公司列表页
    }

    var submittype = jq(obj).attr("submit_type");
    var sform = jq(obj).parents('div#form');
    var s_type = submittype.split("_")[0];
    var f_type = submittype.split("_")[1];
    //var fromid = getcookie('uid',1);
    if (s_type == 'ajax') {

        if (f_type == 'design') {
            checkFreeDesign(obj);
            var toid = sform.find("input[name='toid']").val();
            var n = 2;
            var sourceid = 0;
            var s_sourceid = 0;
            var price = 0;
            var cid = 0;
            var phone = sform.find("input[name='youriphone']").val();
            var nick = sform.find("input[name='yourname']").val();
            var User_Shen = sform.find("#User_Shen1").val();
            var User_City = sform.find("#User_City1").val();

            ptag = ptag ? ptag : '1_5_1_1';
            clickStream.getCvParams(ptag);
            var sendData = {
              phone: phone,
              chenghu: nick,  
              ptag: ptag,
              shen: User_Shen,
              city: User_City,
              sourceid: 7,
              s_sourceid: 3,
              nowstep: 1,
              modeltype: 1
            }
            var encryptData = rsaEncryptNameAndPhone({
                phoneObj: sform.find("input[name='youriphone']"),
                chenhuObj: sform.find("input[name='yourname']")
            },null,null,null,true);

            for(var i in encryptData){
                sendData[i] = encryptData[i];
            }
    
            if(!window.tender) {
            jq.getScript('http://static.to8to.com/gb_js/tender.js?v=1449147278',function(){
                    var yyStart = new tender();
                    yyStart.init(sendData);
                });
                return;
            }
            var yyStart = new tender();
            yyStart.init(sendData);
        }

        if (f_type == 'price') {
            checkFreeDesign(obj);
            var toid = sform.find("input[name='toid']").val();
            var n = 3;
            var sourceid = 0;
            var s_sourceid = 0;
            var price = 0;
            var cid = 0;
            var phone = sform.find("input[name='youriphone']").val();
            var nick = sform.find("input[name='yourname']").val();
            var User_Shen = sform.find("#User_Shen1").val();
            var User_City = sform.find("#User_City1").val();
            clickStream.getCvParams('1_5_1_2');
            var sendData ={
                ptag: "1_5_1_2",
                phone: phone,
                chenghu: nick,
                shen: User_Shen,
                city: User_City,
                sourceid: 7,
                s_sourceid: 3,
                modeltype: 1,
                nowstep: 1
            }
            var encryptData = rsaEncryptNameAndPhone({
                phoneObj: sform.find("input[name='youriphone']"),
                chenhuObj: sform.find("input[name='yourname']")
            },null,null,null,true);
             for(var i in encryptData){
                sendData[i] = encryptData[i];
            }
            if(!window.tender) {
            jq.getScript('http://static.to8to.com/gb_js/tender.js?v=1449147278',function(){
                    var yyStart = new tender();
                    yyStart.init(sendData);
                });
                return;
            }
            var yyStart = new tender();
            yyStart.init(sendData);

        }

        if (f_type == 'select3') {
            var phone = sform.find("input[name='youriphone']").val();
            var nick = sform.find("input[name='yourname']").val();

            var shen = sform.find("#User_Shen").find("option:selected").val();//
            var city = sform.find('#User_City').find("option:selected").val();
            clickStream.getCvParams(ptag);

            var sendData = {
                ptag: ptag,
                shen: shen,
                city: city,
                phone: phone,
                chenghu: nick,
                sourceid: 7,
                s_sourceid: 3,
                modeltype: 1,
                nowstep: 1
            }
            var encryptData = rsaEncryptNameAndPhone({
                phoneObj: sform.find("input[name='youriphone']"),
                chenhuObj: sform.find("input[name='yourname']")
            },null, null, null, true);

            for(var i in encryptData){
                sendData[i] = encryptData[i];
            }
            if(!window.tender) {
            jq.getScript('http://static.to8to.com/gb_js/tender.js?v=1449147278',function(){
                    var yyStart = new tender();
                    yyStart.init(sendData);
                });
                return;
            }
            var yyStart = new tender();
            yyStart.init(sendData);

        }
        //价值点专题
        if (f_type == 'select4') {
            var phone = sform.find("input[name='youriphone']").val();
            var nick = sform.find("input[name='yourname']").val();
            var shen = sform.find("#User_Shen_val").find("option:selected").val();
            var city = sform.find('#User_City_val').find("option:selected").val();
            clickStream.getCvParams(ptag);

            var sendData = {
                ptag: ptag,
                shen: shen,
                city: city,
                phone: phone,
                chenghu: nick,
                sourceid: 7,
                s_sourceid: 3,
                modeltype: 1,
                nowstep: 1
            }
            var encryptData = rsaEncryptNameAndPhone({
                phoneObj: sform.find("input[name='youriphone']"),
                chenhuObj: sform.find("input[name='yourname']")
            }, null, null, null, true);
            
            for(var i in encryptData){
                sendData[i] = encryptData[i];
            }
            if(!window.tender) {
                jq.getScript('http://static.to8to.com/gb_js/tender.js?v=1449147278',function(){
                    var yyStart = new tender();
                    yyStart.init(sendData);
                });
                return;
            }
            var yyStart = new tender();
            yyStart.init(sendData);
        }

    }

}

function checkFreeDesign(obj) {//免费设计验证
    if (jq(".neworder-submit").hasClass('btn_login_no')) {
                return false;
            };
    if (obj == undefined) {
        obj = false;
    } else {
        obj = true;
    }
    ;
    jq('.fq_text[name="yourname"]').checkForm({
        className: "fb_check",
        content: ["称呼不可为空"],
        type: [1],
        checkFormType: obj
    });
    jq('.fq_text[name="youriphone"]').checkForm({
        className: "fb_check",
        content: ["手机号码不可以为空", "请填写正确的手机号码"],
        type: [1, 2],
        reg: 0,
        checkFormType: obj
    });
};

function checkFreeBooking(obj) {//免费申请预约验证
    if (obj == undefined) {
        obj = false;
    } else {
        obj = true;
    }
    ;
    jq('.fb_area').checkForm({
        className: "fb_check",
        content: ["请填写建筑面积", "请填写有效的建筑面积"],
        type: [1, 2],
        reg: 2,
        checkFormType: obj
    });
    jq('.fb_phone').checkForm({
        className: "fb_check",
        content: ["手机号码不可以为空", "请填写正确的手机号码"],
        type: [1, 2],
        reg: 0,
        checkFormType: obj
    });
    jq('.fb_qq').checkForm({
        className: "fb_check",
        content: ["QQ号不能为空", "请填写有效的QQ号"],
        type: [1, 2],
        reg: 1,
        checkFormType: obj
    });
    jq('.fb_email').checkForm({
        className: "fb_check",
        content: ["", "E-mail格式不正确"],
        type: [2],
        reg: 2,
        checkFormType: obj
    });
};


//免费帮我设计弹框
function freeDesign(obj, toid, ptag) {
    var ptag = arguments[2] ? arguments[2] : '1_5_1_1';
    var str = '<div class="freeQuote_box_content clear new-order">' +
        '<div id="form"><input type="hidden" name="toid" value="' + toid + '" />' +
        '<ul>' +
        '<li><span class="fbc_name">您的称呼</span><input type="text" class="fq_text" name="yourname" maxlength="12"></li><li><span class="fbc_name">手机号码</span><input type="text"class="fq_text" name="youriphone"></li>' +
        '<li><span class="fbc_name">所在城市</span><select class="fq_sheng" id="User_Shen1" name="User_Shen1" onchange="changeProvince(\'User_Shen1\',\'User_City1\',\'User_Town1\');"><option value="1">省/市</option></select><select class="fq_shi"  id="User_City1" name="User_City1" onchange="changeTown(\'User_Shen1\',\'User_City1\',\'User_Town1\');"><option value="0">市/地区</option></select><div style="display:none;"><select class="langSelect" id="User_Town1" name="User_Town1"><option>县/区</option></select></div></li>' +
        '</ul>' +
        '<div class="safe accept_service cl">'+
        '<span class="safe_login">'+
        '<input type="checkbox" id="as_service" checked="checked">'+
        '<label>我已阅读并接受<a href="http://www.to8to.com/help/index.php?id=76" target="_blank">《装修常见问题条款》</a></label>'+
        '</span></div>'+
        '<input type="submit" submit_type="ajax_design" value="免费申请" class="fq_btn neworder-submit" onClick="javascript:checkFreeBookingForm(this,\'' + ptag + '\', \'' + toid + '\')">' +        
        '<span class="fq_free_line">全国免费热线:400-6900-288</span><div class="fq_description"><em></em>为了你的利益及我们的口碑，你的隐私将被严格保密。</div>' +
        '</div></div>';
    jq('.window_box').windowBox({
        width: 480,    //弹框宽度
        title: "申请免费设计", //标题
        // littleTitle: "您将获得1-3套设计方案参考",
        wbcStr: str,  //可编辑内容
        cancleBtn: false,    //是否显示取消按钮
        confirmBtn: false,  // 是否显示确认按钮
        callback: false
    });
    gpm.def_province = ["省/市", ""];
    gpm.def_city1 = ["市/地区", ""];
    gpm.initProvince($("User_Shen1"));
    jq("input#as_service").on('click',function (){
        if (jq(".neworder-submit").hasClass('btn_login_no')) {
            jq('.neworder-submit').removeClass('btn_login_no');
        } else {
            jq('.neworder-submit').addClass('btn_login_no');
        };
    });
};

function checkFreeBookingForm(obj, ptag, whoid) {
    if (jq(".neworder-submit").hasClass('btn_login_no')) {
            return false;
        };
    //获取当前ptag
    var BJptag = '1_5_1_2';
    var bdptag = ptag || BJptag;
    //百度统计函数
    try{
        _hmt && _hmt.push(['_trackEvent', 'zb', 'submit', bdptag]);
    }catch(e){

    }
    var ptag = arguments[1] ? arguments[1] : '';
    var a = jq(obj).parent().find('.fq_text[name="yourname"]').checkForm({
        className: "fb_check",
        content: ["称呼不可为空"],
        type: [1],
        checkFormType: obj,
        displayNum: true
    });
    var b = jq(obj).parent().find('.fq_text[name="youriphone"]').checkForm({
        className: "fb_check",
        content: ["手机号码不可以为空", "请填写正确的手机号码"],
        type: [1, 2],
        reg: 0,
        checkFormType: obj,
        displayNum: true
    });
    var c = jq(obj).parent().find('.fq_sheng[name="User_Shen1"]').checkForm({
        className: "fb_check",
        content: ["请选择您的所在地"],
        type: [1],
        checkFormType: obj,
        displayNum: true,
        checkType: "select"
    });
    if (c == 0) {
        var d = jq(obj).parent().find('.fq_shi[name="User_City1"]').checkForm({
            className: "fb_check",
            content: ["请选择您的所在地"],
            type: [1],
            checkFormType: obj,
            displayNum: true,
            checkType: "select"
        });
    }
    if (a == 0 && b == 0 && c == 0 && d == 0) {
        submit_ajax(obj, ptag, whoid)
    }
}
//免费帮我报价
function freePrice(obj, toid) {
    var str = '<div class="freeQuote_box_content clear">' +
        '<div id="form"><input type="hidden" name="toid" value="' + toid + '" />' +
        '<ul>' +
        '<li><span class="fbc_name">您的称呼</span><input type="text"class="fq_text" name="yourname" maxlength="12"></li><li><span class="fbc_name">手机号码</span><input type="text"class="fq_text" name="youriphone"></li>' +
        '<li><span class="fbc_name">所在城市</span><select class="fq_sheng" id="User_Shen1" name="User_Shen1" onchange="changeProvince(\'User_Shen1\',\'User_City1\',\'User_Town1\');"><option value="1">省/市</option></select><select class="fq_shi"  id="User_City1" name="User_City1" onchange="changeTown(\'User_Shen1\',\'User_City1\',\'User_Town1\');"><option value="0">市/地区</option></select><div style="display:none;"><select class="langSelect" id="User_Town1" name="User_Town1"><option>县/区</option></select></div></li>' +
        '</ul>' +
        '<div class="safe accept_service cl">'+
        '<span class="safe_login">'+
        '<input type="checkbox" id="as_service" checked="checked">'+
        '<label>我已阅读并接受<a href="http://www.to8to.com/help/index.php?id=76" target="_blank">《装修常见问题条款》</a></label>'+
        '</span></div>'+
        '<input type="submit" submit_type="ajax_price" value="免费申请" class="fq_btn neworder-submit" onClick="javascript:checkFreeBookingForm(this, \'\', \'' + toid + '\')">' +
        '<span class="fq_free_line">全国免费热线:400-6900-288</span><div class="fq_description"><em></em>为了你的利益及我们的口碑，你的隐私将被严格保密。</div>' +
        '</div></div>';
    jq('.window_box').windowBox({
        width: 480,    //弹框宽度
        title: "免费申请装修报价", //标题
        littleTitle: "帮您节省半年的工资",
        wbcStr: str,  //可编辑内容
        cancleBtn: false,    //是否显示取消按钮
        confirmBtn: false,  // 是否显示确认按钮
        callback: false
    });
    gpm.def_province = ["省/市", ""];
    gpm.def_city1 = ["市/地区", ""];
    gpm.initProvince($("User_Shen1"));    
        jq("input#as_service").on('click',function (){
            if (jq(".neworder-submit").hasClass('btn_login_no')) {
                jq('.neworder-submit').removeClass('btn_login_no');
            } else {
                jq('.neworder-submit').addClass('btn_login_no');
            };
        });     
};

//免费报价申请成功
function freeSuceess(obj) {
    var successStr = '<div class="apply_success"><span class="as_true"></span><strong>恭喜您，申请成功!</strong><em>土巴兔客服将于24小时内与您联系！</em></div>';
    jq('.window_box').windowBox({
        width: 480,
        height: 200,
        title: "提示",
        wbcStr: successStr,
        closeTime: 3000
    })
};

//免费报价申请失败
function freeFail(obj, city) {
    var failStr = '<div class="apply_fail"><span class="as_fail"></span><strong>非常抱歉,您当前的城市' + city + '尚未开通装修服务，敬请期待！</strong></div>';
    jq('.window_box').windowBox({
        width: 480,
        height: 257,
        title: "提示",
        wbcStr: failStr,
        closeTime: 3000
    })
};


//新版设计与报价 
function companyTender(self, toid) {
    var pricePtag,
        designPtag,
        index;

    if(jq(self).hasClass('free_design')){
        index = 1;
        pricePtag = '1_5_1_1044';
        designPtag= '1_5_1_1045';
    } else if(jq(self).hasClass('free_price')){
        index = 0;
        pricePtag = '1_5_1_1046';
        designPtag= '1_5_1_1047';
    } else {
        index = 0;
        pricePtag = '1_5_1_1048';
        designPtag= '1_5_1_1049';
    }

    if(window.CommonTenderPop) {
        CommonTenderPop.init({
            pricePtag: pricePtag,
            designPtag: designPtag,
            cookieName: 'com_pop_flag',
            showIndex: index,
            automatic: false
        });
    } else {
        function loadStyle (src, container) {
            var container = container || document.getElementsByTagName('head')[0];
            var _link = document.createElement('link');
            _link.rel = "stylesheet";
            _link.href = src;
            _link.onload = function (e) {};
            container.appendChild(_link);
        }
        loadStyle('http://static.to8to.com/css/start/common_tender_pop.css');

        //同步加载js
        jq.getScript('http://static.to8to.com/gb_js/common_tender_pop.js',function(){
                CommonTenderPop.init({
                pricePtag: pricePtag,
                designPtag: designPtag,
                cookieName: 'com_pop_flag',
                showIndex: index,
                automatic: false
            });
        });
    }
}


// 装修公司广告为排序
//var idNum= test();   

var arr = [];
for (var i=0; i<15; i++) {

//jq('.zgs_company_list  ul').append(jq('#'+idNum[i].k).clone())
//jq('#'+idNum[i].k).eq(0).remove();
//jq('.zgs_company_list  ul').show();
};
//show_ad_list();
function show_ad_list(){
    var c = eval("(" + jq('#new_order_Info').val() + ")");
    var length = c[1].length+c[2].length;
    if(length == 1){
        jq('.zgs_company_add').show();
        jq('.ad_icon').hide();
    }else if(length > 1){
        jq('.ad_icon').show();
        jq('.zgs_company_list  ul li').each(function (i) {
            if(i==1){
                jq('.zgs_company_list  ul li').eq(i-1).addClass('top');
            }else if(i==length){
                jq('.zgs_company_list  ul li').eq(i-1).addClass('bottom');
            }else if(i > 1 && i < length){
                jq('.zgs_company_list  ul li').eq(i-1).addClass('left_right');
            }
        })
    }
}

function test() {
    var c = eval("(" + jq('#new_order_Info').val() + ")");
    var ids = [];
    jq('.zgs_company_list  ul li').each(function () {
        var id = parseInt(jq(this).attr('id'));
        if (indexOfArr(c[1], id) == -1 && indexOfArr(c[2], id) == -1) {
            ids.push(id);
        }
    });
    var res = new Object();
    res = rand_dg_new_order(0, c[1].length-1, res, c[1]);
    res = rand_dg_new_order(c[1].length, c[1].length + c[2].length - 1 , res, c[2]);
    for (var i = 0; i < 15; i++) {
        if (!res[i] && ids) {
            var ss = ids.shift();
            res[i] = {
                'k': parseInt(ss),
                'ad': 0
            };
        }
    }
    return res;
}

function indexOfArr(arr, item) {
    for (var i = 0; i < arr.length; i++) {
        if (item === arr[i]) return i;
    }
    return -1;
}
 
function rand_dg_new_order(min, max, res1, res2) {
    if (!res2.length) {
        return res1;
    }
    var t = new Array();
    for (var i = min; i <= max; i++) {
        t.push(i);
    }
    for (var key in res2) {
        if (t.length > 0) {
            var m = Math.floor(t.length * Math.random());
            res1[t[m]] = {
                'k': parseInt(res2[key]),
                'ad': 1
            };
            t.splice(m, 1);
        }
    }
    return res1;
}