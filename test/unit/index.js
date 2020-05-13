import Vue from 'vue';

Vue.config.productionTip = false;

// require all test files (files that ends with .spec.js)
const testsContext = require.context('./specs', true, /\.spec$/);
testsContext.keys().forEach(testsContext);

// require all src files except main.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.

// Quitamos esta línea porque da problemas si el fichero vue esta partido en template y css
// const srcContext = require.context('../../src', true, /^\.\/(?!main(\.js)?$)/)
const srcContext = require.context('../../src', true, /^\.\/(?!main\.js$).+\.(js|vue)$/i);
srcContext.keys().forEach(srcContext);
