define(['jquery'],function($){
	function banner(){
		var aSpans = $('.banner_btn').find('span');
		var oDiv = $('.banner_img');
		var oDivs = oDiv.find('div');
	
		var iNow = 0;
		var timer = null;

		aSpans.click(function(){
			iNow = $(this).index();
			come();
		})
		// 切换图片
		function come(){
			aSpans.attr('class','');
			aSpans.eq(iNow).attr('class','active');

			oDiv.stop().animate({left: -1230 * iNow},1500,function(){
				if(iNow == oDivs.size() - 1){
					iNow = 0;
					oDiv.css('left',0);

				}
			});
		}
		function timerInner(){
			iNow++;
			come();
			if(iNow == oDivs.size() - 1){
				aSpans.eq(0).attr('class','active');
			}
		}
		timer = setInterval(timerInner,2000);

		$('#banner_mian').hover(function(){
			clearInterval(timer);
		},function(){
			timer = setInterval(timerInner,2000);
		})
	}
	return{
		banner:banner	
	}
})