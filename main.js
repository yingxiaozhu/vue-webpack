// 导入 VUe 框架
import Vue from 'vue';
// 导入 app.vue 组件
import App from './app.vue';
// 导入 vue-router 路由配置文件
import Routers from './src/routers/router.js';


import VueRouter from 'vue-router';

import iView from 'iview';

import 'iview/dist/styles/iview.css';


/*Vue.use(Vuex);*/
Vue.use(iView);

Vue.use(VueRouter);

console.log(Routers);
const RouterConfig = {
    routes: Routers
};
const router=new VueRouter(RouterConfig);


/*<script>
new Vue({
    el: '#app',
    data: {
        visible: false
    },
    methods: {
        show: function () {
            this.visible = true;
        }
    }
})
</script>*/
new Vue({
    el:'#app',
    router:router,
    render:h =>h(App)
})
