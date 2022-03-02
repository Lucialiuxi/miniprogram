<template>
	<view>
		<text>404 页面未找到</text>
		<navigator url="/pages/index/index">回到首页</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onPullDownRefresh() {
			console.log('下拉刷新')
		},
		onLoad() {
			let timer = setTimeout(() => {
				clearTimeout(timer);
				// uni.navigateTo({
				// 	url: "/pages/index/index",
				// })
				uni.switchTab({
					url: "/pages/index/index",
				})
			}, 3000);
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
