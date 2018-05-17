// pages/info/info.js
var template = require('../../template/template.js');

var show = false;
var item = {};
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: {
      show: show
    },
    province: '请输入地址'
  },
  onLoad: function () {
    wx.getUserInfo({
      success: function(res){
        console.log(res)
      }
    })
  },
  res: function(){
    //access_token: "d3a396f4-cf5c-4350-a716-72b92a33292b"
    // wx.request({
    //   method: 'POST',
    //   url: 'https://dopen.weimob.com/fuwu/b/oauth2/token?grant_type=refresh_token&client_id=6A7549D25FC1A1219766AB3FB5F764DA&client_secret=23BF67F8AB9B6BB2E44AF5718D8D43E1&refresh_token=c595728f-65f0-469e-9ed9-d284350d5bb6',
    //   success: function(res){
    //     console.log(123,res)
    //   }
    // })
    wx.request({
      url: 'https://dopen.weimob.com/api/1_0/wangpu/Image/Get?accesstoken=d3a396f4-cf5c-4350-a716-72b92a33292b',
      data: {
        spu_code: "43994067502tmall50"
      },
      success: function(res){
        console.log(res)
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
    // 调用接口
    // qqmapsdk.search({
    //   keyword: '酒店',
    //   success: function (res) {
    //     console.log(res);
    //   },
    //   fail: function (res) {
    //     console.log(res);
    //   },
    //   complete: function (res) {
    //     console.log(res);
    //   }
    // })
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