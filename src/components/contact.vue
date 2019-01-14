<template>
  <div class="row">
    <form>
      <!-- Ici je relie mes input aux données de mon composant avec un v-model -->
      <input type="text" id="firstname" />
      <label for="firstname">Prénom</label>
      <input type="text" id="lastname" />
      <label for="lastname">Nom de famille</label>
      <input type="text" id="subject" />
      <label for="subject">Sujet de la demande </label>

      <br>
      <textarea></textarea>

      <button type="submit">Envoyer</button>
    </form>
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
    submit () {

    }
  }
}
</script>
