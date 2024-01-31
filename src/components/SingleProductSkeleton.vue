<template>
  <div class="single-skeleton-grid">
    <div class="first-col">
      <div class="signle-skeleton-img skeleton"></div>
    </div>
    <div class="single-skeleton-second-col">
      <div class="single-skeleton-text-wrap">
        <div class="single-skeleton-text skeleton"></div>
        <div class="single-skeleton-text skeleton"></div>
        <div class="single-skeleton-text skeleton"></div>
      </div>
      <div class="single-skeleton-innerFlex">
        <div class="single-skeleton-quantity skeleton"></div>
        <div class="single-skeleton-plusMinus skeleton"></div>
        <div class="single-skeleton-price skeleton"></div>
      </div>
      <div class="single-skeleton-btns-wrap">
        <div class="single-skeleton-btns skeleton"></div>
        <div class="single-skeleton-btns skeleton"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.single-skeleton-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.single-skeleton-second-col {
  padding: 6rem;
}

.signle-skeleton-img {
  width: 30rem;
  height: 30rem;
}

.single-skeleton-text {
  width: 100%;
  height: 2rem;
  margin-bottom: 1rem;
}

.single-skeleton-text-wrap {
  margin-bottom: 5rem;
}

.single-skeleton-innerFlex {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;
}

.single-skeleton-quantity,
.single-skeleton-price {
  width: 6rem;
  height: 2rem;
}

.single-skeleton-plusMinus {
  width: 9rem;
  height: 3.5rem;
}

.single-skeleton-btns-wrap {
  width: 20rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 2rem;
}

.single-skeleton-btns {
  width: 50%;
  height: 3rem;
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
