console.log('加载成功');
require.config({
	paths:{
		"jquery": "jquery-1.11.3",
		"jquery-cookie": "jquery.cookie",
		"balance":"balance"
	},
	shim:{
		"jquery-cookie": ['jquery']
	}
})

require(['balance'],function(balance){
	balance.balance();
})