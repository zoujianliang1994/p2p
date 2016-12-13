$(function(){
	$(".call").on("click",function(){
		$(".call").css("color","#1E79F1")
	})
	$("#el-top li a").hover(function(){
		$(this).css("color","#1E79F1");
	},function(){
		$(this).css("color","#fff");
	})
	$(".tupian").hover(function(){
		$(".el-img").css("display","block");
	},function(){
		$(".el-img").css("display","none");
	})
	$(".el-list a").hover(function(){
		$(this).css("color","#0099DD");
	},function(){
		$(this).css("color","#333333");
	})
//	$(".el-list a").mouseenter(function(){
//		$(this).css("color","#0099DD");
//	})
})
