import React, { Component } from 'react';

class SearchBar extends Component {
  state = { searchTerm: 'javascript es6' }

  onInputChange = (event) => {
    this.setState({ searchTerm: event.target.value })
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.searchTerm)
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search:</label>
            <input type="text"
            value={this.state.searchTerm}
            onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
