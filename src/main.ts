import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory, createRouter} from 'vue-router'
import Frank from './components/Frank.vue'
import Frank2 from './components/Frank2.vue'

const history = createWebHashHistory()
const router = createRouter({
  history:history,
  routes: [
    {path:'/', component: Frank}, //访问'/'路径时，显示Frank组件
    {path: '/xxx', component: Frank2}
  ]
})
const app = createApp(App)//创建app实例，并且传入app组件作为参数
app.use(router)
app.mount('#app')
