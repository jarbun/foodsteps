<template>
  <div>
    <BasicAppBar title="Add"/>
    <div id="image-field">
      <button id="image-upload-button">
        <span class="material-icons">add</span>
        <span>Add an Image</span>
      </button>
    </div>
    <input type="text" placeholder="Title">
    <textarea name="" id="" placeholder="Description"></textarea>
    <div id="tags">
      <Chip v-for="(tag, index) in tags" :key="index" :name="tag.name" :isActive="tag.isActive" @click.native="toggleActiveState(index)"/>
    </div>
    <div id="info">
      <div>
        <span>Servings</span>
        <input type="number" placeholder="02">
      </div>
      <div>
        <span>Cook Time</span>
        <input type="number" placeholder="60">
      </div>
    </div> 
  </div>
</template>

<script>
import BasicAppBar from '@/components/BasicAppBar'
import Chip from '@/components/Chip'

export default {
  name: 'add',
  components: {
    BasicAppBar,
    Chip
  },
  data () {
    return {
      tags: [
        {
          name: 'Vegetarian',
          isActive: false
        },
        {
          name: 'Dessert',
          isActive: false
        },
        {
          name: 'Snacks',
          isActive: false
        },
        {
          name: 'Drinks',
          isActive: false
        },
        {
          name: 'Quick',
          isActive: false
        }
      ]
    }
  },
  methods: {
    toggleActiveState (index) {
      this.tags[index].isActive = !this.tags[index].isActive
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/master';

#image-field{
  height: 170px;
  width: calc(100% - 16px - 16px);
  margin: 16px 16px 8px 16px;
  border-radius: 4px;
  background-color: $gray7;
  display: flex;
  justify-content: center;
}

#image-upload-button{
  align-self: center;
  background-color: white;
  color: $gray60;
  box-shadow: $e5dp;
  border-radius: 20px;
  padding: 8px 16px 8px 8px;
  .material-icons{
    padding-right: 8px;
  }
  span{
    vertical-align: middle;
  }
}

input{
  width: calc(100% - 32px);
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

textarea{
  width: calc(100% - 32px);
  height: 110px;
  padding: 16px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: $gray7;
  display: block;
  margin: 16px auto;
  outline: none;
  &::placeholder{
    color: $gray60;
    font-size: 15px;
  }
}

#tags{
  margin: 10px auto 0 auto;
  padding: 0 10px;
  max-width: 100%;
  overflow-x: scroll;
  white-space: nowrap;
}
#tags::-webkit-scrollbar{
  display: none;
}

#info{
  margin-top: 16px;
  display: flex;
  justify-content: space-evenly;
  div{
    display: flex;
    flex-direction: column;
    width: 100px;
    text-align: center;
    span{
      color: $gray60;
      margin-bottom: 5px;
    }
    input{
      width: 60px;
      margin: 0 auto;
      text-align: center;
    }
  }
}
</style>
