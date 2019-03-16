<template>
  <div>
    <span class="material-icons" @click="$emit('openSideBar')">menu</span>
    <h1 id="title">Home</h1>
    <span class="material-icons">search</span>
  </div>
</template>

<script>
export default {
  name: 'AppBar'
}
</script>

<style lang="scss" scoped>
  @import "../../assets/master";

  div{
    height: 50px;
    box-shadow: $e2dp;
    display: flex;
    justify-content: space-between;
    z-index: 1;
  }

  #title{
    font-size: 18px;
    font-weight: $medium;
    align-self: center;
  }

  .material-icons{
    color: lighten(black, 50%);
    align-self: center;
    padding: 10px;
    cursor: pointer;
  }
</style>
