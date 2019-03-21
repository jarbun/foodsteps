<template>
  <div id="recipe">
    <AppBar/>
    <img :src="recipe.imageUrl" alt="recipe image">
    <header>
      <div>
        <h1>{{ recipe.title }}</h1>
        <h2>{{ recipe.user }}</h2>
      </div>
      <span id="likes">
        <span>{{ recipe.nLikes }}</span>
        <span class="material-icons">favorite</span>
      </span>
    </header>
    <div id="description">
      {{ recipe.description }}
    </div>
    <div id="tags">
      <Chip v-for="(tag, i) in recipe.tags" :name="tag" :isActive="true" :key="i"/>
    </div>
    <div id="info">
      <h2>{{ recipe.nServings }} servings</h2>
      <h2>{{ recipe.timeTaken }} min</h2>
    </div>
    <div id="buttons">
      <button :class="{active: activeTab===0}" @click="activeTab = 0">Ingredients</button>
      <button :class="{active: activeTab===1}" @click="activeTab = 1">Directions</button>
    </div>
    <div id="active-component">
      <Ingredients :ingredients="recipe.ingredients" v-if="activeTab===0"/>
      <Directions :directions="recipe.directions" v-else/>
    </div>
  </div>
</template>

<script>
import AppBar from '@/components/Recipe/AppBar'
import Chip from '@/components/Chip'
import Ingredients from '@/components/Recipe/Ingredients'
import Directions from '@/components/Recipe/Directions'

export default {
  name: 'recipe',
  components: {
    AppBar,
    Chip,
    Ingredients,
    Directions
  },
  data () {
    return {
      activeTab: 0
    }
  },
  computed: {
    recipe () {
      return this.$store.state.recipes.find(x => x.id === this.$route.params.id)
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
  height: 30vh;
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
  color: $gray60;
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
  padding: 0 10px;
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

#buttons{
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  button{
    width: 100%;
    color: $gray60;
    border-bottom: 1px solid $light-gray;
  }
  .active{
    color: $green;
    border-bottom: 1px solid $green;
  }
}
</style>
