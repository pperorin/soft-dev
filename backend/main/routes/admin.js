const express = require('express')
const router = express.Router()
const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');

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

module.exports = router