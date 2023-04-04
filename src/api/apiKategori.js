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

export function useFetchAllKategori() {
  const kategori = reactive({
    data: [],
    page: 1,
  });

  // const page = ref(1);

  const fetchDataKategori = async (page = 1) => {
    const response = await fetch(
      `http://127.0.0.1:8000/api/kategori?page=${page}`
    );
    const data = await response.json();
    kategori.data = data;
    // console.log(data.data);
  };

  fetchDataKategori();
  return { kategori, fetchDataKategori };
}
