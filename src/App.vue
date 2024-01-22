<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="container">
      <nav class="nav-container">
        <div class="logo"><p>SHOP</p></div>
        <ul>
          <RouterLink to="/">Categories</RouterLink>
          <RouterLink to="/about">Product Page</RouterLink>
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
</template>

<style scoped>
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

.container .nav-container p {
  font-weight: 600;
  font-size: 4rem;
  letter-spacing: 2px;
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
