<template>
	<div id="templ">
		<div >
			<p class="title">{{info.title}}</p>
			<p class="titleDesc">作者：<span>{{info.author}}</span>时间：<span>{{info.createdAt | datefmt('YYYY/MM/DD')}}</span>分类：<span>{{info.category}}</span> </p>
		</div>
		<div class="content">
			<img :src="info.images" alt="">
			<div class="htmlTemp" v-highlight v-html="info.markdown"></div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import {Toast} from 'mint-ui'
	import marked from 'marked' //处理请求回来的Markdown语法数据
	
	export default {
		data() {
			return {
				info: {}
			}
		},
		created() {
			this.getNewsInfo()
		},
		methods: {
			getNewsInfo() {
				let url = "https://gank.io/api/v2/post/" + this.$route.params.id
				axios.get(url)
					.then( res => {
						if (res.data.status != 100) {
							return Toast('获取失败')
						}
						res.data.data.markdown = marked(res.data.data.markdown,{ sanitize: true }) //用Markdown出错，用marked
						this.info = res.data.data
						
						
					})
			}
		}
	}
	
</script>

<style scoped>
	p.title  {
		display: inline-block;
		color: #0062CC;
		font-size: 25px;
		font-weight: 600;
		margin: 10px 0 4px 5px;
		height: 35px;
		line-height: 35px;
	}
	.titleDesc span {
		font-size: 12px;
		font-weight: bolder;
		margin-right: 5px;
	}
	.content img {
		width: 100%;
	}
	.htmlTemp >>> h2 {
		font-size: 22px;
		margin: 10px 0 3px 5px;
	}
	.htmlTemp >>> h3 {
		font-size: 20px;
		margin-left: 5px
	}
	.htmlTemp >>> ul {
		list-style-type: none;
	}
	.htmlTemp >>> ul li {
		margin-left: -20px;
		font-size: 14px;
	}
	.htmlTemp >>> img, .htmlTemp >>> table{
		width: 100%;
		overflow: hidden;
	}
	.htmlTemp >>> p {
		text-indent: 20px;
		margin: 5px 0 0 5px;
	}
</style>
