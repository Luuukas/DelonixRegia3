import Vue from 'vue'
import Router from 'vue-router'

import Main from './components/Main'
import Entry from './components/Entry'
import Empty from './components/Empty'
import Article from './components/Article'
<<<<<<< HEAD
import CrowdFundingForm from './components/CrowdFundingForm'
=======
>>>>>>> 0764bd6b4dc52f28a1665bb48877d82ecc2f7faa

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
<<<<<<< HEAD
                },
                {
                    path: '/CrowdFundingForm',
                    name: CrowdFundingForm,
                    component: CrowdFundingForm
=======
>>>>>>> 0764bd6b4dc52f28a1665bb48877d82ecc2f7faa
                }
            ]
        },
        { path: '/entry', name: 'Entry', component: Entry },
        { path: '/', redirect: '/entry' }
    ]
})