<template>
  <div class="home">
    <SideBar v-if="isSideBarOpen" isAuthenticated="false" @closeSideBar="closeSideBar"/>
    <AppBar @openSideBar="openSideBar"/>
    <RecipeCard/>
  </div>
</template>

<script>
// @ is an alias to /src
import AppBar from '@/components/AppBar'
import SideBar from '@/components/SideBar'
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

</style>
