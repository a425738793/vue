<template>
	<div>
		<div class="header">
			<div class="navWrap">
				<div class="header_content clearfix">
					<div class="logo fl"><img src="../../static/img/log.png"/></div>
					<ul class="nav fl">
						<li class="navList"><router-link to="/">网站首页</router-link></li>
						<li class="navList"><router-link to="/about/1">关于我们</router-link></li>
						<li class="navList"><router-link to="">产品展示</router-link></li>
						<li class="navList"><router-link to="">新闻中心</router-link></li>
						<li class="navList"><router-link to="/serve">服务监控</router-link></li>
						<li class="navList"><router-link to="/contactus">联系我们</router-link></li>
					</ul>
					<div class="search fr">
						<input type="text" name="" id="" value="" placeholder="请输入要搜索的内容" />
						<span class="searchIcon"></span>
					</div>
				</div>
			</div>
			<div class="carousel-wrap" id="carousel">
				<transition-group tag="ul" class="slide-ul" name="list">
					<li v-for="(list,index) in slideList" :key="index" v-show="index===currentIndex" @mouseenter="stop" @mouseleave="go">
						<a :href="list.clickUrl">
							<img :src='list.image' :alt="list.desc"/>
						</a>
					</li>
				</transition-group>
				<div class="carousel-items">
					<span v-for="(item,index) in slideList.length" :class="{'active':index===currentIndex}" @mouseover="change(index)"></span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
data: function(){
			return{
				slideList: [
				{
					"clickurl": "#",
					"dese": "nhwc",
					"image": require('../../static/img/20170912172959_70732.jpg')
				},
				{
					"clickurl": "#",
					"dese": "nhwc",
					"image": require('../../static/img/20170912173938_40819.jpg')
				},
				{
					"clickurl": "#",
					"dese": "nhwc",
					"image": require('../../static/img/20170912174306_54939.jpg')
				}
				],
				currentIndex: 0,
				timer: ''
			}
		},
		created: function(){
		    this.$nextTick(()=>{
			    this.timer = setInterval(()=>{
				    this.autoPlay()
			    },4000)
			})
		},
		methods:{
			go(){
			   this.timer = setInterval(() => {
			       this.autoPlay()
			   }, 4000)
			},
			stop() {
			   clearInterval(this.timer)
			   this.timer = null
			},
			change(index) {
			   this.currentIndex = index
			},
			autoPlay() {
			   this.currentIndex++
			   if (this.currentIndex > this.slideList.length - 1) {
			       this.currentIndex = 0
			   }
			}
		}
}
</script>

<style>
</style>