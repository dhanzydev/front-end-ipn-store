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

export function useFetchAllProduk() {
  const produk = reactive({
    data: [],
    page: 1,
  });

  // const page = ref(1);

  const fetchDataProduk = async (page = 1) => {
    const response = await fetch(
      `http://127.0.0.1:8000/api/produk?page=${page}`
    );
    const data = await response.json();
    produk.data = data;
  };

  fetchDataProduk();
  return { produk, fetchDataProduk };
}

export function useSearchProduk(search) {
  const produkSearch = reactive({
    data: [],
    page: 1,
  });

  const fetchDataProdukSearch = async (page = 1) => {
    const response = await fetch(
      `http://127.0.0.1:8000/api/produk/search/${search}?page=${page}`
    );
    const data = await response.json();
    produkSearch.data = data;
  };

  fetchDataProdukSearch();

  return { produkSearch, fetchDataProdukSearch };
}
