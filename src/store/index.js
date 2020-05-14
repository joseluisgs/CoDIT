import Vue from 'vue';
// Vamos a usar vuex para general el estado global
import Vuex from 'vuex';
// Indicamos el módulo a importar
import bookmarkModule from './bookmarkModule';

// indicamos que vamos a usar vuex
Vue.use(Vuex);
// Creamos los modulos
const store = new Vuex.Store({
  modules: {
    bookmarkModule,
  },
  strict: true, // Sigue el flujo de datos establecido
});

export default store;
