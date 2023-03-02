import { createRouter, createWebHistory } from "vue-router";

import NavbarApp from "../components/NavbarApp.vue";
import FooterApp from "../components/FooterApp.vue";

import Index from "@/views/IndexView.vue";
import Product from "@/views/ProductView.vue";
import DetailProduct from "@/views/DetailProductView.vue";
import Cart from "@/views/CartView.vue";

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
    // Nanti ganti nama menjadi produk/nama-produk
    {
      path: "/detail-produk",
      name: "DetailProduct",
      components: {
        navbar: NavbarApp,
        footer: FooterApp,
        default: DetailProduct,
      },
    },
    {
      path: "/keranjang",
      name: "Cart",
      components: {
        navbar: NavbarApp,
        footer: FooterApp,
        default: Cart,
      },
    },
  ],
});

export default router;
