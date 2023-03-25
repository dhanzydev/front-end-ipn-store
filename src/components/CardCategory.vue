<template>
  <div
    class="col-lg-2 col-md-3 col-12"
    v-for="data in state.data"
    :key="data.id"
  >
    <div class="card mb-3" style="max-width: 540px">
      <div class="d-flex align-items-center">
        <div class="img-card">
          <img
            :src="data.gambar_kategori"
            class="rounded-start img-category"
            alt="Icon Category Product"
          />
        </div>
        <div class="card-body">
          <router-link class="card-title text-decoration-none" to="">{{
            data.kategori
          }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from "vue";

const state = reactive({
  data: [],
});

async function fetchData() {
  const response = await fetch("http://127.0.0.1:8000/api/kategori/home");
  const data = await response.json();
  state.data = data;
}

onMounted(fetchData);
</script>

<style scoped>
.card {
  /* padding: 20px 21px; */
  gap: 31px;
}

.img-category {
  width: 100%;
  height: 90px;
  object-fit: cover;
}

.card-title {
  font-size: 14px;
}
</style>
