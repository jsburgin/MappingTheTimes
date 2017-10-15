import React, { Component } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Header extends Component {
  handleAfterChange = finishVal => {
    console.log('finished changing');
  }

  handleDayClick = e => {
    this.props.emitter.emit('changeDay', e.target.value);
  }

  handleMonthClick = e => {
    this.props.emitter.emit('changeMonth', parseInt(e.target.value, 10));
  }

  handleYearUpdate = e => {
    const year = document.getElementById('yearInput').value;
    this.props.emitter.emit('changeYear', year);
  }

  render() {
    const { days } = this.props;
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    return (
      <div className='header'>
        <h1>Mapping The Times</h1>

        <div className='date-select'>
          <div>
            {months.map((month, i) => (
              <button className="month-button" key={month} value={i} onClick={this.handleMonthClick}>{month}</button>
            ))}
          </div>
          <div>
            {days.map((day, i) => (
              <button className="day-button" value={i} key={i} onClick={this.handleDayClick}>{i + 1}</button>
            ))}
          </div>
          <div className="year">
            <input type="number" id="yearInput" name="quantity" min="1900" max="2017" placeholder={this.props.query.year} />
            <button onClick={this.handleYearUpdate}>Go</button>
          </div>
        </div>
      </div>
    );
  }
}
