import React,{useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import Detail from "../../components/Detail/Detail";
import './DetailPage.css';


function DetailPage({type}){
 const { id } = useParams();
 const [item, setItem] = useState(null);
 console.log(type);
 useEffect(() => {
   fetch(`http://localhost:3001/${type}/${id}`||`/api/${type}/${id}`)
     .then(response => response.json())
     .then(data => {
       if (!id) {
         if (data.length > 0) {
           setItem(data[0]);
         }
       } else {
         setItem(data);
       }
     })
     .catch(error => console.error('Error:', error));
 }, [type, id]);

// useEffect(() => {
//     console.log('id: '+id);
//     console.log('type: '+type);
//     fetch(`/api/${type}/${id}`)
//          .then(response => response.json())
//      .then(data => {
//        if (!id) {
//          if (data.length > 0) {
//            setItem(data[0]);
//          }
//        } else {
//          setItem(data);
//        }
//      })
//      .catch(error => console.error('Error:', error));
//  }, [type, id]);

 if (!item) {
   return <div>Sorry something wrong .... T^T</div>;
 }
 return (
  <div className="container">
  <div className="detailInfo-container">
    <Detail
      img={item.img}
      title={item.title}
      type={item.type}
      year={item.year}
      description={item.description}
      rentPrice={item.rentPrice}
      buyPrice={item.buyPrice}
    />
  </div>
  <div className="image-background">
    <img src={`${item.background}`} alt="background" className="rightImg"/>
    </div>
</div>

  
 );
}


export default DetailPage;

