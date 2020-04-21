<template>
	<div id="templ">
		<div >
			<p class="title">{{info.title}}</p>
			<p class="titleDesc">作者：<span>{{info.author}}</span>时间：<span>{{info.createdAt | datefmt('YYYY/MM/DD')}}</span>分类：<span>{{info.category}}</span> </p>
		</div>
		<div class="content">
			<img :src="info.images" alt="">
			<div class="mui-content">
				<ul class="mui-table-view mui-grid-view mui-grid-9">
					 <li  class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" >
						    <viewer >
						      <img v-for="src in info.content" :src="src" :key="src">{{src}}
						    </viewer>
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
				info:[]
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
				
					let list =this.info.content.match(/<img[\s\w/'/"/\d/=:.\u4e00-\u9fa5]+>/gim)
					this.info.content = list
					
				})
			}
		},
		components: {
			comment
		}
	}
</script>

<style scoped>
	
</style>
