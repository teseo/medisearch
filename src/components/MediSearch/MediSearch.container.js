import { performRemoteSearch } from "../../store/actions/search";
import { connect } from "react-redux";

import MediSearch from "./MediSearch.component";

const mapStateToProps = state => ({
  records: state.search.records
});
const mapDispatchToProps = dispatch => ({
  performRemoteSearch: value => dispatch(performRemoteSearch(value))
});
export default connect(mapStateToProps, mapDispatchToProps)(MediSearch);
