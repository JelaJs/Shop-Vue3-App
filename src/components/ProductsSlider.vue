<template>
  <div v-if="sliderProducts" class="container slider-section">
    <p class="section-desc">Women's collection:</p>
    <Carousel class="carousel" v-slot="{ currentSlide }">
      <Slide v-for="(product, index) in sliderProducts" :key="index">
        <div
          @click="goToSingleItemPage(product.id)"
          v-show="currentSlide === index + 1"
          class="slide-info"
        >
          <img :src="product.image" alt="Slider product image" />
          <p class="slide-product-title">{{ product.title }}</p>
          <p class="slide-product-price">{{ product.price }}$</p>
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Carousel from '../components/CarouselComp.vue'
import Slide from '../components/SlideComp.vue'

const router = useRouter()
const sliderProducts = ref(null)

const getSliderProducts = async () => {
  try {
    const url = 'https://fakestoreapi.com/products?sort=desc'

    const response = await fetch(url)

    if (!response.ok) throw new Error('Something went wrong', response.status)

    const data = await response.json()
    sliderProducts.value = data.filter((data) => data.id > 14 && data.id < 20)
    //console.log(sliderProducts.value)
  } catch (error) {
    console.error('Something went wrong!', error)
  }
}

const goToSingleItemPage = (id) => {
  router.push(`product/${id}`)
}

onMounted(getSliderProducts)
</script>

<style scoped>
.section-desc {
  font-size: 2.6rem;
  font-weight: 500;
  margin-bottom: 4.2rem;
}
.slider-section {
  padding-top: 11rem;
  height: 573px;
}

.carousel {
  position: relative;
  height: 100%;
}

.slide-info {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 27rem;
  padding: 2rem 1rem;
  outline: 2px solid rgba(0, 0, 0, 0.205);
  outline-offset: -2px;
  cursor: pointer;
  z-index: 100;
}

.slide-info img {
  width: 25rem;
  height: 25rem;
  margin-bottom: 3rem;
}

.slide-info .slide-product-title {
  font-size: 1.6rem;
  font-weight: 300;
  margin-bottom: 1rem;
}

.slide-info .slide-product-price {
  font-size: 1.6rem;
  font-weight: 500;
}

/**Responsive */
@media (max-width: 767px) {
  .slide-info img {
    width: 21rem;
    height: 21rem;
  }

  .slide-info {
    width: 23rem;
  }

  .section-desc {
    font-size: 2rem;
  }
}

@media (max-width: 581px) {
  .slide-info img {
    width: 17rem;
    height: 17rem;
  }

  .slide-info {
    width: 20rem;
    margin-top: 4rem;
  }

  .pagination {
    top: 10px;
  }
}
</style>
