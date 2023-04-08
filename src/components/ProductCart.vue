<template>
  <div class="card border-0 rounded">
    <div class="card-body">
      <div class="row">
        <div class="col-lg-2 col-4 object-fit-cover">
          <img
            :src="cover"
            alt=""
            class="img-fluid w-100 h-100 object-fit-cover rounded"
          />
        </div>
        <div class="col-lg-10 col-8">
          <div class="row">
            <div class="col-lg-7">
              <p class="product-name">{{ nama_produk }}</p>
              <p class="product-price">{{ price }}</p>
            </div>
            <div class="col-lg-3 col-8">
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
            <div class="col-lg-2 col-4">
              <button class="btn text-danger remove-btn" @click="remove">
                <font-awesome-icon icon="fa-solid fa-trash" class="me-2" />Hapus
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCartStore } from "../stores/cart";
const store = useCartStore();

const props = defineProps({
  nama_produk: {
    type: String,
    required: true,
  },
  harga: {
    type: Number,
    required: true,
  },
  jumlah: {
    type: Number,
    required: true,
  },
  cover: {
    type: String,
    required: true,
  },
  max_quantity: {
    type: Number,
    required: true,
  },
  harga_satuan: {
    type: Number,
    required: true,
  },
});

const quantity = ref(props.jumlah);
const price = ref(
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(props.harga)
);

const hargaSatuan = ref(parseInt(props.harga_satuan));

function incrementQuantity() {
  if (quantity.value < props.max_quantity) {
    quantity.value++;
    price.value = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(hargaSatuan.value * quantity.value);
  }
  // totalPrice.bool = true;
}
function dercrementQuantity() {
  if (quantity.value > 1) {
    quantity.value--;
    price.value = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(hargaSatuan.value * quantity.value);
  }
}

function remove() {
  store.removeProduct(props.id);
}
</script>

<style scoped>
.product-name {
  font-size: 20px;
}

.product-price {
  font-size: 24px;
  font-weight: 500;
}

.remove-btn {
  font-weight: 500;
  font-size: 18px;
}
</style>
