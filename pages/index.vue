<script setup>
import Logo from '~/components/Logo.vue';
import CatItem from '~/components/CatItem.vue';
import Divider from '~/components/Divider.vue';

const router = useRouter()

const adopt = (id) => {
  router.push(`/adoption/${id}`)
}

const cats = ref([
  {
    id: 1,
    image: 'https://www.petz.com.br/blog/wp-content/uploads/2019/07/vida-de-gato.jpg',
    title: 'Gato 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  {
    id: 2,
    image: 'https://www.hola.com/horizon/square/a7388ce35d31-gatito-t.jpg',
    title: 'Gato 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  {
    id: 3,
    image: 'https://es.mypet.com/wp-content/uploads/sites/23/2022/08/ES_2022_CABU_POST-NLDAZ-MAULLIDOS-GATOS_OCT-22_4-scaled-1.jpg',
    title: 'Gato 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  {
    id: 4,
    image: 'https://ca-times.brightspotcdn.com/dims4/default/796e6c9/2147483647/strip/true/crop/1970x1108+39+0/resize/1200x675!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F12%2Fa5%2F79e097ccf62312d18a025f22ce48%2Fhoyla-recuento-11-cosas-aman-gatos-top-001',
    title: 'Gato 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  {
    id: 5,
    image: 'https://static.lasprovincias.es/www/multimedia/202112/12/media/cortadas/gatos-kb2-U160232243326NVC-624x385@Las%20Provincias.jpg',
    title: 'Gato 5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  {
    id: 6,
    image: 'https://i0.statig.com.br/bancodeimagens/4p/tn/iw/4ptniw5sc3aexg3mfpe0644ui.jpg',
    title: 'Gato 6',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  }
])

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
        v-for="cat in cats"
        :key="`cat_${cat.id}`"
        :id="cat.id"
        :image="cat.image"
        :title="cat.title"
        :description="cat.description"
        @adopt="adopt"
      />
    </section>
  </main>
</template>
