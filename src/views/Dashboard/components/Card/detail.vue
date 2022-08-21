<template>
  <div class="card-header">
    <span>{{ props.title }}</span>
  </div>
  <div class="card-content">{{ props.count }}</div>
  <div class="card-chart">
    <slot name="charts" />
  </div>
  <div class="card-footer">
    <slot name="footer" />
  </div>
</template>
<script setup lang="ts">
const props = defineProps(['title', 'count'])
</script>
<style lang="scss" scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  color: #d9d9d9;
}

.card-content {
  font-size: 30px;
  padding: 10px 0;
}
.card-chart {
  height: 50px;
}
.card-footer {
  border-top: 1px solid #eee;
  padding-top: 10px;
}
</style>
