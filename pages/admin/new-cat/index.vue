<script setup>
import CloseIcon from '~/components/icon/CloseIcon.vue';
import appColors from '~/utils/Colors';
import Input from '~/components/Input.vue';
import Textarea from '~/components/Textarea.vue';
import { catSchema } from '~/schemas/cat'

useHead({
  title: 'Form - Cat Adoption Platform',
})

const catStore = useCatStore()

const imageSelected = ref('')
const imageCreated = ref(null)

const cat = ref({
  name: '',
  description: ''
})

const router = useRouter()

const goToAdmin = () => {
  router.push('/admin')
}

const selectFile = (file) => {
  imageSelected.value = file

  imageCreated.value = URL.createObjectURL(file)
}

const submit = async () => {
  try {
    const catParse = catSchema.parse({ ...cat.value, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF1IwK6-SxM83UpFVY6WtUZxXx-phss_gAUfdKbkTfau6VWVkt'});
  
    await catStore.addCat(catParse)

    goToAdmin()
  } catch (error) {
    console.error(error);
  }
}
</script>

<template>
  <header class="max-w-[455px] mx-auto flex justify-between items-center px-7 pt-7 pb-5">
    <h1 class="text-2xl font-semibold">Register New Cat</h1>
    <CloseIcon
      size="1.7em"
      :color="appColors.danger"
      class="cursor-pointer"
      @click="goToAdmin"
    />
  </header>

  <Divider class="max-w-[455px] mx-auto px-7" />

  <main class="max-w-[455px] mx-auto px-7 pt-7 pb-5">
    <form
      class="flex flex-col space-y-7"
      @submit.prevent="submit"
    >

      <FileInput
        title="Image"
        placeholder="URL and Upload"
        required
        @select-file="selectFile"
      />
      <img
        v-if="imageCreated"
        :src="imageCreated"
        class="w-40 h-40 mx-auto"
      />

      <Input
        v-model="cat.name"
        type="text"
        title="Name"
        placeholder="Enter your cat's name"
        required
        :value="cat.name"
      />
      <Textarea
        v-model="cat.description"
        type="text"
        title="Description"
        placeholder="Write here..."
        required
        :value="cat.description"
      />

      <div class="flex space-x-3 justify-end">
        <button
          class="text-secondary py-3 px-5 rounded-lg text-sm border border-stroke font-semibold"
          @click.prevent.stop="goToAdmin"
        >
          Cancel
        </button>
        <button
          class="bg-main text-white py-3 px-5 rounded-lg text-sm"
          type="submit"
        >
          Save
        </button>
      </div>
    </form>
  </main>
</template>
