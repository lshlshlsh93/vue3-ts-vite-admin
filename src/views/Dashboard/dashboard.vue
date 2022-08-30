<template>
  <div class="dashboard-container">
    <div class="card-container">
      <!-- <Card />
      <Sale />
      <Observe /> -->
      <Introduce />
    </div>
  </div>
</template>
<script setup lang="ts">
import Introduce from './components/Introduce/introduce.vue'
import Sale from './components/sale/sale.vue'
import Card from './components/card/card.vue'
import Observe from './components/Observe/observe.vue'
</script>
<style lang="scss" scoped></style>
