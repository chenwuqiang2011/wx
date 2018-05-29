// pages/orderDetail/orderDetail.js
var app = getApp();
var baseUrl = app.data.baseUrl;
var imgUrl = app.data.imgUrl;
var moment = require('../../utils/moment.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {},
    imgUrl: imgUrl
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.detail)
    this.setData({
      detail: JSON.parse(options.detail)
    })
  },
  contact: function(){
    wx.makePhoneCall({
      phoneNumber: '18520521259'
    })
  },
  close: function(){
    var that = this;
    //关闭时间；
    var completeTime = moment().format('YYYY-MM-DD h:mm:ss')  //https://www.helloweba.net/javascript/271.html
    wx.request({
      method: 'POST',
      url: baseUrl + 'updateOrder',
      data: {
        username: app.globalData.userInfo.nickName,
        orderId: that.data.detail.orderId,
        completeTime: completeTime
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 'content-type': 'application/json'  默认值
      },
      success: function (res) {
        console.log(res);
        wx.navigateBack();
      }
    })
  },
  goToPaid: function(){
    wx.showModal({
      title: '提示',
      content: '敬请期待！'
    })
  },
  logistics: function(){
    wx.navigateTo({
      url: '../logistics/logistics?com=百世快递&No=71341656189044'
    })
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