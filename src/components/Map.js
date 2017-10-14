import React, { Component } from 'react';


export default class Map extends Component {
  componentDidMount() {
  const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
    
  mapboxgl.accessToken = 'pk.eyJ1Ijoic2lkcDAiLCJhIjoiY2o4cm94cHVvMHpkdjMycXBzcmpiYTF3MiJ9.iSzjhsbk8TT8n2YF-sJoVQ'
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