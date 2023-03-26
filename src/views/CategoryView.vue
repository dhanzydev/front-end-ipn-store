<template>
  <NavbarApp />
  <section class="category">
    <div class="container">
      <div class="row">
        <div
          class="col-lg-2 col-md-3 col-12"
          v-for="data in kategori.data"
          :key="data.id"
        >
          <CardCategory
            :src="data.gambar_kategori"
            to="/"
            :name-category="data.kategori"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import NavbarApp from "../components/NavbarApp.vue";
import CardCategory from "../components/CardCategory.vue";
import { useFetchAllKategori } from "../api/apiKategori.js";

import { onMounted } from "vue";

const { kategori, fetchDataKategori } = useFetchAllKategori(
  "http://127.0.0.1:8000/api/kategori"
);

onMounted(() => {
  fetchDataKategori();
});
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
