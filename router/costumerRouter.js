const express = require('express')
const router = express.Router()
const Controller = require('../controllers/Costumers')

router.get('/list', Controller.list)

module.exports = router