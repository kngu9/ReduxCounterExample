import { combineReducers } from 'redux';

import counter from './counter';
import options from './options';

export default combineReducers({
  counter,
  options
});