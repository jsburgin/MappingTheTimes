const config = require('config');
const MapboxClient = require('mapbox');
const cache = require('../cache');
const client = new MapboxClient(config.get('mapboxKey'));

const mapbox = {
  fetchAndCache(value, key) {
    return new Promise((resolve, reject) => {
      client.geocodeForward(value, (err, data, res) => {
        if (err) return reject(err);
        process.nextTick(() => cache.setAsync(key, JSON.stringify(data)));
        resolve(data);
      });
    });
  },
  geocode(value) {
    const key = `l-${value.split(' ').join('')}`;

    return cache.getAsync(key)
      .then(data => {
        if (data) return Promise.resolve(JSON.parse(data));

        return mapbox.fetchAndCache(value, key);
      });
  },
};


module.exports = mapbox;