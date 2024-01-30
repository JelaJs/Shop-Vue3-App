<template>
  <div @click.stop="closeCart" id="cart-overlay"></div>
  <div id="cart-item" class="cart">
    <div class="content">
      <div class="cart-header">
        <p>Your Cart({{ cartItems.length }})</p>
        <button @click="closeCart">X</button>
      </div>
      <div class="cart-item-wrap" v-if="cartItems.length > 0">
        <div>
          <div class="cart-item" v-for="item in cartItems" :key="item.id">
            <img :src="item.image" alt="Cart item image" />
            <p>{{ item.title.slice(0, 20) }}...</p>
            <p>{{ item.price.toFixed(2) }}$</p>
            <div class="count-wrap-cart">
              <a @click="decreaseQuantity(item.id)">-</a>
              <p>{{ item.quantity }}</p>
              <a @click="increaseQuantity(item.id)">+</a>
            </div>
            <button @click="removeItem(item.id)">X</button>
          </div>
        </div>
      </div>
      <div class="empty-cart" v-if="cartItems.length === 0"><p>No items in cart...</p></div>
      <div v-if="cartItems.length > 0" class="total-price-wrap">
        <p>Total price: {{ totalPrice.toFixed(2) }}$</p>
        <button>Go to Checkout</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, inject } from 'vue'

const cartItemAdded = inject('cartItemAdded')
const cartItemRemoved = inject('cartItemRemoved')

let storedArr = localStorage.getItem('cartArray')
const cartItems = ref([])
const totalPrice = ref(0)

if (storedArr) {
  cartItems.value = JSON.parse(storedArr)
}

watch(cartItemAdded, () => {
  console.log('Desila se promena')
  storedArr = localStorage.getItem('cartArray')
  cartItems.value = JSON.parse(storedArr)
  totalPrice.value = 0
  sumtotalPrice()
  cartItemAdded.value = false
})

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
  const removedItem = cartItems.value.find((item) => item.id === id)

  if (itemIndex !== -1) {
    cartItems.value.splice(itemIndex, 1)

    localStorage.setItem('cartArray', JSON.stringify(cartItems.value))

    cartItemRemoved.value = true

    totalPrice.value -= removedItem.price
  }
}

const increaseQuantity = (id) => {
  const item = cartItems.value.find((item) => item.id === id)
  totalPrice.value -= item.price
  item.price = item.price / item.quantity
  if (item) {
    item.quantity += 1
    item.price = item.price * item.quantity

    totalPrice.value += item.price
  }
}

const decreaseQuantity = (id) => {
  const item = cartItems.value.find((item) => item.id === id)
  if (item.quantity === 1) return

  totalPrice.value -= item.price
  item.price = item.price / item.quantity
  if (item) {
    item.quantity -= 1
    item.price = item.price * item.quantity

    totalPrice.value += item.price
  }
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

.empty-cart {
  text-align: center;
  font-size: 1.8rem;
  margin-top: 10rem;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 20%;
}

.total-price-wrap button {
  padding: 1rem;
  border: 1px solid #000;
  background-color: transparent;
  color: #000;
  font-size: 1.4rem;
  cursor: pointer;
  transition: all 0.3s;
}

.total-price-wrap button:hover {
  background-color: #000;
  color: #fff;
}

.total-price-wrap p {
  font-size: 1.6rem;
}

.count-wrap-cart {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.count-wrap-cart a {
  border: none;
  font-size: 2.3rem;
  font-weight: 300;
  cursor: pointer;
  transition: all 0.2s ease-in;
}
</style>
