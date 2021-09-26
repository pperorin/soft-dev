const express = require('express')
const router = express.Router()
const userRouter = require('./user');
const taskerRouter = require('./tasker');
const adminRouter = require('./admin');
const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');
const cleaningController = require('./../controllers/jobCategoriesController/cleaningController');
const consultantController = require('./../controllers/jobCategoriesController/consultantController');

//router.get('/', taskerController.aliasTopTasker, taskerController.getAllUsers);

const routes = [
  {
    path: "/user",
    route: userRouter,
  },
  {
    path: "/tasker",
    route: taskerRouter,
  },
  {
    path: "/admin",
    route: adminRouter
  }
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router