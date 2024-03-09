const express = require('express');
const path = require('path');
const movies = require('./api/movies'); 
const tvs = require('./api/tvs');     

const app = express();

app.use(express.static(path.join(__dirname, 'build')));



app.get('/movies', movies.getAllMovies); 
app.get('/movies/:id', movies.getMovieById); 
app.get('/tvs', tvs.getAllTVShows); 
app.get('/tvs/:id', tvs.getTVShowById); 


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
