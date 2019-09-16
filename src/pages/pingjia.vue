<template>
	<div class="body">
		<div class="header">
			<van-nav-bar title="发表评价"left-arrow @click-left="onClickLeft"/>
		</div>
		<div class="content">
			<div class="coach-name">
				<div class="name-left">
					<img src="@/assets/img/p.jpg" alt="" />
				</div>
				<div class="name-right">
					<p>教练名称</p>
					<p class="name-b">瘦身瑜伽课程</p>
				</div>
			</div>
			<div class="scoring">
				<div class="scoring-left">给教练打分：</div>
				<div class="scoring-right">
					<van-rate v-model="value" />
				</div>
			</div>
		</div>
		<div class="curriculum">
			<textarea placeholder="对本次课程满意吗，快来说说吧..." class="tips"></textarea>
		</div>
		<div class="evaluation">
			<button>提交</button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				value: 1,
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
	.body{
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
	
	.content {
		margin-top: 0.45rem;
	}
	
	.coach-name {
		margin-top: 0.1rem;
		padding: 0 0.1rem;
		height: 0.7rem;
		background-color: #fff;
	}
	
	.name-left {
		width: 20%;
		height: 0.5rem;
		padding: 0.1rem 0.1rem;
		float: left;
	}
	
	.name-right {
		float: right;
		width: 70%;
		height: 0.7rem;
		font-size: 0.15rem;
	}
	
	.name-right p {
		margin-top: 0.08rem;
	}
	
	.name-b {
		color: #bbb;
	}
	
	.name-left img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	

	.van-nav-bar .van-icon {
		color: #000;
	}
	
	.scoring {
		margin-top: 0.1rem;
		padding: 0 0.1rem;
		height: 0.5rem;
		line-height: 0.5rem;
		background-color: #fff;
	}
	.scoring-left{
		float: left;
	}
	.scoring-right{
		float: left;
	}
	.van-rate {
		text-align: center;
	}
	
	.van-rate__item {
		padding: 0 0.05rem;
	}
	
	.curriculum {
		margin-top: 0.1rem;
	}
	
	.curriculum textarea {
		height: 1.5rem;
		width: 99%;
		border: 0;
	}
	.tips{
		padding: 0.1rem 0.1rem;
		box-sizing: border-box;
	}
	.evaluation{
		margin-top: 0.2rem;
		text-align: center;
	}
	.evaluation button{
		padding: 0.08rem 1.2rem;
		background-color: #fff;
		border: 0;
		border-radius: 0.05rem;
		color: #2dc970;
	}
</style>