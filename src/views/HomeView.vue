<template>
  <main>
    <CategoriesGrid />
    <FewProducts />
    <WomanFashion />
    <ProductsSlider />
    <Electronic />
    <Footer />
  </main>
</template>

<script setup>
//import { ref, onMounted } from 'vue'
import CategoriesGrid from '../components/CategoriesGrid.vue'
import FewProducts from '../components/FewProducts.vue'
import WomanFashion from '@/components/WomanFashion.vue'
import ProductsSlider from '../components/ProductsSlider.vue'
import Electronic from '../components/ElectronicSection.vue'
import Footer from '../components/FooterComp.vue'
</script>

<style></style>
