// pages/testFormComponent/index.js
const { envList } = require('../../envList.js');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: [
            {
                title: 'button',
                tip: '按钮',
                page: 'button',
            },
        ],
        selectedEnv: envList[0],
    },
    jumpPage(e) {
        console.log(e.detail.currentTarget.dataset.page)
        wx.navigateTo({
            url: `/pages/testFormComponent/${e.detail.currentTarget.dataset.page}/index?envId=${this.data.selectedEnv.envId}`,
          });
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

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