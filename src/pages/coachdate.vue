<template>
	<div class="body">
		<home-navbar back="返回" title="选择课程时间" setting="" @backFun="backFun" @settingFun="settingFun"></home-navbar>
		<div class="container">
			<!--进度-->
			<div class="stepsList">
				<steps :active="active" :stepsList="stepsList"></steps>
			</div>
			<div class="title-module clearfix">
				<van-row>
				  	<van-col span="24">
				  		<div class="date-list-title">时间课程</div>
				  	</van-col>
				  	<!--<van-col span="12">
					  	<div class="date-list-change van-clearfix" @click="DatetimePickerState = 1">
					  		<img src="@/assets/img/you.png">
					  		<span>选课时间</span>
					  	</div>
				  	</van-col>-->
				</van-row>
			</div>
			<div class="date-list">
				<div class="date-module">
					<div class="date-module-left">
						<van-icon class="info-icon" name="clock" />
						<span class="info-icon-text">08:00 ~ 10:00</span>
					</div>
					<div class="date-module-right">
						<div class="coach-btn">
							<router-link to="curriculumcoach">
								<span>立即选择</span>
							</router-link>							
						</div>
					</div>
				</div>
				<!--<div class="date-module">
					<div class="date-module-left">
						<van-icon class="info-icon" name="clock" />
						<span class="info-icon-text">08:00 ~ 10:00</span>
					</div>
					<div class="date-module-right">
						<div class="coach-btn">
							<router-link to="curriculumcoach">
								<span>立即选择</span>
							</router-link>
						</div>
					</div>
				</div>
				<div class="date-module">
					<div class="date-module-left">
						<van-icon class="info-icon" name="clock" />
						<span class="info-icon-text">08:00 ~ 10:00</span>
					</div>
					<div class="date-module-right">
						<div class="coach-btn">
							<router-link to="curriculumcoach">
								<span>立即选择</span>
							</router-link>
						</div>
					</div>
				</div>-->
				
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
				active:1,
				stepsList:["课程","时间","教练"],
				//时间模块
				DatetimePickerState:0,
				minHour: 10,
			    maxHour: 20,
			    minDate: new Date(),
			    maxDate: new Date(2019, 10, 1),
			    currentDate: new Date(),
			    list:[],
			}
		},
		activated(){
			this.$store.state.showTab = false;
		},
		created() {
			this.$store.state.showTab = false;
			this.GetTimeListAsync();
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
			//选择时间
			GetTimeListAsync(){
				getInfo('Order/GetTimeListAsync?classId='+this.$route.query.id+'&memberId='+localStorage.UserId+'&time=""',{}).then(res=>{
					if(res.data.type==1){
						console.log(res.data)
						this.list = res.data.resultdata;
					}
				}).catch(err=>{
					console.log(err)
				})
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
	.date-list{
		width: 100%;
		border-top: 0.1rem solid #f5f5f5;
	}
	.date-module{
		width: 100%;
		display: flex;
		display: -webkit-flex;
		border-bottom: 1px solid #f5f5f5;
	}
	.date-module-left{
		width: 50%;
		padding: 0.15rem 0.15rem;
		box-sizing: border-box;
	}
	.date-module-right{
		flex: 1;
		-webkit-flex: 1;
		padding: 0.15rem 0.15rem;
		box-sizing: border-box;
		text-align: right;
	}
	.info-icon{
		float: left;
		font-size: 0.16rem;
		color: #59d188;
	    margin-top: 0.025rem;
	    margin-right: 0.03rem;
	}
	.info-icon-text{
		float: left;
		font-size: 0.16rem;
		color: #59d188;
	}
	.coach-btn span{
    	color: #59d188;
        font-size: 0.14rem;
        border: 1px solid #59d188;
        padding: 0.03rem 0.06rem;
        border-radius: 0.03rem;
        margin: 0.05rem 0;
	}
</style>