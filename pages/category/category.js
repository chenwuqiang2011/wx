// pages/category/category.js
var event = require('../../utils/event.js');
var app = getApp();
let isInitSelfShow = true;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: '原来的数据',
    helloMsg:'123'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    event.on('show', this, function(data){
      console.log(app)
      
      app.setData({
        msg: data
      });
      this.setData({
        msg: data
      });
      console.log(app)
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