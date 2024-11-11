import { createApp } from 'vue';
import './style.css';
import "./assets/font/font.css";
import App from './App.vue';
import ElementPlus from 'element-plus';
import router from '@/router';
import { createPinia } from 'pinia';
import lazyPlugin from 'vue3-lazy'
const pinia = createPinia()
// import 'element-plus/lib/theme-chalk/index.css';

 // 创建vue实例
 const app = createApp(App);
 // 挂载pinia
 app.use(router);
 app.use(pinia);
 app.use(ElementPlus)
 app.use(lazyPlugin, {
    loading: '../public/img/bg-5.png', // 图片加载时默认图片
    error: '../public/img/bg-5.png'// 图片加载失败时默认图片
})
 // 挂载实例
 app.mount('#app');
