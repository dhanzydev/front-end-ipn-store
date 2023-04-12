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
              <button
                class="btn text-danger remove-btn"
                @click="deleteProductCart(id)"
              >
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
import { computed, reactive, ref, watch } from "vue";
import { useCartStore } from "../stores/cart";
import useCart from "../api/apiCart";

const store = useCartStore();
const { errors, deleteProduct, storeProduct, totalPrice } = useCart();

const props = defineProps({
  nama_produk: {
    type: String,
    required: true,
  },
  harga: {
    type: String,
    required: true,
  },
  jumlah: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  total_harga: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
    required: true,
  },
  max_quantity: {
    type: String,
    required: true,
  },
  harga_produk: {
    type: String,
    required: true,
  },
});

const quantity = ref(props.jumlah);
const price = ref(
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(props.total_harga)
);

const hargaSatuan = ref(parseInt(props.harga_produk));
const product = reactive({
  id_user: 0,
  id_produk: 0,
  nama_produk: "",
  harga_produk: 0,
  jumlah_produk: 0,
  total_harga: 0,
  cover: "",
  max_quantity: 0,
});

const totalPriceCart = ref(0);

const incrementQuantity = async () => {
  if (quantity.value < props.max_quantity) {
    quantity.value++;
    price.value = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(hargaSatuan.value * quantity.value);

    product.id_user = store.getUserID;
    product.id_produk = props.id;
    product.nama_produk = props.nama_produk;
    product.harga_produk = hargaSatuan.value;
    product.jumlah_produk = quantity.value;
    product.total_harga = props.harga * quantity.value;
    product.cover = props.cover;
    product.max_quantity = props.max_quantity;
    await storeProduct({ ...product });
    // location.reload();
  }
};

const dercrementQuantity = async () => {
  if (quantity.value > 1) {
    quantity.value--;
    price.value = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(hargaSatuan.value * quantity.value);

    product.id_user = store.getUserID;
    product.id_produk = props.id;
    product.nama_produk = props.nama_produk;
    product.harga_produk = hargaSatuan.value;
    product.jumlah_produk = quantity.value;
    product.total_harga = props.harga * quantity.value;
    product.cover = props.cover;
    product.max_quantity = props.max_quantity;
    await storeProduct({ ...product });
    // location.reload();
  }
};

const userId = ref(store.getUserID);

const deleteProductCart = async (id) => {
  await deleteProduct(userId.value, id);
  location.reload();
};
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
