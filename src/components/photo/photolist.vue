<template >
	<div id="templ">
		<div class="catego">
			<ul :style="{width: (categories.length+1)*60 + 'px'}">
				<li>干货全部分类</li>
				<li v-for="item of categories" :key="item._id">{{item.title}}</li>
			</ul>
		</div>
		<div class="container">
			<ul>
				<li  v-for="item of list" :key="item._id">
					<router-link v-bind="{to: '/photolist/photoinfo/'+item._id}">
						<img v-lazy="item.images[0]" >
						<div><p>{{item.desc}}</p></div>
					</router-link>
				</li >
			</ul>
		</div>
	</div>
</template>

<script>
	import {Toast} from 'mint-ui'
	import axios from 'axios'
	import common from '../../kits/common.js'
	
	export default {
		data() {
			return {
				categories: [],
				list: []
			}
		},
		created() {
			this.getdata()
		},
		methods: {
			getdata() {
				let url = common.domain + '/api/v2/categories/GanHuo'
				axios.get(url).then(res => {
					if (res.data.status != 100) {
						Toast('获取分类信息错误')
						return 
					}
					this.categories = res.data.data
				})
				let randUrl = common.domain + '/api/v2/hot/likes/category/Article/count/20'
				axios.get(randUrl).then(res => {
					this.list = res.data.data
					console.log(this.list)
				})
			}
		}
	}
</script>

<style scoped>
	.catego {
		width:375px;
		max-width: 375px;
		overflow-x: auto;
	}
	.catego ul{
		list-style-type: none;
		padding: 0;
		width: 1000px;
		margin: 0;
	}
	.catego li {
		display: inline-block;
		color: #0000EE;
		font-size: 14px;
		padding-left: 10px;
		margin: 2px;
	}
	image[lazy=loading] {
	  width: 40px;
	  height: 300px;
	  margin: auto;
	}
	.container ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}
	.container img {
		width: 100%;
		height: auto;
		display: block;
	}
	.container li {
		margin-top: 0;
		width: 375px;
		position: relative;
		margin-bottom: 5px; 
	}
	.container div {
		background-color: rgba(0,0,0,.2);
		padding: 5px 5px 0;
		position: absolute;
		bottom: 0;
		width: 100%;
	}
	.container p {
		color: white;
	}
</style>
