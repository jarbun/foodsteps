<template>
  <router-link tag="div" :to="recipeUrl" class="recipe-card">
    <img :src="recipe.imageUrl" alt="recipe image">
    <div class="content">
      <router-link v-if="isEditable" tag="span" to="/edit" class="material-icons edit-icon">edit</router-link>
      <h1>{{ recipe.title }}</h1>
      <h2 class="user">{{ recipe.user }}</h2>
      <div class="extra">
        <span class="likes">
          <span>{{ recipe.nLikes }}</span>
          <span class="material-icons">favorite</span>
        </span>
        <span>{{ recipe.timeTaken }} min</span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'RecipeCard',
  props: ['recipeId', 'isEditable'],
  data () {
    return {
      recipeUrl: `/recipe/${this.recipeId}`
    }
  },
  computed: {
    recipe () {
      return this.$store.state.recipes.find(x => x.id === this.recipeId)
    }
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

.user{
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

.edit-icon{
  position: absolute;
  right: 15px;
  color: $gray50;
  cursor: pointer;
  border-radius: 50%;
  padding: 4px;
  background-color: $gray5;
}
</style>
