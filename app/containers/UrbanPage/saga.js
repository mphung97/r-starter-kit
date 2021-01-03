/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { get } from 'utils/request';

import { fetchUrbansSuccess, fetchUrbansError } from './actions';
import { FETCH_URBAN } from './constants';

const baseURL = 'http://localhost:3004';

/**
 * Github repos request/response handler
 */
export function* getUrbans({ pagination, filters = {}, sorter = {} }) {
  const { current, pageSize } = pagination;
  const requestURL = `${baseURL}/urbans?_page=${current}&_limit=${pageSize}`;
  try {
    // Call our request helper (see 'utils/request')
    const urbans = yield call(get, requestURL);
    yield put(fetchUrbansSuccess(urbans.data));
  } catch (err) {
    yield put(fetchUrbansError(err));
  }
}

export default function* saga() {
  yield takeLatest(FETCH_URBAN, getUrbans);
}
