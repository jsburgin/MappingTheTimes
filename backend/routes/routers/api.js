const express = require('express');
const http = require('../../middleware/http');
const api = require('../../api');

const router = express.Router();

router.get('/articles', http.wrap(api.articles.get));
router.get('/keys', http.wrap(api.keys.get));

module.exports = router;