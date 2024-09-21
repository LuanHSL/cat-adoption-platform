<script setup>
const props = defineProps({
  size: {
    type: String,
    default: '1em',
  },
  color: {
    type: String,
    default: 'currentColor',
  },
})
</script>

<template>
	<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24">
		<g fill="none">
			<circle cx="12" cy="12" r="9" :fill="color" fill-opacity="0.05" />
			<path :stroke="color" stroke-linecap="round" stroke-width="1.2" d="m9 9l6 6m0-6l-6 6" />
		</g>
	</svg>
</template>
