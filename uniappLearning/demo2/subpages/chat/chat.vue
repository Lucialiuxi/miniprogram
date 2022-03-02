<template>
	<view :style="{height: windowHeight + 'px'}" class="chat-sreen">
		<scroll-view 
			class="chat-scroll-wrap" 
			scroll-y enable-flex 
			:style="{height: (windowHeight-84) + 'px'}"
			:scroll-top="top"
		>
			<!-- 聊天列表 -->
			<view class="chat-body">
				<block v-for="chatItem in chatList" :key="chatItem.id">
					<view :class="['chat-one', chatItem.custom ? 'custom' : '']">
						<image class="avatar" :src="chatItem.avatar" v-if="!chatItem.custom"></image>
						<view class="chat-box">
							<view class="chat-sender">{{chatItem.name}}</view>
							<view class="chat-content" v-if="chatItem.type === 'text'">{{chatItem.content}}</view>
							<image class="memes" :src="chatItem.url" v-if="chatItem.type === 'img'"></image>
						</view>
						<image class="avatar" :src="chatItem.avatar" v-if="chatItem.custom"></image>
					</view>
				</block>
			</view>
		</scroll-view>
		<!-- 聊天输入 -->
		<view class="insert-area-wrap">
			<form class="insert-area-form">
				<input
					auto-focus 
					placeholder="输入聊天内容" 
					type="text" 
					class="chatInput"
					placeholder-class="chatInputPlaceholder"
				/>
				<image 
					src="/static/img.png" 
					class="img-button" 
					mode="heightFix"
					@click="chooseImg"
				></image>
				<button type="primary" form-type="submit" class="send-button">发送</button>
			</form>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				top: 0,
				windowHeight: 0,
				chatList: [
					// {
					// 	name: '知心姐姐',
					// 	content: '你好，我是可爱的知心姐姐，请问你想聊点什么呢',
					// 	type: 'text',
					// 	avatar: '/static/zhixin.webp',
					// 	custom: false,
					// 	url: '',
					// 	id: '1',
					// },
					// {
					// 	name: '知心姐姐',
					// 	content: '',
					// 	type: 'img',
					// 	url: '/static/img1.doubanio.gif',
					// 	avatar: '/static/zhixin.webp',
					// 	custom: false,
					// 	id: '12',
					// },
					// {
					// 	name: '我',
					// 	content: '你好，我有个问题想咨询',
					// 	avatar: '/static/dongman.jpg',
					// 	type: 'text',
					// 	url: '',
					// 	custom: true,
					// 	id: '123',
					// },
				]
			}
		},
		onShow: function() {
			if (!!uni.getStorageSync('chat_list')) {
				this.chatList = JSON.parse(uni.getStorageSync('chat_list'));
				this.scrollUtil();
			}
		},
		methods: {
			scrollUtil(){
				// 第二次开始不生效了
				setTimeout(() => {
					uni.pageScrollTo({
						scrollTop: 999999999,
						duration: 0,
					});
					this.top=999999999;
				}, 500);
			},
			chooseImg(event) {
				const _this = this;
				uni.chooseImage({
					count: 9,
					sourceType: ['album'],
					success: (tempFilePaths, tempFiles) => {
						if (Array.isArray(tempFilePaths.tempFilePaths)) {
							tempFilePaths.tempFilePaths.forEach((url) => {
								const chatItem = {
									name: '我',
									content: '',
									type: 'img',
									url,
									custom: true,
									avatar: '/static/dongman.jpg',
								};
								
								_this.chatList.push(chatItem);
							});
						}
						const chatReply = {
							name: '知心姐姐',
							content: '收到',
							type: 'text',
							url: '',
							custom: false,
							avatar: '/static/zhixin.webp',
						};
						_this.chatList.push(chatReply);
						this.scrollUtil();
						uni.setStorageSync('chat_list', JSON.stringify(_this.chatList));
					},
				})
			}
		},
		mounted() {
			this.$data.windowHeight = uni.getSystemInfoSync().windowHeight;
			console.log('3333', uni.getSystemInfoSync().windowHeight)
		}
	}
</script>

<style lang="scss" scoped>
.insert-area-wrap {
	background-color: #EEEEEE;
	height: 110rpx;
	border: 2rpx solid #FFFFFF;
	display: flex;
	flex-direction: column;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
}
.insert-area-form {
	    height: 100%;
	    border: 2rpx solid #708090;
	    display: flex;
	    flex-direction: column;
	    justify-content: flex-start;
	    width: 100%;
		padding: 10rpx;
}
.chatInput {
	background-color: #FFFFFF;
	// width: 72%;
	/deep/.chatInputPlaceholder {
		margin-left: 20rpx;
	}
}
.img-button,
.chatInput,
.send-button {
	display: inline-block;
	min-height: 80rpx;
	height: 80rpx;
	line-height: 80rpx;
}
.send-button {
	font-size: 30rpx;
	width: 18%;
	flex: 200rpx;
	text-overflow: hidden;
}
.img-button {
	margin: 0 16rpx;
}
.chat-sreen {
	background-color: #eee;
}
.chat-body {
	padding: 20rpx;
	box-sizing: border-box;
	.avatar {
		width: 100rpx;
		min-width: 100rpx;
		height: 100rpx;
		border-radius: 50rpx;
		margin: 0 20rpx 0;
	}
	.chat-sender {
		font-weight: bold;
		margin-bottom: 6rpx;
	}
	.memes {
		width: 160rpx;
		height: 160rpx;
	}
	
	.chat-one {
		display: flex;
		justify-content: row;
		align-items: space-between;
		margin-bottom: 10rpx;
		padding: 4rpx;
		
		.chat-box {
			background-color: #fff;
			margin-right: 10rpx;
			padding: 16rpx;
			border-radius: 20rpx;
		}
		
		&.custom {
			.chat-box {
				flex: 1;
				text-align: end;
				margin-right: 0;
				margin-left: 10rpx;
			}
		}
	}
}

</style>
