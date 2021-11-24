import Vue from "vue";
import VueRouter from "vue-router";
import Usuarios from "../views/Usuarios.vue";
import Eventos from "../views/Eventos.vue";
import Sobre from "../views/Sobre.vue";
import Form from "../views/Form.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/usuarios",
    name: "usuarios",
    component: Usuarios,
  },
  {
    path: "/form",
    name: "form",
    component: Form,
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

export default router;
