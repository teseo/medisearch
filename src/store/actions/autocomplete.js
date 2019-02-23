import { AUTOCOMPLETE_UPDATE_FULFILLED, AUTOCOMPLETE_UPDATE_START } from "./types";

export const updateSuggestions = suggestions => dispatch => {
  dispatch({
    type: AUTOCOMPLETE_UPDATE_START
  });
  dispatch({
    type: AUTOCOMPLETE_UPDATE_FULFILLED,
    payload: {
      suggestions: suggestions
    }
  });
};
