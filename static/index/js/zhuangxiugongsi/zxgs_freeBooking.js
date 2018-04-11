/**
 * 免费申请预约
 * Date: 2014-08-27
 * By: Gavin
 */
var cityCode = getCookie('to8to_tcode') || 0;
    

function freeBooking(obj, special) {
    var bookingStr = '', ptag = '', titleName, descriptContent;
    if (special == "1") {
        titleName = "免费做设计与报价";
        descriptContent = "为了您的利益及我们的口碑，您的隐私将被严格保密。"
    } else {
        titleName = "免费预约装修公司";
        descriptContent = "预约需要土巴兔来审核，请耐心等待，我们会在收到您的信息之后第一时间和您取得联系！"
    }
    if (typeof(obj.ptag) != 'undefined') {
        ptag = obj.ptag;
    }
    bookingStr += '<form id="yyForm"><input type="hidden" value="7" name = "sourceid"/>';
    bookingStr += '<input type="hidden" value="' + obj.toid + '" id="toid" name="toid">';
    bookingStr += '<input type="hidden" id="s_source" value="' + obj.s_source + '" name="s_sourceid">';
    bookingStr += '<input type="hidden" name="ptag" id="ptag" value="' + ptag + '">';
    bookingStr += '<div class="free_booking"><ul>';
    bookingStr += '<li class="height_auto"><span class="fb_title">您的称呼</span><input type="text" name="name" id="name" maxlength="12" class="fq_text fq_text2"></li>';
    bookingStr += '<li><span class="fb_title">手机号码</span><input type="text" name="phone" id="phone" class="fq_text fq_text2"></li>';
    bookingStr += '<li><span class="fb_title">所在城市</span><select class="fb_province"  id="User_Shen2" name="User_Shen" onchange="changeProvince(\'User_Shen2\',\'User_City2\',\'User_Town2\');"><option>省/市</option></select><select class="fb_city"  id="User_City2" name="User_City" onchange="changeTown(\'User_Shen2\',\'User_City2\',\'User_Town2\');"><option value="">市/地区</option></select><div style="display: none;"><select class="langSelect" id="User_Town2" name="User_Town2"><option>县/区</option></select></div></li>';
    bookingStr += '</ul>';
    bookingStr += '<div class="safe accept_service">';
    bookingStr += '<span class="safe_login">';
    bookingStr += '<input type="checkbox" id="as_service" checked="checked">';
    bookingStr += '<label>我已阅读并接受<a href="http://www.to8to.com/help/index.php?id=76" target="_blank">《装修常见问题条款》</a></label>';
    bookingStr += '</span></div>';
    bookingStr += '<div class="fb_upload "><input type="button" class="neworder-submit" id="saveYY" value="提交" onClick=javascript:checkFreeBooking(this)><em>全国免费热线:400-6900-288</em></div>';
    bookingStr += '<div class="fb_description"><b></b><em>' + descriptContent + '</em></div></div></form>';

    jq('.window_box').windowBox({
        width: 459,
        title: '' + titleName + '',
        littleTitle: "装修立省30%",
        wbcStr: bookingStr
    });
    gpm.def_province = ["省/市", ""];
    gpm.def_city1 = ["市/地区", ""];
    gpm.initProvince($("User_Shen2"));

    jq("input#as_service").on('click',function (){
        if (jq(".neworder-submit").hasClass('btn_login_no')) {
            jq('.neworder-submit').removeClass('btn_login_no');
        } else {
            jq('.neworder-submit').addClass('btn_login_no');
        };
    });
}
function checkFreeBooking(obj) {//免费申请预约验证
    if (jq(".neworder-submit").hasClass('btn_login_no')) {
        return false;
    };
    var bdptag = jq('input[name="ptag"]').val();
    //百度统计函数
    try{
        _hmt && _hmt.push(['_trackEvent', 'zb', 'submit', bdptag]);
    }catch(e){

    }
    var myData = 'city=' + cityCode + ':id=' + (window.whoid || 0);
    if (jq("#ptag").val() != '') {
        clickStream.getCvParams(jq("#ptag").val());     //埋点
    }
    var obj = jq(obj).parent()[0];
    var chkForm = jq(this).parents('form');
    var nNameValue = jq('#yyForm input[name="name"]').checkForm({
        className: "fb_check",
        content: ["称呼不可以为空"],
        type: [1],
        checkFormType: obj,
        displayNum: true
    });
    var nPhoneValue = jq('#yyForm input[name="phone"]').checkForm({
        className: "fb_check",
        content: ["手机号码不可以为空", "请填写正确的手机号码"],
        type: [1, 2],
        reg: 0,
        checkFormType: obj,
        displayNum: true
    })
    var sheng = jq('#User_Shen2').checkForm({
        className: "fb_check",
        content: ["请选择你的所在地"],
        type: [1],
        reg: 0,
        checkFormType: obj,
        checkType: "select",
        displayNum: true
    });
    if (sheng == 0) {
        var city = jq('#User_City2').checkForm({
            className: "fb_check",
            content: ["请选择你的所在地"],
            type: [1],
            reg: 0,
            checkFormType: obj,
            checkType: "select",
            displayNum: true
        });
    }

    if (nNameValue == 0 && nPhoneValue == 0 && sheng == 0 && city == 0) {
        
        var _data = {
          phone: jq('#phone').val(),
          chenghu: jq('#name').val(),
          sourceid : jq('#yyForm').find('input[name="sourceid"]').val(),
          toid : jq('#yyForm').find('input[name="toid"]').val(),
          s_sourceid: jq('#yyForm').find('input[name="s_sourceid"]').val(),
          ptag: jq('#yyForm').find('input[name="ptag"]').val(),
          shen: jq("#yyForm").find('select[name="User_Shen"]').val(),
          city: jq("#yyForm").find('select[name="User_City"]').val(),
          nowstep: 1,
          modeltype: 1
        }
        var encryptData = rsaEncryptNameAndPhone({
            phoneObj: jq('#yyForm').find('input[name="phone"]'),
            chenhuObj: jq('#yyForm').find('input[name="name"]')
        },null,null,null,true);
        for(var i in encryptData) {
            _data[i] = encryptData[i];
        }
        if(!window.tender) {
            jq.getScript('http://static.to8to.com/gb_js/tender.js?v=1449147278',function(){
                var zxgsTender = new tender();
                zxgsTender.init(_data);
            });
            return;
        }
        var zxgsTender = new tender();
            zxgsTender.init(_data);    
    }
};

