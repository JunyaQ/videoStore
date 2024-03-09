import React, { useState } from 'react';
import {Container,Nav, Navbar,Form, Button} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { RiMovie2Fill } from "react-icons/ri";
import './Navigation.css';


function Navigation(){
    return(
        <div>
        <Navbar className='navigation'>
          <Container>
          <Nav className='justify-content-front '>
            <Navbar.Brand href='/'><RiMovie2Fill size={40} color='white'/></Navbar.Brand>
            </Nav>
            <Nav className="me-auto navlinks navphone">
              <Nav.Link href='/movies' className='navlinks'>Moives</Nav.Link>
              <Nav.Link href='/tvs' className='navlinks'>TV</Nav.Link>
              <Nav.Link href='/free' className='navlinks'>Free</Nav.Link>     
            </Nav>
            
            <Nav className='justify-content-end navlinks'>
            <Nav.Link  className='navlinks' href='/loginSignup'> Member </Nav.Link>
           
            </Nav>
          </Container>
        </Navbar>
       
      </div>
    );
}
export default Navigation;