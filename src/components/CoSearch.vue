<template lang='html'>
  <input
    name='search'
    type='text'
    placeholder='github username'
    class='search'
    v-model='criteria'
  />

</template>

<script>
  // bus de datos para
  import bus from '@/busdata.js'

  export default {
    name: 'CoSearch',
    // LLo inicializo con un criterio de búsqueda
    data() {
      return {
        criteria: ''
      }
    },
    // Observador, para que se dipsrae y haga el evento una vez lo tengamos
    watch: {
      criteria () {
        // usamos el evento usando, aunque podríamos usar v-model para accder a la propiedad, asi es más rápido
        this.$emit('search', this.criteria);
        // mandamos los datos a través del bus, los recibirá quien se suscriba
        bus.$emit('search', this.criteria);
      }
    }
  }
</script>

<style lang='css' scoped>
  .search {
    margin: 1rem;
  }
</style>