function checkBookStylist() {
    if (jq("#ptag").val() != '') {
        clickStream.getCvParams(jq("#ptag").val());     //埋点
    }
    jq('input[name="name"]').checkForm({className: "fb_check", content: ["称呼不可以为空"], type: [1]});
    jq('input[name="phone"]').checkForm({
        className: "fb_check",
        content: ["手机号码不可以为空", "请填写正确的手机号码"],
        type: [1, 2],
        reg: 0
    });
}

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
//申请失败
function freeFail_one(obj) {
    var failStr = '<div class="apply_fail"><span class="as_fail"></span><strong>非常抱歉,您当前的申请失败，请稍候再试！</strong></div>';
    jq('.window_box').windowBox({
        width: 480,
        height: 257,
        title: "提示",
        wbcStr: failStr,
        closeTime: 3000

    })
};

//免费报价申请失败
function freeFail_notkt(city) {
    var failStr = '<div class="apply_fail"><span class="as_fail"></span><strong>非常抱歉,您当前的城市' + city + '尚未开通装修服务，敬请期待！</strong></div>';
    jq('.window_box').windowBox({
        width: 480,
        height: 257,
        title: "提示",
        wbcStr: failStr,
        closeTime: 3000
    })
};

jQuery(function () {
    try {
        var footObj = document.getElementById('out_footer'),
            wrapObj = document.getElementById('i_body'),
            htmlObj = document.documentElement,
            bodyObj = document.body,
            windowHeight = htmlObj.clientHeight || bodyObj.clientHeight,
            docScrollHeihgt = htmlObj.scrollHeight || bodyObj.scrollHeight,
            wrapHeight = wrapObj.offsetHeight,
            cb = (function () {
                var u = window.navigator.userAgent.toLocaleLowerCase(),
                    msie = /(msie) ([\d.]+)/,
                    chrome = /(chrome)\/([\d.]+)/,
                    firefox = /(firefox)\/([\d.]+)/,
                    safari = /(safari)\/([\d.]+)/,
                    opera = /(opera)\/([\d.]+)/,
                    ie11 = /(trident)\/([\d.]+)/,
                    b = u.match(msie) || u.match(chrome) || u.match(firefox) || u.match(safari) || u.match(opera) || u.match(ie11);
                return {name: b[1], version: parseInt(b[2])};
            })();

        if (docScrollHeihgt <= windowHeight) {//文档高度小于窗口高度
            if (cb.version < 8 && cb.name == 'msie') {
                footObj.style.position = 'absolute';
                htmlObj.style.overflowY = 'hidden';
            } else {
                footObj.style.position = 'fixed';
            }

            wrapObj.style.height = windowHeight + "px";
            footObj.style.width = '100%';
            footObj.style.backgroundColor = '#fff';
            footObj.style.bottom = 0;
        }
    } catch (e) {

    }
}); 

//新版免费预约弹窗调用
function freepopOrder(obj) {
    var orderNum = '';
    if (!obj.orderNum) {
        orderNum = jq('.order_hotline .num1').eq(1).html();
    } else {
        orderNum = obj.orderNum;
    };

    orderPop.init({
        isCompany: true,
        toid: obj.toid,// 装修公司id
        orderNum: orderNum, //预约人数
        ptag: obj.ptag
    });
}
function freeOrderSite(obj, self) {
    var parentsDOM = jq(self).parents('.case_main');

    var title = parentsDOM.find('.case_details_name').html(),
        details = parentsDOM.find('.case_tag').html(),
        pic = parentsDOM.find('.case_pics').find('img').attr('src');

    orderPop.init({
        isCompany: false,
        ptag: obj.ptag,
        toid: obj.toid,
        gid: obj.gid,
        siteTit: title,
        siteDetail: details,
        sitePic: pic
    })
} 