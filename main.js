// 导入 VUe 框架
import Vue from 'vue';
// 导入 app.vue 组件
import App from './app.vue';
// 导入 vue-router 路由配置文件
import router from './src/routers/router';

import Bootstrap from 'bootstrap';

import Jquery from 'jquery';


//import VueRouter from 'vue-router';

//import iView from 'iview';

import 'iview/dist/styles/iview.css';


/*Vue.use(Vuex);*/
//Vue.use(iView);
Vue.use(Bootstrap);
Vue.use(Jquery);


new Vue({
    el:'#app',
    router:router,
    render:h =>h(App)
})
