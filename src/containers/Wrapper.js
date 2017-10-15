import React, { Component } from 'react';
import axios from 'axios';
import { EventEmitter } from 'events';
import Header from '../components/Header';
import Map from '../components/Map';
import ArticleList from '../components/ArticleList';

export default class Wrapper extends Component {
  constructor() {
    super();

    this.state = {
      coordinates: null,
      days: [],
      emitter: new EventEmitter(),
      mode: 'dark',
    };

    this.updateCoordinates.bind(this);
  }

  async componentWillMount() {
    const days = (await axios.get('http://localhost:8000/api/articles?year=2017&month=10')).data;
    const { emitter } = this.state;
    this.setState({ days });

    this.updateCoordinates(days[0].articles[0]);
  }

  async updateCoordinates(article) {
    let location = null;

    article.keywords.forEach(keyword => {
      if (keyword.name === 'glocations') {
        location = keyword.value;
        return false;
      }
    });

    const gecodeData = await axios.get('http://localhost:8000/api/geocode', { params: { location }});
    this.setState({ coordinates: gecodeData });
  }

  render() {
    return (
      this.state.days.length > 0 && (
        <div className="wrapper">
          <Header {...this.state} />
          <Map {...this.state} />
          <ArticleList onChange={this.updateCoordinates} {...this.state} />
        </div>
      )
    );
  }
}