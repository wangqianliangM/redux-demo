import * as types from '../constants/ActionTypes';

export function start() {
  return { type: types.START };
}

export function pause() {
  return { type: types.PAUSE };
}

export function increase() {
  return { type: types.INCREASE_TIME };
}

export function decrease() {
  return { type: types.DECREASE_TIME };
}

export function exit() {
  return { type: types.EXIT };
}
