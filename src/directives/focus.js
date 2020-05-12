import Vue from 'vue'

// Uso de la directiva, ppara por ejemplo obtener el foco
Vue.directive(
  'focus',
  {
    inserted (el) {
      el.focus()
    }
  }
)
