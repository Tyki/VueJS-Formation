<template>
  <div id="app">
    <input type="range" min="0" max="100" step="1" v-on:change="showVal">

    <span v-bind:style="{ letterSpacing: spacing + 'px' }">Mon exemple</span>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      spacing: 5
    }
  },
  // Ajouter nos 4 composants
  methods: {
    showVal: function (value) {
      this.spacing = value.srcElement.value
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
