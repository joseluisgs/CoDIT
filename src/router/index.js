// Dependencias
import Vue from 'vue';
// Enrutador
import Router from 'vue-router';
// Componentes a enrutar
// import Hello from '@/components/Hello';
import CoDevelopers from '@/components/CoDevelopers';
import CoProfile from '@/components/CoProfile';
import CoNotFound from '@/components/CoNotFound';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: CoDevelopers,
      /* beforeEnter(to, from, next) {
        console.log('Hook beforeEnter en home');
        next();
      }, */
    },
    {
      path: '/profile/:user', // Le indicamos que le pasamos como parame´tro al componente este parametro de la ruta
      name: 'profile',
      component: CoProfile,
      props: true, // Al decirle true es que el parametro del componente y de la ruta se llaman igual
    },
    // Para no found, siempre tiene que ser la última en definirse
    {
      path: '/not-found',
      name: '404',
      component: CoNotFound
    },
    // Otra ruta no conicda la llevamos a esa
    {
      path: '*',
      redirect: {
        name: '404'
      }
    }
  ],
});

/* router.beforeEach((to, from, next) => {
  console.log('Hook beforeEach');
  next();
});

/* router.afterEach((to, from) => {
  console.log('Hook afterEach');
}); */

export default router;
