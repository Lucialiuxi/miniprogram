// pages/testContainer/index.js
const { envList } = require('../../envList.js');

Page({
    /**
     * 页面的初始数据
     */
    data: {
        selectedEnv: envList[0],
        list: [
            {
                title: 'cover-view',
                tip: '覆盖在原生组件之上的文本试图',
                page: 'coverView',
            },
            {
                title: 'match-media',
                tip: '匹配检测节点',
                page: 'matchMedia',
            },
            {
                title: 'movable-area',
                tip: '可移动区域',
                page: 'movableArea',
            },
            {
                title: 'scroll-view',
                tip: '可滚动视图区域',
                page: 'scrollView',
            },
            {
                title: 'share-element',
                tip: '共享元素 ,需要与page-container组件组合使用',
                page: 'shareElement',
            },
            {
                title: 'swiper',
                tip: '滑块视图容器',
                page: 'swiper',
            },
            {
                title: 'view',
                tip: '图容器',
                page: 'view',
            },
        ]
    },
    /**
     * 跳转到试图容器详情
     */
    jumpPage(e) {
        wx.navigateTo({
            url: `/pages/testViewContanier/${e.detail.currentTarget.dataset.page}/index?envId=${this.data.selectedEnv.envId}`,
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