const { Schema,model } = require('mongoose');

require('./celebrity.model');

const MovieSchema = new Schema({
  title: String,
  genre: String,
  plot: String,
  
  cast: {
    
    type:[ Schema.Types.ObjectId],
    ref: 'Celebrity',
  },
});

const MovieModel = model('Movie', MovieSchema);

module.exports = MovieModel;