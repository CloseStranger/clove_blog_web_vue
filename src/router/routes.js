import SelfLayout from "../layout/index.vue";
import homeRoute from "./homeRoute.js";

const routeNameMap = {
  article: {
    path: "/article",
    name: "Article",
  },
};

const routes = [
  {
    path: "/",
    redirect: { name: routeNameMap.article.name },
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
  {
    path: routeNameMap.article.path,
    name: routeNameMap.article.name,
    component: () => import("../views/ArticlePage/index.vue"),
    meta: {
      tabTitle: "文章",
    },
  },
  {
    path: "/welcome",
    name: "Welcome",
    component: () => import("../views/welcomePage/index.vue"),
    meta: {
      tabTitle: "欢迎",
    },
  },
  {
    path: "/",
    component: SelfLayout,
    children: [...homeRoute],
  },
];

export default routes;
