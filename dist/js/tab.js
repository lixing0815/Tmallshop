define(['jquery'], function($){
	function tab(){
		$.ajax({
			url:'../data/index.json',
			success:function(data){
				var descsArr = data.descs;
				for(i = 0;i < descsArr[0].text.length;i++){
					$(`<li><a href = '#'>${descsArr[0].text[i]}</a></li>`).appendTo($('#Hot'));
				}
				for(i = 0;i < descsArr[1].text.length;i++){
					$(`<li><a href = '#'>${descsArr[1].text[i]}</a></li>`).appendTo($('#Mark'));
				}
				for(i = 0;i < descsArr[2].text.length;i++){
					$(`<li><a href = '#'>${descsArr[2].text[i]}</a></li>`).appendTo($('#Help'));
				}
			}
		})
	}
	return{
		tab:tab
	}
})