// pages/order/order.js
var app = getApp();
var baseUrl = app.data.baseUrl;
var imgUrl = app.data.imgUrl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orders: [],
    imgUrl: imgUrl
  },
  orderDetail: function(e){
    console.log(e)
    var id = e.currentTarget.dataset.id;
    this.data.orders.map((item, idx)=>{
      if(idx == id){
        var obj = JSON.stringify(item)
        wx.navigateTo({
          url: '../orderDetail/orderDetail?detail=' + obj
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
    var that = this;
    app.onShow();
    wx.request({
      method: 'POST',
      url: baseUrl + 'getOrder',
      data: {
        username: app.globalData.userInfo.nickName
      }, 
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 'content-type': 'application/json'  默认值
      },
      success: function(res){
        console.log(res);
        if(res.data.status){
          that.setData({
            orders: res.data.data
          })
        }
      }
    })
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