import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${searchTerm}`);
    const data = await response.json();

    const objectDetails = await Promise.all(
      data.objectIDs.slice(0, 12).map(async (objectId) => {
        const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`);
        return response.json();
      })
    );
    setSearchResults(objectDetails);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <div className="topnav">
        <a className="active" href="/">Home</a>
        <a href="/search">Search</a>
        <a href="/contact">Contact</a>
        <div className="search-container">
          <form onSubmit={handleSearchSubmit}>
            <input type="text" value={searchTerm} onChange={handleInputChange} placeholder="search then press enter" />
          </form>
        </div>
      </div> 
    
      <br />
      {searchResults.length > 0 && <h1 className='hihglight-title'>Search Results for "{searchTerm}"</h1>}
      <div className="search-cards">
        <div className="search-cards">
          {searchResults.map((result) => (
            <a key={result.objectID} href={`/detail/${result.objectID}`}>
              <div key={result.objectID} className="search-card">
                <h3 className="search-card-title">{result.title}</h3>
                <img src={result.primaryImageSmall} alt={result.title} className="search-card-image"/>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
