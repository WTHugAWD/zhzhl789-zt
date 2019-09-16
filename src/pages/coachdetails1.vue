<template>
	<div class="body">
		<home-navbar back="返回" title="教练介绍" setting="" @backFun="backFun" @settingFun="settingFun"></home-navbar>
		<div class="tu">
			<img src="@/assets/img/swip2.273e481.jpg" alt="" style="filter: blur(0.02rem);" />
			<div class="logo">
				<div class="logo-t"><img :src="dataInfo.Image" alt="" /></div>
				<p>{{dataInfo.Name}}</p>
			</div>
			<div class="score">
				<span class="score-left"><span class="score-left-l">评分:</span><span class="score-left-r"><van-rate v-model="value" disabled disabled-color="#ffd21e"/></span></span>
				<span class="score-right">
					<router-link to="pay">
						<button>立即预约</button>
					</router-link>
				</span>
			</div>
		</div>
		<div class="phone">
			<span class="phone-left"><span class="phone-left-l"><img src="@/assets/img/phone.png" alt="" /></span><span class="phone-left-r">联系电话</span></span>
			<span class="phone-right">{{dataInfo.Phone}}</span>
		</div>
		<div class="introduction">
			<p class="introduction-o"><span class="introduction-l"><img src="@/assets/img/jianjie.png" /></span><span class="introduction-r">个人简介</span></p>
			<div class="introduction-t" ref="detailsContent"></div>
			<!--</p>
			<div class="bpicture">
				<div class="bpicture-left"><img src="@/assets/img/youyang.feef653.jpg" alt="" /></div>
				<div class="bpicture-right"><img src="@/assets/img/youyang.feef653.jpg" alt="" /></div>
			</div>-->
		</div>
	</div>
</template>

<script>
	import {getInfo} from '@/api/axiosInfo'//接口
	import HomeNavbar from '../components/common/HomeNavbar'//头
	export default {
		name:"coachdetails1",//课程
		components: {
			HomeNavbar,
			//Steps
		},
		data() {
			return {
				value: 4,
				phone: '13893855555',
				dataInfo:"",
			}
		},
		activated(){
			this.$store.state.showTab = false;
		},
		created() {
			this.$store.state.showTab = false;
			this.GetMemberAsync();//教练简介
			this.GetCoachScoreAsync();//教练等级
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
			//课程详情
			GetMemberAsync(){
				getInfo('Order/GetMemberAsync?id='+this.$route.query.id,{}).then(res=>{
					if(res.data.type==1){
						//console.log(res.data)
						this.dataInfo = res.data.resultdata;
						this.$refs.detailsContent.innerHTML = res.data.resultdata.Introduce;
					}
				}).catch(err=>{
					console.log(err)
				})
			},
			//获取教练等级评分
			GetCoachScoreAsync(){
				getInfo('Member/GetCoachScoreAsync?memberId='+this.$route.query.id,{}).then(res=>{
					if(res.data.type==1){
						console.log(res.data)
						this.value = res.data.resultdata;
						//this.$refs.detailsContent.innerHtml = "123";
					}
				}).catch(err=>{
					console.log(err)
				})
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
	
	.van-nav-bar .van-icon {
		color: #000;
	}
	
	/*.header {
		width: 100%;
		height: 0.45rem;
		line-height: 0.45rem;
		background-color: #fff;
		position: fixed;
		top: 0;
		left: 0;
	}*/
	
	.tu {
		margin-top: 0.45rem;
		width: 100%;
		height: 2rem;
		position: relative;
	}
	
	.tu img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	
	.logo {
		width: 0.8rem;
		height: 1rem;
		position: absolute;
		top: 18%;
		left: 40%;
	}
	
	.logo p {
		text-align: center;
		color: #fff;
	}
	
	.logo-t {
		width: 0.8rem;
		height: 0.8rem;
		margin: 0 auto;
	}
	
	.logo-t img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		object-fit: cover;
	}
	
	.score {
		width: 100%;
		padding: 0 0.1rem;
		height: 0.5rem;
		box-sizing: border-box;
		position: absolute;
		left: 0;
		bottom: 0.1rem;
	}
	
	.score-left {
		width: 70%;
		float: left;
	}
	
	.score-left-l {
		width: 20%;
		line-height: 0.5rem;
		float: left;
		color: #fff;
		text-align: right;
	}
	
	.phone-left-l {
		display: block;
		width: 0.3rem;
		height: 0.3rem;
		margin-top: 0.1rem;
		float: left;
	}
	
	.phone-left-l img {
		width: 100%;
		height: 100%;
	}
	
	.phone-left-r {
		display: block;
		height: 0.3rem;
		float: left;
	}
	
	.van-rate__item {
		padding: 0.04rem 0.02rem;
	}
	
	.score-left-r {
		width: 70%;
		line-height: 0.5rem;
		float: left;
		vertical-align: middle;
	}
	
	.score-right {
		width: 30%;
		float: right;
	}
	
	.score-right button {
		padding: 0.02rem 0.1rem;
		color: #fff;
		background-color: #2dc970;
		border: 0;
		border-radius: 0.05rem;
		font-size: 0.14rem;
		margin-top: 0.15rem;
	}
	
	.phone {
		margin-top: 0.1rem;
		padding: 0 0.1rem;
		height: 0.5rem;
		line-height: 0.5rem;
		background-color: #fff;
	}
	
	.phone-left {
		float: left;
		height: 0.5rem;
		line-height: 0.5rem;
		letter-spacing: 0.02rem;
	}
	
	.phone-right {
		float: right;
	}
	
	.introduction {
		padding: 0 0.1rem;
		margin-top: 0.1rem;
		background-color: #fff;
	}
	
	.introduction-o {
		font-weight: 550;
		padding: 0.05rem 0;
		height: 0.4rem;
		line-height: 0.4rem;
	}
	
	.introduction-t {
		text-indent: 0.3rem;
		font-size: 0.14rem;
		color: #808080;
	}
	
	.introduction-l {
		display: block;
		width: 0.3rem;
		height: 0.3rem;
		margin-top: 0.05rem;
		float: left;
	}
	
	.introduction-r {
		display: block;
		height: 0.3rem;
		float: left;
	}
	
	.introduction-l img {
		width: 100%;
		height: 100%;
	}
	.bpicture{
		height: 1rem;
		width: 100%;
	}
	.bpicture-left{
		float: left;
		height: 1rem;
		width: 45%;
	}
	.bpicture-left img{
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.bpicture-right{
		float: right;
		height: 1rem;
		width: 45%;
		background-color: pink;
	}
	.bpicture-right img{
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>