import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeOption } from '../actions';

class Select extends Component {
  onSelect(val) {
    this.props.changeOption(val);
  }

  render() {
    let { options } = this.props;

    return (
      <select
        onChange={(evt) => this.onSelect(evt.target.value)}
      >
        {
          options.map((item, index) => {
            return (
              <option
                key={index}
                value={item.value}
              >
                {item.name}
              </option>
            );
          })
        }
      </select>
    );
  }
}

function mapStateToProps(props) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    changeOption: (newCounter) => dispatch(changeOption(newCounter))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Select);
