<template>
  <div id="main">
    <div v-for="(ingredient, i) in ingredients" :key="i" class="ingredient">
      <span class="circle"></span>
      <span class="name">{{ ingredient.name }}</span>
      <span class="quantity">{{ ingredient.quantity }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ingredients',
  props: ['ingredients']
}
</script>

<style lang="scss" scoped>
@import '../../assets/master';

#main{
  margin: 5px 0;
}

.ingredient{
  height: 50px;
  display: flex;
  margin: 0 30px 0 10px;
}

.circle{
  width: 24px;
  height: 24px;
  border: 1px solid $light-gray;
  border-radius: 100%;
  align-self: center;
  margin-right: 10px;
}

.name{
  align-self: center;
  flex-grow: 1;
}

.quantity{
  letter-spacing: 1.25px;
  color: $gray60;
  font-weight: $medium;
  font-size: 14px;
  align-self: center;
}
</style>
