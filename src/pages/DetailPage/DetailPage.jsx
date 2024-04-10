import React,{useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import Detail from "../../components/Detail/Detail";
import './DetailPage.css';


function DetailPage({type}){
 const { id } = useParams();
 const [item, setItem] = useState(null);
 //local
 useEffect(() => {
  const fetchMovieDetails = async () => {
    try {
      const response = await fetch(`http://localhost:8080/movie/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setItem(data.body[0]); 
      console.log(item);
    } catch (error) {
      console.error("Fetching movie details failed:", error);
    }
  };

  if (id) {
    fetchMovieDetails(); 
  }
}, [id]);



 if (!item) {
   return <div>Sorry something wrong .... T^T</div>;
 }
 return (
  <div className="container">
  <div className="detailInfo-container">
    <Detail
      smallPoster={item.smallPoster}
      title={item.title}
      description={item.description}
      priceRent={item.priceRent}
      pricePurchase={item.pricePurchase}
    />
  </div>
  <div className="image-background">
    <img src={`${item.largePoster}`} alt="background" className="rightImg"/>
    </div>
</div>

  
 );
}


export default DetailPage;

