const express = require('express')

const { Control } = require('../controllers')

const router = express.Router()

router.get('/', Control.con)

module.exports = router