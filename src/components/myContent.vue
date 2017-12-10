<template>
  <div id="content">
    Je suis le body
    <my-skills></my-skills>

  </div>
</template>

<script>
import mySkills from '@/components/mySkills'

export default {
  name: 'myContent',
  components: {
    mySkills
  }
}
</script>

<style>
#content {
  min-height: 400px;
}
</style>
