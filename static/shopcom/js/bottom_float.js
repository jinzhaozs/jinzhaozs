$(function(e) {
	function showBF() {
		$("#bottom-float").show();
		$("#bottom-open").hide();
	}

	function hideBF() {
		$("#bottom-float").hide();
		slideCloseBF();
	}

	function slideOpenBF() {
		$("#bottom-open").animate({
			"left": "-155px"
		}, 100, function() {
			$("#bottom-float").show().animate({
				"left": "0px"
			}, 400);
		});
	}

	function slideCloseBF() {
		var wH = $(window).width();
		$("#bottom-float").animate({
			"left": -wH + "px"
		}, 400, function() {
			$("#bottom-open").show().animate({
				"left": "0px"
			}, 300);
		});
	}
	$(".bottom-open").click(function(e) {
		console.log("gogogo");
		slideOpenBF()
	})

	$("#bottom-close").click(function() {
		slideCloseBF();
	});
	$("#bottom-open").click(function(e) {
		slideOpenBF();
	});
	showBF();
	//点击弹框
	$(".bzw_popup_05").click(function(e) {
		$(".zhezhao").show();
		$(".whole_popup_box").show();
	})
	$(".close_cha").click(function(e) {
		$(".whole_popup_box").hide();
		$(".zhezhao").hide();
	})
	var hhh = $(".whole_popup_box").height();
	$(".whole_popup_box").css({
		"margin-top": -hhh / 2 + 'px'
	})
	//   头部城市tab
	$(".change").mouseover(function(e) {
		$(".citytab").css({
			'display': 'block'
		});
	});
	$(".change").mouseout(function(e) {
		$(".citytab").css({
			'display': 'none'
		});
	})
})