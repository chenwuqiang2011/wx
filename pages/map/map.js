const app = getApp();
const amap = app.data.amap;
const key = app.data.key;

Page({
  data: {
    longitude: '',
    latitude: '',
    t_longitude: '',
    t_latitude: '',
    isShow: false,
    detailStatus: false,
    status: '',
    markers: [],
    points: [],
    distance: '',
    cost: '',
    city: '',
    tips: {},
    polyline: []
  },
  onLoad() {
    var _this = this;
    wx.getLocation({
      success: function (res) {
        if (res && res.longitude) {
          _this.setData({
            longitude: res.longitude,
            latitude: res.latitude,
            points: [{
              longitude: res.longitude,
              latitude: res.latitude
            }],
            markers: [{
              id: 0,
              longitude: res.longitude,
              latitude: res.latitude,
              // iconPath: '../../src/images/navi_s.png',
              width: 32,
              height: 32
            }]
          })
        }
      }
    })
  },
  bindInput: function (e) {
    var _this = this;
    var keywords = e.detail.value;
    var myAmap = new amap.AMapWX({ key: key });
    myAmap.getInputtips({
      keywords: keywords,
      location: '',
      success: function (res) {
        if (res && res.tips) {console.log('输入', keywords)
          var address = res.tips[0].district;
          _this.setData({
            isShow: true,
            city: address.substring(address.indexOf('省') + 1, address.indexOf('市')),
            tips: res.tips
          });
        }
      }
    })
  },
  bindSearch: function (e) {
    var keywords = e.target.dataset.keywords;

    //终点经纬；
    var location = e.target.dataset.location;

    
    console.log(e)
    location = location.split(',');
    this.setData({
      t_longitude: location[0],
      t_latitude: location[1]
    });
    if (this.data.markers.length > 1 && this.data.points.length > 1) {
      this.data.markers.pop();
      this.data.points.pop();
      this.setData({ polyline: [] });
    }
    var markers = this.data.markers;
    var points = this.data.points;
    markers.push({
      id: 0,
      longitude: location[0],
      latitude: location[1],
      // iconPath: '../../src/images/navi_e.png',
      width: 32,
      height: 32
    });
    points.push({
      longitude: location[0],
      latitude: location[1]
    });
    console.log('隐藏')
    this.setData({
      isShow: false,
      markers: markers,
      points: points
    });
    console.log(this.data.isShow)
  },
  goDetail: function(e){
    var that = this;

    //起点;
    var origin = this.data.longitude + ',' + this.data.latitude ;
    //终点;
    var destination = this.data.t_longitude + ',' + this.data.t_latitude ;
    console.log(origin, destination)
    var myAmapFun = new amap.AMapWX({ key: key });
    myAmapFun.getDrivingRoute({
      origin: origin,
      destination: destination,
      success: function (data) {
        if (data.paths && data.paths[0] && data.paths[0].steps) {
          console.log(data.paths[0].steps)
          that.setData({
            steps: data.paths[0].steps
          });
        }

      },
      fail: function (info) {

      }
    });
    console.log()
  },
  goTo(e) {
    if (this.data.points.length < 2) {
      wx.showToast({ title: '请输入终点' })
      return;
    }
    var status = e.target.dataset.status;
    var myAmap = new amap.AMapWX({ key: key });

    switch (status) {
      case 'car':
        myAmap.getDrivingRoute(this.getDataObj('#4B0082'));
        break;
      case 'walk':
        myAmap.getWalkingRoute(this.getDataObj());
        break;
      case 'bus':
        myAmap.getTransitRoute(this.getBusData('#008B8B'));
        break;
      case 'ride':
        myAmap.getRidingRoute(this.getDataObj('#00FFFF'));
        break;
      default:
        return;
    }
    this.setData({
      detailStatus: true,
      status: status
    })
  },
  getDataObj(color) {
    var _this = this;
    var color = color || "#0091ff";

    return {
      origin: _this.data.points[0].longitude + ',' + _this.data.points[0].latitude,
      destination: _this.data.points[1].longitude + ',' + _this.data.points[1].latitude,
      success(data) {
        var points = [];
        if (!data.paths || !data.paths[0] || !data.paths[0].steps) {
          wx.showToast({ title: '失败！' });
          return;
        }
        if (data.paths && data.paths[0] && data.paths[0].steps) {
          var steps = data.paths[0].steps;
          for (var i = 0; i < steps.length; i++) {
            var poLen = steps[i].polyline.split(';');
            for (var j = 0; j < poLen.length; j++) {
              points.push({
                longitude: parseFloat(poLen[j].split(',')[0]),
                latitude: parseFloat(poLen[j].split(',')[1])
              })
            }
          }
        }
        _this.setData({
          distance: data.paths[0].distance,
          cost: parseInt(data.paths[0].duration / 60),
          polyline: [{
            points: points,
            color: color,
            width: 6
          }]
        });
      },
      fail(info) {
        wx.showToast({ title: '失败！' })
      }
    }
  },
  getBusData(color) {
    var _this = this;
    var color = color || "#0091ff";

    return {
      origin: _this.data.points[0].longitude + ',' + _this.data.points[0].latitude,
      destination: _this.data.points[1].longitude + ',' + _this.data.points[1].latitude,
      city: _this.data.city,
      success(data) {
        var points = [], cost = 0;
        if (data && data.transits) {
          var transits = data.transits;
          for (var i = 0; i < transits.length; i++) {
            cost += parseInt(transits[i].duration);
            var segments = transits[i].segments;
            for (var j = 0; j < segments.length; j++) {
              if (segments[j].bus.buslines[0] && segments[j].bus.buslines[0].polyline) {
                var steps = segments[j].bus.buslines[0].polyline.split(';');
                for (var k = 0; k < steps.length; k++) {
                  var point = steps[k].split(',');
                  points.push({
                    longitude: point[0],
                    latitude: point[1]
                  })
                  if (parseInt(point[0] * 100000) === parseInt(_this.data.points[1].longitude * 100000) && parseInt(point[1] * 100000) === parseInt(_this.data.points[1].latitude * 100000)) {
                    _this.setData({
                      distance: data.distance,
                      cost: parseInt(cost / 60),
                      polyline: [{
                        points: points,
                        color: color,
                        width: 6
                      }]
                    });
                    return;
                  }
                }
              }
            }
          }
        }
      },
      fail(info) {
        wx.showToast({ title: '失败！' })
      }
    }
  }
})