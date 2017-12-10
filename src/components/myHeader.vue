<template>
  <div id="header">
    Je suis le header

    <br>

    <router-link to="/">Accueil</router-link>
    <router-link to="second">Seconde page</router-link>
  </div>
</template>

<script>
export default {
  name: 'myHeader'
}
</script>

<style>
#header {
  min-height: 80px;
}
</style>
