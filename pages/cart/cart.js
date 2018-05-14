// pages/cart/cart.js
var app = getApp();
var imgUrl = 'http://www.cwq888.cn/image/';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: '',
    cart: [],
    imgUrl: imgUrl,
    max: false,
    totalPrice: 0,
    totalNum: 0,
    selected: true,
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
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          height: res.windowHeight
        })
      }
    });

  },
  toggle_select: function(e){
    //定义总价，结算商品数量；
    var totalPrice = 0;
    var totalNum = 0;
    console.log(e)
    var idx = e.currentTarget.dataset.current;
    console.log(idx, this.data.cart[idx]);
    //选中与反选；
    this.data.cart[idx].isSelect = !this.data.cart[idx].isSelect;
    this.setData({
      cart: this.data.cart
    });

    
    this.data.cart.map(item=>{
      if(!item.isSelect){
        //结算总价；
        totalPrice += item.nowPrice * item.qty;

        //结算数量；
        totalNum += item.qty;
      }
    });
    //设置价格；
    this.setData({
      totalPrice: totalPrice,
      totalNum: totalNum
    });

    //判断是否全选;
    
    this.data.cart.map(item2=>{
      if(item2.isSelect){
        console.log('不全选');
        this.data.selected = false;
      }
    });
    this.setData({
      selected: !this.data.selected
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
    console.log(333, app.data.cart);
    app.data.cart.map(item=>{
      item.isSelect = true;
    })
    //购物车商品列表；
    this.setData({
      cart: app.data.cart
    });
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