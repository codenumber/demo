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
		<comment :id="id"></comment>
	</div>
</template>

<script>
	import axios from 'axios'
	import {Toast} from 'mint-ui'
	import marked from 'marked' //处理请求回来的Markdown语法数据
	import common from '../../kits/common.js'
	import comment from '../subcomponents/comment.vue'
	
	export default {
		data() {
			return {
				info: {},
				id: ''
			}
		},
		created() {
			this.getNewsInfo()
			this.id = this.$route.params.id
		},
		methods: {
			getNewsInfo() {
				let url = common.domain + "/api/v2/post/" + this.$route.params.id
				axios.get(url)
					.then( res => {
						if (res.data.status != 100) {
							return Toast('获取失败')
						}
						
						res.data.data.markdown = marked(res.data.data.markdown,{ sanitize: true, gfm: true,tables: true, smartLists: true}) //用Markdown出错，用marked
						this.info = res.data.data
						//请求回来的数据有一个出错，避免报错
						
						this.info.images = this.info.images.length > 1 ? this.info.images[0] : this.info.images 
						
					})
			}
		},
		components: {
			comment,
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
	.htmlTemp >>> ul{
		margin: 0;
		padding: 0;
		list-style-type: none;
	}
	 .htmlTemp >>> ol {
		 margin: 0;
		 padding: 0;
	 }
	.htmlTemp >>> ul li {
		font-size: 14px;
	}
	.htmlTemp >>> img, .htmlTemp >>> table,table{
		width: 100%;
		overflow: hidden;
		margin: 0;
	}
	.htmlTemp >>> p:not(>img) {
		text-indent: 20px;
		margin: 5px 0 0 5px;
	}
	
</style>
