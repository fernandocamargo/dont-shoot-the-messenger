import noop from 'lodash/noop';
import { assign, createMachine } from 'xstate';

import { FULFILLED, IDLE, PENDING, REJECTED, RESOLVE } from './constants';

export class Void {
  static endless = new Promise(noop);
}

export class Validity {
  constructor() {
    this.stale = false;
  }

  expire = () => {
    this.stale = true;
  };

  succeed = (...params) =>
    !this.stale ? Promise.resolve(...params) : Void.endless;

  fail = (...params) =>
    !this.stale ? Promise.reject(...params) : Void.endless;

  check = (promise) => {
    const { succeed, fail } = this;

    return promise.then(succeed).catch(fail);
  };
}

export const fail = assign({
  error: (_, { data: { message: error } }) => error,
});

export const machine = () =>
  createMachine({
    initial: IDLE,
    states: {
      [PENDING]: {
        invoke: {
          onDone: { target: FULFILLED, actions: [succeed] },
          onError: { target: REJECTED, actions: [fail] },
          src,
        },
      },
      [IDLE]: { on: { [RESOLVE]: PENDING } },
      [FULFILLED]: { on: { [RESOLVE]: PENDING }, type: 'final' },
      [REJECTED]: { on: { [RESOLVE]: PENDING }, type: 'final' },
    },
  });

export const src = (_, { promise }) => promise;

export const succeed = assign({ data: (_, { data }) => data });
