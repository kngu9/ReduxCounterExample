import React, { Component } from 'react';

class NumberDisplay extends Component {
  render() {
    let { name, value } = this.props;

    return (
      <div>
        <h2>
          { name }
        </h2>
        <h3>
          { value }
        </h3>
      </div>
    );
  }
}

export default NumberDisplay;
