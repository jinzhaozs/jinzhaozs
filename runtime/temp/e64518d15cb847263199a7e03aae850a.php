<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:73:"D:\xampp\htdocs\jz\tp5.0\public/../application/index\view\index\edit.html";i:1522725523;}*/ ?>
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<form action="<?php echo url('index/index/doedit'); ?>" method="post">
	<input type="text" name="id" value="<?php echo $res['id']; ?>" style="display: none;">
	   name: <input type="text" name="name" value="<?php echo $res['name']; ?>"><br>
	    text: <input type="text" name="text"  value="<?php echo $res['text']; ?>"><br>
	  <input type="submit" value="提交">
	</form>
</body>
</html>