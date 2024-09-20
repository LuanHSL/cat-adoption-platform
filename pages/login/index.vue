<script setup>
import Cat from '~/assets/image/cat.png'

useHead({
  title: 'Login - Cat Adoption Platform',
})

const credentials = ref({
  username: '',
  password: ''
})

const login = () => {
  console.log(credentials.value)
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
        <form @submit.prevent="login">
          <Input
            v-model="credentials.username"
            class="mb-4"
            type="text"
            title="Username"
            placeholder="Enter the user name"
            required
            :value="credentials.username"
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
