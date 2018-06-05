//app.js
App({
  data: {
    id: '',
    goods: [],
    goodslist: [],
    cart: [],
    qty: 0,
    // baseUrl: 'http://120.78.221.246:999/',
    // baseUrl: 'https://www.cwq888.cn/',
    
    // baseUrl: 'http://www.cwq888.cn:888/',
    // baseUrl: 'http://192.168.100.11:443/',
    // baseUrl: 'http://172.20.10.2:443/',
    baseUrl: 'http://192.168.1.186:443/',
    imgUrl: 'http://www.cwq888.cn/image/'
  },
  showLoading: function(){
    wx.showModal({
      title: '温馨提示：',
      content: '请先授权小程序后才能访问哦！',
      success: function(res){
        if(res.confirm){
          //跳转授权页面；
          wx.switchTab({
            url: '../info/info',
            success: function (res) {
              console.log('跳转登录页面')
            }
          })
          console.log('确定')
        } else {
          console.log('取消');
        }
        
      },
      fail: function(err){
        console.log('取消')
      }
    })
  },
  addCart: function(){
    //消息提醒；适用于购物车或者消息提醒；
    if(this.data.qty == 0){
      wx.removeTabBarBadge({
        index: 2
      });
    } else {
      wx.setTabBarBadge({
        index: 2,
        text: this.data.qty.toString()
      });
    }
  },
  //将购物车数据更新到后台；
  cart: function (username) {
    wx.request({
      method: 'POST',
      data: {
        username: username,
        cart: JSON.stringify(this.data.cart)
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded', // 'content-type': 'application/json'  默认值
        'signture': 'abc123'
      },
      url: this.data.baseUrl + 'cart',
      success: function (res) {
        console.log(res);
      }
    })
  },

  onLaunch: function () {
    console.log(11111111)
    
    
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {console.log(res)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        var code = res.code;
        if (code) {
          console.log('获取用户登录凭证：' + code);

          // --------- 发送凭证 ------------------
          wx.request({
            method: 'POST',
            url: this.data.baseUrl + 'onlogin',
            data: { code: code },
            header: {
              'content-type': 'application/x-www-form-urlencoded', // 'content-type': 'application/json'  默认值
              'data':'abc123'
            },
            success: function(res){
              console.log(res);
              //把sessionid写入本地储存；
              wx.setStorageSync('sessionid', res.data.sessionid);
            }
          })
          
        } else {
          console.log('获取用户登录态失败：' + res.errMsg);
        }
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {console.log(res)
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {console.log(res)
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              this.onShow();
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    });

    
  },
  globalData: {
    userInfo: null
  },
  addListener: function(callback){
    this.callback = callback;
  },
  setChangedData: function(data){
    this.data = data;
    if(this.callback != null){
      this.callback(data);
    }
  },
  onShow: function(){
    console.log('onshow', this.globalData.userInfo)
    //获取用户购物车信息；
    if (!this.globalData.userInfo) return false;
    //提示加载中；
    wx.showLoading({
      title: '加载中'
    })
    //获取用户购物车信息；
    var that = this;
    wx.request({
      method: 'POST',
      data: {
        username: this.globalData.userInfo.nickName
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 'content-type': 'application/json'  默认值
      },
      url: that.data.baseUrl + 'getCart',
      success: function (res) {
        //隐藏加载中；
        wx.hideLoading()
        if (res.data.status) {
          that.data.cart = JSON.parse(res.data.data[0].cart);
          //同时更新数量提示；
          var qty = 0;
          that.data.cart.map((item, idx) => {
            qty += item.qty;
            console.log(2222)
          });
          that.data.qty = qty;
          that.addCart();
        }
      },
      fail: function (err) {
        //去除加载提示；
        wx.hideLoading();
        //可提示重新发送请求；
        wx.showModal({
          title: '加载失败！',
          content: '是否要重新获取数据？',
          success: function (res) {
            if (res.confirm) {
              //重新发送请求；
              that.onShow();
            } else {
              console.log('取消')
            }
          }
        })
      }
    })
     
  }
})