<script setup>
import Cat from '~/assets/image/cat.png'
import { userSchema } from '~/schemas/user'

useHead({
  title: 'Login - Cat Adoption Platform',
})

const supabase  = useSupabaseClient()

const router = useRouter()

const credentials = ref({
  email: '',
  password: ''
})

const goToAdmin = () => {
  router.push('/admin')
}

const signIn = async () => {
  try {
    const userParse = userSchema.parse({
      email: credentials.value.email,
      password: credentials.value.password,
    });

    const { error } = await supabase.auth.signInWithPassword({
      email: userParse.email,
      password: userParse.password
    });

    if (error) {
      throw error;
    }
    goToAdmin() 
  } catch (error) {
    console.error(error);
  }
}
</script>

<template>
  <main class="flex w-full h-screen max-w-[1420px] mx-auto space-x-4 p-4">
    <div class="w-full bg-main bg-hero-pattern rounded-3xl bg-cover bg-no-repeat bg-center hidden md:flex flex-col justify-between items-center">
      <h1 class="text-white text-center text-4xl mt-20 mx-5 font-semibold">Welcome to the Cat Adoption Panel</h1>

      <img
        :src="Cat"
        alt=""
        class="object-cover h-3/4"
      >
    </div>

    <div class="w-full flex items-center justify-center">
      <div class="flex flex-col w-full max-w-[320px]">
        <Logo />
        <Divider class="my-7" />
        <h2 class="font-semibold text-secondary text-xl mb-4">Login</h2>
        <form @submit.prevent="signIn">
          <Input
            v-model="credentials.email"
            class="mb-4"
            type="text"
            title="email"
            placeholder="Enter the user name"
            required
            :value="credentials.email"
          />
          <Input
            v-model="credentials.password"
            class="mb-4"
            type="password"
            title="Password"
            placeholder="Enter your password"
            required
            :value="credentials.password"
          />
    
          <button
            class="bg-main w-full text-white py-3 px-5 rounded-lg text-sm"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  </main>
</template>
