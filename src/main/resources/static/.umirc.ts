import { defineConfig } from 'umi';

export default defineConfig({
  dva: {
    immer: true,
    hmr: true,
  },
  routes: [
    { path: '/login', component: '@/pages/login/login' },
    {
      path: '/',
      component: '@/layouts/base',
      routes: [
        { path: '/', redirect: '/index', exact: true},
        { path: '/index', redirect: '/todo/index', exact: true},
        { path: '/todo/index', component: '@/pages/todo/index'},
        { path: '/todo/new', component: '@/pages/todo/new'},
      ]
    }
  ],
});
