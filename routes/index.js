const express = require('express')
const bcrypt = require('bcrypt')  //encryption password
const router = express.Router()
const user = require('../models/userModel')

const isLoggedIn = (req, res, next) => {
  if (!req.user) {
    return res.redirect('/login')
  }
  next()
}

router.get('/', isLoggedIn, function (req, res, next) {
  res.render('index', { title: 'Express' })
})

router.get('/api/user', async (req, res) => {
  const users = await user.find()
  res.status(200).json({
    status: 'success',
    data: {
      users
    }
  })
})




// router.get('/register', (req, res) => {
//   res.render('register')
// })

// router.get('/login', (req, res) => {
//   res.render('login')
// })


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