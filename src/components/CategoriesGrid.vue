<template>
  <div class="container">
    <div class="category-grid">
      <div class="grid-1" @click="goToCategoryPage('electronics')">
        <img src="../assets/imgs/elec.jpg" alt="Electonic category image" />
        <p>Electronics</p>
      </div>
      <div class="grid-2" @click="goToCategoryPage('jewelery')">
        <img src="../assets/imgs/jewelerry1.jpg" alt="Electonic category image" />
        <p>Jewellery</p>
      </div>
      <div class="grid-3" @click="goToCategoryPage(`men's clothing`)">
        <img src="../assets/imgs/menCloth.jpg" alt="Electonic category image" />
        <p>Men's Cloting</p>
      </div>
      <div class="grid-3-lower" @click="goToCategoryPage(`women's clothing`)">
        <img src="../assets/imgs/womenCl.jpg" alt="Electonic category image" />
        <p>Women's Clothing</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const goToCategoryPage = (category) => {
  router.push(`/category/${category}`)
}
</script>

<style scoped>
.category-grid {
  grid-gap: 1.3rem;
  display: grid;
  gap: 1.3rem;
  grid-template-areas:
    'one two four'
    'one two four-low';
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  height: 50rem;
  margin-top: 1.3rem;
}

.category-grid .grid-1 {
  grid-area: one;
}

.category-grid .grid-2 {
  grid-area: two;
}

.category-grid .grid-3 {
  grid-area: four;
}

.category-grid .grid-3-lower {
  grid-area: four-low;
}

.category-grid div {
  cursor: pointer;
  position: relative;
  background-color: #000;
  z-index: 999;
}

.category-grid div p {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 1.8rem;
  z-index: 2;
}

.category-grid div img {
  width: 100%;
  height: 100%;
}

.category-grid div::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
  transition: all 0.3s;
}

.category-grid div:hover::after {
  background: rgba(0, 0, 0, 0.6);
}
</style>
