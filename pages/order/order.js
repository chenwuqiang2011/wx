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
  toPaid: function(){
    wx.showToast({
      title: '敬请期待！',
      icon: 'none'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //根据传过来的识别码判断要查询的订单；
    switch(options.status){
      case 'unpaid':
        this.data.status = options.status;
        break;
      case 'undelivery':
        this.data.status = options.status;
        break; 
      case 'receiving':
        this.data.status = options.status;
        break;
      case 'unevaluate':
        this.data.status = options.status;
        break;
      default:
        this.data.status = 'getOrder';
    }
    this.setData({
      status: this.data.status
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
    var that = this;
    app.onShow();
    //加载提示；
    wx.showLoading({
      title: '加载中'
    });

    wx.request({
      method: 'POST',
      url: baseUrl + 'getOrder',
      data: {
        sessionid: wx.getStorageSync('sessionid'),
        status: that.data.status
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
          //去除加载提示；
          wx.hideLoading();
        };
        
      },
      fail: function(err){
        //去除加载提示；
        wx.hideLoading();
        //可提示重新发送请求；
        wx.showModal({
          title: '加载失败！',
          content: '是否要重新获取数据？',
          success: function(res){
            if(res.confirm){
              //重新发送请求；
              that.onShow();
            } else {
              console.log('取消')
            }
          }
        })
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