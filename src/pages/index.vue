<template>
	<div class="body">
		<!--头部-->
		<div class="header-box">
			<van-row>
			  	<van-col span="4">
			  		<div class="header-left van-clearfix">
			  			<span class="city lf">青岛</span>
			  			<van-icon class="lf" name="location-o" />
			  		</div>
			  	</van-col>
			  	<van-col span="17">
			  		<van-search placeholder="请输入搜索关键词" v-model="value" />
			  	</van-col>
			  	<van-col span="3">
			  		<div class="header-right van-clearfix">
			  			<van-icon class="rt" name="chat-o" />
			  		</div>
			  	</van-col>
			</van-row>
		</div>
		<!-- 身体 -->
		<div class="content">
			<div class="tu">
				<van-swipe style="width: 100%; height: 100%; overflow: hidden;" :autoplay="2000">
					<van-swipe-item v-for="(item, index) in images" :key="index">
						<img class="swiper-banner" v-lazy="item.Image" />
					</van-swipe-item>
				</van-swipe>
			</div>
			<div class="class-hour-box van-clearfix">
				<div class="hour-box van-clearfix">
					<div class="hour-left lf">
						<span class="hour-title hour-title-left lf">总课时</span>
						<span class="hour-number lf">{{ClassHour}}</span>
					</div>
					<div class="hour-right lf">
						<span class="hour-title hour-title-right rt">总积分</span>
						<span class="hour-number rt">{{Intege}}</span>
					</div>
				</div>
			</div>
			<!--时间表-->
			<div class="date-list">
				<div>
					<van-row>
					  <van-col span="12">
					  	<div class="date-list-title">即将开课</div>
					  </van-col>
					  <van-col span="12">
					  	<div class="date-list-change" @click="DatetimePickerState = 1">
					  		<span>选课时间</span>
					  		<img src="@/assets/img/xia.png">
					  	</div>
					  </van-col>
					</van-row>
				</div>
				<div class="speed-box">
					<ul>
						<li class="date-module clearfix" v-for="(item,index) in startClassList" :key="index">
							<router-link to="curriculumcoach1" v-if="startClassListLength-1 != index">
								<div class="line-box lf">
									<div class="line-box-yuan"></div>
								</div>
								<div class="line-time lf">
									{{item.StartTime.split("T")[1].split(":")[0]}}:{{item.StartTime.split("T")[1].split(":")[1]}}
								</div>
								<div class="line-info lf">
									<h3 class="line-info-title">{{item.Name}}</h3>
									<div class="line-info-text">
										{{item.Content}}
									</div>
								</div>
								<div style="clear: both"></div>
							</router-link>
							<router-link to="curriculumcoach1" v-if="startClassListLength-1 == index">
								<div class="line-box lf" v-if="speedState == 2" style="height: 0;">
									<div class="line-box-yuan"></div>
								</div>
								<div class="line-time lf">
									{{item.StartTime.split("T")[1].split(":")[0]}}:{{item.StartTime.split("T")[1].split(":")[1]}}
								</div>
								<div class="line-info lf">
									<h3 class="line-info-title">{{item.Name}}</h3>
									<div class="line-info-text">
										{{item.Content}}
									</div>
								</div>
							</router-link>
						</li>
						<!--<li class="date-module clearfix">
							<router-link to="curriculumcoach1">
								<div class="line-box lf">
									<div class="line-box-yuan"></div>
								</div>
								<div class="line-time lf">
									08:00
								</div>
								<div class="line-info lf">
									<h3 class="line-info-title">瑜伽拉伸训练</h3>
									<div class="line-info-text">
										瑜伽是一项有5000年历史的关于身体、心里以及精神的联系、奇缘余印度心里以及精神的联系、奇缘余印度心里以及精神的联系、奇缘余印度心里以及精神的联系、奇缘余印度
									</div>
								</div>
							</router-link>
						</li>-->
						<!--<li class="date-module clearfix">
							<router-link to="curriculumcoach1">
								<div class="line-box lf" v-if="speedState == 2" style="height: 0;">
									<div class="line-box-yuan"></div>
								</div>
								<div class="line-time lf">
									08:00
								</div>
								<div class="line-info lf">
									<h3 class="line-info-title">瑜伽拉伸训练</h3>
									<div class="line-info-text">
										瑜伽是一项有5000年历史的关于身体、心里以及精神的联系、奇缘余印度心里以及精神的联系、奇缘余印度心里以及精神的联系、奇缘余印度心里以及精神的联系、奇缘余印度
									</div>
								</div>
							</router-link>
						</li>-->
					</ul>
				</div>
			</div>
			
			<div class="classification-content clearfix">
				<div class="clearfix">
					<van-row>
					  	<van-col span="12">
					  		<div class="date-list-title">精品课堂</div>
					  	</van-col>
					  	<van-col span="12">
					  		<router-link to="classroom">
					  			<div class="date-list-change">
							  		<img src="@/assets/img/you.png">
							  	</div>
					  		</router-link>
					  	</van-col>
					</van-row>
				</div>
				<div class="classification-module clearfix">
					<van-row>
					  	<van-col span="12" v-for="(item,index) in kezhongList" :key="index" v-if="index < 4">
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
			<!--明星教练-->
			<div class="coach-list">
				<div class="clearfix">
					<van-row>
					  	<van-col span="12">
					  		<div class="date-list-title">明星教练</div>
					  	</van-col>
					  	<van-col span="12">
					  		<router-link to="coachlist">
					  			<div class="date-list-change">
							  		<img src="@/assets/img/you.png">
							  	</div>
					  		</router-link>
					  	</van-col>
					</van-row>
				</div>
				<div class="coach-module" v-for="(item,index) in jiaolianList" :key="index" v-if="index < 10">
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
									<div class="coach-subject">{{item.ClassStr}}</div>
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
	export default {
		components: {
			//HomeNavbar
		},
		data() {
			return {
				value: "",
				images: [
					'https://img.yzcdn.cn/vant/apple-1.jpg',
					'https://img.yzcdn.cn/vant/apple-2.jpg'
				],
				active: 0,
				speedState:2,//最后一个
				//时间模块
				DatetimePickerState:0,
				minHour: 10,
			    maxHour: 20,
			    minDate: new Date(),
			    maxDate: new Date(3000, 1, 1),
			    currentDate: new Date(),
			    ClassHour:"",//课时
			    Intege:"",//积分
			    pageIndex:1,
			    pageSize:10,
			    jiaolianList:[],//教练列表
			    kezhongList:[],//课种列表
			    startClassList:[],//即将开课
			    startClassListLength:[],//即将开课数组长度
			}
		},
		activated(){
			this.$store.state.showTab = true;
		},
		created() {
			this.$store.state.showTab = true;
			this.getBanner();//获取轮播图
			this.GetKeShiAsync();//获取课时
			this.GetMemCurrPageList();//即将开始的课程
			this.GetClassifyListAsync();//课种列表
			this.GetMemberPageList();//教练列表
		},
		methods: {
			getUser(msg){
				alert(msg);
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
					this.$router.push({path:'./curriculum2?time='+time});
				}else{
					this.$toast('请选择现在开始七天之内的时间');
				}
			},
			cancel(){
				this.DatetimePickerState = 0;
			},
			//获取轮播图
			getBanner(){
				getInfo('Member/GetHomeShowsAsync',{}).then(res=>{
					if(res.data.type==1){
						console.log(res.data)
						this.images = res.data.resultdata;
					}
				}).catch(err=>{
					console.log(err)
				})
			},
			//获取课时
			GetKeShiAsync(){
				getInfo('Member/GetKeShiAsync?id='+localStorage.UserId,{}).then(res=>{
					if(res.data.type==1){
						this.ClassHour = res.data.resultdata.ClassHour;
						this.Intege = res.data.resultdata.Intege;
					}
				}).catch(err=>{
					console.log(err)
				})
			},
			//获取即将开课
			GetMemCurrPageList(){
				getInfo('Member/GetMemCurrPageList?memberId='+localStorage.UserId+'&time=""'+'&pageIndex='+this.pageIndex+'&pageSize='+this.pageSize,{}).then(res=>{
					if(res.data.type==1){
						console.log(res.data)
						this.startClassList = res.data.resultdata.Rows;
						this.startClassListLength = res.data.resultdata.Rows.length;
					}
				}).catch(err=>{
					console.log(err)
				})
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
	.body{
		padding-bottom: 0.6rem;
	}
	.clearfix:after { 
		clear:both;
		content:'';display:block;width:0;height:0;visibility:hidden; }
	ul,ol,li{
		list-style: none;
	}
	input{
	    outline-color: invert ;
		outline-style: none ;
		outline-width: 0px ;
		border: none ;
		border-style: none ;
		text-shadow: none ;
		-webkit-appearance: none ;
		-webkit-user-select: text ;
		outline-color: transparent ;
		box-shadow: none;
	}
	.header-box{
		width: 100%;
		height: 45px;
		line-height: 45px;
		padding: 0 0.15rem;
		background: #f3f3f3;
		box-sizing: border-box;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 10;
	}
	.lf{
		float: left;
	}
	.rt{
		float: right;
	}
	.header-left i,.header-right i{
		margin: 0.15rem 0;
		font-size: 0.14rem;
	}
	.header-right i{
		font-size: 0.18rem;
		color: #2dc970;
		margin-right: 0.1rem;
	}
	.city{
		font-size: 0.14rem;
	}
	.van-search{
		padding: 5px 0;
		background: #f3f3f3 !important;
	}
	.van-search input{
		background: #FFF !important;
	}
	.van-search >>> .van-search__content{
		background: #FFF !important;
	}
	.van-search >>> input { 
		background: #FFF !important; 
	}
	.content{
		width: 100%;
		margin-top: 55px;
	}
	/*轮播图*/
	.tu {
		width: 100%;
		height: 1.6rem;
		margin-top: 1%;
		padding: 0 15px;
		box-sizing: border-box;
		border-radius: 0.1rem;
		overflow: hidden;
	}
	.van-swipe{
		width: 100%;
		border-radius: 0.1rem;
		overflow: hidden;
	}
	.tu .swiper-banner {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.class-hour-box{
		width:100%;
		padding: 0 15px;
		margin: 10px 0;
		box-sizing: border-box;
		overflow: hidden;
	}
	.hour-box{
		width: 100%;
		height: 100%;
		background: url(../assets/img/juxing.png) no-repeat;
		background-size: 100% 100%;
	}
	.hour-left,.hour-right{
		width: 50%;
		height: 0.5rem;
		line-height: 0.5rem;
	}
	.hour-left{
		padding-left: 0.2rem;
		box-sizing: border-box;
	}
	.hour-right{
		padding-right: 0.2rem;
		box-sizing: border-box;
	}
	.hour-title{
		font-size: 0.14rem;
		color: #FFF;
		line-height: 0.53rem;
	}
	.hour-number{
		font-size: 0.24rem;
		color: #FFF;
	}
	.hour-title-left{
		margin-right: 0.2rem;
	}
	.hour-title-right{
		margin-left: 0.2rem;
	}
	.date-list{
		border-top: 0.15rem solid #f2f2f2;
		border-bottom: 0.15rem solid #f2f2f2;
		padding: 0 0.15rem 0.25rem 0.15rem;
	}
	.classification-content,.coach-list{
		padding: 0 0.15rem;
		border-bottom: 0.15rem solid #f2f2f2;
	}
	.date-list-title,.date-list-change {
		font-size: 0.16rem;
		line-height: 0.4rem;
	}
	.date-list-change{
		text-align: right;
	}
	.date-list-change span{
		font-size: 0.14rem;
		color: #666;
		line-height: 0.3rem;
	}
	.date-list-change img{
		width: 15px;
		height: 15px;
	}
	
	.date-module{
		width: 100%;
		
	}
	.date-module .line-box{
		width: 4px;
		height: 100%;
		background: #2dc970;
		height: 1.1rem;
		position: relative;
	}
	.date-module .line-box .line-box-yuan{
		width: 0.14rem;
		height: 0.14rem;
		background:#2dc970;
		border-radius: 50%;
		position: absolute;
		left: -5px;
		top: 0px;
	}
	.speed-box{
		padding: 0 10px;
		margin-top: 15px;
		box-sizing: border-box;
	}
	.line-time{
		height: 100%;
		padding: 0 0.12rem 0 0.2rem;
		font-size: 18px;
		line-height: 0.3rem;
	    margin-top: -0.07rem;
	    color: #000;
	}
	.line-info{
		width: 71%;
		font-size: 0.16rem;
		margin-top: -0.07rem;
	}
	.line-info-title{
		width: 100%;
		color: #2dc970;
		font-weight: 400;
	    overflow: hidden;
	    font-size: 0.16rem;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		line-height: 0.3rem;
	}
	.line-info-text{
		font-size: 0.14rem;
		color: #333;
		line-height: 0.25rem;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
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
	.coach-module{
		display: flex;
		display: -webkit-flex;
		padding: 0.1rem 0;
		border-bottom: 1px solid #f2f2f2;
	}
	.coach-left{
		width: 1rem;
		height: 0.7rem;
	}
	.coach-left img{
		width: 100%;
		height: 100%;
		object-fit: cover;
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
		color:#333;
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