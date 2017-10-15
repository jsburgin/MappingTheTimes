const config = require('config');
const nytKey = config.get('nytKey');
const axios = require('axios');
const cache = require('../cache');
const mapbox = require('../services/mapbox');

const articlesApi = {
  cacheArticleBatch(articles, key) {
    cache.setAsync(key, JSON.stringify(articles));
  },
  getArticles(year, month) {
    const route = `https://api.nytimes.com/svc/archive/v1/${year}/${month}.json`;

    const hasGeo = (article) => {
      let valid = false;
      article.keywords.forEach(keyword => {
        if (keyword.name === 'glocations') {
          valid = true;
          return false;
        }
      });

      return valid;
    };

    const filterArticles = (articles) => {
      return articles.filter(article => {
        return article.print_page == 1 && hasGeo(article);
      });
    };

    return axios.get(route, { params: { 'api-key': nytKey }})
      .then(res => {
        console.log(res.data.response.docs.length);
        return filterArticles(res.data.response.docs);
      });
  },
  groupArticlesByDate(articles) {
    const map = {};
    const days = [];
    let lastDay = 'a';

    articles.forEach(article => {
      const date = new Date(article.pub_date).getUTCDate();
      if (!map[date]) {
        map[date] = {
          buttonLabel: parseInt(date),
          articles: []
        };
      }

      map[date].articles.push(article);
    });

    for (let key in map) {
      days.push(map[key]);
    }

    
    
    return days.sort((a, b) => {
      return a.buttonLabel - b.buttonLabel;
    });
  },
  get(query) {
    const key = `a-${query.year}-${query.month}`;

    return cache.getAsync(key)
      .then(articles => {
        // data was returned from cache
        if (articles) return articles;

        // re-process the route
        return articlesApi.getArticles(query.year, query.month)
          .then(articles => {
            articles = articlesApi.groupArticlesByDate(articles);
            process.nextTick(() => articlesApi.cacheArticleBatch(articles, key));
            return articles;
          });
      });
  }
};

module.exports = articlesApi;