(function(jq) {
  var FloatTools = {
      init:function() {
          initialize();
      }};
  function initialize() {
      var str = '';
      // var cityCode = getCookie('townid', 1);
      // if(isGroundCity(cityCode)){
      // }
      str += '<div class="slide-help-new">' +
          '<a href="javascript:void(0)" class="help-icon help-icon-attention">' +
              '<span class="help-attention-wrapper"><i class="icon-attention"></i></span>' +
          '</a>' +
          '<a href="javascript:void(0)" id="help-icon-quoted" class="help-icon ico-quoted">' +
              '<span class="help-icon-hover"><span class="help-icon-text">报价计算</span></span>' +
              '<span class="help-icon-wrapper"><i class="icon-quoted"></i></span>' +
          '</a>' +
          '<a href="javascript:void(0)" class="help-icon help-icon-backtop">' +
              '<span class="help-icon-hover"><span class="help-icon-text">返回顶部</span></span>' +
              '<span class="help-icon-wrapper"><i class="icon-backtop"></i></span>' +
          '</a>' +
          '<div class="slide-attention">' +
              '<div class="attention-box">' +
                  '<div class="attention-item">' +
                      '<span class="attention-item-img attention-item-img-app"></span>' +
                      '<p class="attention-app">下载土巴兔APP<br/>查看业主真实装修日记</p>' +
                  '</div>' +
                  '<div class="attention-item">' +
                      '<span class="attention-item-img attention-item-img-t8t"></span>' +
                      '<p class="attention-wx">扫微信，获10000套家居设计案例</p>' +
                  '</div>' +
              '</div>' +
          '</div>' +
      '</div>';

      jq("body").append(jq(str));
      // obj = getBodyType();
      //修改装修报价按钮
      backtop();

      jq(window).bind('scroll', function () {
        // 回到顶部
        backtop()
      })

      jq('.slide-help-new').on('click', '.help-icon-backtop', function () {
        jq(window).scrollTop(0)
      })

      jq(".ico-quoted").on('click', function(){
          if(window.CommonTenderPop) {
              CommonTenderPop.init({
                  exposurePtag: '1_7_11_427',
                  pricePtag: '1_1_1_984',
                  designPtag: '1_1_1_985',
                  companyPtag: ' 1_1_1_986',
                  materialPtag: '1_1_1_987',
                  automatic: false,
                  showXGTImg: false,
                  showResult: false
              });
          }
          else {
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
              jq.getScript('http://static.to8to.com/gb_js/common_tender_pop.js?v=20180308',function(){
                      CommonTenderPop.init({
                      exposurePtag: '1_7_11_427',
                      pricePtag: '1_1_1_984',
                      designPtag: '1_1_1_985',
                      companyPtag: ' 1_1_1_986',
                      materialPtag: '1_1_1_987',
                      automatic: false,
                      showXGTImg: false,
                      showResult: false
                  });
              });
          }
      });

      var timerAttention = null
      // 侧边栏关注
      jq('.slide-help-new').on('mouseover', '.help-icon-attention', function () {
          timerAttention = setTimeout(function () {
              jq('.slide-attention').css({
                  width: '0'
              }).stop(true, true).animate({
                  width: '157px'
              })
          }, 100)
      }).on('mouseleave', '.help-icon-attention', function () {
          clearTimeout(timerAttention)
          timerAttention = setTimeout(function () {
              jq('.slide-attention').css({
                  width: '157px'
              }).stop(true, true).animate({
                  width: '0'
              })
          }, 100)
      })
      jq('.ico-quoted').click(function(){
          clickStream.getCvParams('1_7_11_427');
      })
  };
  function backtop () {
    var wHeight = jq(window).height() / 2
    var wScroll = jq(window).scrollTop()
    if (wScroll > wHeight) {
      jq('.help-icon-backtop').css({display: 'block'})
      jq('.attention-box').removeClass('top')
      jq('.slide-help-new').css({bottom:'170px'})
    } else {
      jq('.help-icon-backtop').css({display: 'none'})
      if(jq(window).width()<1460) {
        jq('.slide-help-new').css({bottom:'218px'})
      }
      else {
        jq('.slide-help-new').css({bottom:'228px'})
      }
      jq('.attention-box').addClass('top')
    }
}
  jq(function(){
      //右侧浮栏初始化
      FloatTools.init();
  })

})(jQuery,window);


















