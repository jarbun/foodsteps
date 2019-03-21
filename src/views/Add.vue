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
        <input type="text" placeholder="02">
      </div>
      <div>
        <span>Cook Time (mins)</span>
        <input type="text" placeholder="60">
      </div>
    </div>
    <div id="buttons">
      <button :class="{active: activeTab===0}" @click="activeTab = 0">Ingredients</button>
      <button :class="{active: activeTab===1}" @click="activeTab = 1">Directions</button>
    </div>
    <div id="active-component">
      <div id="ingredients" v-if="activeTab===0">
        <div id="add-ingredients">
          <input type="text" placeholder="Ingredient" id="ingredient-name-input">
          <input type="text" placeholder="Quantity" id="ingredient-quality-input">
          <div id="add-ingredient-button">
            <span class="material-icons">add</span>
          </div>
        </div>
      </div>
      <div id="directions" v-else>

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
      activeTab: 0,
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
  box-shadow: $e1dp;
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
  justify-content: space-around;
  div{
    display: flex;
    flex-direction: column;
    width: 160px;
    text-align: center;
    span{
      color: $gray60;
      margin-bottom: 5px;
      font-size: 15px;
    }
    input{
      width: 60px;
      margin: 0 auto;
      text-align: center;
    }
  }
}

#buttons{
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  button{
    width: 100%;
    color: $gray60;
    border-bottom: 1px solid $light-gray;
  }
  .active{
    color: $green;
    border-bottom: 1px solid $green;
  }
}

#add-ingredients{
  display: flex;
  background-color: $gray7;
  height: 50px;
  margin: 10px 16px;
  input{
    margin: 0;
  }
  border-radius: 25px;
}

#ingredient-name-input{
  width: 55%;
  padding-left: 20px;
  border-radius: 25px 0 0 25px;
  border-right: 1px solid $gray50;
}
#ingredient-quality-input{
  width: calc(45% - 49px);
}
#add-ingredient-button{
  width: 48px;
  height: 48px;
  box-shadow: $e1dp;
  align-self: center;
  background-color: white;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
  span{
    line-height: 48px;
    color: $gray60;
  }
}
</style>
