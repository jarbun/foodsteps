<template>
  <div id="sidebar">
    <div id="content">
      <span class="material-icons" id="close-button" @click="$emit('closeSideBar')">close</span>
      <div v-if="isAuthenticated" id="authenticated">
        <div id="profile">
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="profile">
          <span id="name">Lucy Lee</span>
          <span id="username">@lucylee</span>
        </div>
        <div id="buttons">
          <router-link tag="button" to="/profile">
            <span class="material-icons">person</span>
            <span>Profile</span>
          </router-link>
          <router-link tag="button" to="/shoppinglist">
            <span class="material-icons">shopping_cart</span>
            <span>Shopping List</span>
          </router-link>
          <router-link tag="button" to="/about">
            <span class="material-icons">info</span>
            <span>About</span>
          </router-link>
        </div>
        <router-link tag="button" to="/logout" id="logout-button">
          Logout
        </router-link>
      </div>
      <div v-else id="unauthenticated">
        <div id="auth-buttons">
          <router-link tag="button" to="/signup" id="signup-button">
            Sign Up
          </router-link>
          <button id="login-button">Login</button>
        </div>
        <router-link tag="button" to="/about" id="about-button">
          <span class="material-icons">info</span>
          <span>About</span>
        </router-link>
      </div>
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
    top: 0;
    z-index: 2;
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

  #unauthenticated{
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

  #authenticated{
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }

  #profile{
    text-align: center;
    img{
      width: 80px;
      height: 80px;
      border-radius: 100%;
      object-fit: cover;
      box-shadow: $e2dp;
    }
  }
  
  #name{
    display: block;
  }

  #username{
    display: block;
    color: $gray60;
  }

  #buttons{
    margin: 0 auto 60px auto;
    button{
      margin: 25px 0;
      display: block;
      width: 100%;
      text-align: left;
    }
    .material-icons{
      font-size: 22px;
      padding-right: 10px;
    }
    span{
      vertical-align: middle;
    }
  }

  #logout-button{
    color: $green;
    margin-bottom: 60px;
  }
</style>
