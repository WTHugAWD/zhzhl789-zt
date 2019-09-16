import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'
Vue.use(Vuex)

const state = {
	showTab:true,
	loginStatus:0,
	oPath:window.document.location.href.substr(0,window.document.location.href.lastIndexOf("/")),
}
export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations
})


