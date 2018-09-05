// 导入 VUe 框架
import Vue from 'vue';
// 导入 app.vue 组件
import App from './app.vue';
// 导入 vue-router 路由配置文件
import router from './src/routers/router';


/*
import Bootstrap from 'bootstrap';

import Jquery from 'jquery';
*/


//import VueRouter from 'vue-router';

import iView from 'iview';

import 'iview/dist/styles/iview.css';

import './style.css';



/*Vue.use(Vuex);*/
Vue.use(iView);
/*Vue.use(Bootstrap);
Vue.use(Jquery);*/


new Vue({
    el:'#app',
    router:router,
    render:h =>h(App)
})

// 注册
Vue.directive('my-directive', {
    bind: function () {},
    inserted: function () {},
    update: function () {},
    componentUpdated: function () {},
    unbind: function () {}
})

// 注册 (指令函数)
Vue.directive('my-directive', function () {
    // 这里将会被 `bind` 和 `update` 调用
})

// getter，返回已注册的指令
var myDirective = Vue.directive('my-directive');