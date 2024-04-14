import React,{useState,useEffect} from 'react';
import {Container,Row, Col} from "react-bootstrap";
import { Link } from 'react-router-dom';
import '../Movies/Movies.css';


function Tvs(){
    const [tvs, setTvs] = useState([]);

    //deploy
    useEffect(() => {
        fetch('http://localhost:8080/featuredTvs')
          .then(res=> res.json())
          .then(data =>{
            console.log(data.body);
            setTvs(data.body)
          })
          .catch(err => console.log(`Error from tvs.jsx: ${err}`));
      }, []);

    //local
    // useEffect(() => {
    //     fetch('http://localhost:3001/tvs'||'/api/tvs')
    //     .then(response => response.json())
    //     .then(data => setTvs(data))
    //     .catch(error => console.error('Error:', error));
    // }, []);
 
    return(
        <div id='Tvs' className='movies'>
            <Container fluid>
            <div className='option-container'>
       <h2 className='mainpageTitle'>Featured Tv Shows</h2>
       <Link to="/tvs">
       <button className='optionBtn'> View All</button>
       </Link>
        </div>
            <Row md={6} className='justify-content-center'>
           {tvs.slice(0,4).map(tv => (
             <Col className="d-flex justify-content-center movieSection">
            <Link to={`/movie/${tv.id}`}>
            <img src= {`${tv.smallPoster}`} className='tvmovieimg' /> 
            </Link>
            </Col>
        ))}
            </Row>
            </Container>
       
      </div>
    );
}
export default Tvs;