const express = require('express')
const router = express.Router()
const adminController = require('../controllers/admin')

router.get('/', async (req,res)=>{
    let response = adminController.getCustomerList()
    res.json(response)
})


module.exports = router