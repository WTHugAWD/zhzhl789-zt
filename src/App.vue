<template>
  <div id="app">
  	<keep-alive>
    <router-view v-if="$route.meta.keepAlive" />
   </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/>
    <!--<div style="height:.6rem"></div>-->
		<div class="footer" v-if="$store.state.showTab">
			<router-link v-for="(item,index) in tabs" :key="index" tag="div" :to="item.to" class="item" active-class="tab-active" @click="tabclick(index)">
				<!--<span :class="item.icon"></span>-->
				<van-icon :name="item.icon" />
				<p>{{item.text}}</p>
			</router-link>
		</div>
  </div>
</template>

<script>
import '@/assets/font/iconfont.css'
export default {
  name: 'App',
  data(){
  	return{
  		tabs:[
//			{icon:'iconfont icon-tab1',text:'首页',to:'index'},
//			{icon:'iconfont icon-tab2',text:'分类',to:'fenlei'},
//			{icon:'iconfont icon-tab3',text:'门店',to:'mendian'},
//			{icon:'shopping-cart-o',text:'购物车',to:'gouwuche'},
//			{icon:'iconfont icon-tab4',text:'我的',to:'wode'}
				{icon:'wap-home',text:'首页',to:'index'},
				{icon:'records',text:'课程',to:'fenlei'},
				{icon:'bullhorn-o',text:'通知',to:'gouwuche'},
				{icon:'contact',text:'我的',to:'userinfo'}
  		],
  		tabindex:0
  	}
  },
  created(){
  	
//	let url = location.href.split('#')[0]
//	this.getTestApi_WeChatUserApi_GetLogin(url)
  },
  methods:{
  	tabclick(index){
  		this.tabindex = index
  	}
//	getTestApi_WeChatUserApi_GetLogin: function (url) {
//    this.$axios.get('/api_url/api/WeChatApi/GetLogin', { // api_url配置见config/index.js跨域设置
//      params: {
//        ReturnUrl: url // 前端页面地址
//      }
//    }).then(function (resp) {
//      let result = resp.data.Data;
//      alert(result.resultdata);
//      window.location.href = result.resultdata;
//    }).catch(err => {
//      alert('请求失败：' + err.message + ',' + err.response.data.Message + ',' + err.response.data.ExceptionMessage)
//    })
//  }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" >
html,body,#app{
 
}
.footer
	width:100%
	height:.6rem
	position:fixed
	bottom:0
	left:0
	z-index:10;
	display:flex
	background:#fff
.item
	flex:1
	text-align:center
	span
		font-size:.24rem
		margin-top:10px
		margin-bottom:3px
		display:inline-block
		/*color:#777*/
	p
		font-size:.12rem
.tab-active
	color:#47856b
	
	
.item .van-icon{
	font-size: 0.24rem;
	margin-top: 0.1rem;
}
.header .h-r{
	width: 100% !important;
	margin: 0 auto !important;
}
.header .h-r .ss-box{
	width: 93% !important;
	padding-left: 1% !important;
	margin: 0.075rem 3%!important;
}

</style>

