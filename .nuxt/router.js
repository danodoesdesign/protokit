import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _636c052a = () => interopDefault(import('../pages/agents.vue' /* webpackChunkName: "pages/agents" */))
const _14796fee = () => interopDefault(import('../pages/cudgewa.vue' /* webpackChunkName: "pages/cudgewa" */))
const _70348c40 = () => interopDefault(import('../pages/form.vue' /* webpackChunkName: "pages/form" */))
const _1a138eba = () => interopDefault(import('../pages/northbourne.vue' /* webpackChunkName: "pages/northbourne" */))
const _c91c9334 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/agents",
    component: _636c052a,
    name: "agents"
  }, {
    path: "/cudgewa",
    component: _14796fee,
    name: "cudgewa"
  }, {
    path: "/form",
    component: _70348c40,
    name: "form"
  }, {
    path: "/northbourne",
    component: _1a138eba,
    name: "northbourne"
  }, {
    path: "/",
    component: _c91c9334,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  const router = new Router(routerOptions)
  const resolve = router.resolve.bind(router)

  // encodeURI(decodeURI()) ~> support both encoded and non-encoded urls
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = encodeURI(decodeURI(to))
    }
    return resolve(to, current, append)
  }

  return router
}
