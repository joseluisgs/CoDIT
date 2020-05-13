// Dependencias
import Vue from 'vue';
// Enrutador
import Router from 'vue-router';
// Componentes a enrutar
// import Hello from '@/components/Hello';
import CoDevelopers from '@/components/CoDevelopers'
import CoProfile from '@/components/CoProfile'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: CoDevelopers
    },
    {
      path: '/profile',
      name: 'profile',
      component: CoProfile
    }
  ]
});
