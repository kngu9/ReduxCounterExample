import React, { Component } from 'react';

import NumberDisplay from './components/NumberDisplay';
import Select from './components/Select';
import Adjuster from './components/Adjuster';

import './App.css';

class App extends Component {
  state = {
    curOption: 'a',
    counters: {
      'a': 0,
      'b': 0
    }
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
    let { a, b } = this.state.counters;

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

export default App;
