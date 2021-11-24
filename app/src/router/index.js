import Vue from "vue";
import VueRouter from "vue-router";
import home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "list",
    component: List,
  },
  {
    path: "/form",
    name: "form",
    component: Form,
  },
];

const router = new VueRouter({
    mode: 'hostory',
    base: process.env.BASE_URL,
    routes
})


export default router