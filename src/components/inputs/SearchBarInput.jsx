import React from 'react';
import './SearchBarInput.css';



const SearchBarInput = ({ onSearch, searchText, setSearchText, selectedServer, setSelectedServer }) => {


  return (
    <div className='search-bar-container'>
      <input type="text" className='form-input' value={searchText} onChange={(e) => setSearchText(e.target.value)} />
        <select className="form-input" aria-label="Default select example" value={selectedServer} onChange={(e)=> setSelectedServer(e.target.value)}>
            <option value="imgur">Imgur</option>
            <option value="pexels">Pexels</option>
        </select>
      <button onClick={() => onSearch()} className='btn'>Search</button>
    </div>
  );
};


export default SearchBarInput;
