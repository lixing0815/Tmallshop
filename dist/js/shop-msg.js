define(['jquery','jquery-cookie'],function($){
	function shop(){
		$(function(){
			$('#add').on('click',function(){
			/*ballMove.ballMove(this);

			var id = this.id;
			var first = $.cookie('goods') == null ? true : false;
			if(first){
				$.cookie('goods','[{id:' + id + ',num:1}]',{
					expires:7
				})
			}*/
			window.location.href = '../index.html';
		/*	$.ajax({
				url:'../data/',
				method:'post',
				success:function(data){
					alert(data);
				}
			})*/
			})
		})
	
	}
	return{
		shop:shop
	}
})