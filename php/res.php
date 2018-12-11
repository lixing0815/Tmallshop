<?php
	header('content-type:text/html;charset="utf-8"');
	@$username = $_POST['username'];
	@$password = $_POST['password'];
	$link = mysql_connect('localhost','root','123456');
	if(!$link){
		echo '数据库链接失败';
		exit;
	}
	mysql_set_charset('utf8');
	mysql_select_db('tmall_login');
	$sql = "select * from tm_users where username='{$username}'";
	$res =mysql_query($sql);
	echo $res;
	$row = mysql_fetch_assoc($res);
	if($row){
		echo '用户名已存在';
		echo "<a href = '../html/register.html'>返回</a>";
	}else{
		$sql = "INSERT INTO tm_users(username,password) VALUES('{$username}','{$password}');";
		$res = mysql_query($sql);
		if($res){
			echo '<a href = "../html/login.html">去登陆</a>';
		}else{
			echo '注册失败';
			echo "<a href = 'register.html'>返回</a>";
		}
	}
	mysql_close($link);
?>