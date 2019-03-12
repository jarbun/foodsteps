<template>
  <div class="home">
    <AppBar/>
  </div>
</template>

<script>
// @ is an alias to /src
import AppBar from "@/components/AppBar"

export default {
  name: 'home',
  components: {
    AppBar
  }
}
</script>

<style lang="scss">
  @import "../assets/master";

</style>
