import React from 'react';
import { SearchBarInputWrapper } from './../Styled/styled';
import { SearchBarInput } from './../Styled/styled';

class SearchBar extends React.Component {
  render() {
    return (
      <SearchBarInputWrapper onSubmit={this.props.searchPosts}>
        <SearchBarInput
          className="searchBarInput"
          placeholder="&#x1F50D; Search"
          value={this.props.searchInput}
          onChange={this.props.handleSearchInput}
        />
      </SearchBarInputWrapper>
    );
  }
}

export default SearchBar;
