<template>
	<van-steps :active="active">
	  <van-step v-for="(item,index) in stepsList"  :key="index">{{item}}</van-step>
	</van-steps>
</template>

<script>
	export default {
		name: 'HomeNavbar',
		data(){
			return {
				//active: 1,
				backText:"返回",
				settingText:"设置",//右侧按钮
				user:'子传父的内容',//子传父的内容
				//list:[],
			}
			
		},
		created() {
			
		},
		props:{
			active:{
				type:Number,
				
			},
			stepsList:{
				type:Array,
				default: () => []
			}
		},
		//props:['stepsList'],//接手psMsg值
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
	.stepsList{
		width: 100%;
		padding: 0 0.2rem;
		box-sizing: border-box;
	}
	.van-step--horizontal:first-child .van-step__title,.van-step--horizontal .van-step__title{
		margin-top: 0.5rem;
	}
	.van-step--horizontal .van-step__title{
		margin-left: 8px;
	}
	.van-step--horizontal .van-step__circle-container{
		top: 24px;
	}
	.van-step__circle{
		width: 14px;
    	height: 14px;
	}
	.van-step--horizontal.van-step--process .van-icon{
	    font-size: 17px;
	}
	.van-steps--horizontal .van-steps__items.van-steps__items--alone{
		padding: 0 0 10px 0;
	}
</style>