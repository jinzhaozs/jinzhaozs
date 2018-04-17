function hide_menu() {
	is_hide && $(".naviList").hide()
}

function AjaxList(n, t) {
	var i = n + "?type=ajaxmodel";
	$("#" + t + "-ajax-more").html("正在加载中，请稍候...");
	$.ajax({
		url: i,
		type: "get",
		dataType: "html",
		success: function(n) {
			var i, r;
			$("." + t + "-load-more").remove();
			$("#" + t + "-this-Page").remove();
			i = n.substring(n.indexOf("<li"), n.lastIndexOf("<\/li>") + 5);
			$("#" + t + "").append(i);
			r = n.substring(n.lastIndexOf("<\/ul>") + 5);
			$("#" + t + "").after(r);
			$("img.lazy").lazyload({
				threshold: 200
			})
		}
	})
}

function InsertApply(n) {
	var r, u;
	if(IsEnter) return alert("您已申请成功,请勿重复提交!"), !1;
	$("#ApplyBtn").attr("disabled", !0);
	var t = $("#UserName").val(),
		i = $("#Mobile").val(),
		f = $("#ClassID").val();
	if(n != 1) {
		if(t == "") return alert("请填写您的称呼！"), $("#UserName").focus(), $("#ApplyBtn").attr("disabled", !1), !1
	} else t = "未知";
	if(r = /^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?|((\(\d{2,3}\))|(\d{3}\-))?(13|15|18|14)\d{9}$/, !r.test(i)) return alert("请填写您的联系方式！"), $("#Mobile").focus(), $("#ApplyBtn").attr("disabled", !1), !1;
	u = {
		Name: t,
		Mobile: i,
		ClassID: f
	};
	$.ajax({
		url: "http://activity.api.bzw315.com/api/Activity/Add",
		type: "POST",
		data: u,
		success: function(n) {
			n.success ? (IsEnter = !0, alert("申请成功！"), $("#UserName").val(""), $("#Mobile").val(""), $("#ApplyBtn").attr("disabled", !1)) : (alert("申请失败！"), $("#ApplyBtn").attr("disabled", !1))
		}
	})
}

function CheckContact() {
	var n = $("#Mobile").val();
	return /^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?|((\(\d{2,3}\))|(\d{3}\-))?(13|15|18|14)\d{9}$/.test(n) ? !0 : (alert("请填写真实的联系电话。"), $("#Mobile")[0].focus(), !1)
}

function setNumber(n, t) {
	var f = String(t),
		r = f.length,
		i, u, e;
	for(n.find("em").length > r && n.find("em:gt(" + (r - 1) + ")").remove(), n.find("b").remove(), i = 0; i < r; ++i) n.find("em").length < r && n.append("<em><\/em>"), u = n.find("em").eq(i), e = -40 * parseInt(f.charAt(i), 10), i < r - 1 && (r - i - 1) % 3 == 0 && $("<b><\/b>").insertAfter(u), u.animate({
		backgroundPosition: "0px " + e + "px"
	}, 1e3)
}

function toUtf8(n) {
	var i, r, u, t;
	for(i = "", u = n.length, r = 0; r < u; r++) t = n.charCodeAt(r), t >= 1 && t <= 127 ? i += n.charAt(r) : t > 2047 ? (i += String.fromCharCode(224 | t >> 12 & 15), i += String.fromCharCode(128 | t >> 6 & 63), i += String.fromCharCode(128 | t >> 0 & 63)) : (i += String.fromCharCode(192 | t >> 6 & 31), i += String.fromCharCode(128 | t >> 0 & 63));
	return i
}

function getDateDiff(n) {
	var r = 6e4,
		u = r * 60,
		i = u * 24,
		a = i * 15,
		c = i * 30,
		l = (new Date).getTime(),
		t = l - n;
	if(!(t < 0)) {
		var f = t / c,
			e = t / (7 * i),
			o = t / i,
			s = t / u,
			h = t / r;
		return result = f >= 1 ? "" + parseInt(f) + "月前" : e >= 1 ? "" + parseInt(e) + "周前" : o >= 1 ? "" + parseInt(o) + "天前" : s >= 1 ? "" + parseInt(s) + "小时前" : h >= 1 ? "" + parseInt(h) + "分钟前" : "刚刚"
	}
}

