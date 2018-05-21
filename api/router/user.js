var bodyParser = require('body-parser');

//新引入的模块；
var url =require("url");
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var sql = require('../mysql/sql_user');

exports.register = function (app){
	//用户登录；
	app.post('/login', urlencodedParser, function(request, response){
		sql.login('user', request.body, function(data){
			response.send(data);
		})
	});
	//用户注册；
	app.post("/register", urlencodedParser, function(request, response){
		console.log('data', request.body)
		//请求数据库；
		sql.register("user", request.body, function(data){
			//返回数据到页面；
			console.log(6666)
			response.send(data);
		})
	});
	//新增用户地址；
	app.post("/address", urlencodedParser, function(request, response){
		//请求数据库；
		sql.address("user", request.body, function(data){
			response.send(data);
		})
	});
	//查询用户地址；
	app.post("/getAddress", urlencodedParser, function(request, response){
		//请求数据库；
		sql.getAddress("user", request.body, function(data){
			response.send(data);
		})
	});
	//更新用户地址；
	app.post("/updateAddress", urlencodedParser, function(request, response){
		//请求数据库；
		sql.updateAddress("user", request.body, function(data){
			response.send(data);
		})
	});
	//获取用户收藏的商品；
	app.post("/getCollected", urlencodedParser, function(request, response){
		//请求数据库；
		sql.getCollected("user", request.body, function(data){
			response.send(data);
		})
	});
	//更新用户收藏的商品；
	app.post("/updateCollected", urlencodedParser, function(request, response){
		//请求数据库；
		sql.updateCollected("user", request.body, function(data){
			response.send(data);
		})
	});
	//展示用户收藏的商品；
	app.post("/showCollected", urlencodedParser, function(request, response){
		//请求数据库；
		sql.showCollected("user", request.body, function(data){
			response.send(data);
		})
	});
	//用户下单；
	app.post('/order', urlencodedParser, function(request, response){
		sql.order('user', request.body, function(data){
			response.send(data);
		})
	});
	//添加用户购物车；
	app.post('/cart', urlencodedParser, function(request, response){
		sql.cart('user', request.body, function(data){
			response.send(data);
		})
	});
	//获取用户购物车；
	app.post('/getCart', urlencodedParser, function(request, response){
		sql.getCart('user', request.body, function(data){
			response.send(data);
		})
	})
}