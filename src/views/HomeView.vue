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
  setTimeout(() => {
    const section1 = document.querySelector('.categories-home-section')
    const nav = document.querySelector('header')
    const navHeight = nav.getBoundingClientRect().height
    //console.log(window.location.pathname)

    if (wLocation.value === '/') {
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
      observer.observe(section1)
    } else {
      nav.classList.remove('sticky')
    }
  }, 300)
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
