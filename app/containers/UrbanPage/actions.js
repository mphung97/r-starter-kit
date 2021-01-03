import {
  FETCH_URBAN,
  FETCH_URBAN_SUCCESS,
  FETCH_URBAN_ERROR,
} from './constants';

export function fetchUrbansPending(pagination, filters, sorter) {
  return {
    type: FETCH_URBAN,
    pagination,
    filters,
    sorter,
  };
}

export function fetchUrbansSuccess(payload) {
  return {
    type: FETCH_URBAN_SUCCESS,
    payload,
  };
}

export function fetchUrbansError(error) {
  return {
    type: FETCH_URBAN_ERROR,
    error,
  };
}
