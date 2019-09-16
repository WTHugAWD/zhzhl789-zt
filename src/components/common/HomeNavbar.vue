<template>
	<van-nav-bar class="header" :title="title" :left-text="back" :right-text="setting" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
	</van-nav-bar>
</template>

<script>
	export default {
		name: 'HomeNavbar',
		data(){
			return {
				backText:"返回",
				settingText:"设置",//右侧按钮
				user:'子传父的内容'//子传父的内容
			}
			
		},
		props:['back','title','setting'],//接手psMsg值
		methods:{
	      	onClickLeft(){
	        	this.$emit('backFun',this.user)//将值绑定到transfer上传递过去
	      	},
	      	onClickRight(){
	      		this.$emit('settingFun',this.user)//将值绑定到transfer上传递过去
	      	}
	    }
	}
</script>

<style>
	.header{
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
	}
	.van-nav-bar .van-icon {
		color: black;
	}
	
	.van-nav-bar__text {
		color: black;
	}
</style>