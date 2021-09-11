const express = require('express')
const router = express.Router()
const User = require('../models/userModel')
const Job = require('../models/jobModel')
const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');


const isLoggedIn = (req, res, next) => {
  if (!req.user) {
    return res.redirect('/login')
  }
  next()
}

router.get('/', isLoggedIn, function (req, res, next) {
  res.render('index')
})

router.get('/register', (req, res) => {
  res.render('register')
})

router
  .route('/signup')
  .post(authController.signup);

// router
//   .route('/login')
//   .post(authController.login);


router
  .route('/api/users')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router.route('/api/users/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

router.get('/alljobs', async (req, res) => {
  try {
    const alljobs = await Job.find()
    res.status(200).json({
      status: 'success',
      data: {
        alljobs
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
})



// router.
//   route('/top-5-cheap')
//   .get(userController.aliasTopTours, userController.getAllUsers);

// router.post('/login', async (req, res) => {
//   const { username, password } = req.body
//   // simple validation
//   if (!username || !password) {
//     return res.render('register', { message: 'Please try again' })
//   }
//   const user = await User.findOne({
//     username
//   })
//   if (user) {
//     const isCorrect = bcrypt.compareSync(password, user.password)
//     if (isCorrect) {
//       req.user = user
//       return res.render('index', { title: user.username })
//     } else {
//       return res.render('login', { message: 'Username or Password incorrect' })
//     }
//   } else {
//     return res.render('login', { message: 'Username does not exist.' })
//   }
// })

// router.post('/register', async (req, res) => {
//   const { username, password, name } = req.body
//   // simple validation
//   if (!name || !username || !password) {
//     return res.render('register', { message: 'Please try again' })
//   }
//   const passwordHash = bcrypt.hashSync(password, 10)
//   const user = new User({
//     name,
//     username,
//     password: passwordHash
//   })
//   await user.save()
//   res.render('index', { user })
// })


module.exports = router