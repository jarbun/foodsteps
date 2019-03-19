<template>
  <div class="home">
    <SideBar v-if="isSideBarOpen" :isAuthenticated="true" @closeSideBar="closeSideBar"/>
    <AppBar @openSideBar="openSideBar"/>
    <div id="recipes">
      <RecipeCard recipeId="0"/>
      <RecipeCard recipeId="1"/>
      <RecipeCard recipeId="2"/>
      <RecipeCard recipeId="0"/>
      <RecipeCard recipeId="1"/>
      <RecipeCard recipeId="2"/>
      <RecipeCard recipeId="0"/>
      <RecipeCard recipeId="1"/>
      <RecipeCard recipeId="2"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AppBar from '@/components/Home/AppBar'
import SideBar from '@/components/Home/SideBar'
import RecipeCard from '@/components/RecipeCard'

export default {
  name: 'home',
  components: {
    AppBar,
    SideBar,
    RecipeCard
  },
  data () {
    return {
      isSideBarOpen: false
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
