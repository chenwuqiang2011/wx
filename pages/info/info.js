// pages/info/info.js
var QQMapWX = require('../libs/qqmap-wx-jssdk.js');
var qqmapsdk;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [],
    startX: 0, //开始坐标
    startY: 0
  },
  onLoad: function () {
    for (var i = 0; i < 10; i++) {
      this.data.items.push({
        content: i + " 向左滑动删除哦,向左滑动删除哦,向左滑动删除哦,向左滑动删除哦,向左滑动删除哦",
        isTouchMove: false //默认全隐藏删除
      })
    }
    this.setData({
      items: this.data.items
    })
  },
  //手指触摸动作开始 记录起点X坐标
  touchstart: function (e) {
    //开始触摸时 重置所有删除
    this.data.items.forEach(function (v, i) {
      if (v.isTouchMove)//只操作为true的
        v.isTouchMove = false;
    })
    this.setData({
      startX: e.changedTouches[0].clientX,
      startY: e.changedTouches[0].clientY,
      items: this.data.items
    })
  },
  //滑动事件处理
  touchmove: function (e) {
    var that = this,
      index = e.currentTarget.dataset.index,//当前索引
      startX = that.data.startX,//开始X坐标
      startY = that.data.startY,//开始Y坐标
      touchMoveX = e.changedTouches[0].clientX,//滑动变化坐标
      touchMoveY = e.changedTouches[0].clientY,//滑动变化坐标
      //获取滑动角度
      angle = that.angle({ X: startX, Y: startY }, { X: touchMoveX, Y: touchMoveY });
    that.data.items.forEach(function (v, i) {
      v.isTouchMove = false
      //滑动超过30度角 return
      if (Math.abs(angle) > 30) return;
      if (i == index) {
        if (touchMoveX > startX) //右滑
          v.isTouchMove = false
        else //左滑
          v.isTouchMove = true
      }
    })
    //更新数据
    that.setData({
      items: that.data.items
    })
  },
  /**
   * 计算滑动角度
   * @param {Object} start 起点坐标
   * @param {Object} end 终点坐标
   */
  angle: function (start, end) {
    var _X = end.X - start.X,
      _Y = end.Y - start.Y
    //返回角度 /Math.atan()返回数字的反正切值
    return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
  },
  //删除事件
  del: function (e) {
    this.data.items.splice(e.currentTarget.dataset.index, 1)
    this.setData({
      items: this.data.items
    })
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