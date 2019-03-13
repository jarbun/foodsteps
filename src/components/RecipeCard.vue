<template>
  <div id="recipe-card">
    <img :src="imageUrl" alt="recipe image">
    <div id="content">
      <h1>{{ title }}</h1>
      <h2 id="creator">{{ creator }}</h2>
      <div id="extra">
        <span id="likes">
          <span>{{ nLikes }}</span>
          <span class="material-icons">favorite</span>
        </span>
        <span>{{ timeTaken }} min</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecipeCard',
  data () {
    return {
      imageUrl: 'https://images.unsplash.com/photo-1504387432042-8aca549e4729?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
      title: 'Blueberry Waffles',
      creator: 'Taylor Kiser',
      nLikes: 28,
      timeTaken: 20
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/master';

#recipe-card{
  display: flex;
  margin-top: 15px;
  margin-left: 10px;
}

img{
  width: 100px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
  box-shadow: 0 3px 6px $gray16;
}

#content{
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 5px 20px 5px 10px;
}

#creator{
  font-size: 13px;
  color: $gray60;
  letter-spacing: 0.4px;
}

#extra{
  font-weight: $medium;
  font-size: 14px;
  color: $gray60;
  display: flex;
  justify-content: space-between;
  margin-top: auto;
}

#likes{
  display: flex;
  .material-icons{
    font-size: 14px;
    padding-left: 4px;
    align-self: center;
  }
}
</style>
