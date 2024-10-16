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
              <p>{{ singleQuantity }}</p>
              <button @click="increaseQuantity">+</button>
            </div>
            <p>{{ (singleProduct.price * singleQuantity).toFixed(2) }}$</p>
          </div>
          <div class="product-btn-flex">
            <button class="btn btn-buy">Buy Now</button>
            <button @click="addToCart" class="btn btn-addToCart">Add to Cart</button>
          </div>
        </div>
      </div>
      <div v-if="!singleProduct && !responseError"><SingleProductSkeleton /></div>
      <div v-if="responseError">
        <p class="response-error-msg">Something went wrong, try again.</p>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, inject, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import SingleProductSkeleton from '../components/SingleProductSkeleton.vue'

const cartItemAdded = inject('cartItemAdded')
const cartItemRemoved = inject('cartItemRemoved')

const route = useRoute()
const router = useRouter()
let storedArr = localStorage.getItem('cartArray')
const cartItems = ref([])
const responseError = ref(false)

if (storedArr) {
  cartItems.value = JSON.parse(storedArr)
}

const id = route.params.id
const quantity = ref(1)
const singleQuantity = ref(1)

const singleProduct = ref(null)
const getSingleProduct = async () => {
  try {
    const url = `https://fakestoreapi.com/products/${id}`

    const response = await fetch(url)

    if (!response.ok) throw new Error('Something went wrong', response.status)

    //Timeout for skeleton animation, to prevent flicking
    await new Promise((res) => setTimeout(res, 500))

    const data = await response.json()
    singleProduct.value = data
    responseError.value = false
    //console.log(singleProduct.value)
  } catch (error) {
    console.error('Something went wrong!', error)
    responseError.value = true
  }
}

watch(cartItemRemoved, () => {
  if (cartItemRemoved.value === true) {
    // console.log('Desila se promena za brisanje')
    storedArr = localStorage.getItem('cartArray')
    cartItems.value = JSON.parse(storedArr)
    cartItemRemoved.value = false
  }
})

const increaseQuantity = () => {
  singleQuantity.value += 1
}

const decreaseQuantity = () => {
  if (singleQuantity.value === 1) return

  singleQuantity.value -= 1
}

const goBack = () => {
  router.go(-1)
}

const addToCart = () => {
  const product = { ...singleProduct.value, quantity: quantity.value }
  if (cartItems.value.some((item) => item.id === singleProduct.value.id)) return
  //console.log('obj iz signle', cartItems.value)

  cartItems.value.push(product)
  localStorage.setItem('cartArray', JSON.stringify(cartItems.value))
  cartItemAdded.value = true
}

const removeSticky = () => {
  const nav = document.querySelector('header')

  setTimeout(() => {
    nav.classList.add('sticky')
    nav.classList.remove('sticky')
  }, 300)
}

onMounted(() => {
  getSingleProduct()
  removeSticky()
})
</script>

<style scoped>
main {
  height: 100vh;
}

.back-wrap {
  margin-bottom: 3rem;
  display: inline-block;
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
  margin-bottom: 6rem;
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

.product-btn-flex {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

.product-btn-flex .btn {
  border: none;
  text-transform: uppercase;
  font-size: 1.6rem;
  font-weight: 600;
  padding: 1.5rem 3rem;
  cursor: pointer;
  transition: all 0.2s;
}

.product-btn-flex .btn-buy {
  background-color: rgb(206, 23, 23);
  color: #fff;
}

.product-btn-flex .btn-buy:hover {
  background-color: transparent;
  color: #000;
  outline: 1px solid rgb(206, 23, 23);
}

.product-btn-flex .btn-addToCart {
  outline: 1px solid #000;
  background-color: #fff;
  color: #000;
}

.product-btn-flex .btn-addToCart:hover {
  background-color: #000;
  color: #fff;
}

/**Responsive */
@media (max-width: 1100px) {
  .product-content-wrap .description {
    font-size: 1.6rem;
    font-weight: 300;
    margin-bottom: 3rem;
  }

  .count-price-wrap .count-wrap button {
    font-size: 2rem;
    padding: 0.5rem 1rem;
  }

  .count-price-wrap p {
    padding: 0;
    font-size: 1.6rem;
  }

  .count-price-wrap {
    margin-bottom: 3rem;
  }

  .product-btn-flex .btn {
    padding: 1rem 2rem;
    font-size: 1.4rem;
  }

  .product-img-wrap img {
    width: 25rem;
    height: 25rem;
    margin-top: 4rem;
  }

  .back-wrap .back-icon {
    width: 2rem;
    height: 2rem;
  }
}

@media (max-width: 767px) {
  .product-img-wrap img {
    width: 18rem;
    height: 18rem;
  }

  .single-product-flex {
    gap: 2rem;
  }

  .product-content-wrap {
    padding: 2rem;
  }
}

@media (max-width: 581px) {
  main {
    height: 100%;
  }
  .single-product-flex {
    grid-template-columns: 1fr;
  }

  .product-img-wrap {
    text-align: center;
  }

  .product-img-wrap img {
    margin-top: 0;
  }
}
</style>
