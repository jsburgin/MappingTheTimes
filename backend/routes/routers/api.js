const express = require('express');
const http = require('../../middleware/http');
const api = require('../../api');
const natlang = require('../../natlang');
const mapbox = require('../../services/mapbox');

const router = express.Router();

router.get('/articles', http.wrap(api.articles.get));
router.get('/keys', http.wrap(api.keys.get));

router.get('/process', (req, res, next) => {
  natlang.processUrl(req.query.url)
    .then(data => res.send(data))  
    .catch(next);
});

router.get('/geocode', (req, res, next) => {
  return mapbox.geocode(req.query.location)
    .then(data => res.json(data))
    .catch(next);
});

module.exports = router;