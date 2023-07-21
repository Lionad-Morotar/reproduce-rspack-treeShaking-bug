import { createRouter, createWebHistory } from "vue-router";
import routes from "../../src/router/index.js";

const router = createRouter({
  history: createWebHistory(window.__MICRO_APP_BASE_ROUTE__ || "/"),
  routes,
});

export default router;
