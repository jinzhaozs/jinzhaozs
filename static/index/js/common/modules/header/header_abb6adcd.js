/******/
(function(modules) { // webpackBootstrap
	/******/ // The module cache
	/******/
	var installedModules = {};
	/******/
	/******/ // The require function
	/******/
	function __webpack_require__(moduleId) {
		/******/
		/******/ // Check if module is in cache
		/******/
		if(installedModules[moduleId]) {
			/******/
			return installedModules[moduleId].exports;
			/******/
		}
		/******/ // Create a new module (and put it into the cache)
		/******/
		var module = installedModules[moduleId] = {
			/******/
			i: moduleId,
			/******/
			l: false,
			/******/
			exports: {}
			/******/
		};
		/******/
		/******/ // Execute the module function
		/******/
		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
		/******/
		/******/ // Flag the module as loaded
		/******/
		module.l = true;
		/******/
		/******/ // Return the exports of the module
		/******/
		return module.exports;
		/******/
	}
	/******/
	/******/
	/******/ // expose the modules object (__webpack_modules__)
	/******/
	__webpack_require__.m = modules;
	/******/
	/******/ // expose the module cache
	/******/
	__webpack_require__.c = installedModules;
	/******/
	/******/ // identity function for calling harmony imports with the correct context
	/******/
	__webpack_require__.i = function(value) {
		return value;
	};
	/******/
	/******/ // define getter function for harmony exports
	/******/
	__webpack_require__.d = function(exports, name, getter) {
		/******/
		if(!__webpack_require__.o(exports, name)) {
			/******/
			Object.defineProperty(exports, name, {
				/******/
				configurable: false,
				/******/
				enumerable: true,
				/******/
				get: getter
				/******/
			});
			/******/
		}
		/******/
	};
	/******/
	/******/ // getDefaultExport function for compatibility with non-harmony modules
	/******/
	__webpack_require__.n = function(module) {
		/******/
		var getter = module && module.__esModule ?
			/******/
			function getDefault() {
				return module['default'];
			} :
			/******/
			function getModuleExports() {
				return module;
			};
		/******/
		__webpack_require__.d(getter, 'a', getter);
		/******/
		return getter;
		/******/
	};
	/******/
	/******/ // Object.prototype.hasOwnProperty.call
	/******/
	__webpack_require__.o = function(object, property) {
		return Object.prototype.hasOwnProperty.call(object, property);
	};
	/******/
	/******/ // __webpack_public_path__
	/******/
	__webpack_require__.p = "http://assets.to8to.com/to8to_pc/";
	/******/
	/******/ // Load entry module and return exports
	/******/
	return __webpack_require__(__webpack_require__.s = "+DAY");
	/******/
})
/************************************************************************/
/******/
({

	/***/
	"+DAY":
		/***/
		(function(module, exports, __webpack_require__) {

			(function(root, factory) {
				if(true) {
					__webpack_require__("Jt9K");
					__webpack_require__("N94b");
					__webpack_require__("hKoQ").polyfill();
					module.exports = factory(__webpack_require__(0));
				} else if(typeof define === 'function' && define.cmd) {
					// 鍏煎seajs cmd,娌℃湁鏆撮湶exports鍒板叏灞€
					define(function(require, exports, module) {
						return factory(require('jquery'));
					});
				} else if(typeof define === 'function' && define.amd) {
					define(['jQuery'], function($) {
						return factory($);
					});
				} else {
					root.Header = factory(jQuery);
				}
			})(this, function($) {
				var Aser = __webpack_require__("12dl"),
					Cookie = Aser.Cookie,
					T8tCommon = __webpack_require__(1),
//					data = T8tCommon.dataSave(),
					setcity_data = '', //鍩庡競淇℃伅
					gain_data = null, //鍩庡競瀵瑰簲鐨� 鍖哄煙绛夋暟鎹�
					username = Cookie.get('to8to_username'), //鑾峰彇uid 韬唤
					cityScriptUrl = 'http://www.to8to.com/get_city_name.php', // 寮傛鎴栧彇鍩庡競淇℃伅api
					hostname = location.hostname, //鍩庡競淇℃伅- 鐩稿叧        
					expires = 7776000000,
					input_blur = false, //鏍囪瘑
					secondary = hostname.substr(0, hostname.indexOf('.')), //閾炬帴涓婄殑鍩庡競淇℃伅
					_html = '', //鍒囨崲鍩庡競
					_html_list = '<div class="city-option-ul-box city-option-manage"><ul class="clearfix">',
					_html_more = '<div class="city-option-ul-box"><ul class="clearfix"><li><a href="http://www.to8to.com/index.html" class="city-option-a-more" rel="nofollow">鏇村&nbsp;></a></li></ul></div>',
					i = 0,
					_html_class = "",
					_html_shi = "甯�",
					html_li = '',
					searchclicktage = '',
					TypeSearch = '',
					_ul = $('.nav-content-list'),
					hover_ani = null,
					li_on = $('.nav-content-list li.on'),
					cityId = Cookie.get('to8to_townid', {}),
					cityCode = Cookie.get('to8to_tcode', {}),
					cityName = Cookie.get('to8to_tname', {});
//				document.domain = "to8to.com";

				/*
				 * JSON.parse  JSON.string  IE8浠ヤ笅鍏煎
				 */
				if(!window.JSON) {
					window.JSON = {
						parse: function(jsonStr) {
							return eval('(' + jsonStr + ')');
						},
						stringify: function(jsonObj) {
							var result = '',
								curVal;
							if(jsonObj === null) {
								return String(jsonObj);
							}
							switch(typeof jsonObj) {
								case 'number':
								case 'boolean':
									return String(jsonObj);
								case 'string':
									return '"' + jsonObj + '"';
								case 'undefined':
								case 'function':
									return undefined;
							}

							switch(Object.prototype.toString.call(jsonObj)) {
								case '[object Array]':
									result += '[';
									for(var i = 0, len = jsonObj.length; i < len; i++) {
										curVal = JSON.stringify(jsonObj[i]);
										result += (curVal === undefined ? null : curVal) + ",";
									}
									if(result !== '[') {
										result = result.slice(0, -1);
									}
									result += ']';
									return result;
								case '[object Date]':
									return '"' + (jsonObj.toJSON ? jsonObj.toJSON() : jsonObj.toString()) + '"';
								case '[object RegExp]':
									return "{}";
								case '[object Object]':
									result += '{';
									for(i in jsonObj) {
										if(jsonObj.hasOwnProperty(i)) {
											curVal = JSON.stringify(jsonObj[i]);
											if(curVal !== undefined) {
												result += '"' + i + '":' + curVal + ',';
											}
										}
									}
									if(result !== '{') {
										result = result.slice(0, -1);
									}
									result += '}';
									return result;

								case '[object String]':
									return '"' + jsonObj.toString() + '"';
								case '[object Number]':
								case '[object Boolean]':
									return jsonObj.toString();
							}
						}
					};
				}

				//缁戝畾浜嬩欢
				headerEvent();

				// 鏈夊煄甯� cityid cookie && 涓庡墠涓€涓煄甯傚姣旀病鏈夊垏鎹㈠煄甯� && 鏈夋湰鍦版暟鎹�
				if(cityId && whetherRequest() && data.get('cityData')) {
					setCityCookie();
				} else {
//					getCityData(urlType() ? secondary : cityCode);
				}

				//鏍规嵁鍩庡競绔欎俊鎭垵濮嬪寲鏄剧ず闅愯棌涓€绾т簩绾у鑸」
				if(cityId) {
					T8tCommon.isGroundCity(cityId, function(result) {
						if(!result) {
							$('.not-ground-city').hide();
							$('.nav-hover-more .nav-type-box').addClass('for-not-ground');
						};
					});
				};

				//鍒ゆ柇鏄惁鏈夊垏鎹㈠煄甯� hover缁撴瀯
				if($('.city-option-box').length < 1) {
					optionCity(); //鎻掑叆鍒囨崲鍩庡競缁撴瀯
				}

				//鍏ュ彛
				function headerEvent() {
					initCity();
					navEvent();
					if(typeof(username) != 'undefined' && username != "" && username != "deleted") {
						createUserNav();
					};
					initNavSearch();
				}

				//鍒濆鍖栨悳绱㈡
				function initNavSearch() {
					var cur_sch_text = $('.search-select-list .list-now').text();
					cur_sch_text = cur_sch_text === undefined || cur_sch_text == "" ? '瑁呬慨鍏徃' : cur_sch_text;
					initsearch(cur_sch_text);
				}

				//缁戝畾鐨勪竴浜涚偣鍑讳簨浠�
				function navEvent() {
					//鎼滅储妗� 鑱氱劍浜嬩欢 澶辩劍浜嬩欢
					$('.nav-content-search-center').on('click', function(e) {
						e.stopPropagation();
						$('.nav-content-center').hide();
						//涓夌骇瀵艰埅闅愯棌
						$('.header-nav-hover').hide();
						//鎼滅储閫夐」灞曠ず
						$('.nav-search-select').show();
						$('.nav-content-search-center').addClass('search-spread');
						//鍒濆鍖栨彁绀鸿
						initsearch($('.search-select-type').text());
					});

					//鏀惰捣鎼滅储妗�
					$(document).on('click', function(e) {
						//鏀惰捣鎼滅储 灞曠ず涓棿
						$('.nav-content-center').show();
						//鎼滅储閫夐」闅愯棌
						$('.nav-search-select').hide();
						$('.nav-content-search-center').removeClass('search-spread');
						$('.nav-search-center-text').text('搜装修公司/问题/攻略/效果图');
					});

					//鐐瑰嚮鍑虹幇鎼滅储閫夐」
					$('.nav-search-select').click(function() {
						$('.search-select-list').stop(false, false);
						if($(this).hasClass('drop-down')) {
							$(this).removeClass('drop-down');
						} else {
							$(this).addClass('drop-down');
						}
						$('.search-select-list').slideToggle();
					})

					//鐐瑰嚮涓嬫媺閫夐」
					$('.search-select-list li').click(function(event) {
						TypeSearch = $(this).text();
						event.stopPropagation();
						$('.nav-search-select li').removeClass('list-now');
						$(this).addClass('list-now');
						initsearch(TypeSearch);
						$('.search-select-list').slideUp();
						$('.nav-search-select').removeClass('drop-down');
					})

					//琛ㄥ崟鏁堟灉
					$('.nav-search-center-input').val("");
					$('.nav-search-center-text').click(function() {
						$('.nav-search-center-input').trigger('click').focus();
					})
					$('.nav-search-center-input').on('keydown', function() {
						$(this).parent().find('label').hide();
					});
					$('.nav-search-center-input').blur(function() {
						if($(this).val() == '') $(this).parent().find('label').show();
					});

					//3绾у鑸垏鎹�
					$('.nav-content-list li').hover(function(e) {
						//鍏堥殣钘忓瓙绾у湪闅愯棌鐖剁骇 閬垮厤寮曡捣ie7涓嬮殣钘忛『搴廱ug
						$('.nav-hover-type').children('div').hide();
						$('.header-nav-hover').hide();
						var _index = $(this).index();
						$(this).addClass('hover').siblings('li').removeClass('hover');
						if(_index == 1) {
							$('.header-nav-hover,.nav-hover-xgt').show();
						} else if(_index == 2) {
							$('.header-nav-hover,.nav-hover-zxgs').show();
						} else if(_index == 3) {
							$('.header-nav-hover,.nav-hover-zxgl').show();
						} else if(_index == 5) {
							$('.header-nav-hover,.nav-hover-more').show();
						} else {
							$('.header-nav-hover').hide();
						}
					}, function() {
						if($(this).hasClass('have-arrow')) {
							return;
						}
						$('.nav-content-list li').removeClass('hover');
					});

					//浜岀骇瀵艰埅 涓嬫媺灞傚鐞�
					$('.header-nav-hover').hover(function() {
						$('.header-nav-hover').css('display', 'block');
					}, function() {
						$('.nav-hover-type').children('div').hide();
						$('.header-nav-hover').hide();
						$('.nav-content-list li').removeClass('hover');
					});
					$('.header-nav-content').on('mouseleave', function() {
						$('.nav-hover-type').children('div').hide();
						$('.header-nav-hover').hide();
						$('.nav-content-list li').removeClass('hover');
					})
					$('.nav-app').on('mouseout', function(e) {
						e.stopPropagation();
						$('.nav-content-list li').removeClass('hover');
					});

					//鎼滅储缁熻
					$('#searchform-new').on('submit', function() {
						if(searchclicktage) {
							try {
								clickStream.getCvParams(searchclicktage);
								clickStream.sendPv();
							} catch(e) {}
						}
						if($('.header_search_input').val() == "") {
							$('.header_search_input').focus();
							return false;
						} else {
							return true;
						}
					});
					//鐐瑰嚮鎼滅储
					$('.icon-search').click(function(e) {
						e.stopPropagation();
						if($('.nav-content-search-center').hasClass('search-spread')) {
							$('#searchform-new').submit();
							$('.nav-search-center-input').trigger('click').focus();
						} else {
							//input鑾峰緱鐒︾偣 涓嶈Е鍙戝け鐒� 澶勭悊閫昏緫
							$('.nav-search-center-input').trigger('click').focus();
						}
					})
					//鐐瑰嚮App 缁熻
					$('.last-li a').click(function() {
						try {
							clickStream.getCvParams('1_7_32_2035');
						} catch(e) {}
					})

					// 400鏉ョ數浼樺寲
					if(!window.tender) { //杩欎釜鍦版柟涓€瀹氳鏈塼ender.js
						$.getScript('http://static.to8to.com/gb_js/tender.js?v=20170812');
					}
					window.timePhone = false;
					$('.nav-first-phone').on('mouseenter', function(e) {
						$('.tel-arrow:visible').removeClass('down')
						var $telPop = `<div class="tel-pop step1">
              <h3 class="tel-pop-title tel-title-step12">鑱旂郴鍦熷反鍏旇淇瀹�</h3>
              <h3 class="tel-pop-title tel-title-step3">鎷ㄥ彿鎴愬姛锛�</h3>
              <div class="tel-content">
                <div class="tel-con con-step1">
                  <input placeholder="杈撳叆鎮ㄧ殑鎵嬫満鍙凤紝绋嶅悗鎴戜滑灏嗚嚧鐢垫偍" class="tel-content-input"></input>
                  <span class="tel-label">
                    <i class="icon"></i>
                    <span class="tel-label-text"></span>
                  </span>
                </div>
                <div class="tel-con con-step2">
                  <span class="con-step2-main">
                    <i class="icon"></i>
                    鎷ㄥ彿涓紝璇风◢鍚�...
                  </span>
                </div>
                <div class="tel-con con-step3">
                  <span class="con-step3-main">绋嶅悗鎮ㄥ皢鎺ュ埌鍦熷反鍏旇淇瀹剁殑鏉ョ數锛岃娉ㄦ剰鎺ュ惉锛�</span>
                </div>
              </div>
              <div class="tel-btn active step1">绔嬪嵆鍏嶈垂閫氳瘽</div>
              <div class="tel-btn active step2">杩斿洖閲嶆柊杈撳叆</div>
              <div class="tel-btn step3">杩斿洖</div>
              <p class="tel-tips">鍦熷反鍏旀壙璇猴細鍦熷反鍏斾笉鏀跺彇浠讳綍閫氳瘽璐圭敤锛屼粎鐢辫繍钀ュ晢渚濇嵁鏀惰垂瑙勫垯鏀跺彇400甯傝瘽閫氳瘽璐圭敤</p>
             </div>`
						$(this).append($telPop)
					}).on('mouseleave', function(e) {
						$('.tel-arrow:visible').addClass('down')
						$('.tel-pop').remove()
					})
					// 鏍￠獙鏁版嵁
					$('.nav-first-phone').on('click', '.tel-btn.step1', function() {
						var telVal = $('.tel-content-input').val()
						var $contentDom = $('.tel-content')
						var $textDom = $('.tel-label-text')
						if(!telVal) {
							$contentDom.removeClass('tel-warning')
							$contentDom.addClass('tel-error')
							$textDom.html('鎵嬫満鍙风爜涓嶈兘涓虹┖')
						} else if(!/^1{1}[3456789]{1}\d{9}$/.test(telVal)) {
							$contentDom.removeClass('tel-warning')
							$contentDom.addClass('tel-error')
							$textDom.html('璇疯緭鍏ユ纭殑鎵嬫満鍙风爜')
						} else if(window.timePhone) {
							$contentDom.removeClass('tel-error')
							$contentDom.addClass('tel-warning')
							$textDom.html('30s鍐呰鍕块噸澶嶆彁浜�')
						} else {
							$contentDom.removeClass('tel-error')
							$contentDom.removeClass('tel-warning')
							$textDom.html('')

							// 璺宠浆鍒扮浜屾楠�
							$('.tel-pop').removeClass('step1').addClass('step2')
							// 鍙戣姹傝烦杞埌绗笁姝ラ
							sendphoneData()
						}
					})
					// 杩斿洖绗竴姝ラ
					$('.nav-first-phone').on('click', '.tel-btn.step2', function() {
						$('.tel-pop').removeClass('step2').addClass('step1')
					})
					$('.nav-first-phone').on('click', '.tel-btn.step3', function() {
						$('.tel-pop').removeClass('step3').addClass('step1')
					})
				}

				function sendphoneData() {
					var data = {
						modeltype: 1,
						phone: $('.tel-content-input').val(),
						ptag: '1_1_1_4058',
						nowstep: 1,
						autoPop: 2,
						onFirstStepEnd: function(res) {
							window.timePhone = true
							setTimeout(function() {
								window.timePhone = false
							}, 30000)
							$('.tel-pop').removeClass('step1').removeClass('step2').addClass('step3')
						}
					}
					var sendData = new tender();
					sendData.init(data);
				}
				//鑾峰彇鐢ㄦ埛鐧诲綍淇℃伅
				function createUserNav() {
					var str_havel = '';
					//鐢ㄦ埛韬唤
					var ind = Cookie.get('to8to_ind');
					var uid = Cookie.get('to8to_uid');

					str_havel = '<div rel="nofollow" class="col_l htr-username-box"><a href="javascript:;" class="htr-username"><p class="ect">' + username + '</p><i class="icon icon-arrow-bottom"></i><i class="cut-line cut-line-left"></i><i class="cut-line cut-line-right"></i></a><i class="cover-line"></i><ul class="user-memu">';

					if(ind == 'yz') {
						str_havel += '<li><a href="http://www.to8to.com/my/">涓汉涓績</a></li>';
						str_havel += '<li><a href="http://www.to8to.com/my/yz_administration_self.php?act=1" id="userbar-myinfo" class="">甯愬彿璁剧疆</a></li>';
					} else if(ind == 'zs') {
						str_havel += '<li><a href="http://tuchat.to8to.com/">鍟嗗涓汉涓績</a></li>';
					};
					str_havel += '<li><a href="http://www.to8to.com/logout.php?uid=' + uid + '">閫€鍑�</a></li></ul></div>';

					$.ajax({
						type: "GET",
						dataType: 'jsonp',
						url: "http://www.to8to.com/api/get_message_count.php",
						data: {
							ind: ind,
							uid: uid
						},
						success: function(data) {
							if(data.status == "1") {
								str_havel += data.message;
							}
							var labelObj = $('#nav-user-data-new');

							$('.nav-first-right').remove();
							labelObj.html(str_havel);
							$('.htr_mes_box .htr_mes').remove('i.triangle_down');
							$('.htr_mes_box .htr_mes').append('<i class="icon icon-arrow-bottom"></i><i class="cut-line cut-line-left"></i><i class="cut-line cut-line-right"></i>');
							$('.htr_mes_box .htr_mes_memu').removeAttr('style');
							$('.htr_mes_box').append('<i class="cover-line"></i>');
							$('.header-user-show').show();
							// labelObj.children('div').hover(function() {
							//     $(this).toggleClass('on');
							//     $(this).children('ul').toggle();
							// });
						}
					});
				}

				function initCity() {
					if(!cityId) { //鏂扮敤鎴�
						//ip鍒ゆ柇鍩庡競淇℃伅 (鏂扮敤鎴�)
						if($('.main-container .index-banner').length < 1) { //鐫€闄嗛〉闈為椤电殑鏂扮敤鎴�
							CityFromIp(function(obj) {
//								getCityData(obj);
							})
						}
					} else {
						//鍒ゆ柇鏄惁require
						if(typeof setcity_data === 'undefined') {
							$.getScript(cityScriptUrl, function() {
								try {
									setCity();
								} catch(e) {};
							});
						} else {
							setCity();
						}
					}
				}

				//璁剧疆鍩庡競淇℃伅
				function setCity() {
					var current_tcode = cityCode ? cityCode : 'sz',
						_this = null,
						href = '',
						new_href = '',
						ereg = null;
					$(".nav-fzlink").each(function() {
						_this = $(this);
						href = _this.attr('href') || _this.attr('action');
						if(href.indexOf(current_tcode) > 0) {
							ereg = new RegExp(current_tcode, 'g');
							new_href = href.replace(ereg, current_tcode);
						} else {
							new_href = href.replace(href.match('(https|http|ftp|rtsp|mms)\:\/\/(.*?)\.to8to\.com\/*?')[2], current_tcode);
						}
						if(href.indexOf("sz") > 0) {
							new_href = href.replace(/sz/g, current_tcode);
						}
						if(href.indexOf("www") > 0) {
							new_href = href.replace(/www/g, current_tcode);
						}
						if(href.indexOf("xiaoguotu") > 0) {
							new_href = href;
						}
						if(_this.attr('href') === undefined) {
							_this.attr("action", new_href);
						} else {
							_this.attr("href", new_href);
						}
					});
				}
				//璁剧疆鍩庡競cookie
				function setCityCookie() {
					var i = 0,
						city_data = data.get('cityData');
					if(city_data !== 'undefined') {
						//棣栧厛璇诲彇璧嬪€肩殑gain_data   闃叉    鏈湴瀛樺偍鏂瑰紡鐩存帴get  涓嶈兘鍙婃椂鑾峰彇鍒�
						gain_data = gain_data ? gain_data : JSON.parse(city_data);

						// 閲嶇疆瀵艰埅鍖哄煙
						$('.nav-hover-zxgs ul').eq(0).find('a').text('');
						for(x in gain_data) {
							$('.nav-hover-zxgs ul').eq(0).find('a').eq(i).text(x).attr('href', gain_data[x].url);
							i++;

							//鏈€澶�6涓�
							if(i >= 6) {
								break;
							}
						}
					}

					//璁剧疆鍩庡競涓枃鍚�
					$('.nav-first-left').show().find('.nav-city').html(cityName);

					for(var t = 6; t > i; t--) { //鍘婚櫎娌＄敤li
						$('.nav-hover-zxgs ul').eq(0).find('li').eq(t - 1).remove();
					}

					setCity();
				}
				//淇敼鎼滅储妗唂orm琛ㄥ崟action
				function initsearch(sName) {
					sName = $.trim(sName);
					switch(sName) {
						case '鏁堟灉鍥�':
							searchclicktage = '1_8_2_1';
							sHref = 'http://xiaoguotu.to8to.com/search.php';
							sText = '杈撳叆鍏抽敭璇嶏紝鍙戠幇娴烽噺缇庡浘';
							break;
						case '瑁呬慨鍏徃':
							searchclicktage = '1_8_2_2';
							sHref = "http://" + cityCode + ".to8to.com/company/";
							sText = '杈撳叆鍏徃鍚嶏紝鏌ヨ瑁呬慨鍏徃鐨勫彛纰戠偣璇�';
							break;
						case '灏忓尯':
							searchclicktage = '1_8_2_3';
							sHref = "http://" + cityCode + ".to8to.com/zwj/index.php";
							sText = '杈撳叆灏忓尯鍚嶏紝鐪嬬湅閭诲眳鐨勮淇柟妗�';
							break;
						case '鏀荤暐':
							searchclicktage = '1_8_2_4';
							sHref = 'http://www.to8to.com/yezhu/xzx_search.php';
							sText = '杈撳叆鍏抽敭璇嶏紝鏀惰幏瀹炵敤瑁呬慨鎸囧崡';
							break;
						case '闂':
							searchclicktage = '1_8_2_5';
							sHref = 'http://www.to8to.com/ask/search.php';
							sText = '杈撳叆闂锛屽揩閫熻幏寰椾笓涓氳В绛�';
							break;
						case '寤烘潗瀹跺叿':
							searchclicktage = '1_8_2_6';
							sHref = 'http://mall.to8to.com/search';
							sText = '杈撳叆鍟嗗搧锛屾壘鍒颁綆浠蜂紭鎯�';
							break;
					}
					if(sName == '鍏ㄧ珯' || sName == '鏂囩珷' || sName == '灏忓尯') {
						searchput = 'keyword_zh';
					} else {
						searchput = 'keyword';
					}
					if($('.nav-content-search-center').hasClass('search-spread')) {
						$('.nav-search-center-text').text(sText);
					}
					$('.nav-search-center-input').attr('name', searchput);
//					$('#searchform-new').attr('action', sHref);
					$('.search-select-type').text(sName);
				}
				//scroll
				$(window).scroll(function() {
					if($(this).scrollTop() > 10) {
						$('.header-nav').addClass('move-down').removeClass('header-have-page-nav');
						$('.city-switchover').removeClass('city-switchover-hover'); //鍒囨崲鍩庡競鍔熻兘
						$('.city-option-box').hide();
						hoverAnimate(li_on);
					} else {
						$('.header-nav').removeClass('move-down');
						$('.nav-content-animate-span').remove();
						if($('.header-page-nav').length) {
							$('.header-nav').addClass('header-have-page-nav');
						}
					}
				})
				//鏍规嵁ip 鍖归厤鍩庡競
				function CityFromIp(callBackIp) {
					var sCity = '';
					if(Cookie.get('CityFromIp') != undefined) { //cookie瀛樺湪鍊煎氨鍏堣鍙朿ookie
						callBackIp(Cookie.get('CityFromIp'));
					} else {
						var ipCity = '';
						var num = Math.floor((Math.random() * 10000000000 + 1)).toString();
						//鏍规嵁ip鑾峰彇鍩庡競鎺ュ彛
						$.ajax({
							url: '//secure.to8to.com/api/getAreaInfo.php',
							data: 'act=getIp&_=' + num,
							type: "GET",
							dataType: 'jsonp',
							success: function(data) {
								callBackIp(data.data.to8to_tcode);
							},
							error: function() {
								callBackIp('sz');
							}
						});
					}
				}
				//鍒囨崲鍩庡競
				function optionCity() {
					var _index = 0;
					var city_type_data = {
						hot_data: {
							bj: {
								city_href: 'bj',
								city_name: '北京市'
							},
							sh: {
								city_href: 'sh',
								city_name: '上海市'
							},
							gz: {
								city_href: 'gz',
								city_name: '广州市'
							},
							sz: {
								city_href: 'sz',
								city_name: '深圳市'
							},
							cd: {
								city_href: 'cd',
								city_name: '成都市'
							},
							cq: {
								city_href: 'cq',
								city_name: '重庆市'
							},
							wh: {
								city_href: 'wh',
								city_name: '武汉市'
							},
							sy: {
								city_href: 'sy',
								city_name: '沈阳市'
							},
							dl: {
								city_href: 'dl',
								city_name: '大连市'
							},
							zz: {
								city_href: 'zz',
								city_name: '郑州市'
							},
							xa: {
								city_href: 'xa',
								city_name: '西安市'
							},
							nj: {
								city_href: 'nj',
								city_name: '南京市'
							},
							suzhou: {
								city_href: 'suzhou',
								city_name: '苏州市'
							},
							wx: {
								city_href: 'wx',
								city_name: '无锡市'
							},
							xz: {
								city_href: 'xz',
								city_name: '徐州市'
							},
							hz: {
								city_href: 'hz',
								city_name: '杭州市'
							},
							nb: {
								city_href: 'nb',
								city_name: '宁波市'
							},
							tj: {
								city_href: 'tj',
								city_name: '天津市'
							},
							km: {
								city_href: 'km',
								city_name: '昆明市'
							},
							nn: {
								city_href: 'nn',
								city_name: '南宁市'
							},
							hf: {
								city_href: 'hf',
								city_name: '合肥市'
							},
							cs: {
								city_href: 'cs',
								city_name: '长沙市'
							},
							qd: {
								city_href: 'qd',
								city_name: '青岛市'
							},
							heb: {
								city_href: 'heb',
								city_name: '哈尔滨市'
							},
							lanzhou: {
								city_href: 'lanzhou',
								city_name: '兰州市'
							},
							dg: {
								city_href: 'dg',
								city_name: '东莞市'
							},
							huizhou: {
								city_href: 'huizhou',
								city_name: '惠州市'
							},
							fs: {
								city_href: 'fs',
								city_name: '佛山市'
							},
							gy: {
								city_href: 'gy',
								city_name: '贵阳市'
							},
							qz: {
								city_href: 'qz',
								city_name: '泉州市'
							}
						},
						a_d_data: {
							A: {
								as: {
									city_href: 'as',
									city_name: '鞍山市'
								},
								anqing: {
									city_href: 'anqing',
									city_name: '安庆市'
								}
							},
							B: {
								bj: {
									city_href: 'bj',
									city_name: '北京市'
								},
								baoding: {
									city_href: 'baoding',
									city_name: '保定市'
								},

								baoji: {
									city_href: 'baoji',
									city_name: '宝鸡市'
								},
								bengbu: {
									city_href: 'bengbu',
									city_name: '蚌埠市'
								},
								bijie: {
									city_href: 'bijie',
									city_name: '毕节市'
								}
							},
							C: {
								cd: {
									city_href: 'cd',
									city_name: '成都市'
								},
								cq: {
									city_href: 'cq',
									city_name: '重庆市'
								},
								cs: {
									city_href: 'cs',
									city_name: '长沙市'
								},
								cz: {
									city_href: 'cz',
									city_name: '常州市'
								},
								bijie: {
									city_href: 'cc',
									city_name: '长春市'
								},
								cangzhou: {
									city_href: 'cangzhou',
									city_name: '沧州市'
								},
								chuzhou: {
									city_href: 'chuzhou',
									city_name: '滁州市'
								},
								chenzhou: {
									city_href: 'chenzhou',
									city_name: '郴州市'
								},
								chengde: {
									city_href: 'chengde',
									city_name: '承德市'
								}
							},
							D: {
								dl: {
									city_href: 'dl',
									city_name: '大连市'
								},
								dg: {
									city_href: 'dg',
									city_name: '东莞市'
								},
								dezhou: {
									city_href: 'dezhou',
									city_name: '德州市'
								},
								deyang: {
									city_href: 'deyang',
									city_name: '德阳市'
								}
							}
						},
						f_j_data: {
							F: {
								fs: {
									city_href: 'fs',
									city_name: '佛山市'
								},
								fz: {
									city_href: 'fz',
									city_name: '福州市'
								},
								fuyang: {
									city_href: 'fuyang',
									city_name: '阜阳市'
								},
								fuzhou: {
									city_href: 'fuzhou',
									city_name: '福州市'
								}
							},
							G: {
								gz: {
									city_href: 'gz',
									city_name: '广州市'
								},
								gy: {
									city_href: 'gy',
									city_name: '贵阳市'
								},
								ganzhou: {
									city_href: 'ganzhou',
									city_name: '赣州市'
								},
								guilin: {
									city_href: 'guilin',
									city_name: '桂林市'
								}
							},
							H: {
								hz: {
									city_href: 'hz',
									city_name: '杭州市'
								},
								hf: {
									city_href: 'hf',
									city_name: '合肥市'
								},
								heb: {
									city_href: 'heb',
									city_name: '哈尔滨市'
								},
								huizhou: {
									city_href: 'huizhou',
									city_name: '惠州市'
								},
								hhht: {
									city_href: 'hhht',
									city_name: '呼和浩特市'
								},
								hengyang: {
									city_href: 'hengyang',
									city_name: '衡阳市'
								},
								handan: {
									city_href: 'handan',
									city_name: '邯郸市'
								},
								huaian: {
									city_href: 'huaian',
									city_name: '淮安市'
								},
								haikou: {
									city_href: 'haikou',
									city_name: '海口市'
								},
								heze: {
									city_href: 'heze',
									city_name: '菏泽市'
								},
								huainan: {
									city_href: 'huainan',
									city_name: '淮南市'
								},
								hengshui: {
									city_href: 'hengshui',
									city_name: '衡水市'
								},
								hanzhong: {
									city_href: 'hanzhong',
									city_name: '汉中市'
								},
								heyuan: {
									city_href: 'heyuan',
									city_name: '河源市'
								},
								huzhou: {
									city_href: 'huzhou',
									city_name: '湖州市'
								},
								haunggang: {
									city_href: 'haunggang',
									city_name: '黄冈市'
								},
								huangshi: {
									city_href: 'huangshi',
									city_name: '黄石市'
								},
								huaihua: {
									city_href: 'huaihua',
									city_name: '怀化市'
								}
							},
							J: {
								jining: {
									city_href: 'jining',
									city_name: '济宁市'
								},
								jh: {
									city_href: 'jh',
									city_name: '閲戝崕'
								},
								jn: {
									city_href: 'jn',
									city_name: '娴庡崡'
								},
								jiujiang: {
									city_href: 'jiujiang',
									city_name: '涔濇睙'
								},
								jx: {
									city_href: 'jx',
									city_name: '鍢夊叴'
								},
								jiangmen: {
									city_href: 'jiangmen',
									city_name: '姹熼棬'
								},
								jz: {
									city_href: 'jz',
									city_name: '鐒︿綔'
								},
								jian: {
									city_href: 'jian',
									city_name: '鍚夊畨'
								}
							}
						},
						k_n_data: {
							K: {
								km: {
									city_href: 'km',
									city_name: '鏄嗘槑'
								},
								kaifeng: {
									city_href: 'kaifeng',
									city_name: '寮€灏�'
								},
								kunshan: {
									city_href: 'kunshan',
									city_name: '鏄嗗北'
								}
							},
							L: {
								lanzhou: {
									city_href: 'lanzhou',
									city_name: '鍏板窞'
								},
								lf: {
									city_href: 'lf',
									city_name: '寤婂潑'
								},
								ly: {
									city_href: 'ly',
									city_name: '娲涢槼'
								},
								linyi: {
									city_href: 'linyi',
									city_name: '涓存矀'
								},
								lianyungang: {
									city_href: 'lianyungang',
									city_name: '杩炰簯娓�'
								},
								liuan: {
									city_href: 'liuan',
									city_name: '鍏畨'
								},
								linfen: {
									city_href: 'linfen',
									city_name: '涓存本'
								},
								lz: {
									city_href: 'lz',
									city_name: '鏌冲窞'
								}
							},
							M: {
								mianyang: {
									city_href: 'mianyang',
									city_name: '缁甸槼'
								},
								maoming: {
									city_href: 'maoming',
									city_name: '鑼傚悕'
								},
								meizhou: {
									city_href: 'meizhou',
									city_name: '姊呭窞'
								}
							},
							N: {
								nj: {
									city_href: 'nj',
									city_name: '鍗椾含'
								},
								nn: {
									city_href: 'nn',
									city_name: '鍗楀畞'
								},
								nb: {
									city_href: 'nb',
									city_name: '瀹佹尝'
								},
								nc: {
									city_href: 'nc',
									city_name: '鍗楁槍'
								},
								nt: {
									city_href: 'nt',
									city_name: '鍗楅€�'
								},
								nanchong: {
									city_href: 'nanchong',
									city_name: '鍗楀厖'
								},
								ny: {
									city_href: 'ny',
									city_name: '鍗楅槼'
								}
							}
						},
						q_w_data: {
							Q: {
								qd: {
									city_href: 'qd',
									city_name: '闈掑矝'
								},
								qz: {
									city_href: 'qz',
									city_name: '娉夊窞'
								},
								qingyuan: {
									city_href: 'qingyuan',
									city_name: '娓呰繙'
								},
								qinhuangdao: {
									city_href: 'qinhuangdao',
									city_name: '绉︾殗宀�'
								},
								qujing: {
									city_href: 'qujing',
									city_name: '鏇查潠'
								}
							},
							S: {
								sh: {
									city_href: 'sh',
									city_name: '涓婃捣'
								},
								sz: {
									city_href: 'sz',
									city_name: '娣卞湷'
								},
								sy: {
									city_href: 'sy',
									city_name: '娌堥槼'
								},
								suzhou: {
									city_href: 'suzhou',
									city_name: '鑻忓窞'
								},
								sjz: {
									city_href: 'sjz',
									city_name: '鐭冲搴�'
								},
								suqian: {
									city_href: 'suqian',
									city_name: '瀹胯縼'
								},
								shaoyang: {
									city_href: 'shaoyang',
									city_name: '閭甸槼'
								},
								shangqiu: {
									city_href: 'shangqiu',
									city_name: '鍟嗕笜'
								},
								shantou: {
									city_href: 'shantou',
									city_name: '姹曞ご'
								},
								shaoxing: {
									city_href: 'shaoxing',
									city_name: '缁嶅叴'
								},
								shangrao: {
									city_href: 'shangrao',
									city_name: '涓婇ザ'
								},
								shaoguan: {
									city_href: 'shaoguan',
									city_name: '闊跺叧'
								}
							},
							T: {
								tj: {
									city_href: 'tj',
									city_name: '澶╂触'
								},
								ty: {
									city_href: 'ty',
									city_name: '澶師'
								},
								ts: {
									city_href: 'ts',
									city_name: '鍞愬北'
								},
								taizhou: {
									city_href: 'taizhou',
									city_name: '娉板窞'
								},
								taian: {
									city_href: 'taian',
									city_name: '娉板畨'
								},
								tz: {
									city_href: 'tz',
									city_name: '鍙板窞'
								}
							},
							W: {
								wh: {
									city_href: 'wh',
									city_name: '姝︽眽'
								},
								wx: {
									city_href: 'wx',
									city_name: '鏃犻敗'
								},
								wlmq: {
									city_href: 'wlmq',
									city_name: '涔岄瞾鏈ㄩ綈'
								},
								wz: {
									city_href: 'wz',
									city_name: '娓╁窞'
								},
								weihai: {
									city_href: 'weihai',
									city_name: '濞佹捣'
								},
								wf: {
									city_href: 'wf',
									city_name: '娼嶅潑'
								},
								wuhu: {
									city_href: 'wuhu',
									city_name: '鑺滄箹'
								}
							}
						},
						x_z_data: {
							X: {
								xa: {
									city_href: 'xa',
									city_name: '瑗垮畨'
								},
								xz: {
									city_href: 'xz',
									city_name: '寰愬窞'
								},
								xining: {
									city_href: 'xining',
									city_name: '瑗垮畞'
								},

								xiangyang: {
									city_href: 'xiangyang',
									city_name: '瑗勯槼'
								},
								xm: {
									city_href: 'xm',
									city_name: '鍘﹂棬'
								},
								xuchang: {
									city_href: 'xuchang',
									city_name: '璁告槍'
								},
								xingtai: {
									city_href: 'xingtai',
									city_name: '閭㈠彴'
								},
								xianyang: {
									city_href: 'xianyang',
									city_name: '鍜搁槼'
								},
								xinyang: {
									city_href: 'xinyang',
									city_name: '淇￠槼'
								},
								xinxiang: {
									city_href: 'xinxiang',
									city_name: '鏂颁埂'
								},
								xiaogan: {
									city_href: 'xiaogan',
									city_name: '瀛濇劅'
								}
							},
							Y: {
								yangzhou: {
									city_href: 'yangzhou',
									city_name: '鎵窞'
								},
								yt: {
									city_href: 'yt',
									city_name: '鐑熷彴'
								},
								yancheng: {
									city_href: 'yancheng',
									city_name: '鐩愬煄'
								},
								yinchuan: {
									city_href: 'yinchuan',
									city_name: '閾跺窛'
								},
								yichang: {
									city_href: 'yichang',
									city_name: '瀹滄槍'
								},
								yichun: {
									city_href: 'yichun',
									city_name: '瀹滄槬'
								},
								yongzhou: {
									city_href: 'yongzhou',
									city_name: '姘稿窞'
								},
								yuncheng: {
									city_href: 'yuncheng',
									city_name: '杩愬煄'
								},
								yiyang: {
									city_href: 'yiyang',
									city_name: '鐩婇槼'
								}
							},
							Z: {
								zz: {
									city_href: 'zz',
									city_name: '閮戝窞'
								},
								zhongshan: {
									city_href: 'zhongshan',
									city_name: '涓北'
								},
								zunyi: {
									city_href: 'zunyi',
									city_name: '閬典箟'
								},
								zhenjiang: {
									city_href: 'zhenjiang',
									city_name: '闀囨睙'
								},
								zhumadian: {
									city_href: 'zhumadian',
									city_name: '椹婚┈搴�'
								},
								zhangjiakou: {
									city_href: 'zhangjiakou',
									city_name: '寮犲鍙�'
								},
								zhoukou: {
									city_href: 'zhoukou',
									city_name: '鍛ㄥ彛'
								},

								zhanjiang: {
									city_href: 'zhanjiang',
									city_name: '婀涙睙'
								},

								zhangzhou: {
									city_href: 'zhangzhou',
									city_name: '婕冲窞'
								},
								zhuhai: {
									city_href: 'zhuhai',
									city_name: '鐝犳捣'
								},
								zaozhuang: {
									city_href: 'zaozhuang',
									city_name: '鏋ｅ簞'
								},
								zhuzhou: {
									city_href: 'zhuzhou',
									city_name: '鏍床'
								},
								zhaoqing: {
									city_href: 'zhaoqing',
									city_name: '鑲囧簡'
								}
							}
						}
					}
					var str = '<div class="city-option-box">' +
						'<div class="city-option-list">' +
						'<span class="city-option-hot on">热门城市</span>' +
						'<span class="city-option-a-e">ABCD</span>' +
						'<span class="city-option-f-j">FGHJ</span>' +
						'<span class="city-option-k-p">KLMN</span>' +
						'<span class="city-option-q-w">QSTW</span>' +
						'<span class="city-option-x-z">XYZ</span>' +
						'</div>' +
						'<div class="city-option-content">' +
						'<div class="city-hot-content">' + createHtml(city_type_data.hot_data) + '</div>' +
						'<div class="city-a-e-content city-content-warp">' + createHtml(city_type_data.a_d_data, 1) + '</div>' +
						'<div class="city-f-j-content city-content-warp">' + createHtml(city_type_data.f_j_data, 1) + '</div>' +
						'<div class="city-k-p-content city-content-warp">' + createHtml(city_type_data.k_n_data, 1) + '</div>' +
						'<div class="city-q-w-content city-content-warp">' + createHtml(city_type_data.q_w_data, 1) + '</div>' +
						'<div class="city-x-z-content city-content-warp">' + createHtml(city_type_data.x_z_data, 1) + '</div>' +
						'</div>' +
						'</div>';
					var city_n = null;
					$('.nav-first-left').append(str);
					//鍒囨崲鎸夐挳hover
					$('.nav-change').hover(function() {
						$('.city-switchover').addClass('city-switchover-hover');
						$('.city-option-box').show();
					});
					//绂诲紑 鍒囨崲鎸夐挳
					$('.nav-first-left').mouseleave(function() {
						$('.city-switchover').removeClass('city-switchover-hover');
						$('.city-option-box').hide();
					});
					//鍒囨崲閫夐」
					$('.city-option-list span').hover(function() {
						_index = $(this).index();
						$('.city-option-list span').removeClass('on');
						$(this).addClass('on');
						$('.city-option-content').children('div').hide().eq(_index).show();
					});
					if(urlType()) {
						$('.city-option-manage').on('click', 'ul li a', function() {
							city_n = $(this).attr('city_code');
							location.href = location.href.replace(secondary, $(this).attr('city_code'));
						});
					} else {
						$('.city-option-manage').on('click', 'ul li a', function() {
							city_n = $(this).attr('city_code');
							if(city_n !== secondary) {
								Cookie.set('to8to_tcode', city_n, {
									path: '/',
									domain: '.to8to.com'
								});
							}
							location.reload();
						})
					}
				}
				//鏍规嵁鏁版嵁鐢熸垚html浠ｇ爜
				function createHtml(data, type) {
					_html = '';
					if(type == 1) {
						for(x in data) {
							i = 0;
							_html = _html + _html_list + createLi(data[x]) + '</ul><span class="city-option-logogram">' + x + '</span></div>';
						}
						_html += _html_more;
					} else {
						_html = _html_list + createLi(data) + '</ul></div>';
					}
					return _html;
				}
				
				function createLi(data) {
					html_li = '';
					for(l in data) {
						i++;
						_html_class = "";
						_html_shi = "";
						if(i % 6 == 0) { //鑳借6鏁撮櫎
							_html_class = 'class="row-end"';
						}
						if(data[l].city_name.length >= 4) {
							_html_shi = '';
						}
						html_li += '<li ' + _html_class + '><a href="javascript:void(0);" city_code="' + data[l].city_href + '" title="' + data[l].city_name + '1">' + data[l].city_name + _html_shi + '</a></li>';
					}
					return html_li;
				}

				//绐楀彛鍙樺姩 hover鏁堟灉楂樺害鍙樺寲
				$(window).resize(function() {
					if(hover_ani != null && hover_ani.length > 0) {
						hover_ani.css('height', _ul.height());
					}
				});

				//hover鏁堟灉
				function hoverAnimate(_this) {
					if((!$('.header-nav').hasClass('move-down') || $('.nav-content-animate-span').length > 0) && $('.header-small').length < 1) { //娌℃湁杩欎釜calss 灏遍€€鍑�
						return;
					}
					$('.nav-content-animate-span').remove();
					_this.append('<a class="nav-content-animate-span" href=""><span></span></a>');
					hover_ani = $('.nav-content-animate-span');
					hover_ani.attr('href', _this.find('a').attr('href')).show().find('span').text(_this.find('a').text());
					hover_ani.stop().animate({
						'height': _ul.height()
					}, 500, function() {

					});
				}

				// 浜戣璁′笅鎷�
				$('#cloud-design').on('click', function() {
					var ptag = $(this)[0].getAttribute('data-ptag');
					if(!clickFlag) {
						clickFlag = true;
						(typeof clickStream !== 'undefined') && clickStream.getCvParams(ptag);
					}
				})

				// 涓€绾у鑸偣鍑荤粺璁�
				$('.nav-content-center .nav-content-list > li').click(function(e) {
					if(typeof clickStream !== 'undefined') {
						var idx = $(this).index();

						switch(idx) {
							case 0:
								clickStream.getCvParams('1_7_1_2838');
								break;
							case 1:
								clickStream.getCvParams('1_7_18_2839');
								break;
							case 2:
								clickStream.getCvParams('1_7_18_2840');
								break;
							case 3:
								clickStream.getCvParams('1_7_18_2841');
								break;
							case 4:
								clickStream.getCvParams('1_7_18_2842');
								break;
							case 6:
								clickStream.getCvParams('1_7_18_2843');
								break;
						}
					}

				});

				// 浜岀骇瀵艰埅鏁堟灉鍥剧偣鍑荤粺璁�
				$('.nav-hover-xgt .nav-type-list > a').click(function() {
					var idx = $(this).index($('.nav-hover-xgt'));

					if(typeof clickStream !== 'undefined') {
						switch(idx) {
							case 0:
								clickStream.getCvParams('1_7_18_2844');
								break;
							case 1:
								clickStream.getCvParams('1_7_18_2845');
								break;
							case 2:
								clickStream.getCvParams('1_7_18_2846');
								break;
						}
					}
				});

				$('.nav-hover-xgt .nav-list-img > a').click(function() {
					var idx = $(this).index();

					if(typeof clickStream !== 'undefined') {
						switch(idx) {
							case 0:
								clickStream.getCvParams('1_7_18_2865');
								break;
							case 1:
								clickStream.getCvParams('1_7_18_2866');
								break;
							case 2:
								clickStream.getCvParams('1_7_18_2867');
								break;
						}
					}
				});

				// 鎸夌┖闂�
				$('.nav-type-space > ul a').click(function() {
					var idx = $(this).index($(this).parent().parent());

					if(typeof clickStream !== 'undefined') {
						switch(idx) {
							case 0:
								clickStream.getCvParams('1_7_18_2847');
								break;
							case 1:
								clickStream.getCvParams('1_7_18_2848');
								break;
							case 2:
								clickStream.getCvParams('1_7_18_2849');
								break;
							case 3:
								clickStream.getCvParams('1_7_18_2850');
								break;
							case 4:
								clickStream.getCvParams('1_7_18_2851');
								break;
							case 5:
								clickStream.getCvParams('1_7_18_2852');
								break;
						}
					}
				});

				// 鎸夐鏍�
				$('.nav-hover-xgt .nav-type-style > ul a').click(function() {
					var idx = $(this).parent().index();

					if(typeof clickStream !== 'undefined') {
						switch(idx) {
							case 0:
								clickStream.getCvParams('1_7_18_2853');
								break;
							case 1:
								clickStream.getCvParams('1_7_18_2854');
								break;
							case 2:
								clickStream.getCvParams('1_7_18_2855');
								break;
							case 3:
								clickStream.getCvParams('1_7_18_2856');
								break;
							case 4:
								clickStream.getCvParams('1_7_18_2857');
								break;
							case 5:
								clickStream.getCvParams('1_7_18_2858');
								break;
						}
					}
				});

				// 鎸夋埛鍨�
				$('.nav-hover-xgt .nav-type-list:eq(2) > ul a').click(function() {
					var idx = $(this).parent().index();

					if(typeof clickStream !== 'undefined') {
						switch(idx) {
							case 0:
								clickStream.getCvParams('1_7_18_2859');
								break;
							case 1:
								clickStream.getCvParams('1_7_18_2860');
								break;
							case 2:
								clickStream.getCvParams('1_7_18_2861');
								break;
							case 3:
								clickStream.getCvParams('1_7_18_2862');
								break;
							case 4:
								clickStream.getCvParams('1_7_18_2863');
								break;
							case 5:
								clickStream.getCvParams('1_7_18_2864');
								break;
						}
					}
				});

				// 浜岀骇瀵艰埅瑁呬慨鍏徃鐐瑰嚮缁熻
				$('.nav-hover-zxgs .nav-type-list > a').click(function() {
					var idx = $(this).index($('.nav-hover-zxgs'));

					if(typeof clickStream !== 'undefined') {
						switch(idx) {
							case 0:
								clickStream.getCvParams('1_7_18_2868');
								break;
							case 1:
								clickStream.getCvParams('1_7_18_2869');
								break;
							case 2:
								clickStream.getCvParams('1_7_18_2870');
								break;
							case 3:
								clickStream.getCvParams('1_7_18_2919');
								break;
						}
					}
				});

				// 鎸夋湇鍔″尯鍩�
				$('.nav-type-region > ul a').click(function() {
					var idx = $(this).parent().index();

					if(typeof clickStream !== 'undefined') {
						switch(idx) {
							case 0:
								clickStream.getCvParams('1_7_18_2871');
								break;
							case 1:
								clickStream.getCvParams('1_7_18_2872');
								break;
							case 2:
								clickStream.getCvParams('1_7_18_2873');
								break;
							case 3:
								clickStream.getCvParams('1_7_18_2874');
								break;
							case 4:
								clickStream.getCvParams('1_7_18_2875');
								break;
							case 5:
								clickStream.getCvParams('1_7_18_2876');
								break;
						}
					}
				});

				// 鎸変环鏍�
				$('.nav-type-price > ul a').click(function() {
					var idx = $(this).parent().index();

					if(typeof clickStream !== 'undefined') {
						switch(idx) {
							case 0:
								clickStream.getCvParams('1_7_18_2877');
								break;
							case 1:
								clickStream.getCvParams('1_7_18_2878');
								break;
							case 2:
								clickStream.getCvParams('1_7_18_2879');
								break;
							case 3:
								clickStream.getCvParams('1_7_18_2880');
								break;
							case 4:
								clickStream.getCvParams('1_7_18_2881');
								break;
							case 5:
								clickStream.getCvParams('1_7_18_2882');
								break;
						}
					}
				});

				// 鎸夌被鍨�
				$('.nav-type-genre > ul a').click(function() {
					var idx = $(this).parent().index();

					if(typeof clickStream !== 'undefined') {
						switch(idx) {
							case 0:
								clickStream.getCvParams('1_7_18_2883');
								break;
							case 1:
								clickStream.getCvParams('1_7_18_2884');
								break;
							case 2:
								clickStream.getCvParams('1_7_18_2885');
								break;
							case 3:
								clickStream.getCvParams('1_7_18_2886');
								break;
						}
					}
				});

				// 鎸夐鏍�
				$('.nav-hover-zxgs .nav-type-style > ul a').click(function() {
					var idx = $(this).parent().index();

					if(typeof clickStream !== 'undefined') {
						switch(idx) {
							case 0:
								clickStream.getCvParams('1_7_18_2887');
								break;
							case 1:
								clickStream.getCvParams('1_7_18_2888');
								break;
							case 2:
								clickStream.getCvParams('1_7_18_2889');
								break;
							case 3:
								clickStream.getCvParams('1_7_18_2890');
								break;
							case 4:
								clickStream.getCvParams('1_7_18_2891');
								break;
							case 5:
								clickStream.getCvParams('1_7_18_2892');
								break;
						}
					}
				});

				// 浜岀骇瀵艰埅瑁呬慨鏀荤暐鐐瑰嚮缁熻

				// 瑁呬慨鍓�
				$('.nav-hover-zxgl .nav-type-list:eq(0) a').click(function() {
					var idx = $(this).parent().index();

					if(typeof clickStream !== 'undefined') {
						switch(idx) {
							case 0:
								clickStream.getCvParams('1_7_18_2893');
								break;
							case 1:
								clickStream.getCvParams('1_7_18_2894');
								break;
							case 2:
								clickStream.getCvParams('1_7_18_2895');
								break;
							case 3:
								clickStream.getCvParams('1_7_18_2896');
								break;
						}
					}
				});

				// 瑁呬慨涓�
				$('.nav-hover-zxgl .nav-type-list:eq(1) a').click(function() {
					var idx = $(this).parent().index();

					if(typeof clickStream !== 'undefined') {
						switch(idx) {
							case 0:
								clickStream.getCvParams('1_7_18_2897');
								break;
							case 1:
								clickStream.getCvParams('1_7_18_2898');
								break;
							case 2:
								clickStream.getCvParams('1_7_18_2899');
								break;
							case 3:
								clickStream.getCvParams('1_7_18_2900');
								break;
							case 4:
								clickStream.getCvParams('1_7_18_2902');
								break;
							case 5:
								clickStream.getCvParams('1_7_18_2903');
								break;
						}
					}
				});

				// 瑁呬慨鍚�
				$('.nav-hover-zxgl .nav-type-list:eq(2) a').click(function() {
					var idx = $(this).parent().index();

					if(typeof clickStream !== 'undefined') {
						switch(idx) {
							case 0:
								clickStream.getCvParams('1_7_18_2920');
								break;
							case 1:
								clickStream.getCvParams('1_7_18_2921');
								break;
						}
					}
				});

				$('.nav-hover-zxgl .nav-list-img > a').click(function() {
					var idx = $(this).index();

					if(typeof clickStream !== 'undefined') {
						switch(idx) {
							case 0:
								clickStream.getCvParams('1_7_18_2905');
								break;
							case 1:
								clickStream.getCvParams('1_7_18_2907');
								break;
							case 2:
								clickStream.getCvParams('1_7_18_2908');
								break;
							case 3:
								clickStream.getCvParams('1_7_18_2909');
								break;
							case 4:
								clickStream.getCvParams('1_7_18_2910');
								break;
						}
					}
				});

				// 浜岀骇瀵艰埅鏇村鐐瑰嚮缁熻
				$('.nav-hover-more .nav-list-img > a').click(function() {
					var idx = $(this).index();
					if(idx == 3 && (!$(this).hasClass('not-ground-city'))) {
						idx = 7;
					}

					if(typeof clickStream !== 'undefined') {
						switch(idx) {
							case 0:
								clickStream.getCvParams('1_7_18_2911');
								break;
							case 1:
								clickStream.getCvParams('1_7_18_2912');
								break;
							case 2:
								clickStream.getCvParams('1_7_18_2913');
								break;
							case 3:
								clickStream.getCvParams('1_7_18_2914');
								break;
							case 4:
								clickStream.getCvParams('1_7_18_2915');
								break;
							case 5:
								clickStream.getCvParams('1_7_18_2916');
								break;
							case 6:
								clickStream.getCvParams('1_7_18_2917');
								break;
							case 7:
								clickStream.getCvParams('1_7_18_2918');
								break;
						}
					}
				});

				//寮傛鑾峰彇鍩庡競鏁版嵁
//				function getCityData(c_tcode) {
//					var c_data = {
//						type: 'comnav',
//						townid: '',
//						tcode: c_tcode
//					};
//					$.ajax({
//						url: 'http://www.to8to.com/api/getindexdata.php',
//						data: c_data,
//						type: 'get',
//						dataType: 'jsonp',
//						success: function(res) {
//							console.log(res);
//							gain_data = res.service.list;
//							//鏈湴瀛樺偍鎺ュ彛杩斿洖鐨勫煄甯傛暟鎹�
//							data.set('cityData', JSON.stringify(res.service.list));
//							//瀛樺偍鍓嶄竴涓煄甯傜殑cityCode
//							data.set('cityCode', res.cityinfo.code);
//							cityId = res.cityinfo.townid;
//							cityCode = res.cityinfo.code;
//							cityName = res.cityinfo.cityname;
//							//璁剧疆cookie
//							Cookie.set('to8to_townid', cityId, {
//								path: '/',
//								domain: '.to8to.com'
//							});
//							Cookie.set('to8to_tcode', cityCode, {
//								path: '/',
//								domain: '.to8to.com'
//							});
//							Cookie.set('to8to_tname', cityName, {
//								path: '/',
//								domain: '.to8to.com'
//							});
//							typeof res !== 'undefined' ? setCityCookie() : initCity();
//						}
//					});
//				}

				//鍒ゆ柇椤甸潰閾炬帴绫诲瀷
				function urlType() {
					var norm = ['xiaoguotu', 'www'];
					for(var i = 0; i < norm.length; i++) {
						if(norm[i] == secondary) {
							return false
						}
					}
					return true
				}

				/**
				 * 鏄惁鍒囨崲鍩庡競(鏄惁閲嶆柊璇锋眰鍩庡競鏁版嵁鎺ュ彛)
				 */
				function whetherRequest() {
					if((secondary === cityCode) || (cityCode === data.get('cityCode'))) {
						return true;
					} else {
						return false;
					}
				}
			});

			/***/
		}),

	/***/
	0:
		/***/
		(function(module, exports) {

			module.exports = jQuery;

			/***/
		}),

	/***/
	1:
		/***/
		(function(module, exports) {

//			module.exports = T8tCommon;

			/***/
		}),

	/***/
	"12dl":
		/***/
		(function(module, exports, __webpack_require__) {

			(function webpackUniversalModuleDefinition(root, factory) {
				if(true)
					module.exports = factory(__webpack_require__(0));
				else if(typeof define === 'function' && define.amd)
					define(["jQuery"], factory);
				else if(typeof exports === 'object')
					exports["Aser"] = factory(require("jquery"));
				else
					root["Aser"] = factory(root["jQuery"]);
			})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
				return /******/ (function(modules) { // webpackBootstrap
					/******/ // The module cache
					/******/
					var installedModules = {};

					/******/ // The require function
					/******/
					function __webpack_require__(moduleId) {

						/******/ // Check if module is in cache
						/******/
						if(installedModules[moduleId])
							/******/
							return installedModules[moduleId].exports;

						/******/ // Create a new module (and put it into the cache)
						/******/
						var module = installedModules[moduleId] = {
							/******/
							exports: {},
							/******/
							id: moduleId,
							/******/
							loaded: false
							/******/
						};

						/******/ // Execute the module function
						/******/
						modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

						/******/ // Flag the module as loaded
						/******/
						module.loaded = true;

						/******/ // Return the exports of the module
						/******/
						return module.exports;
						/******/
					}

					/******/ // expose the modules object (__webpack_modules__)
					/******/
					__webpack_require__.m = modules;

					/******/ // expose the module cache
					/******/
					__webpack_require__.c = installedModules;

					/******/ // __webpack_public_path__
					/******/
					__webpack_require__.p = "dist";

					/******/ // Load entry module and return exports
					/******/
					return __webpack_require__(0);
					/******/
				})
				/************************************************************************/
				/******/
				([
					/* 0 */
					/***/
					function(module, exports, __webpack_require__) {

						(function(root, factory) {

							if(true) {
								module.exports = factory();
							} else if(typeof define === 'function' && define.cmd) {
								// 鍏煎seajs cmd,娌℃湁鏆撮湶exports鍒板叏灞€
								define(factory);
							} else if(typeof define === 'function' && define.amd) {
								define(factory);
							} else {
								root.Aser = factory();
							}

						})(this, function() {

							'use strict';

							// 渚濊禆jquery
							var $ = __webpack_require__(1);

							var Aser = {};

							Aser.VERSION = "1.0.0";

							// Aser 鍩虹绫� 鎻愪緵Class銆丒vents銆丄ttribute 鍜� Aspect 鏀寔銆傛簮鐮佹潵鑷狝ralejs
							Aser.Base = __webpack_require__(2);

							// Aser 浜嬩欢娉ㄥ唽椹卞姩
							Aser.Events = __webpack_require__(4);

							// Aser cookie鎿嶄綔
							Aser.Cookie = __webpack_require__(7);

							// Aser 娴忚鍣ㄦ娴�
							Aser.Detector = __webpack_require__(8);

							// Aser url 澶勭悊鍑芥暟搴�
							Aser.URL = __webpack_require__(9);

							// Aser utils 甯哥敤鍑芥暟搴�
							Aser.Utils = __webpack_require__(10);

							// Aser repoter
							Aser.Reporter = __webpack_require__(11);

							// Aser 鍏ㄥ眬娉ㄥ唽鍙傛暟绠＄悊
							var Config = __webpack_require__(12);
							Aser.Globals = new Config().init();
							Aser.Config = Config;

							Aser.set = function(key, val) {
								return Aser.Globals.set(key, val);
							};

							Aser.get = function(key) {
								return Aser.Globals.get(key);
							};

							Aser.remove = function(key) {
								return Aser.Globals.del(key);
							};

							return Aser;
						});

						/***/
					},
					/* 1 */
					/***/
					function(module, exports) {

						module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

						/***/
					},
					/* 2 */
					/***/
					function(module, exports, __webpack_require__) {

						/*
						 * to8toJL Javascript Library
						 * description: 婧愮爜鏉ヨ嚜aralejs
						 * Base 鏄竴涓熀纭€绫伙紝鎻愪緵 Class銆丒vents銆丄ttrs 鍜� Aspect 鏀寔銆�
						 * version: v1.0 2016-01-05
						 * author: carl.wu<carl.wu@corp.to8to.com>
						 * site: http://www.to8to.com/
						 *
						 */

						(function(root, factory) {
							if(true) {
								module.exports = factory();
							} else if(typeof define === 'function' && define.amd) {
								define(factory);
							} else {
								root.Base = factory();
							}
						})(this, function() {

							var Class = __webpack_require__(3);
							var Events = __webpack_require__(4);
							var Aspect = __webpack_require__(5);
							var Attribute = __webpack_require__(6);

							var Base = Class.create({
								Implements: [Events, Aspect, Attribute],

								initialize: function(config) {
									this.initAttrs(config);

									// Automatically register `this._onChangeAttr` method as
									// a `change:attr` event handler.
									parseEventsFromInstance(this, this.attrs);
								},

								destroy: function() {
									this.off();

									for(var p in this) {
										if(this.hasOwnProperty(p)) {
											delete this[p];
										}
									}

									// Destroy should be called only once, generate a fake destroy after called
									// https://github.com/aralejs/widget/issues/50
									this.destroy = function() {};
								}
							});

							function parseEventsFromInstance(host, attrs) {
								for(var attr in attrs) {
									if(attrs.hasOwnProperty(attr)) {
										var m = '_onChange' + ucfirst(attr);
										if(host[m]) {
											host.on('change:' + attr, host[m]);
										}
									}
								}
							}

							function ucfirst(str) {
								return str.charAt(0).toUpperCase() + str.substring(1);
							}

							return Base;
						});

						/***/
					},
					/* 3 */
					/***/
					function(module, exports, __webpack_require__) {

						/*
						 * to8toJL Javascript Library
						 * description: 鎻愪緵绠€娲佺殑 OO 瀹炵幇 婧愮爜鏉ヨ嚜aralejs
						 * version: v1.0 2016-01-05
						 * author: carl.wu<carl.wu@corp.to8to.com>
						 * site: http://www.to8to.com/
						 *
						 */

						function _Class(o) {
							// Convert existed function to _Class.
							if(!(this instanceof _Class) && isFunction(o)) {
								return _Classify(o)
							}
						}

						// Create a new _Class.
						//
						//  var SuperPig = _Class.create({
						//    Extends: Animal,
						//    Implements: Flyable,
						//    initialize: function() {
						//      SuperPig.super_Class.initialize.apply(this, arguments)
						//    },
						//    Statics: {
						//      COLOR: 'red'
						//    }
						// })
						//
						_Class.create = function(parent, properties) {
							if(!isFunction(parent)) {
								properties = parent
								parent = null
							}

							properties || (properties = {})
							parent || (parent = properties.Extends || _Class)
							properties.Extends = parent

							// The created _Class constructor
							function Sub_Class() {
								// Call the parent constructor.
								parent.apply(this, arguments)

								// Only call initialize in self constructor.
								if(this.constructor === Sub_Class && this.initialize) {
									this.initialize.apply(this, arguments)
								}
							}

							// Inherit _Class (static) properties from parent.
							if(parent !== _Class) {
								mix(Sub_Class, parent, parent.StaticsWhiteList)
							}

							// Add instance properties to the sub_Class.
							implement.call(Sub_Class, properties)

							// Make sub_Class extendable.
							return _Classify(Sub_Class)
						}

						function implement(properties) {
							var key, value

							for(key in properties) {
								value = properties[key]

								if(_Class.Mutators.hasOwnProperty(key)) {
									_Class.Mutators[key].call(this, value)
								} else {
									this.prototype[key] = value
								}
							}
						}

						// Create a sub _Class based on `_Class`.
						_Class.extend = function(properties) {
							properties || (properties = {})
							properties.Extends = this

							return _Class.create(properties)
						}

						function _Classify(cls) {
							cls.extend = _Class.extend
							cls.implement = implement
							return cls
						}

						// Mutators define special properties.
						_Class.Mutators = {

							'Extends': function(parent) {
								var existed = this.prototype
								var proto = createProto(parent.prototype)

								// Keep existed properties.
								mix(proto, existed)

								// Enforce the constructor to be what we expect.
								proto.constructor = this

								// Set the prototype chain to inherit from `parent`.
								this.prototype = proto

								// Set a convenience property in case the parent's prototype is
								// needed later.
								this.super_Class = parent.prototype
							},

							'Implements': function(items) {
								isArray(items) || (items = [items])
								var proto = this.prototype,
									item

								while(item = items.shift()) {
									mix(proto, item.prototype || item)
								}
							},

							'Statics': function(staticProperties) {
								mix(this, staticProperties)
							}
						}

						// Shared empty constructor function to aid in prototype-chain creation.
						function Ctor() {}

						// See: http://jsperf.com/object-create-vs-new-ctor
						var createProto = Object.__proto__ ?
							function(proto) {
								return {
									__proto__: proto
								}
							} :
							function(proto) {
								Ctor.prototype = proto
								return new Ctor()
							}

						// Helpers
						// ------------

						function mix(r, s, wl) {
							// Copy "all" properties including inherited ones.
							for(var p in s) {
								if(s.hasOwnProperty(p)) {
									if(wl && indexOf(wl, p) === -1) continue

									// 鍦� iPhone 1 浠ｇ瓑璁惧鐨� Safari 涓紝prototype 涔熶細琚灇涓惧嚭鏉ワ紝闇€鎺掗櫎
									if(p !== 'prototype') {
										r[p] = s[p]
									}
								}
							}
						}

						var toString = Object.prototype.toString

						var isArray = Array.isArray || function(val) {
							return toString.call(val) === '[object Array]'
						}

						var isFunction = function(val) {
							return toString.call(val) === '[object Function]'
						}

						var indexOf = Array.prototype.indexOf ?
							function(arr, item) {
								return arr.indexOf(item)
							} :
							function(arr, item) {
								for(var i = 0, len = arr.length; i < len; i++) {
									if(arr[i] === item) {
										return i
									}
								}
								return -1
							}

						if(true) {
							module.exports = _Class;
						}

						/***/
					},
					/* 4 */
					/***/
					function(module, exports, __webpack_require__) {

						(function(root, factory) {
							if(true) {
								module.exports = factory();
							} else if(typeof define === 'function' && define.amd) {
								define(factory);
							} else {
								root.Events = factory();
							}
						})(this, function() {

							// Regular expression used to split event strings
							var eventSplitter = /\s+/;

							// A module that can be mixed in to *any object* in order to provide it
							// with custom events. You may bind with `on` or remove with `off` callback
							// functions to an event; `trigger`-ing an event fires all callbacks in
							// succession.
							//
							//     var object = new Events();
							//     object.on('expand', function(){ alert('expanded'); });
							//     object.trigger('expand');
							//
							function Events() {}

							// Bind one or more space separated events, `events`, to a `callback`
							// function. Passing `"all"` will bind the callback to all events fired.
							Events.prototype.on = function(events, callback, context) {
								var cache, event, list;
								if(!callback) return this;

								cache = this.__events || (
									this.__events = {});
								events = events.split(eventSplitter);

								while(event = events.shift()) {
									list = cache[event] || (
										cache[event] = [])
									list.push(callback, context);
								}

								return this;
							}

							Events.prototype.once = function(events, callback, context) {
								var that = this;
								var cb = function() {
									that.off(events, cb);
									callback.apply(context || that, arguments);
								}
								return this.on(events, cb, context);
							}

							// Remove one or many callbacks. If `context` is null, removes all callbacks
							// with that function. If `callback` is null, removes all callbacks for the
							// event. If `events` is null, removes all bound callbacks for all events.
							Events.prototype.off = function(events, callback, context) {
								var cache, event, list, i;

								// No events, or removing *all* events.
								if(!(
										cache = this.__events)) return this;
								if(!(
										events || callback || context)) {
									delete this.__events;
									return this;
								}

								events = events ? events.split(eventSplitter) : keys(cache)

								// Loop through the callback list, splicing where appropriate.
								while(event = events.shift()) {
									list = cache[event];
									if(!list) continue;

									if(!(
											callback || context)) {
										delete cache[event];
										continue;
									}

									for(i = list.length - 2; i >= 0; i -= 2) {
										if(!(
												callback && list[i] !== callback ||
												context && list[i + 1] !== context)) {
											list.splice(i, 2);
										}
									}
								}

								return this;
							}

							// Trigger one or many events, firing all bound callbacks. Callbacks are
							// passed the same arguments as `trigger` is, apart from the event name
							// (unless you're listening on `"all"`, which will cause your callback to
							// receive the true name of the event as the first argument).
							Events.prototype.trigger = function(events) {
								var cache, event, all, list, i, len, rest = [],
									args, returned = true;
								if(!(
										cache = this.__events)) return this;

								events = events.split(eventSplitter);

								// Fill up `rest` with the callback arguments.  Since we're only copying
								// the tail of `arguments`, a loop is much faster than Array#slice.
								for(i = 1, len = arguments.length; i < len; i++) {
									rest[i - 1] = arguments[i];
								}

								// For each event, walk through the list of callbacks twice, first to
								// trigger the event, then to trigger any `"all"` callbacks.
								while(event = events.shift()) {
									// Copy callback lists to prevent modification.
									if(all = cache.all) all = all.slice();
									if(list = cache[event]) list = list.slice();

									// Execute event callbacks except one named "all"
									if(event !== 'all') {
										returned = triggerEvents(list, rest, this) && returned;
									}

									// Execute "all" callbacks.
									returned = triggerEvents(all, [event].concat(rest), this) && returned;
								}

								return returned;
							}

							Events.prototype.emit = Events.prototype.trigger;

							// Helpers
							// -------

							var keys = Object.keys;

							if(!keys) {
								keys = function(o) {
									var result = [];

									for(var name in o) {
										if(o.hasOwnProperty(name)) {
											result.push(name);
										}
									}
									return result;
								}
							}

							// Mix `Events` to object instance or Class function.
							Events.mixTo = function(receiver) {
								var proto = Events.prototype;

								if(isFunction(receiver)) {
									for(var key in proto) {
										if(proto.hasOwnProperty(key)) {
											receiver.prototype[key] = proto[key];
										}
									}
									Object.keys(proto).forEach(function(key) {
										receiver.prototype[key] = proto[key];
									})
								} else {
									var event = new Events;
									for(var key in proto) {
										if(proto.hasOwnProperty(key)) {
											copyProto(key);
										}
									}
								}

								function copyProto(key) {
									receiver[key] = function() {
										proto[key].apply(event, Array.prototype.slice.call(arguments));
										return this;
									}
								}
							}

							// Execute callbacks
							function triggerEvents(list, args, context) {
								var pass = true

								if(list) {
									var i = 0,
										l = list.length,
										a1 = args[0],
										a2 = args[1],
										a3 = args[2];
									// call is faster than apply, optimize less than 3 argu
									// http://blog.csdn.net/zhengyinhui100/article/details/7837127
									switch(args.length) {
										case 0:
											for(; i < l; i += 2) {
												pass = list[i].call(list[i + 1] || context) !== false && pass;
											}
											break;
										case 1:
											for(; i < l; i += 2) {
												pass = list[i].call(list[i + 1] || context, a1) !== false && pass;
											}
											break;
										case 2:
											for(; i < l; i += 2) {
												pass = list[i].call(list[i + 1] || context, a1, a2) !== false && pass;
											}
											break;
										case 3:
											for(; i < l; i += 2) {
												pass = list[i].call(list[i + 1] || context, a1, a2, a3) !== false && pass;
											}
											break;
										default:
											for(; i < l; i += 2) {
												pass = list[i].apply(list[i + 1] || context, args) !== false && pass;
											}
											break;
									}
								}
								// trigger will return false if one of the callbacks return false
								return pass;
							}

							function isFunction(func) {
								return Object.prototype.toString.call(func) === '[object Function]';
							}

							return Events;
						});

						/***/
					},
					/* 5 */
					/***/
					function(module, exports, __webpack_require__) {

						/*
						 * to8toJL Javascript Library
						 * description: 婧愮爜鏉ヨ嚜aralejs
						 * version: v1.0 2016-01-05
						 * author: carl.wu<carl.wu@corp.to8to.com>
						 * site: http://www.to8to.com/
						 *
						 */

						var Aspect = Aspect || {};

						// 鍦ㄦ寚瀹氭柟娉曟墽琛屽墠锛屽厛鎵ц callback
						Aspect.before = function(methodName, callback, context) {
							return weave.call(this, 'before', methodName, callback, context);
						};

						// 鍦ㄦ寚瀹氭柟娉曟墽琛屽悗锛屽啀鎵ц callback
						Aspect.after = function(methodName, callback, context) {
							return weave.call(this, 'after', methodName, callback, context);
						};

						// Helpers
						// -------

						var eventSplitter = /\s+/;

						function weave(when, methodName, callback, context) {
							var names = methodName.split(eventSplitter);
							var name, method;

							while(name = names.shift()) {
								method = getMethod(this, name);
								if(!method.__isAspected) {
									wrap.call(this, name);
								}
								this.on(when + ':' + name, callback, context);
							}

							return this;
						}

						function getMethod(host, methodName) {
							var method = host[methodName];
							if(!method) {
								throw new Error('Invalid method name: ' + methodName);
							}
							return method;
						}

						function wrap(methodName) {
							var old = this[methodName];

							this[methodName] = function() {
								var args = Array.prototype.slice.call(arguments);
								var beforeArgs = ['before:' + methodName].concat(args);

								// prevent if trigger return false
								if(this.trigger.apply(this, beforeArgs) === false) return;

								var ret = old.apply(this, arguments);
								var afterArgs = ['after:' + methodName, ret].concat(args);
								this.trigger.apply(this, afterArgs);

								return ret;
							};

							this[methodName].__isAspected = true;
						}

						if(true) {
							module.exports = Aspect;
						}

						/***/
					},
					/* 6 */
					/***/
					function(module, exports, __webpack_require__) {

						/*
						 * to8toJL Javascript Library
						 * description:
						 * version: v1.0 2016-01-05
						 * author: carl.wu<carl.wu@corp.to8to.com>
						 * site: http://www.to8to.com/
						 *
						 */

						var Attribute = Attribute || {};

						// 璐熻矗 attributes 鐨勫垵濮嬪寲
						// attributes 鏄笌瀹炰緥鐩稿叧鐨勭姸鎬佷俊鎭紝鍙鍙啓锛屽彂鐢熷彉鍖栨椂锛屼細鑷姩瑙﹀彂鐩稿叧浜嬩欢
						Attribute.initAttrs = function(config) {
							// initAttrs 鏄湪鍒濆鍖栨椂璋冪敤鐨勶紝榛樿鎯呭喌涓嬪疄渚嬩笂鑲畾娌℃湁 attrs锛屼笉瀛樺湪瑕嗙洊闂
							var attrs = this.attrs = {};

							// Get all inherited attributes.
							var specialProps = this.propsInAttrs || [];
							mergeInheritedAttrs(attrs, this, specialProps);

							// Merge user-specific attributes from config.
							if(config) {
								mergeUserValue(attrs, config);
							}

							// 瀵逛簬鏈� setter 鐨勫睘鎬э紝瑕佺敤鍒濆鍊� set 涓€涓嬶紝浠ヤ繚璇佸叧鑱斿睘鎬т篃涓€鍚屽垵濮嬪寲
							setSetterAttrs(this, attrs, config);

							// Convert `on/before/afterXxx` config to event handler.
							parseEventsFromAttrs(this, attrs);

							// 灏� this.attrs 涓婄殑 special properties 鏀惧洖 this 涓�
							copySpecialProps(specialProps, this, attrs, true);
						};

						// Get the value of an attribute.
						Attribute.get = function(key) {
							var attr = this.attrs[key] || {};
							var val = attr.value;
							return attr.getter ? attr.getter.call(this, val, key) : val;
						};

						// Set a hash of model attributes on the object, firing `"change"` unless
						// you choose to silence it.
						Attribute.set = function(key, val, options) {
							var attrs = {};

							// set("key", val, options)
							if(isString(key)) {
								attrs[key] = val;
							}
							// set({ "key": val, "key2": val2 }, options)
							else {
								attrs = key;
								options = val;
							}

							options || (options = {});
							var silent = options.silent;
							var override = options.override;

							var now = this.attrs;
							var changed = this.__changedAttrs || (this.__changedAttrs = {});

							for(key in attrs) {
								if(!attrs.hasOwnProperty(key)) continue;

								var attr = now[key] || (now[key] = {});
								val = attrs[key];

								if(attr.readOnly) {
									throw new Error('This attribute is readOnly: ' + key);
								}

								// invoke setter
								if(attr.setter) {
									val = attr.setter.call(this, val, key);
								}

								// 鑾峰彇璁剧疆鍓嶇殑 prev 鍊�
								var prev = this.get(key);

								// 鑾峰彇闇€瑕佽缃殑 val 鍊�
								// 濡傛灉璁剧疆浜� override 涓� true锛岃〃绀鸿寮哄埗瑕嗙洊锛屽氨涓嶅幓 merge 浜�
								// 閮戒负瀵硅薄鏃讹紝鍋� merge 鎿嶄綔锛屼互淇濈暀 prev 涓婃病鏈夎鐩栫殑鍊�
								if(!override && isPlainObject(prev) && isPlainObject(val)) {
									val = merge(merge({}, prev), val);
								}

								// set finally
								now[key].value = val;

								// invoke change event
								// 鍒濆鍖栨椂瀵� set 鐨勮皟鐢紝涓嶈Е鍙戜换浣曚簨浠�
								if(!this.__initializingAttrs && !isEqual(prev, val)) {
									if(silent) {
										changed[key] = [val, prev];
									} else {
										this.trigger('change:' + key, val, prev, key);
									}
								}
							}

							return this;
						};

						// Call this method to manually fire a `"change"` event for triggering
						// a `"change:attribute"` event for each changed attribute.
						Attribute.change = function() {
							var changed = this.__changedAttrs;

							if(changed) {
								for(var key in changed) {
									if(changed.hasOwnProperty(key)) {
										var args = changed[key];
										this.trigger('change:' + key, args[0], args[1], key);
									}
								}
								delete this.__changedAttrs;
							}

							return this;
						};

						// for test
						// exports._isPlainObject = isPlainObject;

						// Helpers
						// -------

						var toString = Object.prototype.toString;
						var hasOwn = Object.prototype.hasOwnProperty;

						/**
						 * Detect the JScript [[DontEnum]] bug:
						 * In IE < 9 an objects own properties, shadowing non-enumerable ones, are
						 * made non-enumerable as well.
						 * https://github.com/bestiejs/lodash/blob/7520066fc916e205ef84cb97fbfe630d7c154158/lodash.js#L134-L144
						 */
						/** Detect if own properties are iterated after inherited properties (IE < 9) */
						var iteratesOwnLast;
						(function() {
							var props = [];

							function Ctor() {
								this.x = 1;
							}
							Ctor.prototype = {
								'valueOf': 1,
								'y': 1
							};
							for(var prop in new Ctor()) {
								props.push(prop);
							}
							iteratesOwnLast = props[0] !== 'x';
						}());

						var isArray = Array.isArray || function(val) {
							return toString.call(val) === '[object Array]';
						};

						function isString(val) {
							return toString.call(val) === '[object String]';
						}

						function isFunction(val) {
							return toString.call(val) === '[object Function]';
						}

						function isWindow(o) {
							return o != null && o == o.window;
						}

						function isPlainObject(o) {
							// Must be an Object.
							// Because of IE, we also have to check the presence of the constructor
							// property. Make sure that DOM nodes and window objects don't
							// pass through, as well
							if(!o || toString.call(o) !== "[object Object]" ||
								o.nodeType || isWindow(o)) {
								return false;
							}

							try {
								// Not own constructor property must be Object
								if(o.constructor &&
									!hasOwn.call(o, "constructor") &&
									!hasOwn.call(o.constructor.prototype, "isPrototypeOf")) {
									return false;
								}
							} catch(e) {
								// IE8,9 Will throw exceptions on certain host objects #9897
								return false;
							}

							var key;

							// Support: IE<9
							// Handle iteration over inherited properties before own properties.
							// http://bugs.jquery.com/ticket/12199
							if(iteratesOwnLast) {
								for(key in o) {
									return hasOwn.call(o, key);
								}
							}

							// Own properties are enumerated firstly, so to speed up,
							// if last one is own, then all properties are own.
							for(key in o) {}

							return key === undefined || hasOwn.call(o, key);
						}

						function isEmptyObject(o) {
							if(!o || toString.call(o) !== "[object Object]" ||
								o.nodeType || isWindow(o) || !o.hasOwnProperty) {
								return false;
							}

							for(var p in o) {
								if(o.hasOwnProperty(p)) return false;
							}
							return true;
						}

						function merge(receiver, supplier) {
							var key, value;

							for(key in supplier) {
								if(supplier.hasOwnProperty(key)) {
									receiver[key] = cloneValue(supplier[key], receiver[key]);
								}
							}

							return receiver;
						}

						// 鍙� clone 鏁扮粍鍜� plain object锛屽叾浠栫殑淇濇寔涓嶅彉
						function cloneValue(value, prev) {
							if(isArray(value)) {
								value = value.slice();
							} else if(isPlainObject(value)) {
								isPlainObject(prev) || (prev = {});

								value = merge(prev, value);
							}

							return value;
						}

						var keys = Object.keys;

						if(!keys) {
							keys = function(o) {
								var result = [];

								for(var name in o) {
									if(o.hasOwnProperty(name)) {
										result.push(name);
									}
								}
								return result;
							};
						}

						function mergeInheritedAttrs(attrs, instance, specialProps) {
							var inherited = [];
							var proto = instance.constructor.prototype;

							while(proto) {
								// 涓嶈鎷垮埌 prototype 涓婄殑
								if(!proto.hasOwnProperty('attrs')) {
									proto.attrs = {};
								}

								// 灏� proto 涓婄殑鐗规畩 properties 鏀惧埌 proto.attrs 涓婏紝浠ヤ究鍚堝苟
								copySpecialProps(specialProps, proto.attrs, proto);

								// 涓虹┖鏃朵笉娣诲姞
								if(!isEmptyObject(proto.attrs)) {
									inherited.unshift(proto.attrs);
								}

								// 鍚戜笂鍥炴函涓€绾�
								proto = proto.constructor.superclass;
							}

							// Merge and clone default values to instance.
							for(var i = 0, len = inherited.length; i < len; i++) {
								mergeAttrs(attrs, normalize(inherited[i]));
							}
						}

						function mergeUserValue(attrs, config) {
							mergeAttrs(attrs, normalize(config, true), true);
						}

						function copySpecialProps(specialProps, receiver, supplier, isAttr2Prop) {
							for(var i = 0, len = specialProps.length; i < len; i++) {
								var key = specialProps[i];

								if(supplier.hasOwnProperty(key)) {
									receiver[key] = isAttr2Prop ? receiver.get(key) : supplier[key];
								}
							}
						}

						var EVENT_PATTERN = /^(on|before|after)([A-Z].*)$/;
						var EVENT_NAME_PATTERN = /^(Change)?([A-Z])(.*)/;

						function parseEventsFromAttrs(host, attrs) {
							for(var key in attrs) {
								if(attrs.hasOwnProperty(key)) {
									var value = attrs[key].value,
										m;

									if(isFunction(value) && (m = key.match(EVENT_PATTERN))) {
										host[m[1]](getEventName(m[2]), value);
										delete attrs[key];
									}
								}
							}
						}

						// Converts `Show` to `show` and `ChangeTitle` to `change:title`
						function getEventName(name) {
							var m = name.match(EVENT_NAME_PATTERN);
							var ret = m[1] ? 'change:' : '';
							ret += m[2].toLowerCase() + m[3];
							return ret;
						}

						function setSetterAttrs(host, attrs, config) {
							var options = {
								silent: true
							};
							host.__initializingAttrs = true;

							for(var key in config) {
								if(config.hasOwnProperty(key)) {
									if(attrs[key].setter) {
										host.set(key, config[key], options);
									}
								}
							}

							delete host.__initializingAttrs;
						}

						var ATTR_SPECIAL_KEYS = ['value', 'getter', 'setter', 'readOnly'];

						// normalize `attrs` to
						//
						//   {
						//      value: 'xx',
						//      getter: fn,
						//      setter: fn,
						//      readOnly: boolean
						//   }
						//
						function normalize(attrs, isUserValue) {
							var newAttrs = {};

							for(var key in attrs) {
								var attr = attrs[key];

								if(!isUserValue &&
									isPlainObject(attr) &&
									hasOwnProperties(attr, ATTR_SPECIAL_KEYS)) {
									newAttrs[key] = attr;
									continue;
								}

								newAttrs[key] = {
									value: attr
								};
							}

							return newAttrs;
						}

						var ATTR_OPTIONS = ['setter', 'getter', 'readOnly'];

						// 涓撶敤浜� attrs 鐨� merge 鏂规硶
						function mergeAttrs(attrs, inheritedAttrs, isUserValue) {
							var key, value;
							var attr;

							for(key in inheritedAttrs) {
								if(inheritedAttrs.hasOwnProperty(key)) {
									value = inheritedAttrs[key];
									attr = attrs[key];

									if(!attr) {
										attr = attrs[key] = {};
									}

									// 浠庝弗璋ㄤ笂鏉ヨ锛岄亶鍘� ATTR_SPECIAL_KEYS 鏇村ソ
									// 浠庢€ц兘鏉ヨ锛岀洿鎺� 浜鸿倝璧嬪€� 鏇村揩
									// 杩欓噷杩樻槸閫夋嫨 鎬ц兘浼樺厛

									// 鍙湁 value 瑕佸鍒跺師鍊硷紝鍏朵粬鐨勭洿鎺ヨ鐩栧嵆鍙�
									(value['value'] !== undefined) && (attr['value'] = cloneValue(value['value'], attr['value']));

									// 濡傛灉鏄敤鎴疯祴鍊硷紝鍙鑰冭檻value
									if(isUserValue) continue;

									for(var i in ATTR_OPTIONS) {
										var option = ATTR_OPTIONS[i];
										if(value[option] !== undefined) {
											attr[option] = value[option];
										}
									}
								}
							}

							return attrs;
						}

						function hasOwnProperties(object, properties) {
							for(var i = 0, len = properties.length; i < len; i++) {
								if(object.hasOwnProperty(properties[i])) {
									return true;
								}
							}
							return false;
						}

						// 瀵逛簬 attrs 鐨� value 鏉ヨ锛屼互涓嬪€奸兘璁や负鏄┖鍊硷細 null, undefined, '', [], {}
						function isEmptyAttrValue(o) {
							return o == null || // null, undefined
								(isString(o) || isArray(o)) && o.length === 0 || // '', []
								isEmptyObject(o); // {}
						}

						// 鍒ゆ柇灞炴€у€� a 鍜� b 鏄惁鐩哥瓑锛屾敞鎰忎粎閫傜敤浜庡睘鎬у€肩殑鍒ゆ柇锛岄潪鏅€傜殑 === 鎴� == 鍒ゆ柇銆�
						function isEqual(a, b) {
							if(a === b) return true;

							if(isEmptyAttrValue(a) && isEmptyAttrValue(b)) return true;

							// Compare `[[Class]]` names.
							var className = toString.call(a);
							if(className != toString.call(b)) return false;

							switch(className) {

								// Strings, numbers, dates, and booleans are compared by value.
								case '[object String]':
									// Primitives and their corresponding object wrappers are
									// equivalent; thus, `"5"` is equivalent to `new String("5")`.
									return a == String(b);

								case '[object Number]':
									// `NaN`s are equivalent, but non-reflexive. An `equal`
									// comparison is performed for other numeric values.
									return a != +a ? b != +b : (a == 0 ? 1 / a == 1 / b : a == +b);

								case '[object Date]':
								case '[object Boolean]':
									// Coerce dates and booleans to numeric primitive values.
									// Dates are compared by their millisecond representations.
									// Note that invalid dates with millisecond representations
									// of `NaN` are not equivalent.
									return +a == +b;

									// RegExps are compared by their source patterns and flags.
								case '[object RegExp]':
									return a.source == b.source &&
										a.global == b.global &&
										a.multiline == b.multiline &&
										a.ignoreCase == b.ignoreCase;

									// 绠€鍗曞垽鏂暟缁勫寘鍚殑 primitive 鍊兼槸鍚︾浉绛�
								case '[object Array]':
									var aString = a.toString();
									var bString = b.toString();

									// 鍙鍖呭惈闈� primitive 鍊硷紝涓轰簡绋冲Ε璧疯锛岄兘杩斿洖 false
									return aString.indexOf('[object') === -1 &&
										bString.indexOf('[object') === -1 &&
										aString === bString;
							}

							if(typeof a != 'object' || typeof b != 'object') return false;

							// 绠€鍗曞垽鏂袱涓璞℃槸鍚︾浉绛夛紝鍙垽鏂涓€灞�
							if(isPlainObject(a) && isPlainObject(b)) {

								// 閿€间笉鐩哥瓑锛岀珛鍒昏繑鍥� false
								if(!isEqual(keys(a), keys(b))) {
									return false;
								}

								// 閿浉鍚岋紝浣嗘湁鍊间笉绛夛紝绔嬪埢杩斿洖 false
								for(var p in a) {
									if(a[p] !== b[p]) return false;
								}

								return true;
							}

							// 鍏朵粬鎯呭喌杩斿洖 false, 浠ラ伩鍏嶈鍒ゅ鑷� change 浜嬩欢娌″彂鐢�
							return false;
						}

						if(true) {
							module.exports = Attribute;
						}

						/***/
					},
					/* 7 */
					/***/
					function(module, exports, __webpack_require__) {

						/*
						 * to8toJL Javascript Library
						 * description: cookie鎿嶄綔绫伙紝鎻愪緵get銆乻et 銆乺emove
						 * version: v1.0 2016-01-04
						 * author: carl.wu<carl.wu@corp.to8to.com>
						 * site: http://www.to8to.com/
						 *
						 */

						(function(root, factory) {
							if(true) {
								module.exports = factory();
							} else if(typeof define === 'function' && define.amd) {
								define(factory);
							} else {
								root.Cookie = factory();
							}
						})(this, function() {
							var Cookie = {};

							var decode = decodeURIComponent;
							var encode = encodeURIComponent;

							// Helpers

							function parseCookieString(text, shouldDecode) {
								var cookies = {};

								if(isString(text) && text.length > 0) {

									var decodeValue = shouldDecode ? decode : same;
									var cookieParts = text.split(/;\s/g);
									var cookieName;
									var cookieValue;
									var cookieNameValue;

									for(var i = 0, len = cookieParts.length; i < len; i++) {

										// Check for normally-formatted cookie (name-value)
										cookieNameValue = cookieParts[i].match(/([^=]+)=/i);
										if(cookieNameValue instanceof Array) {
											try {
												cookieName = decode(cookieNameValue[1]);
												cookieValue = decodeValue(cookieParts[i]
													.substring(cookieNameValue[1].length + 1));
											} catch(ex) {
												// Intentionally ignore the cookie -
												// the encoding is wrong
											}
										} else {
											// Means the cookie does not have an "=", so treat it as
											// a boolean flag
											cookieName = decode(cookieParts[i]);
											cookieValue = '';
										}

										if(cookieName) {
											cookies[cookieName] = cookieValue;
										}
									}

								}

								return cookies;
							}

							function isString(o) {
								return typeof o === 'string';
							}

							function isNonEmptyString(s) {
								return isString(s) && s !== '';
							}

							function validateCookieName(name) {
								if(!isNonEmptyString(name)) {
									throw new TypeError('Cookie name must be a non-empty string');
								}
							}

							function same(s) {
								return s;
							}

							/**
							 * Returns the cookie value for the given name.
							 *
							 * @param {String} name The name of the cookie to retrieve.
							 *
							 * @param {Function|Object} options (Optional) An object containing one or
							 *     more cookie options: raw (true/false) and converter (a function).
							 *     The converter function is run on the value before returning it. The
							 *     function is not used if the cookie doesn't exist. The function can be
							 *     passed instead of the options object for conveniently. When raw is
							 *     set to true, the cookie value is not URI decoded.
							 *
							 * @return {*} If no converter is specified, returns a string or undefined
							 *     if the cookie doesn't exist. If the converter is specified, returns
							 *     the value returned from the converter.
							 */
							Cookie.get = function(name, options) {
								validateCookieName(name);

								if(typeof options === 'function') {
									options = {
										converter: options
									};
								} else {
									options = options || {};
								}

								var cookies = parseCookieString(document.cookie, !options['raw']);
								return(
									options.converter || same)(cookies[name]);
							};

							/**
							 * Sets a cookie with a given name and value.
							 *
							 * @param {string} name The name of the cookie to set.
							 *
							 * @param {*} value The value to set for the cookie.
							 *
							 * @param {Object} options (Optional) An object containing one or more
							 *     cookie options: path (a string), domain (a string),
							 *     expires (number or a Date object), secure (true/false),
							 *     and raw (true/false). Setting raw to true indicates that the cookie
							 *     should not be URI encoded before being set.
							 *
							 * @return {string} The created cookie string.
							 */
							Cookie.set = function(name, value, options) {
								validateCookieName(name);

								options = options || {};
								var expires = options['expires'] || 5000;
								var domain = options['domain'];
								var path = options['path'];

								if(!options['raw']) {
									value = encode(String(value));
								}

								var text = name + '=' + value;

								// expires
								var date = expires;
								if(typeof date === 'number') {
									date = new Date();
									date.setDate(date.getDate() + expires);
								}
								if(date instanceof Date) {
									text += '; expires=' + date.toUTCString();
								}

								// domain
								if(isNonEmptyString(domain)) {
									text += '; domain=' + domain;
								}

								// path
								if(isNonEmptyString(path)) {
									text += '; path=' + path;
								}

								// secure
								if(options['secure']) {
									text += '; secure';
								}

								document.cookie = text;
								return text;
							};

							/**
							 * Removes a cookie from the machine by setting its expiration date to
							 * sometime in the past.
							 *
							 * @param {string} name The name of the cookie to remove.
							 *
							 * @param {Object} options (Optional) An object containing one or more
							 *     cookie options: path (a string), domain (a string),
							 *     and secure (true/false). The expires option will be overwritten
							 *     by the method.
							 *
							 * @return {string} The created cookie string.
							 */
							Cookie.remove = function(name, options) {
								options = options || {};
								options['expires'] = new Date(0);
								return this.set(name, '', options);
							};

							return Cookie;

						});

						/***/
					},
					/* 8 */
					/***/
					function(module, exports, __webpack_require__) {

						/* WEBPACK VAR INJECTION */
						(function(global) {
							/*
							 * FileName: detector.js
							 * Description: 瀹㈡埛绔俊鎭娴嬪伐鍏�
							 * Date: 2016-01-26
							 * version: 1.0
							 * author: <carl.wu@corp.to8to.com>
							 */

							(function(root, factory) {
								if(true) {
									module.exports = factory();
								} else if(typeof define === 'function' && define.amd) {
									define(factory);
								} else {
									root.Detector = factory();
								}
							})(this, function() {
								var win = typeof window === "undefined" ? global : window;
								var external = win.external;
								var re_msie = /\b(?:msie |ie |trident\/[0-9].*rv[ :])([0-9.]+)/;
								var re_blackberry_10 = /\bbb10\b.+?\bversion\/([\d.]+)/;
								var re_blackberry_6_7 = /\bblackberry\b.+\bversion\/([\d.]+)/;
								var re_blackberry_4_5 = /\bblackberry\d+\/([\d.]+)/;
								var NA_VERSION = "-1";

								// 纭欢璁惧淇℃伅璇嗗埆琛ㄨ揪寮忋€�
								// 浣跨敤鏁扮粍鍙互鎸変紭鍏堢骇鎺掑簭銆�
								var DEVICES = [
									["nokia", function(ua) {
										// 涓嶈兘灏嗕袱涓〃杈惧紡鍚堝苟锛屽洜涓哄彲鑳藉嚭鐜� "nokia; nokia 960"
										// 杩欑鎯呭喌涓嬩細浼樺厛璇嗗埆鍑� nokia/-1
										if(ua.indexOf("nokia ") !== -1) {
											return /\bnokia ([0-9]+)?/;
										} else {
											return /\bnokia([a-z0-9]+)?/;
										}
									}],
									// 涓夋槦鏈� Android 鍜� WP 璁惧銆�
									["samsung", function(ua) {
										if(ua.indexOf("samsung") !== -1) {
											return /\bsamsung(?:[ \-](?:sgh|gt|sm))?-([a-z0-9]+)/;
										} else {
											return /\b(?:sgh|sch|gt|sm)-([a-z0-9]+)/;
										}
									}],
									["wp", function(ua) {
										return ua.indexOf("windows phone ") !== -1 ||
											ua.indexOf("xblwp") !== -1 ||
											ua.indexOf("zunewp") !== -1 ||
											ua.indexOf("windows ce") !== -1;
									}],
									["pc", "windows"],
									["ipad", "ipad"],
									// ipod 瑙勫垯搴旂疆浜� iphone 涔嬪墠銆�
									["ipod", "ipod"],
									["iphone", /\biphone\b|\biph(\d)/],
									["mac", "macintosh"],
									// 灏忕背
									["mi", /\bmi[ \-]?([a-z0-9 ]+(?= build|\)))/],
									// 绾㈢背
									["hongmi", /\bhm[ \-]?([a-z0-9]+)/],
									["aliyun", /\baliyunos\b(?:[\-](\d+))?/],
									["meizu", function(ua) {
										return ua.indexOf("meizu") >= 0 ?
											/\bmeizu[\/ ]([a-z0-9]+)\b/ :
											/\bm([0-9cx]{1,4})\b/;
									}],
									["nexus", /\bnexus ([0-9s.]+)/],
									["huawei", function(ua) {
										var re_mediapad = /\bmediapad (.+?)(?= build\/huaweimediapad\b)/;
										if(ua.indexOf("huawei-huawei") !== -1) {
											return /\bhuawei\-huawei\-([a-z0-9\-]+)/;
										} else if(re_mediapad.test(ua)) {
											return re_mediapad;
										} else {
											return /\bhuawei[ _\-]?([a-z0-9]+)/;
										}
									}],
									["lenovo", function(ua) {
										if(ua.indexOf("lenovo-lenovo") !== -1) {
											return /\blenovo\-lenovo[ \-]([a-z0-9]+)/;
										} else {
											return /\blenovo[ \-]?([a-z0-9]+)/;
										}
									}],
									// 涓叴
									["zte", function(ua) {
										if(/\bzte\-[tu]/.test(ua)) {
											return /\bzte-[tu][ _\-]?([a-su-z0-9\+]+)/;
										} else {
											return /\bzte[ _\-]?([a-su-z0-9\+]+)/;
										}
									}],
									// 姝ユ楂�
									["vivo", /\bvivo(?: ([a-z0-9]+))?/],
									["htc", function(ua) {
										if(/\bhtc[a-z0-9 _\-]+(?= build\b)/.test(ua)) {
											return /\bhtc[ _\-]?([a-z0-9 ]+(?= build))/;
										} else {
											return /\bhtc[ _\-]?([a-z0-9 ]+)/;
										}
									}],
									["oppo", /\boppo[_]([a-z0-9]+)/],
									["konka", /\bkonka[_\-]([a-z0-9]+)/],
									["sonyericsson", /\bmt([a-z0-9]+)/],
									["coolpad", /\bcoolpad[_ ]?([a-z0-9]+)/],
									["lg", /\blg[\-]([a-z0-9]+)/],
									["android", /\bandroid\b|\badr\b/],
									["blackberry", function(ua) {
										if(ua.indexOf("blackberry") >= 0) {
											return /\bblackberry\s?(\d+)/;
										}
										return "bb10";
									}]
								];

								// 鎿嶄綔绯荤粺淇℃伅璇嗗埆琛ㄨ揪寮�
								var OS = [
									["wp", function(ua) {
										if(ua.indexOf("windows phone ") !== -1) {
											return /\bwindows phone (?:os )?([0-9.]+)/;
										} else if(ua.indexOf("xblwp") !== -1) {
											return /\bxblwp([0-9.]+)/;
										} else if(ua.indexOf("zunewp") !== -1) {
											return /\bzunewp([0-9.]+)/;
										}
										return "windows phone";
									}],
									["windows", /\bwindows nt ([0-9.]+)/],
									["macosx", /\bmac os x ([0-9._]+)/],
									["ios", function(ua) {
										if(/\bcpu(?: iphone)? os /.test(ua)) {
											return /\bcpu(?: iphone)? os ([0-9._]+)/;
										} else if(ua.indexOf("iph os ") !== -1) {
											return /\biph os ([0-9_]+)/;
										} else {
											return /\bios\b/;
										}
									}],
									["yunos", /\baliyunos ([0-9.]+)/],
									["android", function(ua) {
										if(ua.indexOf("android") >= 0) {
											return /\bandroid[ \/-]?([0-9.x]+)?/;
										} else if(ua.indexOf("adr") >= 0) {
											if(ua.indexOf("mqqbrowser") >= 0) {
												return /\badr[ ]\(linux; u; ([0-9.]+)?/;
											} else {
												return /\badr(?:[ ]([0-9.]+))?/;
											}
										}
										return "android";
										//return /\b(?:android|\badr)(?:[\/\- ](?:\(linux; u; )?)?([0-9.x]+)?/;
									}],
									["chromeos", /\bcros i686 ([0-9.]+)/],
									["linux", "linux"],
									["windowsce", /\bwindows ce(?: ([0-9.]+))?/],
									["symbian", /\bsymbian(?:os)?\/([0-9.]+)/],
									["blackberry", function(ua) {
										var m = ua.match(re_blackberry_10) ||
											ua.match(re_blackberry_6_7) ||
											ua.match(re_blackberry_4_5);
										return m ? {
											version: m[1]
										} : "blackberry";
									}]
								];

								// 閽堝鍚屾簮鐨� TheWorld 鍜� 360 鐨� external 瀵硅薄杩涜妫€娴嬨€�
								// @param {String} key, 鍏抽敭瀛楋紝鐢ㄤ簬妫€娴嬫祻瑙堝櫒鐨勫畨瑁呰矾寰勪腑鍑虹幇鐨勫叧閿瓧銆�
								// @return {Undefined,Boolean,Object} 杩斿洖 undefined 鎴� false 琛ㄧず妫€娴嬫湭鍛戒腑銆�
								function checkTW360External(key) {
									if(!external) {
										return;
									} // return undefined.
									try {
										//        360瀹夎璺緞锛�
										//        C:%5CPROGRA~1%5C360%5C360se3%5C360SE.exe
										var runpath = external.twGetRunPath.toLowerCase();
										// 360SE 3.x ~ 5.x support.
										// 鏆撮湶鐨� external.twGetVersion 鍜� external.twGetSecurityID 鍧囦负 undefined銆�
										// 鍥犳鍙兘鐢� try/catch 鑰屾棤娉曚娇鐢ㄧ壒鎬у垽鏂€�
										var security = external.twGetSecurityID(win);
										var version = external.twGetVersion(security);

										if(runpath && runpath.indexOf(key) === -1) {
											return false;
										}
										if(version) {
											return {
												version: version
											};
										}
									} catch(ex) { /* */ }
								}

								var ENGINE = [
									["edgehtml", /edge\/([0-9.]+)/],
									["trident", re_msie],
									["blink", function() {
										return "chrome" in win && "CSS" in win && /\bapplewebkit[\/]?([0-9.+]+)/;
									}],
									["webkit", /\bapplewebkit[\/]?([0-9.+]+)/],
									["gecko", function(ua) {
										var match = ua.match(/\brv:([\d\w.]+).*\bgecko\/(\d+)/);
										if(match) {
											return {
												version: match[1] + "." + match[2]
											};
										}
									}],
									["presto", /\bpresto\/([0-9.]+)/],
									["androidwebkit", /\bandroidwebkit\/([0-9.]+)/],
									["coolpadwebkit", /\bcoolpadwebkit\/([0-9.]+)/],
									["u2", /\bu2\/([0-9.]+)/],
									["u3", /\bu3\/([0-9.]+)/]
								];
								var BROWSER = [
									// Microsoft Edge Browser, Default browser in Windows 10.
									["edge", /edge\/([0-9.]+)/],
									// Sogou.
									["sogou", function(ua) {
										if(ua.indexOf("sogoumobilebrowser") >= 0) {
											return /sogoumobilebrowser\/([0-9.]+)/;
										} else if(ua.indexOf("sogoumse") >= 0) {
											return true;
										}
										return / se ([0-9.x]+)/;
									}],
									// TheWorld (涓栫晫涔嬬獥)
									// 鐢变簬瑁欏甫鍏崇郴锛孴heWorld API 涓� 360 楂樺害閲嶅悎銆�
									// 鍙兘閫氳繃 UA 鍜岀▼搴忓畨瑁呰矾寰勪腑鐨勫簲鐢ㄧ▼搴忓悕鏉ュ尯鍒嗐€�
									// TheWorld 鐨� UA 姣� 360 鏇撮潬璋憋紝鎵€鏈夊皢 TheWorld 鐨勮鍒欐斁缃埌 360 涔嬪墠銆�
									["theworld", function() {
										var x = checkTW360External("theworld");
										if(typeof x !== "undefined") {
											return x;
										}
										return /theworld(?: ([\d.])+)?/;
									}],
									// 360SE, 360EE.
									["360", function(ua) {
										var x = checkTW360External("360se");
										if(typeof x !== "undefined") {
											return x;
										}
										if(ua.indexOf("360 aphone browser") !== -1) {
											return /\b360 aphone browser \(([^\)]+)\)/;
										}
										return /\b360(?:se|ee|chrome|browser)\b/;
									}],
									// Maxthon
									["maxthon", function() {
										try {
											if(external && (external.mxVersion || external.max_version)) {
												return {
													version: external.mxVersion || external.max_version
												};
											}
										} catch(ex) { /* */ }
										return /\b(?:maxthon|mxbrowser)(?:[ \/]([0-9.]+))?/;
									}],
									["micromessenger", /\bmicromessenger\/([\d.]+)/],
									["qq", /\bm?qqbrowser\/([0-9.]+)/],
									["green", "greenbrowser"],
									["tt", /\btencenttraveler ([0-9.]+)/],
									["liebao", function(ua) {
										if(ua.indexOf("liebaofast") >= 0) {
											return /\bliebaofast\/([0-9.]+)/;
										}
										if(ua.indexOf("lbbrowser") === -1) {
											return false;
										}
										var version;
										try {
											if(external && external.LiebaoGetVersion) {
												version = external.LiebaoGetVersion();
											}
										} catch(ex) { /* */ }
										return {
											version: version || NA_VERSION
										};
									}],
									["tao", /\btaobrowser\/([0-9.]+)/],
									["coolnovo", /\bcoolnovo\/([0-9.]+)/],
									["saayaa", "saayaa"],
									// 鏈夊熀浜� Chromniun 鐨勬€ラ€熸ā寮忓拰鍩轰簬 IE 鐨勫吋瀹规ā寮忋€傚繀椤诲湪 IE 鐨勮鍒欎箣鍓嶃€�
									["baidu", /\b(?:ba?idubrowser|baiduhd)[ \/]([0-9.x]+)/],
									// 鍚庨潰浼氬仛淇鐗堟湰鍙凤紝杩欓噷鍙鑳借瘑鍒槸 IE 鍗冲彲銆�
									["ie", re_msie],
									["mi", /\bmiuibrowser\/([0-9.]+)/],
									// Opera 15 涔嬪悗寮€濮嬩娇鐢� Chromniun 鍐呮牳锛岄渶瑕佹斁鍦� Chrome 鐨勮鍒欎箣鍓嶃€�
									["opera", function(ua) {
										var re_opera_old = /\bopera.+version\/([0-9.ab]+)/;
										var re_opera_new = /\bopr\/([0-9.]+)/;
										return re_opera_old.test(ua) ? re_opera_old : re_opera_new;
									}],
									["oupeng", /\boupeng\/([0-9.]+)/],
									["yandex", /yabrowser\/([0-9.]+)/],
									// 鏀粯瀹濇墜鏈哄鎴风
									["ali-ap", function(ua) {
										if(ua.indexOf("aliapp") > 0) {
											return /\baliapp\(ap\/([0-9.]+)\)/;
										} else {
											return /\balipayclient\/([0-9.]+)\b/;
										}
									}],
									// 鏀粯瀹濆钩鏉垮鎴风
									["ali-ap-pd", /\baliapp\(ap-pd\/([0-9.]+)\)/],
									// 鏀粯瀹濆晢鎴峰鎴风
									["ali-am", /\baliapp\(am\/([0-9.]+)\)/],
									// 娣樺疂鎵嬫満瀹㈡埛绔�
									["ali-tb", /\baliapp\(tb\/([0-9.]+)\)/],
									// 娣樺疂骞虫澘瀹㈡埛绔�
									["ali-tb-pd", /\baliapp\(tb-pd\/([0-9.]+)\)/],
									// 澶╃尗鎵嬫満瀹㈡埛绔�
									["ali-tm", /\baliapp\(tm\/([0-9.]+)\)/],
									// 澶╃尗骞虫澘瀹㈡埛绔�
									["ali-tm-pd", /\baliapp\(tm-pd\/([0-9.]+)\)/],
									// UC 娴忚鍣紝鍙兘浼氳璇嗗埆涓� Android 娴忚鍣紝瑙勫垯闇€瑕佸墠缃€�
									// UC 妗岄潰鐗堟祻瑙堝櫒鎼哄甫 Chrome 淇℃伅锛岄渶瑕佹斁鍦� Chrome 涔嬪墠銆�
									["uc", function(ua) {
										if(ua.indexOf("ucbrowser/") >= 0) {
											return /\bucbrowser\/([0-9.]+)/;
										} else if(ua.indexOf("ubrowser/") >= 0) {
											return /\bubrowser\/([0-9.]+)/;
										} else if(/\buc\/[0-9]/.test(ua)) {
											return /\buc\/([0-9.]+)/;
										} else if(ua.indexOf("ucweb") >= 0) {
											// `ucweb/2.0` is compony info.
											// `UCWEB8.7.2.214/145/800` is browser info.
											return /\bucweb([0-9.]+)?/;
										} else {
											return /\b(?:ucbrowser|uc)\b/;
										}
									}],
									["chrome", / (?:chrome|crios|crmo)\/([0-9.]+)/],
									// Android 榛樿娴忚鍣ㄣ€傝瑙勫垯闇€瑕佸湪 safari 涔嬪墠銆�
									["android", function(ua) {
										if(ua.indexOf("android") === -1) {
											return;
										}
										return /\bversion\/([0-9.]+(?: beta)?)/;
									}],
									["blackberry", function(ua) {
										var m = ua.match(re_blackberry_10) ||
											ua.match(re_blackberry_6_7) ||
											ua.match(re_blackberry_4_5);
										return m ? {
											version: m[1]
										} : "blackberry";
									}],
									["safari", /\bversion\/([0-9.]+(?: beta)?)(?: mobile(?:\/[a-z0-9]+)?)? safari\//],
									// 濡傛灉涓嶈兘琚瘑鍒负 Safari锛屽垯鐚滄祴鏄� WebView銆�
									["webview", /\bcpu(?: iphone)? os (?:[0-9._]+).+\bapplewebkit\b/],
									["firefox", /\bfirefox\/([0-9.ab]+)/],
									["nokia", /\bnokiabrowser\/([0-9.]+)/]
								];

								var WebRules = {
									device: DEVICES,
									os: OS,
									browser: BROWSER,
									engine: ENGINE,
									re_msie: re_msie
								};

								var NA_VERSION = "-1";
								var NA = {
									name: "na",
									version: NA_VERSION
								};

								function typeOf(type) {
									return function(object) {
										return Object.prototype.toString.call(object) === "[object " + type + "]";
									};
								}
								var isString = typeOf("String");
								var isRegExp = typeOf("RegExp");
								var isObject = typeOf("Object");
								var isFunction = typeOf("Function");

								function each(object, factory) {
									for(var i = 0, l = object.length; i < l; i++) {
										if(factory.call(object, object[i], i) === false) {
											break;
										}
									}
								}

								// UserAgent Detector.
								// @param {String} ua, userAgent.
								// @param {Object} expression
								// @return {Object}
								//    杩斿洖 null 琛ㄧず褰撳墠琛ㄨ揪寮忔湭鍖归厤鎴愬姛銆�
								function detect(name, expression, ua) {
									var expr = isFunction(expression) ? expression.call(null, ua) : expression;
									if(!expr) {
										return null;
									}
									var info = {
										name: name,
										version: NA_VERSION,
										codename: ""
									};
									if(expr === true) {
										return info;
									} else if(isString(expr)) {
										if(ua.indexOf(expr) !== -1) {
											return info;
										}
									} else if(isObject(expr)) {
										if(expr.hasOwnProperty("version")) {
											info.version = expr.version;
										}
										return info;
									} else if(isRegExp(expr)) {
										var m = expr.exec(ua);
										if(m) {
											if(m.length >= 2 && m[1]) {
												info.version = m[1].replace(/_/g, ".");
											} else {
												info.version = NA_VERSION;
											}
											return info;
										}
									}
								}

								// 鍒濆鍖栬瘑鍒€�
								function init(ua, patterns, factory, detector) {
									var detected = NA;
									each(patterns, function(pattern) {
										var d = detect(pattern[0], pattern[1], ua);
										if(d) {
											detected = d;
											return false;
										}
									});
									factory.call(detector, detected.name, detected.version);
								}

								var Detector = function(rules) {
									this._rules = rules;

									// 瑙ｆ瀽 UserAgent 瀛楃涓�
									// @param {String} ua, userAgent string.
									// @return {Object}
									this.parse = function(ua) {
										ua = (ua || "").toLowerCase();
										var d = {};

										init(ua, this._rules.device, function(name, version) {
											var v = parseFloat(version);
											d.device = {
												name: name,
												version: v,
												fullVersion: version
											};
											d.device[name] = v;
										}, d);

										init(ua, this._rules.os, function(name, version) {
											var v = parseFloat(version);
											d.os = {
												name: name,
												version: v,
												fullVersion: version
											};
											d.os[name] = v;
										}, d);

										var ieCore = this.IEMode(ua);

										init(ua, this._rules.engine, function(name, version) {
											var mode = version;
											// IE 鍐呮牳鐨勬祻瑙堝櫒锛屼慨澶嶇増鏈彿鍙婂吋瀹规ā寮忋€�
											if(ieCore) {
												version = ieCore.engineVersion || ieCore.engineMode;
												mode = ieCore.engineMode;
											}
											var v = parseFloat(version);
											d.engine = {
												name: name,
												version: v,
												fullVersion: version,
												mode: parseFloat(mode),
												fullMode: mode,
												compatible: ieCore ? ieCore.compatible : false
											};
											d.engine[name] = v;
										}, d);

										init(ua, this._rules.browser, function(name, version) {
											var mode = version;
											// IE 鍐呮牳鐨勬祻瑙堝櫒锛屼慨澶嶆祻瑙堝櫒鐗堟湰鍙婂吋瀹规ā寮忋€�
											if(ieCore) {
												// 浠呬慨鏀� IE 娴忚鍣ㄧ殑鐗堟湰锛屽叾浠� IE 鍐呮牳鐨勭増鏈笉淇敼銆�
												if(name === "ie") {
													version = ieCore.browserVersion;
												}
												mode = ieCore.browserMode;
											}
											var v = parseFloat(version);
											d.browser = {
												name: name,
												version: v,
												fullVersion: version,
												mode: parseFloat(mode),
												fullMode: mode,
												compatible: ieCore ? ieCore.compatible : false
											};
											d.browser[name] = v;
										}, d);
										return d;
									};

									// 瑙ｆ瀽浣跨敤 Trident 鍐呮牳鐨勬祻瑙堝櫒鐨� `娴忚鍣ㄦā寮廯 鍜� `鏂囨。妯″紡` 淇℃伅銆�
									// @param {String} ua, userAgent string.
									// @return {Object}
									this.IEMode = function(ua) {
										if(!this._rules.re_msie.test(ua)) {
											return null;
										}

										var m;
										var engineMode;
										var engineVersion;
										var browserMode;
										var browserVersion;

										// IE8 鍙婂叾浠ヤ笂鎻愪緵鏈� Trident 淇℃伅锛�
										// 榛樿鐨勫吋瀹规ā寮忥紝UA 涓� Trident 鐗堟湰涓嶅彂鐢熷彉鍖栥€�
										if(ua.indexOf("trident/") !== -1) {
											m = /\btrident\/([0-9.]+)/.exec(ua);
											if(m && m.length >= 2) {
												// 鐪熷疄寮曟搸鐗堟湰銆�
												engineVersion = m[1];
												var v_version = m[1].split(".");
												v_version[0] = parseInt(v_version[0], 10) + 4;
												browserVersion = v_version.join(".");
											}
										}

										m = this._rules.re_msie.exec(ua);
										browserMode = m[1];
										var v_mode = m[1].split(".");
										if(typeof browserVersion === "undefined") {
											browserVersion = browserMode;
										}
										v_mode[0] = parseInt(v_mode[0], 10) - 4;
										engineMode = v_mode.join(".");
										if(typeof engineVersion === "undefined") {
											engineVersion = engineMode;
										}

										return {
											browserVersion: browserVersion,
											browserMode: browserMode,
											engineVersion: engineVersion,
											engineMode: engineMode,
											compatible: engineVersion !== engineMode
										};
									}

								}

								var userAgent = navigator.userAgent || "";
								//var platform = navigator.platform || "";
								var appVersion = navigator.appVersion || "";
								var vendor = navigator.vendor || "";
								var ua = userAgent + " " + appVersion + " " + vendor;

								var detector = new Detector(WebRules);

								// 瑙ｆ瀽浣跨敤 Trident 鍐呮牳鐨勬祻瑙堝櫒鐨� `娴忚鍣ㄦā寮廯 鍜� `鏂囨。妯″紡` 淇℃伅銆�
								// @param {String} ua, userAgent string.
								// @return {Object}
								function IEMode(ua) {
									if(!WebRules.re_msie.test(ua)) {
										return null;
									}

									var m;
									var engineMode;
									var engineVersion;
									var browserMode;
									var browserVersion;

									// IE8 鍙婂叾浠ヤ笂鎻愪緵鏈� Trident 淇℃伅锛�
									// 榛樿鐨勫吋瀹规ā寮忥紝UA 涓� Trident 鐗堟湰涓嶅彂鐢熷彉鍖栥€�
									if(ua.indexOf("trident/") !== -1) {
										m = /\btrident\/([0-9.]+)/.exec(ua);
										if(m && m.length >= 2) {
											// 鐪熷疄寮曟搸鐗堟湰銆�
											engineVersion = m[1];
											var v_version = m[1].split(".");
											v_version[0] = parseInt(v_version[0], 10) + 4;
											browserVersion = v_version.join(".");
										}
									}

									m = WebRules.re_msie.exec(ua);
									browserMode = m[1];
									var v_mode = m[1].split(".");
									if(typeof browserVersion === "undefined") {
										browserVersion = browserMode;
									}
									v_mode[0] = parseInt(v_mode[0], 10) - 4;
									engineMode = v_mode.join(".");
									if(typeof engineVersion === "undefined") {
										engineVersion = engineMode;
									}

									return {
										browserVersion: browserVersion,
										browserMode: browserMode,
										engineVersion: engineVersion,
										engineMode: engineMode,
										compatible: engineVersion !== engineMode
									};
								}

								function WebParse(ua) {
									var d = detector.parse(ua);

									var ieCore = IEMode(ua);

									// IE 鍐呮牳鐨勬祻瑙堝櫒锛屼慨澶嶇増鏈彿鍙婂吋瀹规ā寮忋€�
									if(ieCore) {
										var engineName = d.engine.name;
										var engineVersion = ieCore.engineVersion || ieCore.engineMode;
										var ve = parseFloat(engineVersion);
										var engineMode = ieCore.engineMode;

										d.engine = {
											name: engineName,
											version: ve,
											fullVersion: engineVersion,
											mode: parseFloat(engineMode),
											fullMode: engineMode,
											compatible: ieCore ? ieCore.compatible : false
										};
										d.engine[d.engine.name] = ve;

										var browserName = d.browser.name;
										// IE 鍐呮牳鐨勬祻瑙堝櫒锛屼慨澶嶆祻瑙堝櫒鐗堟湰鍙婂吋瀹规ā寮忋€�
										// 浠呬慨鏀� IE 娴忚鍣ㄧ殑鐗堟湰锛屽叾浠� IE 鍐呮牳鐨勭増鏈笉淇敼銆�
										var browserVersion = d.browser.fullVersion;
										if(browserName === "ie") {
											browserVersion = ieCore.browserVersion;
										}
										var browserMode = ieCore.browserMode;
										var vb = parseFloat(browserVersion);
										d.browser = {
											name: browserName,
											version: vb,
											fullVersion: browserVersion,
											mode: parseFloat(browserMode),
											fullMode: browserMode,
											compatible: ieCore ? ieCore.compatible : false
										};
										d.browser[browserName] = vb;
									}
									return d;
								}

								var Tan = WebParse(ua);
								Tan.parse = WebParse;
								return Tan;
							});

							/* WEBPACK VAR INJECTION */
						}.call(exports, (function() {
							return this;
						}())))

						/***/
					},
					/* 9 */
					/***/
					function(module, exports, __webpack_require__) {

						/*
						 * FileName: url
						 * 甯哥敤url澶勭悊鍑芥暟
						 * Date: 2016-01-20
						 * version: 1.0
						 * author: <carl.wu@corp.to8to.com>
						 */

						(function(root, factory) {
							if(true) {
								module.exports = factory();
							} else if(typeof define === 'function' && define.amd) {
								define(factory);
							} else {
								root.URL = factory();
							}
						})(this, function() {
							var URL = URL || {};

							/**
							 * url query瑙ｆ瀽鎴恛bject
							 * @param url 瑕佽В鏋愮殑url
							 * @author carl.wu
							 * @returns {{}} 杩斿洖鐨剄uery瀵硅薄锛宬v鏍煎紡
							 */
							URL.parseQuery = function(url) {
								var url = url || location.href;
								var query = url ? (url.split('?')[1] || '') : location.search;
								var queryList = query.substr(0).split('&');
								var parseRes = {};

								if(queryList.length > 0) {
									for(var i = 0; i < queryList.length; i++) {
										var kv = queryList[i].split('=');
										parseRes[kv[0]] = decodeURIComponent(kv[1]);
									}
								}

								return parseRes;
							};

							/**
							 * 椤甸潰璺宠浆鍑芥暟
							 * @param url 瑕佽烦杞殑url
							 * @param _blank 鏄惁鏂扮獥鍙ｆ墦寮€
							 * @param context 涓婁笅鏂囩幆澧冿紝閫傜敤浜巌frame涓紝鍙互鏄湰绐楀彛涔熷彲浠ユ槸鐖剁獥鍙�
							 * @author carl.wu
							 */
							URL.redirect = function(url, _blank, context) {
								context = context || window;
								var url = url || context.location.href;
								if(_blank === true) {
									context.open(url);
								} else {
									context.location.href = url;
								}
							};

							/**
							 * 鏋勯€犻摼鎺�
							 * @param url 鍘熷url
							 * @param query 瑕佹嫾鎺ョ殑query瀵硅薄
							 * @author carl.wu
							 * @returns {string}
							 */
							URL.build = function(url, query) {
								var url = url || "";
								var connector = url.indexOf('?') !== -1 ? '&' : '?';
								var queryString = '';

								for(var i in query) {
									queryString += (i + '=' + encodeURIComponent(query[i]) + '&');
								}

								queryString = queryString.substr(0, queryString.lastIndexOf('&'));
								return url + connector + queryString;
							};

							/**
							 * url鍏ㄨВ鏋�
							 * @param url
							 * @returns {
							 *     source: *,  // 鍏ㄨ矾寰�
							 *     protocol: 'http',  // 鍗忚
							 *     host: 'localhost',
							 *     port: 3306,
							 *     query: '?a=1&b=2',
							 *     file: 'index.html',
							 *     hash: '123',
							 *     path: '/a/b/index.html',
							 *     segments: Array
							 * }
							 */
							URL.parse = function(url) {
								var _aTag = document.createElement('a');
								_aTag.href = url;

								return {
									source: url,
									protocol: _aTag.protocol.replace(':', ''),
									host: _aTag.hostname,
									port: _aTag.port,
									query: _aTag.search,
									file: (_aTag.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
									hash: _aTag.hash.replace('#', ''),
									path: _aTag.pathname.replace(/^([^\/])/, '/$1'),
									relative: (_aTag.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
									segments: _aTag.pathname.replace(/^\//, '').split('/')
								}
							};

							/**
							 * url缂栫爜
							 * @param url
							 * @author carl.wu
							 * @returns {string}
							 */
							URL.encode = function(url) {
								return encodeURIComponent(url);
							};

							/**
							 * url瑙ｇ爜
							 * @param url
							 * @author carl.wu
							 * @returns {string}
							 */
							URL.decode = function(url) {
								return decodeURIComponent(url);
							};

							return URL;
						});

						/***/
					},
					/* 10 */
					/***/
					function(module, exports, __webpack_require__) {

						/*
						 * FileName: utils
						 * 甯哥敤宸ュ叿鍑芥暟搴�
						 * Date: 2016-01-20
						 * version: 1.0
						 * author: <carl.wu@corp.to8to.com>
						 */

						(function(root, factory) {
							if(true) {
								module.exports = factory();
							} else if(typeof define === 'function' && define.amd) {
								define(factory);
							} else {
								root.Utils = factory();
							}
						})(this, function() {

							var Utils = Utils || {};
							var Repoter = __webpack_require__(11);
							Repoter.setReportAddr("http://www.to8to.com/frontend/report/");

							/**
							 * 閿欒涓婃姤鏂规硶
							 * @param errorText 閿欒淇℃伅鎻忚堪鏂囧瓧
							 * @author carl.wu
							 */
							Utils.errorReporter = function(errorText) {
								var postErr = {
									err: errorText,
									ts: Math.ceil(new Date().getTime() / 1000),
									url: location.href
								};

								Repoter.get(postErr);
							};

							/**
							 * 鍏ㄧ珯缁熶竴ajax浣跨敤锛屽湪jquery鐨勫熀纭€涓婂啀鍖呰涓€灞�
							 * 灏佽鍏ㄥ眬缁熶竴error澶勭悊锛屼究浜庢悳闆嗙珯鐐归敊璇俊鎭�
							 * @param opt ajax鍙傛暟
							 * @author carl.wu
							 * @returns {*}
							 */
							Utils.ajax = function(opt) {
								var errorHandler = function(XMLHttpRequest, textStatus, errorThrown) {
									// 鎵ц鑷畾涔塭rror澶勭悊
									Utils.isFunction(opt.error) && opt.error.call(this, XMLHttpRequest, textStatus, errorThrown);
									// 閿欒涓婃姤
									var reporter = opt.errorReporter || Utils.errorReporter;
									reporter.call(this, textStatus);
								};

								return $.ajax($.extend({
									// 鍏ㄥ眬閫氱敤error澶勭悊
									error: errorHandler
								}, opt));
							};

							/**
							 * 鍙傛暟鏄惁宸茬粡澹版槑
							 * @param value
							 * @author carl.wu
							 * @returns {boolean}
							 */
							Utils.isset = function(value) {
								return typeof value !== 'undefined';
							};

							/**
							 * 鍙傛暟鏄惁鏄竷灏斿瀷
							 * @param boolean value
							 * @author carl.wu
							 * @returns {boolean}
							 */
							Utils.isBoolean = function(value) {
								return typeof value === 'boolean';
							};

							/**
							 * 鍙傛暟鏄惁鏄瓧绗﹀瀷
							 * @param value
							 * @author carl.wu
							 * @returns {boolean}
							 */
							Utils.isString = function(value) {
								return typeof value === 'string';
							};

							/**
							 * 鍙傛暟鏄惁鏄璞�
							 * @param value
							 * @author carl.wu
							 * @returns {boolean}
							 */
							Utils.isObject = function(value) {
								return Object.prototype.toString.call(value) == '[object Object]';
							};

							/**
							 * 鍙傛暟鏄惁鏄暟缁�
							 * @param value 瑕侀獙璇佺殑鏁扮粍
							 * @author carl.wu
							 * @returns {boolean}
							 */
							Utils.isArray = function(value) {
								return Object.prototype.toString.call(value) == '[object Array]';
							};

							/**
							 * 鍙傛暟鏄惁鏄痜unction
							 * @param value
							 * @author carl.wu
							 * @returns {boolean}
							 */
							Utils.isFunction = function(value) {
								return typeof value === 'function';
							};

							/**
							 * 楠岃瘉鍙傛暟鏄惁涓哄悎娉曠殑鎵嬫満鍙风爜
							 * @param phone 瑕侀獙璇佺殑鎵嬫満鍙风爜
							 * @author carl.wu
							 * @return {boolean}
							 */
							Utils.isPhone = function(phone) {
								return /^((\(\d{2,3}\))|(\d{3}\-))?((1[345]\d{9})|(18\d{9}))$/.test(phone);
							};

							/**
							 * 楠岃瘉鍙傛暟鏄惁涓哄悎娉曠殑閭鍙�
							 * @param mail 瑕侀獙璇佺殑閭鍙风爜
							 * @author carl.wu
							 * @returns {boolean}
							 */
							Utils.isEmail = function(email) {
								return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email);
							};

							/**
							 * 楠岃瘉鏌愪釜鍊煎湪鏁扮粍涓槸鍚﹀瓨鍦�
							 * 涓ユ牸妯″紡浣跨敤===鏉ラ獙璇侊紝闈炰弗鏍兼ā寮忎娇鐢�==
							 * @param arr 鏁扮粍
							 * @param find 闇€瑕侀獙璇佺殑鍊�
							 * @param strict 鏄惁寮€鍚弗鏍兼ā寮忥紝榛樿false涓嶅紑鍚�
							 * @author carl.wu
							 * @returns {boolean}
							 */
							Utils.inArray = function(arr, find, strict) {
								var arrLen = arr.length || 0;
								var strict = strict || false,
									_cache, _flag = false;
								if(arrLen <= 0) return false;

								for(var i = 0; i < arrLen; i++) {
									_cache = arr[i];
									// 涓ユ牸妯″紡浣跨敤===鏉ラ獙璇侊紝闈炰弗鏍兼ā寮忎娇鐢�==
									_flag = strict ? _cache === find : _cache == find;
									if(_flag === true) break;
								}

								return _flag;
							};

							/**
							 * 寮傛鍔犺浇script鑴氭湰
							 * @param src 鑴氭湰璺緞
							 * @param container script鏍囩鎵€鍦ㄥ鍣�
							 * @param callback 鍔犺浇瀹屾垚鎴栧け璐ョ殑鍥炶皟鍑芥暟
							 * @author carl.wu
							 */
							Utils.loadScript = function(src, container, callback) {
								var container = container || document.head;
								var _script = document.createElement('script');
								_script.src = src;
								_script.onload = function(e) {
									Utils.isFunction(callback) && callback.call(_script, e);
								};
								_script.onerror = function(e) {
									Utils.isFunction(callback) && callback.call(_script, e);
								}

								container.appendChild(_script);
							};

							/**
							 * 寮傛鍔犺浇css鏍峰紡琛�
							 * @param src 鑴氭湰璺緞
							 * @param container script鏍囩鎵€鍦ㄥ鍣�
							 * @param callback 鍔犺浇瀹屾垚鎴栧け璐ョ殑鍥炶皟鍑芥暟
							 * @author carl.wu
							 */
							Utils.loadStyle = function(src, container, callback) {
								var container = container || document.head;
								var _link = document.createElement('link');
								_link.rel = "stylesheet";
								_link.href = src;
								_link.onload = function(e) {
									Utils.isFunction(callback) && callback.call(_link, e);
								};
								_link.onerror = function(e) {
									Utils.isFunction(callback) && callback.call(_link, e);
								}

								container.appendChild(_link);
							};

							/**
							 * 婊氬姩鏉¤繑鍥為《閮�
							 * @param effect 鏄惁鍔ㄧ敾鏁堟灉
							 * @param effectTime 鍔ㄧ敾鏃堕暱
							 * @author carl.wu
							 */
							Utils.back2Top = function(effect, effectTime) {
								var effect = effect || true;
								var effectTime = effectTime || 300;

								if(!effect) {
									window.scrollTo(0, 0);
								} else {
									$('html,body').animate({
										scrollTop: '0px'
									}, effectTime);
								}
							};

							return Utils;
						});

						/***/
					},
					/* 11 */
					/***/
					function(module, exports, __webpack_require__) {

						/*
						 * @FileName: reporter
						 * @Description: 渚濊禆jquery
						 * @Date: 2016-05-03
						 * @version: 1.0
						 * @author: <carl.wu@corp.to8to.com>
						 */

						(function(root, factory) {
							if(true) {
								module.exports = factory();
							} else if(typeof define === 'function' && define.amd) {
								define(factory);
							} else {
								root.Reporter = factory();
							}
						})(this, function() {

							var URL = __webpack_require__(9);
							var Reporter = Reporter || {};
							Reporter.reportAddr = "";

							Reporter.setReportAddr = function(url) {
								Reporter.reportAddr = url;
							};

							function isString(str) {
								return typeof str === 'string';
							}

							function isObject(value) {
								return Object.prototype.toString.call(value) == '[object Object]';
							}

							function isFunction(value) {
								return typeof value === 'function';
							}

							function parseArgs(args) {
								var argsLen = args.length,
									params = {
										url: Reporter.reportAddr,
										data: null,
										callback: null
									};

								if(argsLen == 1) {
									if(isString(args[0])) {
										params.url = args[0];
									} else {
										params.data = args[0];
									}
								} else {
									var arg2 = args[1];
									// 绗簩涓弬鏁颁负data
									if(arg2 !== undefined && isObject(arg2)) {
										params.data = arg2;
										params.callback = args[2] || null;
									} else if(arg2 !== undefined && isFunction(arg2)) {
										params.callback = arg2;
									}
								}

								return params;
							}

							/**
							 * 鏁版嵁涓婃姤, Post鏂瑰紡
							 * (url, [data]), ([data],[callback]), callback
							 */
							Reporter.post = function() {
								var params = parseArgs(arguments);
								return $.ajax({
									url: params.url,
									data: params.data,
									type: 'POST',
									success: function(response) {
										params.callback && params.callback.call(this, response);
									}
								})
							};

							/**
							 * 鏁版嵁涓婃姤锛孏ET鏂瑰紡, 涓嶈法鍩�
							 * (url, [data]), ([data],[callback]), callback
							 */
							Reporter.get = function() {
								var params = parseArgs(arguments);
								// 閬垮厤缂撳瓨鍔犻殢鏈哄弬鏁�
								var data = params.data || {};
								var _Img = new Image();
								data['_'] = _random();
								_Img.onload = function() {
									params.callback && params.callback.call(this);
								};

								_Img.src = URL.build(params.url, params.data);
							};

							/**
							 * 鏁版嵁涓婃姤锛宩sonp
							 * (url, [data]), ([data],[callback]), callback
							 */
							Reporter.jsonp = function(url, data, cb) {
								var params = parseArgs(arguments);
								return $.ajax({
									url: params.url,
									data: params.data,
									dataType: 'jsonp',
									success: function(response) {
										params.callback && params.callback.call(this, response);
									}
								})
							};

							return Reporter;
						});

						/**
						 * 闅忔満浜斾綅鏁颁唬鐮�
						 * @returns {string}
						 * @private
						 */
						function _random() {
							return "" + Math.ceil(new Date() / 1000) + Math.ceil((Math.random() * 100000));
						}

						/***/
					},
					/* 12 */
					/***/
					function(module, exports, __webpack_require__) {

						/*
						 * FileName: config
						 * 閰嶇疆绠＄悊鏂囦欢锛屾彁渚涙坊鍔狅紝鍒犻櫎閰嶇疆椤规搷浣�
						 * Date: 2016-01-20
						 * version: 1.0
						 * author: <carl.wu@corp.to8to.com>
						 */

						function merge(source, target) {
							if(typeof source === 'object' && typeof target === 'object') {
								for(var key in target) {
									if(target.hasOwnProperty(key)) {
										source[key] = merge(source[key], target[key]);
									}
								}
							} else {
								source = target;
							}
							return source;
						}

						(function(root, factory) {
							if(true) {
								module.exports = factory();
							} else if(typeof define === 'function' && define.amd) {
								define(factory);
							} else {
								root.Config = factory();
							}
						})(this, function() {

							var Config = function() {};

							Config.prototype = {
								constructor: function() {
									this.init.apply(this, arguments);
								},
								init: function() {
									this.data = {};
									if(arguments.length > 0) {
										this.merge.apply(this, arguments);
									}
									return this;
								},
								get: function(path, def) {
									var item;
									var result = this.data || {};
									var paths = (path || '').split('.');

									for(var i in paths) {
										item = paths[i];
										if(item && (typeof result !== 'undefined')) {
											result = result[item];
										}
									}
									if(typeof result === 'undefined') {
										return def;
									} else {
										return result;
									}
								},
								set: function(path, value) {
									var key;
									if(typeof value === 'undefined') {
										this.data = path;
									} else {
										path = String(path || '').replace(/\s+/, '');
										if(path) {
											var paths = path.split('.'),
												last = paths.pop(),
												data = this.data || {};
											for(var i in paths) {
												key = paths[i];
												var type = typeof data[key];
												if(type === 'object') {
													data = data[key];
												} else if(type === 'undefined') {
													data = data[key] = {};
												} else {
													// forbiden
												}
											}
											data[last] = value;
										}
									}
									return this;
								},
								del: function(path) {
									path = String(path || '').replace(/\s+/, '');
									if(path) {
										var paths = path.split('.'),
											data = this.data,
											last = paths.pop(),
											key;
										for(var i = 0, len = paths.length; i < len; i++) {
											key = paths[i];
											if(typeof data[key] === 'object') {
												data = data[key];
											} else {
												return this;
											}
										}
										if(typeof data[last] !== 'undefined') {
											delete data[last];
										}
									}
									return this;
								},
								merge: function() {
									var self = this,
										arg;
									for(var k in arguments) {
										arg = arguments[k];
										if(typeof arg === 'object') {
											merge(self.data, arg);
										} else {
											// TODO
										}
									}
									return this;
								}
							};

							return Config;
						});

						/***/
					}
					/******/
				])
			});;

			/***/
		}),

	/***/
	3:
		/***/
		(function(module, exports) {

			/* (ignored) */

			/***/
		}),

	/***/
	"DuR2":
		/***/
		(function(module, exports) {

			var g;

			// This works in non-strict mode
			g = (function() {
				return this;
			})();

			try {
				// This works if eval is allowed (see CSP)
				g = g || Function("return this")() || (1, eval)("this");
			} catch(e) {
				// This works if the window reference is available
				if(typeof window === "object")
					g = window;
			}

			// g can still be undefined, but nothing to do about it...
			// We return undefined, instead of nothing here, so it's
			// easier to handle this case. if(!global) { ...}

			module.exports = g;

			/***/
		}),

	/***/
	"Jt9K":
		/***/
		(function(module, exports, __webpack_require__) {

			var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
			/*!
			 * https://github.com/es-shims/es5-shim
			 * @license es5-shim Copyright 2009-2015 by contributors, MIT License
			 * see https://github.com/es-shims/es5-shim/blob/master/LICENSE
			 */

			// vim: ts=4 sts=4 sw=4 expandtab

			// Add semicolon to prevent IIFE from being passed as argument to concatenated code.
			;

			// UMD (Universal Module Definition)
			// see https://github.com/umdjs/umd/blob/master/templates/returnExports.js
			(function(root, factory) {
				'use strict';

				/* global define, exports, module */
				if(true) {
					// AMD. Register as an anonymous module.
					!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
						__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
							(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
							__WEBPACK_AMD_DEFINE_FACTORY__),
						__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
				} else if(typeof exports === 'object') {
					// Node. Does not work with strict CommonJS, but
					// only CommonJS-like enviroments that support module.exports,
					// like Node.
					module.exports = factory();
				} else {
					// Browser globals (root is window)
					root.returnExports = factory();
				}
			}(this, function() {
				/**
				 * Brings an environment as close to ECMAScript 5 compliance
				 * as is possible with the facilities of erstwhile engines.
				 *
				 * Annotated ES5: http://es5.github.com/ (specific links below)
				 * ES5 Spec: http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf
				 * Required reading: http://javascriptweblog.wordpress.com/2011/12/05/extending-javascript-natives/
				 */

				// Shortcut to an often accessed properties, in order to avoid multiple
				// dereference that costs universally. This also holds a reference to known-good
				// functions.
				var $Array = Array;
				var ArrayPrototype = $Array.prototype;
				var $Object = Object;
				var ObjectPrototype = $Object.prototype;
				var $Function = Function;
				var FunctionPrototype = $Function.prototype;
				var $String = String;
				var StringPrototype = $String.prototype;
				var $Number = Number;
				var NumberPrototype = $Number.prototype;
				var array_slice = ArrayPrototype.slice;
				var array_splice = ArrayPrototype.splice;
				var array_push = ArrayPrototype.push;
				var array_unshift = ArrayPrototype.unshift;
				var array_concat = ArrayPrototype.concat;
				var array_join = ArrayPrototype.join;
				var call = FunctionPrototype.call;
				var apply = FunctionPrototype.apply;
				var max = Math.max;
				var min = Math.min;

				// Having a toString local variable name breaks in Opera so use to_string.
				var to_string = ObjectPrototype.toString;

				/* global Symbol */
				/* eslint-disable one-var-declaration-per-line, no-redeclare, max-statements-per-line */
				var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
				var isCallable; /* inlined from https://npmjs.com/is-callable */
				var fnToStr = Function.prototype.toString,
					constructorRegex = /^\s*class /,
					isES6ClassFn = function isES6ClassFn(value) {
						try {
							var fnStr = fnToStr.call(value);
							var singleStripped = fnStr.replace(/\/\/.*\n/g, '');
							var multiStripped = singleStripped.replace(/\/\*[.\s\S]*\*\//g, '');
							var spaceStripped = multiStripped.replace(/\n/mg, ' ').replace(/ {2}/g, ' ');
							return constructorRegex.test(spaceStripped);
						} catch(e) {
							return false; /* not a function */
						}
					},
					tryFunctionObject = function tryFunctionObject(value) {
						try {
							if(isES6ClassFn(value)) {
								return false;
							}
							fnToStr.call(value);
							return true;
						} catch(e) {
							return false;
						}
					},
					fnClass = '[object Function]',
					genClass = '[object GeneratorFunction]',
					isCallable = function isCallable(value) {
						if(!value) {
							return false;
						}
						if(typeof value !== 'function' && typeof value !== 'object') {
							return false;
						}
						if(hasToStringTag) {
							return tryFunctionObject(value);
						}
						if(isES6ClassFn(value)) {
							return false;
						}
						var strClass = to_string.call(value);
						return strClass === fnClass || strClass === genClass;
					};

				var isRegex; /* inlined from https://npmjs.com/is-regex */
				var regexExec = RegExp.prototype.exec,
					tryRegexExec = function tryRegexExec(value) {
						try {
							regexExec.call(value);
							return true;
						} catch(e) {
							return false;
						}
					},
					regexClass = '[object RegExp]';
				isRegex = function isRegex(value) {
					if(typeof value !== 'object') {
						return false;
					}
					return hasToStringTag ? tryRegexExec(value) : to_string.call(value) === regexClass;
				};
				var isString; /* inlined from https://npmjs.com/is-string */
				var strValue = String.prototype.valueOf,
					tryStringObject = function tryStringObject(value) {
						try {
							strValue.call(value);
							return true;
						} catch(e) {
							return false;
						}
					},
					stringClass = '[object String]';
				isString = function isString(value) {
					if(typeof value === 'string') {
						return true;
					}
					if(typeof value !== 'object') {
						return false;
					}
					return hasToStringTag ? tryStringObject(value) : to_string.call(value) === stringClass;
				};
				/* eslint-enable one-var-declaration-per-line, no-redeclare, max-statements-per-line */

				/* inlined from http://npmjs.com/define-properties */
				var supportsDescriptors = $Object.defineProperty && (function() {
					try {
						var obj = {};
						$Object.defineProperty(obj, 'x', {
							enumerable: false,
							value: obj
						});
						for(var _ in obj) { // jscs:ignore disallowUnusedVariables
							return false;
						}
						return obj.x === obj;
					} catch(e) { /* this is ES3 */
						return false;
					}
				}());
				var defineProperties = (function(has) {
					// Define configurable, writable, and non-enumerable props
					// if they don't exist.
					var defineProperty;
					if(supportsDescriptors) {
						defineProperty = function(object, name, method, forceAssign) {
							if(!forceAssign && (name in object)) {
								return;
							}
							$Object.defineProperty(object, name, {
								configurable: true,
								enumerable: false,
								writable: true,
								value: method
							});
						};
					} else {
						defineProperty = function(object, name, method, forceAssign) {
							if(!forceAssign && (name in object)) {
								return;
							}
							object[name] = method;
						};
					}
					return function defineProperties(object, map, forceAssign) {
						for(var name in map) {
							if(has.call(map, name)) {
								defineProperty(object, name, map[name], forceAssign);
							}
						}
					};
				}(ObjectPrototype.hasOwnProperty));

				//
				// Util
				// ======
				//

				/* replaceable with https://npmjs.com/package/es-abstract /helpers/isPrimitive */
				var isPrimitive = function isPrimitive(input) {
					var type = typeof input;
					return input === null || (type !== 'object' && type !== 'function');
				};

				var isActualNaN = $Number.isNaN || function isActualNaN(x) {
					return x !== x;
				};

				var ES = {
					// ES5 9.4
					// http://es5.github.com/#x9.4
					// http://jsperf.com/to-integer
					/* replaceable with https://npmjs.com/package/es-abstract ES5.ToInteger */
					ToInteger: function ToInteger(num) {
						var n = +num;
						if(isActualNaN(n)) {
							n = 0;
						} else if(n !== 0 && n !== (1 / 0) && n !== -(1 / 0)) {
							n = (n > 0 || -1) * Math.floor(Math.abs(n));
						}
						return n;
					},

					/* replaceable with https://npmjs.com/package/es-abstract ES5.ToPrimitive */
					ToPrimitive: function ToPrimitive(input) {
						var val, valueOf, toStr;
						if(isPrimitive(input)) {
							return input;
						}
						valueOf = input.valueOf;
						if(isCallable(valueOf)) {
							val = valueOf.call(input);
							if(isPrimitive(val)) {
								return val;
							}
						}
						toStr = input.toString;
						if(isCallable(toStr)) {
							val = toStr.call(input);
							if(isPrimitive(val)) {
								return val;
							}
						}
						throw new TypeError();
					},

					// ES5 9.9
					// http://es5.github.com/#x9.9
					/* replaceable with https://npmjs.com/package/es-abstract ES5.ToObject */
					ToObject: function(o) {
						if(o == null) { // this matches both null and undefined
							throw new TypeError("can't convert " + o + ' to object');
						}
						return $Object(o);
					},

					/* replaceable with https://npmjs.com/package/es-abstract ES5.ToUint32 */
					ToUint32: function ToUint32(x) {
						return x >>> 0;
					}
				};

				//
				// Function
				// ========
				//

				// ES-5 15.3.4.5
				// http://es5.github.com/#x15.3.4.5

				var Empty = function Empty() {};

				defineProperties(FunctionPrototype, {
					bind: function bind(that) { // .length is 1
						// 1. Let Target be the this value.
						var target = this;
						// 2. If IsCallable(Target) is false, throw a TypeError exception.
						if(!isCallable(target)) {
							throw new TypeError('Function.prototype.bind called on incompatible ' + target);
						}
						// 3. Let A be a new (possibly empty) internal list of all of the
						//   argument values provided after thisArg (arg1, arg2 etc), in order.
						// XXX slicedArgs will stand in for "A" if used
						var args = array_slice.call(arguments, 1); // for normal call
						// 4. Let F be a new native ECMAScript object.
						// 11. Set the [[Prototype]] internal property of F to the standard
						//   built-in Function prototype object as specified in 15.3.3.1.
						// 12. Set the [[Call]] internal property of F as described in
						//   15.3.4.5.1.
						// 13. Set the [[Construct]] internal property of F as described in
						//   15.3.4.5.2.
						// 14. Set the [[HasInstance]] internal property of F as described in
						//   15.3.4.5.3.
						var bound;
						var binder = function() {

							if(this instanceof bound) {
								// 15.3.4.5.2 [[Construct]]
								// When the [[Construct]] internal method of a function object,
								// F that was created using the bind function is called with a
								// list of arguments ExtraArgs, the following steps are taken:
								// 1. Let target be the value of F's [[TargetFunction]]
								//   internal property.
								// 2. If target has no [[Construct]] internal method, a
								//   TypeError exception is thrown.
								// 3. Let boundArgs be the value of F's [[BoundArgs]] internal
								//   property.
								// 4. Let args be a new list containing the same values as the
								//   list boundArgs in the same order followed by the same
								//   values as the list ExtraArgs in the same order.
								// 5. Return the result of calling the [[Construct]] internal
								//   method of target providing args as the arguments.

								var result = apply.call(
									target,
									this,
									array_concat.call(args, array_slice.call(arguments))
								);
								if($Object(result) === result) {
									return result;
								}
								return this;

							} else {
								// 15.3.4.5.1 [[Call]]
								// When the [[Call]] internal method of a function object, F,
								// which was created using the bind function is called with a
								// this value and a list of arguments ExtraArgs, the following
								// steps are taken:
								// 1. Let boundArgs be the value of F's [[BoundArgs]] internal
								//   property.
								// 2. Let boundThis be the value of F's [[BoundThis]] internal
								//   property.
								// 3. Let target be the value of F's [[TargetFunction]] internal
								//   property.
								// 4. Let args be a new list containing the same values as the
								//   list boundArgs in the same order followed by the same
								//   values as the list ExtraArgs in the same order.
								// 5. Return the result of calling the [[Call]] internal method
								//   of target providing boundThis as the this value and
								//   providing args as the arguments.

								// equiv: target.call(this, ...boundArgs, ...args)
								return apply.call(
									target,
									that,
									array_concat.call(args, array_slice.call(arguments))
								);

							}

						};

						// 15. If the [[Class]] internal property of Target is "Function", then
						//     a. Let L be the length property of Target minus the length of A.
						//     b. Set the length own property of F to either 0 or L, whichever is
						//       larger.
						// 16. Else set the length own property of F to 0.

						var boundLength = max(0, target.length - args.length);

						// 17. Set the attributes of the length own property of F to the values
						//   specified in 15.3.5.1.
						var boundArgs = [];
						for(var i = 0; i < boundLength; i++) {
							array_push.call(boundArgs, '$' + i);
						}

						// XXX Build a dynamic function with desired amount of arguments is the only
						// way to set the length property of a function.
						// In environments where Content Security Policies enabled (Chrome extensions,
						// for ex.) all use of eval or Function costructor throws an exception.
						// However in all of these environments Function.prototype.bind exists
						// and so this code will never be executed.
						bound = $Function('binder', 'return function (' + array_join.call(boundArgs, ',') + '){ return binder.apply(this, arguments); }')(binder);

						if(target.prototype) {
							Empty.prototype = target.prototype;
							bound.prototype = new Empty();
							// Clean up dangling references.
							Empty.prototype = null;
						}

						// TODO
						// 18. Set the [[Extensible]] internal property of F to true.

						// TODO
						// 19. Let thrower be the [[ThrowTypeError]] function Object (13.2.3).
						// 20. Call the [[DefineOwnProperty]] internal method of F with
						//   arguments "caller", PropertyDescriptor {[[Get]]: thrower, [[Set]]:
						//   thrower, [[Enumerable]]: false, [[Configurable]]: false}, and
						//   false.
						// 21. Call the [[DefineOwnProperty]] internal method of F with
						//   arguments "arguments", PropertyDescriptor {[[Get]]: thrower,
						//   [[Set]]: thrower, [[Enumerable]]: false, [[Configurable]]: false},
						//   and false.

						// TODO
						// NOTE Function objects created using Function.prototype.bind do not
						// have a prototype property or the [[Code]], [[FormalParameters]], and
						// [[Scope]] internal properties.
						// XXX can't delete prototype in pure-js.

						// 22. Return F.
						return bound;
					}
				});

				// _Please note: Shortcuts are defined after `Function.prototype.bind` as we
				// use it in defining shortcuts.
				var owns = call.bind(ObjectPrototype.hasOwnProperty);
				var toStr = call.bind(ObjectPrototype.toString);
				var arraySlice = call.bind(array_slice);
				var arraySliceApply = apply.bind(array_slice);
				var strSlice = call.bind(StringPrototype.slice);
				var strSplit = call.bind(StringPrototype.split);
				var strIndexOf = call.bind(StringPrototype.indexOf);
				var pushCall = call.bind(array_push);
				var isEnum = call.bind(ObjectPrototype.propertyIsEnumerable);
				var arraySort = call.bind(ArrayPrototype.sort);

				//
				// Array
				// =====
				//

				var isArray = $Array.isArray || function isArray(obj) {
					return toStr(obj) === '[object Array]';
				};

				// ES5 15.4.4.12
				// http://es5.github.com/#x15.4.4.13
				// Return len+argCount.
				// [bugfix, ielt8]
				// IE < 8 bug: [].unshift(0) === undefined but should be "1"
				var hasUnshiftReturnValueBug = [].unshift(0) !== 1;
				defineProperties(ArrayPrototype, {
					unshift: function() {
						array_unshift.apply(this, arguments);
						return this.length;
					}
				}, hasUnshiftReturnValueBug);

				// ES5 15.4.3.2
				// http://es5.github.com/#x15.4.3.2
				// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/isArray
				defineProperties($Array, {
					isArray: isArray
				});

				// The IsCallable() check in the Array functions
				// has been replaced with a strict check on the
				// internal class of the object to trap cases where
				// the provided function was actually a regular
				// expression literal, which in V8 and
				// JavaScriptCore is a typeof "function".  Only in
				// V8 are regular expression literals permitted as
				// reduce parameters, so it is desirable in the
				// general case for the shim to match the more
				// strict and common behavior of rejecting regular
				// expressions.

				// ES5 15.4.4.18
				// http://es5.github.com/#x15.4.4.18
				// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/array/forEach

				// Check failure of by-index access of string characters (IE < 9)
				// and failure of `0 in boxedString` (Rhino)
				var boxedString = $Object('a');
				var splitString = boxedString[0] !== 'a' || !(0 in boxedString);

				var properlyBoxesContext = function properlyBoxed(method) {
					// Check node 0.6.21 bug where third parameter is not boxed
					var properlyBoxesNonStrict = true;
					var properlyBoxesStrict = true;
					var threwException = false;
					if(method) {
						try {
							method.call('foo', function(_, __, context) {
								if(typeof context !== 'object') {
									properlyBoxesNonStrict = false;
								}
							});

							method.call([1], function() {
								'use strict';

								properlyBoxesStrict = typeof this === 'string';
							}, 'x');
						} catch(e) {
							threwException = true;
						}
					}
					return !!method && !threwException && properlyBoxesNonStrict && properlyBoxesStrict;
				};

				defineProperties(ArrayPrototype, {
					forEach: function forEach(callbackfn /*, thisArg*/ ) {
						var object = ES.ToObject(this);
						var self = splitString && isString(this) ? strSplit(this, '') : object;
						var i = -1;
						var length = ES.ToUint32(self.length);
						var T;
						if(arguments.length > 1) {
							T = arguments[1];
						}

						// If no callback function or if callback is not a callable function
						if(!isCallable(callbackfn)) {
							throw new TypeError('Array.prototype.forEach callback must be a function');
						}

						while(++i < length) {
							if(i in self) {
								// Invoke the callback function with call, passing arguments:
								// context, property value, property key, thisArg object
								if(typeof T === 'undefined') {
									callbackfn(self[i], i, object);
								} else {
									callbackfn.call(T, self[i], i, object);
								}
							}
						}
					}
				}, !properlyBoxesContext(ArrayPrototype.forEach));

				// ES5 15.4.4.19
				// http://es5.github.com/#x15.4.4.19
				// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/map
				defineProperties(ArrayPrototype, {
					map: function map(callbackfn /*, thisArg*/ ) {
						var object = ES.ToObject(this);
						var self = splitString && isString(this) ? strSplit(this, '') : object;
						var length = ES.ToUint32(self.length);
						var result = $Array(length);
						var T;
						if(arguments.length > 1) {
							T = arguments[1];
						}

						// If no callback function or if callback is not a callable function
						if(!isCallable(callbackfn)) {
							throw new TypeError('Array.prototype.map callback must be a function');
						}

						for(var i = 0; i < length; i++) {
							if(i in self) {
								if(typeof T === 'undefined') {
									result[i] = callbackfn(self[i], i, object);
								} else {
									result[i] = callbackfn.call(T, self[i], i, object);
								}
							}
						}
						return result;
					}
				}, !properlyBoxesContext(ArrayPrototype.map));

				// ES5 15.4.4.20
				// http://es5.github.com/#x15.4.4.20
				// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/filter
				defineProperties(ArrayPrototype, {
					filter: function filter(callbackfn /*, thisArg*/ ) {
						var object = ES.ToObject(this);
						var self = splitString && isString(this) ? strSplit(this, '') : object;
						var length = ES.ToUint32(self.length);
						var result = [];
						var value;
						var T;
						if(arguments.length > 1) {
							T = arguments[1];
						}

						// If no callback function or if callback is not a callable function
						if(!isCallable(callbackfn)) {
							throw new TypeError('Array.prototype.filter callback must be a function');
						}

						for(var i = 0; i < length; i++) {
							if(i in self) {
								value = self[i];
								if(typeof T === 'undefined' ? callbackfn(value, i, object) : callbackfn.call(T, value, i, object)) {
									pushCall(result, value);
								}
							}
						}
						return result;
					}
				}, !properlyBoxesContext(ArrayPrototype.filter));

				// ES5 15.4.4.16
				// http://es5.github.com/#x15.4.4.16
				// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/every
				defineProperties(ArrayPrototype, {
					every: function every(callbackfn /*, thisArg*/ ) {
						var object = ES.ToObject(this);
						var self = splitString && isString(this) ? strSplit(this, '') : object;
						var length = ES.ToUint32(self.length);
						var T;
						if(arguments.length > 1) {
							T = arguments[1];
						}

						// If no callback function or if callback is not a callable function
						if(!isCallable(callbackfn)) {
							throw new TypeError('Array.prototype.every callback must be a function');
						}

						for(var i = 0; i < length; i++) {
							if(i in self && !(typeof T === 'undefined' ? callbackfn(self[i], i, object) : callbackfn.call(T, self[i], i, object))) {
								return false;
							}
						}
						return true;
					}
				}, !properlyBoxesContext(ArrayPrototype.every));

				// ES5 15.4.4.17
				// http://es5.github.com/#x15.4.4.17
				// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/some
				defineProperties(ArrayPrototype, {
					some: function some(callbackfn /*, thisArg */ ) {
						var object = ES.ToObject(this);
						var self = splitString && isString(this) ? strSplit(this, '') : object;
						var length = ES.ToUint32(self.length);
						var T;
						if(arguments.length > 1) {
							T = arguments[1];
						}

						// If no callback function or if callback is not a callable function
						if(!isCallable(callbackfn)) {
							throw new TypeError('Array.prototype.some callback must be a function');
						}

						for(var i = 0; i < length; i++) {
							if(i in self && (typeof T === 'undefined' ? callbackfn(self[i], i, object) : callbackfn.call(T, self[i], i, object))) {
								return true;
							}
						}
						return false;
					}
				}, !properlyBoxesContext(ArrayPrototype.some));

				// ES5 15.4.4.21
				// http://es5.github.com/#x15.4.4.21
				// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduce
				var reduceCoercesToObject = false;
				if(ArrayPrototype.reduce) {
					reduceCoercesToObject = typeof ArrayPrototype.reduce.call('es5', function(_, __, ___, list) {
						return list;
					}) === 'object';
				}
				defineProperties(ArrayPrototype, {
					reduce: function reduce(callbackfn /*, initialValue*/ ) {
						var object = ES.ToObject(this);
						var self = splitString && isString(this) ? strSplit(this, '') : object;
						var length = ES.ToUint32(self.length);

						// If no callback function or if callback is not a callable function
						if(!isCallable(callbackfn)) {
							throw new TypeError('Array.prototype.reduce callback must be a function');
						}

						// no value to return if no initial value and an empty array
						if(length === 0 && arguments.length === 1) {
							throw new TypeError('reduce of empty array with no initial value');
						}

						var i = 0;
						var result;
						if(arguments.length >= 2) {
							result = arguments[1];
						} else {
							do {
								if(i in self) {
									result = self[i++];
									break;
								}

								// if array contains no values, no initial value to return
								if(++i >= length) {
									throw new TypeError('reduce of empty array with no initial value');
								}
							} while (true);
						}

						for(; i < length; i++) {
							if(i in self) {
								result = callbackfn(result, self[i], i, object);
							}
						}

						return result;
					}
				}, !reduceCoercesToObject);

				// ES5 15.4.4.22
				// http://es5.github.com/#x15.4.4.22
				// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduceRight
				var reduceRightCoercesToObject = false;
				if(ArrayPrototype.reduceRight) {
					reduceRightCoercesToObject = typeof ArrayPrototype.reduceRight.call('es5', function(_, __, ___, list) {
						return list;
					}) === 'object';
				}
				defineProperties(ArrayPrototype, {
					reduceRight: function reduceRight(callbackfn /*, initial*/ ) {
						var object = ES.ToObject(this);
						var self = splitString && isString(this) ? strSplit(this, '') : object;
						var length = ES.ToUint32(self.length);

						// If no callback function or if callback is not a callable function
						if(!isCallable(callbackfn)) {
							throw new TypeError('Array.prototype.reduceRight callback must be a function');
						}

						// no value to return if no initial value, empty array
						if(length === 0 && arguments.length === 1) {
							throw new TypeError('reduceRight of empty array with no initial value');
						}

						var result;
						var i = length - 1;
						if(arguments.length >= 2) {
							result = arguments[1];
						} else {
							do {
								if(i in self) {
									result = self[i--];
									break;
								}

								// if array contains no values, no initial value to return
								if(--i < 0) {
									throw new TypeError('reduceRight of empty array with no initial value');
								}
							} while (true);
						}

						if(i < 0) {
							return result;
						}

						do {
							if(i in self) {
								result = callbackfn(result, self[i], i, object);
							}
						} while (i--);

						return result;
					}
				}, !reduceRightCoercesToObject);

				// ES5 15.4.4.14
				// http://es5.github.com/#x15.4.4.14
				// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf
				var hasFirefox2IndexOfBug = ArrayPrototype.indexOf && [0, 1].indexOf(1, 2) !== -1;
				defineProperties(ArrayPrototype, {
					indexOf: function indexOf(searchElement /*, fromIndex */ ) {
						var self = splitString && isString(this) ? strSplit(this, '') : ES.ToObject(this);
						var length = ES.ToUint32(self.length);

						if(length === 0) {
							return -1;
						}

						var i = 0;
						if(arguments.length > 1) {
							i = ES.ToInteger(arguments[1]);
						}

						// handle negative indices
						i = i >= 0 ? i : max(0, length + i);
						for(; i < length; i++) {
							if(i in self && self[i] === searchElement) {
								return i;
							}
						}
						return -1;
					}
				}, hasFirefox2IndexOfBug);

				// ES5 15.4.4.15
				// http://es5.github.com/#x15.4.4.15
				// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/lastIndexOf
				var hasFirefox2LastIndexOfBug = ArrayPrototype.lastIndexOf && [0, 1].lastIndexOf(0, -3) !== -1;
				defineProperties(ArrayPrototype, {
					lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */ ) {
						var self = splitString && isString(this) ? strSplit(this, '') : ES.ToObject(this);
						var length = ES.ToUint32(self.length);

						if(length === 0) {
							return -1;
						}
						var i = length - 1;
						if(arguments.length > 1) {
							i = min(i, ES.ToInteger(arguments[1]));
						}
						// handle negative indices
						i = i >= 0 ? i : length - Math.abs(i);
						for(; i >= 0; i--) {
							if(i in self && searchElement === self[i]) {
								return i;
							}
						}
						return -1;
					}
				}, hasFirefox2LastIndexOfBug);

				// ES5 15.4.4.12
				// http://es5.github.com/#x15.4.4.12
				var spliceNoopReturnsEmptyArray = (function() {
					var a = [1, 2];
					var result = a.splice();
					return a.length === 2 && isArray(result) && result.length === 0;
				}());
				defineProperties(ArrayPrototype, {
					// Safari 5.0 bug where .splice() returns undefined
					splice: function splice(start, deleteCount) {
						if(arguments.length === 0) {
							return [];
						} else {
							return array_splice.apply(this, arguments);
						}
					}
				}, !spliceNoopReturnsEmptyArray);

				var spliceWorksWithEmptyObject = (function() {
					var obj = {};
					ArrayPrototype.splice.call(obj, 0, 0, 1);
					return obj.length === 1;
				}());
				defineProperties(ArrayPrototype, {
					splice: function splice(start, deleteCount) {
						if(arguments.length === 0) {
							return [];
						}
						var args = arguments;
						this.length = max(ES.ToInteger(this.length), 0);
						if(arguments.length > 0 && typeof deleteCount !== 'number') {
							args = arraySlice(arguments);
							if(args.length < 2) {
								pushCall(args, this.length - start);
							} else {
								args[1] = ES.ToInteger(deleteCount);
							}
						}
						return array_splice.apply(this, args);
					}
				}, !spliceWorksWithEmptyObject);
				var spliceWorksWithLargeSparseArrays = (function() {
					// Per https://github.com/es-shims/es5-shim/issues/295
					// Safari 7/8 breaks with sparse arrays of size 1e5 or greater
					var arr = new $Array(1e5);
					// note: the index MUST be 8 or larger or the test will false pass
					arr[8] = 'x';
					arr.splice(1, 1);
					// note: this test must be defined *after* the indexOf shim
					// per https://github.com/es-shims/es5-shim/issues/313
					return arr.indexOf('x') === 7;
				}());
				var spliceWorksWithSmallSparseArrays = (function() {
					// Per https://github.com/es-shims/es5-shim/issues/295
					// Opera 12.15 breaks on this, no idea why.
					var n = 256;
					var arr = [];
					arr[n] = 'a';
					arr.splice(n + 1, 0, 'b');
					return arr[n] === 'a';
				}());
				defineProperties(ArrayPrototype, {
					splice: function splice(start, deleteCount) {
						var O = ES.ToObject(this);
						var A = [];
						var len = ES.ToUint32(O.length);
						var relativeStart = ES.ToInteger(start);
						var actualStart = relativeStart < 0 ? max((len + relativeStart), 0) : min(relativeStart, len);
						var actualDeleteCount = min(max(ES.ToInteger(deleteCount), 0), len - actualStart);

						var k = 0;
						var from;
						while(k < actualDeleteCount) {
							from = $String(actualStart + k);
							if(owns(O, from)) {
								A[k] = O[from];
							}
							k += 1;
						}

						var items = arraySlice(arguments, 2);
						var itemCount = items.length;
						var to;
						if(itemCount < actualDeleteCount) {
							k = actualStart;
							var maxK = len - actualDeleteCount;
							while(k < maxK) {
								from = $String(k + actualDeleteCount);
								to = $String(k + itemCount);
								if(owns(O, from)) {
									O[to] = O[from];
								} else {
									delete O[to];
								}
								k += 1;
							}
							k = len;
							var minK = len - actualDeleteCount + itemCount;
							while(k > minK) {
								delete O[k - 1];
								k -= 1;
							}
						} else if(itemCount > actualDeleteCount) {
							k = len - actualDeleteCount;
							while(k > actualStart) {
								from = $String(k + actualDeleteCount - 1);
								to = $String(k + itemCount - 1);
								if(owns(O, from)) {
									O[to] = O[from];
								} else {
									delete O[to];
								}
								k -= 1;
							}
						}
						k = actualStart;
						for(var i = 0; i < items.length; ++i) {
							O[k] = items[i];
							k += 1;
						}
						O.length = len - actualDeleteCount + itemCount;

						return A;
					}
				}, !spliceWorksWithLargeSparseArrays || !spliceWorksWithSmallSparseArrays);

				var originalJoin = ArrayPrototype.join;
				var hasStringJoinBug;
				try {
					hasStringJoinBug = Array.prototype.join.call('123', ',') !== '1,2,3';
				} catch(e) {
					hasStringJoinBug = true;
				}
				if(hasStringJoinBug) {
					defineProperties(ArrayPrototype, {
						join: function join(separator) {
							var sep = typeof separator === 'undefined' ? ',' : separator;
							return originalJoin.call(isString(this) ? strSplit(this, '') : this, sep);
						}
					}, hasStringJoinBug);
				}

				var hasJoinUndefinedBug = [1, 2].join(undefined) !== '1,2';
				if(hasJoinUndefinedBug) {
					defineProperties(ArrayPrototype, {
						join: function join(separator) {
							var sep = typeof separator === 'undefined' ? ',' : separator;
							return originalJoin.call(this, sep);
						}
					}, hasJoinUndefinedBug);
				}

				var pushShim = function push(item) {
					var O = ES.ToObject(this);
					var n = ES.ToUint32(O.length);
					var i = 0;
					while(i < arguments.length) {
						O[n + i] = arguments[i];
						i += 1;
					}
					O.length = n + i;
					return n + i;
				};

				var pushIsNotGeneric = (function() {
					var obj = {};
					var result = Array.prototype.push.call(obj, undefined);
					return result !== 1 || obj.length !== 1 || typeof obj[0] !== 'undefined' || !owns(obj, 0);
				}());
				defineProperties(ArrayPrototype, {
					push: function push(item) {
						if(isArray(this)) {
							return array_push.apply(this, arguments);
						}
						return pushShim.apply(this, arguments);
					}
				}, pushIsNotGeneric);

				// This fixes a very weird bug in Opera 10.6 when pushing `undefined
				var pushUndefinedIsWeird = (function() {
					var arr = [];
					var result = arr.push(undefined);
					return result !== 1 || arr.length !== 1 || typeof arr[0] !== 'undefined' || !owns(arr, 0);
				}());
				defineProperties(ArrayPrototype, {
					push: pushShim
				}, pushUndefinedIsWeird);

				// ES5 15.2.3.14
				// http://es5.github.io/#x15.4.4.10
				// Fix boxed string bug
				defineProperties(ArrayPrototype, {
					slice: function(start, end) {
						var arr = isString(this) ? strSplit(this, '') : this;
						return arraySliceApply(arr, arguments);
					}
				}, splitString);

				var sortIgnoresNonFunctions = (function() {
					try {
						[1, 2].sort(null);
						[1, 2].sort({});
						return true;
					} catch(e) {}
					return false;
				}());
				var sortThrowsOnRegex = (function() {
					// this is a problem in Firefox 4, in which `typeof /a/ === 'function'`
					try {
						[1, 2].sort(/a/);
						return false;
					} catch(e) {}
					return true;
				}());
				var sortIgnoresUndefined = (function() {
					// applies in IE 8, for one.
					try {
						[1, 2].sort(undefined);
						return true;
					} catch(e) {}
					return false;
				}());
				defineProperties(ArrayPrototype, {
					sort: function sort(compareFn) {
						if(typeof compareFn === 'undefined') {
							return arraySort(this);
						}
						if(!isCallable(compareFn)) {
							throw new TypeError('Array.prototype.sort callback must be a function');
						}
						return arraySort(this, compareFn);
					}
				}, sortIgnoresNonFunctions || !sortIgnoresUndefined || !sortThrowsOnRegex);

				//
				// Object
				// ======
				//

				// ES5 15.2.3.14
				// http://es5.github.com/#x15.2.3.14

				// http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
				var hasDontEnumBug = !isEnum({
					'toString': null
				}, 'toString');
				var hasProtoEnumBug = isEnum(function() {}, 'prototype');
				var hasStringEnumBug = !owns('x', '0');
				var equalsConstructorPrototype = function(o) {
					var ctor = o.constructor;
					return ctor && ctor.prototype === o;
				};
				var blacklistedKeys = {
					$window: true,
					$console: true,
					$parent: true,
					$self: true,
					$frame: true,
					$frames: true,
					$frameElement: true,
					$webkitIndexedDB: true,
					$webkitStorageInfo: true,
					$external: true
				};
				var hasAutomationEqualityBug = (function() {
					/* globals window */
					if(typeof window === 'undefined') {
						return false;
					}
					for(var k in window) {
						try {
							if(!blacklistedKeys['$' + k] && owns(window, k) && window[k] !== null && typeof window[k] === 'object') {
								equalsConstructorPrototype(window[k]);
							}
						} catch(e) {
							return true;
						}
					}
					return false;
				}());
				var equalsConstructorPrototypeIfNotBuggy = function(object) {
					if(typeof window === 'undefined' || !hasAutomationEqualityBug) {
						return equalsConstructorPrototype(object);
					}
					try {
						return equalsConstructorPrototype(object);
					} catch(e) {
						return false;
					}
				};
				var dontEnums = [
					'toString',
					'toLocaleString',
					'valueOf',
					'hasOwnProperty',
					'isPrototypeOf',
					'propertyIsEnumerable',
					'constructor'
				];
				var dontEnumsLength = dontEnums.length;

				// taken directly from https://github.com/ljharb/is-arguments/blob/master/index.js
				// can be replaced with require('is-arguments') if we ever use a build process instead
				var isStandardArguments = function isArguments(value) {
					return toStr(value) === '[object Arguments]';
				};
				var isLegacyArguments = function isArguments(value) {
					return value !== null &&
						typeof value === 'object' &&
						typeof value.length === 'number' &&
						value.length >= 0 &&
						!isArray(value) &&
						isCallable(value.callee);
				};
				var isArguments = isStandardArguments(arguments) ? isStandardArguments : isLegacyArguments;

				defineProperties($Object, {
					keys: function keys(object) {
						var isFn = isCallable(object);
						var isArgs = isArguments(object);
						var isObject = object !== null && typeof object === 'object';
						var isStr = isObject && isString(object);

						if(!isObject && !isFn && !isArgs) {
							throw new TypeError('Object.keys called on a non-object');
						}

						var theKeys = [];
						var skipProto = hasProtoEnumBug && isFn;
						if((isStr && hasStringEnumBug) || isArgs) {
							for(var i = 0; i < object.length; ++i) {
								pushCall(theKeys, $String(i));
							}
						}

						if(!isArgs) {
							for(var name in object) {
								if(!(skipProto && name === 'prototype') && owns(object, name)) {
									pushCall(theKeys, $String(name));
								}
							}
						}

						if(hasDontEnumBug) {
							var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
							for(var j = 0; j < dontEnumsLength; j++) {
								var dontEnum = dontEnums[j];
								if(!(skipConstructor && dontEnum === 'constructor') && owns(object, dontEnum)) {
									pushCall(theKeys, dontEnum);
								}
							}
						}
						return theKeys;
					}
				});

				var keysWorksWithArguments = $Object.keys && (function() {
					// Safari 5.0 bug
					return $Object.keys(arguments).length === 2;
				}(1, 2));
				var keysHasArgumentsLengthBug = $Object.keys && (function() {
					var argKeys = $Object.keys(arguments);
					return arguments.length !== 1 || argKeys.length !== 1 || argKeys[0] !== 1;
				}(1));
				var originalKeys = $Object.keys;
				defineProperties($Object, {
					keys: function keys(object) {
						if(isArguments(object)) {
							return originalKeys(arraySlice(object));
						} else {
							return originalKeys(object);
						}
					}
				}, !keysWorksWithArguments || keysHasArgumentsLengthBug);

				//
				// Date
				// ====
				//

				var hasNegativeMonthYearBug = new Date(-3509827329600292).getUTCMonth() !== 0;
				var aNegativeTestDate = new Date(-1509842289600292);
				var aPositiveTestDate = new Date(1449662400000);
				var hasToUTCStringFormatBug = aNegativeTestDate.toUTCString() !== 'Mon, 01 Jan -45875 11:59:59 GMT';
				var hasToDateStringFormatBug;
				var hasToStringFormatBug;
				var timeZoneOffset = aNegativeTestDate.getTimezoneOffset();
				if(timeZoneOffset < -720) {
					hasToDateStringFormatBug = aNegativeTestDate.toDateString() !== 'Tue Jan 02 -45875';
					hasToStringFormatBug = !(/^Thu Dec 10 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/).test(aPositiveTestDate.toString());
				} else {
					hasToDateStringFormatBug = aNegativeTestDate.toDateString() !== 'Mon Jan 01 -45875';
					hasToStringFormatBug = !(/^Wed Dec 09 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/).test(aPositiveTestDate.toString());
				}

				var originalGetFullYear = call.bind(Date.prototype.getFullYear);
				var originalGetMonth = call.bind(Date.prototype.getMonth);
				var originalGetDate = call.bind(Date.prototype.getDate);
				var originalGetUTCFullYear = call.bind(Date.prototype.getUTCFullYear);
				var originalGetUTCMonth = call.bind(Date.prototype.getUTCMonth);
				var originalGetUTCDate = call.bind(Date.prototype.getUTCDate);
				var originalGetUTCDay = call.bind(Date.prototype.getUTCDay);
				var originalGetUTCHours = call.bind(Date.prototype.getUTCHours);
				var originalGetUTCMinutes = call.bind(Date.prototype.getUTCMinutes);
				var originalGetUTCSeconds = call.bind(Date.prototype.getUTCSeconds);
				var originalGetUTCMilliseconds = call.bind(Date.prototype.getUTCMilliseconds);
				var dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
				var monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
				var daysInMonth = function daysInMonth(month, year) {
					return originalGetDate(new Date(year, month, 0));
				};

				defineProperties(Date.prototype, {
					getFullYear: function getFullYear() {
						if(!this || !(this instanceof Date)) {
							throw new TypeError('this is not a Date object.');
						}
						var year = originalGetFullYear(this);
						if(year < 0 && originalGetMonth(this) > 11) {
							return year + 1;
						}
						return year;
					},
					getMonth: function getMonth() {
						if(!this || !(this instanceof Date)) {
							throw new TypeError('this is not a Date object.');
						}
						var year = originalGetFullYear(this);
						var month = originalGetMonth(this);
						if(year < 0 && month > 11) {
							return 0;
						}
						return month;
					},
					getDate: function getDate() {
						if(!this || !(this instanceof Date)) {
							throw new TypeError('this is not a Date object.');
						}
						var year = originalGetFullYear(this);
						var month = originalGetMonth(this);
						var date = originalGetDate(this);
						if(year < 0 && month > 11) {
							if(month === 12) {
								return date;
							}
							var days = daysInMonth(0, year + 1);
							return(days - date) + 1;
						}
						return date;
					},
					getUTCFullYear: function getUTCFullYear() {
						if(!this || !(this instanceof Date)) {
							throw new TypeError('this is not a Date object.');
						}
						var year = originalGetUTCFullYear(this);
						if(year < 0 && originalGetUTCMonth(this) > 11) {
							return year + 1;
						}
						return year;
					},
					getUTCMonth: function getUTCMonth() {
						if(!this || !(this instanceof Date)) {
							throw new TypeError('this is not a Date object.');
						}
						var year = originalGetUTCFullYear(this);
						var month = originalGetUTCMonth(this);
						if(year < 0 && month > 11) {
							return 0;
						}
						return month;
					},
					getUTCDate: function getUTCDate() {
						if(!this || !(this instanceof Date)) {
							throw new TypeError('this is not a Date object.');
						}
						var year = originalGetUTCFullYear(this);
						var month = originalGetUTCMonth(this);
						var date = originalGetUTCDate(this);
						if(year < 0 && month > 11) {
							if(month === 12) {
								return date;
							}
							var days = daysInMonth(0, year + 1);
							return(days - date) + 1;
						}
						return date;
					}
				}, hasNegativeMonthYearBug);

				defineProperties(Date.prototype, {
					toUTCString: function toUTCString() {
						if(!this || !(this instanceof Date)) {
							throw new TypeError('this is not a Date object.');
						}
						var day = originalGetUTCDay(this);
						var date = originalGetUTCDate(this);
						var month = originalGetUTCMonth(this);
						var year = originalGetUTCFullYear(this);
						var hour = originalGetUTCHours(this);
						var minute = originalGetUTCMinutes(this);
						var second = originalGetUTCSeconds(this);
						return dayName[day] + ', ' +
							(date < 10 ? '0' + date : date) + ' ' +
							monthName[month] + ' ' +
							year + ' ' +
							(hour < 10 ? '0' + hour : hour) + ':' +
							(minute < 10 ? '0' + minute : minute) + ':' +
							(second < 10 ? '0' + second : second) + ' GMT';
					}
				}, hasNegativeMonthYearBug || hasToUTCStringFormatBug);

				// Opera 12 has `,`
				defineProperties(Date.prototype, {
					toDateString: function toDateString() {
						if(!this || !(this instanceof Date)) {
							throw new TypeError('this is not a Date object.');
						}
						var day = this.getDay();
						var date = this.getDate();
						var month = this.getMonth();
						var year = this.getFullYear();
						return dayName[day] + ' ' +
							monthName[month] + ' ' +
							(date < 10 ? '0' + date : date) + ' ' +
							year;
					}
				}, hasNegativeMonthYearBug || hasToDateStringFormatBug);

				// can't use defineProperties here because of toString enumeration issue in IE <= 8
				if(hasNegativeMonthYearBug || hasToStringFormatBug) {
					Date.prototype.toString = function toString() {
						if(!this || !(this instanceof Date)) {
							throw new TypeError('this is not a Date object.');
						}
						var day = this.getDay();
						var date = this.getDate();
						var month = this.getMonth();
						var year = this.getFullYear();
						var hour = this.getHours();
						var minute = this.getMinutes();
						var second = this.getSeconds();
						var timezoneOffset = this.getTimezoneOffset();
						var hoursOffset = Math.floor(Math.abs(timezoneOffset) / 60);
						var minutesOffset = Math.floor(Math.abs(timezoneOffset) % 60);
						return dayName[day] + ' ' +
							monthName[month] + ' ' +
							(date < 10 ? '0' + date : date) + ' ' +
							year + ' ' +
							(hour < 10 ? '0' + hour : hour) + ':' +
							(minute < 10 ? '0' + minute : minute) + ':' +
							(second < 10 ? '0' + second : second) + ' GMT' +
							(timezoneOffset > 0 ? '-' : '+') +
							(hoursOffset < 10 ? '0' + hoursOffset : hoursOffset) +
							(minutesOffset < 10 ? '0' + minutesOffset : minutesOffset);
					};
					if(supportsDescriptors) {
						$Object.defineProperty(Date.prototype, 'toString', {
							configurable: true,
							enumerable: false,
							writable: true
						});
					}
				}

				// ES5 15.9.5.43
				// http://es5.github.com/#x15.9.5.43
				// This function returns a String value represent the instance in time
				// represented by this Date object. The format of the String is the Date Time
				// string format defined in 15.9.1.15. All fields are present in the String.
				// The time zone is always UTC, denoted by the suffix Z. If the time value of
				// this object is not a finite Number a RangeError exception is thrown.
				var negativeDate = -62198755200000;
				var negativeYearString = '-000001';
				var hasNegativeDateBug = Date.prototype.toISOString && new Date(negativeDate).toISOString().indexOf(negativeYearString) === -1;
				var hasSafari51DateBug = Date.prototype.toISOString && new Date(-1).toISOString() !== '1969-12-31T23:59:59.999Z';

				var getTime = call.bind(Date.prototype.getTime);

				defineProperties(Date.prototype, {
					toISOString: function toISOString() {
						if(!isFinite(this) || !isFinite(getTime(this))) {
							// Adope Photoshop requires the second check.
							throw new RangeError('Date.prototype.toISOString called on non-finite value.');
						}

						var year = originalGetUTCFullYear(this);

						var month = originalGetUTCMonth(this);
						// see https://github.com/es-shims/es5-shim/issues/111
						year += Math.floor(month / 12);
						month = (month % 12 + 12) % 12;

						// the date time string format is specified in 15.9.1.15.
						var result = [month + 1, originalGetUTCDate(this), originalGetUTCHours(this), originalGetUTCMinutes(this), originalGetUTCSeconds(this)];
						year = (
							(year < 0 ? '-' : (year > 9999 ? '+' : '')) +
							strSlice('00000' + Math.abs(year), (0 <= year && year <= 9999) ? -4 : -6)
						);

						for(var i = 0; i < result.length; ++i) {
							// pad months, days, hours, minutes, and seconds to have two digits.
							result[i] = strSlice('00' + result[i], -2);
						}
						// pad milliseconds to have three digits.
						return(
							year + '-' + arraySlice(result, 0, 2).join('-') +
							'T' + arraySlice(result, 2).join(':') + '.' +
							strSlice('000' + originalGetUTCMilliseconds(this), -3) + 'Z'
						);
					}
				}, hasNegativeDateBug || hasSafari51DateBug);

				// ES5 15.9.5.44
				// http://es5.github.com/#x15.9.5.44
				// This function provides a String representation of a Date object for use by
				// JSON.stringify (15.12.3).
				var dateToJSONIsSupported = (function() {
					try {
						return Date.prototype.toJSON &&
							new Date(NaN).toJSON() === null &&
							new Date(negativeDate).toJSON().indexOf(negativeYearString) !== -1 &&
							Date.prototype.toJSON.call({ // generic
								toISOString: function() {
									return true;
								}
							});
					} catch(e) {
						return false;
					}
				}());
				if(!dateToJSONIsSupported) {
					Date.prototype.toJSON = function toJSON(key) {
						// When the toJSON method is called with argument key, the following
						// steps are taken:

						// 1.  Let O be the result of calling ToObject, giving it the this
						// value as its argument.
						// 2. Let tv be ES.ToPrimitive(O, hint Number).
						var O = $Object(this);
						var tv = ES.ToPrimitive(O);
						// 3. If tv is a Number and is not finite, return null.
						if(typeof tv === 'number' && !isFinite(tv)) {
							return null;
						}
						// 4. Let toISO be the result of calling the [[Get]] internal method of
						// O with argument "toISOString".
						var toISO = O.toISOString;
						// 5. If IsCallable(toISO) is false, throw a TypeError exception.
						if(!isCallable(toISO)) {
							throw new TypeError('toISOString property is not callable');
						}
						// 6. Return the result of calling the [[Call]] internal method of
						//  toISO with O as the this value and an empty argument list.
						return toISO.call(O);

						// NOTE 1 The argument is ignored.

						// NOTE 2 The toJSON function is intentionally generic; it does not
						// require that its this value be a Date object. Therefore, it can be
						// transferred to other kinds of objects for use as a method. However,
						// it does require that any such object have a toISOString method. An
						// object is free to use the argument key to filter its
						// stringification.
					};
				}

				// ES5 15.9.4.2
				// http://es5.github.com/#x15.9.4.2
				// based on work shared by Daniel Friesen (dantman)
				// http://gist.github.com/303249
				var supportsExtendedYears = Date.parse('+033658-09-27T01:46:40.000Z') === 1e15;
				var acceptsInvalidDates = !isNaN(Date.parse('2012-04-04T24:00:00.500Z')) || !isNaN(Date.parse('2012-11-31T23:59:59.000Z')) || !isNaN(Date.parse('2012-12-31T23:59:60.000Z'));
				var doesNotParseY2KNewYear = isNaN(Date.parse('2000-01-01T00:00:00.000Z'));
				if(doesNotParseY2KNewYear || acceptsInvalidDates || !supportsExtendedYears) {
					// XXX global assignment won't work in embeddings that use
					// an alternate object for the context.
					/* global Date: true */
					/* eslint-disable no-undef */
					var maxSafeUnsigned32Bit = Math.pow(2, 31) - 1;
					var hasSafariSignedIntBug = isActualNaN(new Date(1970, 0, 1, 0, 0, 0, maxSafeUnsigned32Bit + 1).getTime());
					/* eslint-disable no-implicit-globals */
					Date = (function(NativeDate) {
						/* eslint-enable no-implicit-globals */
						/* eslint-enable no-undef */
						// Date.length === 7
						var DateShim = function Date(Y, M, D, h, m, s, ms) {
							var length = arguments.length;
							var date;
							if(this instanceof NativeDate) {
								var seconds = s;
								var millis = ms;
								if(hasSafariSignedIntBug && length >= 7 && ms > maxSafeUnsigned32Bit) {
									// work around a Safari 8/9 bug where it treats the seconds as signed
									var msToShift = Math.floor(ms / maxSafeUnsigned32Bit) * maxSafeUnsigned32Bit;
									var sToShift = Math.floor(msToShift / 1e3);
									seconds += sToShift;
									millis -= sToShift * 1e3;
								}
								date = length === 1 && $String(Y) === Y ? // isString(Y)
									// We explicitly pass it through parse:
									new NativeDate(DateShim.parse(Y)) :
									// We have to manually make calls depending on argument
									// length here
									length >= 7 ? new NativeDate(Y, M, D, h, m, seconds, millis) :
									length >= 6 ? new NativeDate(Y, M, D, h, m, seconds) :
									length >= 5 ? new NativeDate(Y, M, D, h, m) :
									length >= 4 ? new NativeDate(Y, M, D, h) :
									length >= 3 ? new NativeDate(Y, M, D) :
									length >= 2 ? new NativeDate(Y, M) :
									length >= 1 ? new NativeDate(Y instanceof NativeDate ? +Y : Y) :
									new NativeDate();
							} else {
								date = NativeDate.apply(this, arguments);
							}
							if(!isPrimitive(date)) {
								// Prevent mixups with unfixed Date object
								defineProperties(date, {
									constructor: DateShim
								}, true);
							}
							return date;
						};

						// 15.9.1.15 Date Time String Format.
						var isoDateExpression = new RegExp('^' +
							'(\\d{4}|[+-]\\d{6})' + // four-digit year capture or sign +
							// 6-digit extended year
							'(?:-(\\d{2})' + // optional month capture
							'(?:-(\\d{2})' + // optional day capture
							'(?:' + // capture hours:minutes:seconds.milliseconds
							'T(\\d{2})' + // hours capture
							':(\\d{2})' + // minutes capture
							'(?:' + // optional :seconds.milliseconds
							':(\\d{2})' + // seconds capture
							'(?:(\\.\\d{1,}))?' + // milliseconds capture
							')?' +
							'(' + // capture UTC offset component
							'Z|' + // UTC capture
							'(?:' + // offset specifier +/-hours:minutes
							'([-+])' + // sign capture
							'(\\d{2})' + // hours offset capture
							':(\\d{2})' + // minutes offset capture
							')' +
							')?)?)?)?' +
							'$');

						var months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];

						var dayFromMonth = function dayFromMonth(year, month) {
							var t = month > 1 ? 1 : 0;
							return(
								months[month] +
								Math.floor((year - 1969 + t) / 4) -
								Math.floor((year - 1901 + t) / 100) +
								Math.floor((year - 1601 + t) / 400) +
								365 * (year - 1970)
							);
						};

						var toUTC = function toUTC(t) {
							var s = 0;
							var ms = t;
							if(hasSafariSignedIntBug && ms > maxSafeUnsigned32Bit) {
								// work around a Safari 8/9 bug where it treats the seconds as signed
								var msToShift = Math.floor(ms / maxSafeUnsigned32Bit) * maxSafeUnsigned32Bit;
								var sToShift = Math.floor(msToShift / 1e3);
								s += sToShift;
								ms -= sToShift * 1e3;
							}
							return $Number(new NativeDate(1970, 0, 1, 0, 0, s, ms));
						};

						// Copy any custom methods a 3rd party library may have added
						for(var key in NativeDate) {
							if(owns(NativeDate, key)) {
								DateShim[key] = NativeDate[key];
							}
						}

						// Copy "native" methods explicitly; they may be non-enumerable
						defineProperties(DateShim, {
							now: NativeDate.now,
							UTC: NativeDate.UTC
						}, true);
						DateShim.prototype = NativeDate.prototype;
						defineProperties(DateShim.prototype, {
							constructor: DateShim
						}, true);

						// Upgrade Date.parse to handle simplified ISO 8601 strings
						var parseShim = function parse(string) {
							var match = isoDateExpression.exec(string);
							if(match) {
								// parse months, days, hours, minutes, seconds, and milliseconds
								// provide default values if necessary
								// parse the UTC offset component
								var year = $Number(match[1]),
									month = $Number(match[2] || 1) - 1,
									day = $Number(match[3] || 1) - 1,
									hour = $Number(match[4] || 0),
									minute = $Number(match[5] || 0),
									second = $Number(match[6] || 0),
									millisecond = Math.floor($Number(match[7] || 0) * 1000),
									// When time zone is missed, local offset should be used
									// (ES 5.1 bug)
									// see https://bugs.ecmascript.org/show_bug.cgi?id=112
									isLocalTime = Boolean(match[4] && !match[8]),
									signOffset = match[9] === '-' ? 1 : -1,
									hourOffset = $Number(match[10] || 0),
									minuteOffset = $Number(match[11] || 0),
									result;
								var hasMinutesOrSecondsOrMilliseconds = minute > 0 || second > 0 || millisecond > 0;
								if(
									hour < (hasMinutesOrSecondsOrMilliseconds ? 24 : 25) &&
									minute < 60 && second < 60 && millisecond < 1000 &&
									month > -1 && month < 12 && hourOffset < 24 &&
									minuteOffset < 60 && // detect invalid offsets
									day > -1 &&
									day < (dayFromMonth(year, month + 1) - dayFromMonth(year, month))
								) {
									result = (
										(dayFromMonth(year, month) + day) * 24 +
										hour +
										hourOffset * signOffset
									) * 60;
									result = (
										(result + minute + minuteOffset * signOffset) * 60 +
										second
									) * 1000 + millisecond;
									if(isLocalTime) {
										result = toUTC(result);
									}
									if(-8.64e15 <= result && result <= 8.64e15) {
										return result;
									}
								}
								return NaN;
							}
							return NativeDate.parse.apply(this, arguments);
						};
						defineProperties(DateShim, {
							parse: parseShim
						});

						return DateShim;
					}(Date));
					/* global Date: false */
				}

				// ES5 15.9.4.4
				// http://es5.github.com/#x15.9.4.4
				if(!Date.now) {
					Date.now = function now() {
						return new Date().getTime();
					};
				}

				//
				// Number
				// ======
				//

				// ES5.1 15.7.4.5
				// http://es5.github.com/#x15.7.4.5
				var hasToFixedBugs = NumberPrototype.toFixed && (
					(0.00008).toFixed(3) !== '0.000' ||
					(0.9).toFixed(0) !== '1' ||
					(1.255).toFixed(2) !== '1.25' ||
					(1000000000000000128).toFixed(0) !== '1000000000000000128'
				);

				var toFixedHelpers = {
					base: 1e7,
					size: 6,
					data: [0, 0, 0, 0, 0, 0],
					multiply: function multiply(n, c) {
						var i = -1;
						var c2 = c;
						while(++i < toFixedHelpers.size) {
							c2 += n * toFixedHelpers.data[i];
							toFixedHelpers.data[i] = c2 % toFixedHelpers.base;
							c2 = Math.floor(c2 / toFixedHelpers.base);
						}
					},
					divide: function divide(n) {
						var i = toFixedHelpers.size;
						var c = 0;
						while(--i >= 0) {
							c += toFixedHelpers.data[i];
							toFixedHelpers.data[i] = Math.floor(c / n);
							c = (c % n) * toFixedHelpers.base;
						}
					},
					numToString: function numToString() {
						var i = toFixedHelpers.size;
						var s = '';
						while(--i >= 0) {
							if(s !== '' || i === 0 || toFixedHelpers.data[i] !== 0) {
								var t = $String(toFixedHelpers.data[i]);
								if(s === '') {
									s = t;
								} else {
									s += strSlice('0000000', 0, 7 - t.length) + t;
								}
							}
						}
						return s;
					},
					pow: function pow(x, n, acc) {
						return(n === 0 ? acc : (n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc)));
					},
					log: function log(x) {
						var n = 0;
						var x2 = x;
						while(x2 >= 4096) {
							n += 12;
							x2 /= 4096;
						}
						while(x2 >= 2) {
							n += 1;
							x2 /= 2;
						}
						return n;
					}
				};

				var toFixedShim = function toFixed(fractionDigits) {
					var f, x, s, m, e, z, j, k;

					// Test for NaN and round fractionDigits down
					f = $Number(fractionDigits);
					f = isActualNaN(f) ? 0 : Math.floor(f);

					if(f < 0 || f > 20) {
						throw new RangeError('Number.toFixed called with invalid number of decimals');
					}

					x = $Number(this);

					if(isActualNaN(x)) {
						return 'NaN';
					}

					// If it is too big or small, return the string value of the number
					if(x <= -1e21 || x >= 1e21) {
						return $String(x);
					}

					s = '';

					if(x < 0) {
						s = '-';
						x = -x;
					}

					m = '0';

					if(x > 1e-21) {
						// 1e-21 < x < 1e21
						// -70 < log2(x) < 70
						e = toFixedHelpers.log(x * toFixedHelpers.pow(2, 69, 1)) - 69;
						z = (e < 0 ? x * toFixedHelpers.pow(2, -e, 1) : x / toFixedHelpers.pow(2, e, 1));
						z *= 0x10000000000000; // Math.pow(2, 52);
						e = 52 - e;

						// -18 < e < 122
						// x = z / 2 ^ e
						if(e > 0) {
							toFixedHelpers.multiply(0, z);
							j = f;

							while(j >= 7) {
								toFixedHelpers.multiply(1e7, 0);
								j -= 7;
							}

							toFixedHelpers.multiply(toFixedHelpers.pow(10, j, 1), 0);
							j = e - 1;

							while(j >= 23) {
								toFixedHelpers.divide(1 << 23);
								j -= 23;
							}

							toFixedHelpers.divide(1 << j);
							toFixedHelpers.multiply(1, 1);
							toFixedHelpers.divide(2);
							m = toFixedHelpers.numToString();
						} else {
							toFixedHelpers.multiply(0, z);
							toFixedHelpers.multiply(1 << (-e), 0);
							m = toFixedHelpers.numToString() + strSlice('0.00000000000000000000', 2, 2 + f);
						}
					}

					if(f > 0) {
						k = m.length;

						if(k <= f) {
							m = s + strSlice('0.0000000000000000000', 0, f - k + 2) + m;
						} else {
							m = s + strSlice(m, 0, k - f) + '.' + strSlice(m, k - f);
						}
					} else {
						m = s + m;
					}

					return m;
				};
				defineProperties(NumberPrototype, {
					toFixed: toFixedShim
				}, hasToFixedBugs);

				var hasToPrecisionUndefinedBug = (function() {
					try {
						return 1.0.toPrecision(undefined) === '1';
					} catch(e) {
						return true;
					}
				}());
				var originalToPrecision = NumberPrototype.toPrecision;
				defineProperties(NumberPrototype, {
					toPrecision: function toPrecision(precision) {
						return typeof precision === 'undefined' ? originalToPrecision.call(this) : originalToPrecision.call(this, precision);
					}
				}, hasToPrecisionUndefinedBug);

				//
				// String
				// ======
				//

				// ES5 15.5.4.14
				// http://es5.github.com/#x15.5.4.14

				// [bugfix, IE lt 9, firefox 4, Konqueror, Opera, obscure browsers]
				// Many browsers do not split properly with regular expressions or they
				// do not perform the split correctly under obscure conditions.
				// See http://blog.stevenlevithan.com/archives/cross-browser-split
				// I've tested in many browsers and this seems to cover the deviant ones:
				//    'ab'.split(/(?:ab)*/) should be ["", ""], not [""]
				//    '.'.split(/(.?)(.?)/) should be ["", ".", "", ""], not ["", ""]
				//    'tesst'.split(/(s)*/) should be ["t", undefined, "e", "s", "t"], not
				//       [undefined, "t", undefined, "e", ...]
				//    ''.split(/.?/) should be [], not [""]
				//    '.'.split(/()()/) should be ["."], not ["", "", "."]

				if(
					'ab'.split(/(?:ab)*/).length !== 2 ||
					'.'.split(/(.?)(.?)/).length !== 4 ||
					'tesst'.split(/(s)*/)[1] === 't' ||
					'test'.split(/(?:)/, -1).length !== 4 ||
					''.split(/.?/).length ||
					'.'.split(/()()/).length > 1
				) {
					(function() {
						var compliantExecNpcg = typeof(/()??/).exec('')[1] === 'undefined'; // NPCG: nonparticipating capturing group
						var maxSafe32BitInt = Math.pow(2, 32) - 1;

						StringPrototype.split = function(separator, limit) {
							var string = String(this);
							if(typeof separator === 'undefined' && limit === 0) {
								return [];
							}

							// If `separator` is not a regex, use native split
							if(!isRegex(separator)) {
								return strSplit(this, separator, limit);
							}

							var output = [];
							var flags = (separator.ignoreCase ? 'i' : '') +
								(separator.multiline ? 'm' : '') +
								(separator.unicode ? 'u' : '') + // in ES6
								(separator.sticky ? 'y' : ''), // Firefox 3+ and ES6
								lastLastIndex = 0,
								// Make `global` and avoid `lastIndex` issues by working with a copy
								separator2, match, lastIndex, lastLength;
							var separatorCopy = new RegExp(separator.source, flags + 'g');
							if(!compliantExecNpcg) {
								// Doesn't need flags gy, but they don't hurt
								separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
							}
							/* Values for `limit`, per the spec:
							 * If undefined: 4294967295 // maxSafe32BitInt
							 * If 0, Infinity, or NaN: 0
							 * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
							 * If negative number: 4294967296 - Math.floor(Math.abs(limit))
							 * If other: Type-convert, then use the above rules
							 */
							var splitLimit = typeof limit === 'undefined' ? maxSafe32BitInt : ES.ToUint32(limit);
							match = separatorCopy.exec(string);
							while(match) {
								// `separatorCopy.lastIndex` is not reliable cross-browser
								lastIndex = match.index + match[0].length;
								if(lastIndex > lastLastIndex) {
									pushCall(output, strSlice(string, lastLastIndex, match.index));
									// Fix browsers whose `exec` methods don't consistently return `undefined` for
									// nonparticipating capturing groups
									if(!compliantExecNpcg && match.length > 1) {
										/* eslint-disable no-loop-func */
										match[0].replace(separator2, function() {
											for(var i = 1; i < arguments.length - 2; i++) {
												if(typeof arguments[i] === 'undefined') {
													match[i] = void 0;
												}
											}
										});
										/* eslint-enable no-loop-func */
									}
									if(match.length > 1 && match.index < string.length) {
										array_push.apply(output, arraySlice(match, 1));
									}
									lastLength = match[0].length;
									lastLastIndex = lastIndex;
									if(output.length >= splitLimit) {
										break;
									}
								}
								if(separatorCopy.lastIndex === match.index) {
									separatorCopy.lastIndex++; // Avoid an infinite loop
								}
								match = separatorCopy.exec(string);
							}
							if(lastLastIndex === string.length) {
								if(lastLength || !separatorCopy.test('')) {
									pushCall(output, '');
								}
							} else {
								pushCall(output, strSlice(string, lastLastIndex));
							}
							return output.length > splitLimit ? arraySlice(output, 0, splitLimit) : output;
						};
					}());

					// [bugfix, chrome]
					// If separator is undefined, then the result array contains just one String,
					// which is the this value (converted to a String). If limit is not undefined,
					// then the output array is truncated so that it contains no more than limit
					// elements.
					// "0".split(undefined, 0) -> []
				} else if('0'.split(void 0, 0).length) {
					StringPrototype.split = function split(separator, limit) {
						if(typeof separator === 'undefined' && limit === 0) {
							return [];
						}
						return strSplit(this, separator, limit);
					};
				}

				var str_replace = StringPrototype.replace;
				var replaceReportsGroupsCorrectly = (function() {
					var groups = [];
					'x'.replace(/x(.)?/g, function(match, group) {
						pushCall(groups, group);
					});
					return groups.length === 1 && typeof groups[0] === 'undefined';
				}());

				if(!replaceReportsGroupsCorrectly) {
					StringPrototype.replace = function replace(searchValue, replaceValue) {
						var isFn = isCallable(replaceValue);
						var hasCapturingGroups = isRegex(searchValue) && (/\)[*?]/).test(searchValue.source);
						if(!isFn || !hasCapturingGroups) {
							return str_replace.call(this, searchValue, replaceValue);
						} else {
							var wrappedReplaceValue = function(match) {
								var length = arguments.length;
								var originalLastIndex = searchValue.lastIndex;
								searchValue.lastIndex = 0;
								var args = searchValue.exec(match) || [];
								searchValue.lastIndex = originalLastIndex;
								pushCall(args, arguments[length - 2], arguments[length - 1]);
								return replaceValue.apply(this, args);
							};
							return str_replace.call(this, searchValue, wrappedReplaceValue);
						}
					};
				}

				// ECMA-262, 3rd B.2.3
				// Not an ECMAScript standard, although ECMAScript 3rd Edition has a
				// non-normative section suggesting uniform semantics and it should be
				// normalized across all browsers
				// [bugfix, IE lt 9] IE < 9 substr() with negative value not working in IE
				var string_substr = StringPrototype.substr;
				var hasNegativeSubstrBug = ''.substr && '0b'.substr(-1) !== 'b';
				defineProperties(StringPrototype, {
					substr: function substr(start, length) {
						var normalizedStart = start;
						if(start < 0) {
							normalizedStart = max(this.length + start, 0);
						}
						return string_substr.call(this, normalizedStart, length);
					}
				}, hasNegativeSubstrBug);

				// ES5 15.5.4.20
				// whitespace from: http://es5.github.io/#x15.5.4.20
				var ws = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
					'\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028' +
					'\u2029\uFEFF';
				var zeroWidth = '\u200b';
				var wsRegexChars = '[' + ws + ']';
				var trimBeginRegexp = new RegExp('^' + wsRegexChars + wsRegexChars + '*');
				var trimEndRegexp = new RegExp(wsRegexChars + wsRegexChars + '*$');
				var hasTrimWhitespaceBug = StringPrototype.trim && (ws.trim() || !zeroWidth.trim());
				defineProperties(StringPrototype, {
					// http://blog.stevenlevithan.com/archives/faster-trim-javascript
					// http://perfectionkills.com/whitespace-deviations/
					trim: function trim() {
						if(typeof this === 'undefined' || this === null) {
							throw new TypeError("can't convert " + this + ' to object');
						}
						return $String(this).replace(trimBeginRegexp, '').replace(trimEndRegexp, '');
					}
				}, hasTrimWhitespaceBug);
				var trim = call.bind(String.prototype.trim);

				var hasLastIndexBug = StringPrototype.lastIndexOf && 'abc銇傘亜'.lastIndexOf('銇傘亜', 2) !== -1;
				defineProperties(StringPrototype, {
					lastIndexOf: function lastIndexOf(searchString) {
						if(typeof this === 'undefined' || this === null) {
							throw new TypeError("can't convert " + this + ' to object');
						}
						var S = $String(this);
						var searchStr = $String(searchString);
						var numPos = arguments.length > 1 ? $Number(arguments[1]) : NaN;
						var pos = isActualNaN(numPos) ? Infinity : ES.ToInteger(numPos);
						var start = min(max(pos, 0), S.length);
						var searchLen = searchStr.length;
						var k = start + searchLen;
						while(k > 0) {
							k = max(0, k - searchLen);
							var index = strIndexOf(strSlice(S, k, start + searchLen), searchStr);
							if(index !== -1) {
								return k + index;
							}
						}
						return -1;
					}
				}, hasLastIndexBug);

				var originalLastIndexOf = StringPrototype.lastIndexOf;
				defineProperties(StringPrototype, {
					lastIndexOf: function lastIndexOf(searchString) {
						return originalLastIndexOf.apply(this, arguments);
					}
				}, StringPrototype.lastIndexOf.length !== 1);

				// ES-5 15.1.2.2
				/* eslint-disable radix */
				if(parseInt(ws + '08') !== 8 || parseInt(ws + '0x16') !== 22) {
					/* eslint-enable radix */
					/* global parseInt: true */
					parseInt = (function(origParseInt) {
						var hexRegex = /^[\-+]?0[xX]/;
						return function parseInt(str, radix) {
							var string = trim(String(str));
							var defaultedRadix = $Number(radix) || (hexRegex.test(string) ? 16 : 10);
							return origParseInt(string, defaultedRadix);
						};
					}(parseInt));
				}

				// https://es5.github.io/#x15.1.2.3
				if(1 / parseFloat('-0') !== -Infinity) {
					/* global parseFloat: true */
					parseFloat = (function(origParseFloat) {
						return function parseFloat(string) {
							var inputString = trim(String(string));
							var result = origParseFloat(inputString);
							return result === 0 && strSlice(inputString, 0, 1) === '-' ? -0 : result;
						};
					}(parseFloat));
				}

				if(String(new RangeError('test')) !== 'RangeError: test') {
					var errorToStringShim = function toString() {
						if(typeof this === 'undefined' || this === null) {
							throw new TypeError("can't convert " + this + ' to object');
						}
						var name = this.name;
						if(typeof name === 'undefined') {
							name = 'Error';
						} else if(typeof name !== 'string') {
							name = $String(name);
						}
						var msg = this.message;
						if(typeof msg === 'undefined') {
							msg = '';
						} else if(typeof msg !== 'string') {
							msg = $String(msg);
						}
						if(!name) {
							return msg;
						}
						if(!msg) {
							return name;
						}
						return name + ': ' + msg;
					};
					// can't use defineProperties here because of toString enumeration issue in IE <= 8
					Error.prototype.toString = errorToStringShim;
				}

				if(supportsDescriptors) {
					var ensureNonEnumerable = function(obj, prop) {
						if(isEnum(obj, prop)) {
							var desc = Object.getOwnPropertyDescriptor(obj, prop);
							if(desc.configurable) {
								desc.enumerable = false;
								Object.defineProperty(obj, prop, desc);
							}
						}
					};
					ensureNonEnumerable(Error.prototype, 'message');
					if(Error.prototype.message !== '') {
						Error.prototype.message = '';
					}
					ensureNonEnumerable(Error.prototype, 'name');
				}

				if(String(/a/mig) !== '/a/gim') {
					var regexToString = function toString() {
						var str = '/' + this.source + '/';
						if(this.global) {
							str += 'g';
						}
						if(this.ignoreCase) {
							str += 'i';
						}
						if(this.multiline) {
							str += 'm';
						}
						return str;
					};
					// can't use defineProperties here because of toString enumeration issue in IE <= 8
					RegExp.prototype.toString = regexToString;
				}
			}));

			/***/
		}),

	/***/
	"N94b":
		/***/
		(function(module, exports, __webpack_require__) {

			var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
			/*!
			 * https://github.com/es-shims/es5-shim
			 * @license es5-shim Copyright 2009-2015 by contributors, MIT License
			 * see https://github.com/es-shims/es5-shim/blob/master/LICENSE
			 */

			// vim: ts=4 sts=4 sw=4 expandtab

			// Add semicolon to prevent IIFE from being passed as argument to concatenated code.
			;

			// UMD (Universal Module Definition)
			// see https://github.com/umdjs/umd/blob/master/templates/returnExports.js
			(function(root, factory) {
				'use strict';

				/* global define, exports, module */
				if(true) {
					// AMD. Register as an anonymous module.
					!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
						__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
							(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
							__WEBPACK_AMD_DEFINE_FACTORY__),
						__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
				} else if(typeof exports === 'object') {
					// Node. Does not work with strict CommonJS, but
					// only CommonJS-like enviroments that support module.exports,
					// like Node.
					module.exports = factory();
				} else {
					// Browser globals (root is window)
					root.returnExports = factory();
				}
			}(this, function() {

				var call = Function.call;
				var prototypeOfObject = Object.prototype;
				var owns = call.bind(prototypeOfObject.hasOwnProperty);
				var isEnumerable = call.bind(prototypeOfObject.propertyIsEnumerable);
				var toStr = call.bind(prototypeOfObject.toString);

				// If JS engine supports accessors creating shortcuts.
				var defineGetter;
				var defineSetter;
				var lookupGetter;
				var lookupSetter;
				var supportsAccessors = owns(prototypeOfObject, '__defineGetter__');
				if(supportsAccessors) {
					/* eslint-disable no-underscore-dangle */
					defineGetter = call.bind(prototypeOfObject.__defineGetter__);
					defineSetter = call.bind(prototypeOfObject.__defineSetter__);
					lookupGetter = call.bind(prototypeOfObject.__lookupGetter__);
					lookupSetter = call.bind(prototypeOfObject.__lookupSetter__);
					/* eslint-enable no-underscore-dangle */
				}

				var isPrimitive = function isPrimitive(o) {
					return o == null || (typeof o !== 'object' && typeof o !== 'function');
				};

				// ES5 15.2.3.2
				// http://es5.github.com/#x15.2.3.2
				if(!Object.getPrototypeOf) {
					// https://github.com/es-shims/es5-shim/issues#issue/2
					// http://ejohn.org/blog/objectgetprototypeof/
					// recommended by fschaefer on github
					//
					// sure, and webreflection says ^_^
					// ... this will nerever possibly return null
					// ... Opera Mini breaks here with infinite loops
					Object.getPrototypeOf = function getPrototypeOf(object) {
						/* eslint-disable no-proto */
						var proto = object.__proto__;
						/* eslint-enable no-proto */
						if(proto || proto === null) {
							return proto;
						} else if(toStr(object.constructor) === '[object Function]') {
							return object.constructor.prototype;
						} else if(object instanceof Object) {
							return prototypeOfObject;
						} else {
							// Correctly return null for Objects created with `Object.create(null)`
							// (shammed or native) or `{ __proto__: null}`.  Also returns null for
							// cross-realm objects on browsers that lack `__proto__` support (like
							// IE <11), but that's the best we can do.
							return null;
						}
					};
				}

				// ES5 15.2.3.3
				// http://es5.github.com/#x15.2.3.3

				var doesGetOwnPropertyDescriptorWork = function doesGetOwnPropertyDescriptorWork(object) {
					try {
						object.sentinel = 0;
						return Object.getOwnPropertyDescriptor(object, 'sentinel').value === 0;
					} catch(exception) {
						return false;
					}
				};

				// check whether getOwnPropertyDescriptor works if it's given. Otherwise, shim partially.
				if(Object.defineProperty) {
					var getOwnPropertyDescriptorWorksOnObject = doesGetOwnPropertyDescriptorWork({});
					var getOwnPropertyDescriptorWorksOnDom = typeof document === 'undefined' ||
						doesGetOwnPropertyDescriptorWork(document.createElement('div'));
					if(!getOwnPropertyDescriptorWorksOnDom || !getOwnPropertyDescriptorWorksOnObject) {
						var getOwnPropertyDescriptorFallback = Object.getOwnPropertyDescriptor;
					}
				}

				if(!Object.getOwnPropertyDescriptor || getOwnPropertyDescriptorFallback) {
					var ERR_NON_OBJECT = 'Object.getOwnPropertyDescriptor called on a non-object: ';

					/* eslint-disable no-proto */
					Object.getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
						if(isPrimitive(object)) {
							throw new TypeError(ERR_NON_OBJECT + object);
						}

						// make a valiant attempt to use the real getOwnPropertyDescriptor
						// for I8's DOM elements.
						if(getOwnPropertyDescriptorFallback) {
							try {
								return getOwnPropertyDescriptorFallback.call(Object, object, property);
							} catch(exception) {
								// try the shim if the real one doesn't work
							}
						}

						var descriptor;

						// If object does not owns property return undefined immediately.
						if(!owns(object, property)) {
							return descriptor;
						}

						// If object has a property then it's for sure `configurable`, and
						// probably `enumerable`. Detect enumerability though.
						descriptor = {
							enumerable: isEnumerable(object, property),
							configurable: true
						};

						// If JS engine supports accessor properties then property may be a
						// getter or setter.
						if(supportsAccessors) {
							// Unfortunately `__lookupGetter__` will return a getter even
							// if object has own non getter property along with a same named
							// inherited getter. To avoid misbehavior we temporary remove
							// `__proto__` so that `__lookupGetter__` will return getter only
							// if it's owned by an object.
							var prototype = object.__proto__;
							var notPrototypeOfObject = object !== prototypeOfObject;
							// avoid recursion problem, breaking in Opera Mini when
							// Object.getOwnPropertyDescriptor(Object.prototype, 'toString')
							// or any other Object.prototype accessor
							if(notPrototypeOfObject) {
								object.__proto__ = prototypeOfObject;
							}

							var getter = lookupGetter(object, property);
							var setter = lookupSetter(object, property);

							if(notPrototypeOfObject) {
								// Once we have getter and setter we can put values back.
								object.__proto__ = prototype;
							}

							if(getter || setter) {
								if(getter) {
									descriptor.get = getter;
								}
								if(setter) {
									descriptor.set = setter;
								}
								// If it was accessor property we're done and return here
								// in order to avoid adding `value` to the descriptor.
								return descriptor;
							}
						}

						// If we got this far we know that object has an own property that is
						// not an accessor so we set it as a value and return descriptor.
						descriptor.value = object[property];
						descriptor.writable = true;
						return descriptor;
					};
					/* eslint-enable no-proto */
				}

				// ES5 15.2.3.4
				// http://es5.github.com/#x15.2.3.4
				if(!Object.getOwnPropertyNames) {
					Object.getOwnPropertyNames = function getOwnPropertyNames(object) {
						return Object.keys(object);
					};
				}

				// ES5 15.2.3.5
				// http://es5.github.com/#x15.2.3.5
				if(!Object.create) {

					// Contributed by Brandon Benvie, October, 2012
					var createEmpty;
					var supportsProto = !({
							__proto__: null
						}
						instanceof Object);
					// the following produces false positives
					// in Opera Mini => not a reliable check
					// Object.prototype.__proto__ === null

					// Check for document.domain and active x support
					// No need to use active x approach when document.domain is not set
					// see https://github.com/es-shims/es5-shim/issues/150
					// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
					/* global ActiveXObject */
					var shouldUseActiveX = function shouldUseActiveX() {
						// return early if document.domain not set
						if(!document.domain) {
							return false;
						}

						try {
							return !!new ActiveXObject('htmlfile');
						} catch(exception) {
							return false;
						}
					};

					// This supports IE8 when document.domain is used
					// see https://github.com/es-shims/es5-shim/issues/150
					// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
					var getEmptyViaActiveX = function getEmptyViaActiveX() {
						var empty;
						var xDoc;

						xDoc = new ActiveXObject('htmlfile');

						var script = 'script';
						xDoc.write('<' + script + '></' + script + '>');
						xDoc.close();

						empty = xDoc.parentWindow.Object.prototype;
						xDoc = null;

						return empty;
					};

					// The original implementation using an iframe
					// before the activex approach was added
					// see https://github.com/es-shims/es5-shim/issues/150
					var getEmptyViaIFrame = function getEmptyViaIFrame() {
						var iframe = document.createElement('iframe');
						var parent = document.body || document.documentElement;
						var empty;

						iframe.style.display = 'none';
						parent.appendChild(iframe);
						/* eslint-disable no-script-url */
						iframe.src = 'javascript:';
						/* eslint-enable no-script-url */

						empty = iframe.contentWindow.Object.prototype;
						parent.removeChild(iframe);
						iframe = null;

						return empty;
					};

					/* global document */
					if(supportsProto || typeof document === 'undefined') {
						createEmpty = function() {
							return {
								__proto__: null
							};
						};
					} else {
						// In old IE __proto__ can't be used to manually set `null`, nor does
						// any other method exist to make an object that inherits from nothing,
						// aside from Object.prototype itself. Instead, create a new global
						// object and *steal* its Object.prototype and strip it bare. This is
						// used as the prototype to create nullary objects.
						createEmpty = function() {
							// Determine which approach to use
							// see https://github.com/es-shims/es5-shim/issues/150
							var empty = shouldUseActiveX() ? getEmptyViaActiveX() : getEmptyViaIFrame();

							delete empty.constructor;
							delete empty.hasOwnProperty;
							delete empty.propertyIsEnumerable;
							delete empty.isPrototypeOf;
							delete empty.toLocaleString;
							delete empty.toString;
							delete empty.valueOf;

							var Empty = function Empty() {};
							Empty.prototype = empty;
							// short-circuit future calls
							createEmpty = function() {
								return new Empty();
							};
							return new Empty();
						};
					}

					Object.create = function create(prototype, properties) {

						var object;
						var Type = function Type() {}; // An empty constructor.

						if(prototype === null) {
							object = createEmpty();
						} else {
							if(prototype !== null && isPrimitive(prototype)) {
								// In the native implementation `parent` can be `null`
								// OR *any* `instanceof Object`  (Object|Function|Array|RegExp|etc)
								// Use `typeof` tho, b/c in old IE, DOM elements are not `instanceof Object`
								// like they are in modern browsers. Using `Object.create` on DOM elements
								// is...err...probably inappropriate, but the native version allows for it.
								throw new TypeError('Object prototype may only be an Object or null'); // same msg as Chrome
							}
							Type.prototype = prototype;
							object = new Type();
							// IE has no built-in implementation of `Object.getPrototypeOf`
							// neither `__proto__`, but this manually setting `__proto__` will
							// guarantee that `Object.getPrototypeOf` will work as expected with
							// objects created using `Object.create`
							/* eslint-disable no-proto */
							object.__proto__ = prototype;
							/* eslint-enable no-proto */
						}

						if(properties !== void 0) {
							Object.defineProperties(object, properties);
						}

						return object;
					};
				}

				// ES5 15.2.3.6
				// http://es5.github.com/#x15.2.3.6

				// Patch for WebKit and IE8 standard mode
				// Designed by hax <hax.github.com>
				// related issue: https://github.com/es-shims/es5-shim/issues#issue/5
				// IE8 Reference:
				//     http://msdn.microsoft.com/en-us/library/dd282900.aspx
				//     http://msdn.microsoft.com/en-us/library/dd229916.aspx
				// WebKit Bugs:
				//     https://bugs.webkit.org/show_bug.cgi?id=36423

				var doesDefinePropertyWork = function doesDefinePropertyWork(object) {
					try {
						Object.defineProperty(object, 'sentinel', {});
						return 'sentinel' in object;
					} catch(exception) {
						return false;
					}
				};

				// check whether defineProperty works if it's given. Otherwise,
				// shim partially.
				if(Object.defineProperty) {
					var definePropertyWorksOnObject = doesDefinePropertyWork({});
					var definePropertyWorksOnDom = typeof document === 'undefined' ||
						doesDefinePropertyWork(document.createElement('div'));
					if(!definePropertyWorksOnObject || !definePropertyWorksOnDom) {
						var definePropertyFallback = Object.defineProperty,
							definePropertiesFallback = Object.defineProperties;
					}
				}

				if(!Object.defineProperty || definePropertyFallback) {
					var ERR_NON_OBJECT_DESCRIPTOR = 'Property description must be an object: ';
					var ERR_NON_OBJECT_TARGET = 'Object.defineProperty called on non-object: ';
					var ERR_ACCESSORS_NOT_SUPPORTED = 'getters & setters can not be defined on this javascript engine';

					Object.defineProperty = function defineProperty(object, property, descriptor) {
						if(isPrimitive(object)) {
							throw new TypeError(ERR_NON_OBJECT_TARGET + object);
						}
						if(isPrimitive(descriptor)) {
							throw new TypeError(ERR_NON_OBJECT_DESCRIPTOR + descriptor);
						}
						// make a valiant attempt to use the real defineProperty
						// for I8's DOM elements.
						if(definePropertyFallback) {
							try {
								return definePropertyFallback.call(Object, object, property, descriptor);
							} catch(exception) {
								// try the shim if the real one doesn't work
							}
						}

						// If it's a data property.
						if('value' in descriptor) {
							// fail silently if 'writable', 'enumerable', or 'configurable'
							// are requested but not supported
							/*
							// alternate approach:
							if ( // can't implement these features; allow false but not true
							    ('writable' in descriptor && !descriptor.writable) ||
							    ('enumerable' in descriptor && !descriptor.enumerable) ||
							    ('configurable' in descriptor && !descriptor.configurable)
							))
							    throw new RangeError(
							        'This implementation of Object.defineProperty does not support configurable, enumerable, or writable.'
							    );
							*/

							if(supportsAccessors && (lookupGetter(object, property) || lookupSetter(object, property))) {
								// As accessors are supported only on engines implementing
								// `__proto__` we can safely override `__proto__` while defining
								// a property to make sure that we don't hit an inherited
								// accessor.
								/* eslint-disable no-proto */
								var prototype = object.__proto__;
								object.__proto__ = prototypeOfObject;
								// Deleting a property anyway since getter / setter may be
								// defined on object itself.
								delete object[property];
								object[property] = descriptor.value;
								// Setting original `__proto__` back now.
								object.__proto__ = prototype;
								/* eslint-enable no-proto */
							} else {
								object[property] = descriptor.value;
							}
						} else {
							var hasGetter = 'get' in descriptor;
							var hasSetter = 'set' in descriptor;
							if(!supportsAccessors && (hasGetter || hasSetter)) {
								throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);
							}
							// If we got that far then getters and setters can be defined !!
							if(hasGetter) {
								defineGetter(object, property, descriptor.get);
							}
							if(hasSetter) {
								defineSetter(object, property, descriptor.set);
							}
						}
						return object;
					};
				}

				// ES5 15.2.3.7
				// http://es5.github.com/#x15.2.3.7
				if(!Object.defineProperties || definePropertiesFallback) {
					Object.defineProperties = function defineProperties(object, properties) {
						// make a valiant attempt to use the real defineProperties
						if(definePropertiesFallback) {
							try {
								return definePropertiesFallback.call(Object, object, properties);
							} catch(exception) {
								// try the shim if the real one doesn't work
							}
						}

						Object.keys(properties).forEach(function(property) {
							if(property !== '__proto__') {
								Object.defineProperty(object, property, properties[property]);
							}
						});
						return object;
					};
				}

				// ES5 15.2.3.8
				// http://es5.github.com/#x15.2.3.8
				if(!Object.seal) {
					Object.seal = function seal(object) {
						if(Object(object) !== object) {
							throw new TypeError('Object.seal can only be called on Objects.');
						}
						// this is misleading and breaks feature-detection, but
						// allows "securable" code to "gracefully" degrade to working
						// but insecure code.
						return object;
					};
				}

				// ES5 15.2.3.9
				// http://es5.github.com/#x15.2.3.9
				if(!Object.freeze) {
					Object.freeze = function freeze(object) {
						if(Object(object) !== object) {
							throw new TypeError('Object.freeze can only be called on Objects.');
						}
						// this is misleading and breaks feature-detection, but
						// allows "securable" code to "gracefully" degrade to working
						// but insecure code.
						return object;
					};
				}

				// detect a Rhino bug and patch it
				try {
					Object.freeze(function() {});
				} catch(exception) {
					Object.freeze = (function(freezeObject) {
						return function freeze(object) {
							if(typeof object === 'function') {
								return object;
							} else {
								return freezeObject(object);
							}
						};
					}(Object.freeze));
				}

				// ES5 15.2.3.10
				// http://es5.github.com/#x15.2.3.10
				if(!Object.preventExtensions) {
					Object.preventExtensions = function preventExtensions(object) {
						if(Object(object) !== object) {
							throw new TypeError('Object.preventExtensions can only be called on Objects.');
						}
						// this is misleading and breaks feature-detection, but
						// allows "securable" code to "gracefully" degrade to working
						// but insecure code.
						return object;
					};
				}

				// ES5 15.2.3.11
				// http://es5.github.com/#x15.2.3.11
				if(!Object.isSealed) {
					Object.isSealed = function isSealed(object) {
						if(Object(object) !== object) {
							throw new TypeError('Object.isSealed can only be called on Objects.');
						}
						return false;
					};
				}

				// ES5 15.2.3.12
				// http://es5.github.com/#x15.2.3.12
				if(!Object.isFrozen) {
					Object.isFrozen = function isFrozen(object) {
						if(Object(object) !== object) {
							throw new TypeError('Object.isFrozen can only be called on Objects.');
						}
						return false;
					};
				}

				// ES5 15.2.3.13
				// http://es5.github.com/#x15.2.3.13
				if(!Object.isExtensible) {
					Object.isExtensible = function isExtensible(object) {
						// 1. If Type(O) is not Object throw a TypeError exception.
						if(Object(object) !== object) {
							throw new TypeError('Object.isExtensible can only be called on Objects.');
						}
						// 2. Return the Boolean value of the [[Extensible]] internal property of O.
						var name = '';
						while(owns(object, name)) {
							name += '?';
						}
						object[name] = true;
						var returnValue = owns(object, name);
						delete object[name];
						return returnValue;
					};
				}

			}));

			/***/
		}),

	/***/
	"W2nU":
		/***/
		(function(module, exports) {

			// shim for using process in browser
			var process = module.exports = {};

			// cached from whatever global is present so that test runners that stub it
			// don't break things.  But we need to wrap it in a try catch in case it is
			// wrapped in strict mode code which doesn't define any globals.  It's inside a
			// function because try/catches deoptimize in certain engines.

			var cachedSetTimeout;
			var cachedClearTimeout;

			function defaultSetTimout() {
				throw new Error('setTimeout has not been defined');
			}

			function defaultClearTimeout() {
				throw new Error('clearTimeout has not been defined');
			}
			(function() {
				try {
					if(typeof setTimeout === 'function') {
						cachedSetTimeout = setTimeout;
					} else {
						cachedSetTimeout = defaultSetTimout;
					}
				} catch(e) {
					cachedSetTimeout = defaultSetTimout;
				}
				try {
					if(typeof clearTimeout === 'function') {
						cachedClearTimeout = clearTimeout;
					} else {
						cachedClearTimeout = defaultClearTimeout;
					}
				} catch(e) {
					cachedClearTimeout = defaultClearTimeout;
				}
			}())

			function runTimeout(fun) {
				if(cachedSetTimeout === setTimeout) {
					//normal enviroments in sane situations
					return setTimeout(fun, 0);
				}
				// if setTimeout wasn't available but was latter defined
				if((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
					cachedSetTimeout = setTimeout;
					return setTimeout(fun, 0);
				}
				try {
					// when when somebody has screwed with setTimeout but no I.E. maddness
					return cachedSetTimeout(fun, 0);
				} catch(e) {
					try {
						// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
						return cachedSetTimeout.call(null, fun, 0);
					} catch(e) {
						// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
						return cachedSetTimeout.call(this, fun, 0);
					}
				}

			}

			function runClearTimeout(marker) {
				if(cachedClearTimeout === clearTimeout) {
					//normal enviroments in sane situations
					return clearTimeout(marker);
				}
				// if clearTimeout wasn't available but was latter defined
				if((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
					cachedClearTimeout = clearTimeout;
					return clearTimeout(marker);
				}
				try {
					// when when somebody has screwed with setTimeout but no I.E. maddness
					return cachedClearTimeout(marker);
				} catch(e) {
					try {
						// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
						return cachedClearTimeout.call(null, marker);
					} catch(e) {
						// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
						// Some versions of I.E. have different rules for clearTimeout vs setTimeout
						return cachedClearTimeout.call(this, marker);
					}
				}

			}
			var queue = [];
			var draining = false;
			var currentQueue;
			var queueIndex = -1;

			function cleanUpNextTick() {
				if(!draining || !currentQueue) {
					return;
				}
				draining = false;
				if(currentQueue.length) {
					queue = currentQueue.concat(queue);
				} else {
					queueIndex = -1;
				}
				if(queue.length) {
					drainQueue();
				}
			}

			function drainQueue() {
				if(draining) {
					return;
				}
				var timeout = runTimeout(cleanUpNextTick);
				draining = true;

				var len = queue.length;
				while(len) {
					currentQueue = queue;
					queue = [];
					while(++queueIndex < len) {
						if(currentQueue) {
							currentQueue[queueIndex].run();
						}
					}
					queueIndex = -1;
					len = queue.length;
				}
				currentQueue = null;
				draining = false;
				runClearTimeout(timeout);
			}

			process.nextTick = function(fun) {
				var args = new Array(arguments.length - 1);
				if(arguments.length > 1) {
					for(var i = 1; i < arguments.length; i++) {
						args[i - 1] = arguments[i];
					}
				}
				queue.push(new Item(fun, args));
				if(queue.length === 1 && !draining) {
					runTimeout(drainQueue);
				}
			};

			// v8 likes predictible objects
			function Item(fun, array) {
				this.fun = fun;
				this.array = array;
			}
			Item.prototype.run = function() {
				this.fun.apply(null, this.array);
			};
			process.title = 'browser';
			process.browser = true;
			process.env = {};
			process.argv = [];
			process.version = ''; // empty string to avoid regexp issues
			process.versions = {};

			function noop() {}

			process.on = noop;
			process.addListener = noop;
			process.once = noop;
			process.off = noop;
			process.removeListener = noop;
			process.removeAllListeners = noop;
			process.emit = noop;
			process.prependListener = noop;
			process.prependOnceListener = noop;

			process.listeners = function(name) {
				return []
			}

			process.binding = function(name) {
				throw new Error('process.binding is not supported');
			};

			process.cwd = function() {
				return '/'
			};
			process.chdir = function(dir) {
				throw new Error('process.chdir is not supported');
			};
			process.umask = function() {
				return 0;
			};

			/***/
		}),

	/***/
	"hKoQ":
		/***/
		(function(module, exports, __webpack_require__) {

			/* WEBPACK VAR INJECTION */
			(function(process, global) {
				var require;
				/*!
				 * @overview es6-promise - a tiny implementation of Promises/A+.
				 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
				 * @license   Licensed under MIT license
				 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
				 * @version   4.1.1
				 */

				(function(global, factory) {
					true ? module.exports = factory() :
						typeof define === 'function' && define.amd ? define(factory) :
						(global.ES6Promise = factory());
				}(this, (function() {
					'use strict';

					function objectOrFunction(x) {
						var type = typeof x;
						return x !== null && (type === 'object' || type === 'function');
					}

					function isFunction(x) {
						return typeof x === 'function';
					}

					var _isArray = undefined;
					if(Array.isArray) {
						_isArray = Array.isArray;
					} else {
						_isArray = function(x) {
							return Object.prototype.toString.call(x) === '[object Array]';
						};
					}

					var isArray = _isArray;

					var len = 0;
					var vertxNext = undefined;
					var customSchedulerFn = undefined;

					var asap = function asap(callback, arg) {
						queue[len] = callback;
						queue[len + 1] = arg;
						len += 2;
						if(len === 2) {
							// If len is 2, that means that we need to schedule an async flush.
							// If additional callbacks are queued before the queue is flushed, they
							// will be processed by this flush that we are scheduling.
							if(customSchedulerFn) {
								customSchedulerFn(flush);
							} else {
								scheduleFlush();
							}
						}
					};

					function setScheduler(scheduleFn) {
						customSchedulerFn = scheduleFn;
					}

					function setAsap(asapFn) {
						asap = asapFn;
					}

					var browserWindow = typeof window !== 'undefined' ? window : undefined;
					var browserGlobal = browserWindow || {};
					var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
					var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && ({}).toString.call(process) === '[object process]';

					// test for web worker but not in IE10
					var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

					// node
					function useNextTick() {
						// node version 0.10.x displays a deprecation warning when nextTick is used recursively
						// see https://github.com/cujojs/when/issues/410 for details
						return function() {
							return process.nextTick(flush);
						};
					}

					// vertx
					function useVertxTimer() {
						if(typeof vertxNext !== 'undefined') {
							return function() {
								vertxNext(flush);
							};
						}

						return useSetTimeout();
					}

					function useMutationObserver() {
						var iterations = 0;
						var observer = new BrowserMutationObserver(flush);
						var node = document.createTextNode('');
						observer.observe(node, {
							characterData: true
						});

						return function() {
							node.data = iterations = ++iterations % 2;
						};
					}

					// web worker
					function useMessageChannel() {
						var channel = new MessageChannel();
						channel.port1.onmessage = flush;
						return function() {
							return channel.port2.postMessage(0);
						};
					}

					function useSetTimeout() {
						// Store setTimeout reference so es6-promise will be unaffected by
						// other code modifying setTimeout (like sinon.useFakeTimers())
						var globalSetTimeout = setTimeout;
						return function() {
							return globalSetTimeout(flush, 1);
						};
					}

					var queue = new Array(1000);

					function flush() {
						for(var i = 0; i < len; i += 2) {
							var callback = queue[i];
							var arg = queue[i + 1];

							callback(arg);

							queue[i] = undefined;
							queue[i + 1] = undefined;
						}

						len = 0;
					}

					function attemptVertx() {
						try {
							var r = require;
							var vertx = __webpack_require__(3);
							vertxNext = vertx.runOnLoop || vertx.runOnContext;
							return useVertxTimer();
						} catch(e) {
							return useSetTimeout();
						}
					}

					var scheduleFlush = undefined;
					// Decide what async method to use to triggering processing of queued callbacks:
					if(isNode) {
						scheduleFlush = useNextTick();
					} else if(BrowserMutationObserver) {
						scheduleFlush = useMutationObserver();
					} else if(isWorker) {
						scheduleFlush = useMessageChannel();
					} else if(browserWindow === undefined && "function" === 'function') {
						scheduleFlush = attemptVertx();
					} else {
						scheduleFlush = useSetTimeout();
					}

					function then(onFulfillment, onRejection) {
						var _arguments = arguments;

						var parent = this;

						var child = new this.constructor(noop);

						if(child[PROMISE_ID] === undefined) {
							makePromise(child);
						}

						var _state = parent._state;

						if(_state) {
							(function() {
								var callback = _arguments[_state - 1];
								asap(function() {
									return invokeCallback(_state, child, callback, parent._result);
								});
							})();
						} else {
							subscribe(parent, child, onFulfillment, onRejection);
						}

						return child;
					}

					/**
					  `Promise.resolve` returns a promise that will become resolved with the
					  passed `value`. It is shorthand for the following:

					  ```javascript
					  let promise = new Promise(function(resolve, reject){
					    resolve(1);
					  });

					  promise.then(function(value){
					    // value === 1
					  });
					  ```

					  Instead of writing the above, your code now simply becomes the following:

					  ```javascript
					  let promise = Promise.resolve(1);

					  promise.then(function(value){
					    // value === 1
					  });
					  ```

					  @method resolve
					  @static
					  @param {Any} value value that the returned promise will be resolved with
					  Useful for tooling.
					  @return {Promise} a promise that will become fulfilled with the given
					  `value`
					*/
					function resolve$1(object) {
						/*jshint validthis:true */
						var Constructor = this;

						if(object && typeof object === 'object' && object.constructor === Constructor) {
							return object;
						}

						var promise = new Constructor(noop);
						resolve(promise, object);
						return promise;
					}

					var PROMISE_ID = Math.random().toString(36).substring(16);

					function noop() {}

					var PENDING = void 0;
					var FULFILLED = 1;
					var REJECTED = 2;

					var GET_THEN_ERROR = new ErrorObject();

					function selfFulfillment() {
						return new TypeError("You cannot resolve a promise with itself");
					}

					function cannotReturnOwn() {
						return new TypeError('A promises callback cannot return that same promise.');
					}

					function getThen(promise) {
						try {
							return promise.then;
						} catch(error) {
							GET_THEN_ERROR.error = error;
							return GET_THEN_ERROR;
						}
					}

					function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
						try {
							then$$1.call(value, fulfillmentHandler, rejectionHandler);
						} catch(e) {
							return e;
						}
					}

					function handleForeignThenable(promise, thenable, then$$1) {
						asap(function(promise) {
							var sealed = false;
							var error = tryThen(then$$1, thenable, function(value) {
								if(sealed) {
									return;
								}
								sealed = true;
								if(thenable !== value) {
									resolve(promise, value);
								} else {
									fulfill(promise, value);
								}
							}, function(reason) {
								if(sealed) {
									return;
								}
								sealed = true;

								reject(promise, reason);
							}, 'Settle: ' + (promise._label || ' unknown promise'));

							if(!sealed && error) {
								sealed = true;
								reject(promise, error);
							}
						}, promise);
					}

					function handleOwnThenable(promise, thenable) {
						if(thenable._state === FULFILLED) {
							fulfill(promise, thenable._result);
						} else if(thenable._state === REJECTED) {
							reject(promise, thenable._result);
						} else {
							subscribe(thenable, undefined, function(value) {
								return resolve(promise, value);
							}, function(reason) {
								return reject(promise, reason);
							});
						}
					}

					function handleMaybeThenable(promise, maybeThenable, then$$1) {
						if(maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
							handleOwnThenable(promise, maybeThenable);
						} else {
							if(then$$1 === GET_THEN_ERROR) {
								reject(promise, GET_THEN_ERROR.error);
								GET_THEN_ERROR.error = null;
							} else if(then$$1 === undefined) {
								fulfill(promise, maybeThenable);
							} else if(isFunction(then$$1)) {
								handleForeignThenable(promise, maybeThenable, then$$1);
							} else {
								fulfill(promise, maybeThenable);
							}
						}
					}

					function resolve(promise, value) {
						if(promise === value) {
							reject(promise, selfFulfillment());
						} else if(objectOrFunction(value)) {
							handleMaybeThenable(promise, value, getThen(value));
						} else {
							fulfill(promise, value);
						}
					}

					function publishRejection(promise) {
						if(promise._onerror) {
							promise._onerror(promise._result);
						}

						publish(promise);
					}

					function fulfill(promise, value) {
						if(promise._state !== PENDING) {
							return;
						}

						promise._result = value;
						promise._state = FULFILLED;

						if(promise._subscribers.length !== 0) {
							asap(publish, promise);
						}
					}

					function reject(promise, reason) {
						if(promise._state !== PENDING) {
							return;
						}
						promise._state = REJECTED;
						promise._result = reason;

						asap(publishRejection, promise);
					}

					function subscribe(parent, child, onFulfillment, onRejection) {
						var _subscribers = parent._subscribers;
						var length = _subscribers.length;

						parent._onerror = null;

						_subscribers[length] = child;
						_subscribers[length + FULFILLED] = onFulfillment;
						_subscribers[length + REJECTED] = onRejection;

						if(length === 0 && parent._state) {
							asap(publish, parent);
						}
					}

					function publish(promise) {
						var subscribers = promise._subscribers;
						var settled = promise._state;

						if(subscribers.length === 0) {
							return;
						}

						var child = undefined,
							callback = undefined,
							detail = promise._result;

						for(var i = 0; i < subscribers.length; i += 3) {
							child = subscribers[i];
							callback = subscribers[i + settled];

							if(child) {
								invokeCallback(settled, child, callback, detail);
							} else {
								callback(detail);
							}
						}

						promise._subscribers.length = 0;
					}

					function ErrorObject() {
						this.error = null;
					}

					var TRY_CATCH_ERROR = new ErrorObject();

					function tryCatch(callback, detail) {
						try {
							return callback(detail);
						} catch(e) {
							TRY_CATCH_ERROR.error = e;
							return TRY_CATCH_ERROR;
						}
					}

					function invokeCallback(settled, promise, callback, detail) {
						var hasCallback = isFunction(callback),
							value = undefined,
							error = undefined,
							succeeded = undefined,
							failed = undefined;

						if(hasCallback) {
							value = tryCatch(callback, detail);

							if(value === TRY_CATCH_ERROR) {
								failed = true;
								error = value.error;
								value.error = null;
							} else {
								succeeded = true;
							}

							if(promise === value) {
								reject(promise, cannotReturnOwn());
								return;
							}
						} else {
							value = detail;
							succeeded = true;
						}

						if(promise._state !== PENDING) {
							// noop
						} else if(hasCallback && succeeded) {
							resolve(promise, value);
						} else if(failed) {
							reject(promise, error);
						} else if(settled === FULFILLED) {
							fulfill(promise, value);
						} else if(settled === REJECTED) {
							reject(promise, value);
						}
					}

					function initializePromise(promise, resolver) {
						try {
							resolver(function resolvePromise(value) {
								resolve(promise, value);
							}, function rejectPromise(reason) {
								reject(promise, reason);
							});
						} catch(e) {
							reject(promise, e);
						}
					}

					var id = 0;

					function nextId() {
						return id++;
					}

					function makePromise(promise) {
						promise[PROMISE_ID] = id++;
						promise._state = undefined;
						promise._result = undefined;
						promise._subscribers = [];
					}

					function Enumerator$1(Constructor, input) {
						this._instanceConstructor = Constructor;
						this.promise = new Constructor(noop);

						if(!this.promise[PROMISE_ID]) {
							makePromise(this.promise);
						}

						if(isArray(input)) {
							this.length = input.length;
							this._remaining = input.length;

							this._result = new Array(this.length);

							if(this.length === 0) {
								fulfill(this.promise, this._result);
							} else {
								this.length = this.length || 0;
								this._enumerate(input);
								if(this._remaining === 0) {
									fulfill(this.promise, this._result);
								}
							}
						} else {
							reject(this.promise, validationError());
						}
					}

					function validationError() {
						return new Error('Array Methods must be provided an Array');
					}

					Enumerator$1.prototype._enumerate = function(input) {
						for(var i = 0; this._state === PENDING && i < input.length; i++) {
							this._eachEntry(input[i], i);
						}
					};

					Enumerator$1.prototype._eachEntry = function(entry, i) {
						var c = this._instanceConstructor;
						var resolve$$1 = c.resolve;

						if(resolve$$1 === resolve$1) {
							var _then = getThen(entry);

							if(_then === then && entry._state !== PENDING) {
								this._settledAt(entry._state, i, entry._result);
							} else if(typeof _then !== 'function') {
								this._remaining--;
								this._result[i] = entry;
							} else if(c === Promise$2) {
								var promise = new c(noop);
								handleMaybeThenable(promise, entry, _then);
								this._willSettleAt(promise, i);
							} else {
								this._willSettleAt(new c(function(resolve$$1) {
									return resolve$$1(entry);
								}), i);
							}
						} else {
							this._willSettleAt(resolve$$1(entry), i);
						}
					};

					Enumerator$1.prototype._settledAt = function(state, i, value) {
						var promise = this.promise;

						if(promise._state === PENDING) {
							this._remaining--;

							if(state === REJECTED) {
								reject(promise, value);
							} else {
								this._result[i] = value;
							}
						}

						if(this._remaining === 0) {
							fulfill(promise, this._result);
						}
					};

					Enumerator$1.prototype._willSettleAt = function(promise, i) {
						var enumerator = this;

						subscribe(promise, undefined, function(value) {
							return enumerator._settledAt(FULFILLED, i, value);
						}, function(reason) {
							return enumerator._settledAt(REJECTED, i, reason);
						});
					};

					/**
					  `Promise.all` accepts an array of promises, and returns a new promise which
					  is fulfilled with an array of fulfillment values for the passed promises, or
					  rejected with the reason of the first passed promise to be rejected. It casts all
					  elements of the passed iterable to promises as it runs this algorithm.

					  Example:

					  ```javascript
					  let promise1 = resolve(1);
					  let promise2 = resolve(2);
					  let promise3 = resolve(3);
					  let promises = [ promise1, promise2, promise3 ];

					  Promise.all(promises).then(function(array){
					    // The array here would be [ 1, 2, 3 ];
					  });
					  ```

					  If any of the `promises` given to `all` are rejected, the first promise
					  that is rejected will be given as an argument to the returned promises's
					  rejection handler. For example:

					  Example:

					  ```javascript
					  let promise1 = resolve(1);
					  let promise2 = reject(new Error("2"));
					  let promise3 = reject(new Error("3"));
					  let promises = [ promise1, promise2, promise3 ];

					  Promise.all(promises).then(function(array){
					    // Code here never runs because there are rejected promises!
					  }, function(error) {
					    // error.message === "2"
					  });
					  ```

					  @method all
					  @static
					  @param {Array} entries array of promises
					  @param {String} label optional string for labeling the promise.
					  Useful for tooling.
					  @return {Promise} promise that is fulfilled when all `promises` have been
					  fulfilled, or rejected if any of them become rejected.
					  @static
					*/
					function all$1(entries) {
						return new Enumerator$1(this, entries).promise;
					}

					/**
					  `Promise.race` returns a new promise which is settled in the same way as the
					  first passed promise to settle.

					  Example:

					  ```javascript
					  let promise1 = new Promise(function(resolve, reject){
					    setTimeout(function(){
					      resolve('promise 1');
					    }, 200);
					  });

					  let promise2 = new Promise(function(resolve, reject){
					    setTimeout(function(){
					      resolve('promise 2');
					    }, 100);
					  });

					  Promise.race([promise1, promise2]).then(function(result){
					    // result === 'promise 2' because it was resolved before promise1
					    // was resolved.
					  });
					  ```

					  `Promise.race` is deterministic in that only the state of the first
					  settled promise matters. For example, even if other promises given to the
					  `promises` array argument are resolved, but the first settled promise has
					  become rejected before the other promises became fulfilled, the returned
					  promise will become rejected:

					  ```javascript
					  let promise1 = new Promise(function(resolve, reject){
					    setTimeout(function(){
					      resolve('promise 1');
					    }, 200);
					  });

					  let promise2 = new Promise(function(resolve, reject){
					    setTimeout(function(){
					      reject(new Error('promise 2'));
					    }, 100);
					  });

					  Promise.race([promise1, promise2]).then(function(result){
					    // Code here never runs
					  }, function(reason){
					    // reason.message === 'promise 2' because promise 2 became rejected before
					    // promise 1 became fulfilled
					  });
					  ```

					  An example real-world use case is implementing timeouts:

					  ```javascript
					  Promise.race([ajax('foo.json'), timeout(5000)])
					  ```

					  @method race
					  @static
					  @param {Array} promises array of promises to observe
					  Useful for tooling.
					  @return {Promise} a promise which settles in the same way as the first passed
					  promise to settle.
					*/
					function race$1(entries) {
						/*jshint validthis:true */
						var Constructor = this;

						if(!isArray(entries)) {
							return new Constructor(function(_, reject) {
								return reject(new TypeError('You must pass an array to race.'));
							});
						} else {
							return new Constructor(function(resolve, reject) {
								var length = entries.length;
								for(var i = 0; i < length; i++) {
									Constructor.resolve(entries[i]).then(resolve, reject);
								}
							});
						}
					}

					/**
					  `Promise.reject` returns a promise rejected with the passed `reason`.
					  It is shorthand for the following:

					  ```javascript
					  let promise = new Promise(function(resolve, reject){
					    reject(new Error('WHOOPS'));
					  });

					  promise.then(function(value){
					    // Code here doesn't run because the promise is rejected!
					  }, function(reason){
					    // reason.message === 'WHOOPS'
					  });
					  ```

					  Instead of writing the above, your code now simply becomes the following:

					  ```javascript
					  let promise = Promise.reject(new Error('WHOOPS'));

					  promise.then(function(value){
					    // Code here doesn't run because the promise is rejected!
					  }, function(reason){
					    // reason.message === 'WHOOPS'
					  });
					  ```

					  @method reject
					  @static
					  @param {Any} reason value that the returned promise will be rejected with.
					  Useful for tooling.
					  @return {Promise} a promise rejected with the given `reason`.
					*/
					function reject$1(reason) {
						/*jshint validthis:true */
						var Constructor = this;
						var promise = new Constructor(noop);
						reject(promise, reason);
						return promise;
					}

					function needsResolver() {
						throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
					}

					function needsNew() {
						throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
					}

					/**
					  Promise objects represent the eventual result of an asynchronous operation. The
					  primary way of interacting with a promise is through its `then` method, which
					  registers callbacks to receive either a promise's eventual value or the reason
					  why the promise cannot be fulfilled.

					  Terminology
					  -----------

					  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
					  - `thenable` is an object or function that defines a `then` method.
					  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
					  - `exception` is a value that is thrown using the throw statement.
					  - `reason` is a value that indicates why a promise was rejected.
					  - `settled` the final resting state of a promise, fulfilled or rejected.

					  A promise can be in one of three states: pending, fulfilled, or rejected.

					  Promises that are fulfilled have a fulfillment value and are in the fulfilled
					  state.  Promises that are rejected have a rejection reason and are in the
					  rejected state.  A fulfillment value is never a thenable.

					  Promises can also be said to *resolve* a value.  If this value is also a
					  promise, then the original promise's settled state will match the value's
					  settled state.  So a promise that *resolves* a promise that rejects will
					  itself reject, and a promise that *resolves* a promise that fulfills will
					  itself fulfill.


					  Basic Usage:
					  ------------

					  ```js
					  let promise = new Promise(function(resolve, reject) {
					    // on success
					    resolve(value);

					    // on failure
					    reject(reason);
					  });

					  promise.then(function(value) {
					    // on fulfillment
					  }, function(reason) {
					    // on rejection
					  });
					  ```

					  Advanced Usage:
					  ---------------

					  Promises shine when abstracting away asynchronous interactions such as
					  `XMLHttpRequest`s.

					  ```js
					  function getJSON(url) {
					    return new Promise(function(resolve, reject){
					      let xhr = new XMLHttpRequest();

					      xhr.open('GET', url);
					      xhr.onreadystatechange = handler;
					      xhr.responseType = 'json';
					      xhr.setRequestHeader('Accept', 'application/json');
					      xhr.send();

					      function handler() {
					        if (this.readyState === this.DONE) {
					          if (this.status === 200) {
					            resolve(this.response);
					          } else {
					            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
					          }
					        }
					      };
					    });
					  }

					  getJSON('/posts.json').then(function(json) {
					    // on fulfillment
					  }, function(reason) {
					    // on rejection
					  });
					  ```

					  Unlike callbacks, promises are great composable primitives.

					  ```js
					  Promise.all([
					    getJSON('/posts'),
					    getJSON('/comments')
					  ]).then(function(values){
					    values[0] // => postsJSON
					    values[1] // => commentsJSON

					    return values;
					  });
					  ```

					  @class Promise
					  @param {function} resolver
					  Useful for tooling.
					  @constructor
					*/
					function Promise$2(resolver) {
						this[PROMISE_ID] = nextId();
						this._result = this._state = undefined;
						this._subscribers = [];

						if(noop !== resolver) {
							typeof resolver !== 'function' && needsResolver();
							this instanceof Promise$2 ? initializePromise(this, resolver) : needsNew();
						}
					}

					Promise$2.all = all$1;
					Promise$2.race = race$1;
					Promise$2.resolve = resolve$1;
					Promise$2.reject = reject$1;
					Promise$2._setScheduler = setScheduler;
					Promise$2._setAsap = setAsap;
					Promise$2._asap = asap;

					Promise$2.prototype = {
						constructor: Promise$2,

						/**
						  The primary way of interacting with a promise is through its `then` method,
						  which registers callbacks to receive either a promise's eventual value or the
						  reason why the promise cannot be fulfilled.
  
						  ```js
						  findUser().then(function(user){
						    // user is available
						  }, function(reason){
						    // user is unavailable, and you are given the reason why
						  });
						  ```
  
						  Chaining
						  --------
  
						  The return value of `then` is itself a promise.  This second, 'downstream'
						  promise is resolved with the return value of the first promise's fulfillment
						  or rejection handler, or rejected if the handler throws an exception.
  
						  ```js
						  findUser().then(function (user) {
						    return user.name;
						  }, function (reason) {
						    return 'default name';
						  }).then(function (userName) {
						    // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
						    // will be `'default name'`
						  });
  
						  findUser().then(function (user) {
						    throw new Error('Found user, but still unhappy');
						  }, function (reason) {
						    throw new Error('`findUser` rejected and we're unhappy');
						  }).then(function (value) {
						    // never reached
						  }, function (reason) {
						    // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
						    // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
						  });
						  ```
						  If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
  
						  ```js
						  findUser().then(function (user) {
						    throw new PedagogicalException('Upstream error');
						  }).then(function (value) {
						    // never reached
						  }).then(function (value) {
						    // never reached
						  }, function (reason) {
						    // The `PedgagocialException` is propagated all the way down to here
						  });
						  ```
  
						  Assimilation
						  ------------
  
						  Sometimes the value you want to propagate to a downstream promise can only be
						  retrieved asynchronously. This can be achieved by returning a promise in the
						  fulfillment or rejection handler. The downstream promise will then be pending
						  until the returned promise is settled. This is called *assimilation*.
  
						  ```js
						  findUser().then(function (user) {
						    return findCommentsByAuthor(user);
						  }).then(function (comments) {
						    // The user's comments are now available
						  });
						  ```
  
						  If the assimliated promise rejects, then the downstream promise will also reject.
  
						  ```js
						  findUser().then(function (user) {
						    return findCommentsByAuthor(user);
						  }).then(function (comments) {
						    // If `findCommentsByAuthor` fulfills, we'll have the value here
						  }, function (reason) {
						    // If `findCommentsByAuthor` rejects, we'll have the reason here
						  });
						  ```
  
						  Simple Example
						  --------------
  
						  Synchronous Example
  
						  ```javascript
						  let result;
  
						  try {
						    result = findResult();
						    // success
						  } catch(reason) {
						    // failure
						  }
						  ```
  
						  Errback Example
  
						  ```js
						  findResult(function(result, err){
						    if (err) {
						      // failure
						    } else {
						      // success
						    }
						  });
						  ```
  
						  Promise Example;
  
						  ```javascript
						  findResult().then(function(result){
						    // success
						  }, function(reason){
						    // failure
						  });
						  ```
  
						  Advanced Example
						  --------------
  
						  Synchronous Example
  
						  ```javascript
						  let author, books;
  
						  try {
						    author = findAuthor();
						    books  = findBooksByAuthor(author);
						    // success
						  } catch(reason) {
						    // failure
						  }
						  ```
  
						  Errback Example
  
						  ```js
  
						  function foundBooks(books) {
  
						  }
  
						  function failure(reason) {
  
						  }
  
						  findAuthor(function(author, err){
						    if (err) {
						      failure(err);
						      // failure
						    } else {
						      try {
						        findBoooksByAuthor(author, function(books, err) {
						          if (err) {
						            failure(err);
						          } else {
						            try {
						              foundBooks(books);
						            } catch(reason) {
						              failure(reason);
						            }
						          }
						        });
						      } catch(error) {
						        failure(err);
						      }
						      // success
						    }
						  });
						  ```
  
						  Promise Example;
  
						  ```javascript
						  findAuthor().
						    then(findBooksByAuthor).
						    then(function(books){
						      // found books
						  }).catch(function(reason){
						    // something went wrong
						  });
						  ```
  
						  @method then
						  @param {Function} onFulfilled
						  @param {Function} onRejected
						  Useful for tooling.
						  @return {Promise}
						*/
						then: then,

						/**
						  `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
						  as the catch block of a try/catch statement.
  
						  ```js
						  function findAuthor(){
						    throw new Error('couldn't find that author');
						  }
  
						  // synchronous
						  try {
						    findAuthor();
						  } catch(reason) {
						    // something went wrong
						  }
  
						  // async with promises
						  findAuthor().catch(function(reason){
						    // something went wrong
						  });
						  ```
  
						  @method catch
						  @param {Function} onRejection
						  Useful for tooling.
						  @return {Promise}
						*/
						'catch': function _catch(onRejection) {
							return this.then(null, onRejection);
						}
					};

					/*global self*/
					function polyfill$1() {
						var local = undefined;

						if(typeof global !== 'undefined') {
							local = global;
						} else if(typeof self !== 'undefined') {
							local = self;
						} else {
							try {
								local = Function('return this')();
							} catch(e) {
								throw new Error('polyfill failed because global object is unavailable in this environment');
							}
						}

						var P = local.Promise;

						if(P) {
							var promiseToString = null;
							try {
								promiseToString = Object.prototype.toString.call(P.resolve());
							} catch(e) {
								// silently ignored
							}

							if(promiseToString === '[object Promise]' && !P.cast) {
								return;
							}
						}

						local.Promise = Promise$2;
					}

					// Strange compat..
					Promise$2.polyfill = polyfill$1;
					Promise$2.Promise = Promise$2;

					return Promise$2;

				})));

				//# sourceMappingURL=es6-promise.map

				/* WEBPACK VAR INJECTION */
			}.call(exports, __webpack_require__("W2nU"), __webpack_require__("DuR2")))

			/***/
		})

	/******/
});