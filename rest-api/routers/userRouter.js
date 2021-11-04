const user = require('express').Router()
const UserController = require('../controllers/UserController.js')

user.get('/', UserController.getAll)
user.get('/:id', UserController.findOne)
user.put('/', UserController.update)
user.delete('/:id', UserController.delete)

module.exports = user