import React from 'react';
import {Container,Col, Row} from "react-bootstrap";
import apple from '../../imgs/appleDownload.png';
import google from '../../imgs/googlePlay.png';
import { FaLinkedin,FaFacebookSquare,FaTwitterSquare,FaYoutubeSquare} from "react-icons/fa";
import './Footer.css';

function Footer(){

    return(
        <div>
            <Container fluid> 
                <Row className='download info justify-content-center' xs="auto">
                    <Col><a href="https://apple.com/ca/app-store/"><img src={apple} className='downloadimg'/></a></Col>
                    <Col><a href="https://play.google.com/store/games?hl=en&gl=US"><img src={google} className='downloadimg'/></a></Col>
                </Row>

                <Row className='info justify-content-center' md={3}>
                    <Col>
                    <ul className='infolist'>
                    <li className='fheading'>Watch</li>
                    <li><a href='/movies'>Movies</a></li>
                    <li><a href='/tvs'>TV</a></li>
                    <li><a href='/free'>Free</a></li>
                </ul>
                    </Col>
                <Col> 
                <ul className='infolist'>
                    <li className='fheading'>My Account</li>
                    <li><a href='/comingsoon'>Setting</a></li>
                    <li><a href='/comingsoon'>Manage Devices</a></li>
                </ul>
                </Col>
                <Col>
                <ul className='infolist'>
                    <li className='fheading'>Help</li>
                    <li><a href='/comingsoon'>About Us</a></li>
                    <li><a href='/comingsoon'>Contact Us</a></li>
                    <li><a href='/comingsoon'>Jobs</a></li>
                </ul>
                 </Col>
                
                
                <Row  className='media justify-content-center'>
                <Col xs="auto" className='medialogo'> 
                <a href='https://www.linkedin.com' target="_blank">
                     <FaLinkedin size={30} color='blue' />
                </a> </Col>
                <Col xs="auto" className='medialogo'> 
                <a href='https://www.facebook.com' target="_blank">                    
                <FaFacebookSquare size={30} color='blue'/> 
                </a></Col>
                <Col xs="auto" className='medialogo'> 
                <a href='https://www.twitter.com' target="_blank" >
                    <FaTwitterSquare size={30} color='lightblue'/> 
                </a>
                </Col>
                <Col xs="auto" className='medialogo'> 
                <a href='https://www.youtube.com' target="_blank">
                    <FaYoutubeSquare size={30} color='red'/>
                </a> 
                </Col>
                </Row>
                </Row>
            </Container>

        </div>
    )
    
}
export default Footer;