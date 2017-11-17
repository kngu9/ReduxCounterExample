import actionType from '../constants/actionType';

const initialState = {
  a: 0,
  b: 0
};

export default function OptionsReducer(state = initialState, action) {
  switch(action.type) {
    case actionType.INCREASE_COUNTER:
      if (action.counterType === 'a')
        return { ...state, a: state.a + 1 };
      else if (action.counterType === 'b')
        return { ...state, b: state.b + 1 };
      break;

    case actionType.DECREASE_COUNTER:
      if (action.counterType === 'a')
        return { ...state, a: state.a - 1 };
      else if (action.counterType === 'b')
        return { ...state, b: state.b - 1 };
      break;

    default:
      return state;
  }
};