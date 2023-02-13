<template>
  <div class="card mb-3 p-3" style="max-width: 540px">
    <div class="d-flex align-items-center">
      <div class="img-card">
        <img :src="src" class="rounded-start" alt="Icon Category Product" />
      </div>
      <div class="card-body">
        <router-link class="card-title fs-5 text-decoration-none" :to="to">{{
          name
        }}</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  src: { type: String, required: true },
  name: { type: String, required: true },
  to: { type: String, required: true },
});
</script>

<style scoped>
.card {
  padding: 20px 21px;
  gap: 31px;
}

img {
  width: 50px;
}
</style>
