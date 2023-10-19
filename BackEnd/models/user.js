const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  role: {
    type: String
  },
  address: {
    type: String
  },
  address2: {
    type: String
  },
  phone: {
    type: Number
  },
  gender: {
    type: String
  },

}, {
    collection: 'user'
  })
module.exports = mongoose.model('User', userSchema)