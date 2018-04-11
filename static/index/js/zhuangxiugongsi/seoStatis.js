define = window.define ? window.define : function( name , callback ){
	callback = callback || name;
	callback( function(){} , window , window );
};

function singleSetCookie(name, value, expire, pre){
    if (!expire){
        expire = 5000;
    };
    if (pre){
        name = 'to8to_' + name;
    };
    var expiry = new Date();
    expiry.setTime(expiry.getTime() + expire);
    document.cookie = name + '=' + value + ';expires=' + expiry.toGMTString() + ';path=/;domain=.to8to.com';
};

define( function( require , exports , module ){
	var jq = window.jQuery || require( 'jquery' );
	var urlCity=window.location.host.split('.')[0];
	var hasValue=urlCity.indexOf("bbs");
	if((urlCity!='www')&&(urlCity!='xiaoguotu')&&(hasValue==-1)){
		var scriptNode=document.createElement("script");
		scriptNode.src="http://www.to8to.com/zb/getCity.php?action=reset_cookie&url_city="+urlCity;
		scriptNode.type="text/javascript";
		document.getElementsByTagName('head')[0].appendChild(scriptNode);
	}

	/*document.getElementsByTagName('head')[0].appendChild('<script src="http://www.to8to.com/zb/getCity.php?action=reset_cookie&url_city='+urlCity+'" type="text/javascript"></script>');
	/**
	 * By Emma Shao @ 2013-06-01
	 * 设置 SEO 统计的着陆页cookie 和 来源cookie
	 */
	function setCookie(c_name, value, exdays) {
		var exdate = new Date();
		exdate.setDate(exdate.getDate() + exdays);
		var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
		document.cookie = c_name + "=" + c_value + ';path=/;domain=.to8to.com';
	}
	function getCookie(c_name) {
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
	/*
	 * 判断 sourcepage 与 landpage cookie 是否存在，不存在则设置cookie
	 */
	function checkCookie() {
		var value = getCookie('to8to_sourcepage');
        if (typeof value == 'string' && value.length > 0) {
		} else {
			setCookie('to8to_sourcepage', encodeURI(document.referrer), 90);		
		}
		var sourcepage = getCookie('to8to_sourcepage') || "";
		var value = getCookie('to8to_landpage') || "";
		if (value.length) {
			if(sourcepage != null && sourcepage.indexOf('baidu.com')!=-1 || sourcepage.indexOf('google.com')!=-1 || sourcepage.indexOf('sogou.com')!=-1 || sourcepage.indexOf('soso.com')!=-1 || sourcepage.indexOf('so.com')!=-1)
			{
				var cur_url = decodeURI(location.href);
				var strval = decodeURI(document.referrer);
				if(strval.indexOf('baidu.com')!=-1 || strval.indexOf('google.com')!=-1 || strval.indexOf('sogou.com')!=-1 || strval.indexOf('soso.com')!=-1 || strval.indexOf('so.com')!=-1)
				{
					setCookie('to8to_landpage', encodeURI(location.href), 90);
					setCookie('to8to_sourcepage', encodeURI(document.referrer),90);
				}
			}
		} else {
			setCookie('to8to_landpage', encodeURI(location.href), 90);
		}
		var tvalue = getCookie('to8to_landtime');
		if (typeof tvalue == 'string' && tvalue.length > 0) {
		} else {
			setCookie('to8to_landtime', Date.parse(new Date())/1000, 90);
		}
	}

	/*
	 * 根据当前的地址，判断是否来自推广，如果来自推广，则搜集相关内容，然后发送ajax请求
	 */
	function seoKeywords()
	{
		var word={};
		var cur_url = decodeURI(location.href);
		var engine_pos = cur_url.indexOf('utm_from=');
		var keyword_pos = cur_url.indexOf('utm_keyword=');
		var keywords = '';
		var cur_ref = decodeURI(document.referrer);
		if( engine_pos != -1 && keyword_pos != -1 )
		{
			sstart = cur_url.indexOf('=', engine_pos)+1;
			send = cur_url.indexOf('&', engine_pos);
			search_engine = cur_url.substring(sstart, send);
			word['engine'] = search_engine;
			switch(search_engine)
			{
				case 'baidu': //根据referrer获取搜索关键词 
					wd_pos = cur_ref.indexOf('wd=');
					sstart = cur_ref.indexOf('=', wd_pos) + 1;
					send = cur_ref.indexOf('&', wd_pos);
					keywords = cur_ref.substring(sstart, send);
					word['keywords'] = keywords;
					break;
				case 'google':
					break;
				case '360':
					break;
				case 'sogou':
					wd_pos = cur_ref.indexOf('wd=');
					sstart = cur_ref.indexOf('=', wd_pos) + 1;
					send = cur_ref.indexOf('&', wd_pos);
					keywords = cur_ref.substring(sstart, send);
					word['keywords'] = keywords;
					break;
			}
			
			sstart = cur_url.indexOf('=', keyword_pos) + 1;
			send = cur_url.indexOf('&', keyword_pos);
			word['keywordid'] = cur_url.substring(sstart, send);	
			
		}
		return word;
	}

	/*
     * 保存关键词
     */
    function keyWords(){
        var kwdlist = decodeURIComponent(document.referrer).match('&wd=(.+?)(?:&[^&]*=.*)?$'); // 获取百度的关键词
        if(kwdlist instanceof Object && kwdlist.length > 1){
            // 存在关键词
            if(typeof getCookie('to8to_keywordlist') !== "string" || getCookie('to8to_keywordlist').length == 0){
                // 新建cookie
                singleSetCookie('to8to_keywordlist', ',,,,,,,,,' + kwdlist[1], 90 * 24 * 60 * 60 *1000);
            }else{
            	if(!/[^,]*,.*,.*,.*,.*,.*,.*,.*,.*,(.*)?/.test(getCookie('to8to_keywordlist'))){
            		singleSetCookie('to8to_keywordlist', ',,,,,,,,,' + (kwdlist[1]), 90 * 24 * 60 * 60 *1000);
            	}else{
	                // 从后推入新关键词,覆盖之前的
	                if(getCookie('to8to_keywordlist').indexOf(kwdlist[1]) < 0){
	                   singleSetCookie('to8to_keywordlist', getCookie('to8to_keywordlist').replace(/([^,]*)(,?)(.*)(,?)(.*)(,?)(.*)(,?)(.*)(,?)(.*)(,?)(.*)(,?)(.*)(,?)(.*)(,?)(.*)?/, '$3$2$5$4$7$6$9$8$11$10$13$12$15$14$17$16$19$18' + kwdlist[1]), 90 * 24 * 60 * 60 *1000);
	                }
            	}
            }
        }
    }

	checkCookie();
	keyWords();
	var keywords = seoKeywords();
	// if(keywords.keywordid && keywords.keywordid.length > 0)
	// {
	// 	jq.get('http://www.to8to.com/api/seo_keywords_process.php', keywords);
	// }
	var encodeUrl = encodeURIComponent(document.location);
	if(encodeUrl.search('reg')==-1 && encodeUrl.search('logout')==-1 && encodeUrl.search('login')==-1){
		setCookie('to8to_nowpage',encodeUrl,3600*1000,1);
	}
	jq(function(){
		var to8to_auth = getCookie('to8to_auth');
		var to8to_uid  = getCookie('to8to_uid');
		var to8to_haslogin = getCookie('to8to_haslogin');
		if(to8to_uid&&to8to_auth&& to8to_uid!=to8to_haslogin){
			jq.post('http://www.to8to.com/api/insert_user_login.php',{to8to_auth:to8to_auth,to8to_uid:to8to_uid},function(data){
				setCookie('to8to_haslogin',to8to_uid);
			},'json');
		}
	});

});
