<script setup>
import Logo from '~/components/Logo.vue';
import CatItem from '~/components/CatItem.vue';
import Divider from '~/components/Divider.vue';

const router = useRouter()
const catStore = useCatStore()

const adopt = (id) => {
  router.push(`/adoption/${id}`)
}

onMounted(async () => {
  await catStore.fetchCats()
})

</script>

<template>
  <header class="max-w-[1216px] mx-auto px-7 pt-7 pb-5">
    <Logo />
  </header>

  <Divider class="max-w-[1216px] mx-auto px-7" />

  <main class="max-w-[1216px] mx-auto px-7 pt-7 pb-5">
    <section class="mb-6">
      <h1 class="text-main font-semibold text-3xl mb-3">Cats Adoption Platform</h1>
      <h2 class="text-secondary">Explore our list of lovable cats looking for their forever homes.</h2>
    </section>

    <section class="grid grid-cols-1 gap-5 md:grid-cols-4">
      <CatItem
        v-for="cat in catStore.cats"
        :key="`cat_${cat.id}`"
        :id="cat.id"
        :image="cat.image"
        :title="cat.name"
        :description="cat.description"
        @adopt="adopt"
      />
    </section>
  </main>
</template>
