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
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCXCUVe43qi1sXa9MeYjxNica_mrylumYg",
  authDomain: "do-keenan-final.firebaseapp.com",
  projectId: "do-keenan-final",
  storageBucket: "do-keenan-final.firebasestorage.app",
  messagingSenderId: "416708817663",
  appId: "1:416708817663:web:318c624639b64cc36252ca",
  measurementId: "G-D4L5W1HXND"
};

// Initialize Firebase

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

initializeApp(firebaseConfig);

app.use(myRouter)

app.mount('#app')
