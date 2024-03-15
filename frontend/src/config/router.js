import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home/Home'
import AdminPage from '@/components/admin/AdminPages'

Vue.use(VueRouter)

const routes = [{
    name: 'home',
    path: '/',
    component: Home
}, {
    name: 'adminPages',
    path: '/admin',
    component: AdminPage
}]

export default new VueRouter({
    mode: 'history',
    routes
})

