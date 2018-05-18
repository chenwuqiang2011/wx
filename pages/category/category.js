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
    msg: '原来的数据',
    helloMsg: '123',
    tabs: [],
    imgUrl: imgUrl,
    currentTab: 0,
    left: 0,
    vertical: true
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
  onLoad: function (options) {
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
              } else if (!flag && idx3 == app.data.cart.length - 1) {
                //没有相同商品时，数量 为1
                item2.qty = 1;
                app.data.cart.push(item2);
              }
            })
          }else {
            //购物车没有商品时；
            item2.qty = 1;
            app.data.cart.push(item2);
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
  toDetail: function(e){
    wx.request({
      method: 'POST',
      url: baseUrl + 'getProduct',
      data: { id: e.target.dataset.id },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 'content-type': 'application/json'  默认值
      },
      success: function (res) {
        wx.navigateTo({
          rediret: true,
          url: '../goods/goods?id=' + e.target.dataset.id
        })
      } 
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