function getDateTimeStamp(n) {
	return Date.parse(n.replace(/-/gi, "/"))
}

function convertTime(n, t) {
	var i = t.split(":"),
		r = parseInt(i[0]),
		u = parseInt(i[1]),
		f = parseInt(i[2]);
	return n.setHours(r), n.setMinutes(u), n.setSeconds(f), Date.parse(n)
}
$(document).ready(function() {
	var n, t, i;
	$(".signIn_box").hover(function() {
		$(".signIn_box_bd").show();
		$(this).addClass("on")
	}, function() {
		$(".signIn_box_bd").hide();
		$(this).removeClass("on")
	});
	$("#account_weixin").click(function() {
		$(".weixin_signIn_box").fadeIn(0);
		$(".signIn_box_relative").fadeOut(0)
	});
	$("#other_ways").click(function() {
		$(".weixin_signIn_box").fadeOut(0);
		$(".signIn_box_relative").fadeIn(0)
	});
	$(".bzj_part_box").hover(function() {
		$(".bzj_part_open").fadeIn(10)
	}, function() {
		$(".bzj_part_open").fadeOut(10)
	});
	$(".kefu_part_box").hover(function() {
		$(".kefu_part_open").fadeIn(10)
	}, function() {
		$(".kefu_part_open").fadeOut(10)
	});
	$(".city_part_box").hover(function() {
		$(".city_part_open").fadeIn(10)
	}, function() {
		$(".city_part_open").fadeOut(10)
	});
	$(".weixin_part_box").hover(function() {
		$(".weixin_part_open").fadeIn(10)
	}, function() {
		$(".weixin_part_open").fadeOut(10)
	});
	$(".app_part_box").hover(function() {
		$(".app_part_open").fadeIn(10)
	}, function() {
		$(".app_part_open").fadeOut(10)
	});
	$(".whole_sidebar_fixed li").hover(function() {
		$(this).addClass("on")
	}, function() {
		$(this).removeClass("on")
	});
	$(".whole_sidebar_fixed li").hover(function() {
		$(this).css("color", "#d95636")
	}, function() {
		$(this).css("color", "#999")
	});
	$(function() {
		$("#back_to_top").hide();
		$(function() {
			$(window).scroll(function() {
				$(window).scrollTop() > 1e3 ? $("#back_to_top").fadeIn(300) : $("#back_to_top").fadeOut(300)
			});
			$("#back_to_top").click(function() {
				return $("body,html").animate({
					scrollTop: 0
				}, 500), !1
			})
		})
	});
	$(".searchSelect li").click(function() {
		$(".searchSelect li").removeClass("ssnow");
		$(this).addClass("ssnow")
	});
	$("#navig").mouseenter(function() {
		$(".naviOne .naviOnePanel").hide();
		$(".naviList").show()
	});
	$(".naviOne").mouseenter(function() {
		n = $(this).attr("id");
		$(".naviOne .naviOnePanel").hide();
		$("#" + n + " .naviOnePanel").show();
		$(".naviOne .naviOneLocal").css("background", "#FF3131");
		$("#" + n + " .localpic").removeClass("changes" + n);
		$("#" + n + " .localpic").addClass("change" + n);
		$("#" + n + " .naviOneLocal b").css("color", "#FF3131");
		$("#" + n + " .naviOneLocal span").css("color", "#FF3131");
		$("#" + n + " .naviOneLocal").css("background", "#FFF")
	});
	$(".naviOne").mouseleave(function() {
		$("#" + n + " .localpic").addClass("changes" + n);
		$("#" + n + " .localpic").removeClass("change" + n);
		$("#" + n + " .naviOneLocal b").css("color", "#FFF");
		$("#" + n + " .naviOneLocal span").css("color", "#FFF");
		$("#" + n + " .naviOneLocal").css("background", "#FF3131");
		$("#" + n + " .naviOneLocal b").css("color", "#FFF")
	});
	$(".naviList").mouseleave(function() {
		$(".naviOne .naviOnePanel").hide();
		hide_menu()
	});
	$(".select").mouseleave(function() {
		$(".naviOne .naviOnePanel").hide();
		hide_menu()
	});
	$(".downlist").mouseenter(function() {
		$(".downlist-ul").show()
	});
	$(".downlist").mouseleave(function() {
		$(".downlist-ul").hide()
	});
	$(".optionBox").click(function(n) {
		n.stopPropagation();
		$(this).find(".option").toggle();
		$(this).parent().siblings().find(".option").hide()
	});
	$(document).mousedown(function(n) {
		var t = $(n.target);
		$(".optionBox").is(":visible") && t.attr("class") != "option" && !t.parent(".option").length && $(".option").hide()
	});
	$(".option a").click(function() {
		var n = $(this).text();
		$(this).parent().siblings(".optionAll").text(n);
		$("#optionValue").val(n)
	});
	$(".cityBox").mouseenter(function() {
		$(".citytab").show()
	});
	$(".cityBox").mouseleave(function() {
		$(".citytab").hide()
	});
	$(".weixin_box").hover(function() {
		$(".weixin_open").show(10);
		$(this).addClass("on")
	}, function() {
		$(".weixin_open").hide(10);
		$(this).removeClass("on")
	});
	$(".weibo_box").hover(function() {
		$(".weibo_open").show(10);
		$(this).addClass("on")
	}, function() {
		$(".weibo_open").hide(10);
		$(this).removeClass("on")
	});
//	t = $.cookie("bzw315_single_username");
//	i = $.cookie("bzw315_single_userguid");
//	t !== null && t !== "" && t != undefined ? ($("#SSO_LoginShow").show(), $("#SSO_NoLogin").hide(), t = decodeURIComponent(t), $("#lblSSOUserName").html(t), $("#userguid").val(i)) : ($("#SSO_LoginShow").hide(), $("#SSO_NoLogin").show());
//	$("#SSOLoginOff").click(function() {
//		var n = "bzw315.com";
//		$.cookie("bzw315_single_user", "", {
//			path: "/",
//			expires: -1,
//			domain: n
//		});
//		$.cookie("bzw315_single_username", "", {
//			path: "/",
//			expires: -1,
//			domain: n
//		});
//		$.cookie("bzw315_single_userguid", "", {
//			path: "/",
//			expires: -1,
//			domain: n
//		});
//		$("#SSO_LoginShow").hide();
//		$("#SSO_NoLogin").show()
//	});
	$(".top .citytab").append($(".n-footer .top-city-site").html());
	$(".top .nav-box-nn").append($(".n-footer .top-nav"))
});
var IsEnter = !1;
(function(n) {
	n.fx.step.backgroundPosition = function(t) {
		function u(t) {
			var i = 0,
				r = 0;
			return n(t).css("backgroundPosition") ? (i = parseFloat(n(t).css("backgroundPosition").split(" ")[0]), r = parseFloat(n(t).css("backgroundPosition").split(" ")[1])) : (i = parseFloat(n(t).css("backgroundPositionX")), r = parseFloat(n(t).css("backgroundPositionY"))), [i, r]
		}
		typeof t.end == "string" && (t.start = u(t.elem), t.end = [parseFloat(t.end.split(" ")[0]), parseFloat(t.end.split(" ")[1])]);
		var i = (t.end[0] - t.start[0]) * t.pos + t.start[0] + t.unit,
			r = (t.end[1] - t.start[1]) * t.pos + t.start[1] + t.unit;
		t.elem.style.backgroundPosition = i + " " + r
	}
})(jQuery);
$(window).scroll(function() {
	$(window).scrollTop() + 500 >= $(document).height() - $(window).height() && (setNumber($("#E_Num"), $("#hid-enterprisescount").val()), setNumber($("#M_Num"), $("#hid-publicmoneynum").val()), setNumber($("#D_Num"), $("#hid-memberdesigners").val()))
});
$(function() {
	supportPlaceholder = "placeholder" in document.createElement("input");
	placeholder = function(n) {
		var t = n.attr("placeholder"),
			i = n.defaultValue;
		i || n.val(t).addClass("phcolor");
		n.focus(function() {
			n.val() == t && $(this).val("")
		});
		n.blur(function() {
			n.val() == "" && $(this).val(t).addClass("phcolor")
		});
		n.keydown(function() {
			$(this).removeClass("phcolor")
		})
	};
	supportPlaceholder || $("input").each(function() {
		text = $(this).attr("placeholder");
		$(this).attr("type") == "text" && placeholder($(this))
	})
});
$(function() {
	$(document).on("click", ".bzw_popup_01", function() {
		index_globe = layer.open({
			type: 1,
			title: !1,
			shadeClose: !0,
			closeBtn: !0,
			shade: .4,
			shift: 1,
			area: ["500px"],
			content: $("#login_dialogBox_01"),
			end: function() {
				$(".zhaobiao-bzwPopup01 input[type=text]").val("").removeClass("zhaobiao-focus");
				$(".zhaobiao-bzwPopup01 select").val("0")
			}
		})
	});
	$(document).on("click", ".bzw_popup_02", function() {
		index_globe = layer.open({
			type: 1,
			title: !1,
			shadeClose: !0,
			closeBtn: !0,
			shade: .4,
			shift: 1,
			area: ["500px"],
			content: $("#login_dialogBox_02"),
			end: function() {
				$(".zhaobiao-bzwPopup02 input[type=text]").val("").removeClass("zhaobiao-focus")
			}
		})
	});
	$(document).on("click", ".bzw_popup_03", function() {
		index_globe = layer.open({
			type: 1,
			title: !1,
			shadeClose: !0,
			closeBtn: !0,
			shade: .4,
			shift: 1,
			area: ["500px"],
			content: $("#login_dialogBox_03"),
			end: function() {
				$(".zhaobiao-bzwPopup03 input[type=text]").val("").removeClass("zhaobiao-focus");
				$(".zhaobiao-bzwPopup03 select").val("0")
			}
		})
	});
	$(document).on("click", ".bzw_popup_04", function() {
		index_globe = layer.open({
			type: 1,
			title: !1,
			shadeClose: !0,
			closeBtn: !0,
			shade: .4,
			shift: 1,
			area: ["500px"],
			content: $("#login_dialogBox_04"),
			end: function() {
				$(".zhaobiao-bzwPopup04 input[type=text]").val("").removeClass("zhaobiao-focus");
				$(".zhaobiao-bzwPopup04 select").val("0")
			}
		})
	});
//	$(document).on("click", ".bzw_popup_05", function() {
//		index_globe = layer.open({
//			type: 1,
//			title: 1,
//			shadeClose: [0.8, '#393D49'],
//			closeBtn: 1,
//			shade: .4,
//			shift: 1,
//			anim : 1,
////			area: ["500px"],
//			content: $("#login_dialogBox_05"),
////			end: function() {
////				$(".zhaobiao-bzwPopup05 input[type=text]").val("").removeClass("zhaobiao-focus")
////			}
//		})
//	});

//	var n = $.cookie("bzw315_pc_first_open_applyBudget");
//	(1) && (index_globe = layer.open({
//		type: 1,
//		title: !1,
//		shadeClose: !1,
//		closeBtn: !0,
//		shade: .8,
//		shift: 1,
//		area: ["980px", "450px"],
//		content: $("#login_dialogBox_08")
//	})
//	$.cookie("bzw315_pc_first_open_applyBudget", "1", {
//		expires: 1,
//		path: "/",
//		domain: "bzw315.com"
//	})
	);
//	btxcms.zhaobiao.submit(".zhaobiao-bzwPopup01", {
//		hid_classId: $("#hid-classId").val()
//	}, "");
//	btxcms.zhaobiao.submit(".zhaobiao-bzwPopup02", {
//		hid_classId: $("#hid-classId").val()
//	}, "");
//	btxcms.zhaobiao.submit(".zhaobiao-bzwPopup03", {
//		hid_classId: $("#hid-classId").val()
//	}, "");
//	btxcms.zhaobiao.submit(".zhaobiao-bzwPopup04", {
//		hid_classId: $("#hid-classId").val()
//	}, "");
//	btxcms.zhaobiao.submit(".zhaobiao-bzwPopup05", {
//		hid_classId: $("#hid-classId").val(),
//		input_remark: "zx_remark"
//	}, "");
//	btxcms.zhaobiao.submit(".zhaobiao-bzwPopup07", {
//		hid_classId: $("#hid-classId").val()
//	}, "");
//	$(".guaranteeuser").html($("#hid-guaranteeuser").val());
//	$(".saverate").html("立省" + $("#hid-saverate").val() + "%")
})