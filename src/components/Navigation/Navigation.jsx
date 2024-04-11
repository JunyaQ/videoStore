import React, { useState } from 'react';
import { Container, Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { RiMovie2Fill } from "react-icons/ri";
import './Navigation.css';
import { useUser } from "../userContext";

function Navigation() {
    const { user } = useUser();
    const [searchTerm, setSearchTerm] = useState('');

    // Placeholder function for handling search
    const handleSearch = (event) => {
        event.preventDefault();
        console.log(searchTerm);
        // Implement search functionality here
    };

    return (
        <div>
            <Navbar className='navigation' expand="lg">
                <Container>
                    <Nav className='justify-content-front'>
                        <Navbar.Brand href='/'><RiMovie2Fill size={40} color='white' /></Navbar.Brand>
                    </Nav>
                    <Nav className="me-auto navlinks navphone">
                        <Nav.Link href='/movies' className='navlinks'>Movies</Nav.Link>
                        <Nav.Link href='/tvs' className='navlinks'>TV</Nav.Link>
                        <Nav.Link href='/free' className='navlinks'>Free</Nav.Link>
                    </Nav>
                    
                    {/* Search Form */}
                    <Form className="d-flex" onSubmit={handleSearch}>
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                        />
                        <button type="submit" className="search-btn">
                            <FaSearch color="white" />  
                        </button>
                    </Form>

                    <Nav className='justify-content-end navlinks'>
                        <Nav.Link className='navlinks' href='/loginSignup'>
                            {user ? user.firstName : 'Member'}
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navigation;
