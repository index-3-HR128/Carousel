const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema ({
  name: String,
  list: [String],
  likeplace: [{name: String, list: String}]
})

const User = mongoose.model('User', userSchema)

module.exports = User;