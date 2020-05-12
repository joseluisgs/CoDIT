<template
  lang='html' src='./App.html'>
</template>

<script>
  import CoLogo from '@/components/CoLogo'
  import CoSearch from '@/components/CoSearch'
  import CoBookmarks from '@/components/CoBookmarks'
  //import CoDevelopers from '@/components/CoDevelopers' // Lo haremos asíncrono

  export default {
    name: 'CoApp',
    // Datos propies
    data () {
      return {
        show: false
      }
    },
    // Metodos que podemos realizar, por ejemplo al recibir un evento en la vista
    methods: {
      onSearch (searchCriteria) {
        console.log('App Respondo al evento de mi hijo por v-on Search: ', searchCriteria);
        this.show = true;
      }
    },
    // Componentes a usar
    components: {
      CoLogo,
      CoSearch,
      CoBookmarks,
      // Indicamos que en vez que lo cargue el, lo haremos nosotross asíncrona
      CoDevelopers: () => import('@/components/CoDevelopers'),
      // O indicándoselo de manera manual
      /* CoDevelopers: () => ({
        component: import('@/components/CoDevelopers'),
        delay: 400,
        timeout: 5000
        loading: CoLoading, // nos podnría otro componente mientras
        error: CoError // componente si fallara
     }) */
    },
  };
</script>

<style lang='css'>
  @import 'assets/css/reset';
  @import 'assets/css/global';
</style>

<style lang='css' scoped src='./App.css'>
</style>

