import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: '登录',
            keepAlive: true,
            requireAuth: false
        },
        component: () => import('@/pages/login.vue')
    },
    {
        path: '/me',
        name: 'Me',
        meta: {
            title: '关于',
            keepAlive: true,
            requireAuth: true
        },
        component: () => import('@/components/Me.vue')
    },
    {
        path: '/',
        name: 'Index',
        meta: {
            title: '首页',
            keepAlive: true,
            requireAuth: true
        },
        component: () => import('@/components/Me.vue')
    },
    {
        path: '/vueUse',
        name: 'VueUse',
        meta: {
            title: '函数',
            keepAlive: true,
            requireAuth: true
        },
        component: () => import('@/pages/vueUse.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
