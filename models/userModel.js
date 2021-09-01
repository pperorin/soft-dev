const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  firstname: {
    type: String,
    require: true
  },
  lastname: {
    type: String,
    require: true
  },
  username: {
    type: String,
    require: true,
    unique: true
  },
  password: String
})

const UserModel = mongoose.model('User', userSchema)


module.exports = UserModel