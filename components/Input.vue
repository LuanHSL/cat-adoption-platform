<script setup>
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

const emit = defineEmits(['update:modelValue'])

const updateValue = (event) => {
  emit('update:modelValue', event.target.value)
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
    <input
      class="border border-stroke w-full px-5 py-3 rounded-lg"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      :required="required"
      @input="updateValue"
    >
  </div>
</template>