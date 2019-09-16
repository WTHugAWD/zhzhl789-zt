<template>
	<div class="body">
		<home-navbar back="返回" title="课程选择" setting="" @backFun="backFun" @settingFun="settingFun"></home-navbar>
		<div class="container">
			<!--进度-->
			<div class="stepsList">
				<steps :active="active" :stepsList="stepsList"></steps>
			</div>
			<div class="title-module clearfix">
				<van-row>
				  	<van-col span="24">
				  		<div class="date-list-title">课程</div>
				  	</van-col>
				  	<!--<van-col span="12">
					  	<div class="date-list-change van-clearfix" @click="DatetimePickerState = 1">
					  		<img src="@/assets/img/you.png">
					  		<span>选课时间</span>
					  	</div>
				  	</van-col>-->
				</van-row>
			</div>
			<div class="coach-list">
				<!--<div class="coach-module">-->
					<router-link class="coach-module" to="curriculuminfo">
						<div class="coach-left">
							<img src="@/assets/img/jiansehn.jpg">
						</div>
						<div class="coach-right">
							<div class="coach-right-info">
								<div class="info-box">
									<div class="info-name">动感单车</div>
									<div class="time-slot">10:00 ~ 12:00</div>
									<div class="coach-name van-clearfix">
										<van-icon class="info-icon" name="clock" />
										<span class="info-icon-text">10课时</span>
									</div>
								</div>
								<div class="coach-state">
									<span class="coach-state-text">已选择</span>
								</div>
								<!--<div class="coach-btn">
									<span>立即选择</span>
								</div>-->
							</div>
						</div>
					</router-link>
				<!--</div>-->
			</div>
			<div class="title-module clearfix">
				<van-row>
				  	<van-col span="24">
				  		<div class="date-list-title">请选择教练</div>
				  	</van-col>
				</van-row>
			</div>
			<div class="classification-module clearfix">
				<van-row>
				  	<van-col span="12" class="col-padding">
				  		<router-link to="coachdetails2" class="classification-module-info">
				  			<img src="@/assets/img/jiansehn.jpg" alt="" />
				  			<div class="ketang  van-clearfix">
				  				<span class="classification-title lf">瑜伽训练</span>
				  				<span class="classification-btn rt">4课时</span>
				  			</div>
				  			<div class="introduction">唐寅的始祖是前凉凉州晋昌郡陵江将军唐辉，这也直接影响到了唐寅</div>
				  		</router-link>
				  	</van-col>
				  	<van-col span="12" class="col-padding">
				  		<router-link to="coachdetails2" class="classification-module-info">
				  			<img src="@/assets/img/jiansehn.jpg" alt="" />
				  			<div class="ketang  van-clearfix">
				  				<span class="classification-title lf">瑜伽训练</span>
				  				<span class="classification-btn rt">4课时</span>
				  			</div>
				  			<div class="introduction">唐寅的始祖是前凉凉州晋昌郡陵江将军唐辉，这也直接影响到了唐寅</div>
				  		</router-link>
				  	</van-col>
				  	<van-col span="12" class="col-padding">
				  		<router-link to="coachdetails2" class="classification-module-info">
				  			<img src="@/assets/img/jiansehn.jpg" alt="" />
				  			<div class="ketang van-clearfix">
				  				<span class="classification-title lf">瑜伽训练</span>
				  				<span class="classification-btn rt">4课时</span>
				  			</div>
				  			<div class="introduction">唐寅的始祖是前凉凉州晋昌郡陵江将军唐辉，这也直接影响到了唐寅</div>
				  		</router-link>
				  	</van-col>
				  	<van-col span="12" class="col-padding">
				  		<router-link to="coachdetails2" class="classification-module-info">
				  			<img src="@/assets/img/jiansehn.jpg" alt="" />
				  			<div class="ketang  van-clearfix">
				  				<span class="classification-title lf">瑜伽训练</span>
				  				<span class="classification-btn rt">4课时</span>
				  			</div>
				  			<div class="introduction">唐寅的始祖是前凉凉州晋昌郡陵江将军唐辉，这也直接影响到了唐寅</div>
				  		</router-link>
				  	</van-col>
				</van-row>
			</div>
		</div>
		<!--时间模块-->
		<div v-if="DatetimePickerState == 1" class="popup-date-module">
			<van-datetime-picker
				class="date-box"
			  	v-model="currentDate"
			  	type="datetime"
			  	:min-date="minDate"
			  	:max-date="maxDate"
			  	@confirm="confirm"
			  	@cancel="cancel"
			/>
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
				active:2,
				stepsList:["时间","课程","教练"],
				//时间模块
				DatetimePickerState:0,
				minHour: 10,
			    maxHour: 20,
			    minDate: new Date(),
			    maxDate: new Date(2019, 10, 1),
			    currentDate: new Date()
			}
		},
		activated(){
			this.$store.state.showTab = false;
		},
		created() {
			this.$store.state.showTab = false;
			this.GetCurrInfoAsync();//获取课程详情
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
			//课种详情
			GetCurrInfoAsync(){
//				getInfo("Order/GetCurrInfoAsync?id="+this.$route.query.id,{}).then(res=>{
//					if(res.data.type==1){
//						console.log(res.data)
//						this.dataInfo = res.data.resultdata;
//					}
//				}).catch(err=>{
//					console.log(err)
//				})
			}
		}
	}
