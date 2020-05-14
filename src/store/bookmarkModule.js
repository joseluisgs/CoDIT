const bookStore = () => {
  // Creamos nuestra clave si no existe
  if (localStorage.getItem('codit') === null) {
    localStorage.setItem('codit', '[]');
  }
  return JSON.parse(localStorage.getItem('codit'));
};

const state = {
  // Lo leemos del local storage
  bookmarks: bookStore(),
  // Lo inicializamos con unos datos
  /* bookmarks: [
    {
      login: 'addyosmani',
      name: 'Addy Osmani',
      id: 110953,
    },
    {
      login: 'yyx990803',
      name: 'Evan You',
      id: 499550,
    },
  ], */
};

// De esta manera nos aseguramos que no podemos
const getters = {
  // Si le pedimos el estado le devolvemos los marcadores almacenados
  // eslint-disable-next-line no-shadow
  bookmarks: state => state.bookmarks,
  // Si le indcamos si esta seleccionado, devolvemos el bookmark cuyos logins coincida
  // eslint-disable-next-line no-shadow
  isSelected: state => login =>
    state.bookmarks.some(bookmark => bookmark.id === login),
};

// Mutaciones para cambiar las cosas
const mutations = {
  // eslint-disable-next-line no-shadow
  EDIT_BOOKMARKS(state, { bookmark }) {
    // Si lo que queremos comprobar alguna vez es cierto
    if (state.bookmarks.some(item => item.id === bookmark.id)) {
      // Eliminamos
      // eslint-disable-next-line no-param-reassign
      state.bookmarks = state.bookmarks.filter(item => item.id !== bookmark.id);
    } else {
      state.bookmarks.push(bookmark);
    }
  },
};

// Acciones para editar
const actions = {
  // eslint-disable-next-line no-shadow
  modify({ commit, state }, bookmark) {
    commit('EDIT_BOOKMARKS', { bookmark });
    // Lo almacenamos en el localstore
    window.localStorage.setItem('codit', JSON.stringify(state.bookmarks));
  },
};

// Exportamos el módulo
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
