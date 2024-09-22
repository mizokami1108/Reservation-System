<template>
  <div>
    <input v-model="taskName">
    <p>{{ taskName }}</p>
  </div>
</template>

<script setup lang="ts">
const taskName = ref<string>('init')
</script>
