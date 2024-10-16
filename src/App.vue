<template>
  <CartComp />
  <header>
    <div class="container">
      <nav class="nav-container">
        <div class="logo">
          <RouterLink to="/" class="home-link">SHOP</RouterLink>
        </div>
        <ul>
          <RouterLink to="/">Home</RouterLink>
          <div class="cart-wrap" @click="openCart">
            <p>{{ cartItems.length }}</p>
            <font-awesome-icon
              class="cart-icon"
              icon="fa-solid fa-cart-shopping"
              style="color: #000000"
            />
          </div>
        </ul>
      </nav>
    </div>
  </header>

  <RouterView v-slot="{ Component }">
    <Transition name="page" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>

  <Footer />
</template>

<script setup>
//Uradi responsive... Dodaj error handling za async f.
import { ref, provide, watch } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/FooterComp.vue'
import CartComp from './components/CartComp.vue'

let storedArr = localStorage.getItem('cartArray')
const cartItems = ref([])

const cartItemAdded = ref(false)
const cartItemRemoved = ref(false)
provide('cartItemAdded', cartItemAdded)
provide('cartItemRemoved', cartItemRemoved)

if (storedArr) {
  cartItems.value = JSON.parse(storedArr)
}

watch(cartItemAdded, () => {
  if (cartItemAdded.value === true) {
    //console.log('Desila se promena')
    storedArr = localStorage.getItem('cartArray')
    cartItems.value = JSON.parse(storedArr)
  }
})

watch(cartItemRemoved, () => {
  if (cartItemRemoved.value === true) {
    //console.log('Desila se promena za brisanje')
    storedArr = localStorage.getItem('cartArray')
    cartItems.value = JSON.parse(storedArr)
    //cartItemRemoved.value = false
  }
})

const openCart = () => {
  const cartOverlay = document.querySelector('#cart-overlay')
  const cartItem = document.querySelector('#cart-item')

  cartOverlay.classList.add('overlay')
  cartItem.classList.remove('cart')
  cartItem.classList.add('cart-open')
}
</script>

<style scoped>
main {
  padding-top: 6rem;
}

header {
  -webkit-box-shadow: 0px 7px 14px -5px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 7px 14px -5px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 7px 14px -5px rgba(0, 0, 0, 0.1);
}

.container .nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 9rem;
}

.container .nav-container .home-link {
  font-weight: 600;
  font-size: 4rem;
  letter-spacing: 2px;
  text-decoration: none;
  color: #000;
}

.container .nav-container ul {
  font-size: 1.8rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 3rem;
}

.container .nav-container ul a {
  text-decoration: none;
  color: #000;
  font-weight: 300;
}

.container .nav-container ul .cart-icon {
  color: #000;
  cursor: pointer;
}

.cart-wrap {
  position: relative;
}

.cart-wrap p {
  font-size: 1.2rem;
  position: absolute;
  top: -10px;
  right: -5px;
}

.page-enter-active,
.page-leave-active {
  transition: 400ms ease all;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

/**Responsive */
@media (max-width: 767px) {
  .container .nav-container {
    padding: 0 20px;
    height: 7rem;
  }

  .container .nav-container .home-link {
    font-size: 3rem;
  }
}
</style>
