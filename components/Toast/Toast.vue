<script setup lang="ts">
import { useToastStore } from "~/stores/toast";

const toastStore = useToastStore();
</script>

<template>
  <VSnackbar
    v-model="toastStore.isActive"
    timeout="2500"
    :color="toastStore.color"
    location="top center"
    variant="elevated"
    class="py-2"
    @on-vnode-unmounted="toastStore.unsetSnackbar()"
  >
    <v-icon :icon="toastStore.icon" />
    {{ toastStore.text }}
  </VSnackbar>
</template>
