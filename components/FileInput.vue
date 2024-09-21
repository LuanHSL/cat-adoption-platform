<script setup>
import CameraIcon from '~/components/icon/CameraIcon.vue';
import appColors from '~/utils/Colors';

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    required: true
  },
  required: {
    type: Boolean,
    default: false
  },
  value: {
    type: String,
    default: ''
  },
  accept: {
    type: String,
    default: 'image/*'
  }
})

const emit = defineEmits(['select-file'])

const fileInput = ref(null)
const fileName = ref('')

const handleFileChange = (event) => {
  const file = event.target.files[0]
  if (file) {
    fileName.value = file.name
    emit('select-file', file)

    document.activeElement.blur()
  }
}

const openFileInput = () => {
  fileInput.value.click();
}

</script>

<template>
  <div>
    <p
      v-if="title"
      class="text-main font-semibold mb-2"
    >
      {{ title }}
    </p>
    <div class="relative">
      <input
        type="file"
        :accept="accept" 
        ref="fileInput"
        @change="handleFileChange"
        hidden
      />
      <input
        type="text"
        :value="fileName || value"
        :placeholder="placeholder"
        :required="required"
        aria-required="true"
        class="border border-stroke w-full px-5 py-3 cursor-pointer rounded-lg"
        @click="openFileInput"
      />
      <CameraIcon
        size="1.4em"
        :color="appColors.main"
        class="absolute right-4 top-1/2 cursor-pointer -translate-y-1/2"
        @click="openFileInput"
      />
    </div>
  </div>
</template>
