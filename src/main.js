import { createApp } from "vue";
import { createPinia } from "pinia";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.css";
import "@/plugins/icon";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
