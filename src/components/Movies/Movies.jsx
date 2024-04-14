import React,{useState,useEffect} from 'react';
import {Container,Row, Col} from "react-bootstrap";
import { Link } from 'react-router-dom';
import './Movies.css'






function Movies(){
    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/featuredMovies')
          .then(res=> res.json())
          .then(data =>{
            console.log(data.body);
            setFilms(data.body)
          })
          .catch(err => console.log(`Error from movie.jsx: ${err}`));
      }, []);
  
  
 
    return(
        <div id='Movies' className='movies'>
        <Container fluid>
        <div className='option-container'>
       <h2 className='mainpageTitle'>Featured Films</h2>
       <Link to="/movies">
       <button className='optionBtn'> View All</button>
       </Link>
        </div>
        <Row md={6} className='justify-content-center'>
       {films.slice(0,4).map(film => (
         <Col className="d-flex justify-content-center movieSection">
        <Link to={`/movie/${film.id}`}>
        <img src= {`${film.smallPoster}`} className='tvmovieimg' /> 
        </Link>
        </Col>
    ))}
        </Row>
        </Container>
   
  </div>
);
}
export default Movies;