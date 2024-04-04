import React,{useState,useEffect} from 'react';
import {Container } from "react-bootstrap";
import TabOptions from '../../components/TabOptions/TabOptions';

function MoviePage() {
    const [films, setFilms] = useState([]);

    //local
    useEffect(() => {
        fetch('http://localhost:8080/movies')
          .then(res=> res.json())
          .then(data =>{
            console.log(data.body);
            setFilms(data.body)
          })
          .catch(err => console.log(`Error from moviepage.jsx: ${err}`));
      }, []);

    //deploy
    // useEffect(()=>{
    //     fetch('/api/movies')
    //     .then((res)=>{
    //       return res.json()
    //     })
    //     .then(json=>{    
    //           setFilms(json);
    //     })
    //     .catch((err)=>{
    //         console.log(`Error ${err}`);
    //     })
    // },[])

    return(
        <Container fluid>

        <body>
            <TabOptions dbdata={films} type="movies"/>
        </body>
        
    
        </Container>
    )
}
export default MoviePage;