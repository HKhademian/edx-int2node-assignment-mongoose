const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  ObjectId = mongoose.ObjectId

mongoose.connect('mongodb://localhost:27017/edx-int2node-assignment-mongoose')

const accountSchema = Schema({
  name: { type: String, require: true },
  balance: { type: Number, require: true, default: 0, min: 0, max: 10000 },
})

module.exports.Account = mongoose.model('Account', accountSchema)
