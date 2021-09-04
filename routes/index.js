const express = require('express')
const bcrypt = require('bcrypt')  //encryption password
const router = express.Router()
const user = require('../models/userModel')
const userController = require('./../controllers/userController');

const isLoggedIn = (req, res, next) => {
  if (!req.user) {
    return res.redirect('/login')
  }
  next()
}

router.get('/', isLoggedIn, function (req, res, next) {
  res.render('index', { title: 'Express' })
})

router.get('/register', (req, res) => {
  res.render('register')
})

router.get('/login', (req, res) => {
  res.render('login')
})

router
  .route('/api/users')
  .get(userController.getAllUsers)
  .get(userController.createUser);

router.route('/api/user/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

router.post('/login', async (req, res) => {
  const { username, password } = req.body
  // simple validation
  if (!username || !password) {
    return res.render('register', { message: 'Please try again' })
  }
  const user = await User.findOne({
    username
  })
  if (user) {
    const isCorrect = bcrypt.compareSync(password, user.password)
    if (isCorrect) {
      req.user = user
      return res.render('index', { title: user.username })
    } else {
      return res.render('login', { message: 'Username or Password incorrect' })
    }
  } else {
    return res.render('login', { message: 'Username does not exist.' })
  }
})

module.exports = router