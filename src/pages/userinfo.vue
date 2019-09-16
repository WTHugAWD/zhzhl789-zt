<template>
	<div class="body">
		<div class="header">
			<van-nav-bar title="我的" left-arrow @click-left="onClickLeft" />
		</div>
		<div class="content">
			<div class="content-picture">
				<div class="picture-left"><img src="../assets/img/jiansehn.jpg" alt="" /></div>
				<div class="picture-right">
					<p><span>微信昵称：</span></p>
					<p><span>用户手机号：</span></p>
				</div>
			</div>
			<div class="hour">
				<van-row gutter="20" style="text-align: center;">
					<van-col span="8" v-for="(item,index) in list" :key="index">
						<div class="my-hour">
							<div class="my-hour-l"><img :src="item.tu" /></div>
							<p>{{item.hour}}</p>
						</div>
					</van-col>
				</van-row>
			</div>
		</div>
		<div class="accordion">
			<ul>
				<li class="accordion-data" v-for="(items,index) in data" :key="index">
					<div class="data-left">
						<span class="data-left-l"><img :src="items.logo" /></span>
						<span class="data-left-r">{{items.opinion}}</span>
					</div>
					<span class="data-right"><van-icon name="arrow" /></span>
				</li>
			</ul>
		</div>
		<div class="sign">
			<button>退出</button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						tu: require('../assets/img/keshi.png'),
						hour: '我的课时'
					},
					{
						tu: require('../assets/img/jilu.png'),
						hour: '课程记录'
					},
					{
						tu: require('../assets/img/jifen.png'),
						hour: '我的积分'
					}
				],
				data: [{
						logo: require('../assets/img/geren.png'),
						opinion: '个人资料'
					},
					{
						logo: require('../assets/img/mima.png'),
						opinion: '修改密码'
					},
					{
						logo: require('../assets/img/kefu.png'),
						opinion: '联系客服'
					},
					{
						logo: require('../assets/img/lianxikefu.png'),
						opinion: '反馈意见'
					},
					{
						logo: require('../assets/img/lianxiwomen.png'),
						opinion: '关于我们'
					},
				],
				activeNames: ['1'],
			}
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1)
			},
		}
	}
</script>

<style scoped="">
	.body {
		width: 100%;
		height: 100%;
		background-color: #f3f3f3;
	}
	
	.header {
		width: 100%;
		height: 0.45rem;
		line-height: 0.45rem;
		background-color: #fff;
		position: fixed;
		top: 0;
		left: 0;
	}
	
	.van-nav-bar .van-icon {
		color: #000;
	}
	
	.content {
		width: 100%;
		margin-top: 0.45rem;
		height: 2.4rem;
		position: relative;
	}
	
	.content-picture {
		width: 100%;
		height: 1.2rem;
		padding-top: 0.15rem;
		background-color: #2cba69;
	}
	
	.picture-left {
		width: 0.8rem;
		height: 0.8rem;
		float: left;
		padding: 0.1rem 0.2rem;
	}
	
	.picture-left img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		object-fit: cover;
	}
	
	.picture-right {
		height: 0.8rem;
		float: left;
		color: #fff;
	}
	
	.picture-right p {
		margin-top: 0.2rem;
		font-size: 0.14rem;
	}
	
	.hour {
		height: 1.2rem;
		width: 94%;
		background-color: #fff;
		border-radius: 10px;
		position: absolute;
		left: 3%;
		top: 48%;
	}
	
	.my-hour {
		height: 1rem;
	}
	
	.my-hour p {
		margin-top: 0.15rem;
		font-size: 0.14rem;
		font-weight: 550;
	}
	
	.my-hour-l {
		height: 0.4rem;
		width: 0.4rem;
		margin: 0 auto;
		margin-top: 0.2rem;
	}
	
	.my-hour-l img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	
	.accordion {
		margin-top: 0.05rem;
		background-color: #fff;
	}
	
	.accordion-data {
		padding: 0 0.1rem;
		height: 0.5rem;
		line-height: 0.5rem;
	}
	
	.data-left {
		float: left;
		width: 40%;
	}
	
	.data-left-l {
		width: 0.3rem;
		height: 0.3rem;
		display: block;
		float: left;
		margin-top: 0.1rem;
	}
	
	.data-left-l img {
		width: 100%;
		height: 100%;
	}
	
	.data-left-r {
		float: left;
		margin-left: 0.1rem;
		font-size: 0.14rem;
	}
	
	.data-right {
		width: 10%;
		text-align: right;
		float: right;
	}
	
	.sign {
		width: 100%;
		height: 0.5rem;
		text-align: center;
	}
	
	.sign button {
		border: 0;
		padding: 0.08rem 1rem;
		background-color: #fff;
		margin-top: 0.4rem;
		border-radius: 0.05rem;
	}
	
	li:nth-of-type(1) {
		border-bottom: 0.01rem solid #f3f3f3;
	}
	
	li:nth-of-type(3) {
		border-bottom: 0.01rem solid #f3f3f3;
	}
	
	li:nth-of-type(4) {
		border-bottom: 0.01rem solid #f3f3f3;
	}
	
	li:nth-of-type(2) {
		border-bottom: 0.1rem solid #f3f3f3;
	}
</style>