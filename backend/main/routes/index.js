const express = require('express')
const router = express.Router()
const userRouter = require('./user');
const taskerRouter = require('./tasker');
const adminRouter = require('./admin');
const viewRouter = require('./view');
const reviewRouter = require('./review');
const reportRouter = require('./report');

//router.get('/', taskerController.aliasTopTasker, taskerController.getAllUsers);

const routes = [
  {
    path: "/",
    route: viewRouter
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
  {
    path: "/review",
    route: reviewRouter
  },
  {
    path: "/report",
    route: reportRouter
  }
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router