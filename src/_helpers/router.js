import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../components/pages/home/HomePage';
import LoginPage from '../components/pages/login/LoginPage';
import ProductListPage from '../components/pages/product/ProductListPage';
import CompletedOrderListPage from '../components/pages/order/CompletedOrderListPage';


Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: HomePage },
    { path: '/login', component: LoginPage },
    { path: '/product/list', component: ProductListPage },
    { path: '/order/completed', component: CompletedOrderListPage },
    // { path: '/user/list', component: UserListPage },
    // { path: '/profile', component: ProfilePage },
    // { path: '/settings', component: SettingPage },
    // { path: '/search', component: SearchPage },

    // otherwise redirect to home
    { path: '*', redirect: '/' }
  ]
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
});