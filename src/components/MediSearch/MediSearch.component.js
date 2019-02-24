import React, { Component } from "react";
import PropTypes from "prop-types";

class MediSearch extends Component {
  render() {
    return (
      <form
        className="form"
        data-name="Email Form"
        id="emaila-form"
        name="emaila-form"
      >
        <input
          className="search w-input"
          data-name="Name"
          id="name"
          maxLength="256"
          name="name"
          placeholder="Search for your questions here..."
          type="text"
        />
        <a
          className="search-button w-button"
          href="http://localhost:3000/#results"
          onClick={e => {
            e.preventDefault();
            this.props.performRemoteSearch("test");
          }}
        >
          Search
        </a>
      </form>
    );
  }
}

MediSearch.propTypes = {
  records: PropTypes.array,
  suggestions: PropTypes.array,
  performRemoteSearch: PropTypes.func.isRequired,
  clearSearchResults: PropTypes.func.isRequired,
  updateSuggestions: PropTypes.func.isRequired
};

export default MediSearch;
