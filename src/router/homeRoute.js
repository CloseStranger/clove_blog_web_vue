const homeRoute = [
  {
    path: "setting",
    name: "Setting",
    component: () => import("../views/homePage/selfSetting/index.vue"),
  },
  {
    path: "studyArea",
    name: "StudyArea",
    component: () => import("../views/studyArea/index.vue"),
  },
];

export default homeRoute;
