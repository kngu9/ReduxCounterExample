import actionType from '../constants/actionType';

export function changeCounter(counterType = 'a', increment = true) {
  return {
    type: increment ? actionType.INCREASE_COUNTER : actionType.DECREASE_COUNTER,
    counterType
  };
};

export function changeOption(newCounter) {
  return {
    type: actionType.CHANGE_OPTION,
    newCounter
  };
};