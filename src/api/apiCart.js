import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default function useCart() {
  const errors = ref("");
  const product = ref([]);
  const totalItem = ref(0);
  const totalPrice = ref(0);
  const router = useRouter();

  const getDataCart = async (id) => {
    let response = await axios.get(`http://ipn-store.test/api/cart/${id}`);
    product.value = response.data.data;
    totalPrice.value = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(response.data.totalPrice);
    totalItem.value = response.data.jumlahProduk;
  };

  const storeProduct = async (data) => {
    errors.value = "";
    try {
      await axios.post("http://ipn-store.test/api/cart/post", data);
    } catch (e) {
      if (e.response.status === 422) {
        errors.value = e.response.data.errors;
      }
    }
  };

  const deleteProduct = async (userId, id) => {
    await axios.delete(`http://ipn-store.test/api/cart/delete/${userId}/${id}`);
    await router.push({ path: "/cart" });
  };

  return {
    errors,
    product,
    totalPrice,
    totalItem,
    getDataCart,
    storeProduct,
    deleteProduct,
  };
}
