require('source-map-support').install()
require('ts-node').register()

exports.onPreBootstrap = require('./gatsby/node/onPreBootstrap').onPreBootstrap
exports.createResolvers = require('./gatsby/node/createResolvers').createResolvers
exports.createPages = require('./gatsby/node/createPages').createPages
