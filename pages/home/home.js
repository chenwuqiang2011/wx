// pages/home/home.js
var app = getApp();
var baseUrl = app.data.baseUrl;
var imgUrl = app.data.imgUrl;
var QQMapWX = require('../libs/qqmap-wx-jssdk.js');
var qqmapsdk;
var ajaxCount = 0;
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    data: '原来的数据',
    nodes: [{
      
      name: 'h1',
      attrs: {
        class: 'div_class',
        style: 'line-height: 60px; color: red;'
      },
      children: [{
        type: 'text',
        text: 'Hello&nbsp;World!'
      }]
    }],
    drinks: [],
    fruite: [],
    rice: [],
    hots: [],
    goodslist: [],
    pageNo:1,
    hotPageNo: 1,
    qty: 10,
    address:'',
    height: '',
    hasmore: true,
    hasLocation: false,
    longitude: '',
    latitude: '',
    currentTab: 0,
    left: 0,
    items: ['CPU', '内存', '硬盘', '主板', '显卡', '显示器', '电源', '机箱', '鼠标', '键盘', '音响'],
    imgUrls: [
      imgUrl + 'mainboard/giga-b350.jpg',
      imgUrl + 'memory/ddr4-3200-16g.jpg',
      imgUrl + 'gpu/msi-1060.jpg',
      imgUrl + 'monitor/tcl-31.5.jpg'
    ],
    imgUrl: imgUrl,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular: true,
    showTopButton: false
  },

  //跳转商品详情页；
  navi: function(e){
    wx.navigateTo({
      url: '../goods/goods?id=' + e.target.dataset.id
    })
  },
  toInfo: function(){
    wx.switchTab({
      url: '../info/info'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    var that = this;
    app.addListener(function (changedData) {
      console.log(123, changedData)
      that.setData({
        data: changedData
      })
    });
    wx.getSystemInfo({
      success: (res) => {console.log(res.windowHeight)
        this.setData({
          height: res.windowHeight*2
        })
      }
    });
    //获取地址位置；
    this.getLocation()
    //加载商品；
    this.goodsLoading();
    //获取端口数据；
    wx.request({
      method: 'POST',
      url: baseUrl + 'queryProducts',
      data: { pageNo: 1, qty: 110 },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 'content-type': 'application/json'  默认值
      },
      success: function (res) {
        ajaxCount++;
        var category = [];
        var goodslist = [];

        //获取分类；
        res.data.data.map(item=>{
          category.push(item.category);
        });
        //分类去重；
        category = category.filter((item, idx, self)=>{
          return self.indexOf(item) == idx;
        });

        //商品分组；
        category.map((item, idx)=>{
          var obj = {};

          //商品分类
          obj.category = item;
          //类别对应商品数量
          obj.data = [];
          res.data.data.map(item2=>{
            if(item2.category == item){
              obj.data.push(item2);
            }
          });
          goodslist.push(obj);
        });
        app.goodslist = goodslist;
      }
    });
    
  },
  //默认获取经纬度
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
          }
        })
      }
    });
  },
  goodsLoading: function(){
    // 加载cpu商品
    var that = this;
    wx.request({
      method: 'POST',
      url:  baseUrl + 'queryProducts',
      data: { pageNo: this.data.pageNo, qty: this.data.qty },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 'content-type': 'application/json'  默认值
      },
      success: function (res) {
        ajaxCount++;
        that.setData({
          goodslist: res.data.data
        });
      }
    });

    //获取电源分类;
    wx.request({
      method: 'POST',
      url:  baseUrl + 'queryProducts',
      data: { pageNo: 12, qty: 8 },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 'content-type': 'application/json'  默认值
      },
      success: function (res) {
        ajaxCount++;
        that.setData({
          drinks: res.data.data
        });
      }
    });

    //获取硬盘分类;
    wx.request({
      method: 'POST',
      url:  baseUrl + 'queryProducts',
      data: { pageNo: 7, qty: 8 },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 'content-type': 'application/json'  默认值
      },
      success: function (res) {
        ajaxCount++;
        that.setData({
          fruite: res.data.data
        });
      }
    });
    
    //获取显卡分类;
    wx.request({
      method: 'POST',
      url:  baseUrl + 'queryProducts',
      data: { pageNo: 10, qty: 8 },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 'content-type': 'application/json'  默认值
      },
      success: function (res) {
        ajaxCount++;
        that.setData({
          rice: res.data.data
        });
      }
    });

    //获取人气推荐;
    wx.request({
      url: baseUrl + 'getHot',
      data: { pageNo: this.data.hotPageNo, qty: this.data.qty },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 'content-type': 'application/json'  默认值
      },
      success: function (res) {
        ajaxCount++;
        that.setData({
          hots: res.data.data
        });
      }
    });
  },
  //更新商品；
  refresh: function(){
    var num = this.data.pageNo;
    num++;
    if (num >= 5){
      num = 1;
    }
    this.setData({
      pageNo: num
    });
    this.goodsLoading();
  },
  //选择位置位置
  choseLocation: function (e) {
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
  changeNav: function(e){

    this.setData({
      currentTab: e.currentTarget.dataset.current
    });
  },
  changeTab: function(e){
    this.setData({
      currentTab: e.detail.current
    });
    if (this.data.currentTab >= 4){
      this.setData({
        left: 375
      });
    } else {
      this.setData({
        left: 0
      });
    }
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },

 
  //监听滚动显示回到顶部按钮；
  onPageScroll: function (e) {
    console.log(e)
    if (e.scrollTop >= 400) {
      this.setData({
        showTopButton: true
      })
    } else {
      this.setData({
        showTopButton: false
      })
    }
  },

  //回到顶部；
  toTop: function () {
    wx.pageScrollTo({
      scrollTop: 0
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    if (ajaxCount == 4) {console.log('complete')
      wx.hideLoading();
    }
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
    // wx.startPullDownRefresh()
    console.log('pullDown')
    wx.stopPullDownRefresh()
    app.onShow();
    this.onLoad();
    this.setData({
      hotPageNo: 1
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.lower();
  },
  // 上拉加载更多
  lower: function () {

    var that = this;
    if (this.data.hasmore) {
      wx.showLoading({
        title: '努力加载中！',
      });
      that.data.hasmore = false;
      this.data.hotPageNo++;
      console.log('加载更多！');
      wx.request({
        url: baseUrl + 'getHot',
        data: { pageNo: this.data.hotPageNo, qty: this.data.qty },
        header: {
          //         对于 GET 方法的数据，会将数据转换成 query string（encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...）
          //       对于 POST 方法且 header['content-type'] 为 application/ json 的数据，会对数据进行 JSON 序列化
          // 对于 POST 方法且 header['content-type'] 为 application/ x - www - form - urlencoded 的数据，会将数据转换成 query string （encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...）
          'content-type': 'application/x-www-form-urlencoded' // 'content-type': 'application/json'  默认值
        },
        success: function (res) {
          if(!res.data.status){
            wx.showToast({
              title: '没有更多商品了！',
              icon: 'none'
            })
            return false;
          }
          that.data.hasmore = true;
          console.log(res.data.data)
          ajaxCount++;
          console.log(res.data.status)
          setTimeout(function () {
            var arr = that.data.hots.concat(res.data.data);
            console.log()
            that.setData({
              hots: arr
            });
            console.log('加载完成！',arr);
            wx.hideLoading();
          }, 1000)
        }
      });
    } else {
      wx.showToast({
        title: '没有更多商品了！',
        icon: 'none'
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }

})