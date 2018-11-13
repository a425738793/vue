<template>
	<div>
		<div class="aboutUs">
			<div class="subnav clearfix">
				<span class="shugang"></span>
				<p>公司简介 / <em>ABOUT</em></p>
				<i class="curAdd">位置：{{add}}</i>
			</div>
			<div class="aboutBtn clearfix">
				<router-link to="/about/1" class="btn btn1" :class="{cur:$route.params.id==1}">公司简介</router-link>
				<router-link to="/about/2/rongyu" class="btn btn2" :class="{ cur:$route.params.id==2}">企业荣誉</router-link>
			</div>
			<router-view>
    		</router-view>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				add: ""
			}
		},
		created(){
			this.address()
		},
		updated(){
			this.address()
		},
		methods:{
			address(){
				if(this.$route.params.id == 1){
					this.add = '公司简介'
				}else if(this.$route.params.id == 2){
					this.add = '企业荣誉'
				}
			}
		}
	}
</script>

<style>
</style>