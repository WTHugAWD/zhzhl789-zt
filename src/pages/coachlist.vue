<template>
	<div class="body">
		<home-navbar back="返回" title="教练列表" setting="" @backFun="backFun" @settingFun="settingFun"></home-navbar>
		<div class="container">
			<div class="coach-list">
				<div class="coach-module" v-for="(item,index) in jiaolianList" :key="index">
					<div class="coach-left">
						<router-link :to="'coachdetails1?id='+item.Id">
							<img :src="item.HeadImage">
						</router-link>
					</div>
					<div class="coach-right">
						<div class="coach-right-info">
							<div class="info-box">
								<router-link :to="'coachdetails1?id='+item.Id">
									<div class="coach-name">{{item.Name}}教练</div>
									<div class="coach-subject">增肌、瘦身、减脂塑型、增肌、瘦身、减脂塑型</div>
								</router-link>
							</div>
							<div class="coach-btn">
								<router-link :to="'curriculum?id='+item.Id">
									<span>立即预约</span>
								</router-link>
							</div>
						</div>
					</div>
				</div>
				<!--<div class="coach-module">
					<div class="coach-left">
						<router-link to="coachdetails1">
							<img src="@/assets/img/jiansehn.jpg">
						</router-link>
					</div>
					<div class="coach-right">
						<div class="coach-right-info">
							<div class="info-box">
								<router-link to="coachdetails1">
									<div class="coach-name">孙潇雨教练</div>
									<div class="coach-subject">增肌、瘦身、减脂塑型、增肌、瘦身、减脂塑型</div>
								</router-link>
							</div>
							<div class="coach-btn">
								<router-link to="curriculum">
									<span>立即预约</span>
								</router-link>
							</div>
						</div>
					</div>
				</div>
				<div class="coach-module">
					<div class="coach-left">
						<router-link to="coachdetails1">
							<img src="@/assets/img/jiansehn.jpg">
						</router-link>
					</div>
					<div class="coach-right">
						<div class="coach-right-info">
							<div class="info-box">
								<router-link to="coachdetails1">
									<div class="coach-name">孙潇雨教练</div>
									<div class="coach-subject">增肌、瘦身、减脂塑型、增肌、瘦身、减脂塑型</div>
								</router-link>
							</div>
							<div class="coach-btn">
								<router-link to="curriculum">
									<span>立即预约</span>
								</router-link>
							</div>
						</div>
					</div>
				</div>-->
			</div>
		</div>
	</div>
</template>

<script>
	import {getInfo} from '@/api/axiosInfo'//接口
	import HomeNavbar from '../components/common/HomeNavbar'//头
	//import Steps from '../components/common/Steps'//进度
	
	export default {
		name:"curriculum",//课程
		components: {
			HomeNavbar,
			//Steps
		},
		data() {
			return {
				pageIndex:1,
				pageSize:1000,
				jiaolianList:[],
			}
		},
		activated(){
			this.$store.state.showTab = false;
		},
		created() {
			this.$store.state.showTab = false;
			this.GetMemberPageList();
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
			//获取教练列表
			GetMemberPageList(){
				getInfo('Order/GetMemberPageList?memberId='+localStorage.UserId+'&pageIndex='+this.pageIndex+'&pageSize='+this.pageSize,{}).then(res=>{
					if(res.data.type==1){
						console.log(res.data)
						this.jiaolianList = res.data.resultdata.Rows;
					}
				}).catch(err=>{
					console.log(err)
				})
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
		padding-top: 0.5rem;
	}
	.coach-list[data-v-57509004] {
	    padding: 0 0.15rem;
	    border-bottom: 0.15rem solid #f2f2f2;
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
	.coach-name{
		color: #333;
		font-size: 0.15rem;
		line-height: 0.3rem;
	}
	.coach-subject{
		font-size: 0.13rem;
		color: #666;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-box-orient: vertical;
	    -webkit-line-clamp: 2;
	}
	.coach-btn{
		flex: 1;
		-webkit-flex: 1;
		text-align: center;
		padding: 0.2rem 0;
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
</style>