import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import {createWebHashHistory, createRouter} from 'vue-router'
import Home from './views/home.vue'
import Doc from './views/doc.vue'

const history = createWebHashHistory()
const router = createRouter({
  history:history,
  routes: [
    {path:'/', component: Home}, //访问'/'路径时，显示Frank组件
    {path: '/doc', component: Doc}
  ]
})
const app = createApp(App)//创建app实例，并且传入app组件作为参数
app.use(router)
app.mount('#app')
