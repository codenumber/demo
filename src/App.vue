<template>
	<div>
		<mt-header fixed title="商城"></mt-header>
		
		<router-view></router-view>		
		
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/Home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/tabbar-with-chat">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopCar">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</router-link>
		</nav>
		
	</div>
</template>
<script>
	import {Toast} from 'mint-ui'
	import axios from 'axios'
	export default {
		data() {
			return {
				msg: "Hello World"
			}
		},
		methods: {
			show() {
				Toast('heih')
			}
		}
	
	}
</script>
<style>
	.say {
		text-align: center;
		color: red;
		border: 1px solid red;
	}
</style>