import Vue from 'vue'
import Vuex from 'vuex'
import db from './firebase/init'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    recipes: [],
    isRecipesLoading: false
  },
  mutations: {
    loadRecipes (state, payload) {
      state.recipes = payload
    },
    setRecipesLoading (state, payload) {
      state.isRecipesLoading = payload
    }
  },
  actions: {
    loadRecipes (context) {
      this.commit('setRecipesLoading', true)
      db.collection('recipes').get()
      .then(querySnapshot => {
        let recipes = []
        querySnapshot.forEach(doc => {
          recipes.push({ ...doc.data(), id: doc.id })
        })
        this.commit('loadRecipes', recipes)
        this.commit('setRecipesLoading', false)
      })
    }
  }
})
