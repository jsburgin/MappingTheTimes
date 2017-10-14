const config = require('config');
const nytKey = config.get('nytKey');

const articles = {
  get(data) {
    return Promise.resolve({ count: 0, articles: [] });
  },
};

module.exports = articles;