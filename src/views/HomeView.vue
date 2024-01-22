<template>
  <main>
    <CategoriesGrid />
    <FewProducts />
  </main>
</template>

<script setup>
//import { ref, onMounted } from 'vue'
import CategoriesGrid from '../components/CategoriesGrid.vue'
import FewProducts from '../components/FewProducts.vue'
</script>

<style>
main {
  padding: 60px 0;
}
</style>
