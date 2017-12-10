<template>
  <table>
    <thead>
      <tr>
        <th>Nom</th>
        <th>Mon niveau</th>
      </tr>
    </thead>

    <tbody>
      <!-- Ici j'affiche mes skills : j'utilise un v-for -->
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'mySkills',
  // Ici, les données de notre composant
  data () {
    return {
      skills: [
        {
          name: 'HTML',
          percent: '80%'
        },
        {
          name: 'CSS',
          percent: '20%'
        },
        {
          name: 'VueJS',
          percent: '100%'
        }
      ]
    }
  }
}
</script>