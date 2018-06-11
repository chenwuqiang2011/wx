// pages/category/category.js
var event = require('../../utils/event.js');
var app = getApp();
var baseUrl = app.data.baseUrl;
var imgUrl = app.data.imgUrl;
var qty = app.data.qty.toString();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: true,
    msg: '原来的数据',
    helloMsg: '123',
    tabs: [],
    imgUrl: imgUrl,
    currentTab: 0,
    left: 0,
    vertical: true,
    item: {
      show: false,
      animationData: ''
    },
    keyWord: ''
  },
  translate: function(e){
    console.log(1234)
    this.animation(400, true, 0);
  },
  //动画显示隐藏函数；
  animation: function (duration, show, moveY) {
    console.log(111)
    var animation = wx.createAnimation({
      transformOrigin: "50% 50%",
      duration: duration,
      timingFunction: "ease",
      delay: 0
    });

    animation.translateY(moveY + 'vh').step()

    this.setData({
        item: {
          show: show,
          animationData: animation.export()
        }
    })
  },
  //隐藏
  hiddenFloatView: function (e) {
      this.animation(400, false, 200);
      this.setData({
        keyWord: e.detail.value
      })
  },
  keyWord: function(e){
    wx.request({
      method: 'POST',
      data: {
        keyWord: this.data.keyWord
      },
      url: baseUrl + 'keyWord',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 'content-type': 'application/json'  默认值
      },
      success: function(res){
        console.log(res);
        var data = JSON.stringify(res.data.data)
        wx.navigateTo({
          rediret: false,
          url: '../goodslist/goodslist?list=' + data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  //当前页面时，点击 tab 时触发;
  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },
  //改变商品排列显示样式；
  list: function(){
    this.setData({
      list:!this.data.list
    })
  },
  onLoad: function (options) {
    this.animation(0, false, 200);
    //动态设置页面标题。
    // wx.setNavigationBarTitle({
    //   title: '分类',
    //   success: function(){
    //     console.log('标题设置成功！')
    //   }
    // });
    //wx.showNavigationBarLoading()  // 在当前页面显示导航条加载动画。
    // wx.hideNavigationBarLoading() //隐藏导航条加载动画。

    // //消息提醒；适用于购物车或者消息提醒；
    // wx.setTabBarBadge({
    //   index: 2,
    //   text: qty
    // });
    
    //TabBar显示隐藏
    // wx.showTabBar({
    //   animation: true,
    //   success: function(){
    //     console.log('动画')
    //   }
    // }) 
    // wx.hideTabBar({
    //   animation: true,
    //   success: function(){
    //     console.log('动画')
    //   }
    // })
    //下方导航条：找到project.config.json中的"libVersion": "1.9.91",改为1.9.0以上； 这个api从1.9.0以上才支持
    //只能设置图标路径、文字，不能设置跳转路径；
    // wx.setTabBarItem({
    //   index: 3,
    //   pagePath: "pages/home/home",
    //   text: "主页",
    //   iconPath: "pages/info.png",
    //   selectedIconPath: "pages/info_on.png"
    // })

    //页面通信传递参数（通过event.js）；
    event.on('show', this, function(data){
      console.log(app)
      app.setData({
        msg: data
      });
      this.setData({
        msg: data
      });
      console.log(app)
    });

    this.setData({
      tabs: app.goodslist
    })
  },
  addCart: function (e) {
    if (!app.globalData.userInfo) {
      wx.showModal({
        title: '提示',
        content: '请先授权登录哦！',
        success: function(res){
          if(res.confirm){
            wx.switchTab({
              url: '../info/info'
            });
          }
        }
      });
      return false;
    };
    //要加入购物车的商品为；
    app.goodslist.map(item=>{
      item.data.map(item2=>{
        if(item2.ID == e.target.dataset.id){
          // app.data.cart.push(item2);

          if(app.data.cart.length > 0){
            //购物车有商品时，判断是否存在一样的商品；
            var flag = false;
            app.data.cart.map((item3, idx3) => {
              if (item3.ID == e.target.dataset.id) {
                flag = true;

                //有相同商品时，数量 +1
                item3.qty++;
                //把购物车更新到后端服务器
                app.cart(app.globalData.userInfo.nickName)

              } else if (!flag && idx3 == app.data.cart.length - 1) {
                //没有相同商品时，数量 为1
                item2.qty = 1;
                app.data.cart.push(item2);
                console.log(app.data.cart)
                //把购物车更新到后端服务器
                app.cart(app.globalData.userInfo.nickName)
              }
            })
          }else {
            //购物车没有商品时；
            item2.qty = 1;
            app.data.cart.push(item2);
            console.log(app.data.cart)
            //把购物车更新到后端服务器
            app.cart(app.globalData.userInfo.nickName);
          }
        }
      })
    });
    // this.setData({
    //   cart: app.data.cart
    // });

    //显示数量；
    var that = this;
    app.data.qty++;
    wx.showToast({
      title: '已添加到购物车',
      //image: '../image/img.png',  //自定义图标的本地路径，image 的优先级高于 icon 
      duration: 500,
      success: function(){
        app.addCart();
      }
    })
  },
  //将购物车数据更新到后台；
  cart: function(){
    wx.request({
      method: 'POST',
      data: {
        sessionid: wx.getStorageSync('sessionid'),
        cart: JSON.stringify(app.data.cart)
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 'content-type': 'application/json'  默认值
      },
      url: baseUrl + 'cart',
      success: function (res) {
        console.log(res);
      }
    })
  },

  toDetail: function(e){
    wx.navigateTo({
      rediret: true,
      url: '../goods/goods?id=' + e.target.dataset.id
    });
  },
  changeNav: function (e) {
    console.log(e)

    this.setData({
      currentTab: e.currentTarget.dataset.current
    });
  },
  changeTab: function (e) {
    console.log(e.detail.current)
    this.setData({
      currentTab: e.detail.current
    });
    if (this.data.currentTab >= 4) {
      this.setData({
        left: 375
      });
    } else {
      this.setData({
        left: 0
      });
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    //商品详情点击加入购物车时，没有及时更新数量提示；
    app.addCart();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    event.remove('show', this);
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('pullDown')
    wx.stopPullDownRefresh()
    app.onShow();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})