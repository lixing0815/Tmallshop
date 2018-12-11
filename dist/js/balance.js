define(['jquery','jquery-cookie'],function($){
	function balance(){
		$(function(){
			$.ajax({
				url:'../data/indexbanner.json',
				success:function(data){
					var str = $.cookie('goods');
					var arr = eval(str);
					// alert(arr);
					for(var i = 0;i < arr.length;i++){
						var num = arr[i].num;
						var id = arr[i].id;
						var single = data.goods_div2[id];
						var Zprice = single * num;
						$(`<ul class = 'good'>
								<li>
									<input type = 'radio'>
									<img style = 'width:80px;height:80px' class = 'good-img' src = '${data.goods_img[id]}'>
								</li>
								<li>
									${data.goods_div1[id]}
								</li>
								<li>
									<span>套餐类型：官方标配</span><br>
									<span>颜色分类：磨砂黑</span>
								</li>
								<li>
									<span>￥</span>
									<span class = 'single${i}'>${data.goods_div2[id]}</span>
								</li>
								<button id = 'minus${i}' class = 'btn${i}'></button>
								<input type = 'text' id = 'txt${i}' class = 'show' value = '${arr[i].num}'>
								<button id = 'add${i}' >+</button>
								<li>
									<span class = 'YG${i}'>${Zprice}</span>
								</li>
								<li>
									<a href = "#">移入收藏夹</a>
									<a href = '#'>删除</a>
								</li>`).appendTo($('.JScontent'));
					}
					var Add0 = $('#txt0').val();
					$('#add0').on('click',function(){
						Add0++;
						$('#txt0').val(Add0);
						var single1 = $('.single0').html();
						var price1 = Add0 * single1;
						parseFloat($('.YG0').html(price1));
						var showmin = $('.show').val();
						if(showmin > 1){
							$('.btn0').html('-');
						}
						HJ();
					})
					var Add1 = $('#txt1').val();
					$('#add1').on('click',function(){
						Add1++;
						$('#txt1').val(Add1);
						var single2 = $('.single1').html();
						var price2 = Add1 * single2;
						parseFloat($('.YG1').html(price2));
						var showmin = $('.show').val();
						if(showmin > 1){
							$('.btn1').html('-');
						}
						HJ();
					})
					var Add2 = $('#txt2').val();
					$('#add2').on('click',function(){
						Add2++;
						$('#txt2').val(Add2);
						var single3 = $('.single2').html();
						var price3 = Add2 * single3;
						parseFloat($('.YG2').html(price3));
						var showmin = $('.show').val();
						if(showmin > 1){
							$('.btn2').html('-');
						}
						HJ();
					})
					var Add0 = $('#txt0').val();
					$('#minus0').on('click',function(){
						Add0--;
						$('#txt0').val(Add0);
						var single1 = $('.single0').html();
						var price1 = Add0 * single1;
						parseFloat($('.YG0').html(price1));
						HJ();
					})
					var Add1 = $('#txt1').val();
					$('#minus1').on('click',function(){
						Add1--;
						$('#txt1').val(Add1);
						var single2 = $('.single1').html();
						var price2 = Add1 * single2;
						parseFloat($('.YG1').html(price2));
						HJ();
					})
					var Add2 = $('#txt2').val();
					$('#minus2').on('click',function(){
						Add2--;
						$('#txt2').val(Add2);
						var single3 = $('.single2').html();
						var price3 = Add2 * single3;
						parseFloat($('.YG2').html(price3));
						HJ();
					})
					var Add3 = $('#txt3').val();
					// alert(Add3);
					$('#add3').on('click',function(){
						Add3++;
						$('#txt3').val(Add3);
						var single3 = $('.single0').html();
						var price3 = Add3 * single3;
						parseFloat($('.YG3').html(price3));
						var showmin = $('.show').val();
						if(showmin > 1){
							$('.btn3').html('-');
						}
						HJ();
					})
					var Add4 = $('#txt4').val();
					$('#add4').on('click',function(){
						Add4++;
						$('#txt4').val(Add1);
						var single4 = $('.single4').html();
						var price4 = Add4 * single4;
						parseFloat($('.YG4').html(price4));
						var showmin = $('.show').val();
						if(showmin > 1){
							$('.btn4').html('-');
						}
						HJ();
					})
					var Add5 = $('#txt5').val();
					$('#add5').on('click',function(){
						Add5++;
						$('#txt5').val(Add2);
						var single5 = $('.single5').html();
						var price5 = Add5 * single5;
						parseFloat($('.YG5').html(price5));
						var showmin = $('.show').val();
						if(showmin > 1){
							$('.btn5').html('-');
						}
						HJ();
					})
					$(`<li>合计：￥<span class = 'final'></span>
							<button>结算</button></li>`).appendTo($('.paycash'));
					HJ();
					function HJ(){
						var YG1 = Number($('.YG0').html());
						var YG2 = Number($('.YG1').html());
						var YG3 = Number($('.YG2').html());
						var YG4 = Number($('.YG3').html());
						var final = YG1 + YG2 + YG3 + YG4;
						$('.final').html(final);
					}
				}

			})
		})
	}
	return{
		balance:balance
	}
})