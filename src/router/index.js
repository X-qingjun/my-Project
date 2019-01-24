import Vue from 'vue'
import Router from 'vue-router'
import homeRoute from './homeRoute'
import categoryRoute from './categoryRoute'
import wearRoute from './wearRoute'
import cartRoute from './cartRoute'
import mineRoute from './mineRoute'
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        homeRoute,
        categoryRoute,
        wearRoute,
        cartRoute,
        mineRoute,
        {
            path: '/',
            redirect: '/home'
        }
    ]
})