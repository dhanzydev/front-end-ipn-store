<template>
  <NavbarApp />
  <section class="category">
    <div class="container">
      <div class="row">
        <div
          class="col-lg-2 col-md-3 mb-3 col-12"
          v-for="data in kategori.data.data"
          :key="data.id"
        >
          <CardCategory
            :src="data.gambar_kategori"
            :to="`/produk/${data.slug}`"
            :name-category="data.kategori"
          />
        </div>
        <Bootstrap5Pagination
          :data="kategori.data"
          @pagination-change-page="fetchDataKategori"
          class="d-flex justify-content-end mt-5"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import NavbarApp from "../components/NavbarApp.vue";
import CardCategory from "../components/CardCategory.vue";
import { useFetchAllKategori } from "../api/apiKategori.js";
import { Bootstrap5Pagination } from "laravel-vue-pagination";

import { onMounted } from "vue";

const { kategori, fetchDataKategori } = useFetchAllKategori();

onMounted(() => {
  fetchDataKategori();
});

// console.log(kategori.data);
</script>

<style scoped>
.category {
  margin-top: 200px;
}

@media (max-width: 992px) {
  .category {
    margin-top: 150px;
  }
}

@media (max-width: 768px) {
  .category {
    margin-top: 150px;
  }
}

@media (max-width: 576px) {
  .category {
    margin-top: 100px;
  }
}
</style>
