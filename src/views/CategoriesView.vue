<template>
  <main>
    <div class="container">
      <div class="category-menu-flex">
        <div @click="goBackHome()" class="back-wrap">
          <font-awesome-icon class="back-icon" icon="fa-solid fa-chevron-left" />
        </div>
        <p class="category">{{ category }}</p>
      </div>
      <div v-if="categoryProducts" class="categories-grid">
        <div
          @click="goToSingleItemPage(product.id)"
          class="product-box"
          v-for="product in categoryProducts"
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
      <div v-else><ProductSkeleton /></div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ProductSkeleton from '../components/ProductsSkeleton.vue'

const router = useRouter()
const route = useRoute()
const category = route.params.id

const categoryProducts = ref(null)
const getCategoryProducts = async () => {
  try {
    const url = `https://fakestoreapi.com/products/category/${category}`

    const response = await fetch(url)

    if (!response.ok) throw new Error('Something went wrong', response.status)

    //Timeout for skeleton animation, to prevent flicking
    await new Promise((res) => setTimeout(res, 500))

    const data = await response.json()
    categoryProducts.value = data
    //console.log(categoryProducts.value)
  } catch (error) {
    console.error('Something went wrong!', error)
  }
}

const goBackHome = () => {
  router.push('/')
}

const goToSingleItemPage = (id) => {
  router.push(`/product/${id}`)
}
onMounted(getCategoryProducts)
</script>

<style scoped>
main {
  padding-top: 6rem;
  padding-bottom: 6rem;
}
.category-menu-flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;
}

.category-menu-flex .back-icon {
  width: 2rem;
  height: 2rem;
  cursor: pointer;
}

.category-menu-flex .category {
  font-size: 1.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.categories-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
}

.categories-grid .product-box {
  position: relative;
  cursor: pointer;
  outline: 2px solid rgba(0, 0, 0, 0.205);
  outline-offset: -2px;
  transition: all 0.15s ease-in;
  padding-top: 3rem;
  padding-bottom: 1rem;
}

.categories-grid .product-box:hover {
  outline: 2px solid rgba(0, 0, 0, 0.7);
}

.categories-grid .img-wrap-center {
  text-align: center;
}

.categories-grid img {
  width: 15rem;
  height: 17rem;
  margin-bottom: 4rem;
}

.categories-grid .product-info {
  padding: 10px;
}

.categories-grid .product-info p {
  font-size: 1.6rem;
  font-weight: 300;
}

.categories-grid .product-info .product-name {
  margin-bottom: 1.5rem;
}

.product-price {
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-size: 1.6rem;
  font-weight: 500;
}
</style>
