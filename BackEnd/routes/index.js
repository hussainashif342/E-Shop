const express = require('express')
const router = express.Router()
const adminRoute = require('./admin')

router.use('/admin',adminRoute)
router.use('/customer',adminRoute)
router.use('/seller',adminRoute)

module.exports = router

