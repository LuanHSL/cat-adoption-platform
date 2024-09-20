<script setup>
import CatCute from '~/components/icon/CatCuteIcon.vue'
import EditIcon from '~/components/icon/EditIcon.vue'
import TrashIcon from '~/components/icon/TrashIcon.vue'
import appColors from '~/utils/Colors'

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
  <div class="flex h-screen">
    <section class="w-full max-w-[292px] border border-stroke">
      <div class="p-4">
        <Logo
          icon-size="3em"
          text-size="text-lg"
        />
      </div>
      <div class="px-4 pb-4 pt-8 border-t border-stroke">
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
          @click="() => {}"
        >
          New Chat
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
            v-for="cat in cats"
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
              {{ cat.title }}
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
                />
              </button>
            </div>
          </div>
        </div>
      </main>
    </section>
  </div>
</template>
