<script setup>
import ModalMain from './ModalMain.vue'
import SuccessIcon from '~/components/icon/SuccessIcon.vue';
const isOpen = ref(false)
import appColors from '~/utils/Colors';

const emit = defineEmits(['close'])

const closeModal = () => {
  isOpen.value = false
  emit('close')
}

</script>

<template>
  <ModalMain
    @close="closeModal"
  >
    <template #content>
      <div class="flex flex-col justify-center items-center max-w-[230px]">
        <SuccessIcon
          size="3em"
          :color="appColors.success"
        />
  
        <h1 class="text-xl font-semibold mt-6 text-center">Application Submitted!</h1>
  
        <p class="text-center text-secondary text-sm mt-6">
          Thank you for submitting your adoption application! Our team will review your application and get back to you shortly.
        </p>
  
        <button
          class="bg-main text-white w-full mt-6 py-3 px-5 rounded-lg text-sm"
          @click="closeModal"
        >
          Close
        </button>
      </div>
    </template>
  </ModalMain>
</template>