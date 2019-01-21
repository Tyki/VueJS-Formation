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
import { getSkills } from '../helpers/apiHelper'

export default {
  name: 'mySkills',
  components: {
    Skill
  },
  // Ici, les données de notre composant
  data () {
    return {
      skills: []
    }
  },
  mounted () {
    // ...
  }
}
</script>
