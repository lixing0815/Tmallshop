console.log('加载成功');

//配置我们要引入的模块的路径了
require.config({
	paths: {
		"jquery": "jquery-1.11.3",
		"jquery-cookie": "jquery.cookie",
		"parabola": "parabola",
		"ballMove": 'ballMove',
		// 'banner':'banner',
		'shop':'shop'
	},
	shim: {
		//设置依赖关系
		"jquery-cookie": ['jquery']
	},
	/*
		定义不遵从AMD规范的js文件

	 */
	"parabola": {
		exports: "_"
	}
})


//引入模块调用

require(['shop'], function(shop){
	shop.shop();
})