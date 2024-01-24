<template>
  <div class="container elec-section">
    <div class="content-flex">
      <div class="left-col">
        <img src="../assets/imgs/TechSectionImg.jpg" alt="Tech section image" />
      </div>
      <div class="right-col">
        <div class="content-wrap">
          <p class="tech-section-heading">Tech Haven: Explore Our Digital Wonderland</p>
          <p class="tech-section-desc">
            Explore cutting-edge technology with our curated selection of monitors, smartphones,
            headphones, and more. Immerse yourself in innovation and discover the future of digital
            gadgets.
          </p>
          <button>Explore</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.elec-section {
  padding-top: 11rem;
  padding-bottom: 6rem;
}

.elec-section .content-flex {
  display: flex;
  align-items: center;
  gap: 60px;
  background-color: #ebebeb;
}

.elec-section .content-flex .right-col {
  padding-right: 3rem;
}

.elec-section .content-flex .right-col .tech-section-heading {
  font-size: 3.2rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
}

.elec-section .content-flex .right-col .tech-section-desc {
  font-size: 1.6rem;
  font-weight: 300;
  margin-bottom: 3rem;
}

.elec-section .content-flex .right-col button {
  border: none;
  background-color: #000;
  color: #fff;
  font-size: 1.6rem;
  font-weight: 600;
  padding: 1.5rem 3rem;
  cursor: pointer;
  transition: all 0.3 ease-in;
  letter-spacing: 1px;
}

.elec-section .content-flex .right-col button:hover {
  background-color: transparent;
  outline: 1px solid #000;
  color: #000;
}
</style>
