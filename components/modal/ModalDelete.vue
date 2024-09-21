<script setup>
import ModalMain from './ModalMain.vue'
const isOpen = ref(false)
import appColors from '~/utils/Colors';
import TrashIcon from '~/components/icon/TrashIcon.vue'

const emit = defineEmits(['close', 'delete'])

const props = defineProps({
  id: {
    type: Number,
    required: true
  }
})

const closeModal = () => {
  isOpen.value = false
  emit('close')
}

const deleteItem = () => {
  emit('delete', props.id)
}

</script>

<template>
  <ModalMain
    @close="closeModal"
  >
    <template #content>
      <div class="flex flex-col justify-center items-center max-w-[210px]">
        <div class="p-2.5 bg-danger/10">
          <TrashIcon
            size="1.3em"
            :color="appColors.danger"
          />
        </div>
  
        <h1 class="text-xl font-semibold mt-6 text-center">Are You Sure?</h1>
  
        <p class="text-center text-secondary text-sm mt-6">
          Are you sure you want to delete this cat profile? This action cannot be undone.
        </p>
  
        <div class="flex space-x-3 w-full mt-6">
          <button
            class="text-secondary w-full py-3 px-5 rounded-lg text-sm border border-stroke font-semibold"
            @click="closeModal"
          >
            Cancel
          </button>
          <button
            class="bg-danger text-white w-full py-3 px-5 rounded-lg text-sm"
            @click="deleteItem"
          >
            Delete
          </button>
        </div>
      </div>
    </template>
  </ModalMain>
</template>