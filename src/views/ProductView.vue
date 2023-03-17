<template>
  <NavbarApp />
  <section class="product">
    <div class="container">
      <div class="row">
        <div class="col-lg-2 my-2">
          <p class="fw-bold fs-5">Kategori</p>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Default radio
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Default radio
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Default radio
            </label>
          </div>
        </div>
        <div class="col-lg-10">
          <div class="row">
            <div class="col-lg-3 col-6 p-3">
              <CardProduct
                src="/assets/images/home.png"
                name-product="Baut 15cm"
                category-product="Baut"
                price-product="15000"
                to="/detail-produk"
              />
            </div>
            <div class="col-lg-3 col-6 p-3">
              <CardProduct
                src="/assets/images/home.png"
                name-product="Baut 15cm"
                category-product="Baut"
                price-product="15000"
                to="/detail-produk"
              />
            </div>
            <div class="col-lg-3 col-6 p-3">
              <CardProduct
                src="/assets/images/home.png"
                name-product="Baut 15cm"
                category-product="Baut"
                price-product="15000"
                to="/detail-produk"
              />
            </div>
            <div class="col-lg-3 col-6 p-3">
              <CardProduct
                src="/assets/images/home.png"
                name-product="Baut 15cm"
                category-product="Baut"
                price-product="15000"
                to="/detail-produk"
              />
            </div>
            <div class="col-lg-3 col-6 p-3">
              <CardProduct
                src="/assets/images/home.png"
                name-product="Baut 15cm"
                category-product="Baut"
                price-product="15000"
                to="/detail-produk"
              />
            </div>
            <div class="col-lg-3 col-6 p-3">
              <CardProduct
                src="/assets/images/home.png"
                name-product="Baut 15cm"
                category-product="Baut"
                price-product="15000"
                to="/detail-produk"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-end mt-5">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </section>
</template>

<script setup>
import NavbarApp from "../components/NavbarApp.vue";
import CardProduct from "../components/CardProduct.vue";
</script>

<style scoped>
.product {
  margin-top: 200px;
}

@media (max-width: 992px) {
  .product {
    margin-top: 150px;
  }
}

@media (max-width: 768px) {
  .product {
    margin-top: 150px;
  }
}

@media (max-width: 576px) {
  .product {
    margin-top: 100px;
  }
}
</style>
