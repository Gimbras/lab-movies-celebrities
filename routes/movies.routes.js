// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const MovieModel = require('../models/Movie.model');

// all your routes here
router.get('/movies', (req, res, next) => {
    MovieModel.find()
      .then((movies) => {
        res.render('movies/movies.hbs', { movies });
      })
      .catch(() => {
        next('Failed loading the list');
      });
  });
  
  router.get('/movies/create', (req, res, next) => {
    res.render('movies/new-movie.hbs');
  });
  
  router.post('/movies/create', (req, res, next) => {
    let { title, genre, plot, cast } = req.body;
  
    MovieModel.create({ title, genre, plot, cast })
      .then(() => {
        res.redirect('/movies');
      })
      .catch(() => {
        next('Movie list failed!');
      });
  });
  
  router.get('/movies/:id', (req, res, next) => {
    const { id } = req.params;
  
    MovieModel.findById(id)
      .populate('id')
      .then(() => {
        res.render('/movies/movie-details ');
      })
      .catch(() => {
        next('Movie id failed!');
      });
  });

module.exports = router;