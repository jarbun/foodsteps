import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    recipes: [
      {
        id: 0,
        imageUrl: 'https://images.unsplash.com/photo-1504387432042-8aca549e4729?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        title: 'Blueberry Waffles',
        creator: 'Taylor Kiser',
        nLikes: 28,
        timeTaken: 20,
        description: '',
        tags: [],
        nServings: 0,
        ingredients: [
          {
            name: '',
            quantity: ''
          }
        ],
        directions: []
      },
      {
        id: 1,
        imageUrl: 'https://images.unsplash.com/photo-1537494792426-7c8526686fb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60',
        title: 'Onion Sandwich',
        creator: 'Lucy Lee',
        nLikes: 32,
        timeTaken: 10,
        description: '',
        tags: [],
        nServings: 0,
        ingredients: [
          {
            name: '',
            quantity: ''
          }
        ],
        directions: []
      },
      {
        id: 2,
        imageUrl: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60',
        title: 'French Fries',
        creator: 'Louis Hansel',
        nLikes: 12,
        timeTaken: 40,
        description: '',
        tags: [],
        nServings: 0,
        ingredients: [
          {
            name: '',
            quantity: ''
          }
        ],
        directions: []
      }
    ]
  },
  mutations: {

  },
  actions: {

  }
})
