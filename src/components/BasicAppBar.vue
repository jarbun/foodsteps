<template>
  <div>
    <span class="material-icons" @click="$router.go(-1)">arrow_back</span>
    <h1 id="title">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'AppBar',
  props: ['title']
}
</script>

<style lang="scss" scoped>
  @import "../assets/master";

  div{
    height: 50px;
    display: flex;
    justify-content: space-between;
    z-index: 1;
    box-shadow: $e2dp;
  }

  #title{
    font-size: 18px;
    font-weight: $medium;
    align-self: center;
    flex-grow: 1;
    text-align: center;
    margin-right: 40px;
  }

  .material-icons{
    color: $gray50;
    align-self: center;
    padding: 10px;
    cursor: pointer;
  }
</style>
