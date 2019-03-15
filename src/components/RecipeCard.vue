<template>
  <router-link tag="div" :to="recipeUrl" class="recipe-card">
    <img :src="imageUrl" alt="recipe image">
    <div class="content">
      <h1>{{ title }}</h1>
      <h2 class="creator">{{ creator }}</h2>
      <div class="extra">
        <span class="likes">
          <span>{{ nLikes }}</span>
          <span class="material-icons">favorite</span>
        </span>
        <span>{{ timeTaken }} min</span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'RecipeCard',
  props: ['recipeId'],
  data () {
    return {
      imageUrl: '',
      title: '',
      creator: '',
      nLikes: 0,
      timeTaken: 0,
      recipeUrl: `/recipe/${this.recipeId}`
    }
  },
  created () {
    // Get recipe from store
    let recipe = this.$store.state.recipes.find(x => x.id === Number(this.recipeId))
    // Set attributes
    this.imageUrl = recipe.imageUrl
    this.title = recipe.title
    this.creator = recipe.creator
    this.nLikes = recipe.nLikes
    this.timeTaken = recipe.timeTaken
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/master';

.recipe-card{
  display: flex;
  margin-top: 15px;
  margin-left: 10px;
}

img{
  min-width: 100px;
  width: 100px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
  box-shadow: 0 3px 6px $gray16;
}

.content{
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 5px 20px 5px 10px;
}

.creator{
  font-size: 13px;
  color: $gray60;
  letter-spacing: 0.4px;
}

.extra{
  font-weight: $medium;
  font-size: 14px;
  color: $gray60;
  display: flex;
  justify-content: space-between;
  margin-top: auto;
}

.likes{
  display: flex;
  .material-icons{
    font-size: 14px;
    padding-left: 4px;
    align-self: center;
  }
}
</style>
