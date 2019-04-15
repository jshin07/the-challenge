/**
 * reducer.js
 *
 * This file contains the reducer used to set values in the Redux store.
 * Note that the Redux store is immutable.
 */

import { fromJS } from 'immutable';

import { DISPATCH_ACTIONS } from './constants';

// TODO: Initialize more things in the Redux store if needed
const initialState = fromJS({
  luckyNumber: -1, 
  firstname: '',
  lastname: '',
  username: ''
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case DISPATCH_ACTIONS.GET_LUCKY_NUMBER:
    console.log('getLuckyNumber from reducer')
    console.log(state)
    console.log(action.username)
      return {...state, action};
    case DISPATCH_ACTIONS.GET_LUCKY_NUMBER_SUCCESS:
    console.log('getLuckyNumberSuccess from reducer')
    console.log(state)
      return {...state, luckyNumber: action.result.luckyNumber}
    default:
      return state;
  }
}

export default reducer;
