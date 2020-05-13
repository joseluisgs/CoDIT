'use strict'

const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  TOKEN: '"e528913507eeffefb3432ddc14fe1907bdf6a91e"'
});
