import { route } from 'quasar/wrappers';
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';
import { StateInterface } from '../store';
import routes from './routes';
import { LocalStorage, SessionStorage } from 'quasar';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route<StateInterface>(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === 'history'
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(
      process.env.MODE === 'ssr' ? void 0 : process.env.VUE_ROUTER_BASE
    ),
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Router.beforeEach((to: any, from: any, next) => {
    const login =  LocalStorage.getItem('login')
    let auth = false
    if (login && login !== '') auth = true
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (to.name === 'login' && login) {
      next({ name: 'dashboard', path: '/dashboard' })
      return
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (auth && !login && to.name !== 'login') {
      LocalStorage.clear()
      SessionStorage.clear()
      next({ name: 'login', path: '/login' })
      return
    }
    next()
    return
  })

  return Router;
});
