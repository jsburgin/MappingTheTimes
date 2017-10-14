import React, { Component } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Map from '../components/Map';
import ArticleList from '../components/ArticleList';

export default class Wrapper extends Component {
  constructor() {
    super();

    this.state = {
      articles: []
    };
  }

  async componentWillMount() {
    const articles = (await axios.get('http://localhost:8000/api/articles')).data;
    this.setState({ articles: articles[articles.length - 1].articles });
  }

  render() {
    return (
      <div className="wrapper">
        <Header {...this.state} />
        <Map {...this.state} />
        <ArticleList {...this.state} />
      </div>
    );
  }
}