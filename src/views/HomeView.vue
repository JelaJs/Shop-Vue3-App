<template>
  <main class="home-main">
    <CategoriesGrid />
    <FewProducts />
    <WomanFashion />
    <ProductsSlider />
    <Electronic />
  </main>
</template>

<script setup>
import { ref, onUnmounted, onMounted } from 'vue'
import CategoriesGrid from '../components/CategoriesGrid.vue'
import FewProducts from '../components/FewProducts.vue'
import WomanFashion from '@/components/WomanFashion.vue'
import ProductsSlider from '../components/ProductsSlider.vue'
import Electronic from '../components/ElectronicSection.vue'

const wLocation = ref(null)

//Sticky Navbar observer animation
const setSticky = () => {
  const section1 = document.querySelector('.categories-home-section')
  const nav = document.querySelector('header')
  const navHeight = nav.getBoundingClientRect().height
  //console.log(window.location.pathname)

  const obsCallback = function (entries) {
    const [entry] = entries
    if (!entry.isIntersecting) {
      nav.classList.add('sticky')
      section1.style.paddingTop = `${navHeight}px`
    } else {
      nav.classList.remove('sticky')
      section1.style.paddingTop = '0px'
    }
  }

  const obsOptions = {
    root: null,
    threshold: 0,
    rootMargin: `${navHeight}px`
  }

  const observer = new IntersectionObserver(obsCallback, obsOptions)

  if (wLocation.value === '/') {
    observer.observe(section1)
  }

  if (wLocation.value !== '/') {
    observer.unobserve(section1)
    nav.classList.remove('sticky')
    //console.log(nav)
  }
}

onMounted(() => {
  wLocation.value = window.location.pathname
  setSticky()
})

onUnmounted(() => {
  wLocation.value = window.location.pathname
  setSticky()
})
</script>

<style>
.sticky {
  position: fixed;
  width: 100%;
  background-color: white;
  z-index: 199;
}
</style>
