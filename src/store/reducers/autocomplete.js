import { AUTOCOMPLETE_UPDATE_FULFILLED } from "../actions/types";

export const initialState = {
  suggestions: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTOCOMPLETE_UPDATE_FULFILLED:
      return {
        ...state,
        suggestions: action.payload.suggestions
      };
    default:
      return state;
  }
}
