// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router();
const CelebrityModel = require('../models/Celebrity.model');

// all your GET routes here
router.get('/celebrities', (req, res, next) => {
    CelebrityModel.find()
      .then((celebrities) => {
        res.render('celebrities/celebrities.hbs', { celebrities });
      })
      .catch(() => {
        next('Failed loading the list');
      });
  });

  router.get('/celebrities/create', (req, res, next) => {
    res.render('celebrities/new-celebrity.hbs');
  });

// Handles POST requests to `/todos/create`
router.post('/celebrities/create', (req, res, next) => {
    let { name, occupation, catchPhrase } = req.body;
  
    CelebrityModel.create({ name, occupation, catchPhrase })
      .then(() => {
        res.redirect('/celebrities');
      })
      .catch(() => {
        res.render('celebrities/new-celebrity');
      });
  });
  
 
  

module.exports = router;