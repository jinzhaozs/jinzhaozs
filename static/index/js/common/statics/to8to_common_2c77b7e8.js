! function(t) {
	function e(n) {
		if(i[n]) return i[n].exports;
		var o = i[n] = {
			"i": n,
			"l": !1,
			"exports": {}
		};
		return t[n].call(o.exports, o, o.exports, e), o.l = !0, o.exports
	}
	var i = {};
	e.m = t, e.c = i, e.i = function(t) {
		return t
	}, e.d = function(t, i, n) {
		e.o(t, i) || Object.defineProperty(t, i, {
			"configurable": !1,
			"enumerable": !0,
			"get": n
		})
	}, e.n = function(t) {
		var i = t && t.__esModule ? function() {
			return t["default"]
		} : function() {
			return t
		};
		return e.d(i, "a", i), i
	}, e.o = function(t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	}, e.p = "http://assets.to8to.com/to8to_pc/", e(e.s = "1bjH")
}({
	"0": function(t, e) {
		t.exports = jQuery
	},
	"1bjH": function(t, e, i) {
		! function(e, n) {
			t.exports = n(i(0))
		}(0, function(t) {
			return window.T8tCommon = {}, t("body").on("mouseover", ".breadcrumb-pre-list", function() {
				t(".breadcrumb-list").hide(), t(this).find(".breadcrumb-list").show()
			}).on("mouseout", ".breadcrumb-pre-list", function() {
				t(".breadcrumb-list").hide()
			}), T8tCommon.isGroundCity = function(e, i) {
				function n(t) {
					for(var i = o.length, n = 0; n < i; n++)
						if(e == o[n]) return void t(!0);
					t(!1)
				}
				var o = [],
					r = sessionStorage.getItem("groundCity");
				r && r.length > 0 ? (o = r.split(","), n(i)) : t.ajax({
					"type": "GET",
					"dataType": "jsonp",
					"url": "http://www.to8to.com/api/getindexdata.php?type=ldcity",
					"success": function(t) {
						sessionStorage.setItem("groundCity", t), o = t, n(i)
					}
				})
			}, T8tCommon.autoImgPosition = function() {
				t(".img-position img.img").each(function(e, i) {
					var n = t(this),
						o = n.closest(".img-position"),
						r = o.height(),
						s = o.width() / r,
						a = n.closest(".img-position-box"),
						u = new Image;
					u.onload = function() {
						if(selfwDivideh = this.width / this.height, selfwDivideh > s) {
							a.addClass("fix-height");
							var t = selfwDivideh * r;
							a.width(t)
						} else a.addClass("fix-width")
					}, u.src = n.attr("src")
				})
			}, T8tCommon.dataSave = function() {
				var t = window.localStorage;
				if(t) var e = {
					"set": function(e, i) {
						null !== this.get(e) && this.remove(e), t.setItem(e, i)
					},
					"get": function(e) {
						var i = t.getItem(e);
						return void 0 === i ? null : i
					},
					"remove": function(e) {
						t.removeItem(e)
					},
					"clear": function() {
						t.clear()
					},
					"each": function(e) {
						for(var i, n = t.length, o = 0, e = e || function() {}; o < n && (i = t.key(o), !1 !== e.call(this, i, this.get(i))); o++) t.length < n && (n--, o--)
					}
				};
				else var e = {
					"file": window.location.hostname || "localStorage",
					"keyCache": "localStorageKeyCache",
					"keySplit": ",",
					"o": null,
					"init": function() {
						if(!this.o) try {
							var e = document.body || document.getElementsByTagName("head")[0] || document.documentElement,
								i = document.createElement("input");
							i.type = "hidden", i.addBehavior("#default#userData"), e.appendChild(i);
							var n = new Date;
							n.setDate(n.getDate() + 365), i.expires = n.toUTCString(), this.o = i, t.length = this.cacheKey(0, 4)
						} catch(o) {
							return !1
						}
						return !0
					},
					"cacheKey": function(t, e) {
						if(this.init()) {
							var i = this.o;
							i.load(this.keyCache);
							var n = i.getAttribute("keys") || "",
								o = n ? n.split(this.keySplit) : [],
								r = o.length,
								s = 0,
								a = !1;
							if(3 === e) return o;
							if(4 === e) return r;
							for(t = t.toLowerCase(); s < r; s++) o[s] === t && (a = !0, 2 === e && (o.splice(s, 1), r--, s--));
							1 !== e || a || o.push(t), i.setAttribute("keys", o.join(this.keySplit)), i.save(this.keyCache)
						}
					},
					"set": function(t, e) {
						if(this.init()) {
							var i = this.o;
							return this.cacheKey(t, null === e ? 2 : 1), i.load(this.file), null === e ? i.removeAttribute(t) : i.setAttribute(t, e + ""), i.save(this.file), e
						}
						return null
					},
					"get": function(t) {
						if(this.init()) {
							var e = this.o;
							return e.load(this.file), e.getAttribute(t) || null
						}
						return null
					},
					"clear": function() {
						if(this.init())
							for(var t = this.cacheKey(0, 3), e = t.length, i = 0; i < e; i++) this.item(t[i], null)
					}
				};
				return window.city_data = window.city_data || e
			}, T8tCommon
		})
	}
});