<template>
  <div id="app">
    <myHeader></myHeader>
    
    <router-view></router-view>

    <myFooter></myFooter>
  </div>
</template>

<script>
import myHeader from '@/components/myHeader'
import myFooter from '@/components/myFooter'

export default {
  name: 'app',
  // Ajouter nos 4 composants
  components: {
    myHeader,
    myFooter
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
