<template lang='html'>
  <ul class="developers">
    <li class="developers__item">
      <co-developer></co-developer>
    </li>
  </ul>
</template>

<script>
  // Bus para importarse
  import bus from '@/busdata.js'

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
    },
    // Cuando somos creados, el componente, escuchamos en evento del bus del tipo search
    created () {
      bus.$on('search', criteria => {
        console.log('CoDevelopers Respondo el evento suscrito por bus: ', criteria)
      })
    }
  }
</script>

<style lang='css'>
</style>
