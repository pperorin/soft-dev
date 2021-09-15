const express = require('express')
const router = express.Router()
const User = require('../models/userModel')
const Job = require('../models/jobModel')
const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');