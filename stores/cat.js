import axios from '~/axios'

export const useCatStore = defineStore('cat', {
  state: () => ({ cats: [] }),
  actions: {
    async fetchCats() {
      const response = await axios.get('/cats')
      
      this.cats = response.data
    },
    async deleteCat(id) {
      await axios.delete('/cats', {
        params: { id }
      })
      
      this.fetchCats()
    },
    async addCat({ name, description, image }) {
      await axios.post('/cats', { name, description, image })
    }
  },
})