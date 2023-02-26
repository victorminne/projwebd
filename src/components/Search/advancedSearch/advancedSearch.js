import React, { useState } from 'react';
import './advancedSearch.css';


const AdvancedSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchSubmit = async (event) => {

    event.preventDefault();

    const generatelink = () => {
      const departmentButton = document.getElementById("department-select").value;
      if (departmentButton) {
        link = `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${searchTerm}&departmentId=${departmentButton}`; 
        if (document.getElementById("tag-select").value === "true") {link+=`&tags=true`}
        if (document.getElementById("artist-or-culture-select").value === "true") {link+=`&artistOrCulture=true`}
        if (document.getElementById("geolocation-select").value !== "none") {link+=`&geoLocation=${document.getElementById("geolocation-select").value}`}
      }
      else  link = `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${searchTerm}`;
    }

    let link = "";
    generatelink();
    const response = await fetch(link);
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
    <div className='Search-content'>
      <div className="Advanced-search-container">
        <form onSubmit={handleSearchSubmit}>
          <input type="text" value={searchTerm} onChange={handleInputChange} placeholder="search then press enter" />
        </form>
      </div>


      <div className='buttons'>
        <br />
        <label htmlFor="department-select">Select a department:</label>
        <select id="department-select">
          <option value="">All Departments</option>
          <option value="1">American Decorative Arts</option>
          <option value="2">American Paintings and Sculpture</option>
          <option value="3">Ancient Near Eastern Art</option>
          <option value="4">Arms and Armor</option>
          <option value="5">Arts of Africa, Oceania, and the Americas</option>
          <option value="6">Asian Art</option>
          <option value="7">The Cloisters</option>
          <option value="8">The Costume Institute</option>
          <option value="9">Drawings and Prints</option>
          <option value="10">Egyptian Art</option>
        </select>
      </div>


      <div className='buttons'>
        <br />
        <label htmlFor="tag-select">search by:</label>
        <select id="tag-select">
          <option value="false">title</option>
          <option value="true">tags</option>
        </select>
      </div>

      <div className='buttons'>
        <br />
        <label htmlFor="artist-or-culture-select">match :</label>
        <select id="artist-or-culture-select">
          <option value="false">everything</option>
          <option value="true">Artist Or culture</option>
        </select>
      </div>

      <div className='buttons'>
        <br />
        <label htmlFor="geolocation-select">geolocation research:</label>
        <select id="geolocation-select">
          <option value="none">everywhere</option>
          <option value="Europe">Europe</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Oceania">Oceania</option>
          <option value="Americas">Americas</option>
          <option value="France">France</option>
          <option value="Germany">Germany</option>
          <option value="Italy">Italy</option>
          <option value="Spain">Spain</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="United States">United States</option>
          <option value="Canada">Canada</option>
          <option value="Mexico">Mexico</option>
          <option value="South America">South America</option>
          <option value="Central America">Central America</option>
          <option value="Caribbean">Caribbean</option>
          <option value="China">China</option>


        </select>
      </div>





      <br />
      {searchResults.length > 0 && <h1>Search Results for "{searchTerm}"</h1>}
      <div className="search-cards">
        {searchResults.map((result) => (
          <a href={`/detail/${result.objectID}`} key={result.objectID}>
          <div key={result.objectID} className="search-card">
            <h3 className="search-card-title">{result.title}</h3>
            <img src={result.primaryImageSmall} alt={result.title} className="search-card-image"/>
          </div>
          </a>
        ))}
      </div>
    </div>
      );
};

export default AdvancedSearchBar;