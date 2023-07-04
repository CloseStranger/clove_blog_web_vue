import { createApp } from "vue";
import App from "./App.vue";
import "./style/index.less";
import ViewUIPlus from "view-ui-plus";
import "view-ui-plus/dist/styles/viewuiplus.css";
import router from "./router/index.js";

createApp(App).use(router).use(ViewUIPlus).mount("#app");
