import React,{useState,useEffect} from "react";
import { Container,Row, Col, Image } from "react-bootstrap";
import './Content.css';
function Content(){
  const [films, setFilms] = useState([]);

  //local
  // useEffect(() => {
  //     fetch('http://localhost:3001/movies'||'api/movies')
  //     .then(response => response.json())
  //     .then(data => setFilms(data))
  //     .catch(error => console.error('Error:', error));
  // }, []);

  //deploy
//   useEffect(() => {
//     fetch('/api/movies')
//     .then(response => response.json())
//     .then(data => setFilms(data))
//     .catch(error => console.error('Error:', error));
// }, []);

  const url1 = films?.[1]?.img;
  const url2 = films?.[4]?.img;
  const url3 = films?.[6]?.img;
  const url4 = films?.[10]?.img;

return(
<div>
<section className="content-section">
<Container fluid>
        <Row className="content-row">
          <Col className="text-column" md={2}>
            <div className="content-title">
              <h1>$5.99 <br />CINEMA <br />SPOTLIGHT</h1>
            </div>
          </Col>
          <Col md={2}>
            <img className="content-v" src={url1} alt="Movie 1"/>
          </Col>
          <Col md={2}>
            <img className="content-v" src={url2} alt="Movie 2"/>
          </Col>
          <Col md={2}>
            <img className="content-v" src={url3} alt="Movie 3"/>
          </Col>
          <Col md={2}>
            <img className="content-v" src={url4} alt="Movie 4"/>
          </Col>
          
        </Row>
      </Container>

      </section>
</div>

)
}
export default Content