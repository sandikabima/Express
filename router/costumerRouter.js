const express = require('express')
const router = express.Router()
const Controller = require('../controllers/Costumers')

router.get('/list', Controller.list)
router.get('/add', Controller.addCostumersForm)
router.post('/add', Controller.addCostumers)

router.get('/:id', Controller.deleteCostumers)

module.exports = router