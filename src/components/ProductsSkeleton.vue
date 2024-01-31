<template>
  <div class="grid">
    <div class="skeleton-wrap">
      <div class="img-center">
        <div class="skeleton-img skeleton"></div>
      </div>
      <div class="skeleton-text skeleton"></div>
      <div class="skeleton-price skeleton"></div>
    </div>
    <div class="skeleton-wrap">
      <div class="img-center">
        <div class="skeleton-img skeleton"></div>
      </div>
      <div class="skeleton-text skeleton"></div>
      <div class="skeleton-price skeleton"></div>
    </div>
    <div class="skeleton-wrap">
      <div class="img-center">
        <div class="skeleton-img skeleton"></div>
      </div>
      <div class="skeleton-text skeleton"></div>
      <div class="skeleton-price skeleton"></div>
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
}

.skeleton-wrap {
  outline: 2px solid rgba(0, 0, 0, 0.205);
  padding-top: 3rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 2rem;
}

.img-center {
  width: 100%;
  display: flex;
  justify-content: center;
}

.skeleton-img {
  width: 15rem;
  height: 17rem;
  margin-bottom: 5rem;
}

.skeleton-text {
  width: 100%;
  height: 2rem;
  margin-bottom: 3rem;
}

.skeleton-price {
  width: 4rem;
  height: 2rem;
}

.skeleton {
  animation: skeleton-loading 1s linear infinite alternate;
}

@keyframes skeleton-loading {
  0% {
    background-color: hsl(200, 20%, 70%);
  }

  100% {
    background-color: hsl(200, 20%, 95%);
  }
}
</style>
