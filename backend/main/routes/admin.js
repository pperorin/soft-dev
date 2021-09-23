const express = require('express')
const router = express.Router()
const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');
const indexController = require('../controllers/taskerController');

router.get('/', indexController.alias);

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

// Protect all routes after this middleware
router.use(authController.protect);

router.patch('/updateMyPassword', authController.updatePassword);
router.get('/me', userController.getMe, userController.getUser);

router.patch('/updateMe', userController.uploadUserPhoto, userController.resizeUserPhoto, userController.updateMe);
router.delete('/deleteMe', userController.deleteMe);

router
    .route('/api/users')
    .get(userController.getAllUsers)
    .post(userController.createUser);

router
    .route('/api/users/:id')
    .get(userController.getUser)
    .patch(userController.updateUser)
    .delete(
        authController.restrictTo('admin'),
        userController.deleteUser
    );