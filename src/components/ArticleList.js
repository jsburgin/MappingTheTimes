import React, { Component } from 'react';
import _ from 'lodash';
import Article from './Article';
import ArticleListSlider from './ArticleListSlider';

class ArticleList extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.year !== this.props.year || nextProps.month !== this.props.month || nextProps.day !== this.props.day;
  }

  render() {
    const articles = this.props.days[this.props.day].articles;

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
