(function() {
	/* 鏀圭増闇€娉ㄦ剰
	 * 鏁堟灉鍥惧脊绐�
	 * 鏁堟灉鍥� 杩欐牱瑁呬慨澶氬皯閽卞脊绐楋紝
	 * showImgStr 涓幏鍙栧綋鍓嶇偣鍑诲浘鐗囩殑缂╃暐鍥撅紝骞舵斁鍦ㄥ脊绐楀彸渚�
	 * 鏈夊吋瀹瑰埌鐑偣骞垮憡涔嬪悗鐨勬姤浠锋牱寮� 璇︽儏绫伙細 hotad-contain
	 */

	var gpmXGT = new GlobalProvincesModule(),
		gpmMFSJ = new GlobalProvincesModule(),
		gpmMat = new GlobalProvincesModule(),
		gpmCom = new GlobalProvincesModule();
	//璁剧疆璁℃椂鍣�
	var timer = null;
	//缁熻鐐瑰嚮ptag鏁扮粍
	var clickPtagArr = [];

	window.CommonTenderPop = {
		options: {
			exposurePtag: '', //鏇濆厜Ptag
			pricePtag: '', //鎶ヤ环Ptag
			designPtag: '', //璁捐ptag
			companyPtag: '', //瑁呬慨鍏徃ptag
			materialPtag: '', //鏉愭枡ptag
			priceTitle: '免费获取装修报价', //鎶ヤ环鏍囬
			designTitle: '我家也要设计成这样', //璁捐鏍囬
			companyTitle: '闄勮繎鐑棬瑁呬慨鍏徃鏌ヨ', //鍏徃鏍囬
			materialTitle: '瑁呬慨鏉愭枡璁＄畻鍣�', //鏉愭枡鏍囬
			priceResultTit: '您家的装修预算为：', //鎶ヤ环缁撴灉鏍囬
			designResultTit: '申请成功！', //璁捐缁撴灉鏍囬
			companyResultTit: '鎴戝闄勮繎鐨勭儹闂ㄨ淇叕鍙�', //鍏徃鏍囬
			materialResultTit: '瑁呬慨鏉愭枡娓呭崟鏄庣粏', //鏉愭枡鏍囬
			automatic: true, //鏄惁鑷姩寮圭獥
			autoTime: 5000, // 榛樿5s璋冪敤寮圭獥
			showIndex: 0, //榛樿鏄剧ずtab閫夐」
			cookieName: 'tender_pop_flag', //榛樿cookie鍚嶇О
			showXGTImg: false, //榛樿涓嶆樉绀烘晥鏋滃浘璇︽儏椤电殑鏍峰紡
			imgSrcPage: '', //鏁堟灉鍥惧綋鍓嶉〉鐨剆rc
			indexFlag: false,
			fromPage: '',
			imgNewBJ: false, // 鏄惁鏄晥鏋滃浘鏂扮増鎶ヤ环
			showResult: false, // 鏁堟灉鍥鹃椤靛垪琛ㄩ〉鍙繘鍏ユ姤浠风粨鏋滄€�
			onceTimes: '', // 鏁堟灉鍥惧搧瀹ｇ偣鍑讳竴娆＄殑ptag
			twiceTimes: '', // 鏁堟灉鍥惧搧瀹ｇ偣鍑讳笁娆＄殑ptag
			index_pop: false, //棣栭〉寮规鏍囪瘑
			companyIndex: false, //鏄惁鏄淇叕鍙搁椤靛脊妗�
			fabiao_falg: false, //鍙戞爣鎴愬姛鏍囪瘑
			repeat_calc: false, // 寰俊灏忓彿鏃剁殑閲嶆柊璁＄畻
			check_repeat: false, // 閲嶅提交瀹℃牳淇℃伅
			check_verify: 0, // 楠岃瘉瀹℃牳淇℃伅鐨勫脊绐�
			check_upload: false, // 鏄惁宸叉彁浜ゅ鏍镐俊鎭�
			randomObj: '', //瀹氭椂鍣� 鎺у埗闅忔満鍑芥暟
			check_info: {}, // 瀛樻斁提交鐨勫鏍镐俊鎭�
			wechat_city: {
				'娣卞湷': 'placeholder',
				'涓滆帪': 'placeholder',
				'骞垮窞': 'http://static.to8to.com/img/to8to_img/wx_xh/wx_add_code/wx_code_gz.png',
				'鍚堣偉': 'http://static.to8to.com/img/to8to_img/wx_xh/wx_add_code/wx_code_hf.png',
				'鍗椾含': 'http://static.to8to.com/img/to8to_img/wx_xh/wx_add_code/wx_code_nj.png',
				'鏃犻敗': 'http://static.to8to.com/img/to8to_img/wx_xh/wx_add_code/wx_code_wx.png',
				'姝︽眽': 'http://static.to8to.com/img/to8to_img/wx_xh/wx_add_code/wx_code_wh.png',
				'闀挎矙': 'http://static.to8to.com/img/to8to_img/wx_xh/wx_add_code/wx_code_cs.png',
				'鑻忓窞': 'http://static.to8to.com/img/to8to_img/wx_xh/wx_add_code/wx_code_sz.jpg'
			}
		},
		phoneFlag: '', //鍥涗釜妯″潡鍙风爜閲嶅涓嶅叆搴撴爣璇�
		popFlag: false, //鐐瑰嚮鍒拌〃鍗曞厓绱犳椂涓嶅脊绐�
		showFlag: false, //鑷姩寮圭獥鏄惁鍑虹幇杩�
		init: function(option) {
			if(!window.tender) { //杩欎釜鍦版柟涓€瀹氳鏈塼ender.js
				jq.getScript('http://static.to8to.com/gb_js/tender.js?v=1464789987');
			}
			var self = this;
			self.options = jq.extend(self.options, option);
			var tender_pop_flag = self.getCookie(self.options.cookieName);
			jq(document).on('click blur focus keyup keydown', 'input,select,button', function() {
				self.popFlag = true;
			})
			if(self.options.automatic) {
				//鏈偣鍑绘椂鑷姩寮圭獥
				if(!tender_pop_flag) {
					if(!self.popFlag) {
						if(timer) {
							//鍏煎鏉′欢閲嶇疆鏃堕棿褰掗浂鑷姩寮圭獥
							clearTimeout(timer);
							timer = setTimeout(function() {
								if(self.options.indexFlag) {
									self.indexstyleBudGet(option);
								} else {
									self.styleBudGet(option);
								}

								self.setCookie(self.options.cookieName, 'true', 7);
								self.showFlag = true;
							}, self.options.autoTime)
						} else {
							timer = setTimeout(function() {
								if(self.options.indexFlag) {
									self.indexstyleBudGet(option);
								} else {
									self.styleBudGet(option);
								}
								self.setCookie(self.options.cookieName, 'true', 7);
								self.showFlag = true;
							}, self.options.autoTime)
						};
					};
				};
			} else {
				//閫氳繃浜嬩欢瑙﹀彂寮圭獥
				// 鍦ㄦ澶勬帶鍒惰蛋鏁堟灉鍥炬柊鐗堟姤浠枫€�
				if(self.options.imgNewBJ && self.options.showXGTImg) {
					// 鏁堟灉鍥炬柊鐗堟姤浠峰叆鍙�
					self.styleNewBJBudGet(option);
				} else {
					self.styleBudGet(option);
				}
			};
			// 鍒濆鍖栧井淇″紩瀵�
			self.choose_wechat();
		},
		//寮圭獥閲嶇疆
		destory: function() {
			clearTimeout(timer);
			// timer = null;
			if(jq('window_box').length >= 1) {
				window_box_close();
			};
		},
		//棣栭〉寮圭獥璋冪敤鍏ュ彛
		indexstyleBudGet: function(option) {

			var self = this;
			//褰撳墠寮圭獥璋冪敤锛岄樆姝㈣嚜鍔ㄥ脊绐�
			self.popFlag = true;
			var str = '<div class="clear tender-pop">' +
				'<ul class="tender-pop-tabs">' +
				'<li class="btn-mfbj-list active"><span></span></li>' +
				'<li class="btn-mfsj-list"><span></span></li>' +
				// '<li class="tabs-company">鎵捐淇叕鍙�</li>' +
				// '<li class="tabs-material">瑁呬慨鏉愭枡璁＄畻鍣�</li>' +
				'</ul>' +
				'<div class="tender-pop-main">' +
				'<div class="tender-pop-con clear add-weixin-html">' +
				'<div class="tender-pop-mfbj tender-pop-left" id="tender-video-form">' +
				'<h6 class="tender-pop-title tilte-wid"><em>' + self.options.priceTitle + '</em><span class="title-bg-col"></span></h6>' +
				'<p class="tender-pop-applypeople">' +
				'今天已有' +
				'<span class="num-man">' +
				'</span>' +
				'位业主获取了装修预算' +
				'</p>' +
				'<form id="tenderPrice">' +
				'<ul class="tender-form-list">' +
				'<li class="tender-form-item">' +
				'<span class="worn-font">*</span>' +
				'鎵€鍦ㄥ煄甯�' +
				'<select class="tender-form-select province" id="priceShen" name="shen"><option value="省/市">省/市</option></select>' +
				'<select class="tender-form-select province city" id="priceCity" name="city"><option value="市/地区">市/地区</option></select>' +
				'<div style="display:none"><select class="tender-form-select" id="priceTown" name="town"><option value="鍘�/灏忓尯">鍘�/灏忓尯</option></select></div>' +
				'</li>' +
				'<li class="tender-form-item height_area">' +
				'<span class="worn-font">*</span>' +
				'鎴垮眿闈㈢Н' +
				'<input type="text" class="tender-form-input" id="priceSquare" name="square"/>' +
				'<span class="tender-form-font">杈撳叆鎮ㄧ殑鎴垮眿闈㈢Н</span>' +
				'<em class="tender-form-sup">m虏</em>' +
				'</li>' +
				'<li class="tender-form-item tender-huxing">' +
				'<span class="worn-font">*</span>' +
				'鎴垮眿鎴峰瀷' +
				'<div class="clear">' +
				'<select name="shi" id="shi" class="select select_s select_s_s col_l">' +
				'<option value="1">1瀹�</option>' +
				'<option value="2">2瀹�</option>' +
				'<option value="3">3瀹�</option>' +
				'<option value="4">4瀹�</option>' +
				'<option value="5">5瀹�</option>' +
				'<option value="6">6瀹�</option>' +
				'</select>' +
				'<select name="ting" id="ting" class="select select_s select_s_s col_l select-margin">' +
				'<option value="1">1鍘�</option>' +
				'<option value="2">2鍘�</option>' +
				'<option value="3">3鍘�</option>' +
				'<option value="4">4鍘�</option>' +
				'<option value="5">5鍘�</option>' +
				'<option value="6">6鍘�</option>' +
				'</select>' +
				'<select name="chu" id="chu" class="select select_s select_s_s col_l select-margin">' +
				'<option value="1">1鍘�</option>' +
				'<option value="2">2鍘�</option>' +
				'<option value="3">3鍘�</option>' +
				'</select>' +
				'<select name="wei" id="wei" class="select select_s col_l">' +
				'<option value="1">1鍗�</option>' +
				'<option value="2">2鍗�</option>' +
				'<option value="3">3鍗�</option>' +
				'<option value="4">4鍗�</option>' +
				'<option value="5">5鍗�</option>' +
				'<option value="6">6鍗�</option>' +
				'</select>' +
				'<select name="yangtai" id="yangtai" class="select select_s col_l select-long-margin">' +
				'<option value="1">1闃冲彴</option>' +
				'<option value="2">2闃冲彴</option>' +
				'<option value="3">3闃冲彴</option>' +
				'<option value="4">4闃冲彴</option>' +
				'<option value="5">5闃冲彴</option>' +
				'<option value="6">6闃冲彴</option>' +
				'</select>' +
				'</div>' +
				'</li>' +
				'<li class="tender-form-item tender-phone">' +
				'<label for="" class="pop-label" ><em class="pop-label-start">*</em>手机号码</label>' +
				'<div class="pop-element">' +
				'<div class="pop-text-wrap">' +
				'<input type="text" class="tender-form-input tender-form-phone" id="pricePhone" name="phone"/>' +
				'<span class="tender-form-font price-font">鎴戜滑灏嗗彂閫侀绠楁槑缁嗗埌鎮ㄧ殑鎵嬫満</span>' +
				'</div>' +
				'<div class="pop-suspend-wechat clear">' +
				'<p class="pop-sus-head">寰俊鍔犲ソ鍙� 鑾峰彇璇︾粏鎶ヤ环</p>' +
				'<div class="pop-sus-headimg">' +
				'<div class="pop-headdetail"></div>' +
				'<div class="pop-worddetail"><p>瑁呬慨椤鹃棶-棣ㄩΘ</p></div>' +
				'<p>4骞磋涓氱粡楠岋紝24h鍙挩璇�</p>' +
				'<em class="pre-pop-fruit-show-arrow"></em>' +
				'</div>' +
				'<div class="pop-sus-quocode">' +
				'<div></div>' +
				'<p>10绉掗棯鐢甸€氳繃濂藉弸</p>' +
				'</div>' +
				'</div>' +
				'</div>' +
				'</li>' +
				'<li class="tender-form-item tender-form-footer">' +
				// '<div class="tender-form-check">' +
				//     '<input type="checkbox" class="tender-input-check price-check" checked="checked">' +
				//     '<span>我已阅读并接受<a href="http://www.to8to.com/help/index.php?id=76" target="_blank">《装修常见问题条款》</a></span>' +
				// '</div>'  +
				'<p class="tender-form-explain">*为了您的权益，您的隐私将被严格保密</p>' +
				'</li>' +
				'</ul>' +
				'</form>' +
				'<div class="pop-wechat-hotad">' +
				'<div class="wechat-img"></div>' +
				'<p class="wechat-message">鎶ヤ环鐭俊宸插彂閫佸埌鎮ㄧ殑鎵嬫満</p>' +
				'<p class="wechat-text">鍥犳潗鏂欏搧鐗屽強宸ョ▼閲忎笉鍚岋紝鍏蜂綋鎶ヤ环浠ラ噺鎴垮疄娴嬩负鍑�</p>' +
				'<p class="wechat-recall">绋嶅€欒淇瀹跺皢鍥炵數鎮紝鍏嶈垂鎻愪緵瑁呬慨鍜ㄨ鏈嶅姟</p>' +
				'</div>' +
				'<em class="ico-line-top"></em>' +
				'<em class="ico-line-bottom"></em>';
			if(self.isIE()) {
				str += '<div class="submit-box">' +
					'<a class="tender-pop-buttom tender-calc-btn tender-expose mfbjcalc-btn-ie" href="javascript:void(0);" id="priceBtn" data-ptag="' + self.options.pricePtag + '">' +
					'<img src="http://img.to8to.com/to8to_img/zxbj/common_tender/go_calc.gif" alt="" style="width:100%">' +
					'</a>' +
					'</div>';
			} else {
				str += '<div class="submit-box">' +
					'<a class="tender-pop-buttom tender-calc-btn tender-expose" href="javascript:void(0);" id="priceBtn" data-ptag="' + self.options.pricePtag + '">' +
					'<span class="tender-recalc">寮€濮嬭绠�</span>' +
					'</a>' +
					'<span class="old-circle-animate"></span>' +
					'</div>';
			}

			str += '</div>' +
				'<div class="tender-pop-mfbj tender-pop-left tender-video" id="tender-video-view">' +
				'<h6 class="tender-video-title">鏆栨殩鐨勫锛屽湡宸村厰濡備綍甯綘瀹炵幇锛�</h6>' +
				'<div class="tender-video-wrapper">' +
				'<div id="container"></div>' +
				'<p class="note"></p>' +
				'<img class="tender-video-wrapper-hand" id="tender-video-wrapper-hand" src="http://img.to8to.com/to8to_img/zxbj/mousehand.png"/>' +
				/*'<span class="tender-video-wrapper-btn" id="tender-video-wrapper-btn"></span>'+*/
				'<script type="text/javascript" src="http://static.to8to.com/gb_js/jwplayer.js"></script>' +
				'</div>' +
				'<div class="tender-video-tip">' +
				'<p>宸茬疮璁℃湇鍔�<span class="tender-video-num">1600涓�</span>涓氫富</p>' +
				'<p>鏈嶅姟宸茶鐩�<span class="tender-video-num">250涓�</span>鍩庡競</p>' +
				'<p><span class="tender-video-num">98涓�</span>鍏ラ┗璁捐甯堛€�<span class="tender-video-num">7涓�</span>鍏ラ┗瑁呬慨鍏徃</p>' +
				'</div>' +
				'<a href="javascript:void(0);" id="priceBtnVideo" class="tender-pop-buttom tender-calc-btn tender-video-view again" data-ptag="' + self.options.pricePtag + '">' +
				'<span class="tender-recalc">' +
				'閲嶆柊璁＄畻' +
				'</span>' +
				'</a>' +
				'</div>' +
				'</div>' +
				'<div class="tender-pop-con clear">' +
				'<div class="tender-pop-mfsj tender-pop-left">' +
				'<div class="tender-init-mfsj">' +
				'<h6 class="tender-pop-title"><em>' + self.options.designTitle + '</em><span class="title-bg-col"></span></h6>' +
				'<form id="tenderDesign">' +
				'<ul class="tender-form-list">' +
				'<li class="tender-form-item">' +
				'<span class="worn-font">*</span>' +
				'鎵€鍦ㄥ煄甯�' +
				'<select class="tender-form-select province" id="designShen" name="shen"><option value="省/市">省/市</option></select>' +
				'<select class="tender-form-select province city" id="designCity" name="city"><option value="市/地区">市/地区</option></select>' +
				'<div style="display:none"><select class="tender-form-select" id="designTown" name="town"><option value="鍘�/灏忓尯">鍘�/灏忓尯</option></select></div>' +
				'</li>' +
				'<li class="tender-form-item">' +
				'<span class="worn-font">*</span>' +
				'您的称呼' +
				'<input type="text" class="tender-form-input" id="designName" name="chenghu"/>' +
				'<span class="tender-form-font">请输入您的称呼</span>' +
				'</li>' +
				'<li class="tender-form-item">' +
				'<span class="worn-font">*</span>' +
				'手机号码' +
				'<input type="text" class="tender-form-input" id="designPhone" name="phone"/>' +
				'<span class="tender-form-font">填写手机号，抢免费设计名额</span>' +
				'</li>' +
				'<li class="tender-form-item tender-form-footer">' +
				'<div class="tender-form-check">' +
				'<input type="checkbox" class="tender-input-check design-check" checked="checked">' +
				'<span>我已阅读并接受<a href="http://www.to8to.com/help/index.php?id=76" target="_blank">《装修常见问题条款》</a></span>' +
				'</div>' +
				'<a href="javascript:void(0);" data-ptag="' + self.options.designPtag + '" id="designBtn" class="tender-mfsj-btn tender-expose">' +
				'<em>立即申请</em>' +
				'</a>' +
				'<p class="tender-form-explain">*为了您的权益，您的隐私将被严格保密</p>' +
				'</li>' +
				'</ul>' +
				'</form>' +
				'</div>' +
				'<div class="tender-result-mfsj dn">' +
				'<h6 class="tender-pop-title">' + self.options.designResultTit + '</h6>' +
				'<ul class="tender-form-list">' +
				'<li class="tender-form-item mr-bot-12">' +
				'<p class="tender-result-text">您同时还获得<span>1项增值服务</span></p>' +
				'</li>' +
				'<li class="tender-form-item mar-bot-6">' +
				'<em class="mflf"></em>' +
				'</li>' +
				'<li class="tender-form-item">' +
				'<p class="tender-result-explain holiday-text">*稍后装修管家将致电您，为您提供免费装修咨询服务。</p>' +
				'</li>' +
				'</ul>' +
				'</div>' +
				'<em class="mfsj-left-lien"></em>' +
				'</div>' +
				'<div class="tender-pop-mfsj tender-pop-right">' +
				'<div class="tender-mfsjinit-img">' +
				'<em></em>' +
				'</div>' +
				'</div>' +
				'</div>' +
				'</div>' +
				'</div>';
			var mfbjStr = '<div class="tender-pop-mfbj tender-pop-right">' +
				'<h6 class="tender-pop-title littlefont"><em class="price-result-title">' + self.options.priceResultTit + '</em><span class="tender-title-count"  id="priceTotal">?</span><em class="tender-title-text">元</em></h6>' +
				'<div class="tender-price-result-box">' +
				'<ul class="tender-price-result">' +
				'<li class="hotad-cl">' +
				'<span>材料费：</span><strong id="priceMterials"><em>锛�</em>元</strong>' +
				'</li>' +
				'<li class="hotad-rg">' +
				'<span>人工费：</span><strong id="priceArtificial"><em>锛�</em>元</strong>' +
				'</li>' +
				'<li class="hotad-sj">' +
				'<span>设计费：</span><strong id="priceDesign"><em>锛�</em>元</strong>' +
				'</li>' +
				'<li class="hotad-zj">' +
				'<span>质检费：</span><strong id="priceQuality"><em>锛�</em>元</strong>' +
				'</li>' +
				'</ul>' +
				'<div class="pop-hotad-result">' +
				'<p>鍥犳潗鏂欏搧鐗屽強宸ョ▼閲忎笉鍚岋紝鍏蜂綋鎶ヤ环浠ラ噺鎴垮疄娴嬩负鍑嗐€�</p>' +
				'<p class="call-phone">绋嶅悗瑁呬慨绠″灏嗚嚧鐢垫偍锛屼负鎮ㄦ彁渚涘厤璐硅淇挩璇㈡湇鍔�</p>' +
				'</div>' +
				'</div>' +
				'<div class="tender-price-ad">' +
				'<p></p>' +
				'</div>' +
				'<div class="pop-result-hotad">' +
				'<a href="javascript:void(0);"><img src=""></a>' +
				'<p>骞垮憡</p>' +
				'</div>' +
				'<em class="check-right-line"></em>' +
				'</div>';
			var showImgStr = '<div class="tender-pop-mfbj tender-pop-right">' +
				'<h6 class="tender-pop-title littlefont"><em class="price-result-title">' + self.options.priceResultTit + '</em><span class="tender-title-count"  id="priceTotal">?</span><em class="tender-title-text">万元</em></h6>' +
				'<div class="tender-pop-showImg">' +
				'<img alt="" src="' + self.options.imgSrcPage + '">' +
				'</div>' +
				'<div style="margin-top:17px">' +
				'<ul class="tender-price-newResult">' +
				'<li>' +
				'<span>材料费：</span><strong id="priceMterials"><em>锛�</em>元</strong>' +
				'</li>' +
				'<li>' +
				'<span>人工费：</span><strong id="priceArtificial"><em>锛�</em>元</strong>' +
				'</li>' +
				'<li>' +
				'<span>设计费：</span><strong id="priceDesign"><em>锛�</em>元</strong>' +
				'</li>' +
				'<li>' +
				'<span>质检费：</span><strong id="priceQuality"><em>锛�</em>元</strong>' +
				'</li>' +
				'</ul>' +
				'</div>' +
				'<div class="tender-price-ad tender-price-imgad">' +
				'<p></p>' +
				'</div>' +
				'<div class="pop-result-hotad">' +
				'<a href="javascript:void(0);"><img src=""></a>' +
				'<p>骞垮憡</p>' +
				'</div>' +
				'<em class="check-right-line"></em>' +
				'</div>';

			//寮圭獥鍒濆鍖�           
			jq('.window_box').windowBox({
				width: 1048, //寮规瀹藉害
				title: "", //鏍囬
				wbcStr: str, //鍙紪杈戝唴瀹�
				cancleBtn: false, //鏄惁鏄剧ず鍙栨秷鎸夐挳
				confirmBtn: false, // 鏄惁鏄剧ず纭鎸夐挳
				closeFn: 'CommonTenderPop.window_box_close'
			});
			self.options.fabiao_falg = false; //鍒濆鍖栨爣璇�
			CommonTenderPop.options.fabiao_falg = false;
			//璋冪敤缁撴灉鎬佹柟娉�
			jq('#priceCity,#priceShen').on('change', function() {
				self.fruit_dispose('');
			});
			self.options.index_pop = true; //鏍囪瘑涓烘櫘閫氱殑棣栭〉5绉掑脊妗� 鍙戞爣鎴愬姛
			// 鍒ゆ柇鍘熼〉闈㈡垨鑰呮晥鏋滃浘椤甸潰
			if(self.options.showXGTImg) {
				// 鎻掑叆鏁堟灉鍥剧殑鑺傜偣
				jq('.tender-pop-mfbj').parent().append(showImgStr);
				jq('#priceMterials').parent().css('margin-left', '58px');
				jq('#priceDesign').parent().css('margin-left', '58px');
				self.randomNumber(200); //闅忔満鐢熸垚鎶ヤ环
			} else {
				// 鎻掑叆鍘熸姤浠疯妭鐐�
				jq('.tender-pop-mfbj').parent().append(mfbjStr);
				self.randomNumber(200); //闅忔満鐢熸垚鎶ヤ环
			}
			//鍒濆鍖栭〉闈㈡牴鎹甶p鎺ュ彛寰楀埌鐨勫煄甯� 灞曠ず瀵瑰簲寰俊灏忓彿
			city_from_ip(function(cityFromIp) {
				var city = cityFromIp; //鑾峰緱寰俊灏忓彿
				self.fruit_dispose(city); //鍒濆鍖栧搴旀搷浣�
			});
			//鏍峰紡璋冩暣
			jq('.window_box .window_box_title').css({
				'position': 'absolute',
				'top': '65px'
			});
			jq('.window_box_close').css({
				'height': '40px',
				'width': '40px',
				'background': 'url("http://img.to8to.com/to8to_img/zxbj/common_tender/tender_list_bg.png") no-repeat',
				'background-position': '-114px 0',
				'top': '-9px',
				'right': '39px'
			});
			jq('.window_box').css({
				'overflow': 'visible',
				'background': 'none'
			});
			jq('.window_box .window_box_container').css({
				'background': 'none'
			});
			jq('.window_box').css({
				'border-radius': '0',
				'-o-border-radius': '0',
				'-webkit-border-radius': '0',
				'-moz-border-radius': '0'
			});
			//鏇濆厜 ptag
			if(self.options.exposurePtag) {
				(typeof clickStream !== 'undefined') && clickStream.getCvParams(self.options.exposurePtag);
			};
			//寮圭獥tab閫夐」鍒濆鍖�
			jq('.tender-pop-con').eq(self.options.showIndex).show();
			showTabIndex(self.options.showIndex);
			// 浣垮浘鐗囦笂涓嬪眳涓�
			if(self.options.showXGTImg) {
				var preImgone = new Image();
				preImgone.src = self.options.imgSrcPage;
				preImgone.onload = function() {
					jq('.tender-pop-showImg').find('img').css('margin-top', (jq('.tender-pop-showImg').height() - jq('.tender-pop-showImg').find('img').height()) / 2 + 'px');
					preImgone = null;
				}
			}
			//4涓ā鍧楀垏鎹�
			jq('.tender-pop-tabs').on('click', 'li', function(event) {
				var e = window.event || event,
					index = jq(this).index();
				showTabIndex(index);
			});

			function inArray(arr, find) {
				var arrLen = arr.length || 0;
				var _flag = false;
				if(arrLen <= 0) {
					return false
				};

				for(var i = 0; i < arrLen; i++) {
					if(find == arr[i]) {
						_flag = true;
						break;
					};
				}

				return _flag;
			}

			function showTabIndex(index) {
				var ptag;
				jq('.tender-pop-tabs li').eq(index).addClass('active').siblings().removeClass('active');
				if(index == 1) {
					// jq('.tender-pop-tabs').css({'background-position': '-53px 0'});
					ptag = jq('#designBtn').attr('data-ptag');
					(typeof clickStream !== 'undefined') && clickStream.getExposeParams('#designBtn', ptag);
				} else if(index == 2) {
					// jq('.tender-pop-tabs').css({'background-position': '-105px 0'});
					// ptag = jq('#companyBtn').attr('data-ptag');
				} else if(index == 3) {
					// jq('.tender-pop-tabs').css({'background-position': 'right 0'});
					// ptag = jq('#materialBtn').attr('data-ptag');
				} else {
					// jq('.tender-pop-tabs').css({'background-position': '0 0'}); 
					ptag = jq('#priceBtn').attr('data-ptag');
					(typeof clickStream !== 'undefined') && clickStream.getExposeParams('#priceBtn', ptag);
				}

				//鐐瑰嚮ptag鍘婚噸
				if(!inArray(clickPtagArr, ptag)) {
					(typeof clickStream !== 'undefined') && clickStream.getCvParams(ptag);
					try {
						_hmt && _hmt.push(['_trackEvent', 'zb', 'submit', buttom.attr('data-ptag')]);
					} catch(e) {}
					clickPtagArr.push(ptag);
				};
				jq('.tender-pop-con').eq(index).show().siblings().hide();
			}

			//琛ㄥ崟鍗犱綅绗﹀垵濮嬪寲
			var inputArr = jq('.tender-form-input');
			for(var i = inputArr.length - 1; i >= 0; i--) {
				var inputDom = jq(inputArr[i]);
				self.showPlaceholder(jq(inputArr[i]));
			};
			//鍥涗釜妯″潡鍒濆鍖�
			self.indexdetailPrice();
			self.detailDesign();
			// self.detailCompany();
			// self.detailMaterial();
			// 鎶ヤ环閫夋嫨鍒濆鍖�
			self.choose_wechat();
		},
		//寮圭獥璋冪敤鍏ュ彛
		styleBudGet: function(option) {

			var self = this;

			//褰撳墠寮圭獥璋冪敤锛岄樆姝㈣嚜鍔ㄥ脊绐�
			self.popFlag = true;
			var str = '<div class="clear tender-pop">' +
				'<ul class="tender-pop-tabs">' +
				'<li class="btn-mfbj-list active"><span></span></li>' +
				'<li class="btn-mfsj-list"><span></span></li>' +
				// '<li class="tabs-company">鎵捐淇叕鍙�</li>' +
				// '<li class="tabs-material">瑁呬慨鏉愭枡璁＄畻鍣�</li>' +
				'</ul>' +
				'<div class="tender-pop-main">' +
				'<div class="tender-pop-con clear add-weixin-html">' +
				'<div class="tender-pop-mfbj tender-pop-left">' +
				'<h6 class="tender-pop-title tilte-wid"><em>' + self.options.priceTitle + '</em><span class="title-bg-col"></span></h6>' +
				'<p class="tender-pop-applypeople">' +
				'今天已有' +
				' <span class="num-man">' +
				'</span> ' +
				' 位业主获取了装修预算' +
				'</p>' +
				'<form id="tenderPrice">' +
				'<ul class="tender-form-list">' +
				'<li class="tender-form-item">' +
				'<span class="worn-font">*</span>' +
				'所在城市' +
				'<select class="tender-form-select province" id="priceShen" name="shen"><option value="省/市">省/市</option></select>' +
				'<select class="tender-form-select province city" id="priceCity" name="city"><option value="市/地区">市/地区</option></select>' +
				'<div style="display:none"><select class="tender-form-select" id="priceTown" name="town"><option value="县/小区">县/小区</option></select></div>' +
				'</li>' +
				'<li class="tender-form-item height_area">' +
				'<span class="worn-font">*</span>' +
				'房屋面积' +
				'<input type="text" class="tender-form-input" id="priceSquare" name="square"/>' +
				'<span class="tender-form-font">输入您的房屋面积</span>' +
				'<em class="tender-form-sup">m²</em>' +
				'</li>' +
				'<li class="tender-form-item tender-huxing">' +
				'<span class="worn-font">*</span>' +
				'房屋户型' +
				'<div class="clear">' +
				'<select name="shi" id="shi" class="select select_s select_s_s col_l">' +
				'<option value="1">1室</option>' +
				'<option value="2">2室</option>' +
				'<option value="3">3室</option>' +
				'<option value="4">4室</option>' +
				'<option value="5">5室</option>' +
				'<option value="6">6室</option>' +
				'</select>' +
				'<select name="ting" id="ting" class="select select_s select_s_s col_l select-margin">' +
				'<option value="1">1厅</option>' +
				'<option value="2">2厅</option>' +
				'<option value="3">3厅</option>' +
				'<option value="4">4厅</option>' +
				'<option value="5">5厅</option>' +
				'<option value="6">6厅</option>' +
				'</select>' +
				'<select name="chu" id="chu" class="select select_s select_s_s col_l select-margin">' +
				'<option value="1">1厨</option>' +
				'<option value="2">2厨</option>' +
				'<option value="3">3厨</option>' +
				'</select>' +
				'<select name="wei" id="wei" class="select select_s col_l">' +
				'<option value="1">1卫</option>' +
				'<option value="2">2卫</option>' +
				'<option value="3">3卫</option>' +
				'<option value="4">4卫</option>' +
				'<option value="5">5卫</option>' +
				'<option value="6">6卫</option>' +
				'</select>' +
				'<select name="yangtai" id="yangtai" class="select select_s col_l select-long-margin">' +
				'<option value="1">1阳台</option>' +
				'<option value="2">2阳台</option>' +
				'<option value="3">3阳台</option>' +
				'<option value="4">4阳台</option>' +
				'<option value="5">5阳台</option>' +
				'<option value="6">6阳台</option>' +
				'</select>' +
				'</div>' +
				'</li>' +
				'<li class="tender-form-item tender-phone">' +
				'<label for="" class="pop-label" ><em class="pop-label-start">*</em>手机号码</label>' +
				'<div class="pop-element">' +
				'<div class="pop-text-wrap">' +
				'<input type="text" class="tender-form-input tender-form-phone" id="pricePhone" name="phone"/>' +
				'<span class="tender-form-font price-font">我们将发送预算明细到您的手机</span>' +
				'</div>' +
				'<div class="pop-suspend-wechat clear">' +
				'<p class="pop-sus-head">微信加好友 获取详细报价</p>' +
				'<div class="pop-sus-headimg">' +
				'<div class="pop-headdetail"></div>' +
				'<div class="pop-worddetail"><p>装修顾问-馨馨</p></div>' +
				'<p>4年行业经验，24h可咨询</p>' +
				'<em class="pre-pop-fruit-show-arrow"></em>' +
				'</div>' +
				'<div class="pop-sus-quocode">' +
				'<div></div>' +
				'<p>10秒闪电通过好友</p>' +
				'</div>' +
				'</div>' +
				'</div>' +
				'</li>' +
				'<li class="tender-form-item tender-form-footer">' +
				// '<div class="tender-form-check">' +
				//     '<input type="checkbox" class="tender-input-check price-check" checked="checked">' +
				//     '<span>我已阅读并接受<a href="http://www.to8to.com/help/index.php?id=76" target="_blank">《装修常见问题条款》</a></span>' +
				// '</div>'  +
				'<p class="tender-form-explain">*为了您的权益，您的隐私将被严格保密</p>' +
				'</li>' +
				'</ul>' +
				'</form>' +
				'<div class="pop-wechat-hotad">' +
				'<div class="wechat-img"></div>' +
				'<p class="wechat-message">报价短信已发送到您的手机</p>' +
				'<p class="wechat-text">因材料品牌及工程量不同，具体报价以量房实测为准</p>' +
				'<p class="wechat-recall">稍候装修管家将回电您，免费提供装修咨询服务</p>' +
				'</div>' +
				'<em class="ico-line-top"></em>' +
				'<em class="ico-line-bottom"></em>';
			if(self.isIE()) {
				str += '<div class="submit-box">' +
					'<a class="tender-pop-buttom tender-calc-btn tender-expose mfbjcalc-btn-ie" href="javascript:void(0);" id="priceBtn" data-ptag="' + self.options.pricePtag + '">' +
					'<img src="http://img.to8to.com/to8to_img/zxbj/common_tender/go_calc.gif" alt="" style="width:100%">' +
					'</a>' +
					'</div>';
			} else {
				str += '<div class="submit-box">' +
					'<a class="tender-pop-buttom tender-calc-btn tender-expose" href="javascript:void(0);" id="priceBtn" data-ptag="' + self.options.pricePtag + '">' +
					'<span class="tender-recalc">开始计算</span>' +
					'</a>' +
					'<span class="old-circle-animate"></span>' +
					'</div>';
			}
			str += '</div>' +
				'</div>' +
				'<div class="tender-pop-con clear">' +
				'<div class="tender-pop-mfsj tender-pop-left">' +
				'<div class="tender-init-mfsj">' +
				'<h6 class="tender-pop-title"><em>' + self.options.designTitle + '</em><span class="title-bg-col"></span></h6>' +
				'<form id="tenderDesign">' +
				'<ul class="tender-form-list">' +
				'<li class="tender-form-item">' +
				'<span class="worn-font">*</span>' +
				'所在城市' +
				'<select class="tender-form-select province" id="designShen" name="shen"><option value="省/市">省/市</option></select>' +
				'<select class="tender-form-select province city" id="designCity" name="city"><option value="市/地区">市/地区</option></select>' +
				'<div style="display:none"><select class="tender-form-select" id="designTown" name="town"><option value="鍘�/灏忓尯">鍘�/灏忓尯</option></select></div>' +
				'</li>' +
				'<li class="tender-form-item">' +
				'<span class="worn-font">*</span>' +
				'您的称呼' +
				'<input type="text" class="tender-form-input" id="designName" name="chenghu"/>' +
				'<span class="tender-form-font">请输入您的称呼</span>' +
				'</li>' +
				'<li class="tender-form-item">' +
				'<span class="worn-font">*</span>' +
				'手机号码' +
				'<input type="text" class="tender-form-input" id="designPhone" name="phone"/>' +
				'<span class="tender-form-font">填写手机号，抢免费设计名额</span>' +
				'</li>' +
				'<li class="tender-form-item tender-form-footer">' +
				'<div class="tender-form-check">' +
				'<input type="checkbox" class="tender-input-check design-check" checked="checked">' +
				'<span>我已阅读并接受<a href="http://www.to8to.com/help/index.php?id=76" target="_blank">《装修常见问题条款》</a></span>' +
				'</div>' +
				'<a href="javascript:void(0);" data-ptag="' + self.options.designPtag + '" id="designBtn" class="tender-mfsj-btn tender-expose">' +
				'<em>立即申请</em>' +
				'</a>' +
				'<p class="tender-form-explain">*为了您的权益，您的隐私将被严格保密</p>' +
				'</li>' +
				'</ul>' +
				'</form>' +
				'</div>' +
				'<div class="tender-result-mfsj dn">' +
				'<h6 class="tender-pop-title">' + self.options.designResultTit + '</h6>' +
				'<ul class="tender-form-list">' +
				'<li class="tender-form-item mr-bot-12">' +
				'<p class="tender-result-text">您同时还获得<span>1项增值服务</span></p>' +
				'</li>' +
				'<li class="tender-form-item mar-bot-6">' +
				'<em class="mflf"></em>' +
				'</li>' +
				'<li class="tender-form-item">' +
				'<p class="tender-result-explain holiday-text">* 稍后装修管家将致电您，为您提供免费装修咨询服务。</p>' +
				'</li>' +
				'</ul>' +
				'</div>' +
				'<em class="mfsj-left-lien"></em>' +
				'</div>' +
				'<div class="tender-pop-mfsj tender-pop-right">' +
				'<div class="tender-mfsjinit-img">' +
				'<em></em>' +
				'</div>' +
				'</div>' +
				'</div>' +
				'</div>' +
				'</div>';
			var mfbjStr = '<div class="tender-pop-mfbj tender-pop-right">' +
				'<h6 class="tender-pop-title littlefont"><em class="price-result-title">' + self.options.priceResultTit + '</em><span class="tender-title-count"  id="priceTotal">?</span><em class="tender-title-text">元</em></h6>' +
				'<div class="tender-price-result-box">' +
				'<ul class="tender-price-result">' +
				'<li class="hotad-cl">' +
				'<span>材料费：</span><strong id="priceMterials"><em>锛�</em>元</strong>' +
				'</li>' +
				'<li class="hotad-rg">' +
				'<span>人工费：</span><strong id="priceArtificial"><em>锛�</em>元</strong>' +
				'</li>' +
				'<li class="hotad-sj">' +
				'<span>设计费：</span><strong id="priceDesign"><em>锛�</em>元</strong>' +
				'</li>' +
				'<li class="hotad-zj">' +
				'<span>质检费：</span><strong id="priceQuality"><em>锛�</em>元</strong>' +
				'</li>' +
				'</ul>' +
				'<div class="pop-hotad-result">' +
				'<p>鍥犳潗鏂欏搧鐗屽強宸ョ▼閲忎笉鍚岋紝鍏蜂綋鎶ヤ环浠ラ噺鎴垮疄娴嬩负鍑嗐€�</p>' +
				'<p class="call-phone">绋嶅悗瑁呬慨绠″灏嗚嚧鐢垫偍锛屼负鎮ㄦ彁渚涘厤璐硅淇挩璇㈡湇鍔�</p>' +
				'</div>' +
				'</div>' +
				'<div class="tender-price-ad">' +
				'<p></p>' +
				'</div>' +
				'<div class="pop-result-hotad">' +
				'<a href="javascript:void(0);"><img src=""></a>' +
				'<p>骞垮憡</p>' +
				'</div>' +
				'<em class="check-right-line"></em>' +
				'</div>';
			var showImgStr = '<div class="tender-pop-mfbj tender-pop-right">' +
				'<h6 class="tender-pop-title littlefont"><em class="price-result-title">' + self.options.priceResultTit + '</em><span class="tender-title-count"  id="priceTotal">?</span><em class="tender-title-text">万元</em></h6>' +
				'<div class="tender-pop-showImg">' +
				'<img alt="" src="' + self.options.imgSrcPage + '">' +
				'</div>' +
				'<div style="margin-top:17px">' +
				'<ul class="tender-price-newResult">' +
				'<li>' +
				'<span>材料费：</span><strong id="priceMterials"><em>锛�</em>元</strong>' +
				'</li>' +
				'<li>' +
				'<span>人工费：</span><strong id="priceArtificial"><em>锛�</em>元</strong>' +
				'</li>' +
				'<li>' +
				'<span>设计费：</span><strong id="priceDesign"><em>锛�</em>元</strong>' +
				'</li>' +
				'<li>' +
				'<span>质检费：</span><strong id="priceQuality"><em>锛�</em>元</strong>' +
				'</li>' +
				'</ul>' +
				'</div>' +
				'<div class="tender-price-ad tender-price-imgad">' +
				'<p></p>' +
				'</div>' +
				'<div class="pop-result-hotad">' +
				'<a href="javascript:void(0);"><img src=""></a>' +
				'<p>骞垮憡</p>' +
				'</div>' +
				'<em class="check-right-line"></em>' +
				'</div>';
				
			jq('.window_box').windowBox({
				width: 1048, //寮规瀹藉害
				title: "", //鏍囬
				wbcStr: str, //鍙紪杈戝唴瀹�
				cancleBtn: false, //鏄惁鏄剧ず鍙栨秷鎸夐挳
				confirmBtn: false, // 鏄惁鏄剧ず纭鎸夐挳
				closeFn: 'CommonTenderPop.window_box_close'
			});
			self.options.fabiao_falg = false; //鍒濆鍖栨爣璇�
			CommonTenderPop.options.fabiao_falg = false;
			//璋冪敤缁撴灉鎬佹柟娉�
			jq('#priceCity,#priceShen').on('change', function() {
				self.fruit_dispose('');
			});
			// 鍒ゆ柇鍘熼〉闈㈡垨鑰呮晥鏋滃浘椤甸潰
			if(self.options.showXGTImg) {
				// 鎻掑叆鏁堟灉鍥剧殑鑺傜偣
				jq('.tender-pop-mfbj').parent().append(showImgStr);
				jq('#priceMterials').parent().css('margin-left', '58px');
				jq('#priceDesign').parent().css('margin-left', '58px');
				self.randomNumber(200); //闅忔満鐢熸垚鎶ヤ环
			} else {
				// 鎻掑叆鍘熸姤浠疯妭鐐�
				jq('.tender-pop-mfbj').parent().append(mfbjStr);
				self.randomNumber(200); //闅忔満鐢熸垚鎶ヤ环
			}
			//鏍峰紡璋冩暣
			jq('.window_box .window_box_title').css({
				'position': 'absolute',
				'top': '65px'
			});
			jq('.window_box_close').css({
				'height': '40px',
				'width': '40px',
				'background': 'url("http://img.to8to.com/to8to_img/zxbj/common_tender/tender_list_bg.png") no-repeat',
				'background-position': '-114px 0',
				'top': '-9px',
				'right': '39px'
			});
			jq('.window_box').css({
				'overflow': 'visible',
				'background': 'none'
			});
			jq('.window_box .window_box_container').css({
				'background': 'none'
			});
			jq('.window_box').css({
				'border-radius': '0',
				'-o-border-radius': '0',
				'-webkit-border-radius': '0',
				'-moz-border-radius': '0'
			});
			//鏇濆厜 ptag
			if(self.options.exposurePtag) {
				(typeof clickStream !== 'undefined') && clickStream.getCvParams(self.options.exposurePtag);
			};
			//寮圭獥tab閫夐」鍒濆鍖�
			jq('.tender-pop-con').eq(self.options.showIndex).show();
			showTabIndex(self.options.showIndex);
			// 浣垮浘鐗囦笂涓嬪眳涓�
			var preImgtwo = new Image();
			preImgtwo.src = self.options.imgSrcPage;
			preImgtwo.onload = function() {
				if(self.options.showXGTImg) {
					jq('.tender-pop-showImg').find('img').css('margin-top', (jq('.tender-pop-showImg').height() - jq('.tender-pop-showImg').find('img').height()) / 2 + 'px');
				};
				preImgtwo = null;
			};
			//4涓ā鍧楀垏鎹�
			jq('.tender-pop-tabs').on('click', 'li', function(event) {
				var e = window.event || event,
					index = jq(this).index();
				showTabIndex(index);
			});

			function inArray(arr, find) {
				var arrLen = arr.length || 0;
				var _flag = false;
				if(arrLen <= 0) {
					return false
				};

				for(var i = 0; i < arrLen; i++) {
					if(find == arr[i]) {
						_flag = true;
						break;
					};
				}

				return _flag;
			}

			function showTabIndex(index) {
				var ptag;
				jq('.tender-pop-tabs li').eq(index).addClass('active').siblings().removeClass('active');
				if(index == 1) {
					// jq('.tender-pop-tabs').css({'background-position': '-53px 0'});
					ptag = jq('#designBtn').attr('data-ptag');
					(typeof clickStream !== 'undefined') && clickStream.getExposeParams('#designBtn', ptag);

				} else if(index == 2) {
					// jq('.tender-pop-tabs').css({'background-position': '-105px 0'});
					// ptag = jq('#companyBtn').attr('data-ptag');
				} else if(index == 3) {
					// jq('.tender-pop-tabs').css({'background-position': 'right 0'});
					// ptag = jq('#materialBtn').attr('data-ptag');
				} else {
					ptag = jq('#priceBtn').attr('data-ptag');
					(typeof clickStream !== 'undefined') && clickStream.getExposeParams('#priceBtn', ptag);
				}

				//鐐瑰嚮ptag鍘婚噸
				if(!inArray(clickPtagArr, ptag)) {
					(typeof clickStream !== 'undefined') && clickStream.getCvParams(ptag);
					try {
						_hmt && _hmt.push(['_trackEvent', 'zb', 'submit', buttom.attr('data-ptag')]);
					} catch(e) {}
					clickPtagArr.push(ptag);
				};
				jq('.tender-pop-con').eq(index).show().siblings().hide();
			}

			//琛ㄥ崟鍗犱綅绗﹀垵濮嬪寲
			var inputArr = jq('.tender-form-input');
			for(var i = inputArr.length - 1; i >= 0; i--) {
				var inputDom = jq(inputArr[i]);
				self.showPlaceholder(jq(inputArr[i]));
			};
			//鍥涗釜妯″潡鍒濆鍖�
			self.detailPrice();
			self.detailDesign();
			// self.detailCompany();
			// self.detailMaterial();

		},
		// 鏂扮増鏁堟灉鍥炬姤浠峰脊绐楀垵濮嬪寲 by fidermo.hu 2016/11/5
		styleNewBJBudGet: function() {
			var self = this;
			//褰撳墠寮圭獥璋冪敤锛岄樆姝㈣嚜鍔ㄥ脊绐�
			self.popFlag = true;
			var str = '<div class="clear tender-pop">' +
				'<div class="tender-pop-main">' +
				'<div class="tender-pop-con clear add-weixin-html">' +
				'<div class="tender-pop-mfbj tender-pop-left">' +
				'<img alt="" src="' + self.options.imgSrcPage + '">' +
				'</div>' +
				'<div class="tender-pop-mfbj tender-pop-right">' +
				'<h6 class="tender-pop-title littlefont">' +
				'<em class="price-result-title">瑁呬慨鎴愯繖鏍疯鑺卞灏戦挶?</em>' +
				'<span class="tender-title-count" id="priceTotal"></span>' +
				'<em class="tender-title-text"></em>' +
				'</h6>' +
				'<div style="margin-top:18px">' +
				'<ul class="tender-price-newResult">' +
				'<li>' +
				'<span>材料费：</span><strong id="priceMterials"><em>锛�</em>元</strong>' +
				'</li>' +
				'<li>' +
				'<span>人工费：</span><strong id="priceArtificial"><em>锛�</em>元</strong>' +
				'</li>' +
				'<li>' +
				'<span>设计费：</span><strong id="priceDesign"><em>锛�</em>元</strong>' +
				'</li>' +
				'<li>' +
				'<span>质检费：</span><strong id="priceQuality"><em>锛�</em>元</strong>' +
				'</li>' +
				'</ul>' +
				'</div>' +
				'<form id="tenderPrice">' +
				'<ul class="tender-form-list">' +
				'<li class="tender-form-item newbj-form-item">' +
				'<select class="newbj-select-province newbj-province-margin" id="priceShen" name="shen"><option value="省/市">省/市</option></select>' +
				'<select class="newbj-select-province" id="priceCity" name="city"><option value="市/地区">市/地区</option></select>' +
				'<div style="display:none"><select class="tender-form-select" id="priceTown" name="town"><option value="鍘�/灏忓尯">鍘�/灏忓尯</option></select></div>' +
				'</li>' +
				'<li class="tender-form-item newbj-form-item">' +
				'<input type="text" class="tender-form-input newbj-square" id="priceSquare" name="square"/>' +
				'<span class="tender-form-font newbj-tips-font">杈撳叆鎮ㄧ殑鎴垮眿闈㈢Н</span>' +
				'<em class="tender-form-sup newbj-form-sup">m虏</em>' +
				'</li>' +
				'<li class="tender-form-item newbj-tender-huxing newbj-form-item">' +
				'<select name="shi" id="shi" class="newbj-right-margin">' +
				'<option value="1">1瀹�</option>' +
				'<option value="2">2瀹�</option>' +
				'<option value="3">3瀹�</option>' +
				'<option value="4">4瀹�</option>' +
				'<option value="5">5瀹�</option>' +
				'<option value="6">6瀹�</option>' +
				'</select>' +
				'<select name="ting" id="ting" class="newbj-right-margin">' +
				'<option value="1">1鍘�</option>' +
				'<option value="2">2鍘�</option>' +
				'<option value="3">3鍘�</option>' +
				'<option value="4">4鍘�</option>' +
				'<option value="5">5鍘�</option>' +
				'<option value="6">6鍘�</option>' +
				'</select>' +
				'<select name="chu" id="chu" class="newbj-right-margin">' +
				'<option value="1">1鍘�</option>' +
				'<option value="2">2鍘�</option>' +
				'<option value="3">3鍘�</option>' +
				'</select>' +
				'<select name="wei" id="wei" class="newbj-right-margin">' +
				'<option value="1">1鍗�</option>' +
				'<option value="2">2鍗�</option>' +
				'<option value="3">3鍗�</option>' +
				'<option value="4">4鍗�</option>' +
				'<option value="5">5鍗�</option>' +
				'<option value="6">6鍗�</option>' +
				'</select>' +
				'<select name="yangtai" id="yangtai">' +
				'<option value="1">1闃冲彴</option>' +
				'<option value="2">2闃冲彴</option>' +
				'<option value="3">3闃冲彴</option>' +
				'<option value="4">4闃冲彴</option>' +
				'<option value="5">5闃冲彴</option>' +
				'<option value="6">6闃冲彴</option>' +
				'</select>' +
				'</li>' +
				'<li class="tender-form-item newbj-form-item">' +
				'<input type="text" class="tender-form-input newbj-phone" id="pricePhone" name="phone"/>' +
				'<span class="tender-form-font newbj-tips-font price-font">鎴戜滑灏嗗彂閫侀绠楁槑缁嗗埌鎮ㄧ殑鎵嬫満</span>' +
				'</li>' +
				'</ul>' +
				'</form>' +
				'<p id="priceBtn" class="newbj-calcBn tender-expose" data-ptag="' + self.options.pricePtag + '">' +
				'椹笂璁＄畻' +
				'</p>' +
				'<div class="tender-price-ad tender-price-imgad">' +
				'<p></p>' +
				'</div>' +
				'<div class="pop-result-hotad">' +
				'<a href="javascript:void(0);"><img src=""></a>' +
				'<p>骞垮憡</p>' +
				'</div>' +
				'</div>' +
				'</div>' +
				'</div>' +
				'</div>';
			//寮圭獥鍒濆鍖�           
			jq('.window_box').windowBox({
				width: 880, //寮规瀹藉害
				height: 460,
				title: "", //鏍囬
				wbcStr: str, //鍙紪杈戝唴瀹�
				cancleBtn: false, //鏄惁鏄剧ず鍙栨秷鎸夐挳
				confirmBtn: false, // 鏄惁鏄剧ず纭鎸夐挳
				closeFn: 'CommonTenderPop.window_box_close'
			});
			self.options.fabiao_falg = false; //鍒濆鍖栨爣璇�
			CommonTenderPop.options.fabiao_falg = false;
			//璋冪敤缁撴灉鎬佹柟娉�
			jq('#priceCity,#priceShen').on('change', function() {
				self.fruit_dispose('');
			});
			jq('.tender-pop').css({
				'background': '#fff',
				'height': '460px'
			})
			jq('.tender-pop-left').css({
				'border-right': '1px solid #ddd'
			});
			jq('.tender-pop-right').css({
				'margin-right': '0'
			});
			jq('.newbj-form-item input').css({
				'margin-left': '0',
				'padding': '8px 9px 7px'
			});
			jq('.tender-form-font').css({
				'top': '2px'
			});
			jq('.tender-form-item').css({
				'height': '36px',
				'line-height': '36px',
				'margin-bottom': '17px'
			});
			jq('.tender-pop-con').show();
			jq('.window_box .window_box_title').css('position', 'absolute');
			jq('.window_box').css({
				'border-radius': '0',
				'-o-border-radius': '0',
				'-webkit-border-radius': '0',
				'-moz-border-radius': '0'
			});
			// 鏂扮増鏁堟灉鍥剧殑鎶ヤ环鏍峰紡銆�
			jq('#priceMterials').parent().css('margin-left', '58px');
			jq('#priceDesign').parent().css('margin-left', '58px');
			jq('.tender-pop-mfbj.tender-pop-left').css('overflow', 'hidden');
			// 鏍规嵁鍥剧墖鐨勫楂樿嚜鍔ㄥ欢浼稿睆骞�
			var imgSrcWidthHeight = new Image();
			imgSrcWidthHeight.src = self.options.imgSrcPage;
			imgSrcWidthHeight.onload = function() {
				if(imgSrcWidthHeight.width / imgSrcWidthHeight.height >= 22 / 23) {
					jq('.tender-pop-mfbj.tender-pop-left').find('img').height(460);
				} else {
					jq('.tender-pop-mfbj.tender-pop-left').find('img').width(440);
				}
				imgSrcWidthHeight = null;
			};
			// 鍘绘帀鍥剧墖搴曢儴鐨勭櫧鏉�
			jq('.tender-pop-main').height(460);
			jq('.tender-pop-left').width(440).height(460);
			jq('.tender-pop-right').width(439);
			// jq('.window_box .window_box_container').css('display','block');
			jq('.tender-pop-title.littlefont').css({
				'padding-top': '33px',
				'font-size': '28px;'
			});
			jq('.tender-price-newResult').css({
				'width': '312px',
				'height': '54px'
			});
			jq('.tender-price-newResult').find('li').css('margin-bottom', '-6px');
			jq('.tender-form-list').css('padding', '10px 59px');

			//鏇濆厜 ptag
			if(self.options.exposurePtag) {
				(typeof clickStream !== 'undefined') && clickStream.getCvParams(self.options.exposurePtag);
			};
			//琛ㄥ崟鍗犱綅绗﹀垵濮嬪寲
			var inputArr = jq('.tender-form-input');
			for(var i = inputArr.length - 1; i >= 0; i--) {
				var inputDom = jq(inputArr[i]);
				self.showPlaceholder(jq(inputArr[i]));
			};
			// 璇ユā鍧楃殑鎶ヤ环鍒濆鍖�
			self.detailPrice();
		},
		//棣栭〉鎶ヤ环澶勭悊
		indexdetailPrice: function() {
			var self = this;

			//鎶ヤ环浜烘暟鍒濆鍖�
			self.getApplySum('.tender-pop-mfbj .num-man', 'xiaoguotu');
			//鐪佸競鑱斿姩鍒濆鍖�
			gpmXGT.def_province = ["省/市", ""];
			gpmXGT.def_city1 = ["市/地区", ""];
			gpmXGT.initProvince($("priceShen"));

			jq('#priceShen').on('change', function() {
				changeProvince("priceShen", "priceCity", "priceTown");
				jq('#priceCity').find('option').eq(1).attr('selected', 'selected');
			})
			jq('#priceCity').on('change', function() {
				changeTown("priceShen", "priceCity", "priceTown");
			})
			// 杈撳叆鍚庤嚜鍔ㄨ幏鍙�
			var autohuxing = jq('#priceSquare');
			autohuxing.on('keyup change', function() {
				var square = Number(jq(this).val());
				if(/^[1-9]{1}[0-9]{0,}$/.test(square)) {
					self.selectDoorModle(square, this, '#tenderPrice');
				};
				CommonTenderPop.gethotad();
			});
			self.allowClick('.price-check', '#priceBtn', 'no-allow')
			var doubleClick = false;
			var buttom = jq('#priceBtn');
			var buttomVideo = jq('#priceBtnVideo');
			buttomVideo.on('click', function() {
				jq('#tender-video-view').hide();
				jq('#tender-video-form').show();
			});
			/* var videoBigScreen = jq('#tender-video-wrapper-btn');
			 videoBigScreen.on('click',function(){
			     if (!jq(this).hasClass('open')) {
			         jq(this).addClass('open');
			         clickStream.getCvParams("1_1_1_1103");
			     };
			 });*/
			var first = false;
			buttom.on('click', function() {
				if(doubleClick || jq(this).hasClass('no-allow')) {
					return;
				}
				if(CommonTenderPop.options.repeat_calc) {
					// 寰俊灏忓彿
					CommonTenderPop.options.repeat_calc = false;
					jq('.pop-wechat-hotad').hide();
					// 閲嶅姞宸︿晶澶撮儴
					jq('.tender-pop-mfbj.tender-pop-left .tender-pop-title,.tender-pop-applypeople').show();
					jq('#tenderPrice').show();
					return;
				}
				doubleClick = true;

				var data = {
					dangci: "jianzhuang",
					modeltype: 9,
					nowstep: 1,
					town: "",
					type: "detail",
					xgtqbj: "1"
				};

				data.onFirstStepEnd = function(resultData) {
					doubleClick = false;
					clearInterval(self.options.randomObj); //娓呴櫎闅忔満鍑芥暟
					jq('.tender-title-text').text('万元');
					creatDetailBudget(resultData);
					jq('#priceBtn').addClass('again');
					jq('#priceBtn .tender-recalc').html('閲嶆柊璁＄畻');
					jq('.price-result-title').html('姣涘澂鎴垮崐鍖呰淇浼颁环');
					self.options.check_info.phone = jq('#pricePhone').val() || self.options.check_info.phone;
					self.options.check_info.demo = resultData.demo;
					self.options.check_info.city = data.city || ' ';
					self.options.check_info.tmpYid = self.options.check_info.tmpYid || resultData.tmpYid;
					if(jq('.price-check').length > 0) {
						jq('.price-check').parent().html('');
					};

					self.options.index_pop = true; //鏍囪瘑涓烘垚鍔熷彂鏍囦笉鑳藉脊鍑哄湪绾垮挩璇㈠脊妗� 
					self.options.fabiao_falg = true; //鏍囪瘑涓烘垚鍔�
					CommonTenderPop.options.fabiao_falg = true;
					if(jq('#pricePhone').length > 0 && !(jq('#pricePhone').val() == self.phoneFlag)) {
						first = true;
						//鍏ュ簱鎴愬姛鍚庡彿鐮佹殏瀛�
						self.phoneFlag = jq('#pricePhone').val();
						jq('#pricePhone').parents('.tender-form-item').remove();
						jq('.tender-pop-mfbj .tender-price-ad').css({
							'margin-top': '15px'
						}).html('<p class="tender-price-ad-video"><span id="video-first-text" class="holiday-text">* 绋嶅悗瑁呬慨绠″灏嗚嚧鐢垫偍锛屼负鎮ㄦ彁渚涘厤璐硅淇挩璇㈡湇鍔�</span></p><p>* 鍥犳潗鏂欏搧鐗屽強宸ョ▼閲忎笉鍚岋紝鍏蜂綋鎶ヤ环浠ラ噺鎴垮疄娴嬩负鍑嗐€�</p>');
						setTimeout(function() {
							jq('#video-first-text').css({
								'color': "#E53333"
							});
						}, 0);
						setTimeout(function() {
							jq('#video-first-text').css({
								'color': "#fe5f00"
							});
						}, 300);
						setTimeout(function() {
							jq('#video-first-text').css({
								'color': "#E53333"
							});
						}, 600);
						setTimeout(function() {
							jq('#video-first-text').css({
								'color': "#fe5f00"
							});
						}, 900);
						setTimeout(function() {
							jq('#video-first-text').css({
								'color': "#E53333"
							});
						}, 1200);

						setTimeout(function() {
							jq('#video-first-text').css({
								'color': "#fe5f00"
							});
							/*   var yuan = true;
							   var countMouse = 1;
							   setTimeout(function(){
							       jq('#tender-video-wrapper-hand').show();
							       handdleMouse();
							   },4000);*/
							/*var handdleMouse = function(){
							    if (countMouse>2) {
							        jq('#tender-video-wrapper-hand').animate({
							            'width':'0',
							            'height': '0'
							        },50);
							        return;
							    };
							    if (yuan) {
							        jq('#tender-video-wrapper-hand').animate({
							            'width':'30',
							            'height': '25'
							        },400);
							        yuan = false;
							        handdleMouse();
							    }
							    else {
							         jq('#tender-video-wrapper-hand').animate({
							            'width':'37',
							            'height': '32'
							        },400);
							         yuan = true;
							         countMouse++;
							         handdleMouse();
							    }
							};*/

						}, 1500);

					} else {
						first = false;
						jq('.tender-pop-mfbj .tender-price-ad').css({
							'margin-top': '15px'
						}).html('<p class="tender-price-ad-video"><span id="video-first-text" class="holiday-text">* 绋嶅悗瑁呬慨绠″灏嗚嚧鐢垫偍锛屼负鎮ㄦ彁渚涘厤璐硅淇挩璇㈡湇鍔�</span></p><p>* 鍥犳潗鏂欏搧鐗屽強宸ョ▼閲忎笉鍚岋紝鍏蜂綋鎶ヤ环浠ラ噺鎴垮疄娴嬩负鍑嗐€�</p>');
					}
					jq('#tender-video-form').hide();
					jq('#tender-video-view').show();
					self.fruit_dispose('');

					//鎴愬姛鍚庡洓涓猼ab鏁版嵁鍚屾
					self.copyFormData(self.phoneFlag, data.square, data.shen, data.city);

				}
				if(self.checkForm('#tenderPrice')) {

					if(jq('#pricePhone').length > 0) {
						//鍒ゆ柇鍏ュ簱鍙风爜鏄惁涓庝箣鍓嶅彂鏍囩殑鍙风爜涓€鑷�
						if(!(jq('#pricePhone').val() == self.phoneFlag)) {
							data.phone = jq('#pricePhone').val();
						};
					};
					data.ptag = buttom.attr('data-ptag');
					data.shen = jq('#priceShen').val();
					data.city = jq('#priceCity').val();
					data.square = jq('#priceSquare').val();
					data.shi = jq('#shi').val();
					data.ting = jq('#ting').val();
					data.wei = jq('#wei').val();
					data.chu = jq('#chu').val();
					data.yangtai = jq('#yangtai').val();
					data.method = 'baojiaTb';

					var sendMsg = new tender();
					sendMsg.requestURL = 'http://to8tozb.to8to.com/zb/zb.php';
					sendMsg.init(data);

					var player = jwplayer("container").setup({
						flashplayer: "http://img.to8to.com/swf/jwplayer.flash.swf",
						file: "http://video.to8to.com/mpeg4/to8tonew.mp4",
						height: 200,
						width: 360,
						stretching: 'fill',
						streamer: "start",
						provider: "http",
						startparam: "start",
						autostart: true
					});
					var ptagFirst = 1;
					jwplayer().onTime(function() {
						var time = jwplayer("container").getPosition();
						if(first) {
							if(0 < time && time <= 30 && ptagFirst === 1) {
								if(self.options.fromPage === 'index') {
									clickStream.getCvParams('1_1_1_1103');
								} else if(self.options.fromPage === 'xiaoguotuIndex') {
									clickStream.getCvParams('1_2_1_1139');
								} else if(self.options.fromPage === 'xiaoguotuDetail') {
									clickStream.getCvParams('1_2_10_1142');
								} else {

								}
								ptagFirst = 2;
							} else if(time > 30 && time <= 120 && ptagFirst === 2) {
								if(self.options.fromPage === 'index') {
									clickStream.getCvParams('1_1_1_1134');
								} else if(self.options.fromPage === 'xiaoguotuIndex') {
									clickStream.getCvParams('1_2_1_1140');
								} else if(self.options.fromPage === 'xiaoguotuDetail') {
									clickStream.getCvParams('1_2_10_1143');
								} else {

								}
								ptagFirst = 3;
							} else if(time > 120 && ptagFirst === 3) {
								if(self.options.fromPage === 'index') {
									clickStream.getCvParams('1_1_1_1135');
								} else if(self.options.fromPage === 'xiaoguotuIndex') {
									clickStream.getCvParams('1_2_1_1141');
								} else if(self.options.fromPage === 'xiaoguotuDetail') {
									clickStream.getCvParams('1_2_10_1144');
								} else {

								}
								ptagFirst = 0;
							} else {
								return;
							}
						}
					});
				} else {
					doubleClick = false;
				}

				function creatDetailBudget(data) {
					// 鏁堟灉鍥剧瓑椤甸潰
					if(self.options.showXGTImg) {
						jq('.tender-price-newResult').find('li').width('132px');
						jq('.tender-price-newResult').find('li').css('margin-left', '15px');
					}
					var total_price = (data.to8to_totle_price / 10000).toFixed(1);
					jq('#priceTotal').html(total_price);
					jq('#priceMterials em').html(data.to8to_cl_price);
					jq('#priceArtificial em').html(data.to8to_rg_price);
					jq('#priceDesign').html('<em>0</em>元<del class="to8to_zj">' + data.normal_sj_price + '元</del>');
					jq('#priceQuality').html('<em>0</em>元<del class="to8to_zj">' + data.normal_zj_price + '元</del>');

				}
			});
		},
		//鎶ヤ环澶勭悊
		detailPrice: function() {
			var self = this;
			//鎶ヤ环浜烘暟鍒濆鍖�
			self.getApplySum('.tender-pop-mfbj .num-man', 'xiaoguotu');
			//鐪佸競鑱斿姩鍒濆鍖�
			gpmXGT.def_province = ["省/市", ""];
			gpmXGT.def_city1 = ["市/地区", ""];
			gpmXGT.initProvince($("priceShen"));

			jq('#priceShen').on('change', function() {
				changeProvince("priceShen", "priceCity", "priceTown");
				jq('#priceCity').find('option').eq(1).attr('selected', 'selected');
			})
			jq('#priceCity').on('change', function() {
				changeTown("priceShen", "priceCity", "priceTown");
			})
			// 杈撳叆鍚庤嚜鍔ㄨ幏鍙�
			var autohuxing = jq('#priceSquare');
			autohuxing.on('keyup change', function() {
				var square = Number(jq(this).val());
				if(/^[1-9]{1}[0-9]{0,}$/.test(square)) {
					self.selectDoorModle(square, this, '#tenderPrice');
				};
				CommonTenderPop.gethotad();
			});
			self.allowClick('.price-check', '#priceBtn', 'no-allow')
			var doubleClick = false;
			var buttom = jq('#priceBtn');
			buttom.on('click', function() {
				if(doubleClick || jq(this).hasClass('no-allow')) {
					return;
				}
				if(CommonTenderPop.options.repeat_calc) {
					// 寰俊灏忓彿
					CommonTenderPop.options.repeat_calc = false;
					jq('.pop-wechat-hotad').hide();
					// 閲嶅姞宸︿晶澶撮儴
					jq('.tender-pop-mfbj.tender-pop-left .tender-pop-title,.tender-pop-applypeople').show();
					jq('#tenderPrice').show();
					return;
				}
				doubleClick = true;

				var data = {
					dangci: "jianzhuang",
					modeltype: 9,
					nowstep: 1,
					town: "",
					type: "detail",
					xgtqbj: "1"
				};

				data.onFirstStepEnd = function(resultData) {
					doubleClick = false;
					clearInterval(self.options.randomObj); //娓呴櫎闅忔満鍑芥暟
					jq('.tender-title-text').text('万元');
					creatDetailBudget(resultData);
					//鍙戞爣瀹屾垚-璁板綍 鍏叡鎶ヤ环寮规鎶ヤ环鍙戞爣鎴愬姛
					setCookie('zxzx_correlation_Flag', 'true', 365 * 24 * 60 * 60 * 1000); //鍦ㄧ嚎鍜ㄨ鐩稿叧cookie
					//end 鍙戞爣瀹屾垚-璁板綍 鍏叡鎶ヤ环寮规鎶ヤ环鍙戞爣鎴愬姛
					jq('#priceBtn').addClass('again');
					jq('#priceBtn .tender-recalc').html('閲嶆柊璁＄畻');
					jq('.price-result-title').html('姣涘澂鎴垮崐鍖呰淇浼颁环');

					if(jq('.price-check').length > 0) {
						jq('.price-check').parent().html('');
					}
					self.options.fabiao_falg = true; //鏍囪瘑涓烘垚鍔�
					CommonTenderPop.options.fabiao_falg = true;
					self.options.check_info.phone = jq('#pricePhone').val() || self.options.check_info.phone;
					self.options.check_info.demo = resultData.demo;
					self.options.check_info.city = data.city || ' ';
					self.options.check_info.tmpYid = self.options.check_info.tmpYid || resultData.tmpYid;
					if(jq('#pricePhone').length > 0 && !(jq('#pricePhone').val() == self.phoneFlag)) {
						//鍏ュ簱鎴愬姛鍚庡彿鐮佹殏瀛�
						self.phoneFlag = jq('#pricePhone').val();
						jq('#pricePhone').parents('.tender-form-item').remove();
						jq('.tender-pop-mfbj .tender-price-ad').css({
							'margin-top': '15px'
						}).html('<p><span class="holiday-text">* 绋嶅悗瑁呬慨绠″灏嗚嚧鐢垫偍锛屼负鎮ㄦ彁渚涘厤璐硅淇挩璇㈡湇鍔�</span></p><p>* 鍥犳潗鏂欏搧鐗屽強宸ョ▼閲忎笉鍚岋紝鍏蜂綋鎶ヤ环浠ラ噺鎴垮疄娴嬩负鍑嗐€�</p>');
					} else {
						jq('.tender-pop-mfbj .tender-price-ad').css({
							'margin-top': '15px'
						}).html('<p class="tender-price-ad-video"><span id="video-first-text" class="holiday-text">* 绋嶅悗瑁呬慨绠″灏嗚嚧鐢垫偍锛屼负鎮ㄦ彁渚涘厤璐硅淇挩璇㈡湇鍔�</span></p><p>* 鍥犳潗鏂欏搧鐗屽強宸ョ▼閲忎笉鍚岋紝鍏蜂綋鎶ヤ环浠ラ噺鎴垮疄娴嬩负鍑嗐€�</p>');
					}
					self.fruit_dispose('');

					//鎴愬姛鍚庡洓涓猼ab鏁版嵁鍚屾
					self.copyFormData(self.phoneFlag, data.square, data.shen, data.city);

					// 鏁堟灉鍥惧垪琛ㄩ〉鎶ヤ环 鏂扮増鏁堟灉鍥炬姤浠锋垚鍔熷悗锛屽乏渚ф竻绌猴紝鍙充晶娣诲姞瀹℃牳淇℃伅
					if((self.options.imgNewBJ && self.options.showXGTImg) || self.options.showResult) {
						var luodiye = false, // 鏄惁鏄惤鍦伴〉
							luodi_city = '鍖椾含,涓婃捣,娣卞湷,骞垮窞,鍗椾含,鑻忓窞,闀挎矙,涓滆帪,姝︽眽,鏉窞,鍘﹂棬,绂忓窞,鏃犻敗,鍚堣偉,鎴愰兘,鏄嗘槑,澶╂触,閮戝窞,瑗垮畨,鍗楀畞,璐甸槼,娌堥槼,澶ц繛,鏄嗗北,甯稿窞,浣涘北,閲嶅簡,鍗楁槍,寤婂潑,鐝犳捣,鎵窞,璧ｅ窞',
							user_city = jq('#priceCity').val(); // 鐢ㄦ埛鎶ヤ环鍩庡競銆�
						jq('.tender-pop-right .littlefont').css('padding-top', '33px');
						// 娓呴櫎鎶ヤ环鍓嶇殑鏍峰紡銆�
						jq('#tenderPrice').remove();
						jq('.newbj-calcBn').remove();
						jq('#priceBtn').remove();
						if(luodi_city.indexOf(user_city) >= 0) {
							luodiye = true;
						}
						// 濉厖鍙充晶鍐呭
						fillRight(luodiye, user_city);
					}
				}
				if(self.checkForm('#tenderPrice')) {

					if(jq('#pricePhone').length > 0) {
						//鍒ゆ柇鍏ュ簱鍙风爜鏄惁涓庝箣鍓嶅彂鏍囩殑鍙风爜涓€鑷�
						if(!(jq('#pricePhone').val() == self.phoneFlag)) {
							data.phone = jq('#pricePhone').val();
						};
					};
					data.ptag = buttom.attr('data-ptag');
					data.shen = jq('#priceShen').val();
					data.city = jq('#priceCity').val();
					data.square = jq('#priceSquare').val();
					data.shi = jq('#shi').val();
					data.ting = jq('#ting').val();
					data.wei = jq('#wei').val();
					data.chu = jq('#chu').val();
					data.yangtai = jq('#yangtai').val();
					data.method = 'baojiaTb';

					var sendMsg = new tender();
					sendMsg.requestURL = 'http://to8tozb.to8to.com/zb/zb.php';
					sendMsg.init(data);
				} else {
					doubleClick = false;
				}

				function creatDetailBudget(data) {
					// 鏁堟灉鍥剧瓑椤甸潰
					if(self.options.showXGTImg) {
						jq('.tender-price-newResult').find('li').width('132px');
						jq('.tender-price-newResult').find('li').css('margin-left', '15px');
						jq('.tender-title-text').html('万元');
					}
					var total_price = (data.to8to_totle_price / 10000).toFixed(1);
					jq('#priceTotal').html(total_price);
					jq('#priceMterials em').html(data.to8to_cl_price);
					jq('#priceArtificial em').html(data.to8to_rg_price);
					jq('#priceDesign').html('<em>0</em>元<del class="to8to_zj">' + data.normal_sj_price + '元</del>');
					jq('#priceQuality').html('<em>0</em>元<del class="to8to_zj">' + data.normal_zj_price + '元</del>');

				}
				// 濉厖鍙充晶缁撴灉鎬�
				function fillRight(is_ldy, city) {
					//涓烘繁鍦冲睍绀鸿繖涓�
					if(city == '娣卞湷') {
						jq('#tenderPrice').remove();
						return false;
					}
					if(jq('.tender-pop-showImg').length > 0) {
						jq('.tender-pop-showImg').remove();
					}
					// 鍙充晶娣诲姞鑺傜偣
					var newbjResult = '<p class="newbj-result-server">鎮ㄨ繕鑾峰緱鍏嶈垂涓婇棬閲忔埧鍑鸿璁℃柟妗堟湇鍔�</p>' +
						'<em class="newbj-result-jpg"></em>';
					jq('.tender-pop-mfbj .tender-price-ad').html('<p class="newBJ-result-text holiday-text">* 报价有疑问？稍后装修管家将致电为您解答</p><p class="newBJ-result-warn">* 该报价为毛坯半包价，实际装修报价以量房实测为准<p>');
					jq('.tender-price-ad.tender-price-imgad').before(newbjResult);
					// 钀藉湴鎬佷笌闈炶惤鍦版€佺殑鍥剧墖涓嶄竴鑷淬€�
					if(is_ldy) {
						// 钀藉湴椤�
						jq('.newbj-result-jpg').css('background', 'url(http://img.to8to.com/to8to_img/zxbj/newbj_result_jpg.jpg) no-repeat -18px 0px');
					} else {
						// 闈炶惤鍦伴〉鑳屾櫙鍥剧墖
						jq('.newbj-result-jpg').css('background', 'url(http://img.to8to.com/to8to_img/zxbj/fldy_newbj_result_jpg.jpg) no-repeat -14px -2px');
					}
				}
			});
		},
		//璁捐澶勭悊
		detailDesign: function() {
			var self = this;

			gpmMFSJ.def_province = ["省/市", ""];
			gpmMFSJ.def_city1 = ["市/地区", ""];
			gpmMFSJ.initProvince($("designShen"));

			jq('#designShen').on('change', function() {
				changeProvince("designShen", "designCity", "designTown");
				jq('#designCity').find('option').eq(1).attr('selected', 'selected');
			})
			jq('#designCity').on('change', function() {
				changeTown("designShen", "designCity", "designTown");
			})

			var mfsjbtn = jq('#designBtn');
			var mfsjdoubleClick = false;

			self.allowClick('.design-check', '#designBtn', 'no-allow');

			mfsjbtn.on('click', function() {
				if(mfsjdoubleClick || jq(this).hasClass('no-allow')) {
					return;
				}
				mfsjdoubleClick = true;
				var data = {
					dangci: "jianzhuang",
					modeltype: 1,
					nowstep: 1,
					type: "detail",
					autoPop: 2,
					"module_source": "ordinary"
				};
				data.onFirstStepEnd = function(resultData) {
					mfsjdoubleClick = false;
					jq('.tender-init-mfsj').hide().siblings('.tender-result-mfsj').show();
					jq('.tender-mfsjinit-img').find('em').css({
						'background-position': '-364px -102px',
						'width': '272px',
						'height': '274px'
					});
					jq('.tender-pop-right').css({
						'margin-right': '30px'
					});
					self.options.index_pop = true; //鏍囪瘑涓烘櫘閫氱殑棣栭〉5绉掑脊妗� 鍙戞爣鎴愬姛
					if(jq('#designPhone').length > 0 && !(self.phoneFlag == jq('#designPhone').val())) {
						//鍏ュ簱鎴愬姛鍚庡彿鐮佹殏瀛�
						self.phoneFlag = jq('#designPhone').val();
					} else {
						jq('.tender-result-mfsj .tender-result-explain').hide();
					}

					//鎴愬姛鍚庡洓涓猼ab鏁版嵁鍚屾
					self.copyFormData(self.phoneFlag, data.square, data.shen, data.city);
				}
				// 鍙戞爣鏁版嵁
				if(self.checkFormmfsj()) {
					//鍒ゆ柇鍏ュ簱鍙风爜鏄惁涓庝箣鍓嶅彂鏍囩殑鍙风爜涓€鑷�
					if(!(jq('#designPhone').val() == self.phoneFlag)) {
						data.phone = jq('#designPhone').val();
					};
					data.ptag = mfsjbtn.attr('data-ptag');
					data.shen = jq('#designShen').val();
					data.city = jq('#designCity').val();
					data.chenghu = jq('#designName').val();
					data.method = 'baojiaTb';

					var sendMsg = new tender();
					sendMsg.requestURL = 'http://to8tozb.to8to.com/zb/zb.php';
					sendMsg.init(data);
				} else {
					mfsjdoubleClick = false;
				}
			});
		},
		//瑁呬慨鍏徃澶勭悊
		detailCompany: function() {
			var self = this;
			setTimeout(function() {
				self.getApplySum('.tender-pop-company .num-man', 'to8to');
			}, 1000)

			gpmCom.def_province = ["省/市", ""];
			gpmCom.def_city1 = ["市/地区", ""];
			gpmCom.initProvince($("companyShen"));

			jq('#companyShen').on('change', function() {
				changeProvince("companyShen", "companyCity", "companyTown");
				jq('#companyCity').find('option').eq(1).attr('selected', 'selected');
			})
			jq('#companyCity').on('change', function() {
				changeTown("companyShen", "companyCity", "companyTown");
			})

			//鑾峰彇妤肩洏鍒濆鍖�
			jq("#companyHouses").on('keyup keydown', function() {
				var loupan = jq(this).val();
				if(loupan != 'undefined' && loupan != '') {
					self.getHouses({
						'shen': jq('#companyShen').val(),
						'city': jq('#companyCity').val(),
						'loupan_key': loupan
					});
				}
			});
			var companybtn = jq('#companyBtn');
			var mfsjdoubleClick = false;

			self.allowClick('.company-check', '#companyBtn', 'no-allow');

			companybtn.on('click', function() {

				if(mfsjdoubleClick || jq(this).hasClass('no-allow')) {
					return;
				}
				mfsjdoubleClick = true;
				var data = {
					dangci: 'jianzhuang',
					modeltype: 1,
					nowstep: 1,
					type: "detail",
					autoPop: 2,
					module_source: "company",
					not_send_mobile_msg: '1'
				};
				data.onFirstStepEnd = function(res) {
					mfsjdoubleClick = false;
					jq('#companyBtn').addClass('again');
					jq('#companyBtn .tender-recalc').html('閲嶆柊鏌ヨ');
					jq('.tender-pop-company .tender-price-result').hide();
					companyResultList(res.companyData, '.tender-company-result');
					jq('.tender-form-explain').show();
					if(jq('.company-check').length > 0) {
						jq('.company-check').parent().html('');
					};
					if(jq('#companyPhone').length > 0 && !(self.phoneFlag == jq('#companyPhone').val())) {
						//鍏ュ簱鎴愬姛鍚庡彿鐮佹殏瀛�
						self.phoneFlag = jq('#companyPhone').val();
						jq('#companyPhone').parent().remove();
					} else {
						jq('.tender-pop-company.tender-pop-right .tender-form-explain').hide();
					}

					//鎴愬姛鍚庡洓涓猼ab鏁版嵁鍚屾
					self.copyFormData(self.phoneFlag, data.square, data.shen, data.city);

				}
				// 鍙戞爣鏁版嵁
				if(self.checkFormCompany()) {
					if(jq('#companyPhone').length > 0) {
						//鍒ゆ柇鍏ュ簱鍙风爜鏄惁涓庝箣鍓嶅彂鏍囩殑鍙风爜涓€鑷�
						if(!(jq('#companyPhone').val() == self.phoneFlag)) {
							data.phone = jq('#companyPhone').val();
						};
					}
					data.ptag = companybtn.attr('data-ptag');
					data.shen = jq('#companyShen').val();
					data.city = jq('#companyCity').val();
					data.a_price = jq('#acceptPrice').val();
					data.houses = jq('#companyHouses').val();

					var sendMsg = new tender();
					sendMsg.init(data);
				} else {
					mfsjdoubleClick = false;
				}
			});

			function companyResultList(companyData, parentDOM) {
				var companyLen = companyData.length;
				if(!companyData || companyLen == 0) {
					return;
				};
				var companyDom = '';
				for(var i = 0; i < companyLen; i++) {
					companyDom += '<dl class="tender-company-result-list clear">' +
						'<dt><a href="' + companyData[i].homepage + '" target="_blank" rel="nofollow">' +
						'<img src="' + companyData[i].headphoto + '"></a></dt>' +
						'<dd>' +
						'<div class="tender-company-name">' +
						'<h4><a href="' + companyData[i].homepage + '" target="_blank" rel="nofollow">' + companyData[i].shortname + '</a></h4>' +
						'<p>宸叉湁<span>&nbsp;' + companyData[i].nums + '&nbsp;</span>浜哄挩璇�<p>' +
						'</div>' +
						'<div class="tender-company-detail">' +
						'<p>璁よ瘉绾у埆锛�<span>' + companyData[i].credit_level + '</span></p>' +
						'<p>鍙ｇ鍊硷細<span>' + companyData[i].xinyon + '</span></p>' +
						'<p>濂借瘎鐜囷細<span>' + companyData[i].comment_good_rate + '%</span></p>' +
						'</div>' +
						'</dd>' +
						'</dl>';
				}
				jq(parentDOM).html(companyDom).show();
			}
		},
		detailMaterial: function() {
			var self = this;
			//鐪佸競鑱斿姩鍒濆鍖�

			gpmMat.def_province = ["省/市", ""];
			gpmMat.def_city1 = ["市/地区", ""];
			gpmMat.initProvince($("materialShen"));

			jq('#materialShen').on('change', function() {
				changeProvince("materialShen", "materialCity", "materialTown");
				jq('#materialCity').find('option').eq(1).attr('selected', 'selected');
			})
			jq('#materialCity').on('change', function() {
				changeTown("materialShen", "materialCity", "materialTown");
			})

			// 杈撳叆鍚庤嚜鍔ㄨ幏鍙�
			var autohuxing = jq('#materialSquare');
			autohuxing.on('keyup change', function() {
				var square = Number(jq(this).val());
				if(/^[1-9]{1}[0-9]{0,}$/.test(square)) {
					self.selectDoorModle(square, this, '#tenderMaterial');
				}
			});
			self.allowClick('.material-check', '#materialBtn', 'no-allow')
			var doubleClick = false;
			var buttom = jq('#materialBtn');
			buttom.on('click', function() {
				if(doubleClick || jq(this).hasClass('no-allow')) {
					return;
				}
				doubleClick = true;

				if(self.checkForm('#tenderMaterial')) {
					var data = {
						modeltype: 1,
						nowstep: 1,
						module_source: "zxcl",
						autoPop: 2
					};
					var materialData = {
						home_square: jq('#materialSquare').val(),
						home_shi: jq('#materialShi').val(),
						home_ting: jq('#materialTing').val(),
						home_chu: jq('#materialChu').val(),
						home_wei: jq('#materialWei').val(),
						home_yangtai: jq('#materialYangtai').val(),
						home_html5: 1
					}

					jq.ajax({
						type: 'get',
						url: 'http://www.to8to.com/yezhu/materialList.php',
						dataType: 'jsonp',
						data: materialData,
						jsonpCallback: 'jsonpCallback',
						success: function(res) {

							var resData = {};
							for(var i in res) {
								resData[i] = Math.ceil(res[i]);
							}
							jq('#dzDawing').html(resData.ting_dizhuan);
							jq('#ddKitchen').html(resData.chu_diaoding);
							jq('#dbBedroom').html(resData.shi_diban);
							jq('#ddWash').html(resData.wei_diaoding);
							jq('#dzKitchen').html(resData.chu_dizhuan);
							jq('#jjWash').html(resData.wei_jieju);
							jq('#qzKitchen').html(resData.chu_qiangzhuan);
							jq('#timber').html(resData.mumen);
							jq('#dzWash').html(resData.wei_dizhuan);
							jq('#aluminiumDoor').html(resData.lvmen);
							jq('#qzWash').html(resData.wei_qiangzhuan);

							data.ptag = buttom.attr('data-ptag');
							data.shen = jq('#materialShen').val();
							data.city = jq('#materialCity').val();
							data.square = jq('#materialSquare').val();
							data.shi = jq('#materialShi').val();
							data.ting = jq('#materialTing').val();
							data.wei = jq('#materialWei').val();
							data.chu = jq('#materialChu').val();
							data.yangtai = jq('#materialYangtai').val();
							data.zzcost = (resData.zccost / 10000).toFixed(2);

							data.onFirstStepEnd = function(resultData) {
								materialResult();
							}

							//鍒ゆ柇鍏ュ簱鍙风爜鏄惁涓庝箣鍓嶅彂鏍囩殑鍙风爜涓€鑷�
							if((jq('#materialPhone').length > 0) && !(jq('#materialPhone').val() == self.phoneFlag)) {
								data.phone = jq('#materialPhone').val();
								var sendMsg = new tender();
								sendMsg.init(data);
							} else {
								materialResult();
							};

							function materialResult() {
								doubleClick = false;
								jq('.tender-pop-material .tender-price-ad p').css('width', '300px');
								jq('#materialBtn').addClass('again');
								jq('#materialBtn .tender-recalc').html('閲嶆柊璁＄畻');
								if(jq('.material-check').length > 0) {
									jq('.material-check').parent().html('');
								};
								if(jq('#materialPhone').length > 0) {
									//鍏ュ簱鎴愬姛鍚庡彿鐮佹殏瀛�
									self.phoneFlag = jq('#materialPhone').val();
									if(!(jq('#materialPhone').val() == self.phoneFlag)) {
										jq('.tender-pop-material .tender-price-ad').html('<p><span class="holiday-text">* 绋嶅悗瑁呬慨绠″灏嗗洖鐢垫偍锛屽厤璐规彁渚涜淇挩璇㈡湇鍔°€�</span></p><p>*  鍥犳潗鏂欏搧鐗屽強宸ョ▼閲忎笉鍚岋紝鍏蜂綋鐢ㄩ噺浠ュ疄闄呮柦宸ヤ负鍑嗐€�</p>');
									} else {
										jq('.tender-pop-material .tender-price-ad').html('<p class="tender-price-ad-video"><span id="video-first-text" class="holiday-text">* 绋嶅悗瑁呬慨绠″灏嗚嚧鐢垫偍锛屼负鎮ㄦ彁渚涘厤璐硅淇挩璇㈡湇鍔�</span></p><p>* 鍥犳潗鏂欏搧鐗屽強宸ョ▼閲忎笉鍚岋紝鍏蜂綋鎶ヤ环浠ラ噺鎴垮疄娴嬩负鍑嗐€�</p>');
									};
									jq('#materialPhone').parent().remove();
								} else {
									jq('.tender-pop-material .tender-price-ad').html('<p class="tender-price-ad-video"><span id="video-first-text" class="holiday-text">* 绋嶅悗瑁呬慨绠″灏嗚嚧鐢垫偍锛屼负鎮ㄦ彁渚涘厤璐硅淇挩璇㈡湇鍔�</span></p><p>* 鍥犳潗鏂欏搧鐗屽強宸ョ▼閲忎笉鍚岋紝鍏蜂綋鎶ヤ环浠ラ噺鎴垮疄娴嬩负鍑嗐€�</p>');
								}

								//鎴愬姛鍚庡洓涓猼ab鏁版嵁鍚屾
								self.copyFormData(self.phoneFlag, data.square, data.shen, data.city);

							}
						}
					})

				} else {
					doubleClick = false;
				}
			})
		},
		//琛ㄥ崟鏍￠獙
		checkForm: function(formName) {
			var chkArr = [{
					id: jq(formName + ' select[name="shen"]')[0],
					className: 'form_error',
					labl: 'em',
					lablClass: 'ico_error',
					info: [{
						reg: [0],
						tip: '请输入选择您的所在地'
					}],
					parentTip: formName
				},
				{
					id: jq(formName + ' select[name="city"]')[0],
					className: 'form_error',
					labl: 'em',
					lablClass: 'ico_error',
					info: [{
						reg: [0],
						tip: '请输入选择您的所在地'
					}],
					parentTip: formName
				},
				{
					id: jq(formName + ' input[name="square"]')[0],
					className: 'form_error',
					labl: 'em',
					lablClass: 'ico_error',
					info: [{
						reg: [0],
						tip: '请输入房屋面积'
					}, {
						reg: [/^\d+(\.[0-9]?[1-9]{1})?$/],
						tip: '鎴垮眿闈㈢Н涓嶈兘瓒呰繃涓や綅灏忔暟'
					}, {
						reg: [/^[0-4](\.[0-9]?[1-9])?$/],
						tip: '房屋面积必须大于5',
						negate: true
					}, {
						reg: [/^[1-9]{1}[0-9]{0,2}(\.[0-9]?[1-9]{1})?$|^1000$/],
						tip: '鎴垮眿闈㈢Н蹇呴』鏄�1000浠ュ唴'
					}],
					parentTip: formName
				}
			];
			var phoneArr = {
				id: jq(formName + ' input[name="phone"]')[0],
				className: 'form_error',
				labl: 'em',
				lablClass: 'ico_error',
				info: [{
					reg: [0],
					tip: '请输入手机号码'
				}, {
					reg: [/^1[34578]\d{9}$/],
					tip: '请输入正确的手机号码'
				}],
				parentTip: formName
			};
			if(jq(formName + ' input[name="phone"]').length > 0) {
				chkArr = chkArr.concat(phoneArr);
			};
			return simplifyCheck2(chkArr);
		},
		// 鍏嶈垂璁捐琛ㄥ崟鏍￠獙
		checkFormmfsj: function() {
			var chkArr = [{
					id: jq('#designShen'),
					className: 'form_error',
					labl: 'em',
					lablClass: 'ico_error',
					info: [{
						reg: [0],
						tip: '请输入选择您的所在地'
					}],
					parentTip: '.tender-pop-mfsj'
				},
				{
					id: jq('#designCity'),
					className: 'form_error',
					labl: 'em',
					lablClass: 'ico_error',
					info: [{
						reg: [0],
						tip: '请输入选择您的所在地'
					}],
					parentTip: '.tender-pop-mfsj'
				},
				{
					id: jq('#designName'),
					className: 'form_error',
					labl: 'em',
					lablClass: 'ico_error',
					info: [{
						reg: [0],
						tip: '请输入您的称呼'
					}],
					parentTip: '.tender-pop-mfsj'
				},
				{
					id: jq('#designPhone'),
					className: 'form_error',
					labl: 'em',
					lablClass: 'ico_error',
					info: [{
						reg: [0],
						tip: '请输入手机号码'
					}, {
						reg: [/^1{1}[34578]{1}\d{9}$/],
						tip: '请输入正确的手机号码'
					}],
					parentTip: '.tender-pop-mfsj'
				}
			];
			return simplifyCheck2(chkArr);
		},
		//瑁呬慨鍏徃鏁版嵁鏍￠獙
		checkFormCompany: function() {
			var chkArr = [{
				id: '#companyShen',
				parentTip: '#tenderCompany',
				className: 'form_error',
				labl: 'em',
				lablClass: 'ico_error',
				info: [{
					reg: [0],
					tip: '璇烽€夋嫨鎵€鍦ㄥ湴'
				}]
			}, {
				id: '#companyCity',
				parentTip: '#tenderCompany ',
				className: 'form_error',
				labl: 'em',
				lablClass: 'ico_error',
				info: [{
					reg: [0],
					tip: '璇烽€夋嫨鎵€鍦ㄥ湴'
				}]
			}, {
				id: '#companyHouses',
				parentTip: '#tenderCompany ',
				className: 'form_error',
				labl: 'em',
				lablClass: 'ico_error',
				info: [{
					reg: [0],
					tip: '璇疯緭鍏ユゼ鐩樺悕绉�'
				}]
			}, {
				id: '#acceptPrice',
				parentTip: '#tenderCompany',
				className: 'form_error',
				labl: 'em',
				lablClass: 'ico_error',
				info: [{
					reg: [0],
					tip: '璇疯緭鍏ユ壙鎺ヤ环鏍�'
				}]
			}];
			var phoneRule = {
				id: '#companyPhone',
				parentTip: '#tenderCompany',
				className: 'form_error',
				labl: 'em',
				lablClass: 'ico_error',
				info: [{
					reg: [0],
					tip: '请输入手机号码'
				}, {
					reg: [/^1{1}[34578]{1}\d{9}$/],
					tip: '请输入正确的手机号码'
				}]
			};

			if(jq('#companyPhone').length > 0) {
				chkArr.push(phoneRule);
			};
			return simplifyCheck2(chkArr);
		},
		//鍗犱綅绗�
		showPlaceholder: function(inputDom) {
			var placeholder = inputDom.parent().find('.tender-form-font');
			inputDom.parent().bind('click', function(e) {
				var target = jq(e.target);
				if(!target.hasClass('tender-form-font') && !target.hasClass('tender-form-input') && !target.hasClass('tender-form-sup')) {
					return;
				}
				inputDom.focus();
			});
			inputDom.bind('focus', function() {
				inputDom.bind('keydown', function() {
					if(inputDom.val() === '') {
						placeholder.hide();
					}
				});
				inputDom.bind('keyup', function() {
					if(inputDom.val() === '') {
						placeholder.show();
					}
				});
				inputDom.bind('blur', function() {
					if(inputDom.val() === '') {
						placeholder.show();
					}
					inputDom.unbind('keydown');
					// inputDom.unbind('keyup');
					inputDom.unbind('blur');
				});
			});
		},
		//提交鎸夐挳鍙惁鐐瑰嚮
		allowClick: function(checkBox, clickBtn, allowClass) {

			jq(checkBox).on('click', function() {
				if(jq(checkBox).is(':checked')) {
					// find('em').css('background-position-y','-347px');
					jq(clickBtn).removeClass(allowClass);
				} else {
					jq(clickBtn).addClass(allowClass);
					// find('em').css('background-position-y','-407px');
				}
			});
		},
		//鑾峰彇鎶ヤ环浜烘暟
		getApplySum: function(ele, data) {
			console.log()
//			jq.ajax({
//				type: 'get',
//				dataType: 'jsonp',
//				cache: true,
//				url: 'http://www.to8to.com/zb/sumTender.php',
//				data: 'act=' + data,
//				jsonpCallback: "jsonpCallback",
//				success: function(msg) {
//					jq(ele).html(msg.num);
//				}
//			})
		},
		//鏍规嵁闈㈢Н鏄剧ず鎴峰瀷
		selectDoorModle: function(square, squareEle, form) {
			if(square + '' == 'NaN' || jq(squareEle).val() == '') {
				return;
			};
			if(square < 60) {
				jq(form + ' select[name="shi"]').val(1);
				jq(form + ' select[name="ting"]').val(1);
				jq(form + ' select[name="chu"]').val(1);
				jq(form + ' select[name="wei"]').val(1);
				jq(form + ' select[name="yangtai"]').val(1);
			} else if(square >= 60 && square < 90) {
				jq(form + ' select[name="shi"]').val(2);
				jq(form + ' select[name="ting"]').val(1)
				jq(form + ' select[name="chu"]').val(1);
				jq(form + ' select[name="wei"]').val(1);
				jq(form + ' select[name="yangtai"]').val(1);
			} else if(square >= 90 && square < 150) {
				jq(form + ' select[name="shi"]').val(3);
				jq(form + ' select[name="ting"]').val(2);
				jq(form + ' select[name="chu"]').val(1);
				jq(form + ' select[name="wei"]').val(2);
				jq(form + ' select[name="yangtai"]').val(1);
			} else if(square >= 150) {
				jq(form + ' select[name="shi"]').val(4);
				jq(form + ' select[name="ting"]').val(2);
				jq(form + ' select[name="chu"]').val(1);
				jq(form + ' select[name="wei"]').val(2);
				jq(form + ' select[name="yangtai"]').val(2);
			}
		},
		//鑾峰彇妤肩洏
		getHouses: function(option) {
			if(option.loupan_key == '璇疯緭鍏ラ」鐩皬鍖哄悕绉�') option.loupan_key = '';
			jq.get('/api/loupan_search.php?rand=' + ~(-new Date() / 36e5), option, function(data) {
				if(data == '0') {
					jq(".tender-loupan-box").hide();
				} else {
					data += '<iframe style="position:absolute;top:0;left:0;width:100%;height:100%;filter:alpha(opacity=0);opacity:0;z-index:-1;"></iframe>';
					jq(".tender-loupan-box").html(data).slideDown();
					jq(".lbl_in").text('');
					jq(".tender-loupan-box").find("ul li").click(function() {
						jq("#companyHouses").val(jq(this).text());
						jq(".tender-loupan-box").hide();
					});
				}
			});
		},
		setCookie: function(c_name, value, exdays) {
			var exdate = new Date();
			exdate.setDate(exdate.getDate() + exdays);
			var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
			document.cookie = c_name + "=" + c_value + ';path=/;domain=.to8to.com';
		},
		getCookie: function(c_name) {
			var c_value = document.cookie;
			var c_start = c_value.indexOf(" " + c_name + "=");
			if(c_start == -1) {
				c_start = c_value.indexOf(c_name + "=");
			}
			if(c_start == -1) {
				c_value = null;
			} else {
				c_start = c_value.indexOf("=", c_start) + 1;
				var c_end = c_value.indexOf(";", c_start);
				if(c_end == -1) {
					c_end = c_value.length;
				}
				c_value = unescape(c_value.substring(c_start, c_end));
			}
			return c_value;
		},
		//鍏抽棴寮圭獥
		window_box_close: function(obj) {
			var self = this;
			clearInterval(self.options.randomObj); //娓呴櫎闅忔満鍑芥暟
			if(!self.options.check_upload && (jq('.pop-check-info .check-house.on').length > 0 || jq('.pop-check-info .check-time.on').length > 0 || (jq('.pop-check-info .plot-name').find('input').val() && jq('.pop-check-info .plot-name').find('input').val().length > 0))) {
				self.uploadcheckinfo(true);
			}
			jq('.window_box').remove();
			jq('.translucence_layer').remove();
			var cb = self.checkBrowser();
			if(cb.version == "6") {
				jq("html").css("overflow-y", "scroll");
				jq("body").css("overflow-y", "visible");
			} else if(cb.version == "7" && jq('#st_pid').length != 1) {
				jq("html").css("overflow-y", "scroll");
				jq("body").css("overflow-y", "visible");
			} else if(cb.version == "8" && jq('#st_pid').length != 1) {
				jq("html").css("overflow-y", "scroll");
				jq('body').css('overflow-y', 'visible');
			} else {
				jq("body").css("overflow-y", "inherit");
			}
			jq('body').css('margin-right', '0');
			windowBoxOriginHight = 0;
			CommonTenderPop.options.repeat_calc = false;
			//鏆傛椂灞忚斀杩欎釜鍔熻兘 20161205
			//棣栭〉 鏁堟灉鍥鹃椤� 瑁呬慨鏀荤暐棣栭〉 鎶ヤ环寮规娌℃垚鍔熷彂鏍囷紝骞朵笖涔嬪墠娌″脊杩� 涓旀槸瑁呬慨鍏徃棣栭〉锛屼笖鑷韩寮规娌″彂鏍囨垚鍔� 骞朵笖鏄繁鍦� 寮规鍏抽棴鏃舵墠鍙Е鍙�
			// if (getCookie('zxzx_correlation_Flag') != 'true' && getCookie('company_index_pop') != 'true' &&  !self.options.index_pop && getCookie('to8to_tcode') == 'sz') {
			//     setTimeout(function(){
			//         document.getElementById('ico-consult1').click();
			//         setCookie('company_index_pop','true',365*24*60*60*1000);//璁剧疆闄愬埗cookie
			//         if (jq('.ico-consult').length >=2) {
			//             jq('.ico-consult').eq(1).addClass('ico-consult-saffron');//澧炲姞class 鏇挎崲鍦ㄧ嚎鍜ㄨ鍥剧墖   
			//         };
			//         (typeof clickStream !== 'undefined') && clickStream.getCvParams('1_5_1_1246');                      
			//     },3000)
			// };
		},
		// 鍒ゆ柇娴忚鍣�
		checkBrowser: function() {
			var u = window.navigator.userAgent.toLocaleLowerCase(),
				msie = /(msie) ([\d.]+)/,
				chrome = /(chrome)\/([\d.]+)/,
				firefox = /(firefox)\/([\d.]+)/,
				safari = /(safari)\/([\d.]+)/,
				opera = /(opera)\/([\d.]+)/,
				ie11 = /(trident)\/([\d.]+)/,
				b = u.match(msie) || u.match(chrome) || u.match(firefox) || u.match(safari) || u.match(opera) || u.match(ie11);
			return {
				name: b[1],
				version: parseInt(b[2])
			};
		},
		//提交鎴愬姛鍚庢暟鎹垵濮嬪寲
		copyFormData: function(phone, square, shen, city) {
			//鍙戞爣淇℃伅榛樿濉叆tab椤�
			jq('.tender-pop-main').find('input[name="phone"]').val(phone).siblings('.tender-form-font').hide();
			if(square) {
				jq('.tender-pop-main').find('input[name="square"]').val(square).siblings('.tender-form-font').hide();
				jq('.tender-pop-main').find('input[name="square"]').trigger('keyup');
			};

			jq('.price-font').html('杈撳叆鎵嬫満鍙凤紝鑾峰彇棰勭畻鏄庣粏');
			jq('.company-font').html('杈撳叆鎵嬫満鍙凤紝鎵鹃檮杩戠儹闂ㄨ淇叕鍙�');
			jq('.material-font').html('杈撳叆鎵嬫満鍙凤紝鑾峰彇鏉愭枡娓呭崟鏄庣粏');

			var gpm0 = new GlobalProvincesModule; //鍩庡競绫�
			gpm0.def_province = ["省/市", ""];
			gpm0.def_city1 = ["市/地区", ""];
			gpm0.def_city2 = ["鍘�/甯�", ""];
			gpm0.initProvince($('priceShen'));
			$('priceShen').value = shen;
			gpm0.initCity1($('priceCity'), gpm0.getSelValue($('priceShen')));
			$('priceCity').value = city;
			gpm0.initCity2($('priceTown'), gpm0.getSelValue($('priceShen')), gpm0.getSelValue($('priceCity')));

			var gpm1 = new GlobalProvincesModule; //鍩庡競绫�
			gpm1.def_province = ["省/市", ""];
			gpm1.def_city1 = ["市/地区", ""];
			gpm1.def_city2 = ["鍘�/甯�", ""];
			gpm1.initProvince($('designShen'));
			$('designShen').value = shen;
			gpm1.initCity1($('designCity'), gpm1.getSelValue($('designShen')));
			$('designCity').value = city;
			gpm1.initCity2($('designTown'), gpm1.getSelValue($('designShen')), gpm1.getSelValue($('designCity')));

			var gpm2 = new GlobalProvincesModule; //鍩庡競绫�
			gpm2.def_province = ["省/市", ""];
			gpm2.def_city1 = ["市/地区", ""];
			gpm2.def_city2 = ["鍘�/甯�", ""];
			gpm2.initProvince($('companyShen'));
			$('companyShen').value = shen;
			gpm2.initCity1($('companyCity'), gpm2.getSelValue($('companyShen')));
			$('companyCity').value = city;
			gpm2.initCity2($('companyTown'), gpm2.getSelValue($('companyShen')), gpm2.getSelValue($('companyCity')));

			var gpm3 = new GlobalProvincesModule; //鍩庡競绫�
			gpm3.def_province = ["省/市", ""];
			gpm3.def_city1 = ["市/地区", ""];
			gpm3.def_city2 = ["鍘�/甯�", ""];
			gpm3.initProvince($('materialShen'));
			$('materialShen').value = shen;
			gpm3.initCity1($('materialCity'), gpm3.getSelValue($('materialShen')));
			$('materialCity').value = city;
			gpm3.initCity2($('materialTown'), gpm3.getSelValue($('materialShen')), gpm3.getSelValue($('materialCity')));
		},
		//缁撴灉鎬� 璺熻繘瀵瑰簲鐨勫煄甯傚鐞�
		fruit_dispose: function(city) {
			var city_name = '';
			var sheng_name = '';
			var city_Obj = CommonTenderPop.options.wechat_city;
			var sheng_array = ['骞夸笢', '瀹夊窘', '姹熻嫃', '婀栧寳', '婀栧崡'];
			if(city.length > 0) { //浼犲叆浜嗗煄甯傚垯鐢ㄤ紶鍏ョ殑鍩庡競淇℃伅
				var city_name = city;
				if(city == '娣卞湷') {
					sheng_name = '骞夸笢';
				}
				if(city == '涓滆帪') {
					sheng_name = '骞夸笢';
				}
			} else {
				city_name = jq('#priceCity').val();
				sheng_name = jq('#priceShen').val();
			}

			if(sheng_array.join().indexOf(sheng_name) >= 0 && city_Obj[city_name]) {
				jq('.tender-price-ad').hide();
				var self = this;
				self.pop_an_arrow('.pre-pop-fruit-show-arrow', '180px', '190px'); //宸﹀彸绠ご鍔ㄧ敾
				// 娣卞湷涓滆帪鍒濆鎬佸井淇″紩瀵�
				var str2 = '<div class="pop-weixin2-consult">' +
					'<p class="zxbj-weixin2-point">鎶ヤ环鐭俊宸插彂閫佸埌鎮ㄧ殑鎵嬫満锛岃娉ㄦ剰鏌ユ敹锛�</p>' +
					'<p class="attention2 holiday-text"><b>*</b>绋嶅€欒淇瀹跺皢鍥炵數鎮紝鍏嶈垂鎻愪緵瑁呬慨鍜ㄨ鏈嶅姟</p>' +
					'<div class="zxbj-weixin2-fruit-box">' +
					'<div class="weixin2-fruit-bg"></div>' +
					'<p class="weixin2-fruit-title1">瑁呬慨鎬曚笂褰擄紵闂棶闈犺氨鐨勪汉</p>' +
					'<div class="weixin2-fruit-show">' +
					'<div class="fruit-show-left">' +
					'<div class="fruit-show-portrait"></div>' +
					'<p class="fruit-show-p1"><span class="fruit-show-p1-city">瑁呬慨椤鹃棶 </span><span class="fruit-show-p1-name">鍦熷反元-棣ㄩΘ</span></p>' +
					'<p class="fruit-show-p2">锛堝洓骞磋淇涓氱粡楠岋級</p>' +
					'<em class="pop-fruit-show-arrow"></em>' +
					'</div>' +
					'<div class="fruit-show-right">' +
					'<div class="fruit-show-code"></div>' +
					'<div class="fruit-show-code1"><img src="" class="fruit-show-code1-img"></div>' +
					'<p class="fruit-show-p3">寰俊鎵竴鎵� 鍔犲ソ鍙�<em class="zxbj-wx-icon"></em></p>' +
					'</div>' +
					'</div>' +
					'<p class="weixin2-fruit-title2"><span class="fruit-title2-fff000">24灏忔椂鍜ㄨ</span>浠讳綍瑁呬慨鐤戦棶锛屾洿鏈�<span class="fruit-title2-b">10000濂�</span>绮惧搧瑁呬慨妗堜緥</p>' +
					'</div>' +
					'<div class="pop-wechat-ad">' +
					'<a href="javascript:void(0);"><img src=""></a>' +
					'<p>骞垮憡</p>' +
					'</div>' +
					'</div>';
				if(self.options.fabiao_falg || CommonTenderPop.options.fabiao_falg) {
					jq('.pop-weixin2-consult').remove();
					jq('.add-weixin-html .tender-pop-right').find('div,h6').show();
					jq('.add-weixin-html .tender-pop-right').css('width', '470px');

					jq('.tender-price-result').css('padding', '40px 0');
					jq('.add-weixin-html .tender-pop-right').find('div,h6').hide();
					//鏁堟灉鍥�
					if(jq('.tender-pop-showImg').length >= 1 || jq('.newbj-calcBn').length >= 1) {
						jq('.add-weixin-html .tender-pop-right').find('div,h6,p,.newbj-result-jpg').remove();
					};
					jq('.add-weixin-html .tender-pop-right').css('width', '430px').append(str2); //娣卞湷 涓滆帪鍙戞爣缁撴瀯鎬佹彃元
					jq('.pop-weixin2-consult .fruit-show-code,.pop-weixin2-consult .fruit-show-code1').hide();
					if(city_name == '娣卞湷') { //鍙戞爣鍚庝笢鑾炴繁鍦充笉鍚岀殑灞曠ず
						//鏄剧ず娣卞湷浜岀淮鐮�
						jq('.pop-weixin2-consult .fruit-show-code').show();
						jq('.pop-weixin2-consult .fruit-show-p1-name').text('鍦熷反元-棣ㄩΘ');
						jq('.pop-weixin2-consult .fruit-show-p1-city').text('瑁呬慨椤鹃棶 ');
						jq('.pop-weixin2-consult').show();
					} else if(city_name == '涓滆帪') {
						//鏄剧ず涓滆帪浜岀淮鐮�
						jq('.pop-weixin2-consult .fruit-show-code').show();
						jq('.pop-weixin2-consult').addClass('pop-weixin2-consult-dg'); //涓滆帪浜岀淮鐮�
						jq('.pop-weixin2-consult .fruit-show-p1-name').text('鍦熷反元-钃夎搲');
						jq('.pop-weixin2-consult .fruit-show-p1-city').text('瑁呬慨椤鹃棶 ');
						jq('.pop-weixin2-consult').show();
					} else if(city_Obj[city_name]) {
						jq('.pop-weixin2-consult .fruit-show-p1-name').text('鍦熷反元-棣ㄩΘ');
						jq('.pop-weixin2-consult .fruit-show-p1-city').text('瑁呬慨椤鹃棶 ');
						// 鏄剧ず鐩稿簲鍩庡競鐨勪簩缁寸爜
						jq('.fruit-show-code1-img').attr('src', city_Obj[city_name]).parent('div').show();
						jq('.pop-weixin2-consult').show();
					};
					self.pop_an_arrow('.pop-weixin2-consult .pop-fruit-show-arrow', '113px', '93px'); //宸﹀彸绠ご鍔ㄧ敾
					CommonTenderPop.addHotad(CommonTenderPop.options.hotad_res, true, city_name); // 澶勭悊甯﹀井淇″皬鍙风殑骞垮憡鐑偣
				} else {
					//鏁堟灉鍥捐鎯呴〉
					if(jq('.newbj-calcBn').length >= 1) {
						CommonTenderPop.addHotad(CommonTenderPop.options.hotad_res, false, city_name);
						return false;
					};
					jq('.pop-weixin-consult').remove(); //鍒濆鍖栬鏀瑰彉鐨勭粨鏋滄€�
				}
			} else {
				jq('.pop-element').parent().removeClass('pop-specialcity').children('.pop-label').html('<em class="pop-label-start">*</em>手机号码');
				jq('.tender-price-ad').show();
				//鏁堟灉鍥捐鎯呴〉
				if(jq('.newbj-calcBn').length >= 1) {
					CommonTenderPop.addHotad(CommonTenderPop.options.hotad_res, false, city_name);
					return false;
				};
				jq('.pop-weixin-consult').remove(); //鍒濆鍖栬鏀瑰彉鐨勭粨鏋滄€�
				jq('.pop-weixin2-consult').remove();
				jq('.add-weixin-html .tender-pop-right').find('div,h6').show();
				jq('.add-weixin-html .tender-pop-right').css('width', '470px');
				CommonTenderPop.addHotad(CommonTenderPop.options.hotad_res, false, city_name); // 澶勭悊涓嶅甫寰俊灏忓彿鐨勫箍鍛婄儹鐐�
			}
		},
		//绠ご鍔ㄧ敾
		pop_an_arrow: function(target, start, end, self) {
			var self = this;
			jq(target).animate({
				'left': start
			}, 500, function() {
				jq(target).animate({
					'left': end
				}, 500, function() {
					self.pop_an_arrow(target, start, end, self);
				});
			});
		},
		choose_wechat: function() {
			// 缁戝畾鍏充簬寰俊寮曞鐨勭浉鍏充簨浠�
			// 娣卞湷涓滆帪鍩庡競鍙€夋姤浠风粨鏋滄帶鍒�
			jq('.pop-choosebjway li').on('click', function() {
				jq(this).addClass('pop-blueradio').siblings().removeClass('pop-blueradio');
				var index = jq(this).index();
				jq(this).parents('.pop-element').children('div').eq(index).show().siblings('div').hide();
				if(index == 1) {
					jq('.tender-calc-btn').addClass('pop-calc-disabled');
				} else {
					jq('.tender-calc-btn').removeClass('pop-calc-disabled');
				}
			});
			jq('.tender-pop-mfbj').on('click', '.pop-calc-disabled', function() {
				return false;
			});
		},
		// 娣诲姞鐑偣骞垮憡
		addHotad: function(res, wechat, city) {
			jq('.tender-pop-mfbj.tender-pop-right').removeClass('hotad-contain');
			jq('.pop-weixin2-consult').removeClass('pop-weixin2-hotad');
			if(res) {
				var area = parseFloat(jq('#priceSquare').val()),
					presUrl = location.href.toLowerCase();
				res = res.data ? res.data[4] : '';
				if(res && res.minArea <= area && area <= res.maxArea && res.img_src && res.img_src.search(/\.(?:(?:jpg)|(?:jpeg)|(?:gif)|(?:swf)|(?:png)|(?:bmp))(?:\?[=\w\d]*)?$/) >= 0 && (res.usedcityname ? res.usedcityname.indexOf(city) > -1 : !0) && CommonTenderPop.options.fabiao_falg) {
					jq('.tender-pop-mfbj.tender-pop-right').addClass('hotad-contain');
					jq('.pop-result-hotad img,.pop-wechat-ad img').attr('src', res.img_src);
					jq('.pop-result-hotad a,.pop-wechat-ad a').attr('href', res.url).data('ptag', res.ptag);
					jq('.tender-pop-title,.price-result-title').css('font-weight', 'normal');
					if(wechat) {
						CommonTenderPop.options.repeat_calc = true;
						jq('.pop-wechat-hotad').show();
						jq('#tenderPrice').hide();
						jq('.pop-weixin2-consult').addClass('pop-weixin2-hotad');
						// 鍘婚櫎宸︿晶澶撮儴
						jq('.tender-pop-mfbj.tender-pop-left .tender-pop-title,.tender-pop-applypeople').hide();
						jq('.pop-wechat-hotad').css('margin-top', '90px');

						// 鏁堟灉鍥惧垪琛ㄩ〉涓庤鎯呴〉
						if(presUrl.search(/xiaoguotu\.to8to\.com\/([cp]\d+|meitu|tuce)?\/?/) >= 0 && (CommonTenderPop.options.showResult || CommonTenderPop.options.showXGTImg)) {
							jq('.tender-pop-mfbj.tender-pop-right').css('margin-left', '0');
						}
						if(presUrl.search(/xiaoguotu\.to8to\.com\/[cp]\d+/) >= 0 && (CommonTenderPop.options.showResult || CommonTenderPop.options.showXGTImg)) {
							CommonTenderPop.fillLeft();
						}
					} else {
						jq('.tender-price-ad').hide();
						jq('.price-result-title').text('您家的装修预算约：');
						jq('.pop-hotad-result').find('p').eq(0).text('* 报价有疑问？稍后装修管家将致电为您解答').end().eq(1).html('* 该报价为毛坯半包价，实际装修报价以量房实测为准');
						// 鏁堟灉鍥惧垪琛ㄩ〉涓庤鎯呴〉
						if(presUrl.search(/xiaoguotu\.to8to\.com\/([cp]\d+|meitu|tuce)?\/?/) >= 0 && (CommonTenderPop.options.showResult || CommonTenderPop.options.showXGTImg)) {
							jq('.pop-wechat-hotad').show();
							jq('#priceBtn').hide();
							jq('.tender-pop-mfbj.tender-pop-left .tender-pop-title').hide();
							jq('.tender-pop-applypeople').css('margin-top', '80px');
						}
						if(presUrl.search(/xiaoguotu\.to8to\.com\/[cp]\d+/) >= 0 && (CommonTenderPop.options.showResult || CommonTenderPop.options.showXGTImg)) {
							CommonTenderPop.fillLeft();
						}
					};
				} else if(CommonTenderPop.options.fabiao_falg) {
					CommonTenderPop.moreInfo(wechat);
				}
				jq('.pop-result-hotad a,.pop-wechat-ad a').on('click', function() {
					var ptag = jq('.pop-result-hotad a').data('ptag');
					if(getCookie(ptag) != ptag) {
						setCookie(ptag, ptag, 1000 * 60 * 60 * 24);
						(typeof clickStream !== 'undefined') && clickStream.getCvParams(ptag);
					}
				});
			} else if(CommonTenderPop.options.fabiao_falg) {
				CommonTenderPop.moreInfo(wechat);
			}
		},
		// 鑾峰彇鐑偣鏁版嵁
		gethotad: function() {
			if(typeof CommonTenderPop.options.hotad_res != 'object') {
				CommonTenderPop.options.hotad_res = null;
				jq.ajax({
					url: "http://www.to8to.com/api/httpgethot.php?hotid=791&jsonp=ok",
					type: "GET",
					dataType: "jsonp",
					jsonpCallback: "jsonpCallback",
					success: function(res) {
						// 杩斿洖鐨勭儹鐐�
						CommonTenderPop.options.hotad_res = res;
					}
				});
			}
		},
		// 瀹℃牳鏍峰紡
		moreInfo: function(wecaht) {
			var presUrl = location.href.toLowerCase();
			jq('.tender-pop-mfbj.tender-pop-left.tender-video').hide();
			if(jq('.tender-pop-right.tender-pop-mfbj').length > 1) {
				jq('.tender-pop-right.tender-pop-mfbj').eq(0).siblings('.tender-pop-right.tender-pop-mfbj').hide();
			}
			CommonTenderPop.options.check_upload = false;
			jq('.add-weixin-html').addClass('pop-check-frame');
			var info_str = '<div class="pop-check-info">' +
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
				'<p>请选择您家的房屋现状</p>' +
				'</div>' +
				'</div>';
			if(jq('.pop-check-info').length < 1) {
				jq('.pop-check-frame').append(info_str);
			}
			if(wecaht) {
				jq('.zxbj-weixin2-point').text('鎶ヤ环鐭俊宸插彂閫佸埌鎮ㄧ殑鎵嬫満');
				jq('.pop-weixin2-consult .attention2.holiday-text').text('绋嶅悗瑁呬慨绠″灏嗗洖鐢垫偍锛屽厤璐规彁渚涜淇挩璇㈡湇鍔�');
				jq('.pop-check-frame .tender-pop-right').css({
					'margin-left': '36px',
					'padding-right': '30px'
				});
				// 鏁堟灉鍥炬牱寮�
				if(presUrl.search(/xiaoguotu\.to8to\.com\/([cp]\d+)\/?/) >= 0 && (CommonTenderPop.options.showResult || CommonTenderPop.options.showXGTImg)) {
					jq('.pop-check-frame .tender-pop-right').css({
						'margin-left': '7px',
						'padding-right': '7px'
					});
					jq('.pop-check-frame .pop-check-info').css({
						'margin-left': '58px',
						'margin-top': '74px'
					});
					jq('.pop-check-info h3').css('font-weight', 'normal');
					jq('.pop-check-frame .pop-weixin2-consult').css({
						'margin-top': '74px'
					});
					jq('.pop-check-frame .tender-pop-right').css('border-right', '1px solid #E8E8E8');
				}
			} else {
				jq('.price-result-title').text('您家的装修预算约：');
				jq('.tender-price-ad').html('<p><span class="holiday-text">* 报价有疑问？稍后装修管家将致电为您解答</span></p><p>* 该报价为毛坯半包价，实际装修报价以量房实测为准</p>');
				// 鏁堟灉鍥炬牱寮�
				if(presUrl.search(/xiaoguotu\.to8to\.com\/([cp]\d+)\/?/) >= 0 && (CommonTenderPop.options.showResult || CommonTenderPop.options.showXGTImg)) {
					jq('.pop-check-frame .pop-check-info').css('margin-left', '32px');
					jq('.pop-check-info h3').css('font-weight', 'normal');
					jq('.pop-check-frame .tender-pop-right .littlefont').css({
						'padding-top': '51px',
						'fong-weight': 'normal'
					}).next('div').css('margin-top', '0');
					jq('.pop-check-frame .tender-price-ad').css('margin-left', '72px');
					jq('.newbj-result-server').css('margin-top', '34px');
				}
				// 鏁堟灉鍥惧垪琛ㄩ〉/棣栭〉
				if(presUrl.search(/xiaoguotu\.to8to\.com\/(meitu|tuce)?\/?/) >= 0 && (CommonTenderPop.options.showResult || CommonTenderPop.options.showXGTImg)) {
					jq('.tender-pop-title.littlefont').css('margin-top', '95px');
					jq('.pop-check-frame .tender-price-ad').css('margin-left', '72px');
					if(presUrl.search(/xiaoguotu\.to8to\.com\/([cp]\d+)\/?/) >= 0 && (CommonTenderPop.options.showResult || CommonTenderPop.options.showXGTImg)) {
						jq('.tender-pop-title.littlefont').css('margin-top', '35px');
						jq('.pop-check-info').css('margin-top', '74px');
						jq('.pop-check-frame .tender-pop-right').css('border-right', '1px solid #E8E8E8');
					}
				}
			}
			// 閫夋嫨淇℃伅浜嬩欢
			jq('.pop-check-info .check-house,.pop-check-info .check-time').on('click', function() {
				if(jq(this).hasClass('check-house')) {
					CommonTenderPop.options.check_info.housetype = jq(this).find('input[type=hidden]').val();
				}
				if(jq(this).hasClass('check-time')) {
					CommonTenderPop.options.check_info.zxtime = jq(this).find('input[type=hidden]').val();
				}
				jq(this).addClass('on').siblings().removeClass('on');
			});
			// 提交瀹℃牳淇℃伅
			jq('.pop-check-info .check-upload').on('click', function(e) {
				e.stopPropagation();
				if(CommonTenderPop.options.check_repeat) {
					return;
				}
				// 楠岃瘉淇℃伅
				if(CommonTenderPop.vericheck()) {
					CommonTenderPop.options.check_repeat = true;
					// 提交淇℃伅锛岀疆宸叉彁浜わ紝鐐瑰嚮鍘婚噸
					CommonTenderPop.uploadcheckinfo();
				}
				// 鍏抽棴椤甸潰鎴栧叧闂脊绐楁彁浜や俊鎭�
				setTimeout(function() {
					window.oldun = window.onbeforeunload ? window.onbeforeunload : null; // 淇濆瓨鍘熸潵鐨勫姩浣�
					window.onbeforeunload = function() {
						oldun ? oldun() : !1;
						if(!CommonTenderPop.options.check_upload && (jq('.pop-check-info .check-house.on').length > 0 || jq('.pop-check-info .check-time.on').length > 0 || jq('.pop-check-info .plot-name').find('input').val().length > 0)) {
							CommonTenderPop.uploadcheckinfo(true);
						}
					}
				}, 3000);
			});
		},
		// 楠岃瘉瀹℃牳淇℃伅
//		vericheck: function() {
//			clearTimeout(CommonTenderPop.options.check_verify);
//			if(jq('.pop-check-info .house-type').find('.on').length == 0) {
//				jq('.pop-check-info .complate-form').find('p').text('璇烽€夋嫨鎮ㄥ鐨勬埧灞嬬幇鐘�').end().fadeIn(300);
//				CommonTenderPop.options.check_verify = setTimeout(function() {
//					jq('.pop-check-info .complate-form').fadeOut(300);
//				}, 700);
//				return !1;
//			};
//			if(jq('.pop-check-info .decorate-time').find('.on').length == 0) {
//				jq('.pop-check-info .complate-form').find('p').text('请选择您家的房屋现状').end().fadeIn(300);
//				CommonTenderPop.options.check_verify = setTimeout(function() {
//					jq('.pop-check-info .complate-form').fadeOut(300);
//				}, 700);
//				return !1;
//			};
//			if(jq('.pop-check-info .plot-name input').val().length == 0) {
//				jq('.pop-check-info .complate-form').find('p').text('璇峰～鍐欏皬鍖哄悕绉�').end().fadeIn(300);
//				CommonTenderPop.options.check_verify = setTimeout(function() {
//					jq('.pop-check-info .complate-form').fadeOut(300);
//				}, 700);
//				return !1;
//			};
//			return !0;
//		},
		// 提交瀹℃牳淇℃伅
		uploadcheckinfo: function(autopop) {
			var uuid = CommonTenderPop.createGuid(),
				enc = jq.md5(uuid + CommonTenderPop.options.check_info.phone),
				data_p = "tyid=" + CommonTenderPop.options.check_info.tmpYid + "&uuid=" + uuid + "&enc=" + enc + "&modeltype=1&invite=2&nowstep=2";
			if(CommonTenderPop.options.check_info.housetype) {
				data_p = data_p + '&demo=' + CommonTenderPop.options.check_info.housetype + '銆�' + CommonTenderPop.options.check_info.demo;
				if(!(typeof getCookie('checkinfo_ptag') == 'string' && getCookie('checkinfo_ptag').search('9') > -1)) {
					(typeof clickStream !== 'undefined') && clickStream.getCvParams('1_1_20_2063');
					setCookie('checkinfo_ptag', getCookie('checkinfo_ptag') + '9', 1 * 24 * 60 * 60);
				}
			} else {
				data_p = data_p + '&demo=' + CommonTenderPop.options.check_info.demo;
			};
			if(CommonTenderPop.options.check_info.zxtime) {
				data_p = data_p + '&zxtime=' + CommonTenderPop.options.check_info.zxtime;
				if(!(typeof getCookie('checkinfo_ptag') == 'string' && getCookie('checkinfo_ptag').search('A') > -1)) {
					(typeof clickStream !== 'undefined') && clickStream.getCvParams('1_1_20_2064');
					setCookie('checkinfo_ptag', getCookie('checkinfo_ptag') + 'A', 1 * 24 * 60 * 60);
				}
			};
			if(jq('.pop-check-info .plot-name input').val().length > 0) {
				data_p = data_p + '&address=' + jq('.pop-check-info .plot-name input').val();
				if(!(typeof getCookie('checkinfo_ptag') == 'string' && getCookie('checkinfo_ptag').search('B') > -1)) {
					(typeof clickStream !== 'undefined') && clickStream.getCvParams('1_1_20_2065');
					setCookie('checkinfo_ptag', getCookie('checkinfo_ptag') + 'B', 1 * 24 * 60 * 60);
				}
			};
			jq.ajax({
				type: "GET",
				url: '//to8tozb.to8to.com/zb/zb-index-get.php',
				dataType: "jsonp", //鏁版嵁绫诲瀷涓簀sonp
				jsonpCallback: "jsonpCallback", //鏈嶅姟绔敤浜庢帴鏀禼allback璋冪敤鐨刦unction鍚嶇殑鍙傛暟
				data: data_p,
				success: function(ret) {
					CommonTenderPop.options.check_upload = true; // 宸叉彁浜よ繃
					if(!autopop) {
						var ups_pop = '<div class="check_pop_succ">' +
							'<div class="check_grey_layer"></div>' +
							'<div class="check_pop_tip">' +
							'<div class="check_pop_img"></div>' +
							'<p class="check_pop_text">提交鎴愬姛</p>' +
							'<p class="check_pop_recall">绋嶅悗瑁呬慨绠″灏嗕互<span>0755</span>寮€澶寸殑鍙风爜</p>' +
							'<p class="check_pop_recall">涓庢偍鑱旂郴,璇锋敞鎰忔帴鍚€�</p>' +
							'<a href="javascript:void(0);" class="close_check_pop">鐭ラ亾浜�</a>' +
							'</div>' +
							'</div>';
						jq('body').append(ups_pop);
						jq('.check_pop_tip').css('left', (jq(window).width() - jq('.check_pop_tip').width()) / 2);
						if((typeof isGroundCity != 'undefined') && isGroundCity(-1, CommonTenderPop.options.check_info.city)) {
							// 钀藉湴鍩庡競 鏀规枃妗�
							jq('.check_pop_tip').find('.check_pop_recall').eq(0).html('绋嶅悗瑁呬慨绠″灏嗚嚧鐢垫偍锛屼负鎮ㄦ彁').end().eq(1).text('渚涘厤璐硅淇挩璇㈡湇鍔°€�');
						}
						jq('.check_pop_succ').show();
						// 鍏抽棴寮圭獥
						jq('body').on('click', '.check_grey_layer,.close_check_pop', function(e) {
							e.stopPropagation();
							jq('.check_pop_succ').remove();
						});
						jq('.pop-check-info .check-upload').text('提交鎴愬姛').css('background-color', '#d8d8d8').off('click');
					}
				}
			});
		},
		createGuid: function() {
			for(var a = "", c = 1; 32 >= c; c++) {
				var b = Math.floor(16 * Math.random()).toString(16),
					a = a + b;
				if(8 == c || 12 == c || 16 == c || 20 == c) a += ""
			}
			return this.guid = a += Math.ceil(1E6 * Math.random())
		},
		// 濉厖鏁堟灉鍥捐鎯呴〉宸︿晶鎶ヤ环缁撴灉鎬�
		fillLeft: function() {
			var str = '<div class="pop-wechat-hotad">' +
				'<div class="wechat-img"></div>' +
				'<p class="wechat-message">鎶ヤ环鐭俊宸插彂閫佸埌鎮ㄧ殑鎵嬫満</p>' +
				'<p class="wechat-text">鍥犳潗鏂欏搧鐗屽強宸ョ▼閲忎笉鍚岋紝鍏蜂綋鎶ヤ环浠ラ噺鎴垮疄娴嬩负鍑�</p>' +
				'<p class="wechat-recall">绋嶅€欒淇瀹跺皢鍥炵數鎮紝鍏嶈垂鎻愪緵瑁呬慨鍜ㄨ鏈嶅姟</p>' +
				'</div>';
			jq('.tender-pop-mfbj.tender-pop-left').html(str);
			jq('.pop-wechat-hotad').css('margin-top', '90px').show();
		},
		rangeRandom: function(minnum, maxnum) {
			return Math.floor(minnum + Math.random() * (maxnum - minnum + 1));
		},
		randomNumber: function(time) {
			jq('.tender-title-text').text('元');
			var self = this;
			self.options.randomObj = setInterval(function() {
				var clf;
				var rgf;
				var sjf;
				var zjf;
				var zbj;
				if(self.options.showXGTImg) {
					jq('#priceTotal').text(Math.ceil(Math.random() * 190000 + 10000));
				} else {
					clf = self.rangeRandom(10000, 99999);
					rgf = self.rangeRandom(10000, 99999);
					sjf = self.rangeRandom(1000, 10000);
					zjf = self.rangeRandom(500, 5000);
					zbj = clf + rgf + sjf + zjf;
					jq('#priceTotal').text(zbj);
					jq('#priceMterials em').text(clf);
					jq('#priceArtificial em').text(rgf);
					jq('#priceDesign em').text(sjf);
					jq('#priceQuality em').text(zjf);
				}
			}, time);
		},
		isIE: function() {
			var agent = navigator.userAgent;
			if(typeof self.isIE.ieanimate !== "undefined") {
				return self.isIE.ieanimate;
			}
			if(/msie\s[679]\.0/i.test(agent) || (/msie\s8\.0/i.test(agent) && !window.innerwidth)) {
				//  IE 6789
				self.isIE.ieanimate = true;
				return true;
			} else {
				self.isIE.ieanimate = false;
				return false;
			}
		}
	};
})()