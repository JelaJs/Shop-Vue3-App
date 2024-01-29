<template>
  <div @click.stop="closeCart" id="cart-overlay"></div>
  <div id="cart-item" class="cart">
    <div class="content">
      <div class="cart-header">
        <p>Your Cart(0)</p>
        <button @click="closeCart">X</button>
      </div>
      <div class="cart-item-wrap" v-if="cartItems">
        <div>
          <div class="cart-item" v-for="item in cartItems" :key="item.id">
            <img :src="item.image" alt="Cart item image" />
            <p>{{ item.title.slice(0, 20) }}...</p>
            <p>{{ item.price }}$</p>
            <button @click="removeItem(item.id)">X</button>
          </div>
        </div>
      </div>
      <div v-else><p>No items in cart...</p></div>
      <div class="total-price-wrap">
        <p>Total price: {{ totalPrice }}$</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const storedArr = localStorage.getItem('cartArray')
const cartItems = ref([])
const totalPrice = ref(0)

if (storedArr) {
  cartItems.value = JSON.parse(storedArr)
}

const closeCart = () => {
  const overlay = document.querySelector('#cart-overlay')
  const cartItem = document.querySelector('#cart-item')

  overlay.classList.remove('overlay')
  cartItem.classList.remove('cart-open')
  cartItem.classList.add('cart')
}

const sumtotalPrice = () => {
  if (cartItems.value) {
    for (let i = 0; i < cartItems.value.length; i++) {
      totalPrice.value += cartItems.value[i].price
    }
  }
}

const removeItem = (id) => {
  const itemIndex = cartItems.value.findIndex((item) => item.id === id)
  cartItems.value.splice(itemIndex, 1)
  localStorage.setItem('cartArray', JSON.stringify(cartItems.value))
}

onMounted(sumtotalPrice)
</script>

<style>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000a6;
  z-index: 200;
}

#cart-item {
  transition: all 0.2s ease-in;
}

.cart {
  position: fixed;
  top: 0;
  right: 0;
  width: 0;
  height: 100%;
}

.cart-open {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  background-color: #fff;
  z-index: 999;
  width: 40rem;
  padding: 3rem;
}

.content {
  height: 100%;
}

.cart-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;
}

.cart-header p {
  font-size: 1.6rem;
  font-weight: 500;
}

.cart-header button {
  border: none;
  background-color: transparent;
  font-size: 1.6rem;
  cursor: pointer;
}

.cart-item-wrap {
  height: 80%;
  overflow-y: scroll;
  margin-bottom: 2rem;
  border-bottom: 2px solid #000;
}

.cart-item-wrap .cart-item {
  padding: 1rem;
  margin-bottom: 2rem;
  border: 1px solid #dadada;
}

.cart-item-wrap .cart-item img {
  width: 15rem;
  height: 20rem;
}

.cart-item-wrap .cart-item p {
  font-size: 1.4rem;
}

.cart-item-wrap .cart-item button {
  border: none;
  background-color: transparent;
  font-size: 1.6rem;
  font-weight: 500;
  margin-top: 1rem;
  cursor: pointer;
}

.total-price-wrap {
  height: 20%;
}

.total-price-wrap p {
  font-size: 1.6rem;
}
</style>
