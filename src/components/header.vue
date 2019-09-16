<template>
	<van-nav-bar :title="title" :left-text="back" left-arrow @click-left="setUser">
	</van-nav-bar>
</template>

<script>
	export default {
		name: 'HomeNavbar',
		data(){
			return {
				backText:"返回1",
				user:'子传父的内容'
			}
			
		},
		props:['back','title'],//接手psMsg值
		methods:{
	      	setUser:function(){
	        	this.$emit('transfer',this.user)//将值绑定到transfer上传递过去
	      	}
	    }
	}
</script>

<style>
	.van-nav-bar .van-icon {
		color: black;
	}
	
	.van-nav-bar__text {
		color: black;
	}
</style>