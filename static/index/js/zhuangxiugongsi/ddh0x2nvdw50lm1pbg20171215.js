! function(t, e) {
	"object" == typeof exports ? module.exports = e() : "function" == typeof define && define.cmd ? define(e) : t.T8TCount = e()
}(this, function() {
	function mobileTouch(t) {
		var e, n = !1,
			r = 0;
		document.documentElement.addEventListener("touchstart", function(t) {
			r = Date.now(), n = !1, e = t
		}), document.documentElement.addEventListener("touchmove", function(t) {
			n = !0
		}), document.documentElement.addEventListener("touchend", function() {
			!n && Date.now() - r < 300 && "function" == typeof t && t(e)
		})
	}

	function getDeviceParams() {
		"ios" != browser.versions.mobile && "android" == browser.versions.mobile
	}

	function strip_empty_properties(t) {
		var e = {};
		for(var n in t) null != t[n] && (e[n] = t[n]);
		return e
	}

	function inArray(t, e, n) {
		var r, o = t.length || 0,
			n = n || !1,
			i = !1;
		if(o <= 0) return !1;
		for(var a = 0; a < o && (r = t[a], i = n ? r === e : r == e, i !== !0); a++);
		return i
	}

	function trim(t) {
		return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
	}

	function createxmlHttpRequest() {
		window.ActiveXObject ? xmlHttp = new ActiveXObject("Microsoft.XMLHTTP") : window.XMLHttpRequest && (xmlHttp = new XMLHttpRequest)
	}

	function postData(t) {
		createxmlHttpRequest(), xmlHttp.open("POST", url), xmlHttp.setRequestHeader("Content-Type", "application/json"), xmlHttp.send(JSON.stringify(t)), xmlHttp.onreadystatechange = function() {
			4 == xmlHttp.readyState && 200 == xmlHttp.status
		}
	}

	function getJSONPData(t, e) {
		var n = url + "?",
			r = document.createElement("img");
		r.onload = function() {
			this.onload = null, "function" == typeof e && e()
		}, r.onerror = function(t) {
			this.onerror = null, "function" == typeof e && e()
		}, r.onabort = function(t) {
			this.onabort = null, "function" == typeof e && e()
		}, r.src = n + parseData(t)
	}

	function parseData(t) {
		var e = "";
		return isString(t) ? e = t : isObject(t) && (t.callback = "callback", e = encodeURIComponent(JSON.stringify(t).replace(reg, '"'))), e = Base64.encode(e)
	}

	function loadScript(t, e) {
		var n = document.createElement("script");
		n.type = "text/javascript", n.src = t, n.readyState ? n.onreadystatechange = function() {
			var t = this.readyState;
			"loaded" !== t && "complete" !== t || (n.onreadystatechange = null, e())
		} : n.onload = e, document.getElementsByTagName("head")[0].appendChild(n)
	}

	function hasClassName(t, e) {
		if(t.className)
			for(var n = t.className.split(" "), r = e.toUpperCase(), o = 0; o < n.length; o++)
				if(n[o].toUpperCase() == r) return !0;
		return !1
	}

	function getEleInfo(t) {
		var e = t.target || t.srcElement,
			n = e.tagName.toLowerCase();
		if("html" != n && "body" != n) {
			var r = {};
			if("a" == n) r = getEleAttr(e);
			else {
				var o = {};
				if(t.path)
					for(var i in t.path) "A" == t.path[i].tagName && (o = getEleAttr(t.path[i]) || {});
				else {
					var a = getParentsEle(t, "a");
					o = a ? getEleAttr(a) : {}
				}
				r = extend(getEleAttr(e), o)
			}
			return r = strip_empty_properties(r)
		}
	}

	function getParent(t) {
		var e = t.parentNode;
		return e && 11 !== e.nodeType ? e : null
	}

	function getParentsEle(t, e) {
		var n = getParent(t);
		return !!n && (n.tagName.toLowerCase == e ? n : void getParent(t, e))
	}

	function getEleAttr(t) {
		var e = t.attributes,
			n = (e.length, {});
		if(0 == e.length) return n;
		for(var r in e) e[r] && isObject(e[r]) && e[r].name && inArray(filterArr, e[r].name) && e[r].value && null != e[r].value && (n[e[r].name] = e[r].value);
		return n
	}

	function getMobilePostion(t, e) {
		bodyWidth = document.documentElement.clientWidth || document.body.clientWidth;
		var n = tMobileWidth / bodyWidth,
			r = Math.round(t * n),
			o = Math.round(e * n);
		return {
			xax: r,
			yax: o
		}
	}

	function createWidget(t) {
		var e = t.tagName.toLowerCase();
		if("html" == e || "body" == e) return {};
		var n = getEleXPath(t);
		return {
			wid: md5(n),
			wtt: n
		}
	}

	function getPageProperty() {
		bodyWidth = document.documentElement.clientWidth || document.body.clientWidth, midCoordinate = bodyWidth / 2
	}

	function getBodySite() {
		var t = {
			width: document.body.clientWidth,
			height: document.body.clientHeight,
			left: document.body.offsetLeft,
			top: document.body.offsetTop
		};
		return t
	}

	function getElePosition(t) {
		for(var e = t.offsetTop, n = t.offsetLeft, r = t.offsetParent; null != r;) e += r.offsetTop + r.clientTop, n += r.offsetLeft + r.clientLeft, r = r.offsetParent;
		return {
			top: e,
			left: n
		}
	}

	function getEleXPath(t) {
		var e = t.parentNode,
			n = e ? e.children : "",
			r = t.tagName,
			o = 0,
			i = 0;
		if("" !== t.id) return "#" + t.id;
		if(t === document.body) return "html>" + t.tagName.toLowerCase();
		for(i = 0; i < n.length; i++)
			if(n[i].tagName === r) {
				if(n[i] === t) return getEleXPath(t.parentNode) + ">" + t.tagName + "[" + o + "]";
				o += 1
			}
		return t.tagName + "[" + o + "]"
	}

	function getXpathDOM(t) {
		for(var e, n = t.split(">"), r = document, o = 0, i = 0; i < n.length; i++) {
			if(e = n[i].split("["), 0 === i && "html" !== e[0] && e[0].indexOf("#") <= -1) return;
			if(e.length > 1) {
				if(num = parseInt(e[1].replace("]", "")), !r) return;
				for(var a = 0; a < r.children.length; a++)
					if(r.children[a].tagName === e[0]) {
						if(o == num) {
							r = r.children[a], o = 0;
							break
						}
						o++
					}
			} else e[0].indexOf("#") > -1 ? r = document.getElementById(e[0].replace("#", "")) : "body" == e[0] && (r = document.getElementsByTagName("body")[0])
		}
		return r
	}

	function getEleProperty(t) {
		var e, n, r = getElePosition(t.target),
			o = t.target.offsetWidth,
			i = t.target.offsetHeight,
			a = Math.round(t.pageX - midCoordinate),
			s = t.pageY;
		return e = Math.round((t.pageX - r.left) / (o / 100)), n = Math.round((t.pageY - r.top) / (i / 100)), {
			cex: e,
			cey: n,
			cew: o,
			ceh: i,
			xax: a,
			yax: s
		}
	}

	function getEleSize(t) {
		function e(t) {
			var r = n(t).getPropertyValue("display"),
				o = t.nodeName.toLowerCase();
			"none" != r && "body" != o ? e(t.parentNode) : (s.push(t), "body" != o && e(t.parentNode))
		}

		function n(t) {
			var e = t.ownerDocument.defaultView;
			return e && e.opener || (e = window), e.getComputedStyle(t)
		}

		function r() {
			for(var t = 0; t < s.length; t++) {
				var e = s[t].style.visibility,
					n = s[t].style.display,
					r = s[t].getAttribute("style");
				s[t].setAttribute("style", "visibility:hidden;display:block !important;" + r), d[t] = {
					visibility: e,
					display: n
				}
			}
		}

		function o() {
			for(var t = 0; t < s.length; t++) s[t].style.visibility = d[t].visibility, s[t].style.display = d[t].display
		}
		var i, a, s = [],
			d = [];
		return e(t), r(), i = t.offsetWidth, a = t.offsetHeight, o(), {
			width: i,
			height: a
		}
	}

	function deviceDPI() {
		return parseInt(screen.width, 10) + "*" + parseInt(screen.height, 10)
	}

	function createGuid() {
		for(var t = "", e = 1; 32 >= e; e++) {
			var n = Math.floor(16 * Math.random()).toString(16),
				t = t + n;
			8 != e && 12 != e && 16 != e && 20 != e || (t += "")
		}
		return this.guid = t += Math.ceil(1e6 * Math.random())
	}

	function parseCookieString(t, e) {
		var n = {};
		if(isString(t) && t.length > 0)
			for(var r, o, i, a = e ? decodeURIComponent : same, s = t.split(/;\s/g), d = 0, c = s.length; d < c; d++) {
				if(i = s[d].match(/([^=]+)=/i), i instanceof Array) try {
					r = decodeURIComponent(i[1]), o = a(s[d].substring(i[1].length + 1))
				} catch(t) {} else r = decodeURIComponent(s[d]), o = "";
				r && (n[r] = o)
			}
		return n
	}

	function isNonEmptyString(t) {
		return isString(t) && "" !== t
	}

	function validateCookieName(t) {
		if(!isNonEmptyString(t)) throw new TypeError("Cookie name must be a non-empty string")
	}

	function same(t) {
		return t
	}

	function extend() {
		var t, e, n = arguments[0] || {},
			r = 1,
			o = arguments.length;
		if(isObject(n) || isFunction(n)) {
			for(r; r < o; r++)
				if(null != (t = arguments[r]))
					for(e in t) n[e] = t[e];
			return n
		}
	}

	function isDefined(t) {
		var e = typeof t;
		return "undefined" !== e
	}

	function isFunction(t) {
		return "function" == typeof t
	}

	function isObject(t) {
		return "object" == typeof t
	}

	function isString(t) {
		return "string" == typeof t || t instanceof String
	}

	function addEventListener(t, e, n, r) {
		return t.addEventListener ? (t.addEventListener(e, n, r), !0) : t.attachEvent ? t.attachEvent("on" + e, n) : void(t["on" + e] = n)
	}

	function isArray(t) {
		return "[object Array]" == Object.prototype.toString.call(Object(t))
	}

	function isEmpty(t) {
		return void 0 == t || "-" == t || "" == t
	}

	function Pick(t, e, n) {
		var r, o = "-";
		if(!IsEmpty(t) && !IsEmpty(e) && !IsEmpty(n) && (r = t[_str_indexOf](e), r > -1)) {
			var i = t[_str_indexOf](n, r);
			i < 0 && (i = t[_length]), o = t[_substring](r + e[_str_indexOf](_equal_) + 1, i)
		}
		return o
	}

	function checkHash(t) {
		var e, n, r = _false,
			o = 0;
		if(!IsEmpty(t))
			for(r = _true, e = 0; e < t[_length]; e++) n = t[_charAt](e), o += "." == n ? 1 : 0, r = r && o <= 1 && (0 == e && "-" == n || ".0123456789" [_str_indexOf](n) > -1);
		return r
	}

	function getReferrer() {
		var t = "";
		try {
			t = window.top.document.referrer
		} catch(e) {
			if(window.parent) try {
				t = window.parent.document.referrer
			} catch(e) {
				t = ""
			}
		}
		return "" === t && (t = document.referrer), t
	}

	function addUrlParameter(t, e, n) {
		t = String(t), n || (n = "");
		var r = t.indexOf("#"),
			o = t.length;
		r === -1 && (r = o);
		var i = t.substr(0, r),
			a = t.substr(r, o - r);
		return i.indexOf("?") === -1 ? i += "?" : stringEndsWith(i, "?") || (i += "&"), i + encodeURIComponent(e) + "=" + encodeURIComponent(n) + a
	}

	function stringEndsWith(t, e) {
		return t = String(t), t.indexOf(e, t.length - e.length) !== -1
	}

	function getHostName(t) {
		var e = new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"),
			n = e.exec(t);
		return n ? n[1] : t
	}

	function getDomain(t) {
		var t = t || location.href;
		t = getHostName(t);
		var e = t.split(".");
		return e.length >= 3 && e.splice(0, 1), e.join(".")
	}

	function getCurTimestamp() {
		return(new Date).getTime()
	}

	function randomWord() {
		for(var t = "0123456789abcdefghijklmnopqrstuvwxyz", e = t.length, n = 8, r = "", o = 0; o < n; o++) r += t.substr(Math.floor(Math.random() * e), 1);
		return r
	}

	function safeAdd(t, e) {
		var n = (65535 & t) + (65535 & e),
			r = (t >> 16) + (e >> 16) + (n >> 16);
		return r << 16 | 65535 & n
	}

	function bitRotateLeft(t, e) {
		return t << e | t >>> 32 - e
	}

	function md5cmn(t, e, n, r, o, i) {
		return safeAdd(bitRotateLeft(safeAdd(safeAdd(e, t), safeAdd(r, i)), o), n)
	}

	function md5ff(t, e, n, r, o, i, a) {
		return md5cmn(e & n | ~e & r, t, e, o, i, a)
	}

	function md5gg(t, e, n, r, o, i, a) {
		return md5cmn(e & r | n & ~r, t, e, o, i, a)
	}

	function md5hh(t, e, n, r, o, i, a) {
		return md5cmn(e ^ n ^ r, t, e, o, i, a)
	}

	function md5ii(t, e, n, r, o, i, a) {
		return md5cmn(n ^ (e | ~r), t, e, o, i, a)
	}

	function binlMD5(t, e) {
		t[e >> 5] |= 128 << e % 32, t[(e + 64 >>> 9 << 4) + 14] = e;
		var n, r, o, i, a, s = 1732584193,
			d = -271733879,
			c = -1732584194,
			u = 271733878;
		for(n = 0; n < t.length; n += 16) r = s, o = d, i = c, a = u, s = md5ff(s, d, c, u, t[n], 7, -680876936), u = md5ff(u, s, d, c, t[n + 1], 12, -389564586), c = md5ff(c, u, s, d, t[n + 2], 17, 606105819), d = md5ff(d, c, u, s, t[n + 3], 22, -1044525330), s = md5ff(s, d, c, u, t[n + 4], 7, -176418897), u = md5ff(u, s, d, c, t[n + 5], 12, 1200080426), c = md5ff(c, u, s, d, t[n + 6], 17, -1473231341), d = md5ff(d, c, u, s, t[n + 7], 22, -45705983), s = md5ff(s, d, c, u, t[n + 8], 7, 1770035416), u = md5ff(u, s, d, c, t[n + 9], 12, -1958414417), c = md5ff(c, u, s, d, t[n + 10], 17, -42063), d = md5ff(d, c, u, s, t[n + 11], 22, -1990404162), s = md5ff(s, d, c, u, t[n + 12], 7, 1804603682), u = md5ff(u, s, d, c, t[n + 13], 12, -40341101), c = md5ff(c, u, s, d, t[n + 14], 17, -1502002290), d = md5ff(d, c, u, s, t[n + 15], 22, 1236535329), s = md5gg(s, d, c, u, t[n + 1], 5, -165796510), u = md5gg(u, s, d, c, t[n + 6], 9, -1069501632), c = md5gg(c, u, s, d, t[n + 11], 14, 643717713), d = md5gg(d, c, u, s, t[n], 20, -373897302), s = md5gg(s, d, c, u, t[n + 5], 5, -701558691), u = md5gg(u, s, d, c, t[n + 10], 9, 38016083), c = md5gg(c, u, s, d, t[n + 15], 14, -660478335), d = md5gg(d, c, u, s, t[n + 4], 20, -405537848), s = md5gg(s, d, c, u, t[n + 9], 5, 568446438), u = md5gg(u, s, d, c, t[n + 14], 9, -1019803690), c = md5gg(c, u, s, d, t[n + 3], 14, -187363961), d = md5gg(d, c, u, s, t[n + 8], 20, 1163531501), s = md5gg(s, d, c, u, t[n + 13], 5, -1444681467), u = md5gg(u, s, d, c, t[n + 2], 9, -51403784), c = md5gg(c, u, s, d, t[n + 7], 14, 1735328473), d = md5gg(d, c, u, s, t[n + 12], 20, -1926607734), s = md5hh(s, d, c, u, t[n + 5], 4, -378558), u = md5hh(u, s, d, c, t[n + 8], 11, -2022574463), c = md5hh(c, u, s, d, t[n + 11], 16, 1839030562), d = md5hh(d, c, u, s, t[n + 14], 23, -35309556), s = md5hh(s, d, c, u, t[n + 1], 4, -1530992060), u = md5hh(u, s, d, c, t[n + 4], 11, 1272893353), c = md5hh(c, u, s, d, t[n + 7], 16, -155497632), d = md5hh(d, c, u, s, t[n + 10], 23, -1094730640), s = md5hh(s, d, c, u, t[n + 13], 4, 681279174), u = md5hh(u, s, d, c, t[n], 11, -358537222), c = md5hh(c, u, s, d, t[n + 3], 16, -722521979), d = md5hh(d, c, u, s, t[n + 6], 23, 76029189), s = md5hh(s, d, c, u, t[n + 9], 4, -640364487), u = md5hh(u, s, d, c, t[n + 12], 11, -421815835), c = md5hh(c, u, s, d, t[n + 15], 16, 530742520), d = md5hh(d, c, u, s, t[n + 2], 23, -995338651), s = md5ii(s, d, c, u, t[n], 6, -198630844), u = md5ii(u, s, d, c, t[n + 7], 10, 1126891415), c = md5ii(c, u, s, d, t[n + 14], 15, -1416354905), d = md5ii(d, c, u, s, t[n + 5], 21, -57434055), s = md5ii(s, d, c, u, t[n + 12], 6, 1700485571), u = md5ii(u, s, d, c, t[n + 3], 10, -1894986606), c = md5ii(c, u, s, d, t[n + 10], 15, -1051523), d = md5ii(d, c, u, s, t[n + 1], 21, -2054922799), s = md5ii(s, d, c, u, t[n + 8], 6, 1873313359), u = md5ii(u, s, d, c, t[n + 15], 10, -30611744), c = md5ii(c, u, s, d, t[n + 6], 15, -1560198380), d = md5ii(d, c, u, s, t[n + 13], 21, 1309151649), s = md5ii(s, d, c, u, t[n + 4], 6, -145523070), u = md5ii(u, s, d, c, t[n + 11], 10, -1120210379), c = md5ii(c, u, s, d, t[n + 2], 15, 718787259), d = md5ii(d, c, u, s, t[n + 9], 21, -343485551), s = safeAdd(s, r), d = safeAdd(d, o), c = safeAdd(c, i), u = safeAdd(u, a);
		return [s, d, c, u]
	}

	function binl2rstr(t) {
		var e, n = "",
			r = 32 * t.length;
		for(e = 0; e < r; e += 8) n += String.fromCharCode(t[e >> 5] >>> e % 32 & 255);
		return n
	}

	function rstr2binl(t) {
		var e, n = [];
		for(n[(t.length >> 2) - 1] = void 0, e = 0; e < n.length; e += 1) n[e] = 0;
		var r = 8 * t.length;
		for(e = 0; e < r; e += 8) n[e >> 5] |= (255 & t.charCodeAt(e / 8)) << e % 32;
		return n
	}

	function rstrMD5(t) {
		return binl2rstr(binlMD5(rstr2binl(t), 8 * t.length))
	}

	function rstrHMACMD5(t, e) {
		var n, r, o = rstr2binl(t),
			i = [],
			a = [];
		for(i[15] = a[15] = void 0, o.length > 16 && (o = binlMD5(o, 8 * t.length)), n = 0; n < 16; n += 1) i[n] = 909522486 ^ o[n], a[n] = 1549556828 ^ o[n];
		return r = binlMD5(i.concat(rstr2binl(e)), 512 + 8 * e.length), binl2rstr(binlMD5(a.concat(r), 640))
	}

	function rstr2hex(t) {
		var e, n, r = "0123456789abcdef",
			o = "";
		for(n = 0; n < t.length; n += 1) e = t.charCodeAt(n), o += r.charAt(e >>> 4 & 15) + r.charAt(15 & e);
		return o
	}

	function str2rstrUTF8(t) {
		return unescape(encodeURIComponent(t))
	}

	function rawMD5(t) {
		return rstrMD5(str2rstrUTF8(t))
	}

	function hexMD5(t) {
		return rstr2hex(rawMD5(t))
	}

	function rawHMACMD5(t, e) {
		return rstrHMACMD5(str2rstrUTF8(t), str2rstrUTF8(e))
	}

	function hexHMACMD5(t, e) {
		return rstr2hex(rawHMACMD5(t, e))
	}

	function md5(t, e, n) {
		return e ? n ? rawHMACMD5(e, t) : hexHMACMD5(e, t) : n ? rawMD5(t) : hexMD5(t)
	}

	function htmlDom(t) {
		var e = document.getElementsByTagName("html")[0];
		if(t) {
			var n = t.split(">");
			jq.each(n, function(t, r) {
				return 0 == t && "html" == n[0] || (ac = r.split("["), void(e = ac.length > 1 ? e.children(ac[0]).eq(parseInt(ac[1].replace("]", ""))) : ac[0].indexOf("#") > -1 ? e.find(ac[0]) : e.children(ac[0])))
			})
		}
		return e
	}
	var SDK_verson = "1.1",
		cookie_id = "",
		session_id = "",
		xmlHttp, url = "https://usertracking.to8to.com/reportDataByGet",
		filterArr = ["href", "src", "alt", "title", "class", "id", "value", "name", "ptag", "data-ptag", "data-oid", "data-sid", "did", "cid", "uid"],
		bodyWidth = document.documentElement.offsetWidth || document.body.offsetWidth,
		midCoordinate = bodyWidth / 2,
		reg = /\"/g,
		tMobileWidth = 360,
		commonParams = {},
		userParams = {},
		otherParams = {};
	document.getElementsByClassName || (document.getElementsByClassName = function(t) {
		for(var e, n = document.getElementsByTagName("*"), r = [], o = 0; e = n[o]; o++) hasClassName(e, t) && r.push(e);
		return r
	}), window.JSON || (window.JSON = {
		parse: function(jsonStr) {
			return eval("(" + jsonStr + ")")
		},
		stringify: function(t) {
			var e, n = "";
			if(null === t) return String(t);
			switch(typeof t) {
				case "number":
				case "boolean":
					return String(t);
				case "string":
					return '"' + t + '"';
				case "undefined":
				case "function":
					return
			}
			switch(Object.prototype.toString.call(t)) {
				case "[object Array]":
					n += "[";
					for(var r = 0, o = t.length; r < o; r++) e = JSON.stringify(t[r]), n += (void 0 === e ? null : e) + ",";
					return "[" !== n && (n = n.slice(0, -1)), n += "]";
				case "[object Date]":
					return '"' + (t.toJSON ? t.toJSON() : t.toString()) + '"';
				case "[object RegExp]":
					return "{}";
				case "[object Object]":
					n += "{";
					for(r in t) t.hasOwnProperty(r) && (e = JSON.stringify(t[r]), void 0 !== e && (n += '"' + r + '":' + e + ","));
					return "{" !== n && (n = n.slice(0, -1)), n += "}";
				case "[object String]":
					return '"' + t.toString() + '"';
				case "[object Number]":
				case "[object Boolean]":
					return t.toString()
			}
		}
	});
	var cookie = {
			get: function(t, e) {
				validateCookieName(t), e = "function" == typeof e ? {
					converter: e
				} : e || {};
				var n = parseCookieString(document.cookie, !e.raw);
				return(e.converter || same)(n[t])
			},
			set: function(t, e, n) {
				validateCookieName(t), n = n || {};
				var r = n.expires || 5e3,
					o = n.domain,
					i = n.path;
				n.raw || (e = encodeURIComponent(String(e)));
				var a = t + "=" + e,
					s = r;
				return "number" == typeof s && (s = new Date, s.setTime(s.getTime() + r)), s instanceof Date && (a += "; expires=" + s.toGMTString()), isNonEmptyString(o) && (a += "; domain=" + o), isNonEmptyString(i) && (a += "; path=" + i), n.secure && (a += "; secure"), document.cookie = a, a
			},
			remove: function(t, e) {
				return e = e || {}, e.expires = new Date(0), this.set(t, "", e)
			}
		},
		Base64 = {
			_keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
			encode: function(t) {
				var e, n, r, o, i, a, s, d = "",
					c = 0;
				for(t = Base64._utf8_encode(t); c < t.length;) e = t.charCodeAt(c++), n = t.charCodeAt(c++), r = t.charCodeAt(c++), o = e >> 2, i = (3 & e) << 4 | n >> 4, a = (15 & n) << 2 | r >> 6, s = 63 & r, isNaN(n) ? a = s = 64 : isNaN(r) && (s = 64), d = d + this._keyStr.charAt(o) + this._keyStr.charAt(i) + this._keyStr.charAt(a) + this._keyStr.charAt(s);
				return d
			},
			decode: function(t) {
				var e, n, r, o, i, a, s, d = "",
					c = 0;
				for(t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""); c < t.length;) o = this._keyStr.indexOf(t.charAt(c++)), i = this._keyStr.indexOf(t.charAt(c++)), a = this._keyStr.indexOf(t.charAt(c++)), s = this._keyStr.indexOf(t.charAt(c++)), e = o << 2 | i >> 4, n = (15 & i) << 4 | a >> 2, r = (3 & a) << 6 | s, d += String.fromCharCode(e), 64 != a && (d += String.fromCharCode(n)), 64 != s && (d += String.fromCharCode(r));
				return d = Base64._utf8_decode(d)
			},
			_utf8_encode: function(t) {
				t = t.replace(/\r\n/g, "\n");
				for(var e = "", n = 0; n < t.length; n++) {
					var r = t.charCodeAt(n);
					r < 128 ? e += String.fromCharCode(r) : r > 127 && r < 2048 ? (e += String.fromCharCode(r >> 6 | 192), e += String.fromCharCode(63 & r | 128)) : (e += String.fromCharCode(r >> 12 | 224), e += String.fromCharCode(r >> 6 & 63 | 128), e += String.fromCharCode(63 & r | 128))
				}
				return e
			},
			_utf8_decode: function(t) {
				for(var e = "", n = 0, r = c1 = c2 = 0; n < t.length;) r = t.charCodeAt(n), r < 128 ? (e += String.fromCharCode(r), n++) : r > 191 && r < 224 ? (c2 = t.charCodeAt(n + 1), e += String.fromCharCode((31 & r) << 6 | 63 & c2), n += 2) : (c2 = t.charCodeAt(n + 1), c3 = t.charCodeAt(n + 2), e += String.fromCharCode((15 & r) << 12 | (63 & c2) << 6 | 63 & c3), n += 3);
				return e
			}
		},
		browser = {
			versions: function() {
				var t = navigator.userAgent;
				navigator.appVersion;
				return {
					trident: t.indexOf("Trident") > -1,
					presto: t.indexOf("Presto") > -1,
					webKit: t.indexOf("AppleWebKit") > -1,
					gecko: t.indexOf("Gecko") > -1 && t.indexOf("KHTML") == -1,
					mobile: !!t.match(/AppleWebKit.*Mobile.*/),
					ios: !!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
					android: t.indexOf("Android") > -1 || t.indexOf("Linux") > -1,
					iPhone: t.indexOf("iPhone") > -1,
					iPad: t.indexOf("iPad") > -1,
					webApp: t.indexOf("Safari") == -1
				}
			}(),
			language: (navigator.browserLanguage || navigator.language).toLowerCase()
		},
		T8TCount = function(t) {
			return this.option = {
				app: "pc_to8to",
				domain: ""
			}, this.init(t)
		};
	return T8TCount.prototype = {
		init: function(t) {
			1 == isObject(t) && (this.option = extend(this.option, t)), this.initT8tCookieId(this.option.domain), this.setSessionId(), this.getPvParams(), this.events()
		},
		events: function() {
			var t = this;
			if(browser.versions.mobile) mobileTouch(function(e) {
				t.getEventParams(e)
			});
			else {
				var n = window._onresize;
				window.onresize = function() {
					"function" == typeof n && n.call(this, e), getPageProperty()
				}, addEventListener(document.documentElement, "click", function(e) {
					var n = e || window.event;
					t.getEventParams(n)
				})
			}
			addEventListener(window, "message", function(t) {
				var e, n, r, o, i = JSON.parse(t.data),
					a = 0;
				if("object" == typeof i && "object" == typeof i[0].result && i[0].result.point) {
					e = i[0].result.point, a = e.length;
					for(var s = 0; s < a; s++) n = getXpathDOM(e[s].path), n && (r = getElePosition(n), o = getEleSize(n), e[s].w = o.width, e[s].h = o.height, e[s].l = r.left, e[s].t = r.top);
					i[0].result.height = document.documentElement.scrollHeight || document.body.scrollHeight, window.parent.window.postMessage(JSON.stringify(i), "http://data.to8to.com")
				}
			})
		},
		getCommonParams: function() {
			commonParams = {
				sv: SDK_verson,
				app: this.option.app,
				rs: deviceDPI(),
				cok: cookie_id,
				lan: navigator.language || navigator.systemLanguage
			}
		},
		getUserParams: function() {
			var t = browser.versions.mobile ? "to8to_wap_tname" : "to8to_tname";
			userParams = {
				sid: session_id,
				mid: this.getMsgId(),
				url: location.href
			};
			var e = getReferrer();
			e && (userParams.ref = e), cookie.get(t) && (userParams.ust = cookie.get(t)), cookie.get("to8to_uid") && (userParams.uid = cookie.get("to8to_uid"))
		},
		getPvParams: function() {
			this.getCommonParams(), this.getUserParams(), userParams.evt = "pv", userParams.ct = getCurTimestamp(), this.sendData(userParams)
		},
		getEventParams: function(t) {
			var e = t.target || t.srcElement,
				n = e.tagName.toLowerCase();
			return "html" != n && "body" != n && (this.getUserParams(), userParams.pca = {}, browser.versions.mobile ? userParams.pca = getMobilePostion(t.touches[0].pageX, t.touches[0].pageY) : userParams.pca = getEleProperty(t), userParams.ct = getCurTimestamp(), userParams.rsc = getEleInfo(t), userParams.evt = "touchstart" == t.type ? "click" : t.type, userParams = extend(userParams, createWidget(e)), userParams = strip_empty_properties(userParams), void this.sendData(userParams))
		},
		sendData: function(t) {
			commonParams.st = getCurTimestamp(), commonParams.ev = [], commonParams.ev.push(t), getJSONPData(commonParams)
		},
		initT8tCookieId: function(t) {
			var t = t || getDomain();
			if(cookie.get("to8tocookieid")) cookie_id = cookie.get("to8tocookieid");
			else {
				var e = createGuid();
				cookie.set("to8tocookieid", e, {
					path: "/",
					domain: t,
					expires: 2592e6
				}), cookie_id = e
			}
		},
		setSessionId: function(t) {
			var t = t || getDomain();
			return cookie.get("to8tosessionid") ? session_id = cookie.get("to8tosessionid") : (session_id = "s_" + md5(getCurTimestamp() + randomWord() + cookie_id), cookie.set("to8tosessionid", session_id, {
				path: "/",
				domain: t,
				expires: 18e5
			})), session_id
		},
		getMsgId: function() {
			var t = session_id || setSessionId(),
				e = "m_" + md5(getCurTimestamp() + randomWord() + t);
			return e
		}
	}, T8TCount
});