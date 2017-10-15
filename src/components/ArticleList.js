import React, { Component } from 'react';
import _ from 'lodash';
import Article from './Article';
import ArticleListSlider from './ArticleListSlider';

class ArticleList extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.days !== this.props.days
  }

  render() {
    const articles = []
    for (let day of this.props.days) {
      for (let article of day.articles) {
        articles.push(article);
      }
    }
    return (
      <div className='article-list'>
        <ArticleListSlider />
        {
        articles.map(a => <Article key={_.uniqueId('article:')} data={a} onChange={this.props.onChange} emitter={this.props.emitter} />)
        }
      </div>
    );
  }
}

export default ArticleList;
