<template lang='html'>
  <div class='developer'>
    <img class='developer__avatar'/>
    <div class='developer__info'>
      <h2>
        <span class='developer__name'>{{ name }}</span>
         <span class='developer__login'>[{{ login }}]</span>
      </h2>
      <div class='developer__metadata'>
        <span class='developer__data'>{{ email }}</span>
        <span class='developer__data'>{{ location }}</span>
        <span class='developer__data'>{{ company }}</span>
      </div>
    </div>
    <div class='developer__stats'>
      <div class='developer__stat'>
        <div class='developer__icon'></div>
        <div class='developer__total'>{{ repos }}</div>
      </div>
      <div class='developer__stat'>
        <div class='developer__icon'></div>
        <div class='developer__total'>{{ gists }}</div>
      </div>
    </div>
  </div>
</template>

<script>
// Se suscribe al bus de eventos
  export default {
    name: 'CoDeveloper',
    // Props son los datos que recibo de mi padre
    // Como me llega un objeto JSON obtengo sus propiedades
    props: {
      avatar: {
        type: String,
        required: true,
        validator (value) {
          return value.starsWith('http')
        },
      },
      name: {
        type: String,
        required: true,
      },
      login: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true
      },
      company: {
        type: String,
        required: false
      },
      respos: {
        type: Number
      },
      gists: {
        type: Number
      }
    },
    // Son funciones internas del componente que trabaja con los datos, por eso podemos acceder con el this
    // Caunndo desde la vista accedamos a ella tendrá estos datos que hemos calculado
    // ropiedad interna que se calcula en base a otros.
    computed: {
      metadata () {
        let meta = ''

        if (this.email) {
          meta = `${meta} ${this.email}`;
        }

        if (this.location) {
          meta = `${meta} ${this.location}`;
        }

        if (this.company) {
          meta = `${meta} ${this.company}`;
        }

        return meta
      }
    },
    // Cuando detecta un cambio en una variable (reactivo) hace la acción
    watch: {
      metadata (newValue) {
        console.log('Metadata:', newValue);
      }
    }
  }
</script>

<style lang='css'>
</style>
