import { defineStore } from "pinia";

export const useCartStore = defineStore({
  id: "cart",
  state: () => ({
    products: [],
  }),
  getters: {
    getUserID() {
      return localStorage.getItem("userID");
    },
  },
  actions: {
    setUserID() {
      let userID = localStorage.getItem("userID");
      if (!userID) {
        let randomNumber = Math.random().toString().replace(".", "");
        randomNumber = randomNumber.replace(/^0+/, "");
        localStorage.setItem("userID", randomNumber);
      }
      return userID;
    },
    // addProduct(product) {
    //   const index = this.products.findIndex((item) => item.id === product.id);
    //   if (index > -1) {
    //     this.products[index].harga = product.harga;
    //     this.products[index].jumlah = product.jumlah;
    //   } else {
    //     this.products.push(product);
    //   }
    //   localStorage.setItem("product", JSON.stringify(this.products));
    // },
    // removeProduct(product) {
    //   const data = JSON.parse(localStorage.getItem("product"));
    //   const index = data.findIndex((obj) => obj.id === product);
    //   data.splice(index, 1);
    //   localStorage.setItem("product", JSON.stringify(data));
    // },
  },
});
