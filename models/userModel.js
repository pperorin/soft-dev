const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  firstname: {
    type: String,
    require: [true, 'User must have a name']
  },
  lastname: {
    type: String,
    require: [true, 'User must have a lastname']
  },
  username: {
    type: String,
    require: [true, 'User must have a username'],
    unique: true
  },
  password: String
})

const UserModel = mongoose.model('User', userSchema)


module.exports = UserModel