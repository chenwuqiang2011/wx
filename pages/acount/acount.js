// pages/acount/acount.js
var app = getApp();
var baseUrl = app.data.baseUrl;
var imgUrl = app.data.imgUrl;
var template = require('../../template/template.js');


Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressList: [],
    cart: [],
    qty: 0,
    price: 0,
    imgUrl: imgUrl,
    item: {
      show: false,
      animationData: ''
    },
    msg: '',
    paid: '微信支付',
    express: '快递 免运费',
    flag: true  //判断点击的是配送方式 还是 支付方式；
  },
  translate: function(e){
    console.log(e)
    if(e.currentTarget.dataset.name == "paid"){
      this.setData({
        flag: true
      })
    } else {
      this.setData({
        flag: false
      })
    }
    console.log(333)

    this.animation(400, true, 0);
  },
  translate2: function(){

  },

  //隐藏
  hiddenFloatView: function(e){
    this.animation(400, false, 200);
    if(e.target.dataset.name){
      //把选择方式回传；
      console.log(e)
      this.setData({
        paid: e.target.dataset.name
      })
    }
  },
  //catchtap防止事件传播；
  no: function(){
    // console.log(123)
  },
  //动画显示隐藏函数；
  animation: function(duration, show, moveY){
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
  //提交订单；
  acount: function(){
    var obj = {};
    obj.addressList = this.data.addressList;
    obj.cart = this.data.cart;
    obj.express = this.data.express;
    obj.paid = this.data.paid;
    obj.msg = this.data.msg;
    obj.qty = this.data.qty;
    obj.price = this.data.price;
    console.log(obj)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.animation(0, false, 200);
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
        console.log(res.data.data[0].address);
        var addressList = JSON.parse(res.data.data[0].address);
        //只显示默认地址；
        addressList.map(item=>{
          if(item.checked){
            that.setData({
              addressList: [item]
            })
          }
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