import React, { Component } from "react";
import autoBind from "react-autobind";
import SearchBar from "./../SearchBar";
import styles from "./../SearchBar/SearchBar.module.css";
import questions from "./../SearchBar/questions.json";
import styled from "styled-components";
import PropTypes from "prop-types";
import data from "./dataSource";

const MediSearchContainer = styled.div``;
const SearchResultContainer = styled.div``;
const SearchResultText = styled.text``;
const SuggestionRenderContainer = styled.span`
  font-size: 12px;
`;

class MediSearch extends Component {
  constructor(props) {
    super(props);
    autoBind(
      this,
      "handleChange",
      "handleSearch",
      "handleClear",
      "handleSelection"
    );
  }

  handleClear() {
    this.props.updateSuggestions([]);
    this.props.clearSearchResults();
  }

  handleSearch(inputValue) {
    this.props.performRemoteSearch(data[inputValue]);
  }

  handleChange(input) {
    this.props.updateSuggestions(questions.filter(word => word.includes(input)));
  }

  handleSelection(value) {
    if (value) {
      // console.info(`Selected "${value}"`);
    }
  }

  suggestionRenderer(suggestion) {
    return (
      <SuggestionRenderContainer>
        <strong>{suggestion}</strong>
      </SuggestionRenderContainer>
    );
  }

  render() {
    return (
      <MediSearchContainer>
        <SearchBar
          autoFocus
          renderClearButton
          renderSearchButton
          placeholder="select an SAT word"
          onChange={this.handleChange}
          onClear={this.handleClear}
          onSelection={this.handleSelection}
          onSearch={this.handleSearch}
          suggestions={this.props.suggestions}
          suggestionRenderer={this.suggestionRenderer}
          styles={styles}
        />
        {this.props.records.length > 0 && (
          <SearchResultContainer>
            <SearchResultText>
              Total: {this.props.records[0].AttendanceGreater8hrs}
            </SearchResultText>
          </SearchResultContainer>
        )}
      </MediSearchContainer>
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
