import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Adjuster.css';
import { changeCounter } from '../actions';

class Adjuster extends Component {
  onIncrement() {
    this.props.changeCounter(this.props.options.curOption, true);
  }

  onDecrement() {
    this.props.changeCounter(this.props.options.curOption, false);
  }
  
  render() {
    return (
      <div className='adjuster'>
        <button
          className='button'
          onClick={ () => this.onIncrement() }
        >
          Increase
        </button>
        <button
          className='button'
          onClick={ () => this.onDecrement() }
        >
          Decrease
      </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    options: state.options
  }
};

function mapDispatchToProps(dispatch) {
  return {
    changeCounter: (counterType, increment) => dispatch(changeCounter(counterType, increment))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Adjuster);
