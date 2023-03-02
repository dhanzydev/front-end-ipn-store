<template>
  <div class="card border-0 rounded">
    <div class="card-body">
      <div class="row">
        <div class="col-lg-2 col-4 object-fit-cover">
          <img
            src="/assets/images/home.png"
            alt=""
            class="img-fluid w-100 h-100 object-fit-cover rounded"
          />
        </div>
        <div class="col-lg-10 col-8">
          <div class="row">
            <div class="col-lg-7">
              <p class="product-name">Baut Ukuran 15cm</p>
              <p class="product-price">Rp. 30.000</p>
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
              <button class="btn text-danger remove-btn">
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

const quantity = ref(1);

function incrementQuantity() {
  quantity.value++;
}

function dercrementQuantity() {
  if (quantity.value > 1) {
    quantity.value--;
  }
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
