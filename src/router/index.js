import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'


Vue.use(Router)

export default new Router({
    mode : 'history',
    routes: [
        {
            path: "/",
            redirect: {
                name: "Home"
            },
            component: Home
        },
        
    ]
})

const router = new VueRouter({
    mode: 'history',
})
