<script setup>
import EyeIcon from '~/components/icon/EyeIcon.vue';
import EyeOffIcon from '~/components/icon/EyeOffIcon.vue';
import appColors from '~/utils/Colors';

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  title: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    required: true
  },
  value: {
    type: String,
    default: ''
  },
  required: {
    type: Boolean,
    default: false
  }
})

const isVisible = ref(false)

const emit = defineEmits(['update:modelValue'])

const updateValue = (event) => {
  emit('update:modelValue', event.target.value)
}

const showPassword = () => {
  isVisible.value = true
}

const hiddenPassword = () => {
  isVisible.value = false
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
        class="border border-stroke w-full px-5 py-3 rounded-lg"
        :type="isVisible ? 'text' : type"
        :placeholder="placeholder"
        :value="value"
        :required="required"
        @input="updateValue"
      >
      <EyeIcon
        v-if="type === 'password' && !isVisible"
        size="1.4em"
        :color="appColors.placeholder"
        class="absolute right-4 top-1/2 -translate-y-1/2"
        @click="showPassword"
      />
      <EyeOffIcon
        v-if="type === 'password' && isVisible"
        size="1.4em"
        :color="appColors.placeholder"
        class="absolute right-4 top-1/2 -translate-y-1/2"
        @click="hiddenPassword"
      />
    </div>
  </div>
</template>
