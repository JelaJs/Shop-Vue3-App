<template>
  <CartComp />
  <header>
    <div class="container">
      <nav class="nav-container">
        <div class="logo">
          <RouterLink to="/" class="home-link">SHOP</RouterLink>
        </div>
        <ul>
          <RouterLink to="/login">Login</RouterLink>
          <div @click="openCart">
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

  <RouterView />
  <Footer />
</template>

<script setup>
//Dovrsi logiku za cart da se automatski azurira kad dodam item(watch)... Dodaj header sticky efekat ne home kad predjem prvu sekciju... Uradi responsive... Dodaj animacije
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/FooterComp.vue'
import CartComp from './components/CartComp.vue'

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
  height: 12rem;
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
  gap: 2rem;
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
</style>
