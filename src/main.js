import Vue from 'vue'
import app from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import shopCar from './components/shopcar/shopcar.vue'
import newsList from './components/news/newslist.vue'
import newsInfo from './components/news/newsinfo.vue'
import photoList from './components/photo/photolist.vue'
import photoInfo from './components/photo/photoinfo.vue'

import Mint from 'mint-ui'
import axios from 'axios'
import moment from 'moment'
import hljs from 'highlight.js/lib/highlight';
import 'highlight.js/styles/github.css';

import 'mint-ui/lib/style.min.css'

import '../static/mui/css/mui.css'
import '../static/mui/css/mui.min.css'
import '../static/css/site.css'
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'


Vue.use(Viewer)
Vue.use(VueRouter)
Vue.use(Mint)

Vue.directive('highlight',(el) => {
	let blocks = el.querySelectorAll('code')
	blocks.forEach((block) => {
		hljs.highlightBlock(block)
	})
})

Vue.filter('datefmt', function(input,datafmtString) {
	// 试用momentjs
	return moment(input).format(datafmtString)
})

let router = new VueRouter({
	routes: [
		{path: '/', redirect: '/Home'},
		{path: '/Home', component: Home},
		{path: '/shopCar', component: shopCar},
		{path: '/news/newslist',component: newsList},
		{path: '/news/newsinfo/:id',component: newsInfo},
		{path: '/photo/photolist',component: photoList},
		{path: '/photolist/photoinfo/:id', component: photoInfo}
	],
	linkActiveClass: 'mui-active'
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