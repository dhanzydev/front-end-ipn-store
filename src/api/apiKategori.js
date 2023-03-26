import { reactive } from "vue";

export function useFetchKategori(url) {
  const kategori = reactive({
    data: [],
  });

  const fetchDataKategori = async () => {
    const response = await fetch(url);
    const data = await response.json();
    kategori.data = data;
  };

  fetchDataKategori();
  return { kategori, fetchDataKategori };
}

export function useFetchAllKategori(url) {
  const kategori = reactive({
    data: [],
  });

  const fetchDataKategori = async () => {
    const response = await fetch(url);
    const data = await response.json();
    kategori.data = data;
  };

  fetchDataKategori();
  return { kategori, fetchDataKategori };
}
