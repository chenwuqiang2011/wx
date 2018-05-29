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
    qty: 10,
    address:'',
    height: '',
    hasmore: true,
    hasLocation: false,
    longitude: '',
    latitude: '',
    currentTab: 0,
    left: 0,
    items: ['水果沙拉', '西餐', '广东特色', '陕西风味', '新疆肥羊' ,'甜点'],
    imgUrls: [
      imgUrl + 'sala/Yogurt-mixed-fruit-salad.jpg',
      imgUrl + 'main-course/Roasted-lobster-with-cream-cheese.jpg',
      imgUrl + 'staple-food/Ham-salad-pasta.jpg'
    ],
    imgUrl: imgUrl,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular: true
  },

  //跳转商品详情页；
  navi: function(e){
    wx.navigateTo({
      url: '../goods/goods?id=' + e.target.dataset.id
    })
  },

  // 上拉加载更多
  lower: function(){
    var that = this;
    if(this.data.hasmore){
      that.data.hasmore = false;
      console.log('加载更多！');
      wx.request({
        method: 'POST',
        url:  baseUrl + 'queryProducts',
        data: { pageNo: this.data.pageNo, qty: this.data.qty },
        header: {
          //         对于 GET 方法的数据，会将数据转换成 query string（encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...）
          //       对于 POST 方法且 header['content-type'] 为 application/ json 的数据，会对数据进行 JSON 序列化
          // 对于 POST 方法且 header['content-type'] 为 application/ x - www - form - urlencoded 的数据，会将数据转换成 query string （encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...）
          'content-type': 'application/x-www-form-urlencoded' // 'content-type': 'application/json'  默认值
        },
        success: function (res) {
          
          ajaxCount++;
          setTimeout(function () {
            that.data.hasmore = true;
          }, 1000)
        }
      });
    }
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
    var that = this;
    // wx.showModal({
    //   title: '提示',
    //   content: '允许获取地理位置吗？',
    //   success: function (res) {
    //     if (res.confirm) {
    //       console.log('用户点击确定');
         

    //       that.getLocation();
    //     } else if (res.cancel) {
    //       console.log('用户点击取消');
    //     }
    //   }
    // });
    //加载商品；
    this.goodsLoading();
    //获取端口数据；
    wx.request({
      method: 'POST',
      url: baseUrl + 'queryProducts',
      data: { pageNo: 1, qty: 100 },
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
    // 加载商品
    var that = this;
    // wx.showLoading({
    //   title: '加载中',
    //   mask: false,
    //   success: function () {

    //   }
    // })

    // setTimeout(function () {
    //   wx.hideLoading();
    //   wx.showToast({
    //     title: '成功',
    //     icon: 'success',
    //     duration: 2000
    //   });
    // }, 2000);

    wx.request({
      method: 'POST',
      url:  baseUrl + 'queryProducts',
      data: { pageNo: this.data.pageNo, qty: this.data.qty },
      header: {
        //         对于 GET 方法的数据，会将数据转换成 query string（encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...）
        //       对于 POST 方法且 header['content-type'] 为 application/ json 的数据，会对数据进行 JSON 序列化
        // 对于 POST 方法且 header['content-type'] 为 application/ x - www - form - urlencoded 的数据，会将数据转换成 query string （encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...）
        'content-type': 'application/x-www-form-urlencoded' // 'content-type': 'application/json'  默认值
      },
      success: function (res) {
        ajaxCount++;
        that.setData({
          goodslist: res.data.data
        });
      }
    });

    //获取饮品分类;
    wx.request({
      method: 'POST',
      url:  baseUrl + 'queryProducts',
      data: { pageNo: 12, qty: 8 },
      header: {
        //         对于 GET 方法的数据，会将数据转换成 query string（encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...）
        //       对于 POST 方法且 header['content-type'] 为 application/ json 的数据，会对数据进行 JSON 序列化
        // 对于 POST 方法且 header['content-type'] 为 application/ x - www - form - urlencoded 的数据，会将数据转换成 query string （encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...）
        'content-type': 'application/x-www-form-urlencoded' // 'content-type': 'application/json'  默认值
      },
      success: function (res) {
        ajaxCount++;
        that.setData({
          drinks: res.data.data
        });
      }
    });

    //获取水果分类;
    wx.request({
      method: 'POST',
      url:  baseUrl + 'queryProducts',
      data: { pageNo: 10, qty: 8 },
      header: {
        //         对于 GET 方法的数据，会将数据转换成 query string（encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...）
        //       对于 POST 方法且 header['content-type'] 为 application/ json 的数据，会对数据进行 JSON 序列化
        // 对于 POST 方法且 header['content-type'] 为 application/ x - www - form - urlencoded 的数据，会将数据转换成 query string （encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...）
        'content-type': 'application/x-www-form-urlencoded' // 'content-type': 'application/json'  默认值
      },
      success: function (res) {
        ajaxCount++;
        that.setData({
          fruite: res.data.data
        });
      }
    });

    //获取五谷分类;
    wx.request({
      method: 'POST',
      url:  baseUrl + 'queryProducts',
      data: { pageNo: 7, qty: 8 },
      header: {
        //         对于 GET 方法的数据，会将数据转换成 query string（encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...）
        //       对于 POST 方法且 header['content-type'] 为 application/ json 的数据，会对数据进行 JSON 序列化
        // 对于 POST 方法且 header['content-type'] 为 application/ x - www - form - urlencoded 的数据，会将数据转换成 query string （encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...）
        'content-type': 'application/x-www-form-urlencoded' // 'content-type': 'application/json'  默认值
      },
      success: function (res) {
        ajaxCount++;
        that.setData({
          rice: res.data.data
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