import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Detail from "../Detail/Detail";


function SearchResult() {
  const { searchTerm } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/search/${encodeURIComponent(searchTerm)}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);  
        setSearchResults(data.body[0][0]);  
      })
      .catch(error => console.error('Error fetching search results:', error));
  }, [searchTerm]);

  if (!searchResults) {
    return <div>Sorry we currently don't have this movie/show .... T^T</div>;
  }
  return (
    <div className="container">
    <div className="detailInfo-container">
      <Detail
        smallPoster={searchResults.smallPoster}
        title={searchResults.title}
        description={searchResults.description}
        priceRent={searchResults.priceRent}
        pricePurchase={searchResults.pricePurchase}
      />
    </div>
    <div className="image-background">
      <img src={`${searchResults.largePoster}`} alt="background" className="rightImg"/>
      </div>
  </div>
 
  );
}

export default SearchResult;
