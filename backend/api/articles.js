const config = require('config');
const nytKey = config.get('nytKey');
const axios = require('axios');
const cache = require('../cache');

const articles = {
  processArticle(article) {

  },
  fetchArticle(article) {
    return cache.getAsync(article.id)
      .then(cachedArticle => {
        if (cachedArticle) return cachedArticle;

        return article.processArticle(article);
      });
  },
  processArticleBatch(articles) {
    /*return Promise.all(articles.map => {
      rteurn
    })*/
  },
  fetchDirect(route) {
    return axios.get(route, { params: { 'api-key': nytKey }})
      .then(res => {
        const now = new Date().getTime();
        return res.data.results;
      });
  },
  fetch(route) {
    return cache.getAsync(route)
      .then(data => {
        return data ? JSON.parse(data) : data;
      })
      .then(data => {
        // data was returned from cache, and is valid
        if (data && data.expiresAt && Date.now() < new Date(data.expiresAt)) {
          return data;
        }

        // re-process the route
        return articles.fetchDirect(route)
          .then(data => {
            process.nextTick(() => cache.setAsync(route, JSON.stringify(data)));
            return data;
          });
      });
  },
  get(data) {
    if (!data.section) data.section = 'U.S.';
    const route = `https://api.nytimes.com/svc/mostpopular/v2/mostviewed/${data.section}/30.json`;
    
    return articles.fetch(route);
  },
};

module.exports = articles;