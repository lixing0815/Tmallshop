define(['jquery','jquery-cookie'],function($){
	function index(){
		
		// 导航栏部分
		$.ajax({
				url:'data/indexbanner.json',
				success:function(data){
					$.cookie('goods');
					var titleArr = data.descs[0].title;
					var textArr = data.descs[0].text[0].title;
					var txtsArr = data.descs[0].text[0].txts[0].female;
					var icontArr = data.descs[0].icont;
					var imgArr = data.images[0];
					var brondArr =data.brand[0].span1;
					var brandArr = data.brand[0].img;
					var centerArr = data.center_img;
					var bannerArr = data.banner_icon;
					var goodsArr = data.goods_img;
					for(var i = 0;i < titleArr.length;i++){
						if(i == 0){
							$(`<li class = 'banner_li'><i class = 'iconfont'></i><a href = ''>${titleArr[i]}</a></li>`).appendTo($('#nav'));
						}else{
							$(`<li id = '1'><a href = ''>${titleArr[i]}</a></li>`).appendTo($('#nav'));
						}
						for(var j = 0;j < icontArr.length;j++){
						 	$(`banner_li .iconfont`).html('${}');
						}
					}
					
					$(`<div class = 'nav_cont'></div>`).appendTo($('#nav li'));
					for(var j = 0;j < textArr.length;j++){
						$(`<div class = 'lv2'><span>${textArr[j]}</span><ul></ul></div>`).appendTo($('.nav_cont'));
					}	
					for(var i = 0;i < txtsArr.length;i++){
						$(`<a href = ''>${txtsArr[i]}</a>`).appendTo($('.lv2 ul'));
						if(i % 2 == 0){
							$('.lv2 ul a').css('color','#000');
						}
					}
					for(var i = 0;i < imgArr.title.length;i++){
						$(`<ul class = 'cont_ul'><h3>${imgArr.title[i]}<a href = ''><span>${imgArr.span[i]}<span class = 'bg'>></span></span></a></h3><img src = "${imgArr.img[i]}" alt = ''></ul>`).appendTo('.female_shop');
					}
					for(var i = 0;i < brandArr.length;i++){
						$(`<li class = 'brand-item'><div class = 'brand-img'><img src = '${brandArr[i]}' alt = '图片加载失败'></div><a href = '' class = 'brand-mask'><div class = 'coupon'><span>${brondArr[i]}</span></div><div class = 'enter'><span>点击进入</span></div></a></li>'`).appendTo('.activity-area ul');
					}
					for(var i = 0;i < centerArr.length;i++){
						$(`<img src = '${centerArr[i]}'>`).appendTo('.center_main');
					}
					for(var i = 0;i < bannerArr.length;i++){
						$(`<div class = 'li-item-div'><i class = 'io'><img src = '${bannerArr[i]}'></i><span class = span4>${data.center_banner1[i]}</span><span class = 'span2'>${data.center_banner2[i]}</span><img class = 'ig' src = '${data.center_banner3[i]}'></div>`).appendTo('.center_banner');
					}
					for(var i = 0;i < goodsArr.length;i++){
						$(`<li id = '${data.id[i]}' class = 'clear'><a class = 'clear'><div class = 'goods-img'><img src = '${goodsArr[i]}'></div><div class = 'desc'>${data.goods_div1[i]}</div><div class = 'price'><span>￥</span>${data.goods_div2[i]}</div></a></li>`).appendTo('.center_content_1');
					}
				}
			})
			$('#nav').on('mouseover','li',function(){
				$(this).attr('class','banner_li').css('background','#fff')
				.siblings().attr('class','');

				$('.banner_li').find('div').css('display','block');
				$(this).find('a').css('color','pink');
			})
			$('#nav').on('mouseout','li',function(){
				$(this).css('background-color','rgba(0,0,0,0.30)');
				$(this).find('a').css('color','#fff');
				$('li').find('div').css('display','none');
				
			})
			$('#center .center_main .center_content_1').on('click','li',function(){
				var id = this.id;
				alert(id);
				var arr = eval(str);
				alert(id);
				$.cookie('id','[{id:' + id + '}]',{
					expires:7
				})
				
				var str = $.cookie("id");
				alert(str);
				console.log(str);
				window.location.href = 'html/shopmsg.html';
			})
		}
	return{
		index:index
	}
})