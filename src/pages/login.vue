<!-- 登陆 -->
<template>
	<div class="body">
		<img class="logo animated bounce" src="../assets/img/login.png"  />
		<div class="input-box">
			<input v-model="phone" type="text" placeholder="请输入手机号" />
			<van-icon class="icon" name="user-circle-o" />
		</div>
		<div class="input-box">
			<input v-model="password" type="password" placeholder="请输入密码" />
			<van-icon class="icon" name="closed-eye" />
		</div>
		<div class="input-box ">
			<input type="button" class="login-btn" placeholder="请输入密码" value="登录" @click="login" />
		</div>
		<div class="van-clearfix">
				<router-link to="/setpassword">
					<a class="forget-password">忘记密码</a>
				</router-link>
				<router-link to="/register">
					<a class="register">立即注册</a>	
				</router-link>
		</div>
	</div>
</template>
<script>
	import qs from 'qs'
	import md5 from 'js-md5';
	//	import thisisjsonp from 'jsonp'
	export default {
		name: 'login',
		data() {
			return {
				phone:"",//手机号
				password:"",//密码
//				phone:"13698665551",//手机号
//				password:"000000",//密码
				platform:0,//平台  0:安卓   1：ios
				VersionNumber:'2.3',//正式
				//VersionNumber:'1.2',//测试
			}
		},
		activated(){
			this.$store.state.showTab = false;
		},
		created() {
			this.$store.state.showTab = false;
			//this.version();//app版本升级
			this.init();//缓存上次登录的账号
		},
		methods: {
			//返回上一页
			back(){
				this.$router.go(-1);
			},
			init(){
				if(localStorage.loginPhone != null && localStorage.loginPhone != 'undefined' && localStorage.loginPhone != ''){
					this.phone = localStorage.loginPhone;
				}
				if(localStorage.loginPassword != null && localStorage.loginPassword != 'undefined' && localStorage.loginPassword != ''){
					this.password = localStorage.loginPassword;
				}
				//缓存登录时间
				if(localStorage.sameDay == null || localStorage.sameDay == undefined){
					console.log("#####"+localStorage.sameDay);
					localStorage.sameDay = '';//当localStorage.sameDay != null && localStorage.sameDay != undefined  ,  localStorage.sameDay = ''
				}
			},
			//登录
			login(){
				if(!(/^1[34578]\d{9}$/.test(this.phone))){
					this.$toast("手机号码不正确");
					return false;
				}
				if(this.password == ''){
					this.$toast("请填写密码");
					return false;
				}
				let self = this;
				this.$axios({
			        method: "POST",
			        url:this.$url+'/api/member/login',
			        data: {
			        	"Phone": this.phone,
						"Password": md5(self.password),
			        },
			        headers: {
						'Content-type': 'application/json'
					}
			    }).then(function(res) {
			        console.log(res.data);
					//如果注册成功，跳转登录页面登录
					if(res.data.type == 1) {
						self.$toast(res.data.message);
						localStorage.AccessToken = res.data.resultdata.Access_token;
						localStorage.RefreshToken = res.data.resultdata.Refresh_token;
						localStorage.UserName = res.data.resultdata.UserName;//用户名
						localStorage.UserId = res.data.resultdata.UserId;//用户id
						localStorage.AuthStatus = res.data.resultdata.AuthStatus;//实名认证状态
						localStorage.Avator = res.data.resultdata.Avator;//用户头像
						localStorage.loginPhone = self.phone;//登录手机号
						localStorage.loginPassword = self.password;//登录密码
						self.$router.push({path:'./index',query:{AuthStatus:res.data.resultdata.AuthStatus}});
					}else{
						self.$toast(res.data.message);
					}
				});
			},
			//app版本升级
			version(){
				var u = navigator.userAgent;
				var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
				var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
				if(isAndroid){
					this.platform = 0;
				}
				if(isiOS){
					this.platform = 1;
				}
				this.$axios.get(this.$url+'/api/version?type='+this.platform, {
					params: {
						
					},
				}).then(res => {
					
					//res.data
					//提示信息
					//this.$toast(res.data.message);
					console.log(res.data.resultdata);
					if(this.VersionNumber != res.data.resultdata.Version){
						var oStr = '请升级最新版本'+res.data.resultdata.Version;
						this.$dialog.alert({
						  message: oStr
						}).then(() => {
						  // on close
						  window.location.href=res.data.resultdata.Url;
						});
					}
				}).catch(error => {
					console.log('error init' + error);
				})
			}
		},
		
	
	}
</script>
<style  scoped>
	/*@import "../assets/css/index.styl"*/ 
	.body{
		width: 100%;
		height: 100%;
		
		position: absolute;
		background: -moz-linear-gradient(top, #eaf3f8 0%, #f3f4f6 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#eaf3f8), color-stop(100%,#f3f4f6));
    background: -webkit-linear-gradient(top, #eaf3f8 0%,#f3f4f6 100%);
    background: linear-gradient(top, #eaf3f8 0%,#f3f4f6 100%) ;
    background: -o-linear-gradient(top, #eaf3f8 0%,#f3f4f6 100%);
    background: -ms-linear-gradient(top, #eaf3f8 0%,#f3f4f6 100%);
	}
	ul,ol,li{
		list-style: none;
	}
	/*标题*/
	/*.v-header{
		position: fixed;
	    top: 0;
	    left: 0;
	    width: 100%;
	    height: 0.45rem;
	    line-height: 0.45rem;
	    text-align: center;
	    background: #FFF;
	    font-size:.16rem;
	    color: #740110;
	    z-index: 99;
	    border-bottom: 1px solid #f5f5f5;
	}*/
	/*忘记密码 - 立即注册*/
	.forget-password,.register{
		padding: 0 0.5rem;
		font-size: 0.12rem;
		line-height: 0.4rem;
		color: #277fd6;
	}
	.forget-password{
		float: left;
	}
	.register{
		float: right;
	}
	.login-btn-box {
		padding: 0 0.15rem;
	}
	.login-btn-box .van-button{
		width:100%;
	}
	.logo{
		display: block;
		width: 35%;
		margin: 25% auto 5%;
	}
	.input-box{
		padding: 10px 15px;
		position: relative;
		overflow: hidden;
	}
	.input-box .icon{
		width: 38px;
		height: 38px;
		line-height: 38px;
		text-align: center;
		position: absolute;
		right: 5%;
		top: 10px;
		color: #277fd6;
	}
	.input-box input{
		width: 90%;
		padding:10px 5%;
		text-align: left;
		background: none;
		border-radius: 40px;
		font-size: 14px;
		color: #277fd6;
		border: none;
		background: #FFF;
		border:1px solid #277fd6;
		box-shadow: 1px 1px 1px #277fd6;
		outline-color: invert ;
		outline-style: none ;
		outline-width: 0px ;
		text-shadow: none ;
		-webkit-appearance: none ;
		-webkit-user-select: text ;
		outline-color: transparent ;
		box-shadow: none;
	}
	.login-btn{
		width: 100% !important;
		font-size: 14px !important;
		text-align: center !important;
		border: none;
		margin-top: 0.2rem;
		color: #FFF !important;
		background: #277fd6 !important;
	}
	::-webkit-input-placeholder{/* 使用webkit内核的浏览器 */
		color: #277fd6;
	}    
	:-moz-placeholder{/* Firefox版本4-18 */
		color: #277fd6;
	}                  
	::-moz-placeholder{/* Firefox版本19+ */
		color: #277fd6;
	}                  
	:-ms-input-placeholder{/* IE浏览器 */
		color: #277fd6;
	}           
</style>


























