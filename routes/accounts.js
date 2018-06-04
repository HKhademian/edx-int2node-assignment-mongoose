const mongoose = require('mongoose'),
  Account = mongoose.model('Account')
const route = module.exports = require('express').Router()

route.get('/', async (req, res, next) => { try {
  let result = await Account.find().sort(req.query.sort)
  return res.send(result)
} catch (e) { next(e) } })

route.get('/:accountId', async (req, res, next) => { try {
  let result = await Account.findById(req.params.accountId)
  if(!result) return res.sendStatus(404)
  return res.send(result)
} catch (e) { next(e) } })

route.post('/', async (req, res, next) => { try {
  let result = await Account.create(req.body)
  if(!result) return res.sendStatus(404)
  return res.status(201).send(result)
} catch (e) { next(e) } })

route.put('/:accountId', async (req, res, next) => { try {
  let result = await Account.findByIdAndUpdate(req.params.accountId, req.body)
  if(!result) return res.sendStatus(404)
  return res.status(202).send(result)
} catch (e) { next(e) } })

route.delete('/:accountId', async (req, res, next) => { try {
  let result = await Account.findByIdAndRemove(req.params.accountId, req.body)
  if(!result) return res.sendStatus(404)
  return res.status(204).send(result) /* ! we have content to send, maybe 202 is better than 204 */
} catch (e) { next(e) } })
