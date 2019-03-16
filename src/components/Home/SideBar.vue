<template>
  <div id="sidebar">
    <div id="content">
      <span class="material-icons" id="close-button" @click="$emit('closeSideBar')">close</span>
      <div v-if="isAuthenticated" id="authenticated">
        <div id="auth-buttons">
          <button id="signup-button">Sign Up</button>
          <button id="login-button">Login</button>
        </div>
        <button id="about-button">
          <span class="material-icons">info</span>
          <span>About</span>
        </button>
      </div>
      <div v-else id="unauthenticated"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  props: [
    'isAuthenticated'
  ]
}
</script>

<style lang="scss" scoped>
  @import '../../assets/master';

  #sidebar{
    width: 100%;
    height: 100vh;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.15);
  }

  #content{
    background-color: white;
    height: 100%;
    width: 66%;
    max-width: 360px;
    display: flex;
    flex-direction: column;
  }

  .material-icons{
    color: $gray50;
    cursor: pointer;
  }

  #close-button{
    padding: 0 10px;
    line-height: 50px;
  }

  #authenticated{
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  #auth-buttons{
    margin: auto 0;
    button{
      display: block;
      margin: 0 auto;
    }
  }

  #signup-button{
    background-color: $green;
    border-radius: 4px;
    color: white;
    box-shadow: $e2dp;
  }

  #login-button{
    color: $green;
  }

  #about-button{
    margin: 0 auto 60px auto;
    .material-icons{
      font-size: 22px;
      padding-right: 10px;
    }
    span{
      vertical-align: middle;
    }
  }
</style>
