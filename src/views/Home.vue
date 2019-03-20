<template>
  <div class="home">
    <SideBar v-if="isSideBarOpen" :isAuthenticated="true" @closeSideBar="closeSideBar"/>
    <AppBar @openSideBar="openSideBar"/>
    <LoadingScreen v-if="isRecipesLoading"/>
    <div v-else id="recipes">
      <RecipeCard v-for="recipeId in recipeIds" :recipeId="recipeId" :key="recipeId"/>
    </div>
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
</style>
