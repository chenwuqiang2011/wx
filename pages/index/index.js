// //index.js
//获取应用实例
// const app = getApp();
// var order = ['red', 'yellow', 'blue', 'green', 'red'];
// Page({
//   data: {
//     toView: 'red',
//     scrollTop: 100,
//     motto: 'Hello World',
//     myname:'小蚂蚁',
//     show: true,
//     userInfo: {},
//     hasUserInfo: false,
//     products: {},
//     canIUse: wx.canIUse('button.open-type.getUserInfo')
//   },
//   //事件处理函数
//   bindViewTap: function() {
//     wx.navigateTo({
//       url: '../logs/logs'
//     })
//   },
//   showMsg: function(){
//     console.log(123);
//     wx.request({
     
//       url: 'http://192.168.1.186:1000/queryProducts', //仅为示例，并非真实的接口地址
//       data: {
//         pageNo: 1,
//         qty: 10
//       },
//       method: 'POST',
//       header: {
//         'content-type': 'application/json' // 默认值
//       },
//       success: function (res) {
//         console.log(res,this);
//         this.setData({
//           products : res.data.data
//         })
//       }.bind(this)
//     })
//   },
//   onLoad: function () {
//     if (app.globalData.userInfo) {
//       this.setData({
//         userInfo: app.globalData.userInfo,
//         hasUserInfo: true
//       })
//     } else if (this.data.canIUse){
//       // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
//       // 所以此处加入 callback 以防止这种情况
//       app.userInfoReadyCallback = res => {
//         this.setData({
//           userInfo: res.userInfo,
//           hasUserInfo: true
//         })
//       }
//     } else {
//       // 在没有 open-type=getUserInfo 版本的兼容处理
//       wx.getUserInfo({
//         success: res => {
//           app.globalData.userInfo = res.userInfo
//           this.setData({
//             userInfo: res.userInfo,
//             hasUserInfo: true
//           })
//         }
//       })
//     }
//   },
//   getUserInfo: function(e) {
//     console.log(e)
//     app.globalData.userInfo = e.detail.userInfo
//     this.setData({
//       userInfo: e.detail.userInfo,
//       hasUserInfo: true
//     })
//   },
//   upper: function (e) {
//     console.log(e)
//   },
//   lower: function (e) {
//     console.log(e)
//   },
//   scroll: function (e) {
//     console.log(e)
//   },
//   tap: function (e) {console.log('tap')
//     for (var i = 0; i < order.length; ++i) {
//       if (order[i] === this.data.toView) {
//         this.setData({
//           toView: order[i + 1]
//         })
//         break
//       }
//     }
//   },
//   tapMove: function (e) {console.log('tapMove')
//     this.setData({
//       scrollTop: this.data.scrollTop + 10
//     })
//   }
// })
    var order = ['red', 'yellow', 'blue', 'green', 'red'];
    var event = require('../../utils/event.js');
    
    var app = getApp();
    Page({
      data: {
        items: [
          { name: 'USA', value: '美国' },
          { name: 'CHN', value: '中国', checked: 'true' },
          { name: 'BRA', value: '巴西' },
          { name: 'JPN', value: '日本' },
          { name: 'ENG', value: '英国' },
          { name: 'TUR', value: '法国' },
        ],
        iconSize: [20, 30, 40, 50, 60, 70],
        iconColor: [
          'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
        ],
        iconType: [
          'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
        ],
        x: 0,
        y: 0,
        toView: 'blue',
        scrollTop: 100,
        imgUrls: [
          'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
          'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        ],
        indicatorDots: false,
        autoplay: false,
        interval: 5000,
        duration: 1000,
        circular: true
      },
      onLoad: function(option){
        console.log(option);
      },
      onBtnPress: function () {
       event.emit('show', "要传送的数据");
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
      durationChange: function (e) { console.log(e.detail)
        this.setData({
          duration: e.detail.value
        })
      },
      upper: function (e) {
        console.log(e)
      },
      lower: function (e) {
        console.log(e)
      },
      scroll: function (e) {
        console.log(e)
      },
      tap: function (e) {
        for (var i = 0; i < order.length; ++i) {
          console.log(123)
          if (order[i] === this.data.toView) {
            this.setData({
              toView: order[i + 1]
            })
            break
          }
        }
      },
      tapMove: function (e) {
        this.setData({
          scrollTop: this.data.scrollTop + 10
        })
      },
      taps: function (e) {
        this.setData({
          x: 30,
          y: 30
        });
      },
      onChange: function (e) {
        console.log(e.detail)
      },
      onScale: function (e) {
        console.log(e.detail)
      },
      onReady() {
        this.videoCtx = wx.createVideoContext('myVideo')
      },
      play() {
        this.videoCtx.play()
      },
      pause() {
        this.videoCtx.pause()
      },
      switchOn: function(e){
        console.log(e.detail.value)
      },
      takePhoto() {
        const ctx = wx.createCameraContext()
        ctx.takePhoto({
          quality: 'high',
          success: (res) => {
            this.setData({
              src: res.tempImagePath
            })
          }
        })
      },
      error(e) {
        console.log(e.detail)
      },
      upload(){
        wx.chooseImage({
          success: function (res) {
            var tempFilePaths = res.tempFilePaths;
            console.log(666)
            wx.uploadFile({
              url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
              filePath: tempFilePaths[0],
              name: 'file',
              formData: {
                'user': 'test'
              },
              success: function (res) {alert(123)
                var data = res.data
                console.log(data)
                //do something
              },
              fail: function(err){
                console.log('err', err);
              },
              complete: function(){
                console.log('complete');
              }
            })
          }
        })
      },
      onReady: function () {
        // 页面渲染完成
        //实例化一个动画
        this.animation = wx.createAnimation({
          // 动画持续时间，单位ms，默认值 400
          duration: 400,
          /**
          * http://cubic-bezier.com/#0,0,.58,1 
          * linear 动画一直较为均匀
          * ease 从匀速到加速在到匀速
          * ease-in 缓慢到匀速
          * ease-in-out 从缓慢到匀速再到缓慢
          * 
          * http://www.tuicool.com/articles/neqMVr
          * step-start 动画一开始就跳到 100% 直到动画持续时间结束 一闪而过
          * step-end 保持 0% 的样式直到动画持续时间结束 一闪而过
          */
          timingFunction: 'ease',
          // 延迟多长时间开始
          delay: 100,
          /**
          * 以什么为基点做动画 效果自己演示
          * left,center right是水平方向取值，对应的百分值为left=0%;center=50%;right=100%
          * top center bottom是垂直方向的取值，其中top=0%;center=50%;bottom=100%
          */
          transformOrigin: 'left top 0',
          success: function (res) {
            console.log(res)
          }
        })
      },
      /**
      *位移
      */
      translate: function () {
        //x轴位移100px

        this.animation.translate(100, 0).step().translate(0, 0).step();
        // this.animation.scale(2).step();
        this.setData({
          //输出动画
          animation: this.animation.export()
        })
      }

    })
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        console.log(res);
        var latitude = res.latitude // 经度
        var longitude = res.longitude // 纬度
      }
    })

   

   