import React, { Component } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
mapboxgl.accessToken = 'pk.eyJ1Ijoic2lkcDAiLCJhIjoiY2o4cm94cHVvMHpkdjMycXBzcmpiYTF3MiJ9.iSzjhsbk8TT8n2YF-sJoVQ'

let map;

const testCoords = {
  ny: [-73.935242, 40.730610],
  tokyo: [139.839478, 35.652832],
  budapest: [19.035133, 47.501896],
  newDelhi: [77.088104, 28.619570],
  rio: [-43.182365, 	-22.970722]
}

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

    /*map.flyTo({
      center: testCoords.rio,
      zoom: 6,
      speed: 0.2,
      curve: 2
    })*/
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
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
