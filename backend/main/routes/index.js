const express = require('express')
const router = express.Router()
const userRouter = require('./user');
const taskerRouter = require('./tasker');
const adminRouter = require('./admin');
const homeRouter = require('./home');

//router.get('/', taskerController.aliasTopTasker, taskerController.getAllUsers);

const routes = [
  {
    path: "/",
    route: homeRouter
  },
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
  },
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router