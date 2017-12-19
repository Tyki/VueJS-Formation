<template>
  <!-- Ici j'affiche mes skills : j'utilise un v-for -->
  <tr>
    <td> {{ name }}</td>
    <td> {{ percent}} </td>
  </tr>
</template>

<script>
export default {
  name: 'Skill',
  props: [
    'name',
    'percent'
  ]
}
</script>
