// pages/info/info.js
var QQMapWX = require('../libs/qqmap-wx-jssdk.js');
var qqmapsdk;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: '天河区',
    hasLocation: false,
    longitude: '',
    latitude: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    
  },
  loading: function(){
    wx.showLoading({
      title: '加载中',
      mask: true,
      success: function () {

      }
    })

    setTimeout(function () {
      wx.hideLoading();
      wx.showToast({
        title: '成功',
        icon: 'success',
        duration: 2000
      });
    }, 2000)
  },

  //获取经纬度
  getLocation: function (e) {
    // 实例化API核心类
    qqmapsdk = new QQMapWX({
      key: 'QZ5BZ-Q4IWG-BM4QE-IUUVT-W5O45-ETBC6'
    });
    //1、获取当前位置坐标
    var that = this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        //2、根据坐标获取当前位置名称，显示在顶部:腾讯地图逆地址解析
        qqmapsdk.reverseGeocoder({
          location: {
            latitude: res.latitude,
            longitude: res.longitude
          },
          success: function (addressRes) {
            var address = addressRes.result.address_component.district;
            console.log(addressRes)
            that.setData({
              address: address
            });
            // var latitude = res.latitude
            // var longitude = res.longitude  
            // wx.openLocation({
            //   latitude: latitude,
            //   longitude: longitude,
            //   scale: 28
            // })
          }
        })
      }
    });

    // var that = this
    // wx.getLocation({
    //   success: function (res) {
    //     // success
    //     console.log(res)
    //     that.setData({
    //       hasLocation: true,
    //       location: {
    //         longitude: res.longitude,
    //         latitude: res.latitude
    //       }
    //     })
    //   }
    // })
  },

  //根据经纬度在地图上显示
  openLocation: function (e) {
    console.log("openLocation" + e)
    var value = e.detail.value
    wx.openLocation({
      longitude: Number(value.longitude),
      latitude: Number(value.latitude)
    });
  },
  //选择位置位置
  chooseLocation: function (e) {
    console.log(e)
    // 实例化API核心类
    qqmapsdk = new QQMapWX({
      key: 'QZ5BZ-Q4IWG-BM4QE-IUUVT-W5O45-ETBC6'
    });
    //1、获取当前位置坐标
    var that = this;

    wx.chooseLocation({
      success: function (res) {
        // success
        qqmapsdk.reverseGeocoder({
          location: {
            latitude: res.latitude,
            longitude: res.longitude
          },
          success: function (addressRes) {
            var address = addressRes.result.address_component.district;
            console.log(addressRes)
            that.setData({
              address: address
            })
          }
        })
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
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