import Vue from "vue";
import VueRouter from "vue-router";
import Usuarios from "../views/Usuarios.vue";
import Eventos from "../views/Eventos.vue";
import Sobre from "../views/Sobre.vue";
import Form from "../views/Form.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/usuarios",
    name: "usuarios",
    component: Usuarios,
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/form",
    name: "form",
    component: Form,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/eventos",
    name: "eventos",
    component: Eventos,
  },
  {
    path: "/sobre",
    name: "sobre",
    component: Sobre,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (
    to.name !== "login" &&
    to.name !== "register" &&
    !localStorage.getItem("authUser")
  ) {
    next({ name: "login" });
  } else {
    next();
  }
});


export default router;
