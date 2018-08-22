
// 导入 VUe 框架
import Vue from 'vue';
// 导入 vue-router 组件
import VueRouter from 'vue-router';

const Routers=[
    {
        path: '/index',
        component: (resolve) => require(['/app.vue'], resolve)
    },
    /*{
        path:'/about',
        meta:{
            title:'关于'
        },
        component:(resolve) => require(['./views/about.vue'],resolve)
    },
    {
        path:'/user/:id',
        meta:{
            title:'个人主页'
        },
        component:(resolve) => require(['./views/user.vue'],resolve)
    },*/
    {
        path:'*',
        redirect:'/index'
    }

];
const router = new VueRouter({
    // 使用 html5 的 History 路由模式
    mode: 'history',
    routes: Routers
});
// beforeEach
router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title;
    next();

    /*if (window.localStorage.token) {
        next();
    } else {
        next('/login');
    }*/
});
// afterEach
router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);  // 滚动条返回顶部
});

Vue.use(VueRouter);

export default router;