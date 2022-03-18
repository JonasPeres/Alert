import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: '',
    component: () => import('src/layouts/NotLoggedLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/login/Index.vue') }],
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('src/layouts/NotLoggedLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/login/Index.vue') }],
  },

  {
    path: '/dashboard',
    name: 'dashboard',
    meta: {
      name: 'Dashboard'
    },
    component: () => import('src/layouts/LoggedLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/home/Index.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
