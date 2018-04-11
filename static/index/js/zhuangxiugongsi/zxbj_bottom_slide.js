/***
*    底部上滑浮框代码重构
*    2017-02-24 by hank.lan   
***/
(function(window,jq){
    //全局对象
    window.bottomFloat = {
        //一些外部可控制的变量以及方法
        init: function(option){
            var self = this;            
            self.config = jq.extend({
                restrictHight: jq('body').height()*3/2,//开始上浮的位置   （高度）
                restrictFlag:true,//是否可以自动上浮
                restrictClass:'',//
                arrow_upH:'',//上下滑动箭头上滑高度
                arrow_downH:'',//上下滑动箭头下滑高度
                add_html:'',//增加页面内容
                bottom_ptag:'1_1_1_99',//默认的ptag
                phone_History_Arr:[],//电话号码数组
                touch_time:7,//
                bg_flag:false,//曝光统计
                page_effect:null,//页面效果
                html_show: null,//插入底部结构的时候触发的函数
                event: null,
                whole_show:null,//全部展示的时候触发的函数 --包括自动上滑   和手动点击
                click_up:null,//点击向上时触发
                click_down:null,//点击向下时触发
                bottom_rule:null,//底部浮框出现规则
                bottom_validate:null,//底部浮框表单验证
                fabiaoFun:null,//点击发标
                remove_slideBox:null,//去除底部上滑浮框
                slide_flag:false,//标注用户是否进行了操作
                now_scr:0,//现在的滚动条距离
                slide_height_current:2500,//默认自动触发上滑浮框高度
                new_slideFlag:false,//底部浮框是否已经完整展现过 
                num_flag:false,//是否已经调用参数接口
                voluntarily_slide:false,//是否能自动上滑
                bot_is_shenzhen:false,//深圳
                bot_is_dongguan:false,//东莞
                user_register_flag:false,//用户是否登记
                phone_History_Arr_:[],
                page_num:'',
                up_slide:false,//标记是否触发了自动上滑
                city_Obj:{
//                  '深圳' : 'placeholder',
//                  '东莞' : 'placeholder',
//                  '广州' : 'http://static.to8to.com/img/to8to_img/wx_xh/wx_add_code/wx_code_gz.png',
//                  '合肥' : 'http://static.to8to.com/img/to8to_img/wx_xh/wx_add_code/wx_code_hf.png',
//                  '南京' : 'http://static.to8to.com/img/to8to_img/wx_xh/wx_add_code/wx_code_nj.png',
//                  '无锡' : 'http://static.to8to.com/img/to8to_img/wx_xh/wx_add_code/wx_code_wx.png',
//                  '武汉' : 'http://static.to8to.com/img/to8to_img/wx_xh/wx_add_code/wx_code_wh.png',
//                  '长沙' : 'http://static.to8to.com/img/to8to_img/wx_xh/wx_add_code/wx_code_cs.png',
//                  '苏州' : 'http://static.to8to.com/img/to8to_img/wx_xh/wx_add_code/wx_code_sz.jpg'
                }, // 微信小号城市及二维码
                checkrepeat : false,
                checkverify : 0,
                hasupload : false,
                check_info : {}, // 存放审核信息
                randomFun:null
            },option);
            //插入结构
            self.showBottom();
        },
        //入口
        entrance:function(){            
        },
        //各种资源的动态引入
        insertResource:function(){
//            这样引入样式加载太慢
                          //引入上滑浮框css
                          jq('head').append('<link>');
                          var css = jq('head').children(':last');
                          css.attr({
                              rel: "stylesheet",
                              type: "text/css"
                          })
//            引入md5
            if(typeof jq.md5 != 'function'){
                var _scriptMd5 = document.createElement('script');
                _scriptMd5.type = 'text/javascript';
                _scriptMd5.src = "http://static.to8to.com/gb_js/jQuery.md5.js";
                document.getElementsByTagName('head')[0].appendChild(_scriptMd5);
            }
            //引入tender.js
//          if(!window.tender) {
//              jq.getScript('http://static.to8to.com/gb_js/tender.js?v=1464789987');
//          }
        },
        //插入上滑浮框html结构 
        showBottom: function(){
            var self = this;
            self.insertResource();//先加载好需要的资源文件
            self.cookieOperate();//先判断好能不能发标 
            var str =   '<div class="bottom_slide_click"></div>'+
                        '<div class="slide_box_shade"></div>'+ 
                        '<div class="zxbj_details">'+
                            '<div class="all_Calc_Container Calc_Container_zxys">'+
                                '<div class="bottom_slide_img"></div>' +
                                '<div class="bottom_slide_wh_img"></div>' +
                                '<div class="bottom_slide_down bottom_slide_up"></div>' +
                                '<div class="zxbj_zxys">' +
                                    '<div class="con_bj clear">' +
                                            '<!-- calculate -->' +
                                            '<div class="con_bj_cal col_l">' +
                                                '<h3 class="calputer_tit">装修计算器<span>今天已有 <em class="zxys_num_man"></em> 位业主获取了装修预算</span></h3>' +
                                                '<form id="new_zxys_info">' +
                                                    '<div class="mod_form bj_form">' +
                                                        '<div class="form_line">' +
                                                            '<label for="" class="label"><em class="label_start">*</em>所在城市：</label>' +
                                                            '<div class="element">' +
                                                                '<div class="province-town clear">' +
                                                                    '<input type="hidden" name="dangci" value="jianzhuang">' +
                                                                    '<select id="zxys_Shen" name="shen" class="select_Shen" onchange="changeProvince(\'zxys_Shen\',\'zxys_City\',\'zxys_Town\');">' +
                                                                        '<option value="">省/市</option>' +
                                                                    '</select>' +
                                                                    '<select id="zxys_City" name="city" class="select_City">' +
                                                                        '<option value="">市/地区</option>' +
                                                                    '</select>' +
                                                                    '<div style="display:none">' +
                                                                        '<select class="langSelect" id="zxys_Town" name="town">' +
                                                                            '<option value="">县/市</option>' +
                                                                        '</select>' +
                                                                    '</div>' +
                                                                '</div>' +
                                                            '</div>' +
                                                        '</div>' +
                                                        '<div class="form_line">' +
                                                            '<label for="" class="label" ><em class="label_start">*</em>房屋面积：</label>' +
                                                            '<div class="element">' +
                                                                '<div class="text_wrap">' +
                                                                    '<input type="text" class="text area_text" name="square" id="zxys_square">' +
                                                                    '<em class="text_lbl">输入您的房屋面积</em>' +
                                                                    '<em class="unit" style="color: black;">m&sup2;</em>' +
                                                                '</div>' +
                                                                '<p class="text_area">* 输入面积小于30㎡时，报价结果按30㎡计算</p>' +
                                                            '</div>' +
                                                        '</div>' +
                                                        '<div class="form_line">' +
                                                            '<label for="" class="label"><em class="label_start">*</em>房屋户型：</label>' +
                                                            '<div class="element">' +
                                                                '<div class="zxgs-hx clear">' +
                                                                    '<select name="shi" id="zxys_shi" class="first_line">' +
                                                                        '<option value="1">1室</option>' +
                                                                        '<option value="2">2室</option>' +
                                                                        '<option value="3">3室</option>' +
                                                                        '<option value="4">4室</option>' +
                                                                        '<option value="5">5室</option>' +
                                                                        '<option value="6">6室</option>' +
                                                                    '</select>' +
                                                                    '<select name="ting" id="zxys_ting" class="first_line">' +
                                                                        '<option value="1">1厅</option>' +
                                                                        '<option value="2">2厅</option>' +
                                                                        '<option value="3">3厅</option>' +
                                                                        '<option value="4">4厅</option>' +
                                                                        '<option value="5">5厅</option>' +
                                                                        '<option value="6">6厅</option>' +
                                                                    '</select>' +
                                                                    '<select name="chu" id="zxys_chu" class="first_line">' +
                                                                        '<option value="1">1厨</option>' +
                                                                        '<option value="2">2厨</option>' +
                                                                        '<option value="3">3厨</option>' +
                                                                    '</select>' +
                                                                    '<select name="wei" id="zxys_wei" class="second_line">' +
                                                                        '<option value="1">1卫生间</option>' +
                                                                        '<option value="2">2卫生间</option>' +
                                                                        '<option value="3">3卫生间</option>' +
                                                                        '<option value="4">4卫生间</option>' +
                                                                        '<option value="5">5卫生间</option>' +
                                                                        '<option value="6">6卫生间</option>' +
                                                                    '</select>' +
                                                                    '<select name="yangtai" id="zxys_yangtai" class="second_line">' +
                                                                        '<option value="1">1阳台</option>' +
                                                                        '<option value="2">2阳台</option>' +
                                                                        '<option value="3">3阳台</option>' +
                                                                        '<option value="4">4阳台</option>' +
                                                                        '<option value="5">5阳台</option>' +
                                                                        '<option value="6">6阳台</option>' +
                                                                    '</select>' +
                                                                '</div>' +
                                                            '</div>' +
                                                        '</div>' +
                                                        '<div class="form_line" id="zxys_phoneInput">' +
                                                        '<label for="" class="label" ><em class="label_start">*</em>手机号码 ：</label>' +
                                                            '<div class="element">' +                                                
                                                                '<div class="text_wrap">' +
                                                                    '<input id="zxys_phonenumber" type="text" class="text phonetext" name="phone">' +
                                                                    '<em class="text_lbl">报价结果将发送到您的手机</em>' +
                                                                '</div>' +
                                                            '</div>' +
                                                        '</div>' +
                                                        '<div class="form_line" id="btn_js">' +
                                                            '<i class="ico-line-btn"></i>'+
                                                            '<a href="javascript:void(0);" class="calc-btn-start" id="zxys_calc_btn">' +
                                                                '<label for="zxys_calc_btn" id="zxys_btn_calc" class="calcstart">开始计算</label>' +
                                                                '<!-- 开始计算 -->' +
                                                                '<input type="hidden" id="zxys_myptag" name="ptag" value="1_4_2_3">' +
                                                            '</a>' +
                                                            '<span class="circle-animate"></span>'+
                                                        '</div>' +
                                                    '</div>' +
                                                '</form>' +
                                                '<div class="zxbosl-wechat-hotad">' +
                                                    '<div class="wechat-img"></div>' +
                                                    '<p class="wechat-message">报价短信已发送到您的手机</p>' +
                                                    '<p class="wechat-text">因材料品牌及工程量不同，具体报价以量房实测为准</p>' +
                                                    '<p class="wechat-recall">稍候装修管家将回电您，免费提供装修咨询服务</p>' +
                                                    '<div class="form_line bj_btn">' +
                                                        '<a class="calc-btn-end" id="zxbosl_hotad_calc" href="javascript:void(0);">' +
                                                            '<label for="zxbosl_hotad_calc"  class="calcstart">重新计算</label>' +
                                                        '</a>' +
                                                    '</div>' +
                                                '</div>' +
                                            '</div>' +
                                            '<!-- results -->' +
                                            '<div class="con_bj_res col_l">' +
                                                '<!--<h3>计算结果</h3>-->' +
                                                '<div class="zxys_result"><span class="zxys-result-span">您的装修预算</span><b id="bprice">？</b><span>元</span></div>' +
                                                '<div class="zxgs-list">' +
                                                    '<ul class="zxgs-list-before adclear">' +
                                                        '<li class="hotad-lbj"><span>材料费：</span><strong id="materialPay"><em>？</em>元</strong></li>' +
                                                        '<li class="hotad-lbj"><span>人工费：</span><strong id="artificialPay"><em>？</em>元</strong></li>' +
                                                        '<li class="hotad-rbj"><span>设计费：</span><strong id="designPay"><em>？</em>元</strong></li>' +
                                                        '<li class="hotad-rbj"><span>质检费：</span><strong id="qualityPay"><em>？</em>元</strong></li>' +
                                                    '</ul>' +
                                                    '<div class="hotad-bjtext">' +
                                                        '<p class="attention holiday-text"><b>*</b>稍候装修管家将回电您，免费提供装修咨询服务</p>' +
                                                        '<p class="text-none"><b>*</b>因材料品牌及工程量不同，具体报价以量房实测为准</p>' +
                                                    '</div>' +
                                                '</div>' +
                                                '<div class="bj_explain zxys_explain" style="display:none">' +
                                                    '<p class="attention holiday-text"><b>*</b>稍候装修管家将回电您，免费提供装修咨询服务</p>' +
                                                    '<p class="text-none"><b>*</b>因材料品牌及工程量不同，具体报价以量房实测为准</p>' +
                                                '</div>' +
                                                '<div class="result-head">' +
                                                     '<p>报价短信已发送到您的手机，请注意查收！</p>' +
                                                     '<p class="recall holiday-text">稍后装修管家将回电您，免费提供装修咨询服务</p>' +
                                                '</div>' +
                                                '<div class="result-contain-bt">' +
                                                   '<p class="result-con-head">装修怕上当？问问靠谱的人' +
                                                   '<div class="weixin-portrait-gif"></div>'+
                                                   '<div class="weixin-arrow-animated"></div>'+
                                                    '<div class="left">' +
                                                        '<p><span class="bottom-zxgw-city">装修顾问  </span><span class="kfname bottom-kfname">土巴兔-馨馨</span></p>' +
                                                        '<p class="wechat-slogan">（四年装修行业经验）</p>' +
                                                    '</div>' +
                                                    '<div class="right">' +
                                                        '<p class="clear"><em></em>微信扫一扫 加好友</p>' +
                                                    '</div>' +
                                                    '<p class="result-bottom"><span>24小时咨询</span>咨询装修报价、户型设计等装修疑问</p>' +
                                                    '<div class="result-contain-dg"></div>'+
                                                    '<div class="result-contain-more-code"><img src=""></div>'+
                                                '</div>' +
                                                '<div class="result-hotad">'+
                                                    '<a href="javascript:void(0);"><img src="" alt=""></a>'+
                                                    '<p>广告</p>'+
                                                '</div>'+
                                            '</div>' +
                                            /*'<div class="tdc-box"><div class="tdc-box-img"></div></div>'+*/
                                            '<!-- check info -->' +
                                            '<div class="upsresult_check_info">' +
                                                '<h3>完善以下信息<span>&nbsp;&nbsp;&nbsp;让我们更了解您的需求优先为您服务</span></h3>' +
                                                '<div class="house-type clear">' +
                                                    '<p class="check_question">1.&nbsp;您家的房屋现状是 :</p>' +
                                                    '<div class="check-house" data-ptag="0">' +
                                                        '<div></div>' +
                                                        '<p><i></i>毛坯房</p>' +
                                                        '<input type="hidden" value="毛坯房">' +
                                                    '</div>' +
                                                    '<div class="check-house" data-ptag="1">' +
                                                        '<div class="old-house"></div>' +
                                                        '<p><i></i>旧房翻新</p>' +
                                                        '<input type="hidden" value="旧房翻新">' +
                                                    '</div>' +
                                                    '<div class="check-house check-house-last" data-ptag="2">' +
                                                        '<div class="little-change"></div>' +
                                                        '<p><i></i>局部改造</p>' +
                                                        '<input type="hidden" value="局部改造">' +
                                                    '</div>' +
                                                '</div>' +
                                                '<div class="decorate-time clear">' +
                                                    '<p class="check_question">2.&nbsp;您家准备什么时候开始装修 :</p>' +
                                                    '<div class="check-time" data-ptag="4">' +
                                                        '<p><i></i>一个月内</p>' +
                                                        '<input type="hidden" value="1个月内">' +
                                                    '</div>' +
                                                    '<div class="check-time check-time-next" data-ptag="5">' +
                                                        '<p><i></i>两个月内</p>' +
                                                        '<input type="hidden" value="2个月内">' +
                                                    '</div>' +
                                                    '<div class="check-time check-time-next" data-ptag="6">' +
                                                        '<p><i></i>两个月以上</p>' +
                                                        '<input type="hidden" value="2个月以上">' +
                                                    '</div>' +
                                                '</div>' +
                                                '<div class="plot-name clear">' +
                                                    '<p class="check_question">3.&nbsp;您家小区名称 :&nbsp;&nbsp;</p>' +
                                                    '<input type="text" placeholder="土巴兔将为您推荐优质施工方" maxlength="24">' +
                                                '</div>' +
                                                '<a href="javascript:void(0);" class="check-upload">提交</a>' +
                                                '<div class="complate-form">' +
                                                    '<p>请选择您家的装修时间</p>' +
                                                '</div>' +
                                            '</div>' +
                                    '</div>' +
                                '</div>' +
                            '</div>'+
                        '</div>';
            jq('.bottom_slide_content').append(str);
            // 生成一个0-20万的随机数                
            bottomFloat.randomNumber();
            self.initialiseEffect();//初始化各种动态效果
        },
        //初始化各种效果 各种事件
        initialiseEffect:function(){
            var self = this;


            // 如果为IE用图片替换按钮
            function isIE() {
                var agent = navigator.userAgent;
                if (typeof isIE.ieanimate !== "undefined") {
                    return isIE.ieanimate;
                }
                if (/msie\s[679]\.0/i.test(agent) || (/msie\s8\.0/i.test(agent) && !window.innerwidth)) {
                    //  IE 6789
                    isIE.ieanimate = true;
                    return true;
                } else {
                    isIE.ieanimate = false;
                    return false;
                }
            }

            if (isIE()) {
                var str ='<i class="ico-line-btn"></i>'+
                        '<a href="javascript:void(0);" class="calc-btn-start btmcalc-btn-ie" id="zxys_calc_btn">' +
                            '<img src="http://img.to8to.com/to8to_img/zxbj/go_calc.gif" alt="" style="width:100%">' +
                           '<input type="hidden" id="zxys_myptag" name="ptag" value="1_4_2_3" data-expose="true"></a>';
                jq('#btn_js').html(str);
            }

            //ptag
            self.config.bottom_ptag = self.config.bottom_ptag || jq('#zxys_myptag').val(); //当前展示页面的ptag
            //初始化上下箭头和微信小号左右箭头
            self.an_arrow_bot('.weixin-arrow-animated','173px','153px');//箭头左右动画
            self.an_arrow_bot('.pre-weixin-arrow-animated','170px','180px');// 初始态箭头动画
            //初始化页面根据ip接口得到的城市 展示对应微信小号
            jq(document).ready(function(){
                city_from_ip(function(cityFromIp){                
                    self.city_operate(cityFromIp);//初始化对应操作
                });        
            });
            //省市联动初始化
            window.gpm = new GlobalProvincesModule;            //城市类
            gpm.def_province = ["省/市", ""];
            gpm.def_city1 = ["市/地区", ""];
            gpm.initProvince($('zxys_Shen'));
            gpm.initCity1($('zxys_City'), gpm.getSelValue($('zxys_Shen')));
            //切换城市方法  原本绑定了change方法这里强行替换原本的绑定在原本流程前面加入了城市筛选  
            jq('.bottom_slide_content').on('change','#zxys_City',function(){
                var city = jq('#zxys_City').val();
                self.city_operate(city);//切换城市方法
                changeTown('zxys_Shen','zxys_City','zxys_Town');
            });
            //滚动条事件
            jq(window).scroll(function(){ 
                self.scrollActual();//监控用户再页面上的滑动
            })
            //关闭浮框按钮
            jq('.bottom_slide_close').click(function(){
                jq('.bottom_slide_box').remove();
            });
            //banner 点击事件
            jq('.bottom_slide_click').click(function(){
                self.bottomClick();//点击后 的效果 
                //未发标  手动触发上滑  呼出30天之内都不能自动触发上滑呼出
                if (getCookie('fabiao_flag') != 'true' && jq('.bottom_slide_down').hasClass('bottom_slide_up')) {//判断是否是未发标 是否是上滑
                    setCookie('manual-click-noTrigger','true',30*24*60*60*1000);
                };                
            });
            //浮框内部功能
            jq('.Calc_Header').find('ul li').on('click',function(e){
                var headArr = ['Calc_Container_zxys','Calc_Container_zxcl','Calc_Container_zxgs','Calc_Container_zxdk','Calc_Container_jiri'],
                    cssArr  = ['firston','secondon','thirdon','fourthon','fifthon'];
                jq(this).parent().removeClass().addClass(cssArr[jq(this).index()]);
                jq('.all_Calc_Container').removeClass().addClass('all_Calc_Container').addClass(headArr[jq(this).index()]);
                var ptag = jq(this).attr('dataptag');
                (typeof clickStream !== 'undefined') && clickStream.getCvParams(ptag);
            });
            // 深圳东莞城市可选报价结果控制
            jq('.choosebjway li').on('click',function(){
                jq(this).addClass('blueradio').siblings().removeClass('blueradio');
                var index = jq(this).index();
                jq(this).parents('.element').children('div').eq(index).show().siblings('div').hide();
                if(index == 1){
                    jq('.calc-btn-start').addClass('calc-disabled');
                }else{
                    jq('.calc-btn-start').removeClass('calc-disabled');
                }
            });
            jq('.form_line').on('click','.calc-disabled',function(){
                return false;
            });
            //初始化上下滑动方法
            self.shake();
            //发标相关事件以及数据验证 数据展示
            self.bottom_fb();
        },
        //不断反复的动画效果
        an_arrow_bot:function(target,start,end){
            var self = this;
            jq(target).animate({
                'left' : start
            },500,function(){
                jq(target).animate({
                    'left' : end
                },500,function(){
                    self.an_arrow_bot(target,start,end);//递归
                });
             });
        },
        //深圳东莞城市展示微信小号
        city_operate:function(city){
            if(bottomFloat.render_floatbj.has_bj(city)){
                bottomFloat.render_floatbj.render_result(bottomFloat.render_floatbj[city]);
            }else{
                bottomFloat.render_floatbj.init_result();
            }
            var self = this;
            //jq('.tdc-box').removeClass('wechat-img-dg wechat-img');//初始化二维码
            jq('.result-contain-dg').hide();//初始化二维码
            jq('.result-contain-more-code').hide();//初始化二维码
            if (self.config.city_Obj[city]){
                //初始化 初始态            
                jq('.con_bj_res').addClass('bot-showwechat');
                jq('.bot-showwechat .bottom-kfname').text('土巴兔-馨馨');//发标 结果态赋值  
                jq('.bot-showwechat .bottom-zxgw-city').text('装修顾问  ');//发标 结果态赋值
                if(city === '深圳'){
                    //jq('.tdc-box').hide();
                }else if(city === '东莞'){
                    //jq('.tdc-box').addClass('wechat-img-dg');
                    //jq('.tdc-box').hide();
                    jq('.bot-showwechat .bottom-kfname').text('土巴兔-蓉蓉');//发标 结果态赋值
                    jq('.bot-wechat-result .result-contain-dg').show();
                }else{
                    jq('.zxbj_zxys .result-contain-more-code').find('img').attr('src',self.config.city_Obj[city]);
                    jq('.zxbj_zxys .bot-wechat-result .result-contain-more-code').show();
                }
            }else{                       
                jq('.con_bj_res').removeClass('bot-showwechat');
                //jq('.tdc-box').removeClass('wechat-img');
                //jq('.tdc-box').show();
            }
        },
        //滚动距离规则  scroll
        scrollActual:function(){
            var self = this;            
            //根据页面标识限制是否能自动上滑
            if (self.config.voluntarily_slide) {
                return;
            };                        
            //出现了弹框就不自动上滑
            if (typeof(CommonTenderPop) == "object") {
                if (CommonTenderPop.showFlag) {
                    return;
                };  
            };
            //未发标在 第四个页面触发了自动上滑 30天内不自动上滑
            if (getCookie('page-four-noTrigger') == 'true') {
                return;
            };
            //手动触发上滑呼出30天之内都不能自动触发上滑呼出
            if (getCookie('manual-click-noTrigger') == 'true') {
                return;
            };    
            //触发了上滑就不能再触发自动上滑或下滑
            if (self.config.up_slide) {
                return;
            };        
            //已经成功发标 (已登记用户)
            if (getCookie('fabiao_flag') == 'true') {//登记的用户在cookie存在的时间段内不能自动触发上浮
                return;
            }else{//没有发标 (未登记用户)
                //滚动条件触发就全部展示浮框            
                self.config.now_scr =jq(window).scrollTop();
                if ((self.config.now_scr+jq(window).height()-self.config.slide_height_current) > 0 && (self.config.page_num == '' || self.config.page_num == '4')){//满足触发条件
                    self.bottomClick();
                    //标记为触发了一次自动上滑
                    self.config.up_slide = true;
                    //标识为完整展示过
                    self.config.new_slideFlag = true;
                    setCookie('visitPage','true',30*24*60*60*1000);//未登记用户自动触发标识
                    setCookie('page-num','0',30*24*60*60*1000);//未登记用户 访问页面数量记录
                    if (self.config.page_num == '4') {//未登记 第四个页面触发自动触发 30之后都不在自动触发
                        setCookie('page-four-noTrigger','true',30*24*60*60*1000);//记录未登记 第四个页面触发自动触发cookie
                    };              
                }
            }
        },
        //触发上下滑就不触发弹窗
        interflowPop:function(){
            var self = this;
            if (typeof(CommonTenderPop) == "object") {
                jq(document).ready(function(){
                   CommonTenderPop.destory(); 
               });                
            };        
            //触发上滑调用  数据接口        
            if (!self.config.num_flag || jq('.bottom_slide_box .zxys_num_man').text() == '') {
                setTimeout(function(){
                    self.getApplySum();
                    self.config.num_flag = true;
                },1000);   
            };        
        },
        //获得预约人数
        getApplySum:function(){
            jq.ajax({
                type:'get',
                dataType:'jsonp',
                url:'//secure.to8to.com/zb/sumTender.php',
                data:'act=xiaoguotu',
                cache:true,
                jsonpCallback: "jsonpCallback",//服务端用于接收callback调用的function名的参数
                success:function(msg){
                    jq('.zxys_num_man').html(msg.num);
                }
            })
        },
        //不断上下滑动
        shake:function(){
            var self = this;
            if (jq('.bottom_slide_up').css('top') == '-60px' || jq('.bottom_slide_down').css('top') == '-46px') {
                jq('.bottom_slide_up').stop().animate({top:'-42px'},500,function(){
                    self.shake();    
                });
            }
            if (jq('.bottom_slide_up').css('top') == '-42px') {
                jq('.bottom_slide_up').stop().animate({top:'-60px'},500,function(){
                    self.shake();    
                });
            }
        },
        //发标
        bottom_fb:function(){
            var self = this;
            var bH = jq(document).height(),
                outWrapDiff = bH - jq('#gloWrap').height(),
                browerObj = checkBrowser(),
                ie6 = false,
                bindFlag = false,
                wechatError = false,
                qrcodeData = {},
                qrcodeTimer = 0;
            var zxbj_index = {
                init: function() {

                    //初始化客服弹窗
                    popCustSrvWin && popCustSrvWin.init();

                    initEvent();
                }
            };
            var golbalYYID,
                countDesign = 0,
                countCompany = 0,
                designInfo = [],
                companyInfo = [],        
                repeatFlag = false,  //重复入库标志
                repeatGetMobileYz = true;
            agineRuku = 0;
            workTime = '15分钟';
            var wegitFlag = false;
            if (jq('#windbox').val() == 'boxhref') {
                wegitFlag = true;
            }
            var username = getCookie('to8to_username');
            if (username) {
                jq('.zxbj_read_box').hide();
            }
            jq('.blo_bd').css('display','none');
            //查看报价明细按钮
            jq('.res_btn_box').on('click','a.res_btn',function(){ 
                if (jq('.res_btn').hasClass('active')) {
                    jq('.blo_bd').css('display','block');
                    jq(document).scrollTop(1050);
                    (typeof clickStream !== 'undefined') && clickStream.getCvParams('1_4_19_424');
                };
            })
            jq('.ele_b').on('click','i',function(){
                jq(this).parent().find('i').removeClass('ele_bt_on');
                jq(this).parent().find('input').attr('value','');
                jq(this).addClass('ele_bt_on');
                jq('#zxtype').attr('value',jq(this).text());
            })
            var squareRemind = null;
            //根据面积显示户型 
            jq('#zxys_square').on('keyup', function(){
               
                selectDoorModle(jq(this).val(), this);
                if(typeof bottomFloat.render_floatbj.hotad_res != 'object'){
                    bottomFloat.render_floatbj.hotad_res = null;
                    jq.ajax({
                        url : "http://www.to8to.com/api/httpgethot.php?hotid=791&jsonp=ok",
                        type : "GET",
                        dataType : "jsonp",
                        jsonpCallback: "jsonpCallback",
                        success : function(res){
                            // 返回的热点
                            bottomFloat.render_floatbj.hotad_res = res;
                        }
                    });
                };
            })
            jq('#zxys_square').on('keyup', function(){
                if (squareRemind) {
                    clearTimeout(squareRemind);
                };
                var square = Number(jq(this).val());
              
                if (square + '' == 'NaN' || jq(this).val() == '' || square >= 30) {
                    jq('.zxbj_zxys .text_area').hide().siblings('.text_wrap').css('paddingBottom','10px');
                    return
                };
                squareRemind = setTimeout(function(){
                    if (square >= 5 && square< 30) {
                       jq('.zxbj_zxys .text_area').show().siblings('.text_wrap').css('paddingBottom','18px');
                    };
                },300)
            })
            //表单效果
            jq('.bottom_slide_box .text_wrap > input').val("");
            jq('.bottom_slide_box .text_wrap > .text_lbl').click(function () {
                jq(this).parent().find('input').focus().trigger('click');
            });
            jq('.bottom_slide_box .text_wrap > input').on('keydown', function () {
                jq(this).parent().find('.text_lbl').hide();
            });
            jq('.text_wrap > input').blur(function () {
                if (jq(this).val() == '') jq(this).parent().find('.text_lbl').show();
            });
            jq('div.con_bj_cal').on('click', '#zxys_calc_btn', function(){
                //获取当前ptag
                var ptag = jq('#zxys_myptag').val();
                //百度统计函数
                try {
                    _hmt && _hmt.push(['_trackEvent', 'zb', 'submit', ptag]);
                } catch (e) {

                }
                if (validData()) {                                
                    if (!username && !wegitFlag) {
                        if (jq('#zxys_myPtag').val() == "1_4_7_1") {
                            jq('#zxys_myPtag').val('1_4_2_3');
                            clickStream.getCvParams('1_4_2_3');
                        } else {
                        };                    
                        getTotalDetailInfo('detail');
                    } else {
                        jq('#zxys_myPtag').val('1_4_7_1');
                        getTotalDetailInfo('detail');
                    }
                    jq('#endprice').css('display','block');
                    detailedDisplay();           
                }
            });
            jq('div.con_bj_cal').on('click', '#zxbosl_hotad_calc',function(){
                jq('.zxbosl-wechat-hotad').hide();
                jq('#new_zxys_info').show();
            });

            //数据校验
            function validData(){
                var chkArr = [{
                    id: '#zxys_Shen',
                    className: 'form_error',
                    labl: 'em',
                    lablClass: 'ico_error',
                    info: [{
                        reg: [0],
                        tip: '请选择所在地'
                    }]
                },{
                    id: '#zxys_City',
                    parentTip: '.con_bj_cal ',
                    className: 'form_error',
                    labl: 'em',
                    lablClass: 'ico_error',
                    info: [{
                        reg: [0],
                        tip: '请选择所在地'
                    }]
                },{
                    id: '#zxys_square',
                    className: 'form_error',
                    labl: 'em',
                    lablClass: 'ico_error',
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
                var phoneRule = {
                    id: '#zxys_phonenumber',
                    className: 'form_error',
                    labl: 'em',
                    lablClass: 'ico_error',
                    info: [{
                        reg: [0],
                        tip: '请输入手机号码'
                    },{
                        reg: [/^1{1}[3456789]{1}\d{9}$/],
                        tip: '请输入正确的手机号码'
                    }]
                };

                if (jq('#zxys_phoneInput').length > 0) {
                    chkArr.push(phoneRule);
                };            
                return simplifyCheck2(chkArr);            
            }
            //获取所用数据
            function getTotalDetailInfo(type) {
                clearInterval(self.config.randomFun);//清除随机函数
                if (repeatFlag) {
                    return;
                }
                if (wegitFlag)
                    type = 'wegitFlag';
                repeatFlag = true;
                var mj = jq('.area_text').val(),
                    zflag = wegitFlag ? 1 : 0;

                    var data = formToJSON(jq('#new_zxys_info'));
                    data.type = type;
                    data.nowstep = 1;
                    if(self.config.phone_History_Arr.join(':').indexOf(data.phone)!= -1){
                        data.phone = '';
                    }
                    //需要重新定义一个modeltype
                    data.modeltype = 9;
                    data.method = 'baojiaTb';
                    data.ptag = self.config.bottom_ptag;
                    bottomFloat.render_floatbj.render_result = data.onFirstStepEnd = function(resdata) {
                        var city = jq('#zxys_City').val();
                        bottomFloat.render_floatbj[city] = resdata;
                        bottomFloat.config.check_info.city = city || ' ';
                        bottomFloat.config.check_info.demo = resdata.demo;
                        if(!bottomFloat.config.check_info.tmpYid){
                            bottomFloat.config.check_info.tmpYid = resdata.tmpYid;
                        };
                        if(jq('#zxys_phonenumber').val()){
                            bottomFloat.config.check_info.phone = jq('#zxys_phonenumber').val();
                        }
                        // 深圳城市结果态
                        if (self.config.city_Obj[city]) {
                            jq('.con_bj_res').addClass('bot-wechat-result');
                            jq('#zxys_phoneInput').remove();
                            jq('#zxys_btn_calc').html('重新计算');
                            jq('.zxys_explain').hide();
                            bottomFloat.addHotad(bottomFloat.render_floatbj.hotad_res,true,city);
                            //初始化二维码图片
                            jq('.zxbj_zxys .result-contain-more-code').find('img').attr('src','');
                            // if(city == '深圳'){ //默认展示深圳二维码深圳  故深圳不用处理
                            // }else 
                            if(city == '东莞'){
                                jq('.bot-wechat-result .result-contain-dg').show();
                            }else if(self.config.city_Obj[city] != 'placeholder'){
                                jq('.zxbj_zxys .result-contain-more-code').find('img').attr('src',self.config.city_Obj[city]).end().show();
                            }
                            repeatFlag = false;
                        }else{
                            //返回数据
                            jq('.con_bj_res').removeClass('bot-showwechat');
                            //jq('#zxys_calc_btn').addClass('calc-btn-end');
                            jq('#zxys_btn_calc').html('重新计算');
                            setCookie('fabiao_flag','true',30*24*60*60*1000);//发标后30天不自动触发
                            creatDetailBudget(resdata);
                            if(self.config.phone_History_Arr_.join(':').indexOf(data.phone) == -1){
                                self.config.phone_History_Arr_.push(data.phone);
                            }
                            bottomFloat.addHotad(bottomFloat.render_floatbj.hotad_res,false,city);
                            repeatFlag = false;
                        } 
                    };
                    var sendMsg = new tender();
                    sendMsg.requestURL = 'http://to8tozb.to8to.com/zb/zb.php';
                    sendMsg.init(data);
            }
            function formToJSON(formEle) {
                var data = formEle.serializeArray();
                var dataObj = {};
                for (var i in data) {
                    dataObj[data[i].name] = data[i].value;
                }
                return dataObj;
            }
            function detailedDisplay(){
                var zxType = jq('.ele_bt_on').text();//房屋类型
                if (zxType == '新房装修') {
                    jq('.info_hd>h3>em').text('');
                }else{
                    jq('.info_hd>h3>em').text('详细报价清单以新房为准（旧房报价=新房报价+面积*100）');
                }
            }
            //底部二维码
            function createQrcode(data) {
                jq.ajax({
                    url: 'http://www.to8to.com/api/weixin/run.php',
                    data: {action: 'createQrcode',cookie_id: 'zxbj_qrcode',data: data,type: 7},
                    type: "GET",
                    dataType: 'jsonp',
                    success: function(data) {
                        if (data.code == '0') {
                            jq('#zxbj_qrcode_wrap').attr('src', data.url);
                            jq('.bottom_fiexd_box').show();
                            qrcodeData = data;
                            //loopQrcode();
                        } else {
                            jq('.bottom_fiexd_box').hide();
                            wechatError = true;
                        }
                    },
                    error: function() {
                        wechatError = true;
                        jq('.bottom_fiexd_box').hide();
                    }
                });
            }
            function createFreeServiceId() {
                var obj = jq('#zxbj_zxbx').parents('.price_item').find('.item_hd');

                obj.attr('id', 'freeService');
            }
            //生成详细装修预算表
            //var priceInfo = [{name: '客厅工程1', price: 1111, tipSrc:'http://www.taobao.com', tip:'1整体橱柜装修看好这六点可远离陷阱...', detail: [{name: '墙面1', list: [{des: '铲除墙面腻子层', num: 100, unitprice: 1, total: 3, note: '铲除墙面腻子层（铲到红砖另计）'}, {des: '墙面手刷乳胶漆（多乐士金装五合一，一底两面）', num: 200, unitprice: 2, total: 4, note: '多乐士金装五合一（一底两面）,滚筒,砂皮,刷把等'}]}, {name: '墙面2', list: [{des: '铲除墙面腻子层2', num: 100, unitprice: 1, total: 3, note: '铲除墙面腻子层（铲到红砖另计）2'}]}]}, {name: '客厅工程2', price: 1111, tipSrc:'http://www.taobao.com', tip:'2整体橱柜装修看好这六点可远离陷阱...', detail: [{name: '墙面1', list: [{des: '铲除墙面腻子层', num: 100, unitprice: 1, total: 3, note: '铲除墙面腻子层（铲到红砖另计）'}, {des: '墙面手刷乳胶漆（多乐士金装五合一，一底两面）', num: 200, unitprice: 2, total: 4, note: '多乐士金装五合一（一底两面）,滚筒,砂皮,刷把等'}]}, {name: '墙面2', list: [{des: '铲除墙面腻子层2', num: 100, unitprice: 1, total: 3, note: '铲除墙面腻子层（铲到红砖另计）2'}]}]}, {name: '客厅工程3', price: 1111, tipSrc:'http://www.taobao.com', tip:'3整体橱柜装修看好这六点可远离陷阱...', detail: [{name: '墙面1', list: [{des: '铲除墙面腻子层', num: 100, unitprice: 1, total: 3, note: '铲除墙面腻子层（铲到红砖另计）'}, {des: '墙面手刷乳胶漆（多乐士金装五合一，一底两面）', num: 200, unitprice: 2, total: 4, note: '多乐士金装五合一（一底两面）,滚筒,砂皮,刷把等'}]}, {name: '墙面2', list: [{des: '铲除墙面腻子层2', num: 100, unitprice: 1, total: 3, note: '铲除墙面腻子层（铲到红砖另计）2'}]}]}];
            function creatDetailBudget(data) {
                var total_price = (data.to8to_totle_price/10000).toFixed(1); 
                jq('#zxys_phoneInput').remove();
                //jq('.zxbj_zxys .zxgs-list .zxgs-list-before li').css({'text-align':'inherit','width':'188px'});
                jq('.zxbj_zxys .zxys_result b').css({"width":"auto","margin":"0px 18px"});                
                jq('#bprice').html(total_price);
                jq('.zxys_result span').html('万元');        
                jq('.zxys-result-span').text('毛坯房半包装修预估价');
                jq('#materialPay em').html(data.to8to_cl_price);
                jq('#artificialPay em').html(data.to8to_rg_price);
                jq('#designPay').html('<em>0</em>元<del class="to8to_zj">'+ data.normal_sj_price +'元</del>');
                jq('#qualityPay').html('<em>0</em>元<del class="to8to_zj">'+ data.normal_zj_price +'元</del>');
                jq('.zxys_worn').hide();
                jq('.zxys_explain').show();
                //jq('.zxgs-list').find('.zxgs-list-before').css('margin-left','82px');
            }
            function priceInDOM(data,ele,homeMsg){
                var shi = 0;
                var ting = 0;
                var chu = 0;
                var wei = 0;
                var yang = 0;
                var qita = 0;
                for(var i = 0; i< homeMsg.length; i++) {
                    if(homeMsg[i].key=='shi_arr[]')
                    {
                        shi += data[i].price;
                    }

                    if(homeMsg[i].key=='ting_arr[]')
                    {
                        ting += data[i].price;
                    }
                    if(homeMsg[i].key=='chu_arr[]')
                    {
                        chu += data[i].price;
                    }
                    if(homeMsg[i].key=='wei_arr[]')
                    {
                        wei += data[i].price;
                    }
                    if(homeMsg[i].key=='yangtai_arr[]')
                    {
                        yang += data[i].price;
                    }

                }
                jq('#bedroomPay').html(shi + '<em>元</em>');
                jq('#liveroomPay').html(ting+ '<em>元</em>');
                jq('#kitchenPay').html(chu+ '<em>元</em>');
                jq('#washroomPay').html(wei+ '<em>元</em>');
                jq('#balconyPay').html(yang+ '<em>元</em>');
                ele.eq(5).find('strong').html(data[homeMsg.length].price + '<em>元</em>');
            }
            //js解析域名赋值给Ptag
            jq(function(){
               var urlObj =  parseQuery();
               if(typeof urlObj == 'object' && urlObj.ptag && urlObj.ptag != '') {
                  jq("#myPtag").val(urlObj.ptag);
               }
            })
            //解析域名
            function parseQuery(url) {
                var url = url || location.href;
                var query = url ? (url.split('?')[1] || '') : location.search;
                var queryList = query.substr(0).split('&');
                var parseRes = {};
                var flag = '#';
                if (queryList.length > 0) {
                    for (var i = 0; i < queryList.length; i++) {
                        var kv = queryList[i].split('=');
                        parseRes[kv[0]] = decodeURIComponent(kv[1]).split('#')[0];
                    }
                }
                return parseRes;
            }
            //根据面积显示户型 
            function selectDoorModle(square, squareEle){
                var square = Number(square);
                if (square + '' == 'NaN' || jq(squareEle).val() == '') {
                    return
                };
                if (square < 60) {
                    jq('#zxys_shi').val(1);
                    jq('#zxys_ting').val(1);
                    jq('#zxys_chu').val(1);
                    jq('#zxys_wei').val(1);
                    jq('#zxys_yangtai').val(1);
                } else if (square >= 60 && square < 90) {
                    jq('#zxys_shi').val(2);
                    jq('#zxys_ting').val(1);
                    jq('#zxys_chu').val(1);
                    jq('#zxys_wei').val(1);
                    jq('#zxys_yangtai').val(1);
                } else if ( square >= 90 && square < 150) {
                    jq('#zxys_shi').val(3);
                    jq('#zxys_ting').val(2);
                    jq('#zxys_chu').val(1);
                    jq('#zxys_wei').val(2);
                    jq('#zxys_yangtai').val(1);
                }
                else if (square >= 150) {
                    jq('#zxys_shi').val(4);
                    jq('#zxys_ting').val(2);
                    jq('#zxys_chu').val(1);
                    jq('#zxys_wei').val(2);
                    jq('#zxys_yangtai').val(2);
                }
            }
        },
        //banner自动展示与自动收起
        bottomClick:function(){
            var self = this;
                if(jq('.bottom_slide_down').hasClass('bottom_slide_up')) {
                    jq('.bottom_slide_box').stop().animate({bottom:'0'},500,function(){
                        jq('.bottom_slide_up').stop().removeAttr('style'); 
                        jq('.bottom_slide_down').removeClass('bottom_slide_up');
                        jq('.bottom_slide_down').css('top','-46px');
                        jq('.bottom_slide_wh_img').css('background','url(http://127.0.0.1:8020/%E5%9C%9F%E5%B7%B4%E5%85%94/img/public/new_bottom_wh_img.png) no-repeat');        
                        //标识为完整展示过
                        self.config.new_slideFlag = true; 
                        //触发上下滑就不触发弹窗--
                        self.interflowPop();                 
                    });
                    if (!self.config.initbg_flag) {
                        (typeof clickStream !== 'undefined') && clickStream.getCvParams(self.config.bottom_ptag); 
                        self.config.bg_flag = true;
                    };                  
                    (typeof clickStream !== 'undefined') && clickStream.getExposeParams('#zxys_myptag', self.config.bottom_ptag); 
                }else{                   
                    jq('.bottom_slide_box').stop().animate({bottom:'-370px'},500,function(){
                        jq('.bottom_slide_down').addClass('bottom_slide_up');
                        self.shake();
                    });
                    jq('.bottom_slide_wh_img').css('background','url(http://img.to8to.com/to8to_img/zxbj/new_bottom_wh_img.gif) no-repeat');
                    if (self.config.new_slideFlag) {
                        setCookie('new_slideFlag','true',1*60*1000);
                    };   
                }
        },
        //修改访问页面cookie的值
        cookieOperate:function(){   
            var self = this;      
            var page_num = getCookie('page-num');
            //未登记触发一次 并且之后没有登记
            if(getCookie('visitPage') == 'true' && getCookie('fabiao_flag') != 'true'){//未登记并触发过一下 30天内第四个页面可再自动触发
                if(page_num == '0'){
                    setCookie('page-num','1',30*24*60*60*1000);//记录未登记用户访问页面数
                    self.config.page_num = '1';
                }else if(page_num == '1'){
                    setCookie('page-num','2',30*24*60*60*1000);//记录未登记用户访问页面数
                    self.config.page_num = '2';
                }else if(page_num == '2'){
                    setCookie('page-num','3',30*24*60*60*1000);//记录未登记用户访问页面数
                    self.config.page_num = '3';
                }else if(page_num == '3'){
                    setCookie('page-num','4',30*24*60*60*1000);//记录未登记用户访问页面数
                    self.config.page_num = '4';
                }else if(page_num == '4'){
                    setCookie('page-num','0',30*24*60*60*1000);//记录未登记用户访问页面数
                }else{
                    return;
                }
            }            
        },
        // 初始化和渲染结果态的对象
        render_floatbj:{
            // 已报价的城市对象，需要存储该城市的数据
            city : 'type Object',
            // 判断该城市是否已经报价，返回布尔值,true 为已经报过价
            has_bj : function(city){
                return(typeof bottomFloat.render_floatbj[city] !== 'undefined'? !0: !1);
            },
            // 初始化此处的报价结果态，由于报价初始态各不一致，推荐自己根据渲染结果态写。
            init_result : function(){                
                // 样式初始化
                jq('.con_bj_res.col_l').removeClass('bot-wechat-result hotad-contain hotad-contain-wechat');
                jq('.zxgs-list-before').removeAttr('style').find('li').removeAttr('style');
                jq('.to8to_zj').remove();
                jq('.zxys_explain').hide();
                jq('.result-contain-more-code').hide();
				// 数据初始化
                
                jq('.zxys-result-span .zxys-result-span').text();
                /*jq('#bprice').text('?');
                jq('#materialPay em').text('?');
                jq('#artificialPay em').text('?');
                jq('#designPay em').text('?');
                jq('#qualityPay em').text('?');*/
            },
            // 根据数据渲染报价结果态，一般可直接调用请求数据的回调函数
            render_result : function(data){} // function(data){}
        },
        // 添加热点广告
        addHotad:function(res, wechat, city){
            if (res) {
                var area = parseFloat(jq('#zxys_square').val());
                jq('.con_bj_res.col_l').removeClass('hotad-contain');
                jq('.con_bj_res.col_l').removeClass('hotad-contain-wechat');
                if (wechat) {
                    res = res.data ? res.data[5] : '';
                    if (res && res.minArea <= area && area <= res.maxArea && res.img_src && res.img_src.search(/\.(?:(?:jpg)|(?:jpeg)|(?:gif)|(?:swf)|(?:png)|(?:bmp))(?:\?[=\w\d]*)?$/) >= 0 && (res.usedcityname ? res.usedcityname.indexOf(city) > -1 : !0)) {
                        jq('.zxbosl-wechat-hotad').show();
                        jq('#new_zxys_info').hide();
                        jq('.con_bj_res.col_l').addClass('hotad-contain');
                        jq('.con_bj_res.col_l').addClass('hotad-contain-wechat');
                        jq('.hotad-contain .result-hotad').width(356).height(60).css('margin-top','0');
                        jq('.hotad-contain .result-hotad img').attr('src', res.img_src);
                        jq('.hotad-contain .result-hotad a').attr('href', res.url).data('ptag', res.ptag);
                    }else{
                        bottomFloat.moreInfo(wechat);
                    }
                } else {
                    res = res.data ? res.data[3] : '';
                    if (res && res.minArea <= area && area <= res.maxArea && res.img_src && res.img_src.search(/\.(?:(?:jpg)|(?:jpeg)|(?:gif)|(?:swf)|(?:png)|(?:bmp))(?:\?[=\w\d]*)?$/) >= 0 && (res.usedcityname ? res.usedcityname.indexOf(city) > -1 : !0)) {
                        jq('.zxys-result-span').text('您家的装修预算约 :');
                        jq('.hotad-bjtext .attention.holiday-text').html('<b>*</b> 报价有疑问？稍后装修管家将致电为您解答');
                        jq('.hotad-bjtext .text-none').html('<b>*</b> 该报价为毛坯半包价，实际装修报价以量房实测为准').css('color','#999');
                        jq('.con_bj_res.col_l').addClass('hotad-contain');
                        jq('.bj_explain').hide();
                        jq('.zxgs-list-before').removeAttr('style').find('li').removeAttr('style');
                        jq('.hotad-contain .result-hotad').width(330).height(60).css('margin','20px 0 0 0');
                        jq('.hotad-contain .result-hotad img').attr('src', res.img_src);
                        jq('.hotad-contain .result-hotad a').attr('href', res.url).data('ptag', res.ptag);
                    }else{
                        bottomFloat.moreInfo(wechat);
                    }
                };
                jq('.hotad-contain .result-hotad a').on('click', function() {
                    var ptag = jq('.hotad-contain .result-hotad a').data('ptag');
                    if(getCookie(ptag) != ptag){
                        setCookie(ptag,ptag,1000*60*60*24);
                        (typeof clickStream !== 'undefined') && clickStream.getCvParams(ptag);
                    }
                });
            }else{
                bottomFloat.moreInfo(wechat);
            }
        },
        // 结果态增加提交信息,优先级比热点低。
        moreInfo: function(wechat) {
            jq('.zxbj_zxys').addClass('ups_check_info');
            if(wechat){
                jq('.ups_check_info .result-head p:eq(0)').text('报价短信已发送到您的手机');
                jq('.ups_check_info .result-head p:eq(1)').text('稍后装修管家将回电您，免费提供装修咨询服务');
                jq('.ups_check_info .bot-showwechat .result-contain-bt .right .clear').html('<em></em>扫码,加微信好友');
                jq('.ups_check_info .result-bottom').html('<span>24小时咨询</span>任何装修疑问，更有10000套精品装修案例');
            }else{
                jq('.ups_check_info .zxys-result-span').text('您家的装修预算约 :');
                jq('.ups_check_info .zxys_explain .holiday-text').html('<b>*</b> 报价有疑问？稍后装修管家将致电为您解答');
                jq('.ups_check_info .zxys_explain .text-none').html('<b>*</b> 该报价为毛坯半包价，实际装修报价以量房实测为准');
            }
            // 绑定右侧信息事件
            // 选择信息
            jq('.ups_check_info .check-house,.ups_check_info .check-time').on('click',function(){
                if(jq(this).hasClass('check-house')){
                    bottomFloat.config.check_info.housetype = jq(this).find('input[type=hidden]').val();
                }
                if(jq(this).hasClass('check-time')){
                    bottomFloat.config.check_info.zxtime = jq(this).find('input[type=hidden]').val();
                }
                jq(this).addClass('on').siblings().removeClass('on');
            });
            // 提交审核信息
            jq('.ups_check_info .check-upload').on('click',function(e){
                e.stopPropagation();
                if(bottomFloat.config.checkrepeat){
                    return;
                }
                // 验证信息
                if(bottomFloat.vericheck()){
                    bottomFloat.config.checkrepeat = true;
                    // 提交信息，置已提交，点击去重
                    bottomFloat.uploadcheckinfo();
                }
            });
            // 关闭页面上传数据 因发标后会更改onbeforeunload方法。
            setTimeout(function() {
                window.oldun = window.onbeforeunload ? window.onbeforeunload : null; // 保存原来的动作
                window.onbeforeunload = function() {
                    oldun ? oldun() : !1;
                    if (!bottomFloat.config.hasupload && (jq('.ups_check_info .check-house.on').length > 0 || jq('.ups_check_info .check-time.on').length > 0 || jq('.ups_check_info .plot-name').find('input').val().length > 0)) {
                        bottomFloat.uploadcheckinfo(true);
                    }
                }
            }, 3000);
        },
        // 验证审核信息
        vericheck: function() {
            clearTimeout(bottomFloat.config.checkverify);
            if (jq('.ups_check_info .house-type').find('.on').length == 0) {
                jq('.ups_check_info .complate-form').find('p').text('请选择您家的房屋现状').end().fadeIn(300);
                bottomFloat.config.checkverify = setTimeout(function() {
                    jq('.ups_check_info .complate-form').fadeOut(300);
                }, 700);
                return !1;
            };
            if (jq('.ups_check_info .decorate-time').find('.on').length == 0) {
                jq('.ups_check_info .complate-form').find('p').text('请选择您家的装修时间').end().fadeIn(300);
                bottomFloat.config.checkverify = setTimeout(function() {
                    jq('.ups_check_info .complate-form').fadeOut(300);
                }, 700);
                return !1;
            };
            if (jq('.ups_check_info .plot-name input').val().length == 0) {
                jq('.ups_check_info .complate-form').find('p').text('请填写小区名称').end().fadeIn(300);
                bottomFloat.config.checkverify = setTimeout(function() {
                    jq('.ups_check_info .complate-form').fadeOut(300);
                }, 700);
                return !1;
            };
            return !0;
        },
        // 提交审核信息
        uploadcheckinfo: function(autopop){
            var uuid = bottomFloat.createGuid(),
                enc = jq.md5(uuid + bottomFloat.config.check_info.phone),
                data_p = "tyid=" + bottomFloat.config.check_info.tmpYid + "&uuid=" + uuid + "&enc=" + enc + "&modeltype=1&invite=2&nowstep=2";
            if(bottomFloat.config.check_info.housetype){
                data_p = data_p + '&demo=' + bottomFloat.config.check_info.housetype + '。' + bottomFloat.config.check_info.demo;
                if(!(typeof getCookie('checkinfo_ptag') == 'string' && getCookie('checkinfo_ptag').search('3') > -1)){
                    (typeof clickStream !== 'undefined') && clickStream.getCvParams('1_1_20_2060');
                    setCookie('checkinfo_ptag',getCookie('checkinfo_ptag') + '3',1*24*60*60);
                }
            }else{
                data_p = data_p + '&demo=' + bottomFloat.config.check_info.demo;
            };
            if(bottomFloat.config.check_info.zxtime){
                data_p = data_p + '&zxtime=' + bottomFloat.config.check_info.zxtime;
                if(!(typeof getCookie('checkinfo_ptag') == 'string' && getCookie('checkinfo_ptag').search('4') > -1)){
                    (typeof clickStream !== 'undefined') && clickStream.getCvParams('1_1_20_2061');
                    setCookie('checkinfo_ptag',getCookie('checkinfo_ptag') + '4',1*24*60*60);
                }
            };
            if(jq('.plot-name input').val().length > 0){
                data_p = data_p + '&address=' + jq('.plot-name input').val();
                if(!(typeof getCookie('checkinfo_ptag') == 'string' && getCookie('checkinfo_ptag').search('5') > -1)){
                    (typeof clickStream !== 'undefined') && clickStream.getCvParams('1_1_20_2062');
                    setCookie('checkinfo_ptag',getCookie('checkinfo_ptag') + '5',1*24*60*60);
                }
            };
            //发送用户数据
            console.log(data_p);
//          jq.ajax({
//              type: "GET",
//              url: '//to8tozb.to8to.com/zb/zb-index-get.php',
//              dataType : "jsonp",//数据类型为jsonp
//              jsonpCallback: "jsonpCallback",//服务端用于接收callback调用的function名的参数
//              data: data_p,
//              success: function (ret) {
//                  bottomFloat.config.hasupload = true;// 已提交过
//                  if(!autopop){
//                      var ups_pop = '<div class="check_global_succ">' +
//                                          '<div class="check_grey_layer"></div>' +
//                                          '<div class="check_pop_tip">' +
//                                              '<div class="check_pop_img"></div>' +
//                                              '<p class="check_pop_text">提交成功</p>' +
//                                              '<p class="check_pop_recall">稍后装修管家将以<span>0755</span>开头的号码</p>' +
//                                              '<p class="check_pop_recall">与您联系,请注意接听。</p>' +
//                                              '<a href="javascript:void(0);" class="close_check_pop">知道了</a>' +
//                                          '</div>' +
//                                      '</div>';
//                      jq('body').append(ups_pop);
//                      jq('.check_pop_tip').css('left',(jq(window).width()-jq('.check_pop_tip').width())/2);
//                      if((typeof isGroundCity != 'undefined') && isGroundCity(-1,bottomFloat.config.check_info.city)){
//                          // 落地城市 改文案
//                          jq('.check_pop_tip').find('.check_pop_recall').eq(0).html('稍后装修管家将致电您，为您提').end().eq(1).text('供免费装修咨询服务。');
//                      }
//                      jq('.check_global_succ').show();
//                      // 关闭弹窗
//                      jq('body').on('click','.check_grey_layer,.close_check_pop',function(e){
//                          e.stopPropagation();
//                          jq('.check_global_succ').remove();
//                      });
//                      jq('.ups_check_info .check-upload').text('提交成功').css('background-color','#d8d8d8').off('click');
//                  }
//              }
//          });
        },
        createGuid: function(){
            for (var a = "", c = 1; 32 >= c; c++) {
                var b = Math.floor(16 * Math.random()).toString(16),
                    a = a + b;
                if (8 == c || 12 == c || 16 == c || 20 == c) a += ""
            }
            return this.guid = a += Math.ceil(1E6 * Math.random())
        },
        //每0.2s 随机一个0-20万的数字 
        randomNumber:function(){
            var self = this;
            self.config.randomFun = setInterval(function(){
                jq('#bprice').text(Math.ceil(Math.random()*190000)+10000);
                jq('#materialPay em').text( Math.floor(10000 + Math.random() * (99999-10000+1)));
                jq('#artificialPay em').text( Math.floor(10000 + Math.random() * (99999-10000+1)));
                jq('#designPay em').text(Math.floor(1000 + Math.random() * (10000-1000+1)));
                jq('#qualityPay em').text(Math.floor(500 + Math.random() * (5000-500+1)));
            },200);          
        }
    };
})(window,jQuery)