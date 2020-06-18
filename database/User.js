const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema ({
  username: String,
  list: [{name: String}],
  likeplace: [{name: String, list: String}]
})

const User = mongoose.model('User', userSchema)

module.exports = User;