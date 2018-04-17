$(function ($) {

    function showBF() {
        $("#bottom-float").show();
        $("#bottom-open").hide();
    }

    function hideBF() {
        $("#bottom-float").hide();
        slideCloseBF();
    }

    function slideOpenBF() {
        $("#bottom-open").animate({ "left": "-155px" }, 100, function () {
            $("#bottom-float").show().animate({ "left": "0px" }, 400);
        });
    }

    function slideCloseBF() {
        var wH = $(window).width();
        $("#bottom-float").animate({ "left": -wH + "px" }, 400, function () {
            $("#bottom-open").show().animate({ "left": "0px" }, 300);
        });
    }

    function initBF() {
        //自定义页面底部招标弹窗是否常显
        var $footZhaobiaoIsShow = $("#foot_zhaobiao_IsShow");
        if ($footZhaobiaoIsShow.length <= 0) {
            
            //seo 要求 所有站点 默认显示

            //var bfhide = getCookie('mlj-bfhide');
            //if (bfhide == '1') {
            //    hideBF();
            //}
            //else {
            //    showBF();
            //}

            showBF();
        }
        else {
            if ($footZhaobiaoIsShow.val() == "show") {
                showBF();
            }
            else {
                hideBF();
            }
        }
    }

    initBF();
    $("#bottom-close").click(function () {
        slideCloseBF();
    });
    $("#bottom-open").click(function (e) {
        slideOpenBF();
    });
    // 底部右侧弹出层	   结束	

    //返回顶部、显示二维码  开始
    $('.qr-btn').hover(
        function () {
            $('.qr-code').fadeIn('slow');
        },
        function () {
            $('.qr-code').fadeOut('slow');
        }
	);

//  btxcms.zhaobiao.submit(".zhaobiaofoot", { hid_classId: 24274 }, "");

    $(".zhaobiao_btn").click(function () {
        var UserName = $(".zhaobiaofoot input[name='applyuser']").val();
        if (UserName == "" || UserName == "您的称呼") {
            $(".zhaobiaofoot input[name='applyuser']").val("").focus();
            return false;
        }
        var Phone = $(".zhaobiaofoot input[name='mobile']").val();
        var telzz = /^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?|((\(\d{2,3}\))|(\d{3}\-))?(13|15|18|14)\d{9}$/
        if (!telzz.test(Phone)) {
            $(".zhaobiaofoot input[name='mobile']").val("").focus();
            return false;
        }
    });
});

//返回顶部、显示二维码   结束
function setCookieWithDomain(key, value, path, domain) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + 1000);
    var cookie_str = key + "=" + encodeURIComponent(value) + ";expires=" + exdate.toGMTString();
    if (path) {
        cookie_str += ";path=" + path;
    }
    if (domain) {
        cookie_str += ";domain=" + domain;
    }
    document.cookie = cookie_str;
}
function setCookie(key, value, path) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + 1000);
    var cookie_str = key + "=" + escape(value) + ";expires=" + exdate.toGMTString();
    if (path) {
        cookie_str += ";path=" + path;
    }
    document.cookie = cookie_str;
}
function setNoExpiresCookie(key, value) {
    var cookie_str = key + "=" + escape(value) + ";path=/";
    document.cookie = cookie_str;
}
function getCookie(key) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(key + "=");

        if (c_start != -1) {
            c_start = c_start + key.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return decodeURIComponent(document.cookie.substring(c_start, c_end));
        }
    }
    return null;
}
function delCookie(key) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() - 1);
    document.cookie = key + "=" + ";expires=" + exdate.toGMTString() + ";path=/";
}
function getCookie(key) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(key + "=");

        if (c_start != -1) {
            c_start = c_start + key.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return decodeURIComponent(document.cookie.substring(c_start, c_end));
        }
    }
    return null;
}
function go_page_up() {
    $('html,body').animate({ scrollTop: 0 }, { duration: 300 });
}


var datenow = new Date()
var topbar_offset = 0;
var upro_tnav_offset = 0;
var upage_menu_offset = 0;
var col_view_offset = 0;
var page_width = 1230;
jQuery(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
        var left = ($(window).width() - page_width) / 2 + page_width + 20;
        $('.sub-back-top').css('left', left);
        $('.sub-back-top').fadeIn(800);
    }
    else {
        $('.sub-back-top').fadeOut(800);
    }
});
//让所有ie版本都能兼容placeholder属性
$(function () {

    //判断浏览器是否支持placeholder属性
    supportPlaceholder = 'placeholder' in document.createElement('input'),

  placeholder = function (input) {

      var text = input.attr('placeholder'),
         defaultValue = input.defaultValue;
      if (!defaultValue) {

          input.val(text).addClass("phcolor");
      }
      input.focus(function () {
          if (input.val() == text) {

              $(this).val("");
          }
      });
      input.blur(function () {

          if (input.val() == "") {

              $(this).val(text).addClass("phcolor");
          }
      });

      //输入的字符不为灰色
      input.keydown(function () {

          $(this).removeClass("phcolor");
      });
  };

    //当浏览器不支持placeholder属性时，调用placeholder函数
    if (!supportPlaceholder) {

        $('input').each(function () {

            text = $(this).attr("placeholder");

            if ($(this).attr("type") == "text") {

                placeholder($(this));
            }
        });
    }
});