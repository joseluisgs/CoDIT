<template lang='html'>
  <ul class="developers">
    <li class="developers__item">
      <co-developer></co-developer>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'CoDevelopers',
    // Datos con los que se iniciliza el componente
    data () {
      return {
        users: []
      }
    }
  }
</script>

<style lang='css'>
</style>
