<template>
  <NavbarApp />
  <section class="product">
    <div class="container">
      <div class="row">
        <div class="col-lg-2 my-2">
          <p class="fw-bold fs-5">Kategori</p>
          <div class="form-check" v-for="data in kategori.data" :key="data.id">
            <input
              class="form-check-input"
              style="border: 1px solid"
              type="radio"
              name="category"
              id="flexRadioDefault1"
              :value="data.slug"
              v-model="kategoriFilter"
            />
            <label class="form-check-label" for="flexRadioDefault1">
              {{ data.kategori }}
            </label>
          </div>
        </div>
        <div class="col-lg-10">
          <div class="row">
            <div
              class="col-lg-3 col-6 p-3"
              v-for="data in filterData"
              :key="data.id"
            >
              <CardProduct
                :src="data.cover"
                :name-product="data.nama_produk"
                :category-product="data.kategori.kategori"
                :price-product="data.format_harga"
                :to="`/detail-produk/${data.id}`"
              />
            </div>
            <Bootstrap5Pagination
              :data="produk.data"
              @pagination-change-page="fetchDataProduk"
              class="d-flex justify-content-end mt-5"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import NavbarApp from "../components/NavbarApp.vue";
import CardProduct from "../components/CardProduct.vue";
import { Bootstrap5Pagination } from "laravel-vue-pagination";
import { useFetchAllProduk } from "../api/apiProduk";
import { useFetchKategori } from "../api/apiKategori.js";

import { computed, onMounted, ref, watch } from "vue";

const { produk, fetchDataProduk } = useFetchAllProduk();
const { kategori, fetchDataKategori } = useFetchKategori(
  "http://127.0.0.1:8000/api/kategori/all"
);

const kategoriFilter = ref("");

const filterData = computed(() => {
  if (kategoriFilter.value === "") {
    return produk.data.data;
  } else {
    return produk.data.data.filter(
      (data) => data.kategori.slug === kategoriFilter.value
    );
  }
});

onMounted(() => {
  watch(kategoriFilter);
  fetchDataKategori();
});
</script>

<style scoped>
.product {
  margin-top: 200px;
}

@media (max-width: 992px) {
  .product {
    margin-top: 150px;
  }
}

@media (max-width: 768px) {
  .product {
    margin-top: 150px;
  }
}

@media (max-width: 576px) {
  .product {
    margin-top: 100px;
  }
}
</style>
