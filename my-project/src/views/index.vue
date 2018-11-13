<template>
	<div>
		<div class="content">
			<!--<div class="carousel-wrap" id="carousel">
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
			</div>-->
			<div class="ourServe">
				<div class="title">
					<h1>服务项目</h1>
					<span class="subTitle">国际商标局授权注册商标 诚招代理</span>
				</div>
				<div class="serveLiset">
					<ul class="clearfix">
						<li><img src="../../static/img/sytb1.jpg"/></li>
						<li><img src="../../static/img/sytb2.jpg"/></li>
						<li><img src="../../static/img/sytb3.jpg"/></li>
						<li><img src="../../static/img/sytb4.jpg"/></li>
					</ul>
				</div>
				<div class="advertisement">
					<img src="../../static/img/guangao1.jpg"/>
				</div>
			</div>
			<div class="synopsis">
				<div class="title">
					<h1>公司简介</h1>
					<span class="subTitle">国际商标局授权注册商标 诚招代理</span>
				</div>
				<div class="synopsisCon clearfix">
					<img src="../../static/img/guanyuwomen1.jpg" class="fl"/>
					<div class="text fl">
						<p>太原艺泽知识产权代理有限公司成立于2015年，是经国家商标局批准备案，专门从事有关知识产权领域法律服务的专业代理机构。</p>
						<p>法律服务的专业代理机构。艺泽知识产权公司主要涉及商标注册、续展、变更、转让、争议、侵权诉讼，商标疑难，商标加急，商标包过版权登记，专利申请，专利发明转让等；同时，我们还为企业做高新认证， ISO9000认证，ISO14000认证，ISO18000认证，ISOCCC认证，保险咨询、企业理财咨询，企业合同咨询等其他与知识产权有关的法律咨询服务。</p>
						<span class="moreBtn fr">MORE</span>
					</div>
				</div>
			</div>
			<div class="new">
				<div class="title">
					<h1>新闻动态</h1>
					<span class="subTitle">国际商标局授权注册商标 诚招代理</span>
				</div>
				<div class="newList">
					<ul>
						<li class="clearfix">
							<div class="dataBtn fl">
								<em>11</em>
								09-11
							</div>
							<div class="newItem fr">
								<em class="newTitle">6类商品商标被摘不能7天无理由退货!</em>
								2017.1.11日，工商总局发布《网购退货暂行办法》：网络商...
							</div>
						</li>
						<li class="clearfix">
							<div class="dataBtn fr">
								<em>11</em>
								09-11
							</div>
							<div class="newItem fl">
								<em class="newTitle">他居然要求判令《战狼2》禁播？</em>
								4小时9741万，25小时破3亿，3天破6亿，6天破13亿，《战狼2》...
							</div>
						</li>
						<li class="clearfix">
							<div class="dataBtn fl">
								<em>11</em>
								09-11
							</div>
							<div class="newItem fr">
								<em class="newTitle">你以为企业倒闭了，商标就没用了？</em>
								很多企业注册商标，基本就是为了建设品牌、拓展市场、入驻天猫、京东等电商平台，而绝大多数的企...
							</div>
						</li>
					</ul>
					<span class="moreBtn">MORE</span>
				</div>
				<div class="advertisement">
					<img src="../../static/img/20170911055556_54892.jpg"/>
				</div>
				<div class="afterSale">
					<div class="title">
					<h1>商标后续服务及监控</h1>
					<span class="subTitle">国际商标局授权注册商标 诚招代理</span>
				</div>
					<ul class="clearfix">
						<li><img src="../../static/img/sy1.jpg" alt="" /><p>驳回复审</p><span>查询</span></li>
						<li><img src="../../static/img/sy2.jpg" alt="" /><p>商标转让</p><span>查询</span></li>
						<li><img src="../../static/img/sy3.jpg" alt="" /><p>商标异议申请</p><span>查询</span></li>
						<li class="clearRbor clearMargin"><img src="../../static/img/sy4.jpg" alt="" /><p>商标使用许可备案</p><span>查询</span></li>
						<li class="clearbor clearBbor"><img src="../../static/img/sy5.jpg" alt="" /><p>商标续展</p><span>查询</span></li>
						<li class="clearbor clearBbor"><img src="../../static/img/sy6.jpg" alt="" /><p>撤销三年未使用</p><span>查询</span></li>
						<li class="clearbor clearBbor"><img src="../../static/img/sy7.jpg" alt="" /><p>无效宣告</p><span>查询</span></li>
						<li class="clearRbor clearBbor clearMargin"><img src="../../static/img/sy8.jpg" alt="" /><p>商标变更</p><span>查询</span></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
//		data: function(){
//			return{
//				slideList: [
//				{
//					"clickurl": "#",
//					"dese": "nhwc",
//					"image": require('../../static/img/20170912172959_70732.jpg')
//				},
//				{
//					"clickurl": "#",
//					"dese": "nhwc",
//					"image": require('../../static/img/20170912173938_40819.jpg')
//				},
//				{
//					"clickurl": "#",
//					"dese": "nhwc",
//					"image": require('../../static/img/20170912174306_54939.jpg')
//				}
//				],
//				currentIndex: 0,
//				timer: ''
//			}
//		},
//		created: function(){
//		    this.$nextTick(()=>{
//			    this.timer = setInterval(()=>{
//				    this.autoPlay()
//			    },4000)
//			})
//		},
//		methods:{
//			go(){
//			   this.timer = setInterval(() => {
//			       this.autoPlay()
//			   }, 4000)
//			},
//			stop() {
//			   clearInterval(this.timer)
//			   this.timer = null
//			},
//			change(index) {
//			   this.currentIndex = index
//			},
//			autoPlay() {
//			   this.currentIndex++
//			   if (this.currentIndex > this.slideList.length - 1) {
//			       this.currentIndex = 0
//			   }
//			}
//		}
	}
</script>

<style>
</style>