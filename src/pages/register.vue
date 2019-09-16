<template>
	<div class="body">
		<div class="gym">
			<van-icon name="clear" @click="home" />
			<span>{{message}}</span>
		</div>
		<div class="welcome">
			<h2>{{gym}}</h2>
			<h2>{{gym1}}</h2>
		</div>
		<div class="sign">
			<p><button @click="dengLu">用户登录</button></p>
			<p><button @click="zhuCe">注册</button></p>
		</div>

	</div>

</template>

<script>
	export default {
		data() {
			return {
				message: '正体健身房',
				gym: '欢迎来到',
				gym1: '正体健身俱乐部'
			}
		},
		activated(){
			this.$store.state.showTab = false;
		},
		created() {
			this.$store.state.showTab = false;
		},
		methods: {
			home() {

			},
			zhuCe(){
				this.$router.replace('/newregister');
			},
			dengLu(){
				this.$router.replace('/mimadenglu');
			}
		}

	}
</script>

<style>
	.welcome {
		width: 50%;
		height: 1rem;
		margin: 0 auto;
		margin-top: 0.6rem;
	}
	
	.welcome h2 {
		text-align: center;
		margin-top: 0.1rem;
	}
	
	.sign {
		width: 100%;
		height: 2rem;
		margin-top: 0.4rem;
	}
	
	.sign p {
		width: 38%;
		height: 0.5rem;
		text-align: center;
		margin: 0 auto;
		margin-top: 0.1rem;
	}
	
	.sign p button {
		width: 100%;
		background-color: #fff;
		border: 0.01rem solid #bbb;
		border-radius: 10%;
		padding: 0.08rem;
	}
</style>