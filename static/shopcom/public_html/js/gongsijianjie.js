$(function(e){
	$.ajax( {
        url: "public_html/jianjie.html",
        type: "GET",
        dataType: "html",
        success: function(data){
        	console.log(data);
            var result = $(data);
	        $(".cont_r").html(result);
			console.log(result);
        }
	});
	$(".gongsi").on("click","li",function(e){
		console.log($(this).index());
	})
})