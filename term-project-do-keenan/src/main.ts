import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import Login from './components/Login.vue'
import HomePage from './components/HomePage.vue'
import Deals from './components/Deals.vue'
import Accessories from './components/Accessories.vue'
import GameLibrary from './components/GameLibrary.vue'
import Hardware from './components/Hardware.vue'
import Profile from './components/Profile.vue'
import Games from './components/Games.vue'
import OrderHistory from './components/OrderHistory.vue'
import Cart from './components/Cart.vue'

const app = createApp(App)

const routerRoute = [
    {path: '/', component: HomePage},
    {path: '/login', component: Login},
    {path: '/hardware', component: Hardware},
    {path: '/profile', component: Profile},
    {path: '/cart', component: Cart},
    {path: '/deals', component: Deals},
    {path: '/games', component: Games},
    {path: '/accessories', component: Accessories},
    {path: '/orders', component: OrderHistory},
    {path: '/games-library', component: GameLibrary},
]

const myRouter = createRouter({history: createWebHashHistory(), routes: routerRoute})

app.use(createPinia())

app.use(myRouter)

app.mount('#app')
