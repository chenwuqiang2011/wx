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
    console.log(options.flag);
    if(options.flag){
      //订单选择地址时把标识设为true;
      this.setData({
        flag: options.flag
      })
    } else {
      //管理地址时把标识设为false; 
      this.setData({
        flag: false
      })
    }
    
  },
  // 下单选择地址
  address: function(e){
    console.log(e);
    if (this.data.flag) {
      this.data.addressList.map((item, index)=>{
        if(index == e.currentTarget.dataset.id){
          //返回上一层，同时把默认地址传回上一层；
          var pages = getCurrentPages();
          //当前页面；
          var currentPage = pages[pages.length - 1];
          //上一个页面；
          var prevPage = pages[pages.length - 2];
          //更新上一个页面的地址； 
          prevPage.setData({
            addressList: [item]
          });
          console.log(prevPage.data.addressList)
          //更新上一个页面的地址列表；
          wx.navigateBack({
            delta: 1
          })
        }
      })
    }
     
  },
  // 增加地址
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
    if (!app.globalData.userInfo){
      app.showLoading();
      return false
    }
    //提示加载中；
    wx.showLoading({
      title: '加载中'
    })
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
        //隐藏加载中；
        wx.hideLoading();

        if(!res.data.status) return false
        console.log(res.data.data[0].address)
        that.setData({
          addressList: JSON.parse(res.data.data[0].address)
        })
      },
      fail: function (err) {
        //去除加载提示；
        wx.hideLoading();
        //可提示重新发送请求；
        wx.showModal({
          title: '加载失败！',
          content: '是否要重新获取数据？',
          success: function (res) {
            if (res.confirm) {
              //重新发送请求；
              that.onShow();
            } else {
              console.log('取消')
            }
          }
        })
      }
    })
  },
  select: function(e){
    console.log(e)
    var index = e.currentTarget.dataset.id;
    //改变默认地址；
    this.data.addressList.map((item, idx) => {
      if(idx == index) {
        item.checked = true;
      } else {
        item.checked = false;
      }
      console.log(item.checked)
    });
    this.setData({
      addressList: this.data.addressList
    });
    //更新到后台服务器；
    wx.request({
      method: 'POST',
      url: baseUrl + 'updateAddress',
      data: { username: '13538966472', address: JSON.stringify(this.data.addressList)},
      header: {
        //  'content-type': 'application/json' // 默认值
        'content-type': 'application/x-www-form-urlencoded' // 'content-type': 'application/json'  默认值
      },
      dataType: 'json',
      success: function (res) {
        console.log(123, res)
        //更改成功提示；
        wx.showToast({
          title: '设置成功！',
          duration: 400
        })
      },
      fail: function(err){
        //更改成功提示；
        wx.showToast({
          title: '设置失败！',
          icon: 'none',
          duration: 400
        })
      }
    })
  },
  //编辑地址；
  edit: function(e){
    console.log(e)
    var index = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../add/add?id=' + index,
    });
  },
  //删除地址；
  del: function(e){
    console.log(e)
    var index = e.currentTarget.dataset.id;
   
    //如果删除的当前地址为默认地址且还在其它地址，则地址列表的第一个地址为默认地址；
    if (this.data.addressList[index].checked && this.data.addressList.length > 0){
      
      //如果只有最后一个地址，直接删除即可；
      if (this.data.addressList.length == 1){
        //删除当前选择的地址；
        this.data.addressList.splice(index, 1);
      } else {
        //删除当前选择的地址；
        this.data.addressList.splice(index, 1);
        //重新设置第一个为默认地址；
        this.data.addressList[0].checked = true;
      }
      
    } else {
      //删除当前选择的地址；
      this.data.addressList.splice(index, 1);
    }
  
    console.log(this.data.addressList)
    this.setData({
      addressList: this.data.addressList
    });

    //更新到后台服务器；
    wx.request({
      method: 'POST',
      url: baseUrl + 'updateAddress',
      data: { username: '13538966472', address: JSON.stringify(this.data.addressList) },
      header: {
        //  'content-type': 'application/json' // 默认值
        'content-type': 'application/x-www-form-urlencoded' // 'content-type': 'application/json'  默认值
      },
      dataType: 'json',
      success: function (res) {
        console.log(123, res)

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