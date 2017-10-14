import React, { Component } from 'react';
import config from 'config';

export default class Map extends Component {
  componentDidMount() {
  const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
    
  mapboxgl.accessToken = '';
  const map = new mapboxgl.Map({
    container: 'mapContainer',
    style: 'mapbox://styles/mapbox/streets-v10'
   });
  }

  render() {
    return (
      <div id="mapContainer">
      </div>
    );
  }
}