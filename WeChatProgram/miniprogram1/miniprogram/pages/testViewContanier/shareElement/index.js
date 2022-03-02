// pages/testViewContanier/shareElement/index.js
const contacts = [
    { id: 1, name: 'Frank', img: 'frank.png', phone: '0101 123456', mobile: '0770 123456', email: 'frank@emailionicsorter.com' },
    { id: 2, name: 'Susan', img: 'susan.png', phone: '0101 123456', mobile: '0770 123456', email: 'frank@emailionicsorter.com' },
    { id: 3, name: 'Emma', img: 'emma.png', phone: '0101 123456', mobile: '0770 123456', email: 'frank@emailionicsorter.com' },
    { id: 4, name: 'Scott', img: 'scott.png', phone: '0101 123456', mobile: '0770 123456', email: 'frank@emailionicsorter.com' },
    { id: 5, name: 'Bob', img: 'bob.png', phone: '0101 123456', mobile: '0770 123456', email: 'frank@emailionicsorter.com' },
    { id: 6, name: 'Olivia', img: 'olivia.png', phone: '0101 123456', mobile: '0770 123456', email: 'frank@emailionicsorter.com' },
    { id: 7, name: 'Anne', img: 'anne.png', phone: '0101 123456', mobile: '0770 123456', email: 'frank@emailionicsorter.com' },
    { id: 8, name: 'sunny', img: 'olivia.png', phone: '0101 123456', mobile: '0770 123456', email: 'frank@emailionicsorter.com' }
];
Page({

    /**
     * 页面的初始数据
     */
    data: {
        contacts,
        contact: contacts[0],
        transformIdx: 0,
        position: 'center', // 弹出位置，可选值为 top bottom right center
        duration: 300, // 动画时长，单位毫秒
        show: false, // 是否显示page-contanier
        overlay: false, // 是否显示遮罩层
    },

    showNext(e) {
        const { idx } = e.currentTarget.dataset;
        this.setData({
            transformIdx: idx,
            contact: contacts[idx],
            show:true,
        });
    },
    onBerforeEnter(res) {
        console.log('进入前触发==beforeenter', res);
    },
    onEnter(res) {
        console.log('进入中触发==enter', res);
    },
    onAfterEnter(res) {
        console.log('进入后触发==afterenter', res)
    },
    showPrev(e) {
        this.setData({
            transformIdx: 0,
            contact: contacts[0],
            show: false,
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