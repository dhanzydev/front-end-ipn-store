<template>
  <NavbarApp />
  <section>
    <div class="container bg-home rounded-2">
      <div class="text-container p-5 text-light">
        <div class="row">
          <div class="col-lg-6 col-12">
            <h1 class="title">
              Situs Penjualan Peralatan dan Perlengkapan Peralatan Industri
            </h1>
            <p class="lh-lg mt-5">
              Ipnstore menjual peralatan perlengkapan industri dengan harga yang
              kompetitif dengan jaminan produk terbaik dan berkualitas
            </p>
            <router-link to="/" class="btn btn-primary mt-5"
              >Belanja Sekarang</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container category">
      <p class="text-primary fw-bold">Kategori Produk</p>
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
        <div class="d-flex justify-content-end">
          <router-link
            :to="{ name: 'Category' }"
            class="text-decoration-none btn btn-primary mt-5"
            >Lihat Selengkapnya</router-link
          >
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container">
      <p class="text-primary fw-bold">Daftar Produk</p>
      <div class="row gap-lg-0">
        <div
          class="col-lg-3 col-md-6 col-12 p-2"
          v-for="data in produk.data"
          :key="data.id"
        >
          <CardProduct
            :src="data.cover"
            :name-product="data.nama_produk"
            :category-product="data.kategori.kategori"
            :price-product="data.format_harga"
            :to="`/detail-produk/${data.id}`"
          />
        </div>
      </div>
      <div class="d-flex justify-content-end">
        <router-link
          to="/produk"
          class="text-decoration-none btn btn-primary mt-5"
          >Lihat Selengkapnya</router-link
        >
      </div>
    </div>
  </section>
  <section>
    <div class="bg-location mt-5">
      <div class="container py-5">
        <div class="row">
          <div class="col-lg-6 col-12 order-2 order-lg-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d494.5424201288801!2d112.58127254596533!3d-7.427646000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78098526ac4dab%3A0x2a5f411352cd3c0f!2sCV.Bambang%20Jaya!5e0!3m2!1sen!2sid!4v1676303578369!5m2!1sen!2sid"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="w-100"
              height="620"
            ></iframe>
          </div>
          <div class="col-lg-6 col-12 order-1 order-lg-0">
            <h2 class="fw-bold">Kunjungi Toko Offline Kami</h2>
            <p class="fw-medium fs-5 mt-5">
              Griya Krian Residence blok A Lotus No. 25,Krian, Sidoarjo,Jawa
              Timur,Indonesia, Perumahan Puri Bagus, Sadenganmijen, Kec. Krian,
              Kabupaten Sidoarjo, Jawa Timur 61262
            </p>
            <p class="fw-bold fs-4 f">Jam Buka</p>
            <div class="schedule">
              <p>Senin : 08:00 - 17:00 WIB</p>
              <p>Selasa : 08:00 - 17:00 WIB</p>
              <p>Rabu : 08:00 - 17:00 WIB</p>
              <p>Kamis : 08:00 - 17:00 WIB</p>
              <p>Jumat : 08:00 - 17:00 WIB</p>
              <p>Sabtu : 08:00 - 17:00 WIB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import CardCategory from "../components/CardCategory.vue";
import CardProduct from "../components/CardProduct.vue";
import NavbarApp from "../components/NavbarApp.vue";
import { useFetchProduk } from "../api/apiProduk.js";
import { useFetchKategori } from "../api/apiKategori.js";
import { useCartStore } from "../stores/cart";

import { onMounted } from "vue";
const store = useCartStore();
store.setUserID();

const { produk, fetchDataProduk } = useFetchProduk(
  "https://admin.ipnstore.com/api/produk/home"
);

const { kategori, fetchDataKategori } = useFetchKategori(
  "https://admin.ipnstore.com/kategori/home"
);

onMounted(() => {
  fetchDataProduk();
  fetchDataKategori();
});
</script>

<style scoped>
.bg-home {
  margin-top: 200px;
  background-image: url("/assets/images/home.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 558px;
  width: 100%;
}

.title {
  font-weight: 600;
}

.category {
  margin-top: 100px;
  margin-bottom: 100px;
}

.bg-location {
  background-color: rgba(69, 117, 210, 0.31);
}
.schedule {
  font-weight: normal;
  font-size: 20px;
}

@media (max-width: 992px) {
  .bg-home {
    margin-top: 150px;
  }
}

@media (max-width: 768px) {
  .bg-home {
    margin-top: 150px;
  }
}

@media (max-width: 576px) {
  .bg-home {
    margin-top: 100px;
  }
}
</style>
