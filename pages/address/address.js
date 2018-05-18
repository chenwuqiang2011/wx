// pages/address/address.js
var app = getApp();
var baseUrl = app.data.baseUrl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //动态设置页面标题。
    // wx.setNavigationBarTitle({
    //   title: '收货地址列表',
    //   success: function () {
    //     console.log('收货地址列表')
    //   }
    // });
  },
  addAddress: function(){
    wx.navigateTo({
      url: '../add/add'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  aaa: function(){
    //CLIENT_ID：6A7549D25FC1A1219766AB3FB5F764DA
    //CLIENT_SECRET：23BF67F8AB9B6BB2E44AF5718D8D43E1
    //access_token: "c6494217-1a6a-4e39-8f67-bae948de7c25", token_type: "bearer", refresh_token: "c595728f-65f0-469e-9ed9-d284350d5bb6"
    // wx.request({
    //   method: 'POST',
    //   data: {
    //     "order_no": "6720571982282059544",
    //     "need_distribution_info": false,
    //     "need_pingTuan_info": false
    //   },
    //   url: 'https://dopen.weimob.com/api/1_0/wangpu/Order/FullInfoGetHighly?accesstoken=c6494217-1a6a-4e39-8f67-bae948de7c25',
    //   success: function (res) {
    //     console.log(res)
    //   }
    // })

    wx.request({
      method: 'POST',
      data: {
        "order_no": "6720571982282059544",
        "update_man": "chen",
        "new_delivery_amount": 10,
        "order_details": [
          {
            "order_detail_id": 2854966,
            "old_price": 18.9,
            "old_qty": 1,
            "new_price": 20,
            "new_qty": 1
          }
        ]
      },
      url: 'https://dopen.weimob.com/api/1_0/wangpu/Order/PriceUpdate?accesstoken=c6494217-1a6a-4e39-8f67-bae948de7c25',
      success: function (res) {
        console.log(res)
      }
    })
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    wx.request({
      method: 'POST',
      url: baseUrl + 'getAddress',
      data: { username: '13538966472'},
      header: {
        //  'content-type': 'application/json' // 默认值
        'content-type': 'application/x-www-form-urlencoded' // 'content-type': 'application/json'  默认值
      },
      dataType: 'json',
      success: function (res) {
        console.log(res.data.data[0].address)
        that.setData({
          addressList: JSON.parse(res.data.data[0].address)
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