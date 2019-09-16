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
				  	<van-col span="12">
				  		<div class="date-list-title">时间课程</div>
				  	</van-col>
				  	<van-col span="12">
					  	<div class="date-list-change van-clearfix" @click="DatetimePickerState = 1">
					  		<img src="@/assets/img/you.png">
					  		<span>选课时间</span>
					  	</div>
				  	</van-col>
				</van-row>
			</div>
			<div class="coach-list">
				<div class="coach-module" v-for="(item,index) in startClassList" :key="index">
					<div class="coach-left">
						<router-link :to="'curriculumdetails2?id='+item.Id">
							<img :src="item.Image">
						</router-link>
					</div>
					<div class="coach-right">
						<div class="coach-right-info">
							<div class="info-box">
								<router-link :to="'curriculumdetails2?id='+item.Id">
									<div class="info-name">{{item.Name}}</div>
									<div class="time-slot">{{item.StartTime.split("T")[1].split(":")[0]}}:{{item.StartTime.split("T")[1].split(":")[1]}} ~ {{item.EndTime.split("T")[1].split(":")[0]}}:{{item.EndTime.split("T")[1].split(":")[1]}}</div>
									<div class="coach-name van-clearfix">
										<van-icon class="info-icon" name="clock" />
										<span class="info-icon-text">{{item.ClassHour}}课时</span>
									</div>
								</router-link>
							</div>
							<div class="coach-btn">
								<router-link :to="'curriculumcoach2?id='+item.Id">
									<span>立即选择</span>
								</router-link>
							</div>
						</div>
					</div>
				</div>
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
				urlTime:this.$route.query.time,
				active:1,
				stepsList:["时间","课程","教练"],
				pageIndex:1,
				pageSize:100,
				//时间模块
				DatetimePickerState:0,
				minHour: 10,
			    maxHour: 20,
			    minDate: new Date(),
			    maxDate: new Date(2019, 10, 1),
			    currentDate: new Date(),
			    startClassList:[],
			}
		},
		activated(){
			this.$store.state.showTab = false;
		},
		created() {
			this.$store.state.showTab = false;
			this.GetMemCurrPageList();//获取即将开课【已选择时间】
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
			confirm(value){
				this.DatetimePickerState = 0;
				//获取选中时间
				let time = value.getFullYear() + '-' + (value.getMonth() + 1) + '-' + value.getDate() +" "+ value.getHours()+":"+ value.getMinutes()+":" + value.getSeconds();
				let newTime = String(value.getTime(time));

				//获取当前时间
				let myDate = new Date(); //实例一个时间对象；
				let getFullYear = myDate.getFullYear();   //获取系统的年；
				let getMonth = myDate.getMonth()+1;   //获取系统月份，由于月份是从0开始计算，所以要加1
				let getDate = myDate.getDate(); // 获取系统日，
				let getHours = myDate.getHours(); //获取系统时，
				let getMinutes = myDate.getMinutes(); //分
				let getSeconds = myDate.getSeconds(); //秒
				let thisTime = getFullYear + "-" + getMonth + "-" + getDate + " " + getHours + ":" + getMinutes + ":" + getSeconds;
				thisTime = String(myDate.getTime(thisTime));

				//七天之内  && 选择时间大于当前时间
				if((Number(thisTime) + 86400000*7) > newTime && Number(newTime) > Number(thisTime)){
					this.urlTime = time;
					this.GetMemCurrPageList();
				}else{
					this.$toast('请选择现在开始七天之内的时间');
				}
			},
			cancel(){
				this.DatetimePickerState = 0;
			},
			//获取即将开课【已选择时间】
			GetMemCurrPageList(){
				getInfo('Member/GetMemCurrPageList?memberId='+localStorage.UserId+'&time='+this.urlTime+'&pageIndex='+this.pageIndex+'&pageSize='+this.pageSize,{}).then(res=>{
					if(res.data.type==1){
						console.log(res.data)
						if(res.data.resultdata.Rows.length == 0){
							this.$toast("未查询到可选课程");
							return false;
						}
						this.startClassList = res.data.resultdata.Rows;
					}else{
						this.$toast(res.data.message);
					}
				}).catch(err=>{
					console.log(err)
				})
			},
			
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
	
	.coach-module{
		display: flex;
		display: -webkit-flex;
		padding: 0.1rem;
		border-bottom: 1px solid #f2f2f2;
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
	/*.coach-subject{
		font-size: 0.13rem;
		color: #666;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-box-orient: vertical;
	    -webkit-line-clamp: 2;
	}*/
	.coach-btn{
		flex: 1;
		-webkit-flex: 1;
		text-align: center;
		padding: 0.25rem 0;
		box-sizing: border-box;
	}
	.coach-btn span{
    	color: #59d188;
        font-size: 0.14rem;
        border: 1px solid #59d188;
        padding: 0.03rem 0.06rem;
        border-radius: 0.03rem;
        margin: 0.05rem 0;
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
</style>