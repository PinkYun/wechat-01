// pages/index/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 22.3434,
    longitude: 113.535,
    markers: [
      {
        id: 1,
        iconPath: '../images/core1.png',
        latitude: 22.3434,
        longitude: 113.535,
        width: 40,
        height: 40
      }
    ],
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getLocationInfo()
    console.log(app)
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this
    that.mapCtx = wx.createMapContext('mymap')
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

  },
  // 获取用户的位置
  getLocationInfo() {
    var that = this
    wx.getLocation({
      type: 'gcj02',
      success: function(res) {
        console.log(res)
        that.setData({
          longitude: res.longitude,
          latitude: res.latitude,
          markers: [
            {
              id: 1,
              iconPath: '../images/core1.png',
              latitude:  res.latitude,
              longitude: res.longitude,
              width: 40,
              height: 40
            }
          ]
        })        
      },
    })
  },
  // d定位当前位置
  getlocation() {
    var that = this
    wx.getLocation({
      type: 'gcj02', //最好带上type
      success: function (res) {
        console.log(res)
        that.setData({
          longitude: res.longitude,
          latitude: res.latitude,
          markers: [
            {
              id: 1,
              iconPath: '../images/core1.png',
              latitude: res.latitude,
              longitude: res.longitude,
              width: 40,
              height: 40
            }
          ]
        })
      },
    })
  },
  // 当视图发生变化时触发
  bindregionchange(e) {
    var that = this
    if(e.type=='end'){
      that.mapCtx.getCenterLocation({
            success: function(res) {
              // console.log(res)
              that.setData({
                markers: [
                  {
                    id: 1,
                    iconPath: '../images/core1.png',
                    latitude: res.latitude,
                    longitude: res.longitude,
                    width: 40,
                    height: 40
                  }
                ]
              })
            }
        })
    }
  }
})