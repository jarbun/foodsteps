<template>
  <div>
    <div class="spinner"></div>
  </div>
</template>

<script>
export default {
  name: 'loadingscreen'
}
</script>

<style lang="scss" scoped>
@import '../../assets/master';

div{
  height: 100vh;
  text-align: center;
}

.spinner {
  margin-top: 25vh;
  display: inline-block;
  border: 3px solid $gray7;
  border-left-color: $green95;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
