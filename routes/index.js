const route = module.exports = require('express').Router()

route.use('/accounts', require('./accounts'))
