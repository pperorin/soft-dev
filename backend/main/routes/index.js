const express = require('express')
const router = express.Router()
const User = require('../models/userModel')
const Job = require('../models/jobModel')
const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');


router.get('/', function (req, res, next) {
  res.render('index')
})

router.get('/register', (req, res) => {
  res.render('register')
})

router
  .route('/signup')
  .post(authController.signup);

router
  .route('/login')
  .post(authController.login);

router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);


router.patch(
  '/updateMyPassword',
  authController.protect,
  authController.updatePassword
);

router.patch(
  '/updateMe',
  authController.protect,
  userController.updateMe
);

router
  .route('/api/users')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/api/users/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    userController.deleteUser
  );

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


module.exports = router