<template>
  <div class="row">
    <!-- Ici je relie mes input aux données de mon composant avec un v-model -->
    <input type="text" id="firstname" v-model="firstname"/>
    <label for="firstname">Prénom</label>
    <input type="text" id="lastname" v-model="lastname"/>
    <label for="lastname">Nom de famille</label>
    <input type="text" id="subject" v-model="subject"/>
    <label for="subject">Sujet de la demande </label>
    
    <br>
    
    <textarea v-model="content"></textarea>

    <button type="button" @click="submitForm">Soumettre</button>
  </div>
</template>

<script>
export default {
  name: 'contact',
  data () {
    return {
      firstname: '',
      lastname: '',
      subject: '',
      content: ''
    }
  },
  methods: {
    submitForm () {
      console.log(this.firstname, this.lastname, this.subject, this.content)
    }
  }
}
</script>
