import React, { Component } from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Header extends Component {
  handleAfterChange = finishVal => {
    console.log('finished changing');
  }

  render() {

    console.log(this.props.days)
    return (
      <div className='header'>
        <h1>Mapping The Times</h1>

        <div className='date-select'>
                <form action="">
                    <div>
                  <input type="radio" name="month" id='m1' value="1"/><label for='m1'>JAN</label>
                  <input type="radio" name="month" id='m2' value="2"/><label for='m2'>FEB</label>
                  <input type="radio" name="month" id='m3' value="3"/><label for='m3'>MAR</label>
                  <input type="radio" name="month" id='m4' value="4"/><label for='m4'>APR</label>
                  <input type="radio" name="month" id='m5' value="5"/><label for='m5'>MAY</label>
                  <input type="radio" name="month" id='m6' value="6"/><label for='m6'>JUN</label>
                  <input type="radio" name="month" id='m7' value="7"/><label for='m7'>JUL</label>
                  <input type="radio" name="month" id='m8' value="8"/><label for='m8'>AUG</label>
                  <input type="radio" name="month" id='m9' value="9"/><label for='m9'>SEP</label>
                  <input type="radio" name="month" id='m10' value="10"/><label for='m10'>OCT</label>
                  <input type="radio" name="month" id='m11' value="11"/><label for='m11'>NOV</label>
                  <input type="radio" name="month" id='m12' value="12"/><label for='m12'>DEC</label>
                    </div>
                    <div>
                  <input type="radio" name="day" id='d1' value="1"/><label for='d1'>1</label>
                  <input type="radio" name="day" id='d2' value="2"/><label for='d2'>2</label>
                  <input type="radio" name="day" id='d3' value="3"/><label for='d3'>3</label>
                  <input type="radio" name="day" id='d4' value="4"/><label for='d4'>4</label>
                  <input type="radio" name="day" id='d5' value="5"/><label for='d5'>5</label>
                  <input type="radio" name="day" id='d6' value="6"/><label for='d6'>6</label>
                  <input type="radio" name="day" id='d7' value="7"/><label for='d7'>7</label>
                  <input type="radio" name="day" id='d8' value="8"/><label for='d8'>8</label>
                  <input type="radio" name="day" id='d9' value="9"/><label for='d9'>9</label>
                  <input type="radio" name="day" id='d10' value="10"/><label for='d10'>10</label>
                  <input type="radio" name="day" id='d11' value="11"/><label for='d11'>11</label>
                  <input type="radio" name="day" id='d12' value="12"/><label for='d12'>12</label>
                  <input type="radio" name="day" id='d13' value="13"/><label for='d13'>13</label>
                  <input type="radio" name="day" id='d14' value="14"/><label for='d14'>14</label>
                  <input type="radio" name="day" id='d15' value="15"/><label for='d15'>15</label>
                  <input type="radio" name="day" id='d16' value="16"/><label for='d16'>16</label>
                  <input type="radio" name="day" id='d17' value="17"/><label for='d17'>17</label>
                  <input type="radio" name="day" id='d18' value="18"/><label for='d18'>18</label>
                  <input type="radio" name="day" id='d19' value="19"/><label for='d19'>19</label>
                  <input type="radio" name="day" id='d20' value="20"/><label for='d20'>20</label>
                  <input type="radio" name="day" id='d21' value="21"/><label for='d21'>21</label>
                  <input type="radio" name="day" id='d22' value="22"/><label for='d22'>22</label>
                  <input type="radio" name="day" id='d23' value="23"/><label for='d23'>23</label>
                  <input type="radio" name="day" id='d24' value="24"/><label for='d24'>24</label>
                  <input type="radio" name="day" id='d25' value="25"/><label for='d25'>25</label>
                  <input type="radio" name="day" id='d26' value="26"/><label for='d26'>26</label>
                  <input type="radio" name="day" id='d27' value="27"/><label for='d27'>27</label>
                  <input type="radio" name="day" id='d28' value="28"/><label for='d28'>28</label>
                  <input type="radio" name="day" id='d29' value="29"/><label for='d29'>29</label>
                  <input type="radio" name="day" id='d30' value="30"/><label for='d30'>30</label>
                  <input type="radio" name="day" id='d31' value="31"/><label for='d31'>31</label>
                    </div>
                    <div className="year">
                        <input type="number" name="quantity" min="1900" max="2017" placeholder="2017"/>
                        <button>Go</button>
                    </div>
                </form>
       </div>
    </div>
    );
  }
}
