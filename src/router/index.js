import Vue from 'vue'
import VueRouter from 'vue-router'
import ShowBlogs from "../components/ShowBlogs"
import PostBlog from "../components/PostBlog"
import SingleBlog from "../components/SingleBlog"
import EditBlog from "../components/EditBlog"

Vue.use(VueRouter)

export default new VueRouter({
	routes: [
		{ path: '/', component: ShowBlogs },
		{ path: '/post', component: PostBlog },
		{ path: '/edit/:id', component: EditBlog },
		{ path: '/blog/:id', component: SingleBlog },
		{ path: '*', redirect: '/' }
	],
	mode: 'history'
})
