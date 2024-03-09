import React from "react";
import './Detail.css';

function DetailIfno({img,title,type,year,description,rentPrice, buyPrice}){
    const handleRent=()=>{
        alert("Customer rent with price: "+ rentPrice);
    }
    const handleBuy=()=>{
        alert("Customer buy with price: "+ buyPrice);
    }

    return(
        <div className="detailContainer">
            <div className="movieimg-container">
            <img src={`${img}`} className='movieimg'/>
            </div>
            <div>
            <h1 className="detailTitle">{title}</h1>
            <div className="category-container">
            {type.map(a=>(
                <p className="category">{a}  |</p>
            ))}
           
            <p className="category">{year}</p>
            </div>

            {/* Synopsis */}
            <p className="description">{description}</p>
            <div className="btn-container">
            <button className="rentBtn" onClick={handleRent}>Rent: {rentPrice}</button>
            <button className="buyBtn" onClick={handleBuy}>Buy: {buyPrice}</button>
            </div>
            </div>

        </div>
    )

}
export default DetailIfno;