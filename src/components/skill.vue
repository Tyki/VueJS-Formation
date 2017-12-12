<template>
  <!-- Ici j'affiche mes skills : j'utilise un v-for -->
  <tr :key="key">
    <td> {{ name }}</td>
    <td> {{ percent}} </td>
  </tr>
</template>

<script>
export default {
  name: 'Skill',
  props: [
    'name',
    'percent',
    'key'
  ]
}
</script>
