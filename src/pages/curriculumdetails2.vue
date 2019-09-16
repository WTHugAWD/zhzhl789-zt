<template>
	<div class="body">
		<home-navbar back="返回" title="课程选择" setting="" @backFun="backFun" @settingFun="settingFun"></home-navbar>
		<div class="container">
			<!--进度-->
			<div class="stepsList">
				<steps :active="active" :stepsList="stepsList"></steps>
			</div>
			<!--课程详情-->
			<div class="details-content">
				<img class="curriculum-banner" :src="dataInfo.Image" />
				<div class="curriculum-title">{{dataInfo.Name}}</div>
				<div class="coach-name van-clearfix">
					<van-icon class="info-icon" name="clock" />
					<span class="info-icon-text">{{dataInfo.BuyClasses}}课时</span>
				</div>
			</div>
			<div class="title-module clearfix">
				<van-row>
				  	<van-col span="24">
				  		<div class="date-list-title">课程介绍</div>
				  	</van-col>
				</van-row>
			</div>
			<div class="details-content">
				<p ref="details">
					
				</p>
			</div>
		</div>
		<div class="footer-btn" @click="curriculumcoach">
			<van-button type="primary">立即选择</van-button>
		</div>
	</div>
</template>

<script>
	import {getInfo} from '@/api/axiosInfo'//接口
	import HomeNavbar from '../components/common/HomeNavbar'//头
	import Steps from '../components/common/Steps'//进度
	
	export default {
		name:"curriculum",//课程
		components: {
			HomeNavbar,
			Steps
		},
		data() {
			return {
				active:1,
				stepsList:["课程","时间","教练"],
				dataInfo:"",
			}
		},
		activated(){
			this.$store.state.showTab = false;
		},
		created() {
			this.$store.state.showTab = false;
			this.GetCurriculumAsync();
		},
		methods: {
			//返回上一页
			backFun(msg){
				//alert(msg);
				this.$router.go(-1);
			},
			//设置
			settingFun(msg){
				//alert(111);
			},
			confirm(){
				this.DatetimePickerState = 0;
			},
			cancel(){
				this.DatetimePickerState = 0;
			},
			//课程详情
			GetCurriculumAsync(){
				getInfo('Order/GetCurriculumAsync?id='+this.$route.query.id,{}).then(res=>{
					if(res.data.type==1){
						console.log(res.data)
						this.dataInfo = res.data.resultdata;
						this.$refs.details.innerHTML = res.data.resultdata.Content;
					}
				}).catch(err=>{
					console.log(err)
				})
			},
			//立即选择
			curriculumcoach(){
				this.$router.push({path:'./curriculumcoach'});
			}
		}
	}
</script>

<style scoped>
	.container{
		padding-top: 0.46rem;
	}
	.date-list-title,.date-list-change {
		font-size: 0.16rem;
		line-height: 0.4rem;
	}
	.date-list-title{
		position: relative;
		padding-left: 10px;
	}
	.date-list-title:before{
		content:"";
		width: 3px;
		height: 18px;
		background: #59d188;
		position: absolute;
		left: 0;
		top: 0.1rem;
	}
	.title-module{
		padding: 0 0.15rem;
	}
	.date-list-change{
		text-align: right;
	}
	.date-list-change span{
		float: right;
		font-size: 0.14rem;
		color: #333;
		line-height: 0.4rem;
	}
	.date-list-change img{
		float: right;
		width: 15px;
		height: 15px;
		margin-top: 0.11rem;
	}
	/*课程详情*/
	.details-content{
		width: 100%;
		padding: 0.1rem 0.15rem;
		box-sizing: border-box;
	}
	.details-content p{
		text-indent:2em;
		font-size: 0.14rem;
	}
	.curriculum-banner{
		width: 100%;
		height: 2rem;
		object-fit: cover;
	}
	.curriculum-title{
		font-size: 0.16rem;
		text-align: left;
		line-height: 0.3rem;
	}
	.info-icon{
		float: left;
		font-size: 0.14rem;
		color: #59d188;
	    margin-top: 0.025rem;
	    margin-right: 0.03rem;
	}
	.info-icon-text{
		float: left;
		font-size: 0.14rem;
		color: #59d188;
	}
	.footer-btn{
		width: 100%;
		height: 0.45rem;
		line-height: 0.45rem;
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 10;
	}
	.footer-btn button{
		width: 100%;
	}
</style>