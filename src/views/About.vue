<template>
  <div>
    <BasicAppBar title="About"/>
    <h1>FoodSteps</h1>
    <h4>v1.0.0</h4>
    <p>A web app to create, share and discover recipes</p>
  </div>
</template>

<script>
import BasicAppBar from '@/components/BasicAppBar'

export default {
  name: 'about',
  components: {
    BasicAppBar
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/master';

  h1{
    font-size: 21px;
    font-weight: $medium;
    text-align: center;
    margin-top: 50px;
  }

  h4{
    font-size: 15px;
    font-weight: $medium;
    text-align: center;
    color: $gray50;
  }

  p{
    margin: 10px 15px;
    text-align: center;
  }
</style>
