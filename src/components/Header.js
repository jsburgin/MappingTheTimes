import React, { Component } from 'react';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import 'rc-slider/assets/index.css';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Handle = Slider.Handle;

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

export default class Header extends Component {
  handleAfterChange = finishVal => {
    console.log('finished changing');
  }

  render() {
    return (
      <div className='header'>
        <h1>Mapping The Times</h1>
        <Slider
          min={0}
          max={this.props.days.length}
          defaultValue={this.props.days.length} 
          handle={handle}
          onAfterChange={this.handleAfterChange}
        />
      </div>
    );
  }
}
