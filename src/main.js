import Vue from 'vue'
import app from './App.vue'
import VueRouter from 'vue-router'
import login from './components/account/login.vue'
import register from './components/account/register.vue'

import Mint from 'mint-ui'

import 'mint-ui/lib/style.min.css'

import '../static/mui/css/mui.css'

Vue.use(VueRouter)
Vue.use(Mint)

let router = new VueRouter({
	routes: [
		{path: '/login', component: login},
		{path: '/register', component: register}
	]
})

new Vue({
	el: '#app',
	render: c => c(app),
	router,
	methods: {
		show() {
			Toast('heihi')
		}
	}
})