const config = require('config');

const data = {
  mapboxKey: config.get('mapboxKey'),
};

const keys = {
  get() {
    return Promise.resolve(data);
  },
};

module.exports = keys;