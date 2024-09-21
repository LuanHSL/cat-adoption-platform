<script setup>
import CatIcon from '~/components/icon/CatIcon.vue';
import appColors from '~/utils/Colors';

const props = defineProps({
  iconSize: {
    type: String,
    default: '4em'
  },
  textSize: {
    type: String,
    default: 'text-xl'
  }
})

</script>

<template>
  <h1 class="flex items-center space-x-2">
    <CatIcon :size="iconSize" :color="appColors.main" />
    <span
      class="text-main font-semibold"
      :class="textSize"
    >
      Cat Adoption Platform
    </span>
  </h1>
</template>