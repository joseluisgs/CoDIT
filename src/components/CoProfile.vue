<template lang='pug'>
  .user
    .user__home
      co-go-to-home
    .user__bookmark
      co-star(
        v-bind:selected='isBookmarked'
        v-on:star:clicked='onBookmark'
      )
    .user__avatar(v-bind:style='avatar')
    .user__social
      co-social(
        text='Followers'
        v-bind:total='info.followers'
        color='#2C7AFD'
      )
      co-social(
        text='Following'
        v-bind:total='info.following'
        color='#7FCB70'
      )
      co-social(
        text='Public Repos'
        v-bind:total='info.public_repos'
        color='#8F8F98'
      )
      co-social(
        text='Public Gists'
        v-bind:total='info.public_gists'
        color='#C2B8B4'
      )
    .user__profile
      h1.user__title
        | {{ info.name }}
        =' '
        span.user__login [{{ info.login }}]
      h2.user__headline {{ info.bio }}

      .user__contact
        div
          p.user__label Email
          p {{ info.email }}
        div
          p.user__label Web
          p {{ info.blog }}
        div
          p.user__label Location
          p {{ info.location }}

    .user__events
      co-events(
        v-bind:user='user'
        )
</template>


<script>
  import CoGoToHome from '@/components/CoGoToHome';
  import CoSocial from '@/components/CoSocial';
  import CoEvents from '@/components/CoEvents';
  import CoStar from '@/components/CoStar';
  import axios from 'axios';
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'CoProfile',
    props: {
      user: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        info: {
          followers: 0,
          following: 0,
          public_repos: 0,
          public_gists: 0,
        },
      };
    },
    computed: {
      avatar() {
        return {
          backgroundImage: `url(${this.info.avatar_url})`,
        };
      },
      // Si está en marcadores ese login
      isBookmarked() {
        return this.isSelected(this.info.login);
      },
      // Si ese usario está marcado en favoritos
      ...mapGetters({
        isSelected: 'bookmarkModule/isSelected',
      }),
    },
    components: {
      CoGoToHome,
      CoSocial,
      CoEvents,
      CoStar,
    },
    // Para detectar cuando cambiamos, por que si no no podríamos la haber cargado ya un componente
    // de Esta manera cuando detectamos un cambio de ruta, formzamos que cambien el componente cargando sus datos
    watch: {
      $route: 'getUserData',
    },
    mounted() {
      this.getUserData();
    },
    methods: {
      getUserData() {
        console.log('getUserData');
        return axios({
          method: 'GET',
          url: `${process.env.API}users/${this.user}`,
          headers: { Authorization: `token ${process.env.TOKEN}` },
        })
          .then(response => response.data)
          .then((user) => {
            this.info = user;
          });
      },
      // Indicamos que estamos modificando
      ...mapActions({
        modifyBookmark: 'bookmarkModule/modify',
      }),
      // Añadimos el login y el mail
      onBookmark() {
        this.modifyBookmark({
          id: this.info.login,
          name: this.info.name,
          login: this.info.login,
        });
      },
      // Podemos jugar con los ecventos del router desde aquí pero queda aclopado
      /*  beforeRouteEnter (to, from, next) {
          console.log('beforeRouteEnter CoProfile');
          next()
        },
        beforeRouterUpdate (to, from, next) {
          console.log('beforeRouterUpdate CoProfile');
          next()
        },
        beforeRouteLeave (to, from, next) {
          console.log('beforeRouteLeave CoProfile')
          next()
        } */
    },
  };
</script>


<style lang='css' scoped>
  @import '../assets/css/mixins.css';
  @import '../assets/css/colors.css';

  .user {
    @apply --flex-col;
    flex: 1;

    position: relative;
  }

  .user__home,
  .user__bookmark,
  .user__followers {
    position: absolute;
    z-index: 2;
  }

  .user__home {
    top: 1rem;
    left: 1rem;
  }

  .user__bookmark {
    top: .5rem;
    right: 1rem;
  }

  .user__avatar {
    height: 40%;
    min-height: 155px;

    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;

    -webkit-clip-path: polygon(50% 100%, 100% 85%, 100% 0, 0 0, 0 85%);
    clip-path: polygon(50% 100%, 100% 85%, 100% 0, 0 0, 0 85%);
  }


  .user__social {
    @apply --flex-row;
    justify-content: space-around;
    align-items: center;

    position: absolute;
    top: 35%;
    left: 0%;

    width: 100%;
  }

  .user__profile {
    margin-top: 2rem;
    padding: 1rem 2rem;

    & .user__title {
      font-size: 2rem;
      color: var(--color-black);

      & .user__login {
        font-size: .8rem;
      }
    }

    & .user__headline {
      font-size: .8rem;
    }
  }

  .user__contact {
    @apply --flex-row;
    justify-content: space-between;

    margin-top: 1rem;

    font-size: .7rem;

    & .user__label {
      font-weight: 700;
    }
  }

  .user__events {
    margin-top: 2rem;
    padding: 1rem 2rem;
  }
</style>
