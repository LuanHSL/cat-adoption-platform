<script setup>
const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['adopt']);

const adopt = () => {
  emit('adopt', props.id);
}
</script>

<template>
  <article class="p-5 flex flex-col rounded-xl border border-stroke">
    <img
      class="rounded-lg mb-3 h-56 object-cover md:h-40 bg-center"
      :src="image"
    >
    <h3 class="font-semibold text-xl mb-2">{{ title }}</h3>
    <p class="text-secondary mb-5 text-sm leading-6 line-clamp-2">{{ description }}</p>
    <button
      class="bg-main text-white p-3 rounded-lg text-sm"
      @click="adopt"
    >
      Adopt
    </button>
  </article>
</template>
