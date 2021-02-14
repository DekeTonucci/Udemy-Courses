import React, { useState } from 'react';

const SearchBar = ({onFormSubmit}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const onInputChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(searchTerm)
  }

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Video Search:</label>
          <input type="text"
          value={searchTerm}
          onChange={onInputChange} />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
