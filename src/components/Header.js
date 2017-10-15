import React, { Component } from 'react';
import Slider from 'react-slick';

export default class Header extends Component {
  handleAfterChange = finishVal => {
    console.log('finished changing');
  }

  render() {
    const settings = {
      accessibility: true,
      draggable: true,
      afterChange: this.handleAfterChange

    }
    return (
      <div className='header'>
        <h1>Mapping The Times</h1>
        <Slider {...settings}>
        <div style={{ width: '500px' }}>
          {this.props.days.map(day => (
            <div key={day.date}></div>
          ))}
        </div>
        </Slider>
      </div>
    );
  }
}
