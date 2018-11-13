<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <!--<router-link to="/foo" replace>foo</router-link>-->
    <heade></heade>
    <router-view>
    </router-view>
    <Footer></Footer>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Heade from './components/Heade.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'app',
  components: {
//  HelloWorld
		Heade,
		Footer
  }
}
</script>

<style>
#app {
  background-color: #F4F4F4;
}
</style>
