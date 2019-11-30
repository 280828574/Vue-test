import Vue from 'vue';
import Router from 'vue-router';
// import store from '@/store';
import routes from './routes';

process.env.NODE_ENV === 'development' && Vue.use(Router);

const router = new Router({
    routes
});
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    if (['/login'].includes(to.path)) {
        next();
    }
    // else if (!window.xtoken) {
    //     next({
    //         path: '/login',
    //         query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
    //     });
    // }
    else {
        next();
    }
});
export default router;
