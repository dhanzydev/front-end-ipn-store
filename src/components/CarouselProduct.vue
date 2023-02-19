<template>
  <carousel
    :settings="settings"
    :wrap-around="true"
    :snap-align="'center'"
    :transition="400"
  >
    <slide v-for="slide in 5" :key="slide">
      <img src="/assets/images/home.png" alt="" class="img-fluid" />
    </slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </carousel>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { ref } from "vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const settings = ref({
  itemsToShow: 1,
  snapAlign: "center",
});
</script>

<style scope>
.carousel .carousel__next {
  color: #fff;
}

.carousel .carousel__prev {
  color: #fff;
}
</style>
