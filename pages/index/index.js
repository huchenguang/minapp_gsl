//index.js
//获取应用实例
const app = getApp()

Page({
  data: { //变量数据
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    newsTypes: [{
      text: '本会要闻'
    }, {
      text: '政策宣传'
    }, {
      text: '会务盛况'
    }, {
      text: '活动风采'
    }, ],
    showTab: 0,
  },

  onLoad: function() { //初始化

  },
  setTab(e) {
    const edata = e.currentTarget.dataset;
    this.data.showTab = edata.tabindex;
    this.setData({
      showTab: this.data.showTab
    })
  }
})