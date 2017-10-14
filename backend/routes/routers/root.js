const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('hackNY Fall 2017.');
});

module.exports = router;