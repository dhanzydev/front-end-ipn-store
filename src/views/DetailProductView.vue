<template>
  <NavbarApp />
  <section class="detail-product">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6 mb-5 mb-md-0">
          <CarouselProduct />
        </div>
        <div class="col-12 col-lg-6">
          <div class="product">
            <p class="fs-3 fw-medium">Baut Ukuran 15cm</p>
            <p class="price fs-2 fw-bold">Rp. 15.000</p>
            <div class="card p-4 border-opacity-75 border-2">
              <div class="card-body">
                <div class="row">
                  <div class="col-12 col-md-8">
                    <p class="fw-medium">Total Harga:</p>
                    <p class="total-price fw-medium fs-3">Rp. 15000</p>
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
                  <button class="btn btn-success me-4">Beli sekarang</button
                  ><button class="btn btn-primary mt-3 mt-md-0">
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
        <p class="fw-medium">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed debitis
          et necessitatibus nulla commodi placeat ab non quidem quaerat amet
          architecto, corrupti dolorum sint natus, sequi ipsa. Reprehenderit
          totam, velit veniam suscipit in incidunt. Quisquam necessitatibus
          corporis officiis neque maiores cum, animi doloremque soluta enim
          cupiditate delectus voluptas quos! Magni, quidem rem! Dolorem, cumque
          obcaecati nihil necessitatibus quas rem molestiae harum, excepturi
          quia, corporis commodi voluptates ut? Dignissimos nobis temporibus
          quaerat repellendus ipsam nesciunt cumque maiores, voluptas architecto
          adipisci ratione. Esse, quas deleniti provident, laborum sapiente odio
          fugiat, repellendus necessitatibus expedita similique voluptatibus.
          Perferendis nulla veniam officia nostrum quod reprehenderit eaque,
          doloribus iure quis sunt. Aliquam fugiat eius dignissimos veritatis
          corporis numquam culpa et omnis quam quidem. Repudiandae, natus
          inventore sapiente voluptatum modi eligendi non quisquam architecto
          consectetur repellat vero beatae nihil veritatis aliquid rerum commodi
          totam delectus rem ipsam consequuntur eum. Magni natus consequuntur
          voluptates, inventore odit quibusdam corporis odio. Voluptas commodi
          nihil obcaecati ipsa dolorem dicta quasi molestias nisi, tempore
          quisquam atque adipisci mollitia perferendis enim earum saepe. Itaque
          illum praesentium mollitia, cum quod quisquam minima vitae, repellat,
          dolorum officia ducimus. Eveniet animi, molestiae, adipisci enim et
          molestias amet fugiat sunt, mollitia nemo libero sequi voluptatum
          facere laborum perspiciatis fuga? Minus harum error earum ea iure
          tempora illo fugit maiores numquam soluta nostrum qui dolorem ratione
          eum perferendis deleniti totam quia iste, quas blanditiis dignissimos
          magni? Consequuntur, delectus id similique aliquam cumque
          reprehenderit dolores autem. Totam ad recusandae voluptate odit
          reprehenderit obcaecati vel! Voluptates fugiat nisi praesentium neque?
          Architecto facilis vel sit qui aut praesentium amet cum labore
          repellendus ex nisi sequi cupiditate incidunt iusto, ea optio aperiam
          a minima atque quasi modi et? Iusto voluptate ducimus, reiciendis
          fugit molestiae alias excepturi magni similique iste placeat soluta.
          Error quod nobis blanditiis repellendus atque harum quibusdam
          distinctio culpa illum.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import CarouselProduct from "../components/CarouselProduct.vue";
import NavbarApp from "../components/NavbarApp.vue";

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
</style>
