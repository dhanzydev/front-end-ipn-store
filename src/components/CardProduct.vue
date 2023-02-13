<template>
  <div class="card">
    <img :src="src" class="card-img-top" />
    <div class="card-body">
      <p class="fw-bold">{{ nameProduct }}</p>
      <p class="card-text">
        <small class="text-muted">{{ categoryProduct }}</small>
      </p>
      <router-link
        class="fs-3 text-primary fw-medium text-decoration-none"
        :to="to"
        >Rp. {{ priceProduct }}</router-link
      >
    </div>
  </div>
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

<style></style>
