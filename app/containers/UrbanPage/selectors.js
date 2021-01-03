/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectUrbans = state => state.urbans || initialState;

const makeSelectData = createSelector(
  selectUrbans,
  urbans => urbans.data,
);

const makeSelectPending = createSelector(
  selectUrbans,
  urbans => urbans.pending,
);

const makeSelectError = createSelector(
  selectUrbans,
  urbans => urbans.error,
);

export { selectUrbans, makeSelectData, makeSelectPending, makeSelectError };
