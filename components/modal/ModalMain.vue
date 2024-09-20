<script setup>
const isOpen = ref(false)

const emit = defineEmits(['close'])

const closeModal = () => {
  isOpen.value = false
  emit('close')
}

</script>

<template>
  <Teleport to="body">
    <div
      class="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] z-50 flex justify-center items-center"
      @click="closeModal"
    />

    <div class="fixed bg-white p-5 rounded-lg z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <slot name="content" />
    </div>
  </Teleport>
</template>