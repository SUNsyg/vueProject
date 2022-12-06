import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Todo from '../views/TodoList.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { title: "主页", keepAlive: true },
    component: Home
  },
  {
    path: '/todo',
    name: 'Todo',
    meta: { title: "主页", keepAlive: true },
    component: Todo
  }
];

const router = new VueRouter({
  routes
});
export default router
