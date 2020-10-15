const app = getApp()
wx. cloud. init()
var form_data;
var psw_vaule = [];
Page({
  data: {
    tempFilePaths: [],
    img_arr: [],
 
  },
  //上传图片到服务器 
  formSubmit: function () {
    var that = this
    var adds = that.data.img_arr;
    for (var i = 0; i < this.data.img_arr.length; i++) {
      let filePath = that.data.img_arr[i];
      let cloudPath = 'my-image'+new Date().getTime() + filePath.match(/\.[^.]+?$/)[0];
      wx.cloud.uploadFile({
        cloudPath, 
        filePath,
        name: 'content',
        formData: {
          'user': adds
        },
        success: function (res) {
          console.log(res)
          if (res) {
            wx.showToast({
              title: '已提交发布！',
              duration: 3000
            });
          }
        }
      })
    }
    // this.setData({
    //   formdata: ''
    // })
  },
  //从本地获取照片 
  upimg: function () {
    var that = this;
    if (this.data.img_arr.length < 9) {
      wx.chooseImage({
        count: 9,        //一次性上传到小程序的数量     
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success(res) {
          console.log(res)
          const tempFilePaths = res.tempFilePaths
          console.log(res.tempFilePaths)
          //concat() 方法用于连接两个或多个数组
          that.setData({
            img_arr: that.data.img_arr.concat(res.tempFilePaths),
          })
        }
      })
    } else {
      wx.showToast({
        title: '最多上传九张图片',
        icon: 'loading',
        duration: 2000
      })
    }
  },
  //删除照片功能与预览照片功能 
  deleteImg: function (e) {
    var that = this;
    var img_arr = that.data.img_arr;
    var index = e.currentTarget.dataset.index;
    wx.showModal({
      title: '提示',
      content: '确定要删除此图片吗？',
      success: function (res) {
        if (res.confirm) {
          console.log('点击确定了');
          img_arr.splice(index, 1);
        } else if (res.cancel) {
          console.log('点击取消了');
          return false;
        }
        that.setData({
          img_arr: img_arr
        });
      }
    })
  },
  //预览图片
  previewImg: function (e) {
    var index = e.currentTarget.dataset.index;
    var img_arr = this.data.img_arr;
    wx.previewImage({
      current: img_arr[index],
      urls: img_arr
    })
  },
})