<template>
  <header-component></header-component>
  <router-view>
  </router-view>
</template>

<script setup lang="ts">
import HeaderComponent from "@/components/HeaderComponent.vue";
</script>

<style>
html,
body {
  max-width: 100%;
  overflow-x: hidden;
}
</style>