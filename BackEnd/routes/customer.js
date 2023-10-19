const express = require('express')
const router = express.Router()
const customerController = require('../controllers/admin')

router.get('/', async (req,res)=>{
    // let response = customerController.getCustomerList()
    res.json('response')
})


module.exports = router