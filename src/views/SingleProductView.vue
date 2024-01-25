<template>
  <main>
    <div class="container">
      <div @click="goBack()" class="back-wrap">
        <font-awesome-icon class="back-icon" icon="fa-solid fa-chevron-left" />
      </div>
      <div v-if="singleProduct" class="single-product-flex">
        <div class="product-img-wrap">
          <img :src="singleProduct.image" alt="Product image" />
        </div>
        <div class="product-content-wrap">
          <p class="description">{{ singleProduct.description }}</p>
          <div class="count-price-wrap">
            <p>Quantity</p>
            <div class="count-wrap">
              <button @click="decreaseQuantity">-</button>
              <p>{{ quantity }}</p>
              <button @click="increaseQuantity">+</button>
            </div>
            <p>{{ singleProduct.price * quantity }}$</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const id = route.params.id
const quantity = ref(1)

const singleProduct = ref(null)
const getSingleProduct = async () => {
  try {
    const url = `https://fakestoreapi.com/products/${id}`

    const response = await fetch(url)

    if (!response.ok) throw new Error('Something went wrong', response.status)

    const data = await response.json()
    singleProduct.value = data
    console.log(singleProduct.value)
  } catch (error) {
    console.error('Something went wrong!', error)
  }
}

const increaseQuantity = () => {
  quantity.value += 1
}

const decreaseQuantity = () => {
  if (quantity.value === 1) return

  quantity.value -= 1
}

const goBack = () => {
  router.go(-1)
}

onMounted(getSingleProduct)
</script>

<style scoped>
main {
  height: 100vh;
}

.back-wrap {
  margin-bottom: 3rem;
}

.back-wrap .back-icon {
  width: 3rem;
  height: 3rem;
  cursor: pointer;
}
.single-product-flex {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 60px;
}

.product-img-wrap img {
  width: 30rem;
  height: 30rem;
}

.product-content-wrap {
  padding: 60px;
}

.product-content-wrap .description {
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 6rem;
}

.count-price-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.count-price-wrap p {
  font-size: 1.8rem;
  font-weight: 400;
  padding: 1rem;
}

.count-price-wrap .count-wrap {
  display: flex;
  border: 1px solid #474747;
  align-items: center;
  gap: 1rem;
}

.count-price-wrap .count-wrap button {
  border: none;
  background-color: #dadada;
  font-size: 3rem;
  padding: 1rem 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in;
}

.count-price-wrap .count-wrap button:hover {
  background-color: #c7c7c7;
}
</style>
