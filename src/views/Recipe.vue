<template>
  <div id="recipe">
    <AppBar/>
    <img :src="imageUrl" alt="recipe image">
    <header>
      <div>
        <h1>{{ title }}</h1>
        <h2>{{ creator }}</h2>
      </div>
      <span id="likes">
        <span>{{ nLikes }}</span>
        <span class="material-icons">favorite</span>
      </span>
    </header>
    <div id="description">
      {{ description }}
    </div>
    <div id="tags">
      <Chip v-for="(tag, i) in tags" :text="tag" :key="i"/>
    </div>
    <div id="info">
      <h2>{{ nServings }} servings</h2>
      <h2>{{ timeTaken }} min</h2>
    </div>
  </div>
</template>

<script>
import AppBar from '@/components/Recipe/AppBar'
import Chip from '@/components/Chip'

export default {
  name: 'recipe',
  components: {
    AppBar,
    Chip
  },
  data () {
    return {
      id: 0,
      imageUrl: 'https://images.unsplash.com/photo-1504387432042-8aca549e4729?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
      title: 'Blueberry Waffles',
      creator: 'Taylor Kiser',
      nLikes: 28,
      timeTaken: 20,
      description: 'Healthy delicious homemade waffles with blueberries, perfect for a quick snack',
      tags: ['Vegetarian', 'Dessert', 'Quick', 'Snacks', 'Drinks'],
      nServings: 2,
      ingredients: [
        {
          name: '',
          quantity: ''
        }
      ],
      directions: []
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/master';

#recipe{
  display: flex;
  flex-direction: column;
}

#navbar{
  display: flex;
  position: absolute;
  height: 50px;
  padding: 0 10px;
  .material-icons{
    color: white;
    align-self: center;
    text-shadow: $e3dp;
  }
}

img{
  width: 100%;
  height: 200px;
  object-fit: cover;
  box-shadow: $e2dp;
}

header{
  display: flex;
  justify-content: space-between;
  margin: 10px 10px 0 10px;
  h1{
    font-size: 18px;
  }
}

h2{
  color: $gray50;
  letter-spacing: 0.4px;
}

#likes{
  display: flex;
  align-self: center;
  font-weight: $medium;
  .material-icons{
    color: $gray50;
    vertical-align: middle;
    font-size: 19px;
    padding-left: 4px;
  }
}

#description{
  margin: 15px 20px 0 20px;
  text-align: center;
}

#tags{
  margin: 10px auto;
  max-width: 100%;
  overflow-x: scroll;
  white-space: nowrap;
}
#tags::-webkit-scrollbar{
  display: none;
}

#info{
  margin-top: 5px;
  display: flex;
  justify-content: space-around;
}
</style>
