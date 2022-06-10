Page({
  data: {
    country: "",
    font: ""
  },

  onLoad: function(option) {
    console.log(option)
    this.setData({
      country: option.country
    })
  },

  changeFont: function () {
    this.setData({
      font: "xiheiti"
    })
    wx.login({
      success(res) {
        console.log(res.code)
      }
    })
  }

})