</script>

<style scoped>
	.lf{
		float: left;
	}
	.rt{
		float: right;
	}
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
		border-top: 1px solid #f2f2f2;
		border-bottom: 1px solid #f2f2f2;
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
	
	.coach-list{
		
	}
	.coach-module{
		display: flex;
		display: -webkit-flex;
		padding: 0.1rem;
	}
	.coach-left{
		width: 1rem;
		height: 0.7rem;
	}
	.coach-left img{
		width: 100%;
		height: 100%;
	}
	.coach-right{
		flex: 1;
		-webkit-flex: 1;
	}
	.coach-right .coach-right-info{
		width: 100%;
		height: 100%;
		display: flex;
		display: -webkit-flex;
	}
	.coach-right-info .info-box{
		width: 68%;
		height: 100%;
		padding: 0 0.1rem;
		box-sizing: border-box;
	}
	.info-name{
		font-size: 0.15rem;
	}
	.time-slot{
		font-size: 0.15rem;
		line-height: 0.25rem;
	}
	.coach-state{
		flex: 1;
		-webkit-flex: 1;
		text-align: right;
		padding:0 0.2rem 0 0;
		box-sizing: border-box;
	}
	.coach-state-text{
    	color: #59d188;
        font-size: 0.14rem;
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
	.classification-module{
		margin: 0.15rem;
	}
	.popup-date-module{
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.6);
		position: fixed;
		margin-left: ;
		top: 0;
		z-index: 100;
	}
	.popup-date-module:before{
		content: "";
		position: relative;
	}
	.popup-date-module .date-box{
		width: 100%;
		position: absolute;
		left: 0;
		bottom: 0;
		z-index: 0;
	}
	.col-padding{
		padding:0 0.05rem;
		box-sizing: border-box;
	}
	.classification-module-info{
		display: block;
		border: 1px solid #59d188;
		border-radius: 0.03rem;
		padding:0.1rem;
		margin-bottom: 0.1rem;
	}
	.classification-module-info img{
		width: 100%;
		height: 1.4rem;
		object-fit: cover;
		border-radius: 0.05rem;
	}
	.classification-title{
		color: #333;
		font-size: 0.14rem;
		line-height: 0.2rem;
	}
	.classification-btn{
		color: #59d188;
		font-size: 0.14rem;
		line-height: 0.2rem;
		border:1px solid #59d188;
		padding:0 0.06rem;
		border-radius: 0.25rem;
	}
	.ketang{
		margin: 0.1rem 0;
	}
	.classification-btn{
		color: #59d188;
		font-size: 0.14rem;
		line-height: 0.2rem;
		border:1px solid #59d188;
		padding:0 0.06rem;
		border-radius: 0.25rem;
	}
	.introduction{
		font-size: 0.12rem;
		color: #666;
		text-align: left;
		overflow: hidden;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-box-orient: vertical;
	    -webkit-line-clamp: 2;
	}
</style>