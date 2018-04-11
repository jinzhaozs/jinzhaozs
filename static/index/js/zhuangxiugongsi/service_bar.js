(function (root, factory) {
  if (typeof exports === 'object') {
      require('common_modules/service_bar/service_bar.css')
      module.exports = factory(require('jquery'))
  } else if (typeof define === 'function' && define.cmd) {
      // 兼容seajs cmd,没有暴露exports到全局
      define(factory)
  } else {
      root.ServiceBar = factory(jQuery)
  }
})(this, function ($) {
  var ServiceBar = {
      init: function (option) {
        new serviceBar(option);
      }
  }

  var serviceBar = function (option) {
      var serviceStr = '<div class="service-bar">' +
                          '<a href="javascript:void(0)" class="service-item zhiCustomBtn">' +
                              '<i class="service-icons icon-design"></i>' + 
                          '</a>' +
                          '<a href="javascript:void(0)" class="service-item zhiCustomBtn">' +
                              '<i class="service-icons icon-decorate"></i>' + 
                          '</a>' +
                          '<a href="javascript:void(0)" class="service-item zhiCustomBtn">' +
                              '<i class="service-icons icon-build"></i>' + 
                          '</a>' +
                          '<a href="javascript:void(0)" class="service-item zhiCustomBtn">' +
                              '<i class="service-icons icon-coroperate"></i>' + 
                          '</a>' +
                          '<a href="javascript:void(0)" class="service-item zhiCustomBtn">' +
                              '<i class="service-icons icon-feeback"></i>' + 
                          '</a>' +
                       '</div>';
      $('body').append(serviceStr);
      initEvent();
  }
  var initEvent = function() {
    // 标记是否有点击事件被触发
    var Flag = false;
    var paramsObj = getConsultParams()
    var paramsInit = '{"tmpYid":'+paramsObj.tmpYid+',"encryptNumber":'+paramsObj.encryptNumber+',"pro_sourceid":3,"engine":"'+paramsObj.engine+'","ptag":"4_58_86_3874","crmUrl":"http://www.to8to.com/crm/index.php/Projects/manual/thirdissue/pro_sourceid/3/engine/'+paramsObj.engine+'/ptag/4_58_86_3874/tmpYid/'+paramsObj.tmpYid+'/encryptNumber/'+paramsObj.encryptNumber+'"}'
    var params = encodeURIComponent(paramsInit)
    // 电话咨询
    try {
        var zhiManager = (getzhiSDKInstance())
    } catch (e) {
        return
    }
    zhiManager.set('powered', 'false')
    zhiManager.set('customBtn', 'true')
    zhiManager.set('manTrace', 'true')
    zhiManager.set('telShowFlag', 'true')
    zhiManager.set('telFlag', 'false')
    zhiManager.set('manual', 'true')
    zhiManager.set('groupId', '9ce7a0b076fc44b8bcb1175a616f9182')
    zhiManager.set('userinfo', {
      'params': params
    })
    
    zhiManager.on('load', function (ret) {
        zhiManager.initBtnDOM()
    })
    $(document).on('click', '.service-item', function () {
        zhiManager.on('load', function (ret) {
            zhiManager.initBtnDOM()
        })
    })
  }
  var getConsultParams = function() {
    var tmpYid = getCookie('tmpYid')
    var encryptNumber = getCookie('encryptNumber')
    // 获取渠道编码
    var to8toNowpage = getCookie('to8to_nowpage')
    var to8toNowpageDecode = decodeURIComponent(to8toNowpage)
    to8toNowpageDecode = decodeURIComponent(to8toNowpage)
    var engine = ''
    var channel = getQueryString('channel',to8toNowpageDecode)
    if (channel) {
      engine = channel
    } else {
      var to8to_from = getQueryString('to8to_from',to8toNowpageDecode)
      if (to8to_from) {
        engine = to8to_from
      } else {
        var to8toSourcepage = getCookie('to8to_sourcepage')
        var to8toSourcepageDecode = decodeURIComponent(to8toSourcepage)
        var utmFrom = getQueryString('utm_from',to8toSourcepageDecode)
        if(utmFrom) {
          engine = utmFrom 
        } else {
          var host = to8toSourcepageDecode.replace(/((?:https?:\/\/)?\w+\.(\w+)\..*)/, '$2')
          switch(host) {
            case 'baidu':
            case 'tradaquan':
              engine = 'baidu'
              break;
            case 'google':
              engine = 'google'
              break;
            case 'soso':
              engine = 'soso'
              break;
            case 'sogou':
              engine = 'sogou'
              break;
            case '360':
            case 'so':
            case 'haosou':
              engine = '360'
              break;
            case 'sm':
              engine = 'sm'
              break;
            default:
              engine = ''
          }
        }
      }
    }
    return {
      tmpYid: tmpYid,
      encryptNumber: encryptNumber,
      engine: engine,
    }
  }
  var getCookie = function (c_name) {
      var c_value = document.cookie;
      var c_start = c_value.indexOf(" " + c_name + "=");
      if (c_start == -1) {
          c_start = c_value.indexOf(c_name + "=");
      }
      if (c_start == -1) {
          c_value = null;
      } else {
          c_start = c_value.indexOf("=", c_start) + 1;
          var c_end = c_value.indexOf(";", c_start);
          if (c_end == -1) {
              c_end = c_value.length;
          }
          c_value = unescape(c_value.substring(c_start, c_end));
      }
      return c_value;
  }

  var getQueryString = function(name,url){  
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");  
    var str = url.split('?')[1];
    var r = null;
    if(str) {
      r= str.match(reg);
    }  
    if (r!=null) return r[2]; return '';  
  }

  return ServiceBar
})
