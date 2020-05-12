'use strict'

const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  //TOKEN: '"311a710dd6d00f422d6256f42399f8c72b76c2de"'
})
