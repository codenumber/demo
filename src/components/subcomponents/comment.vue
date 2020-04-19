<template>
	<div class="comment">
		<h3>发表评论</h3>
		<hr>
		<textarea placeholder="可以输入但别提交,没有数据提交接口"></textarea>
		<mt-button type="primary">提交评论</mt-button>
		<div v-show="!isshow">
			<h3 class="list">评论列表</h3>
			<hr>
			<div class="mui-content"  v-for="item of comments" :key="item._id">
				<div class="title">
					<span>{{comments.indexOf(item) + 1}}</span>楼
					用户名：<span>{{item.userName}}</span>
					评论时间：<span>{{item.createdAt | datefmt('YYYY/MM/DD hh:mm:ss' )}}</span>
				</div>
				<ul class="mui-table-view">
					 <li class="mui-table-view-cell">{{item.comment}}</li>
				</ul>
			</div>
			<mt-button @click="changShowNum" plain :disabled="!showBtn"> <span v-show="showBtn">共{{allComment.length}}条评论,已显示{{comments.length}} 条</span>
			<span v-show="!showBtn">共{{allComment.length}}条评论,加载完毕</span></mt-button>
		</div>
		<div class="nullcomment" v-show="isshow">
			<p>-暂无评论-</p>
		</div>
	</div>
	
</template>

<script>
	import axios from 'axios'
	import common from '../../kits/common.js'
	import {Toast} from 'mint-ui'
	
	export default {
		data() {
			return {
				isshow: false,
				comments: [],
				showNum: 1 ,
				allComment: [],
				showBtn: true
			}
		},
		props: ['id'],
		methods: {
			getPostComment() {
				let url = common.domain + '/api/v2/post/comments/'+ this.id
				axios.get(url).then(res => {
					if (res.data.status != 100 ) {
						console.log(res)
						Toast('获取评论错误')
						return
					}
					this.allComment = res.data.data 
					
					let list = []
					
					this.allComment.forEach(item => {
						list.push(JSON.parse(item))	
						console.log(list)
					})
					this.allComment = list
					//如果数据多余5条，就进行分割
					this.comments = this.allComment.length > 5 ? this.allComment.slice(0,5) : this.allComment
					this.showBtn = this.allComment.length > 5 ? true : false
					this.isshow = this.comments.length == 0 ? true : false
					
				})
			},
			changShowNum() {
				this.showNum ++
				this.comments = this.allComment.slice(0,this.showNum * 5)
				if (this.showNum*5 > this.allComment.length ) {
					this.showBtn = false
				}
			}
		},
		created() {
			this.getPostComment()
		}
	}
</script>

<style scoped>
	.comment {
		margin-top: 10px;
	}
	.comment h3 {
		font-size: 18px;
	}
	.comment textarea {
		padding: 5px 5px 0;
		margin-bottom: 5px; 
		font-size: 14px;
	}
	button {
		width: 100%;
		
	}
	.title {
		padding: 8px 5px 3px;
		font-size: 12px;
	}
	.title span {
		color: #282A36;
		margin-right: 10px;
	}
	.title span:first-child {
		margin: 0;
		color: red;
	}
	.mui-table-view {
		height: 35px;
		font-size: 16px;
	}
	.nullcomment p{
		text-align: center;
		margin: 10px;
		font-size: 16px;
	}
	.mint-button--default.is-plain:active {
		background-color: #000080;
	}
	.mint-button--default.is-plain:disabled {
		border: 0;
		color: #282A36;
		font-size: 14px;
	}
	
</style>
