// pages/cart/cart.js
var app = getApp();
var imgUrl = app.data.imgUrl;
var baseUrl = app.data.baseUrl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: '',
    cart: [],
    imgUrl: imgUrl,
    min: false,
    max: false,
    show: false,
    totalPrice: 0,
    totalNum: 0,
    selected: true,
    startX: 0, //开始坐标
    startY: 0, //滑动坐标；
    res: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  lower() {
    var result = this.data.res;

    var resArr = [];
    for (let i = 0; i < 10; i++) {
      resArr.push(i);
    };
    var cont = result.concat(resArr);
    console.log(resArr.length);
    if (cont.length >= 100) {
      wx.showToast({ //如果全部加载完成了也弹一个框
        title: '我也是有底线的',
        icon: 'success',
        duration: 300
      });
      return false;
    } else {
      wx.showLoading({ //期间为了显示效果可以添加一个过度的弹出框提示“加载中”  
        title: '加载中',
        icon: 'loading',
      });
      setTimeout(() => {
        this.setData({
          res: cont
        });
        wx.hideLoading();
      }, 1500)
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //动态设置页面标题。
    // wx.setNavigationBarTitle({
    //   title: '购物车',
    //   success: function () {
    //     console.log('购物车设置成功！')
    //   }
    // });
    //获取容器高度；
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          height: res.windowHeight
        })
      }
    });
  },
  // 跳转商品详情
  toDetail: function (e) {
    wx.navigateTo({
      url: '../goods/goods?id=' + e.target.dataset.id
    })
  },
  toggle_select: function(e){
    //定义总价，结算商品数量；
    var totalPrice = 0;
    var totalNum = 0;
    var idx = e.currentTarget.dataset.current;
    //选中与反选；
    this.data.cart[idx].isSelect = !this.data.cart[idx].isSelect;

    //更新数据；
    this.setData({
      cart: this.data.cart
    });
    app.data.cart = this.data.cart;
    //计算价格、数量函数
    this.count();
   
    //判断是否全选;
    var flag = true;
    this.data.cart.map(item2=>{
      if(!item2.isSelect){
        flag = false;
      }
    });
    this.setData({
      selected: flag
    });
  },
  selectAll: function(){
    var totalPrice = 0, totalNum = 0;
    //重新计算价格;
    this.data.cart.map(item => {
      item.isSelect = !this.data.selected;
      if (item.isSelect) {
        //结算总价；
        totalPrice += item.nowPrice * item.qty;

        //结算数量；
        totalNum += item.qty;
      }
    });
    //全选反选;重新计算价格;
    this.setData({
      selected: !this.data.selected,
      cart: this.data.cart,
      totalPrice: totalPrice,
      totalNum: totalNum
    });
    app.data.cart = this.data.cart;
  },
  /*计算价格、数量函数；*/
  count: function(){
    var totalPrice = 0, totalNum = 0;
    this.data.cart.map(item => {
      if(item.isSelect){
        //结算总价；
        totalPrice += item.nowPrice * item.qty;
        //结算数量；
        totalNum += item.qty;
      }
    });
    //设置价格；
    this.setData({
      totalPrice: totalPrice.toFixed(2),
      totalNum: totalNum
    });

    //有需要返回时可用；
    return totalNum
  },
  /*数量减少*/
  sub: function(e){
    this.data.cart.map(item=>{
      if(item.ID == e.target.dataset.id){
        if(item.qty == 1){
          item.qty = 1;
          //当前数量为1时，不改变数量提示；
          app.addCart();
          
        } else {
          item.qty--;
          //改变数量提示
          app.data.qty--;
          app.addCart();
        }
      }
    });
    //更新数据；
    this.setData({
      cart: this.data.cart,
      min: this.data.min
    });
    app.data.cart = this.data.cart;
    //把购物车更新到后端服务器
    app.cart(app.globalData.userInfo.nickName);
   
    this.count();
  },
  plus: function(e){
    this.data.cart.map(item => {
      if (item.ID == e.target.dataset.id) {
        if (item.qty >= 100) {
          item.qty = 100;
          //达到上限时，不改变数量提示；
          app.addCart();
          
        } else {
          item.qty++;
          
          //改变数量提示
          app.data.qty++;
          app.addCart();
        }
      }
    });
    //更新数据；
    this.setData({
      cart: this.data.cart
    });
    app.data.cart = this.data.cart;
    //把购物车更新到后端服务器
    app.cart(app.globalData.userInfo.nickName);
   
    this.count();
  },
  //直接更改输入框数量；
  bindinput:function(e){
    console.log(e.detail.value);
  },
  /*跳转主页*/
  tocategory: function(){
    wx.switchTab({
      url: '../category/category'
    })
  },
  /*结算页面*/
  acount: function(){
    console.log(this.data.cart);
    if (this.data.totalNum == 0){
      wx.showToast({
        title: '您还没有选择商品哦！',
        icon: 'none',
        duration: 800
      });
      return false;
    }
    wx.navigateTo({
      url: '../acount/acount?cart=' + JSON.stringify(this.data.cart),
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },


  //手指触摸动作开始 记录起点X坐标
  touchstart: function (e) {
    //开始触摸时 重置所有删除
    this.data.cart.forEach(function (v, i) {
      if (v.isTouchMove)//只操作为true的
        v.isTouchMove = false;
    })
    this.setData({
      startX: e.changedTouches[0].clientX,
      startY: e.changedTouches[0].clientY,
      cart: this.data.cart
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
    that.data.cart.forEach(function (v, i) {
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
      cart: that.data.cart
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
    this.data.cart.splice(e.currentTarget.dataset.index, 1)
    this.setData({
      cart: this.data.cart
    });

    app.data.cart = this.data.cart;
    //把购物车更新到后端服务器
    app.cart(app.globalData.userInfo.nickName);

    app.data.cart = this.data.cart;
    this.count();
    var num = 0;
    this.data.cart.map(item4=>{
      num += item4.qty;
    })
    app.data.qty = num;
    app.addCart();
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
    console.log(333, app.data.cart);
    app.addCart();
    // 购物车为空时;
    if(app.data.cart.length <= 0){
      // this.data.show = true;
      
      this.setData({
        show: true,
        cart: []  //提交订单时清空购物车时重新计算购物车数量；
      });
      ////提交订单时清空购物车时重新计算购物车数量；
      this.count();
      return false
    } else {
      this.setData({
        show: false
      });
    }
    app.data.cart.map(item=>{
      item.isSelect = true;
      item.isTouchMove = false; //默认全隐藏删除
    })
    //购物车商品列表；更新全选；
    this.setData({
      cart: app.data.cart,
      selected: true
    });

    //每次进入购物车都计算价格及数量；
    this.count();
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