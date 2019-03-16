<template>
  <div class="password-field">
    <input :type="inputType" placeholder="Password">
    <span class="material-icons" @click="toggleType">remove_red_eye</span>
  </div>
</template>

<script>
export default {
  name: 'passwordfield',
  data () {
    return {
      inputType: 'password'
    }
  },
  methods: {
    toggleType () {
      if (this.inputType === 'password') {
        this.inputType = 'text'
      } else {
        this.inputType = 'password'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/master';

input{
  width: calc(100% - 32px);
  max-width: 400px;
  padding: 16px;
  border-radius: 4px;
  border: none;
  background-color: $gray7;
  outline: none;
  display: block;
  font-size: 16px;
  align-self: center;
  &::placeholder{
    color: $gray60;
    font-size: 15px;
  }
}

.password-field{
  display: flex;
  justify-content: center;
  position: relative;
  left: 12px;
  .material-icons{
    align-self: center;
    position: relative;
    color: $gray60;
    left: -40px;
    cursor: pointer;
  }
}
</style>
