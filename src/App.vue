<template>
	<div>
		<h3 class="say">{{msg}}</h3>
		<input type="button" value="click" @click="show">
		<router-link to="/login">to login</router-link>
		<router-link to="/register"> to register </router-link>
		<router-view></router-view>
		<div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">Home</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">Email</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">Chat</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">location</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">Search</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">Phone</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-gear"></span>
		                    <div class="mui-media-body">Setting</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-info"></span>
		                    <div class="mui-media-body">about</div></a></li>
		           <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-more"></span>
		                    <div class="mui-media-body">more</div></a></li>
		        </ul> 
		</div>
		<div class="title">
			缩略图居左
		</div>
		<ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media">
				<a href="javascript:;">
					<img class="mui-media-object mui-pull-left" src="https://c-ssl.duitang.com/uploads/item/201603/04/20160304232555_Lj5Nt.thumb.700_0.jpeg">
					<div class="mui-media-body">
						幸福
						<p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
					</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media">
				<a href="javascript:;">
					<img class="mui-media-object mui-pull-left" src="https://c-ssl.duitang.com/uploads/item/201603/04/20160304232555_Lj5Nt.thumb.700_0.jpeg">
					<div class="mui-media-body">
						木屋
						<p class='mui-ellipsis'>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
					</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media">
				<a href="javascript:;">
					<img class="mui-media-object mui-pull-left" src="https://c-ssl.duitang.com/uploads/item/201603/04/20160304232555_Lj5Nt.thumb.700_0.jpeg">
					<div class="mui-media-body">
						CBD
						<p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
					</div>
				</a>
			</li>
		
		</ul>
		
	</div>
</template>
<script>
	import {Toast} from 'mint-ui'
	
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