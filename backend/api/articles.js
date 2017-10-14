const config = require('config');
const nytKey = config.get('nytKey');
const axios = require('axios');
const cache = require('../cache');

const cacheMinutes = parseInt(config.get('cacheMinutes'));

const articlesApi = {
  processArticle(article) {
    // TODO - possible Watson natural language integration
    return Promise.resolve(article);
  },
  getProcessedArticles(articles) {
    return Promise.all(articles.map(article => {
      return cache.getAsync(article.id)
        .then(processedArticle => {
          // article already processed, return from cache
          if (processedArticle) return JSON.parse(processedArticle);

          // send article off to watson
          return processArticle(article);
        });
    })).then(processedArticles => {
      process.nextTick(() => articlesApi.saveArticleBatch(articles, route));
      return processedArticles;
    });
  },
  cacheArticleBatch(articleBatch, route) {
    const now = Date.now();
    // set expiresAt to current time + 5 minutes
    const data = {
      articleBatch,
      expiresAt: now + (1000 * 60 * cacheMinutes),
      cachedAt: now 
    };

    cache.setAsync(route, JSON.stringify(data));
  },
  fetchArticles(route) {
    return axios.get(route, { params: { 'api-key': nytKey }})
      .then(res => {
        return res.data.results;
      });
  },
  groupArticlesByDate(articles) {
    const map = {};
    const days = [];

    articles.forEach(article => {
      if (!article.geo_facet || article.geo_facet === '') return;
      if (!map[article.published_date]) {
        map[article.published_date] = {
          day: article.published_date,
          articles: [],
        };
      }

      map[article.published_date].articles.push(article);
    });

    for (let key in map) {
      days.push(map[key]);
    }

    days.sort((a, b) => {
      return a.day < b.day;
    });

    return days;
  },
  get(data) {
    if (!data.section) data.section = 'U.S.';
    const route = `https://api.nytimes.com/svc/mostpopular/v2/mostviewed/${data.section}/30.json`;

    return cache.getAsync(route)
      .then(data => data ? JSON.parse(data) : data)
      .then(data => {
        // data was returned from cache, and is valid
        if (data && data.expiresAt && Date.now() < new Date(data.expiresAt).getTime()) {
          return data.articleBatch;
        }

        // re-process the route
        return articlesApi.fetchArticles(route)
          .then(articles => {
            const articleBatch = articlesApi.groupArticlesByDate(articles);
            process.nextTick(() => articlesApi.cacheArticleBatch(articleBatch, route));
            return articleBatch;
          });
      });
  }
};

module.exports = articlesApi;