<template lang='html'>
  <ul class="developers">
    <!-- <li class="developers__item" v-bind:class="{ 'userConNombre': user.name === false }"> -->
    <!--Hacemos un bind a estilos-->
    <!-- <li class="developers__item" v-bind:style="userConNombre"> -->
      <!-- Reccorremos con un for
        Creamos el componente develpoer y le pasamos estos datos a sus propiedades con bind-->
      <li v-for='user in users' class="developers__item">
        <co-developer
          v-bind:avatar='user.avatar_url'
          v-bind:name='user.name'
          v-bind:login='user.login'
          v-bind:email='user.email'
          v-bind:location='user.location'
          v-bind:company='user.company'
          v-bind:repos='user.public_repos'
          v-bind:gists='user.public_gists'
        ></co-developer>
    </li>
  </ul>
</template>

<script>
  // Bus para importarse
  import bus from '@/busdata.js'
  import CoDeveloper from '@/components/CoDeveloper'
  // datos de prueba
  //import mocks from '@/mocks/users'

  export default {
    name: 'CoDevelopers',
    // Datos con los que se iniciliza el componente
    data () {
      return {
        users: [],
        // mocks, --> vector de prueba
        // Dato de prueba
        /* user: {
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
        } */
      }
    },
    // Como voy a usar un componente lo registramos
    components: {
      CoDeveloper
    },
    //Indicamos que reaccionaremos en el ciclo de vida de del compoente en su estado montado
    mounted () {
      console.log('CoDeveloper mounted');
      // Consultamos via api los datos
      this.getTopUsers();
    },
    // Cuando somos creados, el componente, escuchamos en evento del bus del tipo search
    created () {
      bus.$on('search', criteria => {
        console.log('CoDevelopers Respondo el evento suscrito por bus: ', criteria)
      })
    },
    //Métodos porpios a usar
    // Petición por fecth usadno AJAX
     methods: {
        getTopUsers () {
          return fetch(
            `${process.env.API}search/users?q=language:javascript&order=desc&per_page=15`,
            /* {
              headers: {
                'Authorization': `token ${process.env.TOKEN}`
              }
            } */
          )
            .then(response => response.json())
            .then(response => response.items)
            .then(users => users.map(user =>
              fetch(
                `${process.env.API}users/${user.login}`,
              /* {
                  headers: {
                      'Authorization': `token ${process.env.TOKEN}`
                    }
                  } */
              )
                .then(response => response.json())
            ))
            .then(response => Promise.all(response))
            .then(users => {
              this.users = users
            })
        }
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

