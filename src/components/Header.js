import React, { Component } from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Header extends Component {
  handleAfterChange = finishVal => {
    console.log('finished changing');
  }

  render() {
    const settings = {
      accessibility: true,
      draggable: true,
      afterChange: this.handleAfterChange,
      swipeToSlide: true,
    }
    console.log(this.props.days)
    return (
      <div className='header'>
        <h1>Mapping The Times</h1>
        <Slider {...settings}>
          {this.props.days.map((day, i) => (
            <div class="day-node">{i + 1}</div>
          ))}
        </Slider>
      </div>
    );
  }
}
