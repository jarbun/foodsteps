<template>
  <div>{{text}}</div>
</template>

<script>
export default {
  name: 'Chip',
  props: [
    'text'
  ]
}
</script>

<style lang="scss" scoped>
@import '../assets/master';

div{
  display: inline-block;
  min-width: 100px;
  width: 100px;
  height: 30px;
  background-color: $green50;
  color: $green;
  border-radius: 15px;
  text-align: center;
  line-height: 30px;
  font-size: 14px;
  letter-spacing: 0.4px;
  margin: 0 4px;
}
</style>
