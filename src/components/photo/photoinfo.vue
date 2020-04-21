<template>
	<div id="templ">
		<div >
			<h3 class="title">{{info.title}}</h3>
			<p class="titleDesc">作者：<span>{{info.author}}</span>时间：<span>{{info.createdAt | datefmt('YYYY/MM/DD')}}</span>分类：<span>{{info.category}}</span> </p>
		</div>
		<div class="content">
			<div class="mui-content">
				<ul class="mui-table-view mui-grid-view mui-grid-9">
					 <li  class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-viewer v-for="item of info.content">
						<img :src="item">
					</li>
				</ul> 
			</div>
			<p>{{info.desc}}</p>
		</div>
		<comment :id="id"></comment>
	</div>
</template>

<script>
	import axios from 'axios'
	import common from '../../kits/common.js'
	import {Toast} from 'mint-ui'
	import comment from '../subcomponents/comment.vue'
	
	export default {
		data() {
			return {
				id: "",
				info:[],
				list: []
			}
		},
		created() {
			this.id = this.$route.params.id
			this.getdata()
		},
		methods: {
			getdata() {
				let url = common.domain + '/api/v2/post/' + this.id
				axios.get(url).then(res => {
					if (res.data.status != 100) {
						return Toast('数据获取错误')
					}
					this.info = res.data.data
					let re = /<img.*?src="(.*?)".*?\/?>/g
					let list = []
					while (true) {
						let result = re.exec(this.info.content)
						if(result != null) {
							list.push(result["1"])
						}else {
							break
						}
					}
					this.info.content = list
					
					console.log(this.info.content)
				})
			}
		},
		components: {
			comment
		}
	}
</script>

<style scoped>
	h3.title {
		color: #0000EE;
		
	}
	
	.content li, .content img {
		width: 90px;
		height: 90px;
	}
	.titleDesc {
		margin-bottom: 5px;
	}
	.titleDesc span {
		margin-right: 10px;
	}
	.mui-content>.mui-table-view:first-child  {
		margin-top: 5px;
	}
</style>
