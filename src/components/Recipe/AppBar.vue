<template>
  <div>
    <span class="material-icons" @click="$router.go(-1)">arrow_back</span>
    <h1 id="title">Recipe</h1>
    <span class="material-icons">share</span>
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
