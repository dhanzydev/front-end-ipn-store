<template>
  <nav class="navbar navbar-expand-lg text-light px-4 fixed-top bg-light">
    <div class="container">
      <img
        src="/assets/images/logo.png"
        alt="Logo"
        class="navbar-brand img-fluid logo"
      />
      <div class="input-group w-50 ms-sm-3">
        <input
          type="text"
          class="form-control"
          placeholder="Cari Produk"
          aria-label="Cari Produk"
          aria-describedby="button-addon2"
          v-model="search"
        />
        <router-link
          class="btn btn-primary"
          type="button"
          id="button-addon2"
          :to="link"
        >
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </router-link>
      </div>
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
        <ul class="navbar-nav py-3 py-lg-0 gap-4">
          <li class="nav-item">
            <router-link class="nav-link text-black" to="/"
              >Beranda</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-black" :to="{ name: 'Category' }"
              >Kategori</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-black" to="/produk"
              >Produk</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-black" to="/"
              >Hubungi Kami</router-link
            >
          </li>
          <li class="nav-item d-none d-lg-block">
            <router-link
              class="nav-link text-black position-relative"
              to="/cart"
            >
              <span
                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary"
              >
                {{ props.jumlahProduk }}
                <span class="visually-hidden">unread messages</span>
              </span>
              <font-awesome-icon
                icon="fa-solid fa-cart-shopping"
                class="fa-xl"
              />
            </router-link>
          </li>
          <li class="nav-item d-inline-block d-lg-none">
            <router-link class="nav-link text-black" to="/cart"
              >Keranjang</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, watch } from "vue";

const isOpen = ref(false);

const toggleNavbar = () => {
  isOpen.value = !isOpen.value;
};

const link = ref("");
const search = ref("");

// console.log(search.value);
function searchProduct() {
  link.value = `/produk/${search.value}`;
}

const props = defineProps({
  jumlahProduk: {
    type: Number,
    default: 0,
  },
});

watch(search, searchProduct);
</script>

<style>
.logo {
  width: 100px;
}

@media (max-width: 767.98px) {
  .logo {
    width: 50px;
  }
}
</style>
