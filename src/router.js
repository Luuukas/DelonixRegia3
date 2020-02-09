import Vue from 'vue'
import Router from 'vue-router'

import Main from './components/Main'
import Entry from './components/Entry'
import Empty from './components/Empty'
import Article from './components/Article'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/main',
            name: 'Main',
            component: Main,
            children: [
                {
                    path: '/Empty',
                    name: 'Empty',
                    component: Empty
                },
                {
                    path: '/',
                    redirect: '/Empty'
                },
                {
                    path: '/Article',
                    name: 'Article',
                    component: Article
                }
            ]
        },
        { path: '/entry', name: 'Entry', component: Entry },
        { path: '/', redirect: '/entry' }
    ]
})