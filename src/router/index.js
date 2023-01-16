import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Listview from "../views/ListView.vue";
import Particleview from "../views/ParticleView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/list",
    name: "list",
    component: Listview,
  },
  {
    path: "/extra",
    name: "extra",
    component: Particleview,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
