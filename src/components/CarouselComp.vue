<template>
  <div class="carousel">
    <slot :currentSlide="currentSlide" />

    <!--Navigation-->
    <div class="navigate">
      <div class="toggle-page left" @click="prevSlide">
        <font-awesome-icon class="slide-icon" icon="fa-solid fa-chevron-left" />
      </div>
      <div class="toggle-page right" @click="nextSlide">
        <font-awesome-icon class="slide-icon" icon="fa-solid fa-chevron-right" />
      </div>
    </div>

    <!--Pagination-->
    <div class="pagination">
      <span
        @click="goToSlide(index)"
        v-for="(slide, index) in getSlideCount"
        :key="index"
        :class="{ active: index + 1 === currentSlide }"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const currentSlide = ref(1)
const getSlideCount = ref(null)

//next slide
const nextSlide = () => {
  if (currentSlide.value === getSlideCount.value) {
    currentSlide.value = 1
    return
  }
  currentSlide.value += 1
}

//prev slide
const prevSlide = () => {
  if (currentSlide.value === 1) {
    currentSlide.value = 1
    return
  }
  currentSlide.value -= 1
}

//pagination
const goToSlide = (index) => {
  currentSlide.value = index + 1
}

onMounted(() => {
  getSlideCount.value = document.querySelectorAll('.slide').length
})
</script>

<style scoped>
.navigate {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navigate .toggle-page {
  cursor: pointer;
}

.navigate .toggle-page .slide-icon {
  width: 2rem;
  height: 2rem;
}

.pagination {
  position: absolute;
  width: 100%;
  top: -25px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
}

.pagination span {
  cursor: pointer;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid #a5a5a5;
}

.pagination .active {
  background-color: #b1b1b1;
}

/**Responsiove */
@media (max-width: 581px) {
  .pagination {
    top: 10px;
  }
}
</style>
