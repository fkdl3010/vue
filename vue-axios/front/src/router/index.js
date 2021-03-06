import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from "@/views/Login";
import Board from "@/views/Board";

Vue.use(VueRouter)

// const whitePage = 

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/board/write',
    name: 'board.write',
    component: Board
  },
  {
    path: '/whitePage',
    name: 'WhitePage',
    component: () => import('@/views/WhitePage')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
