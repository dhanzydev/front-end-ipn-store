import { createRouter, createWebHistory } from "vue-router";

import NavbarApp from "../components/NavbarApp.vue";
import FooterApp from "../components/FooterApp.vue";

import Index from "@/views/IndexView.vue";
import Product from "@/views/ProductView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      components: {
        navbar: NavbarApp,
        footer: FooterApp,
        default: Index,
      },
    },
    {
      path: "/produk",
      name: "Product",
      components: {
        navbar: NavbarApp,
        footer: FooterApp,
        default: Product,
      },
    },
  ],
});

export default router;
