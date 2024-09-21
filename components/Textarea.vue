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
  },
  rows: {
    type: Number,
    default: 4
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
    <textarea
      class="border border-stroke w-full px-5 py-3 rounded-lg resize-none"
      :placeholder="placeholder"
      :value="value"
      :required="required"
      :rows="rows"
      @input="updateValue"
    ></textarea>
  </div>
</template>