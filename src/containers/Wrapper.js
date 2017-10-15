import React, { Component } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Map from '../components/Map';
import ArticleList from '../components/ArticleList';

export default class Wrapper extends Component {
  constructor() {
    super();

    this.state = {
      days: []
    };
  }

  async componentWillMount() {
    const days = (await axios.get('http://localhost:8000/api/articles?year=2017&month=10')).data;
    this.setState({ days });
  }

  render() {
    return (
      this.state.days.length > 0 && (
        <div className="wrapper">
          <Header {...this.state} />
          <Map {...this.state} />
          <ArticleList {...this.state} />
        </div>
      )
    );
  }
}