<template>
	<div class="body">
		<!--<div class="header">首页</div>-->
		<div class="shouji">
			<home-navbar back="上一页" title="首页" @transfer="getUser"></home-navbar>
		</div>
		
	</div>
</template>

<script>
	import HomeNavbar from '../components/header'
	export default {
		components: {
			HomeNavbar
		},
		data() {
			return {
				active: 0,
				value: "",
				index: '',
//				url: require("@/assets/img/logo.png"),
				images: [
//					'https://img.yzcdn.cn/vant/apple-1.jpg',
//					'https://img.yzcdn.cn/vant/apple-2.jpg'
				],

			}
		},
		methods: {
			getUser(msg){
				alert(msg);
			}
		}
	}
</script>

<style scoped>
	/*.header {
		width: 100%;
		height: 0.45rem;
		line-height: 0.45rem;
		text-align: center;
		font-weight: 550;
		letter-spacing: 0.08rem;
	}*/
	
	.shouji {
		padding: 0 0.1rem;
		height: 0.45rem;
		line-height: 0.45rem;
		background-color: #f3f3f3;

	}
	
	.fuzhou {
		height: 0.45rem;
		line-height: 0.45rem;
		position: relative;
	}
	
	.fuzhou-tu {
		display: block;
		width: 0.25rem;
		height: 0.25rem;
		position: absolute;
		top: 0.05rem;
		left: 0.35rem;
	}
	
	.fuzhou-tu img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	
	.qiandao {
		height: 0.45rem;
		line-height: 0.45rem;
		background-color: #f3f3f3;
		position: relative;
	}
	
	.qiandao-tu {
		display: block;
		width: 0.2rem;
		height: 0.2rem;
		position: absolute;
		top: 0.05rem;
		left: 0.4rem;
	}
	
	.qiandao-tu img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	
	.tu {
		height: 2rem;
		padding: 0 0.1rem;
	}
	
	.tu .swiper-banner {
		display: block;
		width: 100%;
		height: 100%;
		border-radius: 0.1rem;
		object-fit: cover;
	}
	
	.secondmodule {
		background-color: #ffffff;
		margin-top: 0.1rem;
		text-align: center;
		font-size: 0.14rem;
		color: #2b2a2a;
	}
	
	.youhui {
		height: 1rem;
		margin-bottom: 0.05rem;
	}
	
	.module-icon {
		width: 0.6rem;
		height: 0.6rem;
		border-radius: 50%;
	}
	
	.remen {
		padding: 0 0.1rem;
		border-top: 0.1rem solid #f3f3f3;
	}
	
	.tuijian {
		height: 0.4rem;
		line-height: 0.4rem;	
		margin-top: 0.1rem;
	}
	
	.tuijian-left {
		float: left;
		height: 0.3rem;
		width: 40%;
	}
	
	.tuijian-left img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	
	.tuijian-right {
		height: 0.4rem;
		float: right;
		font-size: 0.14rem;
		text-align: right;
	}
	
	.tuijian-zi {
		width: 0.7rem;
		height: 0.3rem;
		line-height: 0.3rem;
		display: inline-block;
		float: left;
		color: #858585;
	}
	
	.tuijian-t {
		width: 0.2rem;
		height: 0.2rem;
		display: block;
		float: right;
	}
	
	.tuijian-t img {
		width: 0.2rem;
		height: 0.2rem;
		object-fit: cover;
	}
	
	.box1 {
		margin-top: 0.05rem;
	}
	
	.liebiao {
		width: 100%;
		height: 1.1rem;
		border-bottom: 0.01rem solid #dcdcdc;
		margin-bottom: 0.05rem;
	}
	
	.liebiao-left {
		float: left;
		width: 40%;
		height: 0.9rem;
		padding: 0.1rem 0.1rem;
	}
	
	.liebiao-left img {
		width: 100%;
		height: 100%;
		border-radius: 10%;
		object-fit: cover;
	}
	
	.liebiao-right {
		float: right;
		width: 51%;
		height: 0.9rem;
		padding: 0.1rem 0.05rem;
	}
	
	.liebiaoyi {
		border-bottom: 0;
	}
	
	.wenzi-o {
		width: 100%;
		font-weight: 600;
		letter-spacing: 0.02rem;
		color: #282828;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	
	.wenzi-t {
		width: 100%;
		font-size: 0.14rem;
		margin-top: 0.08rem;
		color: #8e8e8e;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}
	
	.wenzi-h {
		width: 100%;
		font-size: 0.14rem;
		height: 20%;
		color: #57a6fa;
		margin-top: 0.08rem;
		text-align: right;
	}
	
	.tehui {
		padding: 0 0.1rem;
		border-top: 0.1rem solid #f3f3f3;
	}
	
	.tehui-t {
		height: 0.4rem;
		line-height: 0.4rem;
		margin-top: 0.1rem;
	}
	
	.tehui-r {
		width: 100%;
		height: 2.3rem;
		margin-top: 0.1rem;
	}
	
	.rexiao {
		width: 65%;
		height: 2.2rem;
		float: left;
	}
	
	.rexiao-t {
		width: 100%;
		height: 1rem;
	}
	
	.rexiao-t img {
		width: 100%;
		height: 100%;
		border-radius: 8%;
		object-fit: cover;
	}
	
	.rexiao-b {
		margin-top: 0.1rem;
		width: 100%;
		height: 1.1rem;
	}
	
	.caizhai {
		float: left;
		width: 48%;
		height: 1.1rem;
	}
	
	.caizhai img {
		width: 100%;
		height: 100%;
		border-radius: 8%;
		object-fit: cover;
	}
	
	.meishi {
		float: right;
		width: 48%;
		height: 1.1rem;
	}
	
	.meishi img {
		width: 100%;
		height: 100%;
		border-radius: 8%;
		object-fit: cover;
	}
	
	.meizhou {
		float: right;
		width: 33%;
		height: 2.2rem;
	}
	
	.meizhou img {
		width: 100%;
		height: 100%;
		border-radius: 8%;
		object-fit: cover;
	}
	
	.chelufuwu {
		width: 100%;
		height: 2.2rem;
		border-top: 0.1rem solid #f3f3f3;
	}
	
	.chelu {
		height: 1rem;
		margin-top: 0.1rem;
		padding: 0 0.1rem;
	}
	
	.fuwu {
		float: left;
		width: 48%;
		height: 1rem;
	}
	
	.fuwu img {
		width: 100%;
		height: 100%;
		border-radius: 8%;
		object-fit: cover;
	}
	
	.shequ {
		float: right;
		width: 48%;
		height: 1rem;
	}
	
	.shequ img {
		width: 100%;
		height: 100%;
		border-radius: 8%;
		object-fit: cover;
	}
	
	.chi {
		margin-top: 0.1rem;
		height: 2rem;
		border-top: 0.1rem solid #f3f3f3;
		padding: 0 0.1rem;
	}
	
	.chi-l {
		width: 30%;
		height: 0.4rem;
		line-height: 0.4rem;
		float: left;
		color: #419cfa;
		text-align: center;
	}
	
	.chi-r {
		width: 30%;
		height: 0.4rem;
		line-height: 0.4rem;
		float: left;
		background-color: #419cfa;
		margin-left: 0.3rem;
		color: #fff;
		text-align: center;
	}
	
	.shenghuo {
		float: right;
		width: 30%;
		height: 0.4rem;
		line-height: 0.4rem;
		background-color: #419cfa;
		color: #fff;
		text-align: center;
	}
</style>