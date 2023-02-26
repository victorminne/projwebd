import React, { useState, useEffect } from 'react';
import './highlight.css';

const HighlightCards = () => {
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    const fetchObjects = async () => {
      const response = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/search?q=%27%27&isHighlight=true');
      const data = await response.json();
      const objectIDs = data.objectIDs.slice(0, 12); // Limit to 10 objects
      const objectDetails = await Promise.all(
        objectIDs.map(async (objectID) => {
          const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`);
          const data = await response.json();
          return data;
        })
      );
      setObjects(objectDetails);
    };
    fetchObjects();
  }, []);

  return (
    <div>
      <br />
      <h1 className='hihglight-title'>Highlighted Items </h1>
      <div className="highlight-cards">
        {objects.map((object) => (
          <a key={object.objectID} href={`/detail/${object.objectID}`}>
          <div key={object.objectID} className="highlight-card">
            <h3 className="highlight-card-title">{object.title}</h3>
            <img src={object.primaryImageSmall} alt={object.title} className="highlight-card-image"/>
          </div>
          </a>
        ))}
        
      </div>
    </div>
  );
};

export default HighlightCards;
