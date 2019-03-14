<template>
  <div>
    <div v-for="(direction, i) in directions" :key="i">
      {{ i+1 }} - {{ direction }}
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

</style>
