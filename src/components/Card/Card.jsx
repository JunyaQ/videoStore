import React from "react";
import {Col} from "react-bootstrap";
import './Card.css';

function Card({pic, name}){
    return(
        <div className="showCard">
            <Col className="d-flex justify-content-center">
            <img src={pic} className='cardImg'/> 
            </Col>
            <h2 className="cardName">{name}</h2>
        </div>
    )
}
export default Card;