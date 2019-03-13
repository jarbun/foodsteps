<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import 'assets/master';

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  p, h1, h2, h3, h4, h5, h6{
    font-weight: normal;
    font-size: 16px;
  }

  button{
    background: none;
    background-color: none;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 1.25px;
    font-size: 14px;
    font-weight: $medium;
    padding: 10px 16px;
    outline: none;
  }
</style>
