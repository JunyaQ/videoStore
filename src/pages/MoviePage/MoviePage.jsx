import React,{useState,useEffect} from 'react';
import {Container } from "react-bootstrap";
import TabOptions from '../../components/TabOptions/TabOptions';

function MoviePage() {
    const [films, setFilms] = useState([]);

    //local
    useEffect(()=>{
        fetch("http://localhost:3001/movies"||'api/movies')
        .then((res)=>{
          return res.json()
        })
        .then(json=>{    
              setFilms(json);
        })
        .catch((err)=>{
            console.log(`Error ${err}`);
        })
    },[])

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