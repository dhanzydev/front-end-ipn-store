import { defineStore } from "pinia";

export const useCartStore = defineStore({
  id: "cart",
  state: () => ({
    products: [],
  }),
  getters: {
    getProduct(state) {
      return JSON.parse(localStorage.getItem("product"));
    },
  },
  actions: {
    addProduct(product) {
      const index = this.products.findIndex((item) => item.id === product.id);
      console.log(index);
      if (index > -1) {
        this.products[index].harga = product.harga;

        this.products[index].jumlah = product.jumlah;
      } else {
        this.products.push(product);
      }
      console.log(this.products);
      localStorage.setItem("product", JSON.stringify(this.products));
    },
    removeProduct(product) {
      this.products.splice(
        this.products.findIndex((item) => item.id === product.id),
        1
      );
      localStorage.setItem("product", JSON.stringify(this.products));
    },
  },
});
