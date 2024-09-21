import axios from '~/axios'

export const useAdoptionStore = defineStore('adoption', {
  actions: {
    async addAdoption({
      fullName,
      email,
      telephone,
      observation,
      catId,
    }) {
      await axios.post('/adoption', {
        fullName,
        email,
        telephone,
        observation,
        catId,
      })
    }
  },
})