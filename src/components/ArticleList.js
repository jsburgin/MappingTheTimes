import React from 'react';
import Article from './Article';
import ArticleListSlider from './ArticleListSlider';

const ArticleList = props => (
  <div className='article-list'>
    <ArticleListSlider />
    {
      props.articles.map(a => <Article data={a} key={a.id} />)
    }
  </div>
);

export default ArticleList;
