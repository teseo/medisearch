import { REMOTE_SEARCH_FULFILLED } from "../actions/types";

export const initialState = {
  records: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REMOTE_SEARCH_FULFILLED:
      return {
        ...state,
        records: action.payload.records
      };
    default:
      return state;
  }
}
