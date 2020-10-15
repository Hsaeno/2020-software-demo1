//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    focus: false,
    inputValue: '',
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    channel:
      [
        {
          name:"二手手机",
          imgurl:"cloud://ash-1gecd5xpb564b8d4.6173-ash-1gecd5xpb564b8d4-1303835441/cloud_img/essj.png"
        },
        {
          name:"数码产品",
          imgurl:"cloud://ash-1gecd5xpb564b8d4.6173-ash-1gecd5xpb564b8d4-1303835441/cloud_img/sm.png"
        },
        {
          name:"二手图书",
          imgurl:"cloud://ash-1gecd5xpb564b8d4.6173-ash-1gecd5xpb564b8d4-1303835441/cloud_img/ess.png"
        },
        {
          name:"化妆品",
          imgurl:"cloud://ash-1gecd5xpb564b8d4.6173-ash-1gecd5xpb564b8d4-1303835441/cloud_img/hzp.png"
        },
        {
          name:"全部分类",
          imgurl:"cloud://ash-1gecd5xpb564b8d4.6173-ash-1gecd5xpb564b8d4-1303835441/cloud_img/fl.png"
        }
      ],
    background:[
      "cloud://ash-1gecd5xpb564b8d4.6173-ash-1gecd5xpb564b8d4-1303835441/cloud_img/index_swiper3.jpg",
      "cloud://ash-1gecd5xpb564b8d4.6173-ash-1gecd5xpb564b8d4-1303835441/cloud_img/index_swiper1.jpg",
      "cloud://ash-1gecd5xpb564b8d4.6173-ash-1gecd5xpb564b8d4-1303835441/cloud_img/index_swiper2.jpg"
    ],
    user_rec:[
      {
        img:"cloud://ash-1gecd5xpb564b8d4.6173-ash-1gecd5xpb564b8d4-1303835441/cloud_img/iphone.jpg",
        title:"自用Ipone11 promax"
      },
      {
        img:"cloud://ash-1gecd5xpb564b8d4.6173-ash-1gecd5xpb564b8d4-1303835441/cloud_img/sony.jpg",
        title:"索尼降噪豆三代 京东购买"
      },
      {
        img:"cloud://ash-1gecd5xpb564b8d4.6173-ash-1gecd5xpb564b8d4-1303835441/cloud_img/kyzz.jpg",
        title:"2021考研政治全套便宜出"
      },
      {
        img:"cloud://ash-1gecd5xpb564b8d4.6173-ash-1gecd5xpb564b8d4-1303835441/cloud_img/ysl.jpg",
        title:"YSL口红未拆封低价卖"
      }
    ]

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  bindButtonTap: function () {
    this.setData({
      focus: true
    })
  },
})
