import React, { Component } from "react";
import autoBind from "react-autobind";
import SearchBar from "./components/SearchBar";
import styles from "./SearchBar.module.css";
import words from "./words.json";

class App extends Component {
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
      suggestions: words.filter(word => word.startsWith(input))
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

  suggestionRenderer(suggestion, searchTerm) {
    return (
      <span>
        <span>{searchTerm}</span>
        <strong>{suggestion.substr(searchTerm.length)}</strong>
      </span>
    );
  }

  render() {
    return (
      <div className="App">
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
      </div>
    );
  }
}

export default App;
