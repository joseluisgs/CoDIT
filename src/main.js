// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// Dependencias
import Vue from 'vue';
// Enrutador
import router from './router';
// Componente principal
import CoApp from './App';
// Directivas a nivel globa
import './directives/focus';
// Indicamos nuestro store
import store from './store';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#codit', // Como se llama la etiqueta donde nos vamos a renderizar en el htm
  store, // Indicamos el store
  router, // Le decimos el router por defecto
  template: '<co-app/>', // La template por defecto
  components: { CoApp }, // El componente inicial
});
