<script setup>
import CatCute from '~/components/icon/CatCuteIcon.vue'
import EditIcon from '~/components/icon/EditIcon.vue'
import TrashIcon from '~/components/icon/TrashIcon.vue'
import LogoutIcon from '~/components/icon/LogoutIcon.vue'
import appColors from '~/utils/Colors'

import ModalDelete from '~/components/modal/ModalDelete.vue'

useHead({
  title: 'Admin - Cat Adoption Platform',
})

const catStore = useCatStore()
const authStore = useAuthStore()

const router = useRouter()

const isModalDeleteOpen = ref(false)

const catSelected = ref(null)

const selectCat = (id) => {
  catSelected.value = id
}

const closeModalDelete = () => {
  isModalDeleteOpen.value = false
}

const openModalDelete = (id) => {
  selectCat(id)
  isModalDeleteOpen.value = true
}

const deleteItem = async (id) => {
  await catStore.deleteCat(id)
  
  closeModalDelete()
}

const goToNewCat = () => {
  router.push('/admin/new-cat')
}

const goToHome = () => {
  router.push('/')
}

const signOut = async () => {
  await authStore.signOut()

  goToHome()
}

onMounted(async () => {
  await catStore.fetchCats()
})
</script>

<template>
  <ModalDelete
    v-if="isModalDeleteOpen"
    :id="catSelected"
    @close="closeModalDelete"
    @delete="deleteItem"
  />

  <div class="flex h-screen">
    <section class="flex flex-col justify-between w-full max-w-[292px] border border-stroke">
      <div class="p-4">
        <Logo
          icon-size="3em"
          text-size="text-lg"
        />
      </div>
      <div class="px-4 pb-4 pt-8 border-t border-stroke flex-grow">
        <h2 class="uppercase text-placeholder text-sm">Main Menu</h2>

        <ul class="mt-5">
          <li class="text-main text-lg font-semibold flex space-x-3 cursor-pointer">
            <CatCute
              size="1.5em"
            />
            <span>Cat List</span>
          </li>
        </ul>
      </div>

      <div class="p-4">
        <button
          class="flex space-x-2 items-center bg-danger/10 p-2 w-fit rounded-lg cursor-pointer hover:bg-danger/30"
          @click="signOut"
        >
          <LogoutIcon
            size="2em"
            :color="appColors.danger"
          />
          <span class="font-semibold text-danger">
            Logout
          </span>
        </button>
      </div>
    </section>
    <section class="p-8 w-full bg-stroke/20">
      <header class="flex justify-between items-center">
        <h1 class="flex items-center space-x-4">
          <div class="p-3 bg-stroke/40 rounded-lg">
            <CatCute
              size="2em"
              :color="appColors.main"
            />
          </div>
          <span class="text-2xl font-semibold">Cat List</span>
        </h1>

        <button
          class="bg-main text-white py-3 px-5 h-10 rounded-lg text-sm leading-none"
          @click="goToNewCat"
        >
          New Cat
        </button>
      </header>

      <main class="mt-7">
        <div class="border border-stroke rounded-2xl px-10 bg-white">
          <div class="grid grid-cols-12 gap-2 py-3">
            <div class="col-span-3 text-main text-sm font-semibold">Image</div>
            <div class="col-span-3 text-main text-sm font-semibold">Name</div>
            <div class="col-span-4 text-main text-sm font-semibold">Description</div>
            <div class="col-span-2 text-main text-sm font-semibold text-end">Actions</div>
          </div>

          <div
            v-for="cat in catStore.cats"
            :key="`cat_${cat.id}`"
            class="grid grid-cols-12 gap-2 py-3 border-t border-stroke"
          >
            <div class="col-span-3 text-main text-sm font-semibold">
              <img
                class="h-12 w-12 rounded-full object-cover"
                :src="cat.image"
                :alt="cat.description"
              />
            </div>
            <div class="flex items-center col-span-3 text-secondary text-sm">
              {{ cat.name }}
            </div>
            <div class="flex items-center col-span-4 text-secondary text-sm">
              {{ cat.description }}
            </div>
            <div class="col-span-2 flex items-center justify-end space-x-2">
              <button class="p-2.5 bg-main/10 rounded-sm hover:bg-main/30">
                <EditIcon
                  size="1.2em"
                  :color="appColors.main"
                />
              </button>
              <button class="p-2.5 bg-danger/10 rounded-sm hover:bg-danger/30">
                <TrashIcon
                  size="1.2em"
                  :color="appColors.danger"
                  @click="openModalDelete(cat.id)"
                />
              </button>
            </div>
          </div>
        </div>
      </main>
    </section>
  </div>
</template>
