//app.js
App({
  data: {
    id: '',
    goods: [],
    goodslist: [],
    cart: [],
    qty: 0,

    baseUrl: 'http://112.74.33.109:443/',
    // baseUrl: 'http://192.168.1.186:443/',
    imgUrl: 'http://www.cwq888.cn/image/'
  },
  addCart: function(){
    //消息提醒；适用于购物车或者消息提醒；
    if(this.data.qty == 0){
      wx.removeTabBarBadge({
        index: 2
      });
    } else {
      console.log(this.data.qty)
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
        'content-type': 'application/x-www-form-urlencoded' // 'content-type': 'application/json'  默认值
      },
      url: this.data.baseUrl + 'cart',
      success: function (res) {
        console.log(res);
      }
    })
  },
  onLaunch: function () {
    this.addCart();
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
              'content-type': 'application/x-www-form-urlencoded' // 'content-type': 'application/json'  默认值
            },
            success: function(res){
              console.log(res)
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

    //获取用户购物车信息；
    var that = this;
    wx.request({
      method: 'POST',
      data: {
        username: '13538966472'
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 'content-type': 'application/json'  默认值
      },
      url: this.data.baseUrl + 'getCart',
      success: function (res) {
        console.log(res)
        if(res.data.status){
          console.log(res.data.data[0].cart)
          that.data.cart = JSON.parse(res.data.data[0].cart);
          //同时更新数量提示；
          that.data.cart.map((item, idx)=>{
            that.data.qty += item.qty;
            that.addCart();
          })
        }
        
      }
    })
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
  }
})