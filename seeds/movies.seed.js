require('../db');
const mongoose = require('mongoose');

let MoviesModel = require('models/Movies.model');

MoviesModel.insertMany([
  { title: 'Tom Hanks', genre: 'actor', plot: 'asd', cast: ['abc'] },
  { title: 'Jay-z', genre: 'singer', plot: 'asd', cast: ['abc'] },
  { title: 'Duck duff', genre: 'comedian', plot: 'asd', cast: ['abc'] },
])
  .then(() => {
    console.log('Data inserted');
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log('Error ', err);
    mongoose.connection.close();
  });