// pages/goods/goods.js
var baseUrl = 'http://192.168.1.186:443/';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    goods: '',
    currentTab: 0,
    currentTab2: 0,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    console.log(id)
    var that = this;
    wx.request({
      method: 'POST',
      url: baseUrl +'getProduct',
      data: {id: id},
      header: {
        'content-type': 'application/x-www-form-urlencoded' //'application/json' // 默认值
      },
      success: function(res){
        console.log(res)
        that.setData({
          goods: res.data.data[0]
        });
      }
    })
  },

  changeNav: function (e) {
    this.setData({
      currentTab: e.target.dataset.current
    })
  },
  changeNav2: function (e) {
    this.setData({
      currentTab2: e.target.dataset.current
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