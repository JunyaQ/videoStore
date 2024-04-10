import React from "react";
import './Detail.css';

function DetailIfno({smallPoster,title,description, priceRent, pricePurchase}){
    const handleRent=()=>{
        alert("Customer rent with price: "+ priceRent);
    }
    const handleBuy=()=>{
        alert("Customer buy with price: "+ pricePurchase);
    }

    return(
        <div className="detailContainer">
            <div className="movieimg-container">
            <img src={`${smallPoster}`} className='movieimg'/>
            </div>
            <div>
            <h1 className="detailTitle">{title}</h1>
            {/* <div className="category-container">
            {type.map(a=>(
                <p className="category">{a}  |</p>
            ))}
           
            <p className="category">{year}</p>
            </div> */}

            {/* Synopsis */}
            <p className="description">{description}</p>
            <div className="btn-container">
            <button className="rentBtn" onClick={handleRent}>Rent: {priceRent}</button>
            <button className="buyBtn" onClick={handleBuy}>Buy: {pricePurchase}</button>
            </div>
            </div>

        </div>
    )

}
export default DetailIfno;