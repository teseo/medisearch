import React, { Component } from "react";
import autoBind from "react-autobind";
import SearchBar from "./../SearchBar";
import styles from "./../SearchBar/SearchBar.module.css";
import questions from "./../SearchBar/questions.json";
import styled from "styled-components";

const MediSearchContainer = styled.div``;
const SuggestionRenderContainer = styled.span``;

class MediSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      suggestions: []
    };

    autoBind(this, "handleChange", "handleClear", "handleSelection");
  }

  handleClear() {
    this.setState({
      suggestions: []
    });
  }

  handleChange(input) {
    this.setState({
      suggestions: questions.filter(word => word.includes(input))
    });
  }

  handleSelection(value) {
    if (value) {
      console.info(`Selected "${value}"`);
    }
  }

  handleSearch(value) {
    if (value) {
      console.info(`Searching "${value}"`);
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
          suggestions={this.state.suggestions}
          suggestionRenderer={this.suggestionRenderer}
          styles={styles}
        />
      </MediSearchContainer>
    );
  }
}

export default MediSearch;
