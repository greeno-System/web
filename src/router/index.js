import Vue from 'vue'
import VueRouter from 'vue-router'
import PageView from '../views/PageView.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: PageView,
        meta: {
            title: 'Dashboard'
        }
    }, {
        path: '/setup',
        name: 'setup',
        component: PageView,
        meta: {
            title: 'Setup'
        }
    }, {
        path: '/components',
        name: 'components',
        component: PageView,
        meta: {
            title: 'Komponenten'
        }
    }, {
        path: '/state',
        name: 'state',
        component: PageView,
        meta: {
            title: 'Status'
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
