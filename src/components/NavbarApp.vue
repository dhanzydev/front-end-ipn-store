<template>
  <nav class="navbar navbar-expand-lg text-light px-4 fixed-top">
    <div class="container">
      <img
        src="/assets/images/logo.png"
        alt="Logo"
        class="navbar-brand img-fluid logo"
      />
      <button
        class="navbar-toggler bg-white"
        type="button"
        @click="toggleNavbar"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        :class="{ show: isOpen === true }"
      >
        <Transition name="slide">
          <ul class="navbar-nav py-3 py-lg-0 gap-4" v-if="isOpen === true">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Beranda</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/">Kategori</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/">Produk</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/">Hubungi Kami</router-link>
            </li>
          </ul>
        </Transition>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(true);

const toggleNavbar = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style>
.logo {
  width: 100px;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}
</style>
