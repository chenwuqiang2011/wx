// pages/acount/acount.js
var app = getApp();
var baseUrl = app.data.baseUrl;
var imgUrl = app.data.imgUrl;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressList: {},
    cart: [],
    qty: 0,
    price: 0,
    imgUrl: imgUrl
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取用户默认地址；
    var that = this;
    wx.request({
      method: 'POST',
      url: baseUrl + 'getAddress',
      data: { username: '13538966472' },
      header: {
        //  'content-type': 'application/json' // 默认值
        'content-type': 'application/x-www-form-urlencoded' // 'content-type': 'application/json'  默认值
      },
      dataType: 'json',
      success: function (res) {
        console.log(123, res)
        if (!res.data.status) return false
        console.log(res.data.data[0].address)
        that.setData({
          addressList: JSON.parse(res.data.data[0].address)
        })
      }
    })

    console.log(options)
    var cart = JSON.parse(options.cart);
    this.setData({
      cart: cart
    });
    
    //计算商品数量；
    cart.map((item, idx) => {
      //计算商品数量；
      this.data.qty += item.qty;
    //计算商品总价；
      this.data.price += item.qty * item.nowPrice;
    });

    this.setData({
      qty: this.data.qty,
      price: this.data.price.toFixed(2)
    })
  },
  toAddressList: function(){
    wx.navigateTo({
      url: '../address/address?flag=true'
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
   
  console.log(this.data.addressList)
    
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