<template>
  <div class="container section-padding" id="home-second-section">
    <p class="section-desc">Some of our products</p>
    <div v-if="fewProducts" class="few-prod-grid">
      <div
        @click="goToSingleItemPage(product.id)"
        class="product-box"
        v-for="product in fewProducts"
        :key="product.id"
      >
        <div class="img-wrap-center">
          <img :src="product.image" alt="Product image from API" />
        </div>
        <div class="product-info">
          <p class="product-name">{{ product.title }}</p>
        </div>
        <p class="product-price">{{ product.price }}$</p>
      </div>
    </div>
    <div v-if="responseError">
      <p class="response-error-msg">Something went wrong, try again.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const fewProducts = ref(null)
const responseError = ref(false)

const getFewProducts = async () => {
  try {
    const url = 'https://fakestoreapi.com/products?limit=8'

    const response = await fetch(url)

    if (!response.ok) throw new Error('Something went wrong', response.status)

    const data = await response.json()
    fewProducts.value = data
    responseError.value = false
    //console.log(fewProducts.value)
  } catch (error) {
    console.error('Something went wrong!', error)
    responseError.value = true
  }
}

const goToSingleItemPage = (id) => {
  router.push(`/product/${id}`)
}

onMounted(getFewProducts)
</script>

<style scoped>
.section-padding {
  padding-top: 11rem;
}

.section-desc {
  font-size: 2.6rem;
  font-weight: 500;
  margin-bottom: 4.2rem;
}

.few-prod-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
}

.few-prod-grid .product-box {
  position: relative;
  cursor: pointer;
  outline: 2px solid rgba(0, 0, 0, 0.205);
  outline-offset: -2px;
  transition: all 0.15s ease-in;
  padding-top: 3rem;
  padding-bottom: 1rem;
}

.few-prod-grid .product-box:hover {
  outline: 2px solid rgba(0, 0, 0, 0.7);
}

.few-prod-grid .img-wrap-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.few-prod-grid img {
  width: 15rem;
  height: 17rem;
  margin-bottom: 4rem;
}

.few-prod-grid .product-info {
  padding: 10px;
}

.few-prod-grid .product-info p {
  font-size: 1.6rem;
  font-weight: 300;
}

.few-prod-grid .product-info .product-name {
  margin-bottom: 1.5rem;
}

.product-price {
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-size: 1.6rem;
  font-weight: 500;
}

/**Responsive */
@media (max-width: 1100px) {
  .few-prod-grid img {
    width: 14rem;
    height: 16rem;
  }

  .few-prod-grid .product-info p,
  .product-price {
    font-size: 1.4rem;
  }
}

@media (max-width: 767px) {
  .few-prod-grid {
    grid-template-columns: 1fr 1fr 1fr;
  }

  .few-prod-grid img {
    width: 13rem;
    height: 15rem;
  }

  .section-desc {
    font-size: 2rem;
  }
}

@media (max-width: 581px) {
  .few-prod-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 446px) {
  .few-prod-grid img {
    width: 11rem;
    height: 13rem;
  }
}
</style>
