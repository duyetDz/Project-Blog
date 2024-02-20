import VueRouter from 'vue-router'
import Vue from 'vue'
import HomePage from './pages/HomePage'
import Contact from './pages/Contact'
import AboutUs from './pages/AboutUs'
import BlogDetail from './pages/BlogDetail'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import store from './store'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home-page',
        component: HomePage
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    },
    {
        path: '/blog-detail/:title.:id',
        name: 'blog-detail',
        component: BlogDetail,
        beforeEnter: (to, from, next) => {
            if (store.state.isLogin) {
                next()
            } else {
                next({ path: '/login', query: { redirect: 'blog-detain' } })
            }

        }
    },
    {
        path: '/about-us',
        name: 'about-us',
        component: AboutUs
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '*',
        name: 'not-found',
        component: NotFound
    },

]


const router = new VueRouter({
    // mode: 'history',
    routes // 
})

export default router