<template>
  <div id="main">
    <div v-for="(direction, i) in directions" :key="i" class="direction">
      <span class="circle">
        {{ i + 1 }}
      </span>
      <span>{{ direction }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'directions',
  props: ['directions']
}
</script>

<style lang="scss" scoped>
@import '../../assets/master';

#main{
  margin: 5px 0;
}

.direction{
  display: flex;
  padding: 10px 0;
  margin: 0 20px 0 10px;
}

.circle{
  min-width: 24px;
  width: 24px;
  height: 24px;
  border: 1px solid $light-gray;
  border-radius: 100%;
  line-height: 24px;
  text-align: center;
  align-self: center;
  font-size: 14px;
  color: $gray60;
  margin-right: 10px;
}
</style>
