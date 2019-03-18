<template>
  <div id="main">
    <AppBar/>
    <div id="profile">
      <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="profile">
      <span id="name">Lucy Lee</span>
      <span id="username">@lucylee</span>
    </div>
    <div id="info">
      <div>
        <span class="number">2</span>
        <span class="subtext">recipes</span>
      </div>
      <div>
        <span class="number">19</span>
        <span class="subtext">likes</span>
      </div>
    </div>
    <div id="recipe-list">
      <RecipeCard recipeId="1"/>
      <RecipeCard recipeId="2"/>
    </div>
  </div>
</template>

<script>
import AppBar from '@/components/Profile/AppBar'
import RecipeCard from '@/components/RecipeCard'

export default {
  name: 'profile',
  components: {
    AppBar,
    RecipeCard
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/master';

#main{
  display: flex;
  flex-direction: column;
}

#profile{
  text-align: center;
  margin-top: 20px;
  img{
    width: 100px;
    height: 100px;
    border-radius: 100%;
    box-shadow: $e2dp;
    object-fit: cover;
  }
}

#name{
  display: block;
}

#username{
  display: block;
  color: $gray50;
}

#info{
  display: flex;
  margin-top: 15px;
  width: 100%;
  justify-content: center;
  div{
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 50%;
    max-width: 250px;
  }
  .number{
    font-size: 21px;
    font-weight: $medium;
  }
  .subtext{
    font-size: 14px;
    font-weight: $medium;
    color: $gray50;
    letter-spacing: 1.25px;
    text-transform: uppercase;
    margin-top: 5px;
  }
}

#recipe-list{
  margin-top: 10px;
}
</style>
