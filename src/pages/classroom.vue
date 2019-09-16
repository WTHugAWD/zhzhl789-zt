<template>
	<div class="body">
		<home-navbar back="返回" title="精品课程列表" setting="" @backFun="backFun" @settingFun="settingFun"></home-navbar>
		<div class="container">
			<div class="classification-content clearfix">
				<div class="classification-module clearfix">
					<van-row>
					  	<van-col span="12" v-for="(item,index) in kezhongList" :key="index">
					  		<router-link :to="'curriculumdetails?id='+item.Id">
					  			<div class="classification-module-info">
						  			<img :src="item.Image" alt="" />
						  			<div class="ketang clearfix">
						  				<span class="classification-title lf">{{item.Name}}</span>
						  				<span class="classification-btn rt">{{item.ClassHour}}课时</span>
						  			</div>
						  		</div>
					  		</router-link>
					  	</van-col>
					  	<!--<van-col span="12">
					  		<router-link to="curriculumdetails">
					  			<div class="classification-module-info">
						  			<img src="@/assets/img/jiansehn.jpg" alt="" />
						  			<div class="ketang clearfix">
						  				<span class="classification-title lf">瑜伽训练</span>
						  				<span class="classification-btn rt">4课时</span>
						  			</div>
						  		</div>
					  		</router-link>
					  	</van-col>
					  	<van-col span="12">
					  		<router-link to="curriculumdetails">
					  			<div class="classification-module-info">
						  			<img src="@/assets/img/jiansehn.jpg" alt="" />
						  			<div class="ketang clearfix">
						  				<span class="classification-title lf">瑜伽训练</span>
						  				<span class="classification-btn rt">4课时</span>
						  			</div>
						  		</div>
					  		</router-link>
					  	</van-col>
					  	<van-col span="12">
					  		<router-link to="curriculumdetails">
					  			<div class="classification-module-info">
						  			<img src="@/assets/img/jiansehn.jpg" alt="" />
						  			<div class="ketang clearfix">
						  				<span class="classification-title lf">瑜伽训练</span>
						  				<span class="classification-btn rt">4课时</span>
						  			</div>
						  		</div>
					  		</router-link>
					  	</van-col>-->
					</van-row>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {getInfo} from '@/api/axiosInfo'//接口
	import HomeNavbar from '../components/common/HomeNavbar'//头
//	import Steps from '../components/common/Steps'//进度
	
	export default {
		name:"curriculum",//课程
		components: {
			HomeNavbar,
//			Steps
		},
		data() {
			return {
				pageIndex:1,
				pageSize:1000,
				kezhongList:[],
			}
		},
		activated(){
			this.$store.state.showTab = false;
		},
		created() {
			this.$store.state.showTab = false;
			this.GetClassifyListAsync();//课种列表
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
			//课种列表
			GetClassifyListAsync(){
				getInfo('Order/GetClassifyListAsync?memberId='+localStorage.UserId+'&pageIndex='+this.pageIndex+'&pageSize='+this.pageSize,{}).then(res=>{
					if(res.data.type==1){
						console.log(res.data)
						this.kezhongList = res.data.resultdata.Rows;
					}
				}).catch(err=>{
					console.log(err)
				})
			},
		}
	}
</script>

<style scoped>
	.clearfix:after { 
		clear:both;
		content:'';display:block;width:0;height:0;visibility:hidden; }
	.lf{
		float: left;
	}
	.rt{
		float: right;
	}
	.container{
		padding-top: 0.5rem;
	}
	.classification-module{
		padding: 0.15rem 0.1rem;
	}
	.classification-module-info{
		padding: 0 0.1rem;
	}
	.classification-module-info img{
		width: 100%;
		height: 0.85rem;
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
</style>