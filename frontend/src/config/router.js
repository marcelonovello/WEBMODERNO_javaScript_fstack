import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home/Home'
import AdminPage from '@/components/admin/AdminPages'
import ArticlesByCategory from '@/components/article/ArticlesByCategory'
import ArticleById from '@/components/article/ArticleById'

import {userKey} from '@/global'

Vue.use(VueRouter)

const routes = [{
    name: 'home',
    path: '/',
    component: Home,
}, {
    name: 'adminPages',
    path: '/admin',
    component: AdminPage,
    meta: { requiresAdmin: true }
}, {
    name: 'articlesByCategory',
    path: 'categories/:id/articles',
    component: ArticlesByCategory,
}, {
    name: 'articleById',
    path: '/articles/:id',
    component: ArticleById
}, {
    name:'articleById',
    path:'/auth',
    component: Auth
}]

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    const json = localStorage.getItem(userKey)

    if(to.matched.some(record => MediaRecorder.meta.requiresAdmin)) {
        const user = JSON.parse(json)
        user && user.admin ? next() : next({ path: '/' })
    } else {
        next()
    }
})
export default router
