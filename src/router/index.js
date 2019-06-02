import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'
import ShowBlogs from "../components/ShowBlogs"
import PostBlog from "../components/PostBlog"
import SingleBlog from "../components/SingleBlog"
import EditBlog from "../components/EditBlog"
import Login from "../components/Login"
import Register from "../components/Register"

Vue.use(VueRouter)

const router = new VueRouter({
	routes: [
		{ path: '/home', name: 'home', component: ShowBlogs },
		{ path: '/post', name: 'post', component: PostBlog },
		{ path: '/edit/:id', name: 'edit', component: EditBlog },
		{ path: '/blog/:id', name: 'blog', component: SingleBlog },
		{ path: '/login', name: 'login', component: Login },
		{ path: "/register", name: 'register', component: Register },
		{ path: '*', redirect: '/home' }
	],
	mode: 'history',
	scrollBehavior(to, from, savedposition) {
		if (savedposition) {
			return savedposition;
		} else {
			return { x: 0, y: 0 }
		}
	},
})
router.beforeEach((to, from, next) => {
	const currentUser = firebase.auth().currentUser;
	const nextRoute = ['post', 'edit', 'blog']
	if (nextRoute.indexOf(to.name) >= 0) {
		console.log(to.name);
		if (!currentUser) {
			next('home');
			return;
		}
		if (currentUser) {
			next();
			return;
		}
	} else {
		if (currentUser && to.name === 'login') {
			next('home');
			return;
		}
		next();
		return;
	}

})
export default router