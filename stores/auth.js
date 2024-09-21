export const useAuthStore = defineStore('auth', {
  actions: {
    async signIn({email, password}) {
      const { error } = await useSupabaseClient()
        .auth
        .signInWithPassword({
          email,
          password
        });
  
      if (error) {
        throw error;
      }
    },
    async signOut() {
      await useSupabaseClient().auth.signOut()
    },
  },
})