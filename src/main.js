import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from "vue-router"
import MainComponent from "./pages/index.vue"
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const Home = { template: '<div>Home</div>' }

const routes = [
  { path: '/', component: MainComponent },
]
const vuetify = createVuetify({
    components,
    directives,
  })
  
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

createApp(App).use(router).use(vuetify).mount("#app")