import { createApp } from "vue";
import router from "../src/router";
import App from "../src/App.vue";

async function init() {
  const app = createApp(App);
  app.use(router).mount("#app");
}

init();