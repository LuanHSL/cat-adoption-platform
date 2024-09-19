<script setup>
import CatIcon from '~/components/icon/CatIcon.vue';
import appColors from './utils/Colors';
</script>

<template>
  <h1 class="flex items-center space-x-2">
    <CatIcon size="4em" :color="appColors.main" />
    <span class="text-main font-semibold text-xl">Cat Adoption Platform</span>
  </h1>
</template>