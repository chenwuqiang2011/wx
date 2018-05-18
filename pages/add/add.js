// pages/add/add.js
var app = getApp();
var template = require('../../template/template.js');
var baseUrl = app.data.baseUrl;

var show = false;
var item = {value: [0, 0, 0]};
Page({

  /**
   * 页面的初始数据
   */
  data: {
    province: '请输入省、市、区',
    show: true,
    address: {
      name:'',
      tel: '',
      province: '请输入省、市、区',
      city: '',
      county: '',
      detail: '',
      post: ''
    },
    reg: true  //验证手机号格式；
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
 
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (e) {
    var that = this;
    //请求数据
    template.updateAreaData(that, 0, e);
  },
  //点击选择城市按钮显示picker-view
  translate: function (e) {
    console.log('show')
    //隐藏textarea;
    this.setData({
      show: false
    });
    template.animationEvents(this, 0, true, 400);
  },
  //隐藏picker-view
  hiddenFloatView: function (e) {
    console.log('hidden')
    //隐藏textarea;
    this.setData({
      show: true
    });
    template.animationEvents(this, 200, false, 400);
    console.log(123, this.data.item)
      this.data.address.province = item.provinces[item.value[0]].name,
      this.data.address.city = item.citys[item.value[1]].name,
      this.data.address.county = item.countys[item.value[2]].name
    this.setData({
      address: this.data.address
    });
  },
  //滑动事件
  bindChange: function (e) {
    template.updateAreaData(this, 1, e);
    item = this.data.item;

  },
  //输入框值变化事件；
  bindinput: function(e){
    var name = e.target.dataset.name;
    switch(name){
      case 'name':
        this.data.address.name = e.detail.value;
        break;
      case 'tel':
        this.data.address.tel = e.detail.value;
        break;
      case 'detail':
        this.data.address.detail = e.detail.value;
        break;
      case 'post':
        this.data.address.post = e.detail.value;
        break;
    };
    //返回value值；
    // return {
    //   value: 1
    // }
  },
  bindblur: function(e){
    var regTel = /^0?1[3|4|5|8][0-9]\d{8}$/;
    console.log(regTel.test(e.detail.value));
    if (regTel.test(e.detail.value)){
      this.data.reg = true;
      this.data.address.tel = e.detail.value;
    } else {
      this.data.reg = false;
      wx.showToast({
        icon: 'none',
        title: 'x 请输入正确的手机号码',
      })
    }
  },
  save: function () {
    if(this.data.address.name == ''){
      wx.showToast({
        icon: 'none',
        title: 'x 请输入姓名！',
      })
    } else if(!this.data.reg){
      wx.showToast({
        icon: 'none',
        title: 'x 请输入正确的电话号码！',
      })
    } else if (this.data.address.city == '') {
      wx.showToast({
        icon: 'none',
        title: 'x 请选择省市区！',
      })
    } else if (this.data.address.detail == '') {
      wx.showToast({
        icon: 'none',
        title: 'x 请输入详细地址！',
      })
    } else {
      console.log('成功', this.data.address);

      //把新增的地址回传到上一个页面；
      var pages = getCurrentPages();
      //当前页面；
      var currentPage = pages[pages.length - 1];
      //上一个页面；
      var prevPage = pages[pages.length - 2];
      //更新上一个页面的地址列表；
      prevPage.data.addressList.push(this.data.address);
      prevPage.setData({
        addressList: prevPage.data.addressList
      });
      var data = {
        username: '13538966472', 
        address: { name: 'chen', tel: '123' }
      };
      wx.request({
        method: 'POST',
        url: baseUrl + 'address',
        data: {username: '13538966472', address: JSON.stringify(this.data.address)},
        header: {
        //  'content-type': 'application/json' // 默认值
          'content-type': 'application/x-www-form-urlencoded' // 'content-type': 'application/json'  默认值
        },
        dataType: 'json',
        success: function(res){
          console.log(res)
          if(res.data.status){
            //地址更新成功时跳转到上一页面；同时把最新的数据回传到上一页面；
            console.log('更新后的所有地址');
             //新增成功之后跳转到上一个页面；
            wx.navigateBack({
              delta: 1
            });
          }
        }
      })
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