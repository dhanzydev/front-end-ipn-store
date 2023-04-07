import { createRouter, createWebHistory } from "vue-router";

import FooterApp from "../components/FooterApp.vue";

import Index from "@/views/IndexView.vue";
import Product from "@/views/ProductView.vue";
import ProductSearch from "@/views/ProductSearchView.vue";
import DetailProduct from "@/views/DetailProductView.vue";
import Cart from "@/views/CartView.vue";
import Category from "@/views/CategoryView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      components: {
        footer: FooterApp,
        default: Index,
      },
    },
    {
      path: "/produk",
      name: "Product",
      components: {
        footer: FooterApp,
        default: Product,
      },
    },
    {
      path: "/produk/:produk",
      name: "ProductSearch",
      components: {
        footer: FooterApp,
        default: ProductSearch,
      },
      props: true,
    },
    // Nanti ganti nama menjadi produk/nama-produk
    {
      path: "/detail-produk/:id",
      name: "DetailProduct",
      components: {
        footer: FooterApp,
        default: DetailProduct,
      },
      props: true,
    },
    {
      path: "/keranjang",
      name: "Cart",
      components: {
        footer: FooterApp,
        default: Cart,
      },
    },
    {
      path: "/kategori",
      name: "Category",
      components: {
        footer: FooterApp,
        default: Category,
      },
    },
  ],
});

export default router;
