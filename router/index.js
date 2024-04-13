const express = require('express')
const router = express.Router()
const costumerRouter = require('./costumerRouter')

router.use('/costumers', costumerRouter)

module.exports = router