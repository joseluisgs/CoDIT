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
    },
    //Indicamos que reaccionaremos en el ciclo de vida de del compoente en su estado montado
    mounted () {
      console.log('CoDeveloper mounted')
    }
  }
</script>

<style lang='css'>
</style>
