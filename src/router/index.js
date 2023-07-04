import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta?.tabTitle) {
    document.title = `${to.meta.tabTitle} - Clove Blog`;
  }
  next();
});

export default router;
