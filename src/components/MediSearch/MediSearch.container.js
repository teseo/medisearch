import {
  performRemoteSearch,
  clearSearchResults
} from "../../store/actions/search";
import { updateSuggestions } from "../../store/actions/autocomplete";
import { connect } from "react-redux";

import MediSearch from "./MediSearch.component";

const mapStateToProps = state => ({
  records: state.search.records,
  suggestions: state.autocomplete.suggestions
});
const mapDispatchToProps = dispatch => ({
  performRemoteSearch: value => dispatch(performRemoteSearch(value)),
  clearSearchResults: () => dispatch(clearSearchResults()),
  updateSuggestions: suggestions => dispatch(updateSuggestions(suggestions))
});
export default connect(mapStateToProps, mapDispatchToProps)(MediSearch);
