<template>
	<div class="body">
		<div class="header">
			<van-icon name="arrow-left" @click="home" />
			<span>{{message}}</span>
		</div>
		<div class="dongdan">
			<div class="dongdan-left">
				<img src="../../img/jiansehn.jpg" alt="" />
			</div>
			<div class="dongdan-right">
				<ul v-for="site in sites">
					<li>课程名称：{{site.mingcheng}}</li>
					<li>上课时间：{{site.time}}</li>
					<li>教练：{{site.coach}}</li>
					<li>课时：{{site.hour}}</li>
				</ul>
			</div>
		</div>
		<div class="hupu">
			<span>课程支付</span>
		</div>
		<div class="payment">
			<van-radio-group v-model="radio">
				<van-cell-group>
					<van-cell title="课程课时" clickable @click="radio = '1'">
						<van-radio slot="right-icon" name="1" />
					</van-cell>
					<van-cell title="积分课时" clickable @click="radio = '2'">
						<van-radio slot="right-icon" name="2" />
					</van-cell>
				</van-cell-group>
			</van-radio-group>
		</div>
		<div class="selection" @click="immediately">
			<p>立即选课</p>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				radio: '1',
				message: '课程选择',
				sites: [{
					mingcheng: '动感单车',
					time: '7月5号 08:00—10:00',
					coach: '孙教练',
					hour: '10'
				}],
			}
		},
		methods: {
			home() {
				this.$router.replace('/lijixuanze');
			},
			immediately() {
				this.$router.replace('/xuankechenggong');
			}
		}
	}
</script>

<style>
	li {
		list-style: none;
	}
	
	.header {
		width: 100%;
		height: 0.4rem;
		line-height: 0.4rem;
	}
	
	.dongdan {
		height: 1.2rem;
	}
	
	.dongdan-left {
		width: 34%;
		height: 1rem;
		float: left;
		padding: 0.1rem;
	}
	
	.dongdan-left img {
		width: 100%;
		height: 1rem;
		object-fit: cover;
	}
	
	.dongdan-right {
		padding: 0.15rem 0;
		width: 60%;
		height: 0.9rem;
		float: right;
		font-size: 0.14rem;
	}
	
	.dongdan-right li {
		margin-top: 0.02rem;
	}
	
	.hupu {
		width: 100%;
		height: 0.6rem;
		line-height: 0.6rem;
		background-color: #f7f7f7;
	}
	
	.hupu span {
		padding-left: 0.15rem;
	}
	
	.payment {
		height: 1rem;
	}
	
	.selection {
		width: 100%;
		height: 0.5rem;
	}
	
	.selection p {
		width: 30%;
		height: 0.3rem;
		border: 0.01rem solid #bbb;
		margin: 0 auto;
		border-radius: 10%;
		text-align: center;
		line-height: 0.3rem;
	}
</style>