<template>
  <table>
    <thead>
      <tr>
        <th>Nom</th>
        <th>Mon niveau</th>
      </tr>
    </thead>

    <tbody>
      <skill v-for="(skill, key) in skills" :name="skill.name" :percent="skill.percent" :key="key"></skill>
    </tbody>
  </table>
</template>

<script>
import Skill from '@/components/skill'

export default {
  name: 'mySkills',
  components: {
    Skill
  },
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
