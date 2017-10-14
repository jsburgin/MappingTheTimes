import React, { Component } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';

export default class Map extends Component {
  componentDidMount() {
  const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
    
  mapboxgl.accessToken = 'pk.eyJ1Ijoic2lkcDAiLCJhIjoiY2o4cm94cHVvMHpkdjMycXBzcmpiYTF3MiJ9.iSzjhsbk8TT8n2YF-sJoVQ'
  const map = new mapboxgl.Map({
    container: 'mapContainer',
    style: 'mapbox://styles/mapbox/dark-v9'
   });
  }

  render() {
    return (
      <div className="map" id="mapContainer">
      </div>
    );
  }
}
