import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/index'
import About from '@/views/aboutUs'
import jianjie from '@/views/jianjie'
import rongyu from '@/views/rongyu'
import ContactUs from '@/views/ContactUs'
import Serve from '@/views/Serve'
//import HelloWorld from '@/components/HelloWorld'
Vue.use(VueRouter)

//const Foo = { template: '<div>foo</div>' }
//const Bar = { template: '<div>bar</div>' }

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
{ path: '/', component: Index },
{ path: '/about/:id', component: About,
	children:[
	 {
	 	 path: '/',
     component: jianjie
	 },
	 {
	 	 path: 'rongyu',
     component: rongyu
	 }
	]
},
{ path: '/contactus', component: ContactUs },
{ path: '/serve', component: Serve }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export default new VueRouter({
  routes // short for `routes: routes`
})
