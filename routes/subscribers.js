const express = require('express')
const router = express.Router()
const subscriber = require('../models/subscribers')

//Gettin all subscribers
router.get('/', async (req, res) => {
 try {
  const subscribers = await subscriber.find()
  res.json(subscribers)
 } catch (err) {
  res.status(500).json({ message: err.message })
 }
})


//Getting one
router.get('/:id', getSubscriber, (req, res) => {
 res.json(res.subscriber)
})


//Creating one
router.post('/', async (req, res) => {
 const subs = new subscriber({
  name: req.body.name,
  subscriberToChannel: req.body.subscriberToChannel
 })
 try {
  const newSubscriber = await subs.save()
  res.status(201).json(newSubscriber)
 } catch (err) {
  res.status(400).json({ message: err.message })
 }
})

//Updating one
router.patch('/:id', getSubscriber, async (req, res) => {
 if (req.body.name != null) {
  res.subscriber.name = req.body.name
 }
 if (req.body.subscriberToChannel != null) {
  res.subscriber.subscriberToChannel = req.body.subscriberToChannel
 }
 try {
  const updatedSubscriber = await res.subscriber.save()
  res.json(updatedSubscriber)
 } catch (err) {
  res.status(400).json({ message: err.message })
 }
})

//Delete one
router.delete('/:id', getSubscriber, async (req, res) => {
 try {
  await res.subscriber.remove()
  res.json({ message: 'Deleted Subscriber' })
 } catch (err) {
  res.status(500).json({ message: err.message })
 }
})

//middleware
async function getSubscriber(req, res, next) {
 let subs
 try {
  subs = await subscriber.findById(req.params.id)
  if (subs == null) {
   return res.status(404).json({ message: 'Cannot find subscriber' })
  }
 } catch (err) {
  return res.status(500).json({ message: err.message })
 }
 res.subscriber = subs
 next()
}

module.exports = router
