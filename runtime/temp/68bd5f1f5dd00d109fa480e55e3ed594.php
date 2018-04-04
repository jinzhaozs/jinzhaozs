<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:74:"D:\xampp\htdocs\jz\tp5.0\public/../application/index\view\index\index.html";i:1522738900;}*/ ?>
<html>
<head>
<title></title>
<style type="text/css">
body,table{ 
font-size:12px; 
} 
table{ 
table-layout:fixed; 
empty-cells:show; 
border-collapse: collapse; 
margin:0 auto; 
} 
td{ 
height:30px; 
} 
h1,h2,h3{ 
font-size:12px; 
margin:0; 
padding:0; 
} 
.table{ 
	margin-top: 5%;
	margin-bottom: 3%;
border:1px solid #cad9ea; 
color:#666; 
} 
.table th { 
background-repeat:repeat-x; 
height:30px; 
} 
.table td,.table th{ 
border:1px solid #cad9ea; 
padding:0 1em 0; 
} 
.table tr.alter{ 
background-color:#f5fafe; 
}
</style>
</head>
<body>
<button><a href="<?php echo url('/admin'); ?>">后台</a></button>
<table width="90%" class="table">
<tr>
	<th>
		id
	</th>
	<th>
		name
	</th>
	<th>
		text
	</th>
	<th>
		time
	</th>
	<th>
		操作
	</th>
</tr>
<?php if(is_array($res) || $res instanceof \think\Collection || $res instanceof \think\Paginator): if( count($res)==0 ) : echo "" ;else: foreach($res as $key=>$vores): ?>
<tr>
	<td>
		<?php echo $vores['id']; ?>
	</td>
	<td>
		<?php echo $vores['name']; ?>
	</td>
	<td>
		<?php echo $vores['text']; ?>
	</td>
	<td>
		<?php echo $vores['time']; ?>
	</td>
	<td>
		<a href="<?php echo url('index/index/edit',['id'=>$vores['id']]); ?>">修改</a> | <a href="<?php echo url('index/index/del',['id'=>$vores['id']]); ?>">删除</a>
	</td>
</tr>
<?php endforeach; endif; else: echo "" ;endif; ?>
</table>
<div>
	<button><a href="<?php echo url('index/Index/add'); ?>">添加</a></button>
</div>
</body>
</html>