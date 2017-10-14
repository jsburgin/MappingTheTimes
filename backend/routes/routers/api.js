const express = require('express');
const http = require('../../middleware/http');
const api = require('../../api');
const natlang = require('../../natlang');

const router = express.Router();

router.get('/articles', http.wrap(api.articles.get));
router.get('/keys', http.wrap(api.keys.get));
router.get('/process', (req, res, next) => {
  natlang.processUrl(req.query.url)
    .then(data => res.send(data))  
    .catch(next);
});

module.exports = router;