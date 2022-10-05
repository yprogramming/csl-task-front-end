import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store.js';

import Register from '@/pages/Register.vue'
import Dashboard from '@/views/Dashboard.vue';
import Login from '@/pages/Login.vue';
import Profile from '@/pages/Profile.vue';
import User from '@/pages/User.vue';



Vue.use(VueRouter)

const routes = [{
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
        children: [{
                path: 'profile',
                name: 'profile',
                component: Profile
            },
            {
                path: 'user',
                name: 'user',
                component: User
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


export default router