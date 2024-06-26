import React,{useState,useEffect} from 'react';
import { Container } from "react-bootstrap";
import TabOptions from '../../components/TabOptions/TabOptions';
function TvPage() {
    const [tvs, setTvs] = useState([]);

    //local
    useEffect(() => {
        fetch('http://localhost:8080/tvs')
          .then(res=> res.json())
          .then(data =>{
            console.log(data.body);
            setTvs(data.body)
          })
          .catch(err => console.log(`Error from tvpage.jsx: ${err}`));
      }, []);

    //deploy
    // useEffect(()=>{
    //     fetch('/api/tvs')
    //     .then((res)=>{
    //       return res.json()
    //     })
    //     .then(json=>{    
    //           setTvs(json);
    //     })
    //     .catch((err)=>{
    //         console.log(`Error ${err}`);
    //     })
    // },[])

    return(
        <Container fluid>

        <body>
            <TabOptions dbdata={tvs} type="tvs"/>
        </body>

        </Container>
    )
}
export default TvPage;