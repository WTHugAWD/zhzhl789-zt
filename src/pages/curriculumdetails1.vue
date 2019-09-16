<template>
	<div class="body">
		<home-navbar back="返回" title="课程选择" setting="" @backFun="backFun" @settingFun="settingFun"></home-navbar>
		<div class="container">
			<!--进度-->
			<!--<div class="stepsList">
				<steps :active="active" :stepsList="stepsList"></steps>
			</div>-->
			<!--课程详情-->
			<div class="details-content">
				<img class="curriculum-banner" src="@/assets/img/jiansehn.jpg" />
				<div class="curriculum-title">动感单车</div>
				<div class="coach-name van-clearfix">
					<van-icon class="info-icon" name="clock" />
					<span class="info-icon-text">10课时</span>
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
				<p>
					唐寅的始祖是前凉凉州晋昌郡陵江将军唐辉，这也直接影响到了唐寅，他在自己的书画题名中也常用“晋昌唐寅”落款。
					而到了唐初，其祖唐俭跟随李渊起兵，被封为“莒国公”，所以唐寅也自称“鲁国唐生”。到了明代，其祖唐泰任兵部车驾主事
					，死于土木堡之役。唐泰的后代子孙多散部在苏州吴县白下、桥里间一代。唐寅也正是出生在这一带，其父唐广德经营一家小酒馆。
					其父让他读书求取功名，唐寅不负父望，十六岁中苏州府试第一入庠读书。28岁时中南直隶乡试第一，次年入京应战会试。
					因弘治十二年科举案受牵连入狱被贬为吏，突发变故让唐寅丧失进取心，从此游荡江湖，埋没于诗画之间，终成一代名画家。
				</p>
			</div>
		</div>
		<div class="footer-btn">
			<router-link to="coachdate1">
				<van-button type="primary">立即选择</van-button>
			</router-link>
		</div>
	</div>
</template>

<script>
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
				stepsList:["教练","课程","时间"],
			}
		},
		activated(){
			this.$store.state.showTab = false;
		},
		created() {
			this.$store.state.showTab = false;
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