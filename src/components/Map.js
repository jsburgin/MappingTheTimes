import React, { Component } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
mapboxgl.accessToken = 'pk.eyJ1Ijoic2lkcDAiLCJhIjoiY2o4cm94cHVvMHpkdjMycXBzcmpiYTF3MiJ9.iSzjhsbk8TT8n2YF-sJoVQ'

let map;

export default class Map extends Component {
  componentDidMount() {
    map = new mapboxgl.Map({
      container: 'mapContainer',
      style: 'mapbox://styles/sidp0/cj8s7d32pc5k22rntxcgzxi73',
      zoom: 3,
      center: [-95.7129, 37.0902]
    });

    map.scrollZoom.disable();
    map.dragPan.disable();
    map.dragRotate.disable();
    map.doubleClickZoom.disable();
  }

  componentWillReceiveProps(nextProps) {
    map.flyTo({
      center: nextProps.coordinates.data.features[0].center,
      zoom: 5,
      speed: 0.2,
      curve: 2
    });
  }

  render() {
    return (
      <div className="map" id="mapContainer">
      </div>
    );
  }
}
