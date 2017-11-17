import React, { Component } from 'react';

class Select extends Component {
  render() {
    let { options, onSelect } = this.props;

    return (
      <select
        onChange={(evt) => onSelect(evt.target.value)}
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

export default Select;
