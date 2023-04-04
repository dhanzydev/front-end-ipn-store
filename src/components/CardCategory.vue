<template>
  <router-link :to="to" class="text-decoration-none">
    <div class="card mb-3" style="max-width: 540px">
      <div class="d-flex align-items-center">
        <div class="img-card">
          <img
            :src="src"
            class="rounded-start img-category"
            alt="Icon Category Product"
          />
        </div>
        <div class="card-body text-black">{{ nameCategory }}</div>
      </div>
    </div>
  </router-link>
</template>

<script setup>
const props = defineProps({
  to: { type: String, required: true },
  src: { type: String, required: true },
  nameCategory: { type: String, required: true },
});
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
