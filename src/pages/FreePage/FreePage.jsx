import React,{useState,useEffect}  from 'react';
import Card from '../../components/Card/Card';
import { Link } from 'react-router-dom';
import './FreePage.css';

function FreePage() {
    function getDate() {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        return `${month}/${date}/${year}`;
      }
      const [films, setFilms] = useState([]);

      // for local
      useEffect(() => {
        fetch('http://localhost:8080/movies')
          .then(res=> res.json())
          .then(data =>{
            console.log(data.body);
            setFilms(data.body)
          })
          .catch(err => console.log(`Error from freepage.jsx: ${err}`));
      }, []);
    
    // for deploy
  //   useEffect(() => {
  //     fetch('/api/movies')
  //     .then(response => response.json())
  //     .then(data => setFilms(data))
  //     .catch(error => console.error('Error:', error));
  // }, []);
      const currentDate = getDate();
      
    //  only have 15 movies
      function getMovienumber(){
        const date = new Date().getDate();
        const reminder = date%14;
        return reminder;
      }
      const movienum = getMovienumber();
      console.log(movienum);

    return(

        <div>
    
        <body>
        <h1 className="title">TODAY ONLY! </h1>
        <h1 className='freeTitle'>Watch it for free</h1>
        <h5 className="freeTitle">{currentDate}</h5>
        <Link  className= "cardName" to={`/movie/${movienum}`}>
        <Card pic={films?.[movienum-1]?.smallPoster} name={films?.[movienum-1]?.title}/>
        </Link>
        </body>

      
        </div>
    )
}
export default FreePage;