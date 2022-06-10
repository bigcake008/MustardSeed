//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    countrys: ['Denmark', 'Finland', 'Iceland', 'Norway', 'Sweden'],
    fadein: '',
    fadeout: '',
    fly: ''
  },
  
  onLoad: function () {
    
  },

// 动态界面载入
  onReady: function () {
    this.setData({
      fadeout: 'fadeout',
      fadein: 'fadein',
      fly: 'fly'
    })
  },

  resetPage: function () {
    if (this.data.fadeout === '') {
      this.setData({
        fadein: 'fadein',
        fadeout: 'fadeout',
        fly: 'fly'
      })
    }else {
      this.setData({
        fadein: '',
        fadeout: '',
        fly: ''
      })
    }
  },

  bindViewTap: function (event) {
    let destination = this.data.countrys[event.target.dataset.id]
    console.log(event)
    wx.navigateTo({
      url: `../logs/logs?country=${destination}`
    })
  }
})
