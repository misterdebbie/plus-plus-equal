const express = require('express');
const homeControl = require('../controllers/home-controller');
const homeRouter = express.Router();

homeRouter.get('/', homeControl.index);

module.exports = homeRouter;
