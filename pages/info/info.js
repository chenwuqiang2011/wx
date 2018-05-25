// pages/info/info.js
var app = getApp();
var template = require('../../template/template.js');

var show = false;
var item = {};
Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    item: {
      show: show
    },
    province: '请输入地址'
  },
  onLoad: function () {
    //动态设置页面标题。跟json配置功能一样；
    // wx.setNavigationBarTitle({
    //   title: '个人中心',
    //   success: function () {
    //     console.log('个人中心设置成功！')
    //   }
    // });

    //用户信息；
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e){
    var that = this;
    console.log(e)
    wx.getUserInfo({
      success: function (res) {
        console.log(res);
        app.globalData.userInfo = e.detail.userInfo
        that.setData({
          userInfo: e.detail.userInfo,
          hasUserInfo: true
        })
      },
      fail: function (err) {
        console.log(err);
        wx.showModal({
          title: '警告',
          content: '您拒绝了授权，部分功能体验将无法正常使用，请稍后再次点击授权!',
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            }
          }
        })
      }
    })
  },
  toCart: function(){
    wx.switchTab({
      url: '../cart/cart'
    })
  },
  toAddress: function(){
    wx.navigateTo({
      url: '../address/address'
    })
  },
  contact: function(){
    wx.makePhoneCall({
      phoneNumber: '18520521259',
      success: function(res){
        console.log(res);
      },
      fail: function(err){
        console.log(err);
      }
    })
  },
  /*
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (e) {
    var that = this;
    //请求数据
    template.updateAreaData(that, 0, e);
  },
  //点击选择城市按钮显示picker-view
  translate: function (e) {
    template.animationEvents(this, 0, true, 400);
  },
  //隐藏picker-view
  hiddenFloatView: function (e) {
    template.animationEvents(this, 200, false, 400);
    console.log(123, this.data.item)
    this.setData({
      province: item.provinces[item.value[0]].name,
      city: item.citys[item.value[1]].name,
      county: item.countys[item.value[2]].name
    });
  },
  //滑动事件
  bindChange: function (e) {
    template.updateAreaData(this, 1, e);
    item = this.data.item;

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
 
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