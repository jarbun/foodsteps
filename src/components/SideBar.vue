<template>
  <div id="sidebar">
    <div id="content">
      <span class="material-icons" id="close-btn" @click="$emit('closeSideBar')">close</span>
      <div v-if="isAuthenticated" id="authenticated"></div>
      <div v-else id="unauthenticated"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  props: [
    'isAuthenticated'
  ]
}
</script>

<style lang="scss" scoped>
  #sidebar{
    width: 100%;
    height: 100vh;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.15);
  }

  #content{
    background-color: white;
    height: 100%;
    width: 66%;
    max-width: 360px;
    display: flex;
    flex-direction: column;
  }

  .material-icons{
    color: lighten(black, 50%);
  }

  #close-btn{
    padding: 0 10px;
    line-height: 50px;
  }
</style>
