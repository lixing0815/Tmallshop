$(function(){
			$('#btn').on('click',function(){
				var str = `username=${$('#txt').val()}&password=${$("#pwd").val()}`;
				ajax({
					method:'post',
					url:'../php/login.php?type=login',
					data:str,
					success:function(data){
						 if(data == '用户名不存在'){
						 	alert(data);
						 }else if(data == '用户名或密码错误'){
						 	alert(data)
						 }else{
						 	alert('欢迎您' + "," + data);
						 	$.cookie('username',data,{expires:7});
						 	window.location.href = '../index.html';
						 }
					},
					error:function(msg){
						alert(msg);
					}
				})
			})
		})