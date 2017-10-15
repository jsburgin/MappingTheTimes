const express = require('express');
const http = require('../../middleware/http');
const api = require('../../api');
const mapbox = require('../../services/mapbox');

const router = express.Router();

router.get('/articles', http.wrap(api.articles.get));
router.get('/keys', http.wrap(api.keys.get));

router.get('/geocode', (req, res, next) => {
  return mapbox.geocode(req.query.location)
    .then(data => res.json(data))
    .catch(next);
});

module.exports = router;