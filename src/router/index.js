import { createRouter, createWebHistory } from "vue-router";

import NavbarApp from "../components/NavbarApp.vue";

import Index from "@/views/IndexView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      components: {
        NavbarApp,
        default: Index,
      },
    },
  ],
});

export default router;
