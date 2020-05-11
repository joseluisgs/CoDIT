<template lang='html'>
  <input
    name='search'
    type='text'
    placeholder='github username'
    class='search'
  />

</template>

<script>
  export default {
    name: 'CoSearch',
    // LLo inicializo con un criterio de búsqueda
    data() {
      return {
        criteria: ''
      }
    }
  }
</script>

<style lang='css'>

</style>
