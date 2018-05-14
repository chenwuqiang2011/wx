// pages/category/category.js
var event = require('../../utils/event.js');
var app = getApp();
var baseUrl = app.data.baseUrl;
var qty = app.data.qty.toString();
var imgUrl = 'http://www.cwq888.cn/image/';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: '原来的数据',
    helloMsg: '123',
    tab: [
      {
        category: '水果沙拉',
        data: [
          { name: '西柚牛油果沙拉', imgSrc: baseUrl + '/image/sala/Grapefruit-salad.jpg', price: 38, sale: 20 },
          { name: '牛油果蔬菜沙拉', imgSrc: baseUrl + '/image/sala/Avocado-salad.jpg', price: 58, sale: 54 },
          { name: '干果沙拉', imgSrc: baseUrl + '/image/sala/Dried-fruit-salad.jpg', price: 38, sale: 44 },
          { name: '缤纷金枪鱼沙拉', imgSrc: baseUrl + '/image/sala/Colorful-tuna-salad.jpg', price: 58, sale: 21 },
          { name: '酸奶杂果沙拉', imgSrc: baseUrl + '/image/sala/Yogurt-mixed-fruit-salad.jpg', price: 38, sale: 22 },
          { name: '大虾沙拉', imgSrc: baseUrl + '/image/sala/prawn-salad.jpg', price: 38, sale: 65 }
        ]
      },
      {
        category: '小吃',
        data: [
          { name: '芝士虾球', imgSrc: baseUrl + '/image/snack/Cheese-Shrimp-balls.jpg', price: 20, sale: 28 },
          { name: '薯条', imgSrc: baseUrl + '/image/snack/french-fries.jpg', price: 21, sale: 74 },
          { name: '芝士焗土豆泥', imgSrc: baseUrl + '/image/snack/Baked-mashed-potatoes-with-cheese.jpg', price: 22, sale: 30 },
          { name: '土豆培根奶酪球', imgSrc: baseUrl + '/image/snack/Potato-bacon-cheesecake.jpg', price: 18, sale: 81 },
          { name: '金沙番茄', imgSrc: baseUrl + '/image/snack/Sands-of-tomatoes.jpg', price: 23, sale: 63 },
          { name: '香酥鱿鱼圈', imgSrc: baseUrl + '/image/snack/Spiced-squid-circle.jpg', price: 25, sale: 65 }
        ]
      },
      {
        category: '主菜',
        data: [
          { name: '意大利香草鸭腿', imgSrc: baseUrl + '/image/main-course/Italian-vanilla-duck-leg.jpg', price: 65, sale: 39 },
          { name: '迷迭香煎三文鱼薯条', imgSrc: baseUrl + '/image/main-course/Rosemary-Fried-salmon.jpg', price: 55, sale: 40 },
          { name: '牛排第二定律', imgSrc: baseUrl + '/image/main-course/The-second-law-of-steak.jpg', price: 48, sale: 41 },
          { name: '八角茴香火烧鲷鱼', imgSrc: baseUrl + '/image/main-course/The-star-anise-on-fire-snapper.jpg', price: 48, sale: 77 },
          { name: '奶油芝士焗龙虾', imgSrc: baseUrl + '/image/main-course/Roasted-lobster-with-cream-cheese.jpg', price: 50, sale: 43 },
          { name: '法式红酒烩鸡', imgSrc: baseUrl + '/image/main-course/Braised-chicken-with-French-wine.jpg', price: 45, sale: 38 }
        ]
      },
      {
        category: '汤品',
        data: [
          { name: '奶酪土豆浓汤 ', imgSrc: baseUrl + '/image/soup/Cheese-Potato-Soup.jpg', price: 40, sale: 54 },
          { name: '花椰菜奶酪汤', imgSrc: baseUrl + '/image/soup/Cauliflower-cheese-soup.jpg', price: 38, sale: 44 },
          { name: '海鲜浓汤', imgSrc: baseUrl + '/image/soup/Clam-chowder.jpg', price: 55, sale: 28 },
          { name: '奶油南瓜浓汤', imgSrc: baseUrl + '/image/soup/Cream-of-Mushroom-Soup.jpg', price: 48, sale: 32 },
          { name: '罗宋汤', imgSrc: baseUrl + '/image/soup/Borsch.jpg', price: 38, sale: 40 },
          { name: '马赛鱼汤', imgSrc: baseUrl + '/image/soup/bouillabaisse.jpg', price: 42, sale: 56 }
        ]
      },
      {
        category: '主食',
        data: [
          { name: '肉酱意大利面 ', imgSrc: baseUrl + '/image/staple-food/Spaghetti-bolognese.jpg', price: 40, sale: 75 },
          { name: '意大利海鲜烩饭', imgSrc: baseUrl + '/image/staple-food/seafood-risotto.jpg', price: 38, sale: 68 },
          { name: '土豆丝培根披萨', imgSrc: baseUrl + '/image/staple-food/Bacon-pizza-wit-potato-chips.jpg', price: 45, sale: 88 },
          { name: '火腿沙拉意面', imgSrc: baseUrl + '/image/staple-food/Ham-salad-pasta.jpg', price: 42, sale: 62 },
          { name: '牛扒意大利面', imgSrc: baseUrl + '/image/staple-food/Steak-pasta.jpg', price: 38, sale: 70 },
          { name: '芝士焗饭', imgSrc: baseUrl + '/image/staple-food/Baked-rice-with-cheese.jpg', price: 42, sale: 66 }
        ]
      },
      {
        category: '甜品',
        data: [
          { name: '蔓越莓华芙饼 ', imgSrc: baseUrl + '/image/dessert/Cranberry-waffles.jpg', price: 25, sale: 58 },
          { name: '樱花和果子', imgSrc: baseUrl + '/image/dessert/Sakura-and-fruit.jpg', price: 30, sale: 35 },
          { name: '菠萝派', imgSrc: baseUrl + '/image/dessert/Strawberry-yogurt-Muffin.jpg', price: 22, sale: 45 },
          { name: '玫瑰苹果派', imgSrc: baseUrl + '/image/dessert/Rose-apple-pie.jpg', price: 20, sale: 62 },
          { name: '草莓酸奶松饼', imgSrc: baseUrl + '/image/dessert/Strawberry-yogurt-Muffin.jpg', price: 25, sale: 36 },
          { name: '抹茶豆腐布丁', imgSrc: baseUrl + '/image/dessert/Matcha-tofu-pudding.jpg', price: 18, sale: 34 }
        ]
      },
      {
        category: '饮品',
        data: [
          { name: '黑咖啡 ', imgSrc: baseUrl + '/image/drink/black-coffee.jpg', price: 38, sale: 62 },
          { name: '青柠苏打水', imgSrc: baseUrl + '/image/drink/Lime-soda-water.jpg', price: 20, sale: 83 },
          { name: '苹果玫瑰醋', imgSrc: baseUrl + '/image/drink/Apple-rose-vinegar.jpg', price: 28, sale: 61 },
          { name: '圣诞红酒', imgSrc: baseUrl + '/image/drink/Mulled-Wine.jpg', price: 34, sale: 42 },
          { name: '菠萝木瓜汁', imgSrc: baseUrl + '/image/drink/Pineapple-and-papaya-juice.jpg', price: 25, sale: 33 },
          { name: '香蕉咖啡奶茶', imgSrc: baseUrl + '/image/drink/Banana-coffee-milk-tea.jpg', price: 28, sale: 54 }
        ]
      }
    ],
    tabs: [],
    imgUrl: imgUrl,
    currentTab: 0,
    left: 0,
    vertical: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  //当前页面时，点击 tab 时触发;
  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },
  onLoad: function (options) {
    //动态设置页面标题。
    wx.setNavigationBarTitle({
      title: '分类',
      success: function(){
        console.log('标题设置成功！')
      }
    });
    //wx.showNavigationBarLoading()  // 在当前页面显示导航条加载动画。
    // wx.hideNavigationBarLoading() //隐藏导航条加载动画。

    // //消息提醒；适用于购物车或者消息提醒；
    // wx.setTabBarBadge({
    //   index: 2,
    //   text: qty
    // });
    
    //TabBar显示隐藏
    // wx.showTabBar({
    //   animation: true,
    //   success: function(){
    //     console.log('动画')
    //   }
    // }) 
    // wx.hideTabBar({
    //   animation: true,
    //   success: function(){
    //     console.log('动画')
    //   }
    // })
    //下方导航条：找到project.config.json中的"libVersion": "1.9.91",改为1.9.0以上； 这个api从1.9.0以上才支持
    //只能设置图标路径、文字，不能设置跳转路径；
    // wx.setTabBarItem({
    //   index: 3,
    //   pagePath: "pages/home/home",
    //   text: "主页",
    //   iconPath: "pages/info.png",
    //   selectedIconPath: "pages/info_on.png"
    // })

    //页面通信传递参数（通过event.js）；
    event.on('show', this, function(data){
      console.log(app)
      app.setData({
        msg: data
      });
      this.setData({
        msg: data
      });
      console.log(app)
    });

    this.setData({
      tabs: app.goodslist
    })
  },
  addCart: function (e) {
    console.log(e.target.dataset.id)
    //要加入购物车的商品为；
    app.goodslist.map(item=>{console.log(item)
      item.data.map(item2=>{
        if(item2.ID == e.target.dataset.id){
          // app.data.cart.push(item2);

          if(app.data.cart.length > 0){
            //购物车有商品时，判断是否存在一样的商品；
            app.data.cart.map((item3, idx3) => {
              if (item3.ID == e.target.dataset.id) {
                console.log("相同", app.data.cart.length)

                //有相同商品时，数量 +1
                item3.qty++;
              } else if (idx3 == app.data.cart.length - 1) {console.log('不相同')
                //没有相同商品时，数量 为1
                item2.qty = 1;
                app.data.cart.push(item2);
              }
            })
          }else {
            //购物车没有商品时；
            item2.qty = 1;
            app.data.cart.push(item2);
          }
          
        }
      })
    });
    var that = this;
    app.data.qty++;
    wx.showToast({
      title: '已添加到购物车',
      success: function(){
        console.log(123);
        app.addCart();
      }
    })
  },
  toDetail: function(e){
    wx.request({
      method: 'POST',
      url: baseUrl + 'getProduct',
      data: { id: e.target.dataset.id },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 'content-type': 'application/json'  默认值
      },
      success: function (res) {
        wx.navigateTo({
          url: '../goods/goods?id=' + e.target.dataset.id
        })
      } 
    });
  },
  changeNav: function (e) {
    console.log(e)

    this.setData({
      currentTab: e.currentTarget.dataset.current
    });
  },
  changeTab: function (e) {
    console.log(e.detail.current)
    this.setData({
      currentTab: e.detail.current
    });
    if (this.data.currentTab >= 4) {
      this.setData({
        left: 375
      });
    } else {
      this.setData({
        left: 0
      });
    }
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
    event.remove('show', this);
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