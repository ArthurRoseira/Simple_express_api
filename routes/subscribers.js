const express = require('express')
const router = express.Router()
const subscriber = require('../models/subscribers')

//Gettin all subscribers
router.get('/', (req, res) => {
 res.send('Hello')
})


//Getting one
router.get('/:id', (req, res) => {
 res.send(req.params.id)
})


//Creating one
router.post('/', (req, res) => {

})

//Updating one
router.patch('/:id', (req, res) => {

})

//Delete one
router.delete('/:id', (req, res) => {

})


module.exports = router
