import Vue from 'vue';
// import chai from 'chai'

import CoDeveloper from '@/components/CoDeveloper';

// const should = chai.should()

describe('Component: CoDeveloper', () => {
  // Se ejecuta antes de cada test. Carga nuestro componente limpio para poder testearlo
  beforeEach(function CoDeveloperTest() {
    // Carga el componente cargando estas propiedades. Lo extiende vue
    const Constructor = Vue.extend(CoDeveloper);
    // Datos por defecto que va a tener
    this.vm = new Constructor({
      propsData: {
        avatar: 'https://avatars2.githubusercontent.com/u/25254?v=4',
        name: 'TJ Holowaychuk',
        login: 'tj',
        email: 'tj@apex.sh',
        location: 'Victoria, BC, Canada',
        company: 'Apex',
        repos: 270,
        gists: 542,
      },
    }).$mount(); // Una vez creada lo monta
  });

  // Validamos las propiedades
  describe('components props', () => {
    describe('"avatar"', () => {
      it('should be required', () => {
        CoDeveloper.props.avatar.required.should.be.true;
      });

      it('should be String', () => {
        CoDeveloper.props.avatar.type.name.should.be.equal('String');
      });
    });
  });

  describe('after mount component', () => {
    it('should be mounted successfully', function () {
      this.vm.should.be.defined;
    });

    it('should render correct contents', function () {
      const src = this.vm.$el.querySelector('.developer .developer__avatar').src;
      src.should.be.equal('https://avatars2.githubusercontent.com/u/25254?v=4');
    });
  });
});
