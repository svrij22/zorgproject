<template>
  <div id="app">
    <body-component/>
  </div>
</template>

<script>

import BodyComponent from "@/components/BodyComponent";
export default {
  name: 'App',
  components: {BodyComponent},
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
