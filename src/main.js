// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import lazyload from "vue-lazyload"
import {Step, Steps,NavBar,GoodsAction,GoodsActionBigBtn,GoodsActionMiniBtn,Uploader,Area,DatetimePicker,Search,Tab,Tabs,Button,Icon,Swipe,Dialog,SwipeItem,Rate,Stepper,SwitchCell,NoticeBar,RadioGroup,Row,PasswordInput, NumberKeyboard, Col,Card,Popup,AddressList,AddressEdit,Collapse,CollapseItem, Radio ,Checkbox, CheckboxGroup,PullRefresh,List,Toast,Field,Cell,CellGroup,Loading } from 'vant'
import axios from 'axios'
import store from './store'
import VueCookies from 'vue-cookies'

//axios.defaults.baseURL = 'http://yby.test.zhikewl.com/'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$axios = axios;
Vue.prototype.$cookies = VueCookies;
Vue.config.productionTip = false
//Vue.prototype.$url = process.env.NODE_ENV === 'development' ? '/api_url' : 'http://yby.test.zhikewl.com'
//Vue.prototype.$url2 = 'http://yishengbao.api.test.zhikewl.com'
//Vue.prototype.$url = 'http://yishengbao.api.test.zhikewl.com'//正式地址
Vue.prototype.$url = 'http://yishengbao.api.zhikewl.com/'//测试地址
//console.log(Vue.prototype.$url)
Vue.use(VueCookies)
Vue.use(Step).use(Steps).use(NavBar).use(GoodsAction).use(GoodsActionBigBtn).use(GoodsActionMiniBtn).use(Uploader).use(Area).use(DatetimePicker).use(Search).use(Tab).use(Tabs).use(Button).use(Icon).use(Swipe).use(SwipeItem).use(Rate).use(Stepper).use(SwitchCell)
.use(RadioGroup).use(Row).use(PasswordInput).use(NumberKeyboard).use(Col).use(Card).use(Popup).use(AddressList).use(AddressEdit).use(Collapse).use(CollapseItem).use(Radio).use(Checkbox).use(CheckboxGroup).use(PullRefresh).use(List).use(Toast)
.use(Field).use(Cell).use(Dialog).use(CellGroup).use(Loading).use(NoticeBar)
Vue.use(lazyload,{loading:'@/assets/img/loading.gif'})


var onPlusReady = function (callback, context = this) {
  if (window.plus) {
    callback.call(context)
  } else {
    document.addEventListener('plusready', callback.bind(context))
  }
}
Vue.mixin({
  beforeCreate () {
    onPlusReady(() => {
      this.plusReady = true
    }, this)
  },
  methods: {
    onPlusReady: onPlusReady
  }
})
//localStorage.setItem('userid','5EE9BEF0-1CE3-4314-AA63-D865CAD95F37')

/* eslint-disable no-new */
//router.beforeEach((to, from, next) => {
////  第一次进入项目
//
//let isLogin = VueCookies.get('isLogin');
//let url = location.href.split('#')[0]
////未登录，并且进入地址不是登录页
//if (!isLogin && to.path != "/author") {
//	   VueCookies.set("beforeLoginUrl", url,60*60*1); // 保存用户进入的url
////	   console.log(to.fullPath)
//	   next("/author");
//	   return false;
//} 
// 	//已登录，并且有code返回 
//else if(isLogin != null && to.path == "/author") {
//	  next("/author");
//	  return false;
//}
//
//if(localStorage.getItem('isauth') == 0){
//	
//if (to.matched.some(function (item) {
//  return item.meta.isauth==1
//})) {
//	Dialog.alert({
//    message: '请先认证'
//  });
//	next('/login')
//} else 
//  next()
//}
//
//next()
//});

router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
	localStorage.UserId = "bc540e3d-8455-4471-93ec-bb221df5a1da";
});

//安卓点击返回键退出app问题
document.addEventListener('plusready',function(){
	var webview = plus.webview.currentWebview();
	plus.key.addEventListener('backbutton', function() {
	webview.canBack(function(e) {
	        if (e.canBack) {
	                webview.back();
	        } else {
	            webview.close();//hide,quit
	        }
	    })
	});
});

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
