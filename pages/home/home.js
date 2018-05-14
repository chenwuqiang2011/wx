// pages/home/home.js
var app = getApp();
var baseUrl = app.data.baseUrl;
var QQMapWX = require('../libs/qqmap-wx-jssdk.js');
var qqmapsdk;
var ajaxCount = 0;
var imgUrl = 'http://www.cwq888.cn';
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
    qty: 5,
    address:'',
    height: '',
    hasmore: true,
    hasLocation: false,
    longitude: '',
    latitude: '',
    tab: ['健康', '职场', '情感', '育儿', '纠纷', '青葱', '全部', '其他'],
    tabs: [
      {
        category: '水果沙拉', 
        data: [
          { name: '西柚牛油果沙拉', imgSrc: imgUrl + '/image/sala/Grapefruit-salad.jpg', price: 38, sale: 20 },
          { name: '牛油果蔬菜沙拉', imgSrc: imgUrl + '/image/sala/Avocado-salad.jpg', price: 58, sale: 54 },
          { name: '干果沙拉', imgSrc: imgUrl + '/image/sala/Dried-fruit-salad.jpg', price: 38, sale: 44 },
          { name: '缤纷金枪鱼沙拉', imgSrc: imgUrl + '/image/sala/Colorful-tuna-salad.jpg', price: 58, sale: 21 },
          { name: '酸奶杂果沙拉', imgSrc: imgUrl + '/image/sala/Yogurt-mixed-fruit-salad.jpg', price: 38, sale: 22 },
          { name: '大虾沙拉', imgSrc: imgUrl + '/image/sala/prawn-salad.jpg', price: 38, sale: 65 }
        ]
      },
      {
        category: '小吃',
        data: [
          { name: '芝士虾球', imgSrc: imgUrl + '/image/snack/Cheese-Shrimp-balls.jpg', price: 20, sale: 28 },
          { name: '薯条', imgSrc: imgUrl + '/image/snack/french-fries.jpg', price: 21, sale: 74 },
          { name: '芝士焗土豆泥', imgSrc: imgUrl + '/image/snack/Baked-mashed-potatoes-with-cheese.jpg', price: 22, sale: 30 },
          { name: '土豆培根奶酪球', imgSrc: imgUrl + '/image/snack/Potato-bacon-cheesecake.jpg', price: 18, sale: 81 },
          { name: '金沙番茄', imgSrc: imgUrl + '/image/snack/Sands-of-tomatoes.jpg', price: 23, sale: 63 },
          { name: '香酥鱿鱼圈', imgSrc: imgUrl + '/image/snack/Spiced-squid-circle.jpg', price: 25, sale: 65 }
        ]
      },
      {
        category: '主菜',
        data: [
          { name: '意大利香草鸭腿', imgSrc: imgUrl + '/image/main-course/Italian-vanilla-duck-leg.jpg', price: 65, sale: 39 },
          { name: '迷迭香煎三文鱼薯条', imgSrc: imgUrl + '/image/main-course/Rosemary-Fried-salmon.jpg', price: 55, sale: 40 },
          { name: '牛排第二定律', imgSrc: imgUrl + '/image/main-course/The-second-law-of-steak.jpg', price: 48, sale: 41 },
          { name: '八角茴香火烧鲷鱼', imgSrc: imgUrl + '/image/main-course/The-star-anise-on-fire-snapper.jpg', price: 48, sale: 77 },
          { name: '奶油芝士焗龙虾', imgSrc: imgUrl + '/image/main-course/Roasted-lobster-with-cream-cheese.jpg', price: 50, sale: 43 },
          { name: '法式红酒烩鸡', imgSrc: imgUrl + '/image/main-course/Braised-chicken-with-French-wine.jpg', price: 45, sale: 38 }
        ]
      },
      {
        category: '汤品',
        data: [
          { name: '奶酪土豆浓汤 ', imgSrc: imgUrl + '/image/soup/Cheese-Potato-Soup.jpg', price: 40, sale: 54 },
          { name: '花椰菜奶酪汤', imgSrc: imgUrl + '/image/soup/Cauliflower-cheese-soup.jpg', price: 38, sale: 44 },
          { name: '海鲜浓汤', imgSrc: imgUrl + '/image/soup/Clam-chowder.jpg', price: 55, sale: 28 },
          { name: '奶油南瓜浓汤', imgSrc: imgUrl + '/image/soup/Cream-of-Mushroom-Soup.jpg', price: 48, sale: 32 },
          { name: '罗宋汤', imgSrc: imgUrl + '/image/soup/Borsch.jpg', price: 38, sale: 40 },
          { name: '马赛鱼汤', imgSrc: imgUrl + '/image/soup/bouillabaisse.jpg', price: 42, sale: 56 }
        ]
      },
      {
        category: '主食',
        data: [
          { name: '肉酱意大利面 ', imgSrc: imgUrl + '/image/staple-food/Spaghetti-bolognese.jpg', price: 40, sale: 75 },
          { name: '意大利海鲜烩饭', imgSrc: imgUrl + '/image/staple-food/seafood-risotto.jpg', price: 38, sale:68 },
          { name: '土豆丝培根披萨', imgSrc: imgUrl + '/image/staple-food/Bacon-pizza-wit-potato-chips.jpg', price: 45, sale: 88 },
          { name: '火腿沙拉意面', imgSrc: imgUrl + '/image/staple-food/Ham-salad-pasta.jpg', price: 42, sale: 62 },
          { name: '牛扒意大利面', imgSrc: imgUrl + '/image/staple-food/Steak-pasta.jpg', price: 38, sale: 70 },
          { name: '芝士焗饭', imgSrc: imgUrl + '/image/staple-food/Baked-rice-with-cheese.jpg', price: 42, sale: 66 }
        ]
      },
      {
        category: '甜品',
        data: [
          { name: '蔓越莓华芙饼 ', imgSrc: imgUrl + '/image/dessert/Cranberry-waffles.jpg', price: 25, sale: 58 },
          { name: '樱花和果子', imgSrc: imgUrl + '/image/dessert/Sakura-and-fruit.jpg', price: 30, sale: 35 },
          { name: '菠萝派', imgSrc: imgUrl + '/image/dessert/Strawberry-yogurt-Muffin.jpg', price: 22, sale: 45 },
          { name: '玫瑰苹果派', imgSrc: imgUrl + '/image/dessert/Rose-apple-pie.jpg', price: 20, sale: 62 },
          { name: '草莓酸奶松饼', imgSrc: imgUrl + '/image/dessert/Strawberry-yogurt-Muffin.jpg', price: 25, sale: 36 },
          { name: '抹茶豆腐布丁', imgSrc: imgUrl + '/image/dessert/Matcha-tofu-pudding.jpg', price: 18, sale: 34 }
        ]
      },
      {
        category: '饮品',
        data: [
          { name: '黑咖啡 ', imgSrc: imgUrl + '/image/drink/black-coffee.jpg', price: 38, sale: 62 },
          { name: '青柠苏打水', imgSrc: imgUrl + '/image/drink/Lime-soda-water.jpg', price: 20, sale: 83 },
          { name: '苹果玫瑰醋', imgSrc: imgUrl + '/image/drink/Apple-rose-vinegar.jpg', price: 28, sale: 61 },
          { name: '圣诞红酒', imgSrc: imgUrl + '/image/drink/Mulled-Wine.jpg', price: 34, sale: 42 },
          { name: '菠萝木瓜汁', imgSrc: imgUrl + '/image/drink/Pineapple-and-papaya-juice.jpg', price: 25, sale: 33 },
          { name: '香蕉咖啡奶茶', imgSrc: imgUrl + '/image/drink/Banana-coffee-milk-tea.jpg', price: 28, sale: 54 }
        ]
      }
    ],
    currentTab: 0,
    left: 0,
    items: ['水果沙拉', '西餐', '广东特色', '陕西风味', '新疆肥羊' ,'甜点'],
    imgUrls: [
      imgUrl + '/image/sala/Yogurt-mixed-fruit-salad.jpg',
      imgUrl + '/image/main-course/Roasted-lobster-with-cream-cheese.jpg',
      imgUrl + '/image/staple-food/Ham-salad-pasta.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular: true
  },

  //跳转商品详情页；
  navi: function(e){
    console.log(e);

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
          console.log(res);
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
        console.log('total',res);
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
        console.log(category);

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
        console.log(goodslist)
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
        console.log(res);
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
        console.log(res);
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
        console.log(res);
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
        console.log(res);
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
  changeNav: function(e){console.log(e)

    this.setData({
      currentTab: e.currentTarget.dataset.current
    });
  },
  changeTab: function(e){
    console.log(e.detail.current)
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
    console.log(e.detail)
    this.setData({
      duration: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {console.log(ajaxCount)
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
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log(123)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})