<template>
  <div class="row">
    <div class="col s9">
      <myContent></myContent>
    </div>

    <div class="col s3">
      <myRightCol></myRightCol>
    </div>
  </div>
</template>

<script>
import myContent from '@/components/myContent'
import myRightCol from '@/components/myRightCol'

export default {
  name: 'home',
  components: {
    myContent,
    myRightCol
  }
}
</script>