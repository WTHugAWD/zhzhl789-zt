<template>
  <div class="body">
  	<v-header title="我的订单"></v-header>
  	<div class="tabbox">
  		<div v-for="(item,index) in tabs" @click="tab_click(index)" :class="oindex==index?'tab tab-active':'tab'">{{item}}</div>
  	</div>
  </div>
</template>

<script>
import VHeader from '@/components/vheader'
export default {
  name: 'zixun',
  components:{
		VHeader
	},
  data () {
    return {
    	tabs:['优惠信息','商家信息'],
    	oindex:0
    }
  },
  created(){
  	this.$store.state.showTab = true
  },
  methods:{
    tab_click(index){
    	this.oindex = index
    },
    back(){
    	this.$router.back(-1)
    }
  }
}
</script>

<style scoped>
.body{
	background:#f3f3f3;
	padding-bottom:20px;
}
.header{
	width:100%;
	position: fixed;
	top:0;
	left:0;
	height:.45rem;
	line-height:.45rem;
	text-align: center;
	font-size:15px;
	border-bottom:2px solid #f3f3f3;
	background:#fff;
}
.back{
	position: absolute;
	top:50%;
	transform: translateY(-50%);
	left:.15rem;
}
.tabbox{
	width:100%;
	height:.45rem;
	line-break: .45rem;
	display: flex;
	background:#fff;
	margin-top:.45rem;
}
.tab{
	flex:1;
	text-align: center;
	font-size:.14rem;
	line-height: .45rem;
}
.tab-active{
	color:#ff4c5e;
	position: relative;
}
.tab-active:after{
	content: '';
	width:25%;
	height:3px;
	background:#ff4c5e;
	position: absolute;
	bottom:0;
	left:50%;
	transform: translateX(-50%);
	border-radius: 10px;
}

</style>
