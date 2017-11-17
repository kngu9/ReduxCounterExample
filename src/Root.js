import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';

import App from './App';

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default Root;