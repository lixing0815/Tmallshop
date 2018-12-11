define(['ballMove', 'parabola','jquery','jquery-cookie'],function(ballMove,parabola,$){
	function shop(){
		$(function(){
			sc_car();
			$.ajax({
				url:'../data/indexbanner.json',
				success:function(data){
					var str = $.cookie("id");
					var arr = str[5];
					var id = arr;
					var price = data.goods_div2[id];
					$('.JG').html(price);
					$(`<img src= '${data.goods_img[id]}' alt = '图片加载失败'>`).appendTo($('.center-main1 .img-min'));
					$(`<img id = 'maximg' src= '${data.goods_img[id]}' alt = '图片加载失败'>`).appendTo($('#img-max'));
				}
			})
			// 放大镜
			$('.img-min').on('mouseover',function(){
				$('.move').css({
						'display':'block',
					});
				$('#img-max').css({
						'display':'block',
					});
			})
			$('.img-min').on('mouseout',function(){
				$('.move').css({
						'display':'none',
					});
				$('#img-max').css({
						'display':'none',
					});
			})
			$('.img-min').on('mousemove',function(e){
				var l = e.offsetX;
				var r = e.offsetY;
				var oleft = e.offsetX - parseInt($('.move').css('width')) / 2 + 'px';
				var otop = e.offsetY - parseInt($('.move').css('height')) / 2 + 'px';
				if(l <= 50){
					oleft = 0;
				}else if(l >= 350){
					oleft = 300;
				}
				if(r <= 50){
					otop = 0;
				}else if(r >= 350){
					otop = 300;
				}
				$('.move').css({
					'left':oleft,
					'top':otop
				})
				var L = parseInt(oleft) * 1.25 + 'px';
				var T = parseInt(otop) * 1.25 + 'px';
				$('#img-max #maximg').css({
					'left':'-' + L,
					'top':'-' + T
				})
			})
			$("#shopping-car").mouseenter(function(){
				$(this).stop().animate({
					right: 0
				});
				sc_msg();
			});
			$("#shopping-car").mouseleave(function(){
				$(this).stop().animate({
					right: -282
				})
			});
			// 购物车
			var Add = $('#text').val();

			$('#plus').on('click',function(){
				Add++;
				$('#text').val(Add);
			})
			$('#minus').on('click',function(){
				Add--;
				$('#text').val(Add);
			})
			//给加入购物车添加事件
			$('#add').on('click',function(){
				//抛物线动作
				ballMove.ballMove(this);
				//判断是否是第一次添加
				var cstr = $.cookie("id");
				var arr = cstr[5];
				var id = arr;
				var first = $.cookie('goods') == null ? true : false;
				if(first){
					$.cookie('goods','[{id:' + id + ',num:1}]',{
						expires: 7
					});
					console.log($.cookie('goods'));
				}else{
					var str = $.cookie('goods');
					var arr = eval(str);
					var same = false;
					var Num = Number($('#text').val());
					for(var i in arr){
						if(arr[i].id == id){
							arr[i].num = 	Number(arr[i].num) + Num;
							var cookieStr = JSON.stringify(arr);
							$.cookie('goods',cookieStr,{
								expires: 7
							});
							same = true;
							break;
						}
					}
					//没有相同的商品
					if(!same){
						var obj = {id:id,num:1};
						arr.push(obj);
						var cookieStr = JSON.stringify(arr);
						$.cookie('goods',cookieStr,{
							expires: 7
						});
					}
				}
				sc_car();
				// alert($.cookie('goods'));
				return false;
			})

		})
		//购物车数字
		function sc_car(){
			var sc_str = $.cookie('goods');
			console.log(sc_str);
			if(sc_str){
				var sc_arr = eval(sc_str);
				console.log(sc_arr);
				var sc_num = 0;
				for(var i in sc_arr){
					sc_num = Number(sc_arr[i].num) + sc_num;
				}
				$('.ballMove .num').html(sc_num);
			}
		}
		//已经存储在cookie数据进行加载
		function sc_msg(){
			$.ajax({
				url:'../data/indexbanner.json',
				success:function(data){
					$('.car-right').html('');
					var str = $.cookie('goods');
					// alert(str);
					var arr = eval(str);
					// alert(arr[0].id);  
					for(var i = 0;i < arr.length;i++){
						$(`<li>
							<div class = "sc_goodsPic">
								<img src="${data.goods_img[arr[i].id]}" alt="">
							</div>
							<div class = "sc_goodsTitle">
								<p>这是${data.goods_div1[arr[i].id]}</p>
							</div>
							<div class = "sc_goodsBtn">购买</div>
							<div class = "sc_goodsNum">商品数量:${arr[i].num}</div>
							
						</li>`).appendTo($(".car-right"));
					}
					$(`<a href = 'balance.html' class = 'JS'>去结算</a>`).appendTo($('.car-right'));
				}
			})
		}
	}
	return{
		shop:shop
	}
})