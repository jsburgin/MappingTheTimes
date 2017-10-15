import React, { Component } from 'react';
import _ from 'lodash';
import Article from './Article';
import ArticleListSlider from './ArticleListSlider';

const ArticleList = props => {
  const articles = []
  for (let day of props.days) {
    for (let article of day.articles) {
      articles.push(article);
    }
  }
  return (
    <div className='article-list'>
      <ArticleListSlider />
      {
      articles.map(a => <Article key={_.uniqueId('article:')} data={a} onChange={props.onChange} emitter={props.emitter} />)
      }
    </div>
  );
};

export default ArticleList;
