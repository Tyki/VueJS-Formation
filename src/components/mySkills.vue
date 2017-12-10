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
      <tr v-for="(skill, key) in skills" :key="key">
        <td> {{ skill.name }}</td>
        <td> {{ skill.percent}} </td>
      </tr>
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