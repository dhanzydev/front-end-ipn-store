import { reactive } from "vue";

export function useFetchProduk(url) {
  const produk = reactive({
    data: [],
  });

  const fetchDataProduk = async () => {
    const response = await fetch(url);
    const data = await response.json();
    produk.data = data;
  };

  fetchDataProduk();

  return { produk, fetchDataProduk };
}
