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
        description: 'Healthy delicious homemade waffles with blueberries, perfect for a quick snack',
        tags: ['Vegetarian', 'Dessert', 'Quick'],
        nServings: 2,
        ingredients: [
          {
            name: 'All-purpose flour',
            quantity: '2 cups'
          },
          {
            name: 'Kosher salt',
            quantity: '1 tsp'
          },
          {
            name: 'Baking powder',
            quantity: '4 tsp'
          },
          {
            name: 'White sugar',
            quantity: '1 tbp'
          },
          {
            name: 'Milk',
            quantity: '1/2 cup'
          },
          {
            name: 'Eggs',
            quantity: '2 nos'
          }
        ],
        directions: [
          'Preheat the waffle iron. Stir together the flour, salt, baking powder, and sugar. Add the milk and eggs and stir to combine.',
          'Add the melted butter, vanilla, and almond extract. Stir to combine.',
          'Stir in the blueberries and then pour onto the hot waffle iron. Cook until lightly browned.',
          'Serve with waffle sauce or with a drizzle of maple syrup. Enjoy!'
        ]
      },
      {
        id: 1,
        imageUrl: 'https://images.unsplash.com/photo-1537494792426-7c8526686fb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60',
        title: 'Onion Sandwich',
        creator: 'Lucy Lee',
        nLikes: 32,
        timeTaken: 10,
        description: 'Easy, quick and healthy sandwich perfect for any time of the day',
        tags: ['Vegetarian', 'Quick', 'Snacks'],
        nServings: 2,
        ingredients: [
          {
            name: 'All-purpose flour',
            quantity: '2 cups'
          },
          {
            name: 'Kosher salt',
            quantity: '1 tsp'
          },
          {
            name: 'Baking powder',
            quantity: '4 tsp'
          },
          {
            name: 'White sugar',
            quantity: '1 tbp'
          },
          {
            name: 'Milk',
            quantity: '1/2 cup'
          },
          {
            name: 'Eggs',
            quantity: '2 nos'
          }
        ],
        directions: [
          'Preheat the waffle iron. Stir together the flour, salt, baking powder, and sugar. Add the milk and eggs and stir to combine.',
          'Add the melted butter, vanilla, and almond extract. Stir to combine.',
          'Stir in the blueberries and then pour onto the hot waffle iron. Cook until lightly browned.',
          'Serve with waffle sauce or with a drizzle of maple syrup. Enjoy!'
        ]
      },
      {
        id: 2,
        imageUrl: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60',
        title: 'French Fries',
        creator: 'Louis Hansel',
        nLikes: 12,
        timeTaken: 40,
        description: 'Crispy delicious fried potato fries',
        tags: ['Vegetarian', 'Snacks'],
        nServings: 2,
        ingredients: [
          {
            name: 'All-purpose flour',
            quantity: '2 cups'
          },
          {
            name: 'Kosher salt',
            quantity: '1 tsp'
          },
          {
            name: 'Baking powder',
            quantity: '4 tsp'
          },
          {
            name: 'White sugar',
            quantity: '1 tbp'
          },
          {
            name: 'Milk',
            quantity: '1/2 cup'
          },
          {
            name: 'Eggs',
            quantity: '2 nos'
          }
        ],
        directions: [
          'Preheat the waffle iron. Stir together the flour, salt, baking powder, and sugar. Add the milk and eggs and stir to combine.',
          'Add the melted butter, vanilla, and almond extract. Stir to combine.',
          'Stir in the blueberries and then pour onto the hot waffle iron. Cook until lightly browned.',
          'Serve with waffle sauce or with a drizzle of maple syrup. Enjoy!'
        ]
      }
    ]
  },
  mutations: {

  },
  actions: {

  }
})
