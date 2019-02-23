import React, { Component } from "react";
import autoBind from "react-autobind";
import SearchBar from "./../SearchBar";
import styles from "./../SearchBar/SearchBar.module.css";
import questions from "./../SearchBar/questions.json";
import styled from "styled-components";
import PropTypes from "prop-types";
import data from "./dataSource";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];
const MediSearchContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: yellowgreen;
`;
const TopHeaderContainer = styled.div`
  display: flex;
  height: 64px;
  flex: 1;
  background-color: #ffffff;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
`;
const SearchCriteriaContainer = styled.div`
  display: flex;
  flex-direction: row;  
  background-color: orchid;
  justify-content: center;
  align-items: flex-start;
  width: 706px;
`;
const SearchTopContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #183861;
`;
const SearchBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: orange;
`;
const SearchFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: orange;
  height: 72px;
  justify-content: center;
  align-items: center;
`;
const SearchResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 328px;
  background-color: beige;
  justify-content: center;
  align-items: center;
`;
const SearchResultText = styled.text``;
const WelcomeText = styled.text`
  font-size: 40px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: 0.7px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 48px;
  margin-top: 78px;
`;
const SuggestionRenderContainer = styled.span`
  font-size: 12px;
`;

class MediSearch extends Component {
  state = {
    selectedOption: null
  };
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
  handleDateChange = selectedOption => {
    this.setState({ selectedOption });
  };
  handleChange(input) {
    this.props.updateSuggestions(
      questions.filter(word => word.includes(input))
    );
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
    const responseReady = this.props.records.length > 0;
    const { selectedOption } = this.state;

    let result;
    if (responseReady) {
      result = this.props.records.map(record => {
        return (record.AttendanceGreater8hrs &&
          <SearchResultText>
            Total: {record.AttendanceGreater8hrs}
          </SearchResultText>
        );
      });
    }
    return (
      <MediSearchContainer>
        <SearchTopContainer>
          <TopHeaderContainer>
            <SearchResultText>{"Top Header Container"}</SearchResultText>
          </TopHeaderContainer>
          <WelcomeText>{"Hi. How can we help?"}</WelcomeText>
          <SearchCriteriaContainer>
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
            <Select
              value={selectedOption}
              onChange={this.handleDateChange}
              options={options}
            />
          </SearchCriteriaContainer>
        </SearchTopContainer>
        <SearchBottomContainer>
          <SearchFilterContainer>
            <SearchResultText>{"Search Filter Container"}</SearchResultText>
          </SearchFilterContainer>
          <SearchResultContainer>
            <SearchResultText>{"Search Result Container"}</SearchResultText>

            {responseReady && result}
          </SearchResultContainer>
        </SearchBottomContainer>
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
