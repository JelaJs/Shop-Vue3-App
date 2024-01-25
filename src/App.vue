<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/FooterComp.vue'
</script>

<template>
  <header>
    <div class="container">
      <nav class="nav-container">
        <div class="logo">
          <RouterLink to="/" class="home-link">SHOP</RouterLink>
        </div>
        <ul>
          <RouterLink to="/">Login</RouterLink>
          <font-awesome-icon
            class="cart-icon"
            icon="fa-solid fa-cart-shopping"
            style="color: #000000"
          />
        </ul>
      </nav>
    </div>
  </header>

  <RouterView />
  <Footer />
</template>

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
