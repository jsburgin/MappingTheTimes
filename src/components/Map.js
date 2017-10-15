import React, { Component } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
mapboxgl.accessToken = 'pk.eyJ1Ijoic2lkcDAiLCJhIjoiY2o4cm94cHVvMHpkdjMycXBzcmpiYTF3MiJ9.iSzjhsbk8TT8n2YF-sJoVQ'

let map;

const zooms = {
  place: 8,
  country: 5,
  city: 6,
};

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
    const feature = nextProps.coordinates.data.features[0];
    
    map.flyTo({
      center: feature.center,
      zoom: zooms[feature.place_type[0]]|| 5,
      speed: .4,
      curve: 1,
    }); 
  }

  render() {
    return (
      <div className="map" id="mapContainer">
      </div>
    );
  }
}
