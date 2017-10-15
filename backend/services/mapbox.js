const config = require('config');
const MapboxClient = require('mapbox');
const client = new MapboxClient(config.get('mapboxKey'));

const mapbox = {
  geocode(value) {
    return new Promise((resolve, reject) => {
      client.geocodeForward(value, (err, data, res) => {
        err ? reject(err) : resolve(data);
      });
    });
  },
};


module.exports = mapbox;