import ApiService from "../../utils";
import {
  REMOTE_SEARCH_FULFILLED,
  REMOTE_SEARCH_START,
  CLEAR_SEARCH_RESULT,
  CLEAR_SEARCH_RESULT_FULFILLED
} from "./types";

export const performRemoteSearch = filters => async dispatch => {
  dispatch({
    type: REMOTE_SEARCH_START
  });
  const limit = 138;
  const offset = 0;
  const nhsData = await ApiService.performSearch(filters, offset, limit);

  dispatch({
    type: REMOTE_SEARCH_FULFILLED,
    payload: {
      records: nhsData.result ? nhsData.result.records : []
    }
  });
};

export const clearSearchResults = () => dispatch => {
  dispatch({
    type: CLEAR_SEARCH_RESULT
  });

  dispatch({
    type: CLEAR_SEARCH_RESULT_FULFILLED,
    payload: {
      records: []
    }
  });
};
