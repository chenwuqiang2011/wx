//引入相应模块
var mysql = require("mysql");

//发送请求模块；
var request = require('request');
//创建redis连接服务对象
// var redis = require('redis');
// var client = redis.createClient();
// var redisServerIP = '127.0.0.1';
// var redisServerPort= '3306';

var http = require('http');
var qs = require('querystring'); 

//定义数据库
var sql = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"",
	database:"meixi"
});

//连接数据库
sql.connect();

module.exports = {
	register:function(table,data,callback){
		console.log('name', data.username)

		var condition = 'select * from '+ table +' where username = ?';
		// //查询数据库
		// sql.query( condition, [data.category], function(err, results, fields){
		// 	callback({status: true,data: results})
		// })

		//查询数据库
		sql.query(condition, [data.username], function(err,results,fields){
			console.log(results)
			if(results.length > 0){
				callback({status: false, message: '该手机号已注册！请重新注册！', data: null});
			} else {
				var  addSql = 'INSERT INTO user(userId, username, password) VALUES(0,?,?)';
				var  addSqlParams = [data.username, data.password];
				//增
				sql.query(addSql, addSqlParams, function(err,results,fields){
					callback({status: true, message: '恭喜您！注册成功！', data: results});
				});
			}
		});
	},
	login: function(table, data, callback){
		var username = data.username;
		var password = data.password;
		console.log(username, password)
		var condition =  'select * from '+ table +' where username = ? and password = ?';
		sql.query(condition, [username, password], function(err, results, fields){
			console.log(results)
			if(results.length > 0){
				callback({status: true, message: '登录成功！', data: data});
			} else {
				callback({status: false, message: '账户或者密码错误！', data: null});
			}

		})
	},

	/*------------------------------------------------------------*/ 

	//微信用户登录凭证；
	onlogin: function(table, data, callback){
		
		let code = data.code
		console.log('code', code)
		  request.get({
		    uri: 'https://api.weixin.qq.com/sns/jscode2session',
		    json: true,
		    qs: {
		      grant_type: 'authorization_code',
		      appid: 'wx38ec27a265686f26',
		      secret: '4e573f827483aa36444e41a08390864c',
		      js_code: code
		    }
		  }, (err, response, data) => {
		    if (response.statusCode === 200) {
		    	console.log(data)
		      	console.log("[openid]", data.openid)
		      	console.log("[session_key]", data.session_key)

			      //TODO: 生成一个唯一字符串sessionid作为键，将openid和session_key作为值，存入redis，超时时间设置为2小时
			      //伪代码: redisStore.set(sessionid, openid + session_key, 7200)
			      // redisStore.set(sessionid, openid + session_key, 7200);
				// client.hmset('sessionid', { username: 'kris', password: 'password' }, function(err) {
				// 	console.log(err)
				// });

		  //     	//读取JavaScript(JSON)对象
		  //     	client.hgetall('sessionid', function(err, object) {
		  //       	console.log(111111111111111,object)
		  //   	})

		      // res.json({ sessionid: sessionid })
		    } else {
		      console.log("[error]", err)
		      // res.json(err)
		    }
		  })
	},
	address: function(table, data, callback){
		console.log(data)
		var username = data.username;
		var address = [];
		address.push(JSON.parse(data.address));

		//先查询用户原来地址；
		var condition = 'select * from '+ table +' where username = ?';
		sql.query(condition, [username], function(err, results, fields){
			console.log('64', results);
			if(results.length <= 0) return false
			if(results[0].address == ''){console.log('没有')
				//当前用户没有地址时，
				address[0].checked = true;
				console.log('66',address)
			} else{
				console.log('68',results[0].address);
				var res = JSON.parse(results[0].address);
				res.map(item=>{
					//如果新增地址的默认地址勾选时，则其他地址不勾选；
					console.log('123', address[0].checked)
					if(address[0].checked){
						console.log('item.checked', item.checked)
						item.checked = false;
					}
					address.push(item);
					console.log('push',item)
				});
				
			}
			address = JSON.stringify(address);
			console.log('75', address);
			//用户新增地址；

			var modSql = 'UPDATE ' + table +' SET address = ? WHERE username = ?';
			
			sql.query(modSql, [address, username], function(err,results,fields){
				callback({status: true, message: '地址添加成功！', data: results});
			});
			
		})
	},
	getAddress: function(table, data, callback){
		var username = data.username;
		//先查询用户原来地址；
		var condition = 'select * from '+ table +' where username = ?';
		sql.query(condition, [username], function(err, results, fields){
			console.log('95', results, results[0].address);
			if(results.length > 0 && results[0].address) {
				callback({status: true, message: '查询到地址！', data: results});
			} else {
				callback({status: false, message: '该用户暂时没有收货地址！', data: null});
			}
			
		})
	},
	updateAddress: function(table, data, callback){
		var username = data.username;
		var address = data.address;

		//先查询用户原来地址；
		var modSql = 'UPDATE ' + table +' SET address = ? WHERE username = ?';
		sql.query(modSql, [address, username], function(err, results, fields){

			//查询用户地址；
			var condition = 'select * from '+ table +' where username = ?';
			sql.query(condition, [username], function(err, results, fields){
				callback({status: true, message: '地址更新成功！', data: results});
			})
		})
	},
	getCollected: function(table, data, callback){
		var username = data.username;
		var condition = 'select collected from '+ table +' where username = ?';
		sql.query(condition, [username], function(err, results, fields){
			console.log('collected', results[0].collected)
			
			if(results[0].collected == ''){
				callback({status: false, message: '没有查询到收藏的商品！', data: null});
			} else {
				callback({status: true, message: '查询到收藏的商品！', data: results});
			}
		})
	},
	updateCollected: function(table, data, callback){
		var username = data.username;
		var collected;
		console.log('data', data.collected)
		if(data.collected){
			collected = JSON.stringify(data.collected);
			console.log(12)
		} else{
			collected = '';
		console.log('134', data);
		}
		var condition = 'UPDATE ' + table +' SET collected = ? WHERE username = ?';


		sql.query(condition, [collected, username], function(err, results, fields){
			console.log('collected', results)
			callback({status: true, message: '收藏商品更新成功！', data: null});
			
		})
	},
	showCollected: function(table, data, callback){
		var username = data.username;
		var condition = 'select collected from ' + table + ' where username = ?';
		var condition2 = 'select * from products';
		var arr = [];
		sql.query(condition2, [username], function(err, results, fields){
			console.log('144',results.length);
			sql.query(condition, [username], function(err1, results2, fields2){
				console.log('146', results2);

				var collected;
				if(results2[0].collected == ''){
					collected = [];
				}else{
					collected = JSON.parse(results2[0].collected);
				}
				
				var res = results.map(item=>{
					collected.map(item2=>{
						if(item.ID == item2){
							arr.push(item);
						}
					})
				});

				console.log(arr);
				callback({status: true, message: '收藏商品展示成功！', data: arr})
			})
		})
	},
	//添加用户购物车；
	cart: function(table, data, callback){
		var username = data.username;
		var cart = data.cart;
		console.log('111111', data.cart)
		//用户新增地址；

		var modSql = 'UPDATE ' + table +' SET cart = ? WHERE username = ?';
		
		sql.query(modSql, [cart, username], function(err,results,fields){
			callback({status: true, message: '购物车添加成功！', data: results});
		});
	},
	//获取用户购物车
	getCart: function(table, data, callback){
		var username = data.username;
		//先查询用户原来地址；
		var condition = 'select * from '+ table +' where username = ?';
		sql.query(condition, [username], function(err, results, fields){
			
			if(results.length > 0 && results[0].cart) {
				callback({status: true, message: '查询购物车商品数量！', data: results});
			} else {
				callback({status: false, message: '该用户购物车暂时没有商品！', data: null});
			}
			
		})
	},
	order: function(table, data, callback){

		var username = data.username;
		//查询是否存在订单；
		var condition = 'select ordering from ' + table + ' where username = ?';
		var arr = [];
		var arr2 = [];
		sql.query(condition, [username], function(err, results, fields){

			//存在订单时，PUSH（）追加；
			if(results[0].ordering !== ''){
				JSON.parse(results[0].ordering).map(item=>{
					arr.push(item);
				})
				
			}

			//没有订单时
			// var  addSql = 'INSERT INTO user(userId, username, password) VALUES(0,?,?)';
			// var condition = 'UPDATE ' + table +' SET collected = ? WHERE username = ?';


			var condition2 = 'UPDATE ' + table + ' SET ordering = ? WHERE username = ?';
			
			arr.push(data);
			//查询相关商品；
			var condition3 = 'select * from products where ID = ?';
			arr.map(item=>{
				sql.query(condition3, [item.ID], function(err3, results3, fields3){
					arr2.push(1);
				});
			})
			console.log('arr,arr2', arr, arr2)
			arr = JSON.stringify(arr);

			sql.query(condition2, [arr, username], function(err2, results2, fields2){
				// console.log('results2', arr, results2);
				/*arr = JSON.parse(arr);
				var id, condition3, res;
				arr.map(item=>{
					id = item.ID;

					condition3 = 'select * from products where ID = ?';
					sql.query(condition3, [id], function(err3, results3, fields3){
						arr2.push(results3[0]);
						console.log(111, id, results3[0], arr2);
						
					})

				});
				arr = JSON.stringify(arr);
				console.log('arr2', arr2)*/
				callback({status: true, msg: '查询到订单', data: arr});
			})
		})
	}
}

