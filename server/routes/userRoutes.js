const express = require('express');

const UserRouter = express.Router();

/* GET users listing. */
UserRouter.get('/', function (req, res, next) {
  res.send('Respond with Auth User Resources');
});

module.exports = UserRouter;