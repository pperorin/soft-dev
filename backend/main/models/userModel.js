const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { kMaxLength } = require('buffer');
const Schema = mongoose.Schema

const userSchema = new Schema({
  firstname: {
    type: String,
    required: [true, 'Please tell us your name'],
    minlength: 3,
    maxLength: 64
  },
  lastname: {
    type: String,
    required: [true, 'Please tell us your lastname'],
    minlength: 3,
    maxLength: 64
  },
  username: {
    type: String,
    required: [true, 'Please provide a username'],
    unique: true,
    minlength: 8,
    maxLength: 64
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
    maxlength: 64
  },
  passwordConfirm: {
    type: String,
    required: true,
    validator: function (el) {
      // This only works on CREATE and SAVE!!!
      return el === this.password;
    }
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email']
  },
  telephone: {
    type: String,
    required: [true, 'Please provide your telephone number'],
    minlength: 10,
    maxlength: 10
  },
  birthday: {
    type: Date,
    required: [true]
  },
  photo: String,
  money: Number
})

userSchema.pre('save', async function (next) {
  // Only run this function if password was actually modified
  if (!this.isModified('password')) return next();

  // Hash the password with cost of 12
  this.password = bcrypt.hash(this.password, 12)

  // Delete password Confirm field
  this.passwordConfirm = undefined;
  next();
})

const UserModel = mongoose.model('User', userSchema)

module.exports = UserModel