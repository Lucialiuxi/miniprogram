// pages/testProgress/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        shortString: 'wefwg',
        percentValue: 0,
    },
    onProgressActiceEnd: function(e) {
        console.log(e)
        // 与onTapReloadBtn达到的效果一致
        // this.setData({ percentValue: 0 });
        // if (wx.canIUse('nextTick')){
        //     wx.nextTick(() => {
        //         this.setData({ percentValue: 100 })
        //     });
        // } else {
        //     setTimeout(() => {
        //         this.setData({ percentValue: 100 });
        //     }, 17);
        // }
        this.onTapReloadBtn();
    },
    onTapReloadBtn(e) {
        this.setData({ percentValue: 0 });
        this.setData({ percentValue: 50 });
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