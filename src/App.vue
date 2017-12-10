<template>
  <div id="app">
    <myHeader></myHeader>

    <div class="row">
      <div class="col s9">
        <myContent></myContent>
      </div>

      <div class="col s3">
        <myRightCol></myRightCol>
      </div>
    </div>

    <myFooter></myFooter>
  </div>
</template>

<script>
import myHeader from '@/components/myHeader'
import myContent from '@/components/myContent'
import myRightCol from '@/components/myRightCol'
import myFooter from '@/components/myFooter'

export default {
  name: 'app',
  // Ajouter nos 4 composants
  components: {
    myHeader,
    myContent,
    myRightCol,
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
