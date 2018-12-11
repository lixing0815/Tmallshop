<?php 
	header('content-type:text/html;charset="utf-8"');
	@$type = $_GET['type'];
	@$username = $_POST['username'];
	@$password = $_POST['password'];
	// $password = md5(md5($password));
	$link = mysql_connect('localhost','root','123456');
	if(!$link){
		echo '数据库链接失败';
		exit;
	}
	mysql_set_charset('utf8');
	mysql_select_db("tmall_login");
		if($type == 'login'){
			$sql = "select * from tm_users where username='{$username}'";
			$res = mysql_query($sql);
			$row = mysql_fetch_assoc($res);

			if(!$row){
				echo '用户名不存在';
			}else{
				$sql = "SELECT * FROM tm_users WHERE username='{$username}' AND password='{$password}'";
				$res = mysql_query($sql);
				$row = mysql_fetch_assoc($res);
				if($row){
					echo json_encode($res);
					/*if(isset($_SESSION['username'])){
						$_SESSION['username']=$username;
						//若session值存在则显示session值即用户名,且链接指向个人空间
					}else{
						echo 1;
					}*/
				}else{
					echo '用户名或密码错误';
				}
			}
		}else{
			echo 'error';
		}
	mysql_close($link);
?>