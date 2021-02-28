import {EMPLOYEE_UPDATE} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  // console.log(action);

  switch (action.type) {
    // action.payload === {prop: 'name', value: 'Jahanzeb'}
    // const newState = {};
    // newState[action.payload.prop] = action.payload.value;
    case EMPLOYEE_UPDATE:
      return {...state, [action.payload.prop]: action.payload.value};
    default:
      return state;
  }
};
