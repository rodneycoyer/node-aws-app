const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.end("This is the Landing Page!!!");
});

module.exports = router;