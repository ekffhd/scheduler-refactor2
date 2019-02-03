<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  #app {
    display: block;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    overflow: scroll;
    /*background-color: rgba(203, 166, 195,0.05);*/
    background-color: #f8f8f8;
    width: 100vw;
    height: 100vh;
    color: #2c3e50;
  }

</style>
