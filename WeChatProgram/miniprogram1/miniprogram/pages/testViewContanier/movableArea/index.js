// pages/testViewContanier/movableArea/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        x: 0,
        y: 0,
        scale: 2,
    },

    onShareAppMessage() {
        return {
            title: 'movable-area',
            path: 'pages/testViewContanier/movableArea',
        }
    },
    moveText(e) {
        this.setData({
            x: 30,
            y: 30
        })
    },
    onChange(e) {
        console.log('onChange', e.detail)
    },
    onScale(e) {
        console.log('onScale', e.detail)
    },
    toScaleThree(e) {
        this.setData({
            scale: 3
          })
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