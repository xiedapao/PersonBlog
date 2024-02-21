import { createApp } from 'vue';
import './style.css';
import "./assets/font/font.css";
import App from './App.vue';
import ElementPlus from 'element-plus';
import router from '@/router';
import { createPinia } from 'pinia';
const pinia = createPinia()
// import 'element-plus/lib/theme-chalk/index.css';

 // 创建vue实例
 const app = createApp(App);
 // 挂载pinia
 app.use(router);
 app.use(pinia);
 app.use(ElementPlus)
 // 挂载实例
 app.mount('#app');
