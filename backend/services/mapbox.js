const config = require('config');
const MapboxClient = require('mapbox');
const client = new MapboxClient(config.get('mapboxKey'));

module.exports = client;