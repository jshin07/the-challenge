/**
 * actions.js
 *
 * This file contains the various actions used by Redux.
 */

import { DISPATCH_ACTIONS } from './constants';

export function getLuckyNumber(fName,lName,username) {
  return {
    type: DISPATCH_ACTIONS.GET_LUCKY_NUMBER,
    username,
    fName,
    lName
  };
}

export function getLuckyNumberSuccess(result) {
  return{ 
    type: DISPATCH_ACTIONS.GET_LUCKY_NUMBER_SUCCESS,
    result
  }

}
