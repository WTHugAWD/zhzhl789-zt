<template>
  <div class="">
  	<div class="header2">
  		<van-icon v-if="showback" name="arrow-left" size="18px" class="back" @click="back"/>
  		{{title}}
  	</div>
  </div>
</template>

<script>
export default {
  name: 'vheader',
  props:{
  	title:{
  		type:String,
  		default:''
  	},
  	showback:{
  		type:Boolean,
  		default:true
  	}
  },
  data () {
    return {
    	
    }
  },
  methods:{
    back(){
    	this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.header2{
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
	z-index:9999;
}
.back{
	position: absolute;
	top:50%;
	transform: translateY(-50%);
	left:.15rem;
}

</style>
