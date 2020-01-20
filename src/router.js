import Vue from 'vue'
import Router from 'vue-router'

import Main from './components/Main'
import Entry from './components/Entry'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/main', name: 'Main', component: Main },
        { path: '/entry', name: 'Entry', component: Entry },
        { path: '/', redirect: '/entry' }
    ]
})