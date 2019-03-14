<template>
  <div>
    <div v-for="(ingredient, i) in ingredients" :key="i">
      {{ ingredient.name }} - {{ ingredient.quantity }}
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

</style>
