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
import axios from 'axios'

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
  created () {
    axios({
      method: 'get',
      url: 'http://localhost:3000/getSkills'
    })
    .then((response) => {
      console.log(response)
      this.skills = response.data.skills
    })
    .catch(function (error) {
      console.error(error)
    })
  }
}
</script>
