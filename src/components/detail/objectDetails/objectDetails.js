import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './objectDetails.css';

const ObjectDetails = () => {
  const { objectID } = useParams();
  const [object, setObject] = useState(null);

  useEffect(() => {
    const fetchObject = async () => {
      const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`);
      const data = await response.json();
      setObject(data);
    };
    fetchObject();
  }, [objectID]);

  useEffect(() => {
    if (object) {
      const fetchWiki = async () => {
        const search = object.artistDisplayName || object.title;
        const response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro&explaintext&redirects=1&titles=${encodeURIComponent(search)}&orinamespace=0&origin=*`);
        const data = await response.json();
        const pages = data.query.pages;
        const page = Object.values(pages)[0];
        console.log(page);
        setObject((prevObject) => ({
          ...prevObject,
          wikiText: page.extract,
        }));
      };
      fetchWiki();
    }
  }, [object]);

  if (!object) {
    return null;

  }

  return (
    <div className="object-details">
      <h2>{object.title}</h2>
        { object.artistDisplayName.length > 0 && <p><span>Artist: {object.artistDisplayName}</span></p>}
        { object.objectDate.length > 0 && <p><span>Year: {object.objectDate}</span></p>}
        { object.country.length > 0 && <p><span>Country: {object.country}</span></p>}
        { object.city.length > 0 && <p><span>City: {object.city}</span></p>}
        { object.department.length > 0 && <p><span>Department: {object.department}</span></p>}
        { object.dimensions.length > 0 && <p><span>Dimensions: {object.dimensions}</span></p>}
        { object.medium.length > 0 && <p><span>Medium: {object.medium}</span></p>}
      {object.wikiText && <p>{object.wikiText}</p>}
      <img src={object.primaryImage} alt={object.title} className="object-details-image" />
    </div>
  );
};

export default ObjectDetails;
