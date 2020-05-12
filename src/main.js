// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// Dependencias
import Vue from 'vue';
// Enrutador
import router from './router';
// Componente principal
import CoApp from './App';
// Directivas a nivel globa
import './directives/focus'

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#codit',
  router,
  template: '<co-app/>',
  components: { CoApp },
});
