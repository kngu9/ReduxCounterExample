import actionType from '../constants/actionType';

const initialState = {
  curOption: 'a'
};

export default function OptionsReducer(state = initialState, action) {
  switch(action.type) {
    case actionType.CHANGE_OPTION:
      return { ...state, curOption: action.newCounter }
    default:
      return state;
  }
};