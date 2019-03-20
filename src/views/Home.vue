<template>
  <div class="home">
    <SideBar v-if="isSideBarOpen" :isAuthenticated="true" @closeSideBar="closeSideBar"/>
    <AppBar @openSideBar="openSideBar"/>
    <LoadingScreen v-if="isRecipesLoading"/>
    <div v-else id="recipes">
      <RecipeCard v-for="recipeId in recipeIds" :recipeId="recipeId" :key="recipeId"/>
    </div>
    <router-link tag="div" to="/add" id="add-button">
      <span class="material-icons">add</span>
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import AppBar from '@/components/Home/AppBar'
import SideBar from '@/components/Home/SideBar'
import LoadingScreen from '@/components/Home/LoadingScreen'
import RecipeCard from '@/components/RecipeCard'

export default {
  name: 'home',
  components: {
    AppBar,
    SideBar,
    LoadingScreen,
    RecipeCard
  },
  data () {
    return {
      isSideBarOpen: false
    }
  },
  computed: {
    recipeIds () {
      return this.$store.state.recipes.map(x => x.id)
    },
    isRecipesLoading () {
      return this.$store.state.isRecipesLoading
    }
  },
  methods: {
    openSideBar () {
      this.isSideBarOpen = true
    },
    closeSideBar () {
      this.isSideBarOpen = false
    }
  }
}
</script>

<style lang="scss">
  @import '../assets/master';

  #recipes{
    margin-top: 65px;
    margin-bottom: 15px;
  }

  #add-button{
    height: 56px;
    width: 56px;
    background-color: $green;
    text-align: center;
    border-radius: 100%;
    box-shadow: $e5dp;
    position: fixed;
    bottom: 20px;
    right: 20px;
    cursor: pointer;
    .material-icons{
      font-size: 30px;
      color: white;
      line-height: 56px;
    }
  }
</style>
