<template>
  <NavbarApp :jumlah-produk="totalItem" />
  <section class="cart">
    <div class="container" v-for="data in product" :key="data.id">
      <ProductCart
        :harga="data.harga_produk"
        :nama_produk="data.nama_produk"
        :jumlah="data.jumlah_produk"
        :total_harga="data.total_harga"
        :id="data.id_produk"
        :harga_produk="data.harga_produk"
        :cover="data.cover"
        :max_quantity="data.max_quantity"
      />
    </div>
  </section>
  <section class="total-price">
    <div class="container">
      <p class="fw-bold fs-4">Total Pembayaran</p>
      <p class="text-primary fw-bold price">{{ totalPriceCart }}</p>
    </div>
  </section>
  <section class="form-delivery mt-5">
    <div class="container">
      <p class="fs-4 fw-medium">Detail Pengiriman</p>
      <form action="" @submit.prevent="submitForm">
        <div class="row">
          <div class="col-lg-6">
            <label for="nama" class="form-label">Nama</label>
            <input
              type="text"
              class="form-control border border-1"
              id="exampleFormControlInput1"
              placeholder="Nama Penerima"
              v-model="customer.nama"
            />
          </div>
          <div class="col-lg-6">
            <label for="no_hp" class="form-label">No HP</label>
            <input
              type="text"
              class="form-control border border-1"
              id="exampleFormControlInput1"
              placeholder="No HP Penerima"
              v-model="customer.no_hp"
            />
          </div>
          <div class="col-lg-12 mt-4">
            <label for="no_hp" class="form-label">Alamat</label>
            <input
              type="text"
              class="form-control border border-1"
              id="exampleFormControlInput1"
              placeholder="Alamat Penerima"
              v-model="customer.alamat"
            />
          </div>
          <div class="col-lg-4 mt-4">
            <label for="no_hp" class="form-label">Kota / Kabupaten</label>
            <input
              type="text"
              class="form-control border border-1"
              id="exampleFormControlInput1"
              placeholder="Kota atau Kabupaten"
              v-model="customer.kota"
            />
          </div>
          <div class="col-lg-4 mt-4">
            <label for="no_hp" class="form-label">Kecamatan</label>
            <input
              type="text"
              class="form-control border border-1"
              id="exampleFormControlInput1"
              placeholder="Kota atau Kabupaten"
              v-model="customer.kecamatan"
            />
          </div>
          <div class="col-lg-4 mt-4">
            <label for="no_hp" class="form-label">RT/RW</label>
            <input
              type="text"
              class="form-control border border-1"
              id="exampleFormControlInput1"
              placeholder="Kota atau Kabupaten"
              v-model="customer.rt_rw"
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
      <button class="btn btn-success w-100 mt-4 py-2" type="submit">
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
import axios from "axios";
import {
  computed,
  ref,
  onMounted,
  watch,
  reactive,
  onBeforeUnmount,
} from "vue";
import useCart from "../api/apiCart";

const store = useCartStore();

const totalPriceCart = ref(0);

const { product, totalPrice, totalItem, getDataCart } = useCart();

const customer = reactive({
  nama: "",
  no_hp: "",
  alamat: "",
  kota: "",
  kecamatan: "",
  rt_rw: "",
});

const userId = ref(store.getUserID);

const getDataCartNew = async () => {
  // let response = await axios.get(`http://ipn-store.test/api/cart/${id}`);
  const response = await fetch(
    `http://ipn-store.test/api/cart/${store.getUserID}`
  );
  const data = await response.json();
  for (let i = 0; i < data.length; i++) {
    productCart.push(data.data);
    console.log(productCart[i]);
  }
  totalPriceCart.value = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(data.totalPrice);
};

let intervalId = null;

const startInterval = () => {
  intervalId = setInterval(getDataCartNew, 2000);
};

const stopInterval = () => {
  clearInterval(intervalId);
};

const submitForm = () => {
  let barang = [];
  localStorage.setItem("customer", JSON.stringify(product.value));
  const dataProduct = JSON.parse(localStorage.getItem("customer"));
  for (let i = 0; i < dataProduct.length; i++) {
    barang.push(
      `Nama%20Barang%20%3A%20${dataProduct[i].nama_produk}%0AJumlah%20%3A%20${dataProduct[i].jumlah_produk}%0A%0A`
    );
  }
  window.open(
    `https://api.whatsapp.com/send?phone=6281918057525&text=Halo%20Saya%20Ingin%20Memesan%20Barang%20%0A%0A${barang}%0A%0ADengan%20Total%20Pembelian%20adalah%20%0A*${totalPriceCart.value}*%0A%0ABerikut%20ini%20adalah%20alamat%20saya%20%3A%0A%0ANama%20Penerima%20%3A%20${customer.nama}%0ANo%20HP%20Penerima%20%3A%20${customer.no_hp}%0AAlamat%20%3A%20${customer.alamat}%0AKota%20%2F%20Kabupaten%20%3A%20${customer.kota}%20%0AKecamatan%20%3A%20${customer.kecamatan}%0ART%2FRW%20%3A%20${customer.rt_rw}`
  );
};

onMounted(() => {
  getDataCart(userId.value);
  startInterval();
  getDataCartNew();
});

onBeforeUnmount(() => {
  stopInterval();
});
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
