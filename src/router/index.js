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
            title: 'Dashboard',
            subtitle: 'Übersicht',
            component: 'Dashboard'
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
    }, {
        path: '/debug',
        name: 'debug',
        component: PageView,
        meta: {
            title: 'Debug'
        }
    }, {
        path: '*',
        name: '404',
        component: PageView,
        meta: {
            title: 'Not found',
            component: 'NotFound'
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

router.afterEach((to) => {
    document.title = 'greeno | ' + to.meta.title;
});

export default router
