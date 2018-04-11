! function(e) {
	function t(n) {
		if(i[n]) return i[n].exports;
		var r = i[n] = {
			"i": n,
			"l": !1,
			"exports": {}
		};
		return e[n].call(r.exports, r, r.exports, t), r.l = !0, r.exports
	}
	var n = window["webpackJsonp"];
	window["webpackJsonp"] = function(t, i, o) {
		for(var a, s, c = 0, l = []; c < t.length; c++) s = t[c], r[s] && l.push(r[s][0]), r[s] = 0;
		for(a in i) Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a]);
		for(n && n(t, i, o); l.length;) l.shift()()
	};
	var i = {},
		r = {
			"index__statics__index": 0
		};
	t.e = function(e) {
		function n() {
			s.onerror = s.onload = null, clearTimeout(c);
			var t = r[e];
			0 !== t && (t && t[1](new Error("Loading chunk " + e + " failed.")), r[e] = void 0)
		}
		var i = r[e];
		if(0 === i) return new Promise(function(e) {
			e()
		});
		if(i) return i[2];
		var o = new Promise(function(t, n) {
			i = r[e] = [t, n]
		});
		i[2] = o;
		var a = document.getElementsByTagName("head")[0],
			s = document.createElement("script");
		s.type = "text/javascript", s.charset = "utf-8", s.async = !0, s.timeout = 12e4, t.nc && s.setAttribute("nonce", t.nc), s.src = t.p + "chunks/" + ({
			"common_tender_popup_bespoke": "common_tender_popup_bespoke",
			"area": "area",
			"district": "district",
			"move_block": "move_block",
			"slide_and_popup": "slide_and_popup"
		}[e] || e) + "_" + {
			"common_tender_popup_bespoke": "2a3d1a98",
			"area": "e26e3438",
			"district": "ae73ca15",
			"move_block": "7905987d",
			"slide_and_popup": "e7f8f66b"
		}[e] + ".js";
		var c = setTimeout(n, 12e4);
		return s.onerror = s.onload = n, a.appendChild(s), o
	}, t.m = e, t.c = i, t.i = function(e) {
		return e
	}, t.d = function(e, n, i) {
		t.o(e, n) || Object.defineProperty(e, n, {
			"configurable": !1,
			"enumerable": !0,
			"get": i
		})
	}, t.n = function(e) {
		var n = e && e.__esModule ? function() {
			return e["default"]
		} : function() {
			return e
		};
		return t.d(n, "a", n), n
	}, t.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, t.p = "http://assets.to8to.com/to8to_pc/", t.oe = function(e) {
		throw e
	}, t(t.s = "61xv")
}({
	"0": function(e, t) {
		e.exports = jQuery
	},
	"1": function(e, t) {
		e.exports = T8tCommon
	},
	"12dl": function(e, t, n) {
		! function(t, i) {
			e.exports = i(n(0))
		}(0, function(e) {
			return function(e) {
				function t(i) {
					if(n[i]) return n[i].exports;
					var r = n[i] = {
						"exports": {},
						"id": i,
						"loaded": !1
					};
					return e[i].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
				}
				var n = {};
				return t.m = e, t.c = n, t.p = "dist", t(0)
			}([function(e, t, n) {
				! function(t, n) {
					e.exports = n()
				}(0, function() {
					"use strict";
					var e = (n(1), {});
					e.VERSION = "1.0.0", e.Base = n(2), e.Events = n(4), e.Cookie = n(7), e.Detector = n(8), e.URL = n(9), e.Utils = n(10), e.Reporter = n(11);
					var t = n(12);
					return e.Globals = (new t).init(), e.Config = t, e.set = function(t, n) {
						return e.Globals.set(t, n)
					}, e.get = function(t) {
						return e.Globals.get(t)
					}, e.remove = function(t) {
						return e.Globals.del(t)
					}, e
				})
			}, function(t, n) {
				t.exports = e
			}, function(e, t, n) {
				! function(t, n) {
					e.exports = n()
				}(0, function() {
					function e(e, n) {
						for(var i in n)
							if(n.hasOwnProperty(i)) {
								var r = "_onChange" + t(i);
								e[r] && e.on("change:" + i, e[r])
							}
					}

					function t(e) {
						return e.charAt(0).toUpperCase() + e.substring(1)
					}
					var i = n(3),
						r = n(4),
						o = n(5),
						a = n(6);
					return i.create({
						"Implements": [r, o, a],
						"initialize": function(t) {
							this.initAttrs(t), e(this, this.attrs)
						},
						"destroy": function() {
							this.off();
							for(var e in this) this.hasOwnProperty(e) && delete this[e];
							this.destroy = function() {}
						}
					})
				})
			}, function(e, t, n) {
				function i(e) {
					if(!(this instanceof i) && u(e)) return o(e)
				}

				function r(e) {
					var t, n;
					for(t in e) n = e[t], i.Mutators.hasOwnProperty(t) ? i.Mutators[t].call(this, n) : this.prototype[t] = n
				}

				function o(e) {
					return e.extend = i.extend, e.implement = r, e
				}

				function a() {}

				function s(e, t, n) {
					for(var i in t)
						if(t.hasOwnProperty(i)) {
							if(n && -1 === d(n, i)) continue;
							"prototype" !== i && (e[i] = t[i])
						}
				}
				i.create = function(e, t) {
					function n() {
						e.apply(this, arguments), this.constructor === n && this.initialize && this.initialize.apply(this, arguments)
					}
					return u(e) || (t = e, e = null), t || (t = {}), e || (e = t.Extends || i), t.Extends = e, e !== i && s(n, e, e.StaticsWhiteList), r.call(n, t), o(n)
				}, i.extend = function(e) {
					return e || (e = {}), e.Extends = this, i.create(e)
				}, i.Mutators = {
					"Extends": function(e) {
						var t = this.prototype,
							n = c(e.prototype);
						s(n, t), n.constructor = this, this.prototype = n, this.super_Class = e.prototype
					},
					"Implements": function(e) {
						p(e) || (e = [e]);
						for(var t, n = this.prototype; t = e.shift();) s(n, t.prototype || t)
					},
					"Statics": function(e) {
						s(this, e)
					}
				};
				var c = Object.__proto__ ? function(e) {
						return {
							"__proto__": e
						}
					} : function(e) {
						return a.prototype = e, new a
					},
					l = Object.prototype.toString,
					p = Array.isArray || function(e) {
						return "[object Array]" === l.call(e)
					},
					u = function(e) {
						return "[object Function]" === l.call(e)
					},
					d = Array.prototype.indexOf ? function(e, t) {
						return e.indexOf(t)
					} : function(e, t) {
						for(var n = 0, i = e.length; n < i; n++)
							if(e[n] === t) return n;
						return -1
					};
				e.exports = i
			}, function(e, t, n) {
				! function(t, n) {
					e.exports = n()
				}(0, function() {
					function e() {}

					function t(e, t, n) {
						var i = !0;
						if(e) {
							var r = 0,
								o = e.length,
								a = t[0],
								s = t[1],
								c = t[2];
							switch(t.length) {
								case 0:
									for(; r < o; r += 2) i = !1 !== e[r].call(e[r + 1] || n) && i;
									break;
								case 1:
									for(; r < o; r += 2) i = !1 !== e[r].call(e[r + 1] || n, a) && i;
									break;
								case 2:
									for(; r < o; r += 2) i = !1 !== e[r].call(e[r + 1] || n, a, s) && i;
									break;
								case 3:
									for(; r < o; r += 2) i = !1 !== e[r].call(e[r + 1] || n, a, s, c) && i;
									break;
								default:
									for(; r < o; r += 2) i = !1 !== e[r].apply(e[r + 1] || n, t) && i
							}
						}
						return i
					}

					function n(e) {
						return "[object Function]" === Object.prototype.toString.call(e)
					}
					var i = /\s+/;
					e.prototype.on = function(e, t, n) {
						var r, o, a;
						if(!t) return this;
						for(r = this.__events || (this.__events = {}), e = e.split(i); o = e.shift();) a = r[o] || (r[o] = []), a.push(t, n);
						return this
					}, e.prototype.once = function(e, t, n) {
						var i = this,
							r = function() {
								i.off(e, r), t.apply(n || i, arguments)
							};
						return this.on(e, r, n)
					}, e.prototype.off = function(e, t, n) {
						var o, a, s, c;
						if(!(o = this.__events)) return this;
						if(!(e || t || n)) return delete this.__events, this;
						for(e = e ? e.split(i) : r(o); a = e.shift();)
							if(s = o[a])
								if(t || n)
									for(c = s.length - 2; c >= 0; c -= 2) t && s[c] !== t || n && s[c + 1] !== n || s.splice(c, 2);
								else delete o[a];
						return this
					}, e.prototype.trigger = function(e) {
						var n, r, o, a, s, c, l = [],
							p = !0;
						if(!(n = this.__events)) return this;
						for(e = e.split(i), s = 1, c = arguments.length; s < c; s++) l[s - 1] = arguments[s];
						for(; r = e.shift();)(o = n.all) && (o = o.slice()), (a = n[r]) && (a = a.slice()), "all" !== r && (p = t(a, l, this) && p), p = t(o, [r].concat(l), this) && p;
						return p
					}, e.prototype.emit = e.prototype.trigger;
					var r = Object.keys;
					return r || (r = function(e) {
						var t = [];
						for(var n in e) e.hasOwnProperty(n) && t.push(n);
						return t
					}), e.mixTo = function(t) {
						var i = e.prototype;
						if(n(t)) {
							for(var r in i) i.hasOwnProperty(r) && (t.prototype[r] = i[r]);
							Object.keys(i).forEach(function(e) {
								t.prototype[e] = i[e]
							})
						} else {
							var o = new e;
							for(var r in i) i.hasOwnProperty(r) && function(e) {
								t[e] = function() {
									return i[e].apply(o, Array.prototype.slice.call(arguments)), this
								}
							}(r)
						}
					}, e
				})
			}, function(e, t, n) {
				function i(e, t, n, i) {
					for(var a, c, l = t.split(s); a = l.shift();) c = r(this, a), c.__isAspected || o.call(this, a), this.on(e + ":" + a, n, i);
					return this
				}

				function r(e, t) {
					var n = e[t];
					if(!n) throw new Error("Invalid method name: " + t);
					return n
				}

				function o(e) {
					var t = this[e];
					this[e] = function() {
						var n = Array.prototype.slice.call(arguments),
							i = ["before:" + e].concat(n);
						if(!1 !== this.trigger.apply(this, i)) {
							var r = t.apply(this, arguments),
								o = ["after:" + e, r].concat(n);
							return this.trigger.apply(this, o), r
						}
					}, this[e].__isAspected = !0
				}
				var a = a || {};
				a.before = function(e, t, n) {
					return i.call(this, "before", e, t, n)
				}, a.after = function(e, t, n) {
					return i.call(this, "after", e, t, n)
				};
				var s = /\s+/;
				e.exports = a
			}, function(e, t, n) {
				function i(e) {
					return "[object String]" === _.call(e)
				}

				function r(e) {
					return "[object Function]" === _.call(e)
				}

				function o(e) {
					return null != e && e == e.window
				}

				function a(e) {
					if(!e || "[object Object]" !== _.call(e) || e.nodeType || o(e)) return !1;
					try {
						if(e.constructor && !k.call(e, "constructor") && !k.call(e.constructor.prototype, "isPrototypeOf")) return !1
					} catch(n) {
						return !1
					}
					var t;
					if($)
						for(t in e) return k.call(e, t);
					for(t in e);
					return void 0 === t || k.call(e, t)
				}

				function s(e) {
					if(!e || "[object Object]" !== _.call(e) || e.nodeType || o(e) || !e.hasOwnProperty) return !1;
					for(var t in e)
						if(e.hasOwnProperty(t)) return !1;
					return !0
				}

				function c(e, t) {
					var n;
					for(n in t) t.hasOwnProperty(n) && (e[n] = l(t[n], e[n]));
					return e
				}

				function l(e, t) {
					return z(e) ? e = e.slice() : a(e) && (a(t) || (t = {}), e = c(t, e)), e
				}

				function p(e, t, n) {
					for(var i = [], r = t.constructor.prototype; r;) r.hasOwnProperty("attrs") || (r.attrs = {}), d(n, r.attrs, r), s(r.attrs) || i.unshift(r.attrs), r = r.constructor.superclass;
					for(var o = 0, a = i.length; o < a; o++) m(e, b(i[o]))
				}

				function u(e, t) {
					m(e, b(t, !0), !0)
				}

				function d(e, t, n, i) {
					for(var r = 0, o = e.length; r < o; r++) {
						var a = e[r];
						n.hasOwnProperty(a) && (t[a] = i ? t.get(a) : n[a])
					}
				}

				function f(e, t) {
					for(var n in t)
						if(t.hasOwnProperty(n)) {
							var i, o = t[n].value;
							r(o) && (i = n.match(j)) && (e[i[1]](h(i[2]), o), delete t[n])
						}
				}

				function h(e) {
					var t = e.match(C),
						n = t[1] ? "change:" : "";
					return n += t[2].toLowerCase() + t[3]
				}

				function v(e, t, n) {
					var i = {
						"silent": !0
					};
					e.__initializingAttrs = !0;
					for(var r in n) n.hasOwnProperty(r) && t[r].setter && e.set(r, n[r], i);
					delete e.__initializingAttrs
				}

				function b(e, t) {
					var n = {};
					for(var i in e) {
						var r = e[i];
						!t && a(r) && g(r, A) ? n[i] = r : n[i] = {
							"value": r
						}
					}
					return n
				}

				function m(e, t, n) {
					var i, r, o;
					for(i in t)
						if(t.hasOwnProperty(i)) {
							if(r = t[i], o = e[i], o || (o = e[i] = {}), void 0 !== r["value"] && (o["value"] = l(r["value"], o["value"])), n) continue;
							for(var a in S) {
								var s = S[a];
								void 0 !== r[s] && (o[s] = r[s])
							}
						}
					return e
				}

				function g(e, t) {
					for(var n = 0, i = t.length; n < i; n++)
						if(e.hasOwnProperty(t[n])) return !0;
					return !1
				}

				function w(e) {
					return null == e || (i(e) || z(e)) && 0 === e.length || s(e)
				}

				function y(e, t) {
					if(e === t) return !0;
					if(w(e) && w(t)) return !0;
					var n = _.call(e);
					if(n != _.call(t)) return !1;
					switch(n) {
						case "[object String]":
							return e == String(t);
						case "[object Number]":
							return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
						case "[object Date]":
						case "[object Boolean]":
							return +e == +t;
						case "[object RegExp]":
							return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase;
						case "[object Array]":
							var i = e.toString(),
								r = t.toString();
							return -1 === i.indexOf("[object") && -1 === r.indexOf("[object") && i === r
					}
					if("object" != typeof e || "object" != typeof t) return !1;
					if(a(e) && a(t)) {
						if(!y(O(e), O(t))) return !1;
						for(var o in e)
							if(e[o] !== t[o]) return !1;
						return !0
					}
					return !1
				}
				var x = x || {};
				x.initAttrs = function(e) {
					var t = this.attrs = {},
						n = this.propsInAttrs || [];
					p(t, this, n), e && u(t, e), v(this, t, e), f(this, t), d(n, this, t, !0)
				}, x.get = function(e) {
					var t = this.attrs[e] || {},
						n = t.value;
					return t.getter ? t.getter.call(this, n, e) : n
				}, x.set = function(e, t, n) {
					var r = {};
					i(e) ? r[e] = t : (r = e, n = t), n || (n = {});
					var o = n.silent,
						s = n.override,
						l = this.attrs,
						p = this.__changedAttrs || (this.__changedAttrs = {});
					for(e in r)
						if(r.hasOwnProperty(e)) {
							var u = l[e] || (l[e] = {});
							if(t = r[e], u.readOnly) throw new Error("This attribute is readOnly: " + e);
							u.setter && (t = u.setter.call(this, t, e));
							var d = this.get(e);
							!s && a(d) && a(t) && (t = c(c({}, d), t)), l[e].value = t, this.__initializingAttrs || y(d, t) || (o ? p[e] = [t, d] : this.trigger("change:" + e, t, d, e))
						}
					return this
				}, x.change = function() {
					var e = this.__changedAttrs;
					if(e) {
						for(var t in e)
							if(e.hasOwnProperty(t)) {
								var n = e[t];
								this.trigger("change:" + t, n[0], n[1], t)
							}
						delete this.__changedAttrs
					}
					return this
				};
				var $, _ = Object.prototype.toString,
					k = Object.prototype.hasOwnProperty;
				! function() {
					function e() {
						this.x = 1
					}
					var t = [];
					e.prototype = {
						"valueOf": 1,
						"y": 1
					};
					for(var n in new e) t.push(n);
					$ = "x" !== t[0]
				}();
				var z = Array.isArray || function(e) {
						return "[object Array]" === _.call(e)
					},
					O = Object.keys;
				O || (O = function(e) {
					var t = [];
					for(var n in e) e.hasOwnProperty(n) && t.push(n);
					return t
				});
				var j = /^(on|before|after)([A-Z].*)$/,
					C = /^(Change)?([A-Z])(.*)/,
					A = ["value", "getter", "setter", "readOnly"],
					S = ["setter", "getter", "readOnly"];
				e.exports = x
			}, function(e, t, n) {
				! function(t, n) {
					e.exports = n()
				}(0, function() {
					function e(e, n) {
						var i = {};
						if(t(e) && e.length > 0)
							for(var o, s, c, l = n ? a : r, p = e.split(/;\s/g), u = 0, d = p.length; u < d; u++) {
								if((c = p[u].match(/([^=]+)=/i)) instanceof Array) try {
									o = a(c[1]), s = l(p[u].substring(c[1].length + 1))
								} catch(f) {} else o = a(p[u]), s = "";
								o && (i[o] = s)
							}
						return i
					}

					function t(e) {
						return "string" == typeof e
					}

					function n(e) {
						return t(e) && "" !== e
					}

					function i(e) {
						if(!n(e)) throw new TypeError("Cookie name must be a non-empty string")
					}

					function r(e) {
						return e
					}
					var o = {},
						a = decodeURIComponent,
						s = encodeURIComponent;
					return o.get = function(t, n) {
						i(t), n = "function" == typeof n ? {
							"converter": n
						} : n || {};
						var o = e(document.cookie, !n["raw"]);
						return(n.converter || r)(o[t])
					}, o.set = function(e, t, r) {
						i(e), r = r || {};
						var o = r["expires"] || 5e3,
							a = r["domain"],
							c = r["path"];
						r["raw"] || (t = s(String(t)));
						var l = e + "=" + t,
							p = o;
						return "number" == typeof p && (p = new Date, p.setDate(p.getDate() + o)), p instanceof Date && (l += "; expires=" + p.toUTCString()), n(a) && (l += "; domain=" + a), n(c) && (l += "; path=" + c), r["secure"] && (l += "; secure"), document.cookie = l, l
					}, o.remove = function(e, t) {
						return t = t || {}, t["expires"] = new Date(0), this.set(e, "", t)
					}, o
				})
			}, function(e, t, n) {
				(function(t) {
					! function(t, n) {
						e.exports = n()
					}(0, function() {
						function e(e) {
							if(l) try {
								var t = l.twGetRunPath.toLowerCase(),
									n = l.twGetSecurityID(c),
									i = l.twGetVersion(n);
								if(t && -1 === t.indexOf(e)) return !1;
								if(i) return {
									"version": i
								}
							} catch(r) {}
						}

						function n(e) {
							return function(t) {
								return Object.prototype.toString.call(t) === "[object " + e + "]"
							}
						}

						function i(e, t) {
							for(var n = 0, i = e.length; n < i && !1 !== t.call(e, e[n], n); n++);
						}

						function r(e, t, n) {
							var i = k(t) ? t.call(null, n) : t;
							if(!i) return null;
							var r = {
								"name": e,
								"version": h,
								"codename": ""
							};
							if(!0 === i) return r;
							if(x(i)) {
								if(-1 !== n.indexOf(i)) return r
							} else {
								if(_(i)) return i.hasOwnProperty("version") && (r.version = i.version), r;
								if($(i)) {
									var o = i.exec(n);
									if(o) return o.length >= 2 && o[1] ? r.version = o[1].replace(/_/g, ".") : r.version = h, r
								}
							}
						}

						function o(e, t, n, o) {
							var a = y;
							i(t, function(t) {
								var n = r(t[0], t[1], e);
								if(n) return a = n, !1
							}), n.call(o, a.name, a.version)
						}

						function a(e) {
							if(!w.re_msie.test(e)) return null;
							var t, n, i, r, o;
							if(-1 !== e.indexOf("trident/") && (t = /\btrident\/([0-9.]+)/.exec(e)) && t.length >= 2) {
								i = t[1];
								var a = t[1].split(".");
								a[0] = parseInt(a[0], 10) + 4, o = a.join(".")
							}
							t = w.re_msie.exec(e), r = t[1];
							var s = t[1].split(".");
							return void 0 === o && (o = r), s[0] = parseInt(s[0], 10) - 4, n = s.join("."), void 0 === i && (i = n), {
								"browserVersion": o,
								"browserMode": r,
								"engineVersion": i,
								"engineMode": n,
								"compatible": i !== n
							}
						}

						function s(e) {
							var t = S.parse(e),
								n = a(e);
							if(n) {
								var i = t.engine.name,
									r = n.engineVersion || n.engineMode,
									o = parseFloat(r),
									s = n.engineMode;
								t.engine = {
									"name": i,
									"version": o,
									"fullVersion": r,
									"mode": parseFloat(s),
									"fullMode": s,
									"compatible": !!n && n.compatible
								}, t.engine[t.engine.name] = o;
								var c = t.browser.name,
									l = t.browser.fullVersion;
								"ie" === c && (l = n.browserVersion);
								var p = n.browserMode,
									u = parseFloat(l);
								t.browser = {
									"name": c,
									"version": u,
									"fullVersion": l,
									"mode": parseFloat(p),
									"fullMode": p,
									"compatible": !!n && n.compatible
								}, t.browser[c] = u
							}
							return t
						}
						var c = "undefined" == typeof window ? t : window,
							l = c.external,
							p = /\b(?:msie |ie |trident\/[0-9].*rv[ :])([0-9.]+)/,
							u = /\bbb10\b.+?\bversion\/([\d.]+)/,
							d = /\bblackberry\b.+\bversion\/([\d.]+)/,
							f = /\bblackberry\d+\/([\d.]+)/,
							h = "-1",
							v = [
								["nokia", function(e) {
									return -1 !== e.indexOf("nokia ") ? /\bnokia ([0-9]+)?/ : /\bnokia([a-z0-9]+)?/
								}],
								["samsung", function(e) {
									return -1 !== e.indexOf("samsung") ? /\bsamsung(?:[ \-](?:sgh|gt|sm))?-([a-z0-9]+)/ : /\b(?:sgh|sch|gt|sm)-([a-z0-9]+)/
								}],
								["wp", function(e) {
									return -1 !== e.indexOf("windows phone ") || -1 !== e.indexOf("xblwp") || -1 !== e.indexOf("zunewp") || -1 !== e.indexOf("windows ce")
								}],
								["pc", "windows"],
								["ipad", "ipad"],
								["ipod", "ipod"],
								["iphone", /\biphone\b|\biph(\d)/],
								["mac", "macintosh"],
								["mi", /\bmi[ \-]?([a-z0-9 ]+(?= build|\)))/],
								["hongmi", /\bhm[ \-]?([a-z0-9]+)/],
								["aliyun", /\baliyunos\b(?:[\-](\d+))?/],
								["meizu", function(e) {
									return e.indexOf("meizu") >= 0 ? /\bmeizu[\/ ]([a-z0-9]+)\b/ : /\bm([0-9cx]{1,4})\b/
								}],
								["nexus", /\bnexus ([0-9s.]+)/],
								["huawei", function(e) {
									var t = /\bmediapad (.+?)(?= build\/huaweimediapad\b)/;
									return -1 !== e.indexOf("huawei-huawei") ? /\bhuawei\-huawei\-([a-z0-9\-]+)/ : t.test(e) ? t : /\bhuawei[ _\-]?([a-z0-9]+)/
								}],
								["lenovo", function(e) {
									return -1 !== e.indexOf("lenovo-lenovo") ? /\blenovo\-lenovo[ \-]([a-z0-9]+)/ : /\blenovo[ \-]?([a-z0-9]+)/
								}],
								["zte", function(e) {
									return /\bzte\-[tu]/.test(e) ? /\bzte-[tu][ _\-]?([a-su-z0-9\+]+)/ : /\bzte[ _\-]?([a-su-z0-9\+]+)/
								}],
								["vivo", /\bvivo(?: ([a-z0-9]+))?/],
								["htc", function(e) {
									return /\bhtc[a-z0-9 _\-]+(?= build\b)/.test(e) ? /\bhtc[ _\-]?([a-z0-9 ]+(?= build))/ : /\bhtc[ _\-]?([a-z0-9 ]+)/
								}],
								["oppo", /\boppo[_]([a-z0-9]+)/],
								["konka", /\bkonka[_\-]([a-z0-9]+)/],
								["sonyericsson", /\bmt([a-z0-9]+)/],
								["coolpad", /\bcoolpad[_ ]?([a-z0-9]+)/],
								["lg", /\blg[\-]([a-z0-9]+)/],
								["android", /\bandroid\b|\badr\b/],
								["blackberry", function(e) {
									return e.indexOf("blackberry") >= 0 ? /\bblackberry\s?(\d+)/ : "bb10"
								}]
							],
							b = [
								["wp", function(e) {
									return -1 !== e.indexOf("windows phone ") ? /\bwindows phone (?:os )?([0-9.]+)/ : -1 !== e.indexOf("xblwp") ? /\bxblwp([0-9.]+)/ : -1 !== e.indexOf("zunewp") ? /\bzunewp([0-9.]+)/ : "windows phone"
								}],
								["windows", /\bwindows nt ([0-9.]+)/],
								["macosx", /\bmac os x ([0-9._]+)/],
								["ios", function(e) {
									return /\bcpu(?: iphone)? os /.test(e) ? /\bcpu(?: iphone)? os ([0-9._]+)/ : -1 !== e.indexOf("iph os ") ? /\biph os ([0-9_]+)/ : /\bios\b/
								}],
								["yunos", /\baliyunos ([0-9.]+)/],
								["android", function(e) {
									return e.indexOf("android") >= 0 ? /\bandroid[ \/-]?([0-9.x]+)?/ : e.indexOf("adr") >= 0 ? e.indexOf("mqqbrowser") >= 0 ? /\badr[ ]\(linux; u; ([0-9.]+)?/ : /\badr(?:[ ]([0-9.]+))?/ : "android"
								}],
								["chromeos", /\bcros i686 ([0-9.]+)/],
								["linux", "linux"],
								["windowsce", /\bwindows ce(?: ([0-9.]+))?/],
								["symbian", /\bsymbian(?:os)?\/([0-9.]+)/],
								["blackberry", function(e) {
									var t = e.match(u) || e.match(d) || e.match(f);
									return t ? {
										"version": t[1]
									} : "blackberry"
								}]
							],
							m = [
								["edgehtml", /edge\/([0-9.]+)/],
								["trident", p],
								["blink", function() {
									return "chrome" in c && "CSS" in c && /\bapplewebkit[\/]?([0-9.+]+)/
								}],
								["webkit", /\bapplewebkit[\/]?([0-9.+]+)/],
								["gecko", function(e) {
									var t = e.match(/\brv:([\d\w.]+).*\bgecko\/(\d+)/);
									if(t) return {
										"version": t[1] + "." + t[2]
									}
								}],
								["presto", /\bpresto\/([0-9.]+)/],
								["androidwebkit", /\bandroidwebkit\/([0-9.]+)/],
								["coolpadwebkit", /\bcoolpadwebkit\/([0-9.]+)/],
								["u2", /\bu2\/([0-9.]+)/],
								["u3", /\bu3\/([0-9.]+)/]
							],
							g = [
								["edge", /edge\/([0-9.]+)/],
								["sogou", function(e) {
									return e.indexOf("sogoumobilebrowser") >= 0 ? /sogoumobilebrowser\/([0-9.]+)/ : e.indexOf("sogoumse") >= 0 || / se ([0-9.x]+)/
								}],
								["theworld", function() {
									var t = e("theworld");
									return void 0 !== t ? t : /theworld(?: ([\d.])+)?/
								}],
								["360", function(t) {
									var n = e("360se");
									return void 0 !== n ? n : -1 !== t.indexOf("360 aphone browser") ? /\b360 aphone browser \(([^\)]+)\)/ : /\b360(?:se|ee|chrome|browser)\b/
								}],
								["maxthon", function() {
									try {
										if(l && (l.mxVersion || l.max_version)) return {
											"version": l.mxVersion || l.max_version
										}
									} catch(e) {}
									return /\b(?:maxthon|mxbrowser)(?:[ \/]([0-9.]+))?/
								}],
								["micromessenger", /\bmicromessenger\/([\d.]+)/],
								["qq", /\bm?qqbrowser\/([0-9.]+)/],
								["green", "greenbrowser"],
								["tt", /\btencenttraveler ([0-9.]+)/],
								["liebao", function(e) {
									if(e.indexOf("liebaofast") >= 0) return /\bliebaofast\/([0-9.]+)/;
									if(-1 === e.indexOf("lbbrowser")) return !1;
									var t;
									try {
										l && l.LiebaoGetVersion && (t = l.LiebaoGetVersion())
									} catch(n) {}
									return {
										"version": t || h
									}
								}],
								["tao", /\btaobrowser\/([0-9.]+)/],
								["coolnovo", /\bcoolnovo\/([0-9.]+)/],
								["saayaa", "saayaa"],
								["baidu", /\b(?:ba?idubrowser|baiduhd)[ \/]([0-9.x]+)/],
								["ie", p],
								["mi", /\bmiuibrowser\/([0-9.]+)/],
								["opera", function(e) {
									var t = /\bopera.+version\/([0-9.ab]+)/,
										n = /\bopr\/([0-9.]+)/;
									return t.test(e) ? t : n
								}],
								["oupeng", /\boupeng\/([0-9.]+)/],
								["yandex", /yabrowser\/([0-9.]+)/],
								["ali-ap", function(e) {
									return e.indexOf("aliapp") > 0 ? /\baliapp\(ap\/([0-9.]+)\)/ : /\balipayclient\/([0-9.]+)\b/
								}],
								["ali-ap-pd", /\baliapp\(ap-pd\/([0-9.]+)\)/],
								["ali-am", /\baliapp\(am\/([0-9.]+)\)/],
								["ali-tb", /\baliapp\(tb\/([0-9.]+)\)/],
								["ali-tb-pd", /\baliapp\(tb-pd\/([0-9.]+)\)/],
								["ali-tm", /\baliapp\(tm\/([0-9.]+)\)/],
								["ali-tm-pd", /\baliapp\(tm-pd\/([0-9.]+)\)/],
								["uc", function(e) {
									return e.indexOf("ucbrowser/") >= 0 ? /\bucbrowser\/([0-9.]+)/ : e.indexOf("ubrowser/") >= 0 ? /\bubrowser\/([0-9.]+)/ : /\buc\/[0-9]/.test(e) ? /\buc\/([0-9.]+)/ : e.indexOf("ucweb") >= 0 ? /\bucweb([0-9.]+)?/ : /\b(?:ucbrowser|uc)\b/
								}],
								["chrome", / (?:chrome|crios|crmo)\/([0-9.]+)/],
								["android", function(e) {
									if(-1 !== e.indexOf("android")) return /\bversion\/([0-9.]+(?: beta)?)/
								}],
								["blackberry", function(e) {
									var t = e.match(u) || e.match(d) || e.match(f);
									return t ? {
										"version": t[1]
									} : "blackberry"
								}],
								["safari", /\bversion\/([0-9.]+(?: beta)?)(?: mobile(?:\/[a-z0-9]+)?)? safari\//],
								["webview", /\bcpu(?: iphone)? os (?:[0-9._]+).+\bapplewebkit\b/],
								["firefox", /\bfirefox\/([0-9.ab]+)/],
								["nokia", /\bnokiabrowser\/([0-9.]+)/]
							],
							w = {
								"device": v,
								"os": b,
								"browser": g,
								"engine": m,
								"re_msie": p
							},
							h = "-1",
							y = {
								"name": "na",
								"version": h
							},
							x = n("String"),
							$ = n("RegExp"),
							_ = n("Object"),
							k = n("Function"),
							z = function(e) {
								this._rules = e, this.parse = function(e) {
									e = (e || "").toLowerCase();
									var t = {};
									o(e, this._rules.device, function(e, n) {
										var i = parseFloat(n);
										t.device = {
											"name": e,
											"version": i,
											"fullVersion": n
										}, t.device[e] = i
									}, t), o(e, this._rules.os, function(e, n) {
										var i = parseFloat(n);
										t.os = {
											"name": e,
											"version": i,
											"fullVersion": n
										}, t.os[e] = i
									}, t);
									var n = this.IEMode(e);
									return o(e, this._rules.engine, function(e, i) {
										var r = i;
										n && (i = n.engineVersion || n.engineMode, r = n.engineMode);
										var o = parseFloat(i);
										t.engine = {
											"name": e,
											"version": o,
											"fullVersion": i,
											"mode": parseFloat(r),
											"fullMode": r,
											"compatible": !!n && n.compatible
										}, t.engine[e] = o
									}, t), o(e, this._rules.browser, function(e, i) {
										var r = i;
										n && ("ie" === e && (i = n.browserVersion), r = n.browserMode);
										var o = parseFloat(i);
										t.browser = {
											"name": e,
											"version": o,
											"fullVersion": i,
											"mode": parseFloat(r),
											"fullMode": r,
											"compatible": !!n && n.compatible
										}, t.browser[e] = o
									}, t), t
								}, this.IEMode = function(e) {
									if(!this._rules.re_msie.test(e)) return null;
									var t, n, i, r, o;
									if(-1 !== e.indexOf("trident/") && (t = /\btrident\/([0-9.]+)/.exec(e)) && t.length >= 2) {
										i = t[1];
										var a = t[1].split(".");
										a[0] = parseInt(a[0], 10) + 4, o = a.join(".")
									}
									t = this._rules.re_msie.exec(e), r = t[1];
									var s = t[1].split(".");
									return void 0 === o && (o = r), s[0] = parseInt(s[0], 10) - 4, n = s.join("."), void 0 === i && (i = n), {
										"browserVersion": o,
										"browserMode": r,
										"engineVersion": i,
										"engineMode": n,
										"compatible": i !== n
									}
								}
							},
							O = navigator.userAgent || "",
							j = navigator.appVersion || "",
							C = navigator.vendor || "",
							A = O + " " + j + " " + C,
							S = new z(w),
							P = s(A);
						return P.parse = s, P
					})
				}).call(t, function() {
					return this
				}())
			}, function(e, t, n) {
				! function(t, n) {
					e.exports = n()
				}(0, function() {
					var e = e || {};
					return e.parseQuery = function(e) {
						var e = e || location.href,
							t = e ? e.split("?")[1] || "" : location.search,
							n = t.substr(0).split("&"),
							i = {};
						if(n.length > 0)
							for(var r = 0; r < n.length; r++) {
								var o = n[r].split("=");
								i[o[0]] = decodeURIComponent(o[1])
							}
						return i
					}, e.redirect = function(e, t, n) {
						n = n || window;
						var e = e || n.location.href;
						!0 === t ? n.open(e) : n.location.href = e
					}, e.build = function(e, t) {
						var e = e || "",
							n = -1 !== e.indexOf("?") ? "&" : "?",
							i = "";
						for(var r in t) i += r + "=" + encodeURIComponent(t[r]) + "&";
						return i = i.substr(0, i.lastIndexOf("&")), e + n + i
					}, e.parse = function(e) {
						var t = document.createElement("a");
						return t.href = e, {
							"source": e,
							"protocol": t.protocol.replace(":", ""),
							"host": t.hostname,
							"port": t.port,
							"query": t.search,
							"file": (t.pathname.match(/\/([^\/?#]+)$/i) || [, ""])[1],
							"hash": t.hash.replace("#", ""),
							"path": t.pathname.replace(/^([^\/])/, "/$1"),
							"relative": (t.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ""])[1],
							"segments": t.pathname.replace(/^\//, "").split("/")
						}
					}, e.encode = function(e) {
						return encodeURIComponent(e)
					}, e.decode = function(e) {
						return decodeURIComponent(e)
					}, e
				})
			}, function(e, t, n) {
				! function(t, n) {
					e.exports = n()
				}(0, function() {
					var e = e || {},
						t = n(11);
					return t.setReportAddr("http://www.to8to.com/frontend/report/"), e.errorReporter = function(e) {
						var n = {
							"err": e,
							"ts": Math.ceil((new Date).getTime() / 1e3),
							"url": location.href
						};
						t.get(n)
					}, e.ajax = function(t) {
						var n = function(n, i, r) {
							e.isFunction(t.error) && t.error.call(this, n, i, r), (t.errorReporter || e.errorReporter).call(this, i)
						};
						return $.ajax($.extend({
							"error": n
						}, t))
					}, e.isset = function(e) {
						return void 0 !== e
					}, e.isBoolean = function(e) {
						return "boolean" == typeof e
					}, e.isString = function(e) {
						return "string" == typeof e
					}, e.isObject = function(e) {
						return "[object Object]" == Object.prototype.toString.call(e)
					}, e.isArray = function(e) {
						return "[object Array]" == Object.prototype.toString.call(e)
					}, e.isFunction = function(e) {
						return "function" == typeof e
					}, e.isPhone = function(e) {
						return /^((\(\d{2,3}\))|(\d{3}\-))?((1[345]\d{9})|(18\d{9}))$/.test(e)
					}, e.isEmail = function(e) {
						return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)
					}, e.inArray = function(e, t, n) {
						var i, r = e.length || 0,
							n = n || !1,
							o = !1;
						if(r <= 0) return !1;
						for(var a = 0; a < r && (i = e[a], !0 !== (o = n ? i === t : i == t)); a++);
						return o
					}, e.loadScript = function(t, n, i) {
						var n = n || document.head,
							r = document.createElement("script");
						r.src = t, r.onload = function(t) {
							e.isFunction(i) && i.call(r, t)
						}, r.onerror = function(t) {
							e.isFunction(i) && i.call(r, t)
						}, n.appendChild(r)
					}, e.loadStyle = function(t, n, i) {
						var n = n || document.head,
							r = document.createElement("link");
						r.rel = "stylesheet", r.href = t, r.onload = function(t) {
							e.isFunction(i) && i.call(r, t)
						}, r.onerror = function(t) {
							e.isFunction(i) && i.call(r, t)
						}, n.appendChild(r)
					}, e.back2Top = function(e, t) {
						var e = e || !0,
							t = t || 300;
						e ? $("html,body").animate({
							"scrollTop": "0px"
						}, t) : window.scrollTo(0, 0)
					}, e
				})
			}, function(e, t, n) {
				function i() {
					return "" + Math.ceil(new Date / 1e3) + Math.ceil(1e5 * Math.random())
				}! function(t, n) {
					e.exports = n()
				}(0, function() {
					function e(e) {
						return "string" == typeof e
					}

					function t(e) {
						return "[object Object]" == Object.prototype.toString.call(e)
					}

					function r(e) {
						return "function" == typeof e
					}

					function o(n) {
						var i = n.length,
							o = {
								"url": s.reportAddr,
								"data": null,
								"callback": null
							};
						if(1 == i) e(n[0]) ? o.url = n[0] : o.data = n[0];
						else {
							var a = n[1];
							void 0 !== a && t(a) ? (o.data = a, o.callback = n[2] || null) : void 0 !== a && r(a) && (o.callback = a)
						}
						return o
					}
					var a = n(9),
						s = s || {};
					return s.reportAddr = "", s.setReportAddr = function(e) {
						s.reportAddr = e
					}, s.post = function() {
						var e = o(arguments);
						return $.ajax({
							"url": e.url,
							"data": e.data,
							"type": "POST",
							"success": function(t) {
								e.callback && e.callback.call(this, t)
							}
						})
					}, s.get = function() {
						var e = o(arguments),
							t = e.data || {},
							n = new Image;
						t["_"] = i(), n.onload = function() {
							e.callback && e.callback.call(this)
						}, n.src = a.build(e.url, e.data)
					}, s.jsonp = function(e, t, n) {
						var i = o(arguments);
						return $.ajax({
							"url": i.url,
							"data": i.data,
							"dataType": "jsonp",
							"success": function(e) {
								i.callback && i.callback.call(this, e)
							}
						})
					}, s
				})
			}, function(e, t, n) {
				function i(e, t) {
					if("object" == typeof e && "object" == typeof t)
						for(var n in t) t.hasOwnProperty(n) && (e[n] = i(e[n], t[n]));
					else e = t;
					return e
				}! function(t, n) {
					e.exports = n()
				}(0, function() {
					var e = function() {};
					return e.prototype = {
						"constructor": function() {
							this.init.apply(this, arguments)
						},
						"init": function() {
							return this.data = {}, arguments.length > 0 && this.merge.apply(this, arguments), this
						},
						"get": function(e, t) {
							var n, i = this.data || {},
								r = (e || "").split(".");
							for(var o in r)(n = r[o]) && void 0 !== i && (i = i[n]);
							return void 0 === i ? t : i
						},
						"set": function(e, t) {
							var n;
							if(void 0 === t) this.data = e;
							else if(e = String(e || "").replace(/\s+/, "")) {
								var i = e.split("."),
									r = i.pop(),
									o = this.data || {};
								for(var a in i) {
									n = i[a];
									var s = typeof o[n];
									"object" === s ? o = o[n] : "undefined" === s && (o = o[n] = {})
								}
								o[r] = t
							}
							return this
						},
						"del": function(e) {
							if(e = String(e || "").replace(/\s+/, "")) {
								for(var t, n = e.split("."), i = this.data, r = n.pop(), o = 0, a = n.length; o < a; o++) {
									if(t = n[o], "object" != typeof i[t]) return this;
									i = i[t]
								}
								void 0 !== i[r] && delete i[r]
							}
							return this
						},
						"merge": function() {
							var e, t = this;
							for(var n in arguments) "object" == typeof(e = arguments[n]) && i(t.data, e);
							return this
						}
					}, e
				})
			}])
		})
	},
	"61xv": function(e, t, n) {
		"use scrict";
		! function() {
			function e() {
				var e = $(".banner-sliders .swiper-slide").find("img");
				$(e).each(function(e) {
					var t = this,
						n = new Image;
					n.onload = function() {
						var e = $(t).width() / 2;
						$(t).css({
							"marginLeft": "-" + e + "px",
							"display": "block"
						})
					}, n.src = $(t)[0].src
				})
			}

			function t() {
				var e = [],
					t = $(".swiper-container.banner-sliders [data-ptag]");
				void 0 !== window.clickStream && "function" == typeof window.clickStream.getCvParams && function() {
					t.each(function(t, n) {
						var i = $(n),
							r = i.data("ptag"),
							o = i.data("exptag"); - 1 === e.join().indexOf(o) && e.push(o), i.click(function() {
							window.clickStream.getCvParams(r)
						})
					});
					for(var n = e.length; n > 0; n--) window.clickStream.getCvParams(e[n - 1])
				}()
			}
			var i = new Swiper(".swiper-container", {
				"autoplay": 3e3,
				"loop": !0,
				"pagination": ".slider-btns"
			});
			i.stopAutoplay(), e(), $(".index-banner .arrow-left").click(function() {
				i.swipePrev(), setTimeout(function() {
					i.startAutoplay()
				}, 3e3)
			}), 
			$(".index-banner .arrow-right").click(function() {
				i.swipeNext(), setTimeout(function() {
					i.startAutoplay()
				}, 3e3)
			}), $(".slider-btns .swiper-pagination-switch").click(function() {
				var e = $(".slider-btns .swiper-pagination-switch").index(this);
				i.swipeTo(e, 1e3, !1)
			}), $(window).resize(function() {
				clearTimeout(t);
				var t = setTimeout(function() {
					e()
				}, 0)
			}), setTimeout(function() {
				var r = n("12dl"),
					o = r.Cookie,
					a = o.get("to8to_tname"),
					s = "//www.to8to.com/api/ggdata.php?adskey=idx_idx_hed_al_1&client=pc&pt=to8to";
				a && (s = s + "&city=" + a), $.ajax({
					"type": "get",
					"url": s,
					"dataType": "jsonp",
					"jsonpCallback": "jsonpCallbackOfADS",
					"cache": !0,
					"success": function(n) {
						//首页轮播添加图片
//						if(n && n.folder && n.folder.length > 0) {
//							var r = n.folder;
//							r.shift();
//							for(var o = 0; o < r.length; o++) {
//								var a = r[o],
//									s = '<a href="' + a.link_to + '" target="_blank"" data-ptag="' + (a.ptag || "") + '" data-exptag="' + (a.exptag || "") + '"><img src="' + a.resource_url + '"></a>';
//								parseInt(a.flag) && (s += '<div class="ad-mark"></div>'), s = '<div style="background-color:' + a.bgcolor + '">' + s + "</div>", i.appendSlide(s)
//							}
//							t(), e(), setTimeout(function() {
//								i.startAutoplay()
//							}, 7e3)
//						}
						console.log(n);
					}
				})
			}, 400)
		}(), $(function() {
			function e() {
				(x = $(document).scrollTop()) > k && (z || t())
			}

			function t() {
				$.ajax({
					"type": "get",
					"url": "http://www.to8to.com/api/getindexdata.php",
					"dataType": "jsonp",
					"data": {
						"type": "shipinMallAbout",
						"isJsonp": 1
					},
					"jsonpCallback": "jsonpCallback",
					"success": function(e) {
						if(e) {
							var t = e.about,
								n = e.mall;
							a(e.shipin), o(n), r(t), d(".async-module img.lazy"), m(".async-module .slow-emerge")
						}
					}
				}), z = !0
			}

			function i(e) {
				$.ajax({
					"type": "get",
					"url": "http://www.to8to.com/api/getindexdata.php",
					"dataType": "jsonp",
					"data": {
						"type": "setVideoNum",
						"isJsonp": 1,
						"video_id": e
					},
					"jsonpCallback": "jsonpCallback",
					"success": function() {}
				}), z = !0
			}

			function r(e) {
				for(var t = "", n = 0; n < e.length; n++) {
					var i = e[n];
					t += '<div class="list-item"><a href=' + i.url + ' target="_blank" rel="nofollow"><div class="list-item-content"><div class="list-item-content-img"><img data-original=' + i.poster + " alt=" + i.subject + ' class="lazy"></div><h5 class="list-item-title">' + i.subject + '</h5></div><div class="list-item-footer"><img data-original=' + i.logo + ' alt="logo" class="list-item-logo lazy"><span class="list-item-num"><i class="list-item-clock"></i>' + i.dateline + "</span></div></a></div>"
				}
				var r = '<div class="content-wrapper"><div class="index-common-header"><h3 class="index-common-title slow-emerge"><span class="index-common-title-before"></span>浜嗚В鍦熷反鍏�<span class="index-common-title-after"></span></h3><span class="index-common-description">涓€绾垮獟浣撳己鍔挎姤閬擄紝鍏ㄩ潰瑙ｆ瀽鍦熷反鍏旀ā寮�</span></div><div class="index-tubatu-list clearfix slow-emerge">' + t + "</div></div>";
				$("#index-tubatu").append(r)
			}

			function o(e) {
				for(var t = "", n = "", i = 0; i < e.jjsc_hot.length; i++) {
					var r = e.jjsc_hot[i],
						o = i + 186,
						a = "",
						s = "";
					i < 2 ? (a = '<div class="list-wares move-animation"><a href=' + r.url + ' target="_blank" rel="nofollow" class="click-count" data-ptag="1_1_1_' + o + '"><div class="list-wares-title"><p class="list-wares-name">' + r.hreftxt + '</p><span class="transverse-thread"></span><span class="list-wares-price">锟�' + r.price + "</span></div><img data-original=" + r.picpath + " alt=" + r.hreftxt + ' class="lazy"></a></div>', t += a) : (s = "<a href=" + r.url + ' class="move-animation click-count" rel="nofollow" target="_blank" data-ptag="1_1_1_' + o + '"><img data-original=' + r.picpath + " alt=" + r.hreftxt + ' class="lazy"><div class="list-wares-title"><p class="list-wares-name">' + r.hreftxt + '</p><span class="transverse-thread"></span><span class="list-wares-price">锟�' + r.price + "</span></div></a>", n += s)
				}
				var c, l = "",
					p = 0;
				for(c in e.jj_bottom_hot) {
					var u = e.jj_bottom_hot[c],
						d = "";
					p < 4 && (d = '<span class="division-thread"></span>');
					var f = parseInt(c) + 204;
					l += "<li><a href=" + u.url + ' target="_blank" rel="nofollow" class="move-animation click-count" data-ptag="1_1_1_' + f + '"><img data-original=' + u.picUrl + ' class="lazy"></a>' + d + "</li>", p++
				}
				var h = '<div class="content-wrapper"><div class="index-common-header"><h3 class="index-common-title slow-emerge"><span class="index-common-title-before"></span>閫涘晢鍦�<span class="index-common-title-after"></span></h3><span class="index-common-description">浠绘寫浠婚€夊ぇ鐗屽晢鍝侊紝鍏ㄥ満浜彈宸ュ巶浠锋姌鎵�</span></div><ul class="index-common-navbar slow-emerge"><li><a href="http://mall.to8to.com/tag/chuwei/" target="_blank">鍗荡</a><span class="navbar-line">/</span></li><li><a href="http://mall.to8to.com/tag/diangong/" target="_blank">寮€鍏�</a><span class="navbar-line">/</span></li><li><a href="http://mall.to8to.com/tag/dengshi/" target="_blank">鐏グ</a><span class="navbar-line">/</span></li><li><a href="http://mall.to8to.com/tag/chufang/" target="_blank">鍘ㄦ埧</a><span class="navbar-line">/</span></li><li><a href="http://mall.to8to.com/tag/shuicao/" target="_blank">姘存Ы</a><span class="navbar-line">/</span></li><li><a href="http://mall.to8to.com/tag/qiangzhi/" target="_blank">澧欑焊</a><span class="navbar-line">/</span></li><li><a href="http://mall.to8to.com" rel="nofollow" target="_blank">鍏ㄩ儴鍟嗗搧 <span class="arrow"></span></a></li></ul><div class="index-gsc-list">' + t + '<div class="list-wares list-more">' + n + '</div></div><div class="index-seller-list"><ul>' + l + "</ul></div></div>";
				$("#index-gsc").append(h)
			}

			function a(e) {
				for(var t = "", n = 0; n < e.length; n++) {
					var i = e[n],
						r = "";
					0 == n && (r = 'class="hover"');
					t += "<li " + r + ' data-id="' + i.video_id + '"><div class="index-video-region"><a href="javascript:void(0);" data-href=' + i.video_url + ' class="video-url"><img src=' + i.img + ' class="video-icon-title"><span class="video-text-title">姝ｅ湪鎾斁涓�</span><i class="index-icon play-btn"></i></a><p class="video-text-slogan"><a>' + i.stitle + '</a></p><div class="video-play-num"><p class="video-intro">' + i.summary + "</p></div></div></li>"
				}
				var o = '<div class="content-wrapper" ><div class="index-video-play container-fullscreen"><div class="video-play-box" id="container"></div><div class="video-compatible-box" data-id="' + e[0].video_id + '"><img src=' + e[0].img + ' class="video-icon"><span class="video-icon-pause"></span></div><div class="index-video-list-box"><ul class="index-video-list">' + t + '</ul><a href="http://www.to8to.com/yezhu/shipin/" target="_blank" class="index-icon-arrow-box"><i class="index-icon index-icon-arrow"></i></a></div></div></div>';
				$("#index-video-box").append(o), l()
			}

			function s() {
				var e = $(".design-topic .swiper-slide-active").data("index");
				$(".design-topic").find(".design-info").hide(), $(".design-topic").find(".design-info").each(function() {
					if($(this).data("index") == e) return void $(this).show()
				})
			}

			function c() {
				var e = $(window).width() < 1440 ? 50 : 62,
					t = $(".design-swiper .swiper-wrapper").css("padding-left").split("px")[0] - e,
					n = $(".design-topic .design-info").width(),
					i = t + 10 + e;
				$(".design-topic .arrow-left").css({
					"left": t - 10
				}), $(".design-topic .arrow-right").css({
					"left": i
				}), $(".design-topic .design-info").css({
					"left": i - n - 120
				}), $(".design-swiper,.design-topic").show()
			}

			function l() {
				C = $(document).scrollTop(), A = jwplayer("container"), C < 2700 ? setTimeout(function() {
					p()
				}, 10) : p()
			}

			function p() {
				$(".video-compatible-box").show(), u($(".index-video-list li").eq(0).find(".video-url").attr("data-href"), !1, $(".index-video-list li").eq(0).find(".video-icon-title").attr("src")), $(".video-compatible-box").click(function() {
					var e = jwplayer("container");
					$(".video-compatible-box").remove(), e.play(), $(".index-video-list li").eq(0).removeClass("hover").addClass("on"), i($(this).attr("data-id"))
				}), $(".index-video-list .index-video-region").click(function() {
					var e = $(this).find(".video-icon-title").attr("src"),
						t = $(this).closest("li");
					return $(".index-video-list li").removeClass("hover on"), t.addClass("on"), u($(this).find(".video-url").attr("data-href"), !0, e), $(".video-compatible-box").remove(), i(t.attr("data-id")), !1
				})
			}

			function u(e, t, n) {
				A.setup({
					"flashplayer": "http://img.to8to.com/swf/jwplayer.flash.swf",
					"file": e,
					"height": 453,
					"width": 805,
					"image": n,
					"stretching": "fill",
					"streamer": "start",
					"provider": "http",
					"startparam": "start",
					"autostart": t,
					"events": {
						"onFullscreen": function(e) {
							e.fullscreen ? $(".index-video-play").removeClass("container-fullscreen") : $(".index-video-play").addClass("container-fullscreen")
						}
					}
				})
			}

			function d(e) {
				$(e).lazyload({
					"placeholder": "http://img.to8to.com/to8to_pc/common/statics/images/grey.gif",
					"effect": "fadeIn",
					"threshold": 200,
					"skip_invisible": !1
				})
			}

			function f(e) {
				$(".fabiao-form .fabiao-form-phone").val("");
				var t = '<div class="consult-popup-wrapper"><div class="popup-box-fail"><span class="popup-fail-tip">鎻愮ず</span><div class="popup-fail-content"><span class="popup-fail-icon"></span><span class="popup-fail-text">闈炲父鎶辨瓑,鎮ㄥ綋鍓嶇殑鍩庡競' + e.city + '灏氭湭寮€閫氳淇湇鍔★紝鏁鏈熷緟锛�</span></div><span class="popup-close"></span></div></div>';
				$("html").css({
					"overflow-y": "hidden",
					"height": "100%"
				}), 5 === e.status ? ($("body").append($(t)), $(".consult-popup-wrapper .popup-close").on("click", function() {
					doubleClick = !1, $(".consult-popup-wrapper").remove(), $("html").css({
						"overflow-y": "scroll",
						"height": "100%"
					})
				}), setTimeout(function() {
					doubleClick = !1, $(".consult-popup-wrapper").remove(), $("html").css({
						"overflow-y": "scroll",
						"height": "100%"
					})
				}, 6e3)) : ($("body").append($('<div class="consult-popup-wrapper"><div class="popup-box"><div class="popup-header"><span class="popup-header-success"><i class="popup-header-success-icon"></i>棰勭害鎴愬姛</span><span class="popup-header-tip">绋嶅悗鍦熷反鍏旂殑瑁呬慨绠″灏嗕細鑷寸數浣狅紝璇锋敞鎰忔帴鍚潵鐢�</span></div><div class="popup-content"><h5 class="popup-content-title">鍦熷反鍏斾笟涓讳笓浜� 涓夊瑁呬慨鍏徃鍏嶈垂涓婇棬鏈嶅姟</h5><ul class="popup-content-list"><li class="popup-content-item"><span class="popup-content-item-img popup-content-item-img-f"></span><h5 class="popup-item-title">1.鍏嶈垂閲忔埧</h5><span class="popup-item-description">娴嬮噺鍏ㄥ眿闈㈢Н銆佽酱绾裤€佸澧欏昂瀵革紝涓鸿淇璁°€佸埗瀹氶绠楀瀹氬熀纭€</span></li><li class="popup-content-item"><span class="popup-content-item-img popup-content-item-img-s"></span><h5 class="popup-item-title">2.鍏嶈垂璁捐</h5><span class="popup-item-description">鏍规嵁浣犵殑闇€姹傛敼閫犱綘鐨勬埛鍨嬶紝涓轰綘瀹氬埗骞抽潰甯冨眬鏂规</span></li><li class="popup-content-item"><span class="popup-content-item-img popup-content-item-img-t"></span><h5 class="popup-item-title">3.鍏嶈垂棰勭畻瑙勫垝</h5><span class="popup-item-description">涓轰綘鎻愪緵娑电洊200澶氶」鎸囨爣鐨勯绠楄鍒掕〃锛屽府浣犺交鏉句簡瑙ｅ競鍦鸿鎯�</span></li></ul></div><span class="popup-close"></span></div></div>')), $(".consult-popup-wrapper .popup-close").on("click", function() {
					doubleClick = !1, $(".consult-popup-wrapper").remove(), $("html").css({
						"overflow-y": "scroll",
						"height": "100%"
					})
				}))
			}

			function h() {
				(_ || window.pageYOffset || document.body.scrollTop) > $(".index-yzs").offset().top - $(window).height() && $(".yzs-detail-img").find("img").each(function() {
					var e = $(this).attr("data-original");
					$(this).attr("src", e)
				})
			}

			function v() {
				clearInterval(E), E = setInterval(function() {
					b(), $("img.lazy-zzx").trigger("tabChange")
				}, 5e3)
			}

			function b() {
				M++, M == $(".index-zzx-city li").length - 1 && (M = 0), $(".index-zzx-city li").eq(M).addClass("on").siblings("li").removeClass("on"), $(".index-zzx-company").hide().eq(M).show()
			}

			function m(e) {
				var t = new ScrollMagic.Controller;
				$(e).each(function(e, n) {
					new ScrollMagic.Scene({
						"triggerElement": n,
						"triggerHook": $(n).data("hook") || 1,
						"offset": $(n).data("offset") || 0,
						"reverse": !1
					}).setTween(n, $(n).data("duration") || 1, {
						"opacity": 1,
						"transform": "translate3d(0, 0, 0) scale3d(1, 1, 1)"
					}).setClassToggle(n, $(n).data("class")).addTo(t)
				})
			}

			function g(e, t) {
				var n, i;
				if(w(t) && $(e).val() && $(e).val().split(" ").length > 1) {
					if(O) return;
					O = !0, n = {
						"modeltype": 1,
						"autoPop": 2,
						"nowstep": 1,
						"phone": $(t).val(),
						"shen": $(e).val().split(" ")[0],
						"city": $(e).val().split(" ")[1],
						"ptag": $("input[name=btm-float-ptag]").val(),
						"onFirstStepEnd": function(e) {
							f(e), $(t).siblings(".label-number").removeClass("order-error").show().end().val(""), O = !1
						}
					}, i = new tender, i.init(n)
				}
			}

			function w(e) {
				var t = $(e),
					n = $.trim(t.val());
				return n.length <= 0 ? (t.siblings(".label-number").addClass("order-error").text("璇疯緭鍏ユ墜鏈哄彿鐮�").show(), !1) : !(!/^\d+$/.test(n) || !/^1[356789]\d{9}$/.test(n)) || (t.siblings(".label-number").addClass("order-error").text("璇疯緭鍏ユ纭殑鎵嬫満鍙风爜").show(), !1)
			}

			function y() {
				var e = $(".footer"),
					t = $(document),
					n = $(window).height(),
					i = (e.height(), t.height(), e.offset().top),
					r = $(".index-banner").height() + $(".header-nav-content ").height();
				_ > r ? ($(".btm-float").show(), _ + n > i && $(".btm-float").hide()) : $(".btm-float").hide()
			}
			var x, _, k = $(".index-ksj").offset().top,
				z = !1,
				O = !1;
			e(), $(window).scroll(function() {
				e()
			}), $("img.lazy-zzx").lazyload({
				"placeholder": "http://img.to8to.com/to8to_pc/common/statics/images/grey.gif",
				"effect": "fadeIn",
				"event": "tabChange"
			});
			var j = new Swiper(".design-swiper", {
				"slidesPerView": "auto",
				"loop": !0,
				"loopedSlides": 2,
				"simulateTouch": !1,
				"offsetPxBefore": $(window).width() < 1440 ? 510 : 725,
				"onInit": function(e) {
					e.swipeTo(3), s()
				}
			});
			$(".design-topic .arrow-left").click(function() {
				j.swipePrev(), $(".design-swiper").find(".swiper-slide").eq(0).hasClass("swiper-slide-active") && j.swipePrev(), s()
			}), $(".design-topic .arrow-right").click(function() {
				j.swipeNext(), s()
			}), c(), $(window).resize(function() {
				clearTimeout(e);
				var e = setTimeout(function() {
					c()
				}, 0)
			});
			var C, A;
			d("img.lazy");
			var S = n("12dl"),
				P = n(1),
				T = S.Cookie,
				I = T.get("to8to_townid");
			I && P.isGroundCity(I, function(e) {
				if(!e) {
					var t = $(".entries-item-icon.entries-item-icon-third").closest(".entries-item");
					$(t).find("a").attr("href", "http://mall.to8to.com/"), $(t).find(".entries-item-title").text("瀹跺眳鍟嗗煄"), $(t).find(".entries-item-tip").text("澶х墝鍟嗗搧锛屼韩鍙楀伐鍘傛姌鎵ｄ环"), $(".entries-item-icon.entries-item-icon-third").removeClass("entries-item-icon-third").addClass("entries-item-icon-five")
				}
			}), n.e("move_block").then(function(e) {
				n("EtqJ").initialize({
					"block": ".design-group .design-link",
					"innerCover": ".cover"
				})
			}.bind(null, n))["catch"](n.oe), n.e("district").then(function(e) {
				n("K0bO").initialize({
					"needDefault": !0,
					"styleDiffByScreen": !1,
					"boxScreenDiff": !1,
					"targetDom": "#btm_city",
					"parentDom": "#btm_citybox"
				})
			}.bind(null, n))["catch"](n.oe), $(".index-kgl-type").on("mouseenter", function() {
				$(this);
				$(this).find(".index-kgl-lower").hide().siblings(".index-kgl-upper").show(), $(this).siblings("div").removeClass("hover").find(".index-kgl-upper").attr("style", "").hide().siblings(".index-kgl-lower").attr("style", "").show(), $(this).addClass("hover")
			}).on("mouseleave", function() {
				$(this);
				$(this).find(".index-kgl-upper").hide().siblings(".index-kgl-lower").show(), $(this).removeClass("hover")
			}), h(), $(window).scroll(function() {
				_ = $(document).scrollTop(), h(), y()
			}), $(".index-yzs-portrait li").click(function() {
				$(".index-yzs-portrait li").addClass("gray"), $(this).removeClass("gray"), $(".index-yzs-review").hide(), $(".index-yzs-review").eq($(this).index()).show()
			}), n.e("common_tender_popup_bespoke").then(function(e) {
				var t = n("/8Sw"),
					i = "";
				$(".zzx-company-bespoke").on("click", function() {
					return $(this).hasClass("company-zx-phone") ? (i = $(this).parents(".zzx-company-list").attr("href"), window.open(i), !1) : (t.init({
						"pricePtag": "1_1_1_2105",
						"designPtag": "1_1_1_2087",
						"showIndex": 1,
						"automatic": !1
					}), !1)
				})
			}.bind(null, n))["catch"](n.oe);
			var M = 0,
				E = null;
			v(), $(".index-zzx-city li").click(function(e) {
				e.stopPropagation(), $(this).hasClass("zzx-others") && $("img.lazy-zzx").trigger("tabChange"), clearInterval(E), M = $(this).index() - 1, b(), v()
			}), $(".zzx-company-list").hover(function() {
				clearInterval(E)
			}, function() {
				M = $(this).parent(".index-zzx-company").index() - 1, b(), v()
			}), $("body").on("click", "click-count", function() {
				var e = $(this).attr("data-ptag");
				e.length > 0 && "undefined" != typeof clickStream && clickStream.getCvParams(e)
			}), m(".slow-emerge"), n.e("slide_and_popup").then(function(e) {
				var t = n("HyYs"),
					i = n("/8Sw");
				t.init(), i.init()
			}.bind(null, n))["catch"](n.oe), $(".btm-btn").on("click", function() {
				$("input[name=ptag]").val("1_4_3_1"), g("#btm_city", "#btm_number")
			}), $("#btm_number").on("keydown keyup change input", function() {
				$(this).val().length >= 1 ? ($(this).siblings(".label-number").hide().removeClass("order-error").text("璇疯緭鍏ユ墜鏈哄彿鐮�"), $(this).siblings(".btm-label-number").hide().removeClass("order-error").text("鎵嬫満鍙风爜")) : $(".label-number").show()
			}).on("blur", function() {
				w("#" + $(this).attr("id"))
			}).on("focus", function() {
				$(this).siblings(".label-number").hide().removeClass("order-error").text("璇疯緭鍏ユ墜鏈哄彿鐮�"), $(this).siblings(".btm-label-number").hide().removeClass("order-error").text("鎵嬫満鍙风爜")
			})
		})
	}
});