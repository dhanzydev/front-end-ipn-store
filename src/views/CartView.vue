<template>
  <NavbarApp />
  <section class="cart">
    <div class="container" v-for="data in cart" :key="data.id">
      <ProductCart
        :cover="data.cover"
        :harga="data.harga"
        :nama_produk="data.nama_produk"
        :jumlah="data.jumlah"
        :max_quantity="data.max_quantity"
        :harga_satuan="data.harga_satuan"
      />
    </div>
  </section>
  <section class="total-price">
    <div class="container">
      <p class="fw-bold fs-4">Total Pembayaran</p>
      <p class="text-primary fw-bold price">Rp. 30.000</p>
    </div>
  </section>
  <section class="form-delivery mt-5">
    <div class="container">
      <p class="fs-4 fw-medium">Detail Pengiriman</p>
      <form action="">
        <div class="row">
          <div class="col-lg-6">
            <label for="nama" class="form-label">Nama</label>
            <input
              type="text"
              class="form-control border border-1"
              id="exampleFormControlInput1"
              placeholder="Nama Penerima"
            />
          </div>
          <div class="col-lg-6">
            <label for="no_hp" class="form-label">No HP</label>
            <input
              type="text"
              class="form-control border border-1"
              id="exampleFormControlInput1"
              placeholder="No HP Penerima"
            />
          </div>
          <div class="col-lg-12 mt-4">
            <label for="no_hp" class="form-label">Alamat</label>
            <input
              type="text"
              class="form-control border border-1"
              id="exampleFormControlInput1"
              placeholder="Alamat Penerima"
            />
          </div>
          <div class="col-lg-4 mt-4">
            <label for="no_hp" class="form-label">Kota / Kabupaten</label>
            <input
              type="text"
              class="form-control border border-1"
              id="exampleFormControlInput1"
              placeholder="Kota atau Kabupaten"
            />
          </div>
          <div class="col-lg-4 mt-4">
            <label for="no_hp" class="form-label">Kecamatan</label>
            <input
              type="text"
              class="form-control border border-1"
              id="exampleFormControlInput1"
              placeholder="Kota atau Kabupaten"
            />
          </div>
          <div class="col-lg-4 mt-4">
            <label for="no_hp" class="form-label">RT/RW</label>
            <input
              type="text"
              class="form-control border border-1"
              id="exampleFormControlInput1"
              placeholder="Kota atau Kabupaten"
            />
          </div>
        </div>
      </form>
      <div class="notification mt-5 rounded">
        <p>
          Catatan : Total harga + ongkos kirim yang harus dibayar akan
          dikonfirmasikan oleh admin, setelah mengirim data pesanan
        </p>
      </div>
      <button class="btn btn-success w-100 mt-4 py-2">
        <img src="/assets/images/whatsapp.png" class="img-fluid me-2" alt="" />
        Pesan Sekarang
      </button>
    </div>
  </section>
</template>

<script setup>
import NavbarApp from "../components/NavbarApp.vue";
import ProductCart from "../components/ProductCart.vue";
import { useCartStore } from "../stores/cart";
import { computed } from "vue";
const store = useCartStore();

const cart = computed(() => store.getProduct);
</script>

<style scoped>
.cart {
  margin-top: 200px;
}
.total-price {
  margin-top: 100px;
}

.price {
  font-size: 36px;
}

.notification {
  background-color: #ffce33;
  padding-bottom: 10px;
  padding-top: 20px;
  padding-left: 30px;
}
@media (max-width: 992px) {
  .cart {
    margin-top: 150px;
  }
}

@media (max-width: 768px) {
  .cart {
    margin-top: 150px;
  }
}

@media (max-width: 576px) {
  .cart {
    margin-top: 100px;
  }
}
</style>
