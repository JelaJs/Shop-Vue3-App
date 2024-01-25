<template>
  <div class="container fashion-section">
    <div class="content-wrap">
      <div class="img-wrap">
        <img src="../assets/imgs/WomanFashion.jpg" alt="Womens's fashion section picture" />
        <div class="fashion-content-wrap">
          <p class="fashion-header">Refresh Your Style - Explore Our Women's Collection</p>
          <p class="fashion-text">
            Discover sophisticated elegance and comfort in our exclusive women's collection. Find
            perfect pieces that accentuate your unique beauty and complement your style.
          </p>
          <button @click="goToCategoryPage(`women's clothing`)">Explore</button>
        </div>
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
.fashion-section {
  padding-top: 11rem;
  text-align: center;
}

.fashion-section .content-wrap .img-wrap {
  position: relative;
  display: inline-block;
  height: 78rem;
}

.fashion-section .content-wrap .img-wrap .fashion-content-wrap {
  position: absolute;
  width: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  z-index: 10;
}

.fashion-section .content-wrap .img-wrap .fashion-content-wrap .fashion-header {
  font-size: 2.6rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.fashion-section .content-wrap .img-wrap .fashion-content-wrap .fashion-text {
  font-size: 1.5rem;
  font-weight: 300;
  opacity: 0.9;
  margin-bottom: 7rem;
}

.fashion-section .content-wrap .img-wrap .fashion-content-wrap button {
  border: none;
  background-color: #fff;
  color: black;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 1px;
  padding: 1.2rem 3.8rem;
  font-size: 1.4rem;
  cursor: pointer;
  transition: all 0.2s ease-in;
}

.fashion-section .content-wrap .img-wrap .fashion-content-wrap button:hover {
  background-color: #000;
  color: #fff;
}

.fashion-section .content-wrap .img-wrap::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.fashion-section .content-wrap img {
  width: 53rem;
  height: 78rem;
}
</style>
