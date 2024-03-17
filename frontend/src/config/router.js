import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home/Home'
import AdminPage from '@/components/admin/AdminPages'
import ArticlesByCategory from '@components/articles/ArticlesByCategory'
import ArticleById from '@components/articles/ArticleById'

Vue.use(VueRouter)

const routes = [{
    name: 'home',
    path: '/',
    component: Home
}, {
    name: 'adminPages',
    path: '/admin',
    component: AdminPage
}, {
    name: 'articlesByCategory',
    path: 'categories/:id/articles',
    component: ArticlesByCategory
}, {
    name: 'articleById',
    path: '/articles/:id',
    component: ArticleById
}]

export default new VueRouter({
    mode: 'history',
    routes
})

