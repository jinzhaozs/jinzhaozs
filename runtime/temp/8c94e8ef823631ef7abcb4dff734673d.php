<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:74:"D:\xampp\htdocs\jz\tp5.0\public/../application/admin\view\login\index.html";i:1522803771;}*/ ?>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> 
<meta http-equiv="Pragma" content="no-cache"> 
<meta http-equiv="Cache-Control" content="no-cache"> 
<meta http-equiv="Expires" content="0"> 
<title>后台登录</title> 
<link href="admin/login/css/login.css" type="text/css" rel="stylesheet"> 
</head> 
<body> 

<div class="login">
    <div class="message">今朝装饰-后台管理</div>
    <div id="darkbannerwrap"></div>
    
    <form action="<?php echo url('admin/login/login'); ?>" method="post">
		<input name="action" value="login" type="hidden">
		<input name="username" placeholder="用户名" required="" type="text">
		<hr class="hr15">
		<input name="password" placeholder="密码" required="" type="password">
		<hr class="hr15">
		<input value="登录" id="submit" style="width:100%;" type="button">
		<hr class="hr20">
		<!-- 帮助 <a onClick="alert('请联系管理员')">忘记密码</a> -->
	</form>
	
</div>

</body>
<script type="text/javascript" src="static/jquery/jquery-3.3.1.js"></script>
<script type="text/javascript">
	$(document).on("click","#submit",function(){
		alert(123);
	});
</script>
</html>