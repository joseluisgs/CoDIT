<template lang='html'>
<!-- Los filtros se pueden apliacr en forma de tuberías que la salida de uno sea la entrada de otro -->
  <h1 class='logo'>{{ appName | capitalize }}</h1>
</template>

<script>
  export default {
    name: 'CoLogo',
    data() {
      return {
        appName: 'Codit GitHub',
      };
    },
    //  permiten filtrar el contenido de los datos que llegan al template desde data, props o computed
    filters: {
      upper(value) {
        console.log('upper');
        if (!value) {
          return '';
        }
        return value.toUpperCase();
      },
      capitalize(value) {
        if (!value) {
          return '';
        }
        return value.charAt(0) + value.slice(1).toLowerCase();
      },
    },
  };
</script>

<style lang='css' scoped>
  @import '../assets/css/colors.css';

  .logo {
    margin: 0;

    color: var(--color-lighter-grey);

    line-height: 2rem;
    font-size: 2rem;
    font-weight: 800;
    letter-spacing: -2px;

    text-shadow: 0 0 20px color(var(--color-blue) blackness(50%));
  }

</style>
