const fs = require('fs');
const path = require('path');
const dbPath = path.join(__dirname, '..', 'db', 'db.json');


const getMovies = () => {
  const dbData = fs.readFileSync(dbPath);
  const data = JSON.parse(dbData);
  return data.movies;
};
const getMovieById = (id) => {
    const dbData = fs.readFileSync(dbPath);
    const data = JSON.parse(dbData);
    const movie = data.movies.find(movie => movie.id === id);
    return movie;
  };

module.exports = (req, res) => {
    switch (req.method) {
        case 'GET':
          const movieId = req.query.id; 
          if (movieId) {
            const movie = getMovieById(movieId);
            if (movie) {
              res.json(movie);
            } else {
              res.status(404).send('Movie not found');
            }
          } else {
            res.json(getMovies());
          }
          break;
        default:
          res.status(405).end(); // Method Not Allowed
          break;
      }
    };
