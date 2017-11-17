import React, { Component } from 'react';
import './Adjuster.css';

class Adjuster extends Component {
  render() {
    let { onIncrement, onDecrement } = this.props;

    return (
      <div className='adjuster'>
        <button
          className='button'
          onClick={ onIncrement }
        >
          Increase
        </button>
        <button
          className='button'
          onClick={ onDecrement }
        >
          Decrease
      </button>
      </div>
    );
  }
}

export default Adjuster;
