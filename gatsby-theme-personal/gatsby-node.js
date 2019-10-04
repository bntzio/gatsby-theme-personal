require('source-map-support').install()
require('ts-node').register()

exports.createPages = require('./gatsby/node/createPages').createPages
