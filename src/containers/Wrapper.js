import React, { Component } from 'react';
import axios from 'axios';
import { EventEmitter } from 'events';
import Header from '../components/Header';
import Map from '../components/Map';
import ArticleList from '../components/ArticleList';

export default class Wrapper extends Component {
  constructor() {
    super();
    const today = new Date();

    this.state = {
      coordinates: null,
      days: [],
      visibleStack: [],
      emitter: new EventEmitter(),
      day: 0,
      query: {
        year: today.getFullYear(),
        month: today.getMonth(),
      },
      month: today.getMonth(),
      mode: 'dark',
    };
  }

  componentWillMount() {
    const { emitter } = this.state;

    emitter.on('changeYear', year => {
      this.setState({ query: Object.assign({}, this.state.query, { year }) });
    });

    emitter.on('changeMonth', month => {
      this.setState({ query: Object.assign({}, this.state.query, { month }) });
    });

    emitter.on('changeDay', day => this.setState({ day }));
    emitter.on('fetchArticles', () => this.fetchArticles());

    this.fetchArticles();
  }

  fetchArticles = () => {
    const params = {
      year: this.state.query.year,
      month: this.state.query.month,
    };

    axios.get('/api/articles', { params })
      .then(res => res.data)
      .then(days => {
        this.setState({ days, day: 0, year: params.year, month: params.month });
        this.updateCoordinates(days[0].articles[0]);
      });
  }

  updateCoordinates = (article) => {
    let location = null;

    article.keywords.forEach(keyword => {
      if (keyword.name === 'glocations') {
        location = keyword.value;
        return false;
      }
    });

    axios.get('/api/geocode', { params: { location }}).then(coordinates => {
      this.setState({ coordinates });
    });
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