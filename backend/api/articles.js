const config = require('config');
const nytKey = config.get('nytKey');
const axios = require('axios');
const cache = require('../cache');

const articles = {
  fetchDirect(route) {
    return axios.get(route, { params: { 'api-key': nytKey }})
      .then(res => {
        const now = new Date().getTime();
        return {
          content: res.data.results,
          expiresAt: now + (1000 * 60 * 5),
          fetchedAt: now
        };
      });
  },
  fetch(route) {
    return cache.getAsync(route)
      .then(data => {
        return data ? JSON.parse(data) : data;
      })
      .then(data => {
        if (data && Date.now() < new Date(data.expiresAt)) {
          data.fromCache = true;
          return data;
        }

        return articles.fetchDirect(route);
      });
  },
  get(data) {
    if (!data.section) data.section = 'U.S.';
    const route = `https://api.nytimes.com/svc/mostpopular/v2/mostviewed/${data.section}/30.json`;
    
    return articles.fetch(route)
      .then(data => {
        if (data.fromCache) return data;
        
        process.nextTick(() => cache.setAsync(route, data));
        return data;
      });
  },
};

module.exports = articles;