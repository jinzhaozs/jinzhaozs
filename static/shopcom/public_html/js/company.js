$(function(e){
	var clickLi = 0;
	
	$.ajax( {
        url: "public_html/company1.html",
        type: "GET",
        dataType: "html",
        success: function(data){
            var result = $(data);
	        $(".cont_r").html(result);
        }
	});
	$(".gongsi").on("click","li",function(e){
		$(this).addClass("on").siblings("li").removeClass("on");
		clickLi = $(this).index()+1;
		var clickUrl = "public_html/company"+clickLi+".html";
		$.ajax( {
        url: clickUrl,
        type: "GET",
        dataType: "html",
        success: function(data){
            var result = $(data);
	        $(".cont_r").html(result);
        }
	});
	})
})