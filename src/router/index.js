
import { createWebHistory, createRouter } from "vue-router";
import Home from "../pages/Home.vue";
import Vue from "vue";
const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: '/feed',
    component: () => import("../pages/Feed.vue")
  },
  {
    path: '/about',
    component: () => import("../pages/About.vue")
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router;