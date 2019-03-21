<template>
  <div :class="{active: isActive}">{{name}}</div>
</template>

<script>
export default {
  name: 'chip',
  props: [
    'name',
    'isActive'
  ]
}
</script>

<style lang="scss" scoped>
@import '../assets/master';

div{
  display: inline-block;
  min-width: 100px;
  width: 100px;
  height: 35px;
  border-radius: 25px;
  text-align: center;
  line-height: 35px;
  font-size: 14px;
  letter-spacing: 0.4px;
  margin: 0 4px;
  background-color: $gray7;
  .active{
    background-color: $green50;
    color: $green;
  }
}
</style>
