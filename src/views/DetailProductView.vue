<template>
  <NavbarApp />
  <section class="detail-product">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6 mb-5 mb-md-0">
          <carousel
            :settings="settings"
            :wrap-around="true"
            :snap-align="'center'"
            :transition="400"
          >
            <slide v-for="data in produk.data.gambar" :key="data.id">
              <div class="">
                <img :src="data.gambar_produk" alt="" class="img-carousel" />
              </div>
            </slide>

            <template #addons>
              <Navigation />
              <Pagination />
            </template>
          </carousel>
          <!-- <CarouselProduct /> -->
        </div>
        <div class="col-12 col-lg-6">
          <div class="product">
            <p class="fs-3 fw-medium">{{ produk.data.nama_produk }}</p>
            <p class="price fs-2 fw-bold">{{ produk.data.format_harga }}</p>
            <div class="card p-4 border-opacity-75 border-2">
              <div class="card-body">
                <div class="row">
                  <div class="col-12 col-md-8">
                    <p class="fw-medium">Total Harga:</p>
                    <p class="total-price fw-medium fs-3">
                      <!-- Display data price -->
                      {{
                        totalPrice.bool == true
                          ? totalPrice.format
                          : produk.data.format_harga
                      }}
                    </p>
                    <p class="fw-medium">Stok : {{ produk.data.jumlah }}</p>
                  </div>
                  <div class="col-12 col-md-4 mt-4 mt-md-0">
                    <p class="fw-medium">Atur Jumlah</p>
                    <div class="quantity-product">
                      <div class="input-group">
                        <button
                          class="btn"
                          type="button"
                          id="button-addon2"
                          @click="dercrementQuantity"
                        >
                          <font-awesome-icon icon="fa-solid fa-minus" />
                        </button>
                        <input
                          type="text"
                          class="form-control"
                          aria-label="Cari Barang"
                          aria-describedby="button-addon2"
                          :value="quantity"
                        />
                        <button
                          class="btn"
                          type="button"
                          id="button-addon2"
                          @click="incrementQuantity"
                        >
                          <font-awesome-icon icon="fa-solid fa-plus" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="btn-product mt-5">
                  <router-link
                    to="/keranjang"
                    @click="saveProduct"
                    class="btn btn-success me-4"
                    >Beli sekarang</router-link
                  >
                  <button
                    class="btn btn-primary mt-3 mt-sm-0"
                    @click="saveProduct"
                  >
                    Tambahkan ke keranjang
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="description-product mt-5">
        <p class="fs-3 text-primary">Deskripsi</p>
        <div v-html="produk.data.deskripsi"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, reactive, ref } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import NavbarApp from "../components/NavbarApp.vue";
import { useFetchDetailProduk } from "../api/apiProduk";
import { useCartStore } from "../stores/cart";
const store = useCartStore();

const props = defineProps({
  id: {
    required: true,
    type: String,
  },
});

const { produk, fetchDataProduk } = useFetchDetailProduk(props.id);

const quantity = ref(1);

const totalPrice = reactive({
  format: produk.data.format_harga,
  bool: false,
});
const settings = ref({
  itemsToShow: 1,
  snapAlign: "center",
});

const product = reactive({
  id: 0,
  nama_produk: "",
  harga: 0,
  jumlah: 0,
  cover: "",
  max_quantity: 0,
  harga_satuan: 0,
});

function incrementQuantity() {
  if (quantity.value < produk.data.jumlah) {
    quantity.value++;
    totalPrice.format = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(produk.data.harga * quantity.value);
  }
  totalPrice.bool = true;
}

function dercrementQuantity() {
  if (quantity.value > 1) {
    quantity.value--;
    totalPrice.format = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(produk.data.harga * quantity.value);
  }
  totalPrice.bool = true;
}

const saveProduct = () => {
  product.id = produk.data.id;
  product.nama_produk = produk.data.nama_produk;
  product.harga = produk.data.harga * quantity.value;
  product.jumlah = quantity.value;
  product.cover = produk.data.cover;
  product.max_quantity = produk.data.jumlah;
  product.harga_satuan = produk.data.harga;

  store.addProduct(product);
};

onMounted(() => {
  fetchDataProduk();
});

onUnmounted(() => {
  saveProduct();
});
</script>

<style scope>
.detail-product {
  margin-top: 200px;
}

.quantity-product .input-group {
  width: 130px;
}

@media (max-width: 992px) {
  .detail-product {
    margin-top: 150px;
  }
}

@media (max-width: 768px) {
  .detail-product {
    margin-top: 150px;
  }
}

@media (max-width: 576px) {
  .detail-product {
    margin-top: 100px;
  }
}

.carousel .carousel__next {
  color: #fff;
  background-color: black;
}

.carousel .carousel__prev {
  color: #fff;
  background-color: black;
}

.img-carousel {
  width: 100%;
  height: 392px;
  object-fit: cover;
}

@media (max-width: 575.98px) {
  .img-carousel {
    height: 200px;
  }
}

@media (max-width: 767.98px) {
  .img-carousel {
    height: 300px;
  }
}

@media (max-width: 991.98px) {
  .img-carousel {
    height: 300px;
  }
}
</style>
