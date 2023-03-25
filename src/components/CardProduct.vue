<template>
  <router-link :to="to" class="text-decoration-none">
    <div class="card">
      <img :src="src" class="card-img-top" />
      <div class="card-body">
        <p class="fw-bold text-black">{{ nameProduct }}</p>
        <p class="card-text">
          <small class="text-muted">{{ categoryProduct }}</small>
        </p>
        <p class="fs-3 text-primary fw-medium text-decoration-none">
          {{ priceProduct }}
        </p>
      </div>
    </div>
  </router-link>
</template>

<script setup>
const props = defineProps({
  src: { type: String, required: true },
  nameProduct: { type: String, required: true },
  categoryProduct: { type: String, required: true },
  priceProduct: { type: String, required: true },
  to: { type: String, required: true },
});
</script>

<style>
.card-img-top {
  width: 100%;
  height: 150px;
  object-fit: cover;
}
</style>
