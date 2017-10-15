import React, { Component } from 'react';
import { Visibility } from 'semantic-ui-react';
import _ from 'lodash';
import Article from './Article';
import ArticleListSlider from './ArticleListSlider';

export default class ArticleList extends Component {
  constructor() {
    super();

    this.state = {
      calculations: {
        direction: 'none',
        height: 0,
        width: 0,
        topPassed: false,
        bottomPassed: false,
        pixelsPassed: 0,
        percentagePassed: 0,
        topVisible: false,
        bottomVisible: false,
        fits: false,
        passing: false,
        onScreen: false,
        offScreen: false,
      },
    };
  }

  handleUpdate = (e, { calculations }) => this.setState({ calculations })

  render() {
    const articles = []
    for (let day of this.props.days) {
      for (let article of day.articles) {
        articles.push(article);
      }
    }
    return (
      <div className='article-list'>
        <Visibility onUpdate={this.handleUpdate}>
          <ArticleListSlider />
          {
            articles.map(a => <Article key={_.uniqueId('article:')} data={a} />)
          }
        </Visibility>
      </div>
    );
  }
}
