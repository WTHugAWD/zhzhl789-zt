<template>
	<div class="body">
		<div class="head">
			<h4>{{gym}}</h4></div>
		<div class="kuang">
			<input type="number" placeholder="请输入手机号" v-model="newPhone" />
			<p class="kuang-m">
				<input type="number" placeholder="验证码" v-model="verification" />
				<button :disabled="disabled" class="huoqu" @click="goAddressDtail" v-model="yanZheng">{{btntxt}}</button>
			</p>
			<input type="password" placeholder="密码设置" v-model="password1" />
		</div>
		<div class="queren">
			<button @click="queRen">确认注册</button>
		</div>

	</div>
</template>

<script>
	import request from '../utils/request'//头
	export default {
		data() {
			return {
				gym: '新用户注册',
				newPhone: '',
				verification: '',
				btntxt: "获取验证码",
				time: 0,
				disabled: false,
				password1: '',
				yanZheng:'',
			}
		},
		activated(){
			this.$store.state.showTab = false;
		},
		created() {
			this.$store.state.showTab = false;
		},
		methods: {
			register(){
				var self = this;
				getFun(self.$url+'/api/member/login',{                    
	                            
	            }).then(res => {
	                // 获取数据成功后的其他操作
	               // ………………                
	            }) 
			},
			goAddressDtail() {

				//判断手机号码是否正确
				var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
				if(this.newPhone == '') {
					alert('请输入手机号码')
				} else if(!reg.test(this.newPhone)) {
					alert("手机格式不正确");
				} else {
					this.time = 60;
					this.disabled = true;
					this.timer();
				}
			},
			timer() {
				if(this.time > 0) {
					this.time--;
					this.btntxt = this.time + 's后获取';
					setTimeout(this.timer, 1000);
				} else {
					this.time = 0;
					this.btntxt = "获取验证码";
					this.disabled = false;
				}
			},
			queRen(){
				
			},

		}

	}
</script>

<style>
	.head {
		width: 100%;
		height: 0.5rem;
		text-align: center;
		margin-top: 1rem;
	}
	
	.kuang {
		width: 80%;
		margin: 0 auto;
		text-align: center;
	}
	
	.kuang input {
		width: 80%;
		height: 0.3rem;
		padding-left: 0.1rem;
		border: 0;
		border-bottom: 0.01rem solid #bbb;
		background-color: #fff;
		margin-top: 0.3rem;
		font-size: 0.14rem;
	}
	
	.kuang-m {
		width: 100%;
		position: relative;
	}
	
	.kuang-m button {
		width: 1rem;
		padding: 0.04rem 0.04rem;
		position: absolute;
		right: 10%;
		bottom: 10%;
		background-color: #fff;
		border: 0.01rem solid #bbb;
		font-size: 0.14rem;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		word-break: break-all;
	}
	
	.queren {
		margin-top: 0.5rem;
		text-align: center;
	}
	
	.queren button {
		padding: 0.08rem 0.5rem;
		background-color: #fff;
		border: 0.01rem solid #bbb;
		border-radius: 6%;
	}
</style>