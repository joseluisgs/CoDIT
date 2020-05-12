// Dependencias
import Vue from 'vue';
// Enrutador
import Router from 'vue-router';
// Componentes a enrutar
import Hello from '@/components/Hello';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
  ],
});
