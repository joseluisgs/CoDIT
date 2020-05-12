<template lang='html'>
  <ul class="developers">
    <!-- <li class="developers__item" v-bind:class="{ 'userConNombre': user.name === false }"> -->
    <li class="developers__item" v-bind:style="userConNombre">
      <co-developer
        v-bind:avatar='user.avatar'
        v-bind:name='user.name'
        v-bind:login='user.login'
        v-bind:email='user.email'
        v-bind:location='user.location'
        v-bind:repos='user.repos'
        v-bind:company='user.company'
      ></co-developer>
    </li>
  </ul>
</template>

<script>
  // Bus para importarse
  import bus from '@/busdata.js'
  import CoDeveloper from '@/components/CoDeveloper'

  export default {
    name: 'CoDevelopers',
    // Datos con los que se iniciliza el componente
    data () {
      return {
        users: [],
        // Dato de prueba
        user: {
          avatar: 'https://avatars2.githubusercontent.com/u/25254?v=4',
          name: 'TJ Holowaychuk',
          login: 'tj',
          email: 'tj@apex.sh',
          location: 'Victoria, BC, Canada',
          company: 'Apex',
          repos: 200,
          gitst: 15
        },
        // Pode meter estilos como bindings
        userConNombre: {
          fontWeight: 900,
          color: 'red'
        }
      }
    },
    // Como voy a usar un componente lo registramos
    components: {
      CoDeveloper
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

<style lang='css' scoped>
  @import '../assets/css/colors.css';
  @import '../assets/css/mixins.css';

  .developers {
    overflow-x: none;
    overflow-y: auto;

    & .developers__item {
      position: relative;
    }

    & .developers__item::after {
      content: '';

      position: absolute;
      bottom: 0;
      left: 5%;

      width: 90%;
      height: 1px;

      background-color: var(--color-light-grey);
    }

    & .developer {
      padding: 1rem 2rem;
    }
  }
</style>

