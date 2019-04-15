/**
 * actions.js
 *
 * This file contains the various actions used by Redux.
 */

import { DISPATCH_ACTIONS } from './constants';

export function getLuckyNumber(username) {
  return {
    type: DISPATCH_ACTIONS.GET_LUCKY_NUMBER,
    username
  };
}

export function getLuckNumberSuccess(result) {
  return{ 
    type: DISPATCH_ACTIONS.GET_LUCKY_NUMBER_SUCCESS,
    result
  }

}
