import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _52b80ccc = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _5b658cd0 = () => interopDefault(import('..\\pages\\blank-page.vue' /* webpackChunkName: "pages/blank-page" */))
const _a246dc30 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _bf68c69e = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _7d60728b = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/ar",
    component: _52b80ccc,
    name: "index___ar"
  }, {
    path: "/blank-page",
    component: _5b658cd0,
    name: "blank-page___en"
  }, {
    path: "/contact",
    component: _a246dc30,
    name: "contact___en"
  }, {
    path: "/de",
    component: _52b80ccc,
    name: "index___de"
  }, {
    path: "/id",
    component: _52b80ccc,
    name: "index___id"
  }, {
    path: "/login",
    component: _bf68c69e,
    name: "login___en"
  }, {
    path: "/pt",
    component: _52b80ccc,
    name: "index___pt"
  }, {
    path: "/register",
    component: _7d60728b,
    name: "register___en"
  }, {
    path: "/zh",
    component: _52b80ccc,
    name: "index___zh"
  }, {
    path: "/ar/blank-page",
    component: _5b658cd0,
    name: "blank-page___ar"
  }, {
    path: "/ar/contact",
    component: _a246dc30,
    name: "contact___ar"
  }, {
    path: "/ar/login",
    component: _bf68c69e,
    name: "login___ar"
  }, {
    path: "/ar/register",
    component: _7d60728b,
    name: "register___ar"
  }, {
    path: "/de/blank-page",
    component: _5b658cd0,
    name: "blank-page___de"
  }, {
    path: "/de/contact",
    component: _a246dc30,
    name: "contact___de"
  }, {
    path: "/de/login",
    component: _bf68c69e,
    name: "login___de"
  }, {
    path: "/de/register",
    component: _7d60728b,
    name: "register___de"
  }, {
    path: "/id/blank-page",
    component: _5b658cd0,
    name: "blank-page___id"
  }, {
    path: "/id/contact",
    component: _a246dc30,
    name: "contact___id"
  }, {
    path: "/id/login",
    component: _bf68c69e,
    name: "login___id"
  }, {
    path: "/id/register",
    component: _7d60728b,
    name: "register___id"
  }, {
    path: "/pt/blank-page",
    component: _5b658cd0,
    name: "blank-page___pt"
  }, {
    path: "/pt/contact",
    component: _a246dc30,
    name: "contact___pt"
  }, {
    path: "/pt/login",
    component: _bf68c69e,
    name: "login___pt"
  }, {
    path: "/pt/register",
    component: _7d60728b,
    name: "register___pt"
  }, {
    path: "/zh/blank-page",
    component: _5b658cd0,
    name: "blank-page___zh"
  }, {
    path: "/zh/contact",
    component: _a246dc30,
    name: "contact___zh"
  }, {
    path: "/zh/login",
    component: _bf68c69e,
    name: "login___zh"
  }, {
    path: "/zh/register",
    component: _7d60728b,
    name: "register___zh"
  }, {
    path: "/",
    component: _52b80ccc,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
