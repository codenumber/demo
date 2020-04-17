<template>
	<div id="templ">
		<ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
				<router-link v-bind="{to:'/news/newsinfo/'+item._id}">
					<img class="mui-media-object mui-pull-left" :src="item.images[0]">
					<div class="mui-media-body">
						<span class="title">{{item.title}}</span>
						<span class='mui-ellipsis ft'>创建时间：{{item.publishedAt | datefmt('YYYY-MM-DD') }}</span>
						<span class="ft">{{item.author}}</span>
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	import axios from 'axios'
	import {Toast} from 'mint-ui'
	
	export default {
		data() {
			return {
				list: []
			}
		},
		created() {
			this.getNews()
		},
		methods: {
			getNews() {
				let url = "https://gank.io/api/v2/data/category/GanHuo/type/Android/page/1/count/10"
				axios.get(url)
					.then(res => {
						if(res.data.status != 100) {
							Toast('获取新闻失败')
							return
						}
						for (let item of res.data.data) {
							this.list.push(item)
						}
					})
			}
		}
	}
</script>

<style scoped>
	.mui-table-view img {
		width: 140px;
		height: 45px;
	}
	.title {
		display: block;
		width: 300px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		color: grey;
		font-size: 15px;
	}
	.ft {
		margin-top: 3px;
		color: #26a2ff;
		font-size: 12px;
	}
	.ft:last-child {
		margin-left: 10px;
		color: #323232;
	}
</style>
