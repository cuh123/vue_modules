import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from '@/components/layout/Header'
import Left from '@/components/layout/Left'

import AdminMain from '@/views/admin/admin-main'
import Login from '@/views/admin/admin-login'

Vue.use(VueRouter)

const routes = [
    // 관리자 관리
    {
        path: '/admin',
        name: 'adminmain',
        components: {
            header: Header,
            left: Left,
            default: AdminMain
        }
    },
    // 로그인
    {
        path: '/',
        name: 'login',
        component: Login
    },
    {
        path: '*',
        beforeEnter: (to, from, next) => {
            next('/admin')
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router