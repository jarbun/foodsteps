<template>
  <div class="home">
    <SideBar v-if="isSideBarOpen" isAuthenticated="false" @closeSideBar="closeSideBar"/>
    <AppBar @openSideBar="openSideBar"/>
  </div>
</template>

<script>
// @ is an alias to /src
import AppBar from '@/components/AppBar'
import SideBar from '@/components/SideBar'

export default {
  name: 'home',
  components: {
    AppBar,
    SideBar
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
