import React, { Component } from 'react';
import { connect } from 'react-redux';

import NumberDisplay from './components/NumberDisplay';
import Select from './components/Select';
import Adjuster from './components/Adjuster';

import './App.css';

class App extends Component {
  state = {
    curOption: 'a'
  };

  onIncrement() {
    let { curOption, counters } = this.state;
    counters[curOption] ++;

    this.setState({ counters })
  }

  onDecrement() {
    let { curOption, counters } = this.state;
    counters[curOption] --;
    
    this.setState({ counters })
  }

  onSelect(opt) {
    this.setState({ curOption: opt })
  }

  render() {
    let { a, b } = this.props.counter;

    return (
      <div className="App">
        <NumberDisplay
          name='Counter A'
          value={ a }
        />
        <NumberDisplay
          name='Counter B'
          value={ b }
        />
        
        <Select
          options={[
            {name: 'Counter A', value: 'a'},
            {name: 'Counter B', value: 'b'}
          ]}
          onSelect={(val) => this.onSelect(val)}
        />

        <Adjuster
          onIncrement={() => this.onIncrement()}
          onDecrement={() => this.onDecrement()}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

export default connect(mapStateToProps)(App);