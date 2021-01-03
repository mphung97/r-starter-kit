import produce from 'immer';
import {
  FETCH_URBAN,
  FETCH_URBAN_SUCCESS,
  FETCH_URBAN_ERROR,
} from './constants';

export const initialState = {
  pending: false,
  data: [],
  error: null,
};

/* eslint-disable default-case, no-param-reassign */
const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_URBAN:
        draft.pending = true;
        break;
      case FETCH_URBAN_SUCCESS:
        draft.pending = false;
        draft.data = action.payload;
        break;
      case FETCH_URBAN_ERROR:
        draft.pending = false;
        draft.error = action.error;
        break;
    }
  });

export default reducer;
