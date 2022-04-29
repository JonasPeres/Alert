import { RouteRecordRaw } from 'vue-router';
import { LocalStorage } from 'quasar';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/home/Index.vue') }],
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('src/layouts/NotLoggedLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/login/Index.vue') }],
  },

  {
    path: '/register',
    name: 'register',
    meta: {
      name: 'Cadastro'
    },
    component: () => import('src/pages/register/Index.vue'),
  },

  {
    path: '/dashboard',
    name: 'dashboard',
    meta: {
      name: 'Dashboard'
    },
    component: () => import('src/layouts/LoggedLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/dashboard/Index.vue') }],
    beforeEnter: (to, from, next) => {
      const login = LocalStorage.getItem('login')
      if (!login) {
        next({ path: '/login'})
        return
      }
      next()
    }
  },

  {
    path: '/schedule',
    name: 'schedule',
    meta: {
      name: 'Agenda'
    },
    component: () => import('src/layouts/LoggedLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/schedule/Index.vue') }],
    beforeEnter: (to, from, next) => {
      const login = LocalStorage.getItem('login')
      if (!login) {
        next({ path: '/login'})
        return
      }
      next()
    }
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
