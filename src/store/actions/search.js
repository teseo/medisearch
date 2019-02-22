import ApiService from "../../utils";
import { REMOTE_SEARCH_FULFILLED, REMOTE_SEARCH_START } from "./types";

export const performRemoteSearch = (filters) => async dispatch => {
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
