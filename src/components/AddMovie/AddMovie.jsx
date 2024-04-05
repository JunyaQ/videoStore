import React from "react";

function AddMovie(){
    const[movie, setMovie] = useState({
        price:"",
        title:"",
        description:"",
        isMovie:"",
        smallPoster:"",
        largePoster:"",
        priceRent:"",
        pricePurchase:"",
        isFeatured:""
    })
    const submitForm =(e)=>{
        fetch('http://localhost:8080/movies',{
            method: "POST",
            headers:{
                'Content-Type':'application/json'

            },
            body:{

            }
        })
        .then()
        .then()
        .catch(err=>console.log(`Err: ${err}`));
            
    }

    return(
       
        <div>
            {/* url encoded format */}
            <form action="localhost:8080/movies" method="POST" onSubmit={submitForm}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" value={movie.title} onChange={
                        setMovie({
                            ...movie,
                            title:event.target.value
                        })
                    }/>
                </div>

                <div>
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" id="description" value={movie.description} onChange={
                        setMovie({
                            ...movie,
                            description:event.target.value
                        })
                    }/>          
                    </div>

                <div>
                    <label htmlFor="price">Price</label>
                    <input type="text" name="price" id="price" value={movie.price} onChange={
                        setMovie({
                            ...movie,
                            price:event.target.value
                        })
                    }/>
                </div>

                <div>
                <label>Movie</label>
                <div>
                    <input type="radio" id="isMovieTrue" name="isMovie" value={true} onChange={
                          setMovie({
                            ...movie,
                            isMovie: event.target.value === 'true'
                        })
                    }/>
                    <label htmlFor="isMovieTrue">True</label>
                </div>
                <div>
                    <input type="radio" id="isMovieFalse" name="isMovie" value={false} checked onChange={
                         setMovie({
                            ...movie,
                            isMovie: event.target.value === 'false'
                        })
                    }/>
                    <label htmlFor="isMovieFalse">False</label>
                </div>
                </div>

                <div>
                    <label htmlFor="smallPoster">Small Poster</label>
                    <input type="text" name="smallPoster" id="smallPoster" value={movie.smallPoster} onChange={
                        setMovie({
                            ...movie,
                            smallPoster:event.target.value
                        })
                    }/>
                </div>

                <div>
                    <label htmlFor="largePoster">Large Poster</label>
                    <input type="text" name="largePoster" id="largePoster" value={movie.largePoster} onChange={
                        setMovie({
                            ...movie,
                            largePoster:event.target.value

                        })
                    }/>
                </div>

                <div>
                    <label htmlFor="priceRent">Rent Price</label>
                    <input type="text" name="priceRent" id="priceRent" value={movie.priceRent} onChange={
                        setMovie({
                            ...movie,
                            priceRent:event.target.value
                        })
                    }/>
                </div>

                <div>
                    <label htmlFor="pricePurchase">Purchase Price</label>
                    <input type="text" name="pricePurchase" id="pricePurchase" value={movie.pricePurchase} onChange={
                        setMovie({
                            ...movie,
                            pricePurchase:event.target.value
                        })
                    }/>
                </div>

                <div>
                <label>Featured</label>
                <div>
                    <input type="radio" id="isFeaturedTrue" name="isFeatured" value={movie.isFeatured=true} onChange={
                         setMovie({
                            ...movie,
                            isFeatured: event.target.value === 'true'
                        })
                    }/>
                    <label htmlFor="isFeaturedTrue">True</label>
                </div>
                <div>
                    <input type="radio" id="isFeaturedFalse" name="isFeatured" value={movie.isFeatured=false} checked onChange={
                         setMovie({
                            ...movie,
                            isFeatured: event.target.value === 'false'
                        })
                    }/>
                    <label htmlFor="isFeaturedFalse">False</label>
                </div>
                </div>


                <button type="submit">Create a Movie</button>

                </form>

        </div>
    )
}
export default AddMovie;