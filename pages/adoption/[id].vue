<script setup>
import CloseIcon from '~/components/icon/CloseIcon.vue';
import appColors from '~/utils/Colors';
import Input from '~/components/Input.vue';
import Textarea from '~/components/Textarea.vue';
import ModalSuccess from '~/components/modal/ModalSuccess.vue';

useHead({
  title: 'Form - Cat Adoption Platform',
})

const adoptionStore = useAdoptionStore()

const adoptionForm = ref({
  fullName: '',
  email: '',
  telephone: '',
  observation: '',
  isAgree: false
})

const isModalOpen = ref(false)

const router = useRouter()
const route = useRoute()

const goToCatList = () => {
  router.push('/')
}

const submit = async () => {
  try {    
    await adoptionStore.addAdoption({
      ...adoptionForm.value,
      catId: parseInt(route.params.id, 10)
    })
    openModal()
  } catch (error) {
    console.error(error)
  }
}

const closeModal = () => {
  isModalOpen.value = false
  goToCatList()
}

const openModal = () => {
  isModalOpen.value = true
}
</script>

<template>
  <header class="max-w-[455px] mx-auto flex justify-between items-center px-7 pt-7 pb-5">
    <h1 class="text-2xl font-semibold">Adoption Form</h1>
    <CloseIcon
      size="1.7em"
      :color="appColors.danger"
      class="cursor-pointer"
      @click="goToCatList"
    />
  </header>

  <Divider class="max-w-[455px] mx-auto px-7" />

  <main class="max-w-[455px] mx-auto px-7 pt-7 pb-5">
    <form
      class="flex flex-col space-y-7"
      @submit.prevent="submit"
      @keypress.enter.prevent="submit"
    >
      <Input
        v-model="adoptionForm.fullName"
        type="text"
        title="Full Name"
        placeholder="Enter your full name"
        required
        :value="adoptionForm.fullName"
      />
      <Input
        v-model="adoptionForm.email"
        type="text"
        title="Email"
        placeholder="Enter your email"
        required
        :value="adoptionForm.email"
      />
      <Input
        v-model="adoptionForm.telephone"
        type="text"
        title="Telephone"
        placeholder="Enter your telephone"
        required
        :value="adoptionForm.telephone"
      />
      <Textarea
        v-model="adoptionForm.observation"
        type="text"
        title="Why would you want to adopt this cat?"
        placeholder="Write here..."
        required
        :value="adoptionForm.observation"
      />

      <div class="flex items-center">
        <input
          v-model="adoptionForm.isAgree"
          class="w-5 h-5 cursor-pointer"
          type="checkbox"
          id="isAgree"
          name="isAgree"
          required
        />
        <label for="isAgree" class="ml-2 cursor-pointer text-secondary">I agree to take care of this cat</label>
      </div>

      <div class="flex space-x-3 justify-end">
        <button
          class="text-secondary py-3 px-5 rounded-lg text-sm border border-stroke font-semibold"
          @click.prevent.stop="goToCatList"
        >
          Cancel
        </button>
        <button
          class="bg-main text-white py-3 px-5 rounded-lg text-sm"
          type="submit"
        >
          Submit application
        </button>
      </div>
    </form>
  </main>

  <ModalSuccess
    v-if="isModalOpen"
    @close="closeModal"
  />
</template>
