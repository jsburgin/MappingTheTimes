const express = require('express');
const path = require('path');

const router = express.Router();

router.get('*', (req, res, next) => {
  return res.sendFile(path.join(__dirname, '../../../build/index.html'));
});

module.exports = router;