var bodyParser = require('body-parser');

//新引入的模块；
var url =require("url");
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var sql = require('../mysql/sql_products');

exports.register = function (app){
	//test；
	app.post('/test', urlencodedParser, function(request, response){
		sql.test('products', request.body, function(data){
			response.send(data);
		})
	});
	//商品加载；
	app.post('/queryProducts', urlencodedParser, function(request, response){console.log(request.body)
		sql.queryProducts('products', request.body, function(data){
			response.send(data);
		})
	});

	//价格从低到高;
	app.post('/priceUp', urlencodedParser, function(request, response){
		sql.priceUp('products', request.body, function(data){
			response.send(data);
		})
	});

	//价格从高到低;
	app.post('/priceDown', urlencodedParser, function(request, response){
		sql.priceDown('products', request.body, function(data){
			response.send(data);
		})
	});

	//新品排序；
	app.post('/newProducts', urlencodedParser, function(request, response){
		sql.newProducts('products', request.body, function(data){
			response.send(data);
		})
	});

	//查询单个商品；
	app.post('/getProduct', urlencodedParser, function(request, response){
		sql.getProduct('products', request.body, function(data){
			console.log(data.data);
			response.send(data);
		})
	});
	//查询人气推荐；
	app.get('/getHot', function(request, response){
		sql.getHot('products', request.query, function(data){
			response.send(data);
		})
	});
	
	
}