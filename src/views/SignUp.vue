<template>
  <div>
    <BasicAppBar title="Sign Up"/>
    <h1>FoodSteps</h1>
    <form>
      <input type="text" placeholder="Full Name">
      <input type="text" placeholder="Username">
      <input type="email" placeholder="Email">
      <PasswordField/>
    </form>
  </div>
</template>

<script>
import BasicAppBar from '@/components/BasicAppBar'
import PasswordField from '@/components/PasswordField'

export default {
  name: 'signup',
  components: {
    BasicAppBar,
    PasswordField
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/master';

div{
  overflow-x: hidden;
}

h1{
  font-size: 21px;
  font-weight: $medium;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 10px;
}

form{
  display: block;
  margin: 0 auto;
}

input{
  width: calc(100% - 32px);
  max-width: 400px;
  padding: 16px;
  border-radius: 4px;
  border: none;
  background-color: $gray7;
  outline: none;
  display: block;
  margin: 16px auto;
  font-size: 16px;
  &::placeholder{
    color: $gray60;
    font-size: 15px;
  }
}
</style>
