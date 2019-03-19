<template>
  <div>
    <span class="material-icons" @click="$emit('openSideBar')">menu</span>
    <h1 id="title">Foodsteps</h1>
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
    z-index: 1;
    position: fixed;
    background-color: white;
    width: 100%;
    top: 0;
  }

  #title{
    font-size: 19px;
    font-weight: $medium;
    align-self: center;
    text-align: left;
    flex-grow: 1;
    margin-left: 10px;
  }

  .material-icons{
    color: lighten(black, 50%);
    align-self: center;
    padding: 10px;
    cursor: pointer;
  }
</style>
