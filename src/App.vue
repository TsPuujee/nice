<template>
  <div id="app">
    <MapComponent msg="Hello Vue in CodeSandbox!"/>
  </div>
</template>

<script>
import MapComponent from "./components/map";

export default {
  name: "App",
  components: {
    MapComponent
